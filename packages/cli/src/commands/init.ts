import { Command } from "commander"
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import path from "path"
import chalk from "chalk"
import ora from "ora"
import prompts from "prompts"
import { execa } from "execa"
import { getPackageManager } from "../utils/get-package-manager.js"

// ── Theme definitions ─────────────────────────────────────────────────────

const THEMES = {
  pink: {
    label: "Pink",
    hex: "#f472b6",
    primary: "oklch(0.76 0.2 350)",
    primaryFg: "oklch(0.07 0 0)",
  },
  green: {
    label: "Green",
    hex: "#4ade80",
    primary: "oklch(0.72 0.26 140)",
    primaryFg: "oklch(0.07 0 0)",
  },
  blue: {
    label: "Blue",
    hex: "#60a5fa",
    primary: "oklch(0.64 0.26 250)",
    primaryFg: "oklch(1 0 0)",
  },
  orange: {
    label: "Orange",
    hex: "#fb923c",
    primary: "oklch(0.78 0.22 52)",
    primaryFg: "oklch(0.07 0 0)",
  },
  purple: {
    label: "Purple",
    hex: "#c084fc",
    primary: "oklch(0.62 0.28 295)",
    primaryFg: "oklch(1 0 0)",
  },
} as const

type ThemeId = keyof typeof THEMES

// ── Prereq packages ───────────────────────────────────────────────────────

const PREREQS = [
  "clsx",
  "tailwind-merge",
  "class-variance-authority",
  "@radix-ui/react-slot",
]

// ── CSS template ──────────────────────────────────────────────────────────

function buildCss(themeId: ThemeId): string {
  const { primary, primaryFg } = THEMES[themeId]
  return `
/* ─── radk: neobrutalism theme ────────────────────────────────────────── */
:root {
  --background: oklch(0.98 0.012 90);
  --foreground: oklch(0.07 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.07 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.07 0 0);
  --primary: ${primary};
  --primary-foreground: ${primaryFg};
  --secondary: oklch(0.93 0.008 0);
  --secondary-foreground: oklch(0.07 0 0);
  --muted: oklch(0.93 0.008 0);
  --muted-foreground: oklch(0.4 0 0);
  --accent: ${primary};
  --accent-foreground: ${primaryFg};
  --destructive: oklch(0.58 0.24 25);
  --destructive-foreground: oklch(1 0 0);
  --border: oklch(0.07 0 0);
  --input: oklch(0.07 0 0);
  --ring: ${primary};
  --radius: 0px;
  --neo-shadow-color: oklch(0.07 0 0);
}

.dark {
  --background: oklch(0.22 0 0);
  --foreground: oklch(0.95 0.01 90);
  --card: oklch(0.27 0 0);
  --card-foreground: oklch(0.95 0.01 90);
  --popover: oklch(0.27 0 0);
  --popover-foreground: oklch(0.95 0.01 90);
  --primary: ${primary};
  --primary-foreground: ${primaryFg};
  --secondary: oklch(0.31 0 0);
  --secondary-foreground: oklch(0.95 0.01 90);
  --muted: oklch(0.31 0 0);
  --muted-foreground: oklch(0.62 0 0);
  --accent: ${primary};
  --accent-foreground: ${primaryFg};
  --destructive: oklch(0.58 0.24 25);
  --destructive-foreground: oklch(1 0 0);
  --border: oklch(0.95 0.01 90);
  --input: oklch(0.31 0 0);
  --ring: ${primary};
  --neo-shadow-color: oklch(0.95 0.01 90);
}

@theme inline {
  --font-sans: system-ui, -apple-system, sans-serif;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius: var(--radius);
}

@keyframes accordion-down {
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
}

@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
}

@utility animate-accordion-down {
  animation: accordion-down 200ms ease-out both;
}

@utility animate-accordion-up {
  animation: accordion-up 200ms ease-out both;
}
`
}

// ── cn() utility content ──────────────────────────────────────────────────

