# radk

Beautiful, accessible React components you copy into your project. Built on Radix UI and Tailwind CSS. No dependencies. Full control.

## What is radk?

radk is a component library where you own the source code. Instead of installing a package, you use the CLI to copy component files directly into your project — the same approach as shadcn/ui, but with radk's design system: slate-blue palette, sharp radius, and clean typography.

## Packages

| Package | Description |
|---------|-------------|
| `radk-cli` | CLI tool for initializing and adding components |
| `apps/www` | Documentation site (Next.js + Fumadocs) |

## CLI Quick Start

```bash
npx radk-cli init
npx radk-cli add button
```

## Components

Accordion · Alert · Avatar · Badge · Button · Card · Checkbox · Dialog · Dropdown Menu · Input · Label · Progress · Select · Separator · Skeleton · Spinner · Switch · Tabs · Textarea · Toggle · Tooltip

## Development

Requires pnpm and Node 18+.

```bash
pnpm install
pnpm dev        # start all packages in watch mode
pnpm build      # build everything
pnpm typecheck  # type-check all packages
```

## License

MIT
