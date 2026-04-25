"use client"

import * as React from "react"
import { Combobox } from "@/registry/radk/ui/combobox"

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "astro", label: "Astro" },
  { value: "remix", label: "Remix" },
  { value: "svelte", label: "Svelte" },
  { value: "solidjs", label: "SolidJS" },
]

export function ComboboxDemo() {
  const [value, setValue] = React.useState("")

  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[150px] flex-col items-center justify-center gap-4 p-6">
        <Combobox
          options={frameworks}
          value={value}
          onValueChange={setValue}
          placeholder="Select a framework..."
          searchPlaceholder="Search frameworks..."
          emptyMessage="No framework found."
        />
        {value && (
          <p className="text-sm text-muted-foreground">
            Selected: {frameworks.find((f) => f.value === value)?.label}
          </p>
        )}
      </div>
    </div>
  )
}
