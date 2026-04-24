"use client"

import { Checkbox } from "@/registry/mono-ui/ui/checkbox"
import { Label } from "@/registry/mono-ui/ui/label"

export function CheckboxDemo() {
  return (
    <div className="not-prose my-6 flex flex-col gap-4 rounded-lg border border-border p-6 sm:p-10">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="default" defaultChecked />
        <Label htmlFor="default">Checked by default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled" className="opacity-50">
          Disabled
        </Label>
      </div>
    </div>
  )
}
