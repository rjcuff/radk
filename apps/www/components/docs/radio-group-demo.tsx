"use client"

import { Label } from "@/registry/radk/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/radk/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[120px] items-center justify-center p-6">
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="rg-default" />
            <Label htmlFor="rg-default">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="rg-comfortable" />
            <Label htmlFor="rg-comfortable">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="rg-compact" />
            <Label htmlFor="rg-compact">Compact</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
