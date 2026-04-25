"use client"

import { PricingBlock } from "@/registry/radk/blocks/pricing"

export function PricingBlockDemo() {
  return (
    <div className="not-prose my-6 border-2 border-foreground overflow-hidden">
      <PricingBlock />
    </div>
  )
}
