"use client"

import { Label } from "@/registry/mono-ui/ui/label"
import { Input } from "@/registry/mono-ui/ui/input"

export function LabelDemo() {
  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[120px] items-center justify-center p-6">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="label-demo">Email</Label>
          <Input type="email" id="label-demo" placeholder="name@example.com" />
        </div>
      </div>
    </div>
  )
}
