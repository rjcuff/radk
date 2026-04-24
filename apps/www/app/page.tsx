import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground">mono-ui</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Beautifully designed components. Copy. Paste. Customize.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/docs"
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Get Started
        </Link>
        <a
          href="https://github.com/rjcuff/mono-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
        >
          GitHub
        </a>
      </div>
      <div className="mt-8 max-w-md rounded-lg border border-border bg-card p-4">
        <p className="text-sm text-muted-foreground mb-2">Install components via CLI:</p>
        <code className="block rounded bg-muted px-3 py-2 text-sm font-mono text-foreground">
          npx mono-ui add button
        </code>
      </div>
    </main>
  )
}
