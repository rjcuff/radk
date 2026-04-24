import Link from "next/link"
import { ArrowRight, Github, Terminal, Layers, Paintbrush, Code2, Zap, Package } from "lucide-react"

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Subtle grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              Introducing mono-ui v0.1
            </span>
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-3xl text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Build interfaces faster.{" "}
            <span className="text-primary">Own every pixel.</span>
          </h1>

          {/* Sub-description */}
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            Beautifully crafted components built on Radix UI and Tailwind CSS.
            Copy the source code directly into your project — no black-box packages,
            no lock-in, full control.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/docs"
              className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-[var(--radius)] bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href="https://github.com/rjcuff/mono-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-[var(--radius)] border border-border bg-background px-6 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </a>
          </div>

          {/* Install snippet */}
          <div className="mx-auto mt-12 max-w-lg">
            <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-card shadow-sm">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/50" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" aria-hidden />
                <span className="ml-2 text-xs text-muted-foreground">terminal</span>
              </div>
              <div className="space-y-1.5 px-4 py-3 font-mono text-sm">
                <p className="text-muted-foreground">
                  <span className="select-none text-muted-foreground/50 mr-2">$</span>
                  <span className="text-foreground">npx mono-ui init</span>
                </p>
                <p className="text-muted-foreground">
                  <span className="select-none text-muted-foreground/50 mr-2">$</span>
                  <span className="text-foreground">npx mono-ui add button card dialog</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Everything you need
          </h2>
          <p className="mt-3 text-muted-foreground">
            Designed like shadcn/ui. Styled as your own.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* Component preview strip */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                13 components. Ready to ship.
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Add what you need. Skip the rest.
              </p>
            </div>
            <Link
              href="/docs/components/button"
              className="hidden items-center gap-1 text-sm text-primary hover:underline sm:flex"
            >
              Browse all <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
          <ComponentGrid />
        </div>
      </section>

      {/* CTA banner */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[var(--radius)] border border-border bg-card px-8 py-12 text-center shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Start building today
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              One command to scaffold. One command per component. Your code, your rules.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/docs"
                className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-[var(--radius)] bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Read the docs
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/docs/components/button"
                className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-[var(--radius)] border border-border bg-background px-6 text-sm font-medium text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                View components
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            Built by{" "}
            <a
              href="https://github.com/rjcuff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              rjcuff
            </a>
            . Source code on{" "}
            <a
              href="https://github.com/rjcuff/mono-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              GitHub
            </a>
            .
          </p>
          <p className="text-xs">MIT License</p>
        </div>
      </footer>
    </main>
  )
}

const features = [
  {
    icon: Code2,
    title: "Copy & own the code",
    description:
      "Components live in your repo. Tweak styles, add props, delete what you don't need. No version mismatches.",
  },
  {
    icon: Paintbrush,
    title: "Slate-blue design system",
    description:
      "Tuned color palette using OKLch for perceptually uniform dark and light mode. CSS variables everywhere.",
  },
  {
    icon: Terminal,
    title: "CLI-first workflow",
    description:
      "npx mono-ui init wires up your project. npx mono-ui add <name> drops in any component in seconds.",
  },
  {
    icon: Layers,
    title: "Radix UI primitives",
    description:
      "Accessible foundations from Radix. Focus traps, ARIA attributes, and keyboard nav handled for you.",
  },
  {
    icon: Zap,
    title: "Tailwind v4 ready",
    description:
      "Built for Tailwind CSS v4 with @theme inline and CSS variable-based tokens. Works with v3 too.",
  },
  {
    icon: Package,
    title: "Dependency-light",
    description:
      "Only Radix UI, CVA, clsx, and tailwind-merge. No heavy runtime — components are just TSX files.",
  },
]

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="group rounded-[var(--radius)] border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[var(--radius)] bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

const componentList = [
  "button",
  "badge",
  "card",
  "input",
  "label",
  "separator",
  "skeleton",
  "avatar",
  "tabs",
  "tooltip",
  "dialog",
  "select",
  "dropdown-menu",
]

function ComponentGrid() {
  return (
    <div className="flex flex-wrap gap-2">
      {componentList.map((name) => (
        <Link
          key={name}
          href={`/docs/components/${name}`}
          className="inline-flex items-center rounded-[var(--radius)] border border-border bg-background px-3 py-1.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
        >
          {name}
        </Link>
      ))}
    </div>
  )
}
