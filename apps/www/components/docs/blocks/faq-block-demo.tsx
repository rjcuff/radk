"use client"

import { FaqBlock } from "@/registry/radk/blocks/faq"

export function FaqBlockDemo() {
  return (
    <div className="not-prose my-6 border-2 border-foreground overflow-hidden">
      <FaqBlock />
    </div>
  )
}
