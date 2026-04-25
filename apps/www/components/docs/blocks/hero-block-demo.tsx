"use client"

import { HeroBlock } from "@/registry/radk/blocks/hero"

export function HeroBlockDemo() {
  return (
    <div className="not-prose my-6 border-2 border-foreground overflow-hidden">
      <HeroBlock />
    </div>
  )
}
