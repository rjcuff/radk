import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { MobileNav } from "./mobile-nav"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center px-4 sm:px-6">
        <MobileNav />
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="radk" width={24} height={24} className="rounded-sm" />
          <span className="text-sm font-bold">radk</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/docs"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="/docs/components/button"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Components
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-1">
          <a
            href="https://github.com/rjcuff/radk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
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
