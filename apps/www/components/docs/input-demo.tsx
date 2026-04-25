"use client"

import * as React from "react"
import { Input } from "@/registry/radk/ui/input"
import { Label } from "@/registry/radk/ui/label"
import { Button } from "@/registry/radk/ui/button"

export function InputDemo() {
  const [disabled, setDisabled] = React.useState(false)
  const [type, setType] = React.useState("text")

  const types = ["text", "email", "password", "number"] as const

  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[150px] items-center justify-center p-6 sm:p-10">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="demo-input">Email</Label>
          <Input
            id="demo-input"
            type={type}
            placeholder="name@example.com"
            disabled={disabled}
          />
        </div>
      </div>
      <div className="border-t border-border bg-muted/30 p-4 space-y-4">
        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">Type</Label>
          <div className="flex flex-wrap gap-1.5">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  type === t
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <label className="flex items-center gap-2 text-xs">
          <input
            type="checkbox"
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
            className="rounded"
          />
          Disabled
        </label>
      </div>
    </div>
  )
}
