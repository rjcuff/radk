# Contributing to radk

Thanks for your interest in contributing! radk is a neobrutalism component library built on Radix UI and Tailwind CSS v4.

## How to contribute

### Reporting bugs

Open an issue with a clear description of the bug, steps to reproduce, and your environment (OS, Node version, browser).

### Requesting components

Open an issue with the component name, a brief description of its use case, and any relevant examples or references.

### Submitting a pull request

1. Fork the repository and create a branch from `master`
2. Run `pnpm install` to install dependencies
3. Make your changes following the conventions below
4. Run `pnpm typecheck` and `pnpm lint` — both must pass
5. Open a pull request with a clear description of what changed and why

## Development setup

**Requirements:** Node 18+, pnpm 9+

```bash
git clone https://github.com/your-username/radk
cd radk
pnpm install
pnpm dev        # start docs site at localhost:3000
pnpm typecheck  # TypeScript check
pnpm lint       # ESLint
```

## Adding a new component

1. Create `apps/www/registry/radk/ui/<name>.tsx` — follow the conventions below
2. Add an entry to `apps/www/registry.json`
3. Add `apps/www/content/docs/components/<name>.mdx` with frontmatter + usage examples
4. Add a demo in `apps/www/components/docs/<name>-demo.tsx`
5. Import and register the demo in `apps/www/app/docs/[[...slug]]/page.tsx`
6. Add the doc path to `apps/www/content/docs/meta.json`
7. Run `pnpm registry:build` to regenerate the public registry

## Component conventions

- `React.forwardRef` on every component
- Named TypeScript prop interfaces (e.g. `ButtonProps`)
- `cn()` from `@/lib/utils` for className composition
- `data-slot="component-name"` attribute on root elements
- Radix UI primitives as the interactive base where applicable
- Named exports only — no default exports
- Neobrutalism styling: `border-2 border-foreground`, `shadow-[4px_4px_0_0_var(--neo-shadow-color)]`, sharp corners (`--radius: 0px`)

## Design system

The neobrutalism aesthetic uses:
- Thick 2px solid borders: `border-2 border-foreground`
- Offset box shadows: `shadow-[4px_4px_0_0_var(--neo-shadow-color)]`
- Hover: shadow shifts + translate `hover:translate-x-[2px] hover:translate-y-[2px]`
- Active: shadow removed + full translate `active:translate-x-[4px] active:translate-y-[4px]`
- Zero border radius via `--radius: 0px`

## Code style

- No comments unless behavior is non-obvious
- Functions under 50 lines
- Files under 800 lines — extract if larger
- No `console.log` in committed code

## License

By contributing you agree that your changes will be licensed under the [MIT License](LICENSE).
