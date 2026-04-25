import { Command } from "commander"
import { existsSync, readFileSync, writeFileSync } from "fs"
import path from "path"
import chalk from "chalk"
import ora from "ora"
import prompts from "prompts"
import { execa } from "execa"
import { getPackageManager } from "../utils/get-package-manager.js"

export const init = new Command("init")
  .description("Initialize krux in your project")
  .option("-y, --yes", "Skip prompts and use defaults")
  .option("-c, --cwd <cwd>", "Working directory", process.cwd())
  .action(async (opts) => {
    const cwd = path.resolve(opts.cwd)

    if (!existsSync(path.join(cwd, "package.json"))) {
      console.error(chalk.red("No package.json found. Run this inside a project."))
      process.exit(1)
    }

    console.log(chalk.bold("\nInitializing krux...\n"))

    let answers: { tailwindCss: string; components: string; utils: string } = {
      tailwindCss: "app/globals.css",
      components: "@/components",
      utils: "@/lib/utils",
    }

    if (!opts.yes) {
      const response = await prompts([
        {
          type: "text",
          name: "tailwindCss",
          message: "Where is your global CSS file?",
          initial: "app/globals.css",
        },
        {
          type: "text",
          name: "components",
          message: "Configure the components alias:",
          initial: "@/components",
        },
        {
          type: "text",
          name: "utils",
          message: "Configure the utils alias:",
          initial: "@/lib/utils",
        },
      ])
      answers = response as typeof answers
    }

    const componentsJson = {
      $schema: "https://krux.dev/schema.json",
      style: "krux",
      rsc: true,
      tsx: true,
      tailwind: {
        css: answers.tailwindCss,
        baseColor: "slate-blue",
        cssVariables: true,
      },
      aliases: {
        components: answers.components,
        utils: answers.utils,
        ui: `${answers.components}/ui`,
        lib: "@/lib",
        hooks: "@/hooks",
      },
      registryUrl: "https://krux.dev/r",
    }

    const spinner = ora("Writing components.json").start()
    writeFileSync(
      path.join(cwd, "components.json"),
      JSON.stringify(componentsJson, null, 2) + "\n"
    )
    spinner.succeed("components.json created")

    const pm = getPackageManager(cwd)
    const installSpinner = ora("Installing dependencies").start()
    try {
      await execa(pm, ["add", "clsx", "tailwind-merge", "class-variance-authority"], {
        cwd,
      })
      installSpinner.succeed("Dependencies installed")
    } catch {
      installSpinner.fail("Failed to install dependencies — install manually:")
      console.log(chalk.dim("  clsx tailwind-merge class-variance-authority"))
    }

    console.log(chalk.green("\nDone! Run `krux add button` to add your first component.\n"))
  })
