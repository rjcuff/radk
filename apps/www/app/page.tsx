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
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <Navbar />

      {/* Single-viewport layout */}
      <main className="flex flex-1 overflow-hidden">
        {/* Left — hero */}
        <div className="flex w-full flex-col justify-center px-8 py-10 sm:px-12 lg:w-1/2 lg:border-r-2 lg:border-foreground xl:px-16">
          <div className="inline-flex w-fit items-center border-2 border-foreground px-2.5 py-1 text-xs font-bold shadow-[2px_2px_0_0_var(--neo-shadow-color)] mb-6">
            Early access
          </div>
          <h1 className="text-4xl font-black leading-none tracking-tighter sm:text-5xl xl:text-6xl">
            The Best Friend<br />Your UI Ever Had
          </h1>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground sm:text-base">
            Accessible React components you copy into your project. Built on Radix UI and Tailwind CSS. No lock-in. Full control.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/docs"
              className="inline-flex h-11 items-center border-2 border-foreground bg-primary px-6 text-sm font-bold text-primary-foreground shadow-[4px_4px_0_0_var(--neo-shadow-color)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--neo-shadow-color)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              Get Started
            </Link>
            <Link
              href="/docs/components/button"
              className="inline-flex h-11 items-center border-2 border-foreground bg-background px-6 text-sm font-bold text-foreground shadow-[4px_4px_0_0_var(--neo-shadow-color)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--neo-shadow-color)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              Components
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <span className="hidden sm:inline">21 Components</span>
            <span className="hidden sm:inline text-border">—</span>
            <span className="hidden sm:inline">TypeScript</span>
            <span className="hidden sm:inline text-border">—</span>
            <span>Open Source</span>
          </div>
        </div>

        {/* Right — live showcase */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center overflow-hidden px-8 py-10 xl:px-12">
          <ComponentShowcase />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-foreground bg-foreground text-background">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-3">
          <p className="text-xs font-bold">
            Built by{" "}
            <a href="https://github.com/rjcuff" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">
              rjcuff
            </a>
            {" "}· Source on{" "}
            <a href="https://github.com/rjcuff/radk" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">
              GitHub
            </a>
          </p>
          <p className="text-xs font-bold uppercase tracking-widest opacity-50">radk © 2025</p>
        </div>
      </footer>
    </div>
  )
}
