"use client"

import { Toggle } from "@/registry/mono-ui/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

export function ToggleDemo() {
  return (
    <div className="not-prose my-6 flex flex-wrap items-center justify-center gap-4 rounded-lg border border-border p-6 sm:p-10">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Outline toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="sm" aria-label="Small toggle">
        <Bold className="h-4 w-4" />
        Small
      </Toggle>
      <Toggle size="lg" aria-label="Large toggle">
        <Bold className="h-4 w-4" />
        Large
      </Toggle>
    </div>
  )
}
