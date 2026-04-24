"use client"

import * as React from "react"
import { Badge } from "@/registry/mono-ui/ui/badge"
import { Label } from "@/registry/mono-ui/ui/label"

const variants = ["default", "secondary", "destructive", "outline"] as const

export function BadgeDemo() {
  const [variant, setVariant] = React.useState<(typeof variants)[number]>("default")

  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[120px] items-center justify-center p-6">
        <Badge variant={variant}>Badge</Badge>
      </div>
      <div className="border-t border-border bg-muted/30 p-4 space-y-2">
        <Label className="text-xs text-muted-foreground">Variant</Label>
        <div className="flex flex-wrap gap-1.5">
          {variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                variant === v
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
