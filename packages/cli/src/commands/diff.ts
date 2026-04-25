import { Command } from "commander"
import { existsSync, readFileSync } from "fs"
import path from "path"
import chalk from "chalk"
import { fetchRegistryItem } from "../registry/api.js"
import { componentsJsonSchema } from "../registry/schema.js"

export const diff = new Command("diff")
  .description("Show differences between local and registry components")
  .argument("<component>", "Component to diff")
  .option("-c, --cwd <cwd>", "Working directory", process.cwd())
  .action(async (component: string, opts) => {
    const cwd = path.resolve(opts.cwd)
    const configPath = path.join(cwd, "components.json")

    if (!existsSync(configPath)) {
      console.error(chalk.red("components.json not found. Run `krux init` first."))
      process.exit(1)
    }

    const raw = JSON.parse(readFileSync(configPath, "utf-8"))
    const config = componentsJsonSchema.parse(raw)

    const item = await fetchRegistryItem(component, config.registryUrl)

    for (const file of item.files ?? []) {
      if (!file.content) continue
      const localPath = path.join(cwd, "src", "components", "ui", path.basename(file.path))

      if (!existsSync(localPath)) {
        console.log(chalk.yellow(`  ${component}: not installed locally`))
        continue
      }

      const local = readFileSync(localPath, "utf-8")
      if (local === file.content) {
        console.log(chalk.green(`  ${component}: up to date`))
      } else {
        console.log(chalk.red(`  ${component}: differs from registry`))
        console.log(chalk.dim("  Run `krux add --yes ${component}` to update"))
      }
    }
  })
