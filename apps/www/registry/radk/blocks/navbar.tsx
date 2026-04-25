"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/registry/radk/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/registry/radk/ui/sheet"

const navLinks = [
  { label: "Components", href: "#" },
  { label: "Blocks", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Changelog", href: "#" },
]

export function NavbarBlock() {
  return (
    <header className="border-b-2 border-foreground shadow-[0_4px_0_0_var(--neo-shadow-color)] bg-background">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tight">
          radk
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" className="hidden md:inline-flex">
            Get Started
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="mt-6 flex flex-col gap-1">
                <a href="#" className="mb-4 text-xl font-black tracking-tight">
                  radk
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="py-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button size="sm" className="mt-4 w-full">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
