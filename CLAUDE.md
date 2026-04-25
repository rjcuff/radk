# radk UI Library

A neobrutalism copy-paste component library built on Radix UI + Tailwind CSS v4, with a Next.js documentation site and a CLI tool for adding components to user projects.

## Architecture

Pnpm monorepo orchestrated with Turbo:

```
ui-library/
├── apps/
│   └── www/                    # Next.js 15 docs + component showcase site
│       ├── app/                # App Router pages and layouts
│       ├── components/         # Site-level components (navbar, theme toggle)
│       ├── content/docs/       # MDX documentation pages
│       ├── registry/radk/ui/   # SOURCE OF TRUTH for all components
│       ├── public/r/           # Built registry JSON (generated — do not edit)
│       ├── scripts/            # Registry build script (build-registry.mts)
│       └── registry.json       # Component metadata manifest
└── packages/
    └── cli/                    # radk-cli npm package
        └── src/
            ├── commands/       # init.ts, add.ts, diff.ts
            ├── registry/       # API, resolver, schema
            └── utils/          # cn.ts, get-package-manager.ts
```

## Commands

All commands run from the repo root with pnpm:

| Command | Description |
|---|---|
| `pnpm dev` | Start www dev server |
| `pnpm build` | Build all packages |
| `pnpm typecheck` | TypeScript check across all packages |
| `pnpm lint` | Lint all packages |
| `pnpm format` | Format with Prettier |
| `pnpm format:check` | Check formatting without writing |
| `pnpm registry:build` | Regenerate `public/r/**` from registry sources |
| `pnpm release` | Publish releases via changesets |

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15, React 19 |
| Styling | Tailwind CSS v4, CVA, clsx, tailwind-merge |
| UI Primitives | Radix UI |
| Documentation | Fumadocs (MDX-based) |
| Theming | next-themes |
| Icons | lucide-react |
| Font | Inter (Google Fonts via `next/font/google`) |
| Language | TypeScript 5.4 (strict mode) |
| Build (CLI) | tsup (CJS + ESM output) |
| Monorepo | pnpm 9 + Turbo 2 |
| Versioning | Changesets |

## Component Conventions

All components in `apps/www/registry/radk/ui/` follow these patterns:

- `React.forwardRef` on every component
- Named TypeScript prop interfaces (e.g. `ButtonProps`)
- `cn()` utility for className composition (clsx + tailwind-merge)
- CVA (`class-variance-authority`) for variant/size props
- `data-slot="component-name"` attribute on root elements
- Radix UI primitives as the interactive base
- Compound component pattern for complex components (Card, Accordion, Tabs, Dialog)
- Named exports only — no default exports
- No comments unless behavior would surprise a reader

## Design System

**Neobrutalism aesthetic:**
- `--radius: 0px` — sharp corners everywhere
- `border-2 border-foreground` — thick visible borders
- `shadow-[4px_4px_0_0_var(--neo-shadow-color)]` — bold offset box shadow
- Hover state: shadow shifts position; active state: shadow removed

**Colors:** OKLCH color space CSS variables defined in `apps/www/app/globals.css`. Primary is pink/magenta (`oklch(0.76 0.2 350)`). Dark mode uses `.dark` class via next-themes.

**Font:** Inter loaded via `next/font/google`, available as `--font-inter` CSS variable.

## Documentation System

Docs use Fumadocs with MDX. The `[[...slug]]` route at `app/docs/[[...slug]]/page.tsx` catches all doc URLs. Content lives in `content/docs/`. Custom MDX components (e.g. `<ButtonDemo />`, `<ComponentPreview />`) are registered in the page renderer to enable live previews inline in docs.

## Adding a New Component

1. Create `apps/www/registry/radk/ui/<name>.tsx` following existing component conventions
2. Add an entry to `apps/www/registry.json` with name, type, dependencies, and files
3. Add `apps/www/content/docs/components/<name>.mdx` with frontmatter + usage examples
4. Run `pnpm registry:build` to regenerate the public registry JSON

## CLI Package

Source in `packages/cli/src/`. Built with tsup to `dist/` (CJS + ESM). Key commands:
- `radk init` — initialize radk config in a user's project
- `radk add <component>` — copy a component into the user's project
- `radk diff` — show diff between local and registry versions

## Deployment & Publishing

- **Vercel:** Deploys `apps/www` only via `pnpm --filter www build`. Config at root `vercel.json`.
- **CI:** GitHub Actions runs build + typecheck + lint on every push/PR to `main`.
- **npm releases:** Changesets manages versioning. `pnpm release` publishes `radk-cli`. The `www` app is excluded from publishing.
