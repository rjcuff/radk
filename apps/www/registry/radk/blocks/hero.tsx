"use client"

import * as React from "react"
import { Badge } from "@/registry/radk/ui/badge"
import { Button } from "@/registry/radk/ui/button"
import { Avatar, AvatarFallback } from "@/registry/radk/ui/avatar"

interface HeroBlockProps {
  children?: React.ReactNode
}

export function HeroBlock({ children }: HeroBlockProps) {
  return (
    <section className="py-20 px-6 text-center">
      <div className="mx-auto max-w-3xl space-y-6">
        <Badge variant="outline">Open Source</Badge>
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
          Build interfaces faster.{" "}
          <span className="text-primary">Own every pixel.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Copy-paste React components built on Radix UI and Tailwind CSS. No npm
          packages, no lock-in. Just source code you own.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="/docs/installation">Get Started</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/docs/components/button">View Components</a>
          </Button>
        </div>
        <div className="flex items-center justify-center pt-2">
          {children ?? (
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <Avatar key={letter} className="h-8 w-8 border-2 border-background">
                    <AvatarFallback className="text-xs">{letter}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">2,500+</span> developers
                using radk
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
