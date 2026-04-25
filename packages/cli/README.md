# radk-cli

CLI for adding [krux](https://krux.dev) components to your React project.

## Usage

```bash
npx radk-cli init
npx radk-cli add [component]
```

## Commands

### `init`

Set up krux in an existing project. Creates `components.json` and installs base dependencies (`clsx`, `tailwind-merge`, `class-variance-authority`).

```bash
npx radk-cli init
npx radk-cli init --yes   # skip prompts, use defaults
```

### `add`

Copy one or more components into your project.

```bash
npx radk-cli add button
npx radk-cli add button card input
npx radk-cli add button --dry-run   # preview without writing files
```

### `diff`

Show what has changed in a component since you last added it.

```bash
npx radk-cli diff button
```

## Requirements

- Node 18+
- A React project with Tailwind CSS

## License

MIT
