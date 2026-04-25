import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HeroBlock } from "@/registry/radk/blocks/hero"
import { ThemeColorSwitcher } from "@/components/theme-color-switcher"

export const metadata: Metadata = {
  title: "radk — Build interfaces faster. Own every pixel.",
  description:
    "Copy-paste React components built on Radix UI and Tailwind CSS. No npm packages, no lock-in. Just source code you own.",
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 items-center justify-center">
        <HeroBlock>
          <ThemeColorSwitcher />
        </HeroBlock>
      </main>
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
