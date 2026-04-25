import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ComponentShowcase } from "@/components/component-showcase"

export const metadata: Metadata = {
  title: "radk — Build interfaces faster. Own every pixel.",
  description:
    "Copy-paste React components built on Radix UI and Tailwind CSS. No npm packages, no lock-in. Just source code you own.",
}

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto flex max-w-screen-2xl flex-col items-center gap-3 px-4 pb-8 pt-12 sm:gap-4 sm:px-6 md:pb-12 md:pt-24 lg:pb-16 lg:pt-32">
          <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            Now in early access
            <span className="ml-1">→</span>
          </div>
          <h1 className="max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            The Best Friend Your UI Ever Had
          </h1>
          <p className="max-w-[42rem] text-center text-sm text-muted-foreground sm:text-base md:text-lg">
            Beautiful, accessible React components you copy into your project.
            Built on Radix UI and Tailwind CSS. No dependencies. Full control.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Link
              href="/docs"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Started
            </Link>
            <Link
              href="/docs/components/button"
              className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View Components
            </Link>
          </div>
        </section>

        {/* Component showcase */}
        <section className="mx-auto max-w-screen-2xl px-4 pb-12 sm:px-6 md:pb-16">
          <ComponentShowcase />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-2 px-4 py-6 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
          <p className="text-sm text-muted-foreground">
            Built by{" "}
            <a
              href="https://github.com/rjcuff"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              rjcuff
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/rjcuff/radk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
