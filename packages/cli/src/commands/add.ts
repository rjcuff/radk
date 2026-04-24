import { Command } from "commander"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import path from "path"
import chalk from "chalk"
import ora from "ora"
import { execa } from "execa"
import { resolveRegistryItems } from "../registry/resolver.js"
import { componentsJsonSchema } from "../registry/schema.js"
import { getPackageManager } from "../utils/get-package-manager.js"

export const add = new Command("add")
  .description("Add components to your project")
  .argument("[components...]", "Components to add")
  .option("-c, --cwd <cwd>", "Working directory", process.cwd())
  .option("-y, --yes", "Skip confirmation")
  .option("--dry-run", "Show what would be installed without writing files")
  .action(async (components: string[], opts) => {
    const cwd = path.resolve(opts.cwd)
    const configPath = path.join(cwd, "components.json")

    if (!existsSync(configPath)) {
      console.error(chalk.red("components.json not found. Run `mono-ui init` first."))
      process.exit(1)
    }

    const raw = JSON.parse(readFileSync(configPath, "utf-8"))
    const config = componentsJsonSchema.parse(raw)

    if (!components.length) {
      console.error(chalk.red("Specify at least one component: mono-ui add button"))
      process.exit(1)
    }

    const spinner = ora(`Resolving ${components.join(", ")}`).start()
    let items
    try {
      items = await resolveRegistryItems(components, config.registryUrl)
      spinner.succeed(`Resolved ${items.length} component(s)`)
    } catch (err) {
      spinner.fail(String(err))
      process.exit(1)
    }

    const allDeps = [...new Set(items.flatMap((i) => i.dependencies ?? []))]

    if (opts.dryRun) {
      console.log(chalk.bold("\n[dry-run] Would install:"))
      items.forEach((item) => {
        console.log(chalk.cyan(`  ${item.name}`))
        item.files?.forEach((f) => console.log(chalk.dim(`    → ${f.path}`)))
      })
      if (allDeps.length) {
        console.log(chalk.bold("\n[dry-run] npm deps:"))
        allDeps.forEach((d) => console.log(chalk.dim(`  ${d}`)))
      }
      return
    }

    for (const item of items) {
      for (const file of item.files ?? []) {
        if (!file.content) continue
        const uiDir = path.join(cwd, "src", "components", "ui")
        mkdirSync(uiDir, { recursive: true })
        const dest = path.join(uiDir, path.basename(file.path))
        writeFileSync(dest, file.content)
        console.log(chalk.green(`  ✓ ${path.basename(dest)}`))
      }
    }

    if (allDeps.length) {
      const pm = getPackageManager(cwd)
      const depSpinner = ora("Installing npm dependencies").start()
      try {
        await execa(pm, ["add", ...allDeps], { cwd })
        depSpinner.succeed("Dependencies installed")
      } catch {
        depSpinner.fail("Failed to install — run manually:")
        console.log(chalk.dim(`  ${allDeps.join(" ")}`))
      }
    }

    console.log(chalk.green("\nDone!\n"))
  })