const CN_UTIL = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`

// ── Environment detection ─────────────────────────────────────────────────

function detectEnv(cwd: string): { framework: string | null; hasTailwind: boolean } {
  try {
    const pkg = JSON.parse(readFileSync(path.join(cwd, "package.json"), "utf-8"))
    const deps = { ...(pkg.dependencies ?? {}), ...(pkg.devDependencies ?? {}) }

    let framework: string | null = null
    if (deps["next"]) framework = "Next.js"
    else if (deps["remix"] || deps["@remix-run/react"]) framework = "Remix"
    else if (deps["@vitejs/plugin-react"] || deps["vite"]) framework = "Vite + React"
    else if (deps["react"]) framework = "React"

    return { framework, hasTailwind: "tailwindcss" in deps }
  } catch {
    return { framework: null, hasTailwind: false }
  }
}

// ── Command ───────────────────────────────────────────────────────────────

export const init = new Command("init")
  .description("Initialize radk in your project")
  .option("-y, --yes", "Skip prompts and use defaults")
  .option("-c, --cwd <cwd>", "Working directory", process.cwd())
  .action(async (opts) => {
    const cwd = path.resolve(opts.cwd)

    if (!existsSync(path.join(cwd, "package.json"))) {
      console.error(chalk.red("\n  ✖ No package.json found. Run this inside a project.\n"))
      process.exit(1)
    }

    // ── Banner ──────────────────────────────────────────────────────────
    console.log("")
    console.log("  " + chalk.bold("radk") + "  " + chalk.dim("neobrutalism UI for React"))
    console.log("  " + chalk.dim("─".repeat(36)))
    console.log("")

    // ── Environment check ────────────────────────────────────────────────
    const { framework, hasTailwind } = detectEnv(cwd)

    if (framework) {
      console.log("  " + chalk.green("✓") + " " + framework + " detected")
    } else {
      console.log("  " + chalk.yellow("△") + " No framework detected")
    }

    if (hasTailwind) {
      console.log("  " + chalk.green("✓") + " Tailwind CSS detected")
    } else {
      console.log(
        "  " + chalk.yellow("△") + " Tailwind CSS not found — " +
        chalk.dim("add it before using components")
      )
    }
    console.log("")

    // ── Defaults ─────────────────────────────────────────────────────────
    let themeId: ThemeId = "pink"
    let cssFile = "app/globals.css"
    let componentsAlias = "@/components/ui"
    let utilsAlias = "@/lib/utils"
    let installDeps = true

    if (opts.yes) {
      // Print what defaults we're using
      const t = THEMES[themeId]
      console.log("  " + chalk.dim("Using defaults:"))
      console.log("  " + chalk.dim(`  theme        ${chalk.hex(t.hex).bold("██")}  ${t.label}`))
      console.log("  " + chalk.dim(`  css          ${cssFile}`))
      console.log("  " + chalk.dim(`  components   ${componentsAlias}`))
      console.log("  " + chalk.dim(`  utils        ${utilsAlias}`))
      console.log("")
    } else {
      const response = await prompts(
        [
          {
            type: "select",
            name: "themeId",
            message: "Pick a color theme",
            choices: (Object.entries(THEMES) as [ThemeId, (typeof THEMES)[ThemeId]][]).map(
              ([id, t]) => ({
                title: chalk.hex(t.hex).bold("██") + "  " + t.label,
                value: id,
              })
            ),
            initial: 0,
          },
          {
            type: "text",
            name: "cssFile",
            message: "Global CSS file",
            initial: "app/globals.css",
          },
          {
            type: "text",
            name: "componentsAlias",
            message: "Components alias",
            initial: "@/components/ui",
          },
          {
            type: "text",
            name: "utilsAlias",
            message: "Utils alias",
            initial: "@/lib/utils",
          },
          {
            type: "confirm",
            name: "installDeps",
            message: `Install prerequisites? ${chalk.dim("(clsx · tailwind-merge · cva · @radix-ui/react-slot)")}`,
            initial: true,
          },
        ],
        {
          onCancel: () => {
            console.log(chalk.red("\n  Cancelled.\n"))
            process.exit(0)
          },
        }
      )

      themeId = (response.themeId as ThemeId) ?? "pink"
      cssFile = response.cssFile ?? "app/globals.css"
      componentsAlias = response.componentsAlias ?? "@/components/ui"
      utilsAlias = response.utilsAlias ?? "@/lib/utils"
      installDeps = response.installDeps ?? true
    }

    console.log("")

    // ── 1. components.json ────────────────────────────────────────────────
    const s1 = ora("Writing components.json").start()
    const componentsJson = {
      $schema: "https://radk.sh/schema.json",
      style: "radk",
      rsc: true,
      tsx: true,
      tailwind: {
        css: cssFile,
        baseColor: themeId,
        cssVariables: true,
      },
      aliases: {
        components: componentsAlias,
        utils: utilsAlias,
        ui: componentsAlias,
        lib: "@/lib",
        hooks: "@/hooks",
      },
      registryUrl: "https://radk.sh/r",
    }
    writeFileSync(
      path.join(cwd, "components.json"),
      JSON.stringify(componentsJson, null, 2) + "\n"
    )
    s1.succeed("components.json created")

    // ── 2. CSS variables ──────────────────────────────────────────────────
    const s2 = ora(`Injecting CSS variables → ${cssFile}`).start()
    const cssPath = path.join(cwd, cssFile)
    const cssBlock = buildCss(themeId)

    if (existsSync(cssPath)) {
      const existing = readFileSync(cssPath, "utf-8")
      if (existing.includes("--neo-shadow-color")) {
        s2.warn(`${cssFile} already has radk variables — skipped`)
      } else {
        appendFileSync(cssPath, cssBlock)
        s2.succeed(`CSS variables appended to ${cssFile}`)
      }
    } else {
      mkdirSync(path.dirname(cssPath), { recursive: true })
      writeFileSync(cssPath, `@import "tailwindcss";\n${cssBlock}`)
      s2.succeed(`${cssFile} created with CSS variables`)
    }

    // ── 3. cn() utility ──���────────────────────────────────────────────────
    const s3 = ora("Creating cn() utility").start()
    const utilsRelative = utilsAlias.replace(/^@\//, "")
    const utilsDest = path.join(cwd, "src", `${utilsRelative}.ts`)

    if (existsSync(utilsDest)) {
      s3.warn(`src/${utilsRelative}.ts already exists — skipped`)
    } else {
      mkdirSync(path.dirname(utilsDest), { recursive: true })
      writeFileSync(utilsDest, CN_UTIL)
      s3.succeed(`cn() created at src/${utilsRelative}.ts`)
    }

    // ── 4. Install dependencies ───────────────────────────────────────────
    if (installDeps) {
      const pm = getPackageManager(cwd)
      const s4 = ora(`Installing with ${pm}`).start()
      try {
        await execa(pm, ["add", ...PREREQS], { cwd })
        s4.succeed(`Installed ${PREREQS.length} packages`)
      } catch {
        s4.fail("Install failed — run manually:")
        console.log(chalk.dim(`\n    ${pm} add ${PREREQS.join(" ")}\n`))
      }
    }

    // ── Done ──────────────────────────────────────────────────────────────
    const selectedTheme = THEMES[themeId]
    console.log("")
    console.log(
      "  " + chalk.bold.green("✓ All done!") +
      "  " + chalk.dim("Theme:") + " " + chalk.hex(selectedTheme.hex).bold("██") +
      " " + selectedTheme.label
    )
    console.log("")
    console.log("  Add your first component:")
    console.log("  " + chalk.cyan("npx radk add button"))
    console.log("")
    console.log("  Browse all components + blocks:")
    console.log("  " + chalk.dim("https://radk.sh/docs"))
    console.log("")
  })
