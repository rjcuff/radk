"use client"

import * as React from "react"
import { Button } from "@/registry/radk/ui/button"
import { Label } from "@/registry/radk/ui/label"
import { Loader2, Mail, Plus } from "lucide-react"

const variants = ["default", "destructive", "outline", "secondary", "ghost", "link"] as const
const sizes = ["default", "sm", "lg", "icon"] as const

export function ButtonDemo() {
  const [variant, setVariant] = React.useState<(typeof variants)[number]>("default")
  const [size, setSize] = React.useState<(typeof sizes)[number]>("default")
  const [disabled, setDisabled] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[150px] items-center justify-center p-6 sm:p-10">
        <Button variant={variant} size={size} disabled={disabled || loading}>
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {size === "icon" ? <Plus className="h-4 w-4" /> : loading ? "Loading..." : "Button"}
        </Button>
      </div>
      <div className="border-t border-border bg-muted/30 p-4 space-y-4">
        <div className="space-y-2">
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
        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">Size</Label>
          <div className="flex flex-wrap gap-1.5">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  size === s
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-xs">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
              className="rounded"
            />
            Disabled
          </label>
          <label className="flex items-center gap-2 text-xs">
            <input
              type="checkbox"
              checked={loading}
              onChange={(e) => setLoading(e.target.checked)}
              className="rounded"
            />
            Loading
          </label>
        </div>
      </div>
    </div>
  )
}
