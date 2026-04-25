import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { MobileNav } from "./mobile-nav"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-foreground bg-background">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center px-4 sm:px-6">
        <MobileNav />
        <Link href="/" className="mr-6 flex items-center gap-2">
          <span className="text-sm font-black tracking-tight">radk</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <Link
            href="/docs"
            className="px-3 py-1.5 font-bold border-2 border-transparent hover:border-foreground hover:shadow-[2px_2px_0_0_var(--neo-shadow-color)] transition-all"
          >
            Docs
          </Link>
          <Link
            href="/docs/components/button"
            className="px-3 py-1.5 font-bold border-2 border-transparent hover:border-foreground hover:shadow-[2px_2px_0_0_var(--neo-shadow-color)] transition-all"
          >
            Components
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <a
            href="https://github.com/rjcuff/radk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center border-2 border-transparent hover:border-foreground hover:shadow-[2px_2px_0_0_var(--neo-shadow-color)] transition-all"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
