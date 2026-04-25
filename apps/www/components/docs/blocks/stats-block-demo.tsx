"use client"

import { StatsBlock } from "@/registry/radk/blocks/stats"

export function StatsBlockDemo() {
  return (
    <div className="not-prose my-6 border-2 border-foreground overflow-hidden">
      <StatsBlock />
    </div>
  )
}
