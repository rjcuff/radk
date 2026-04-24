"use client"

import { Textarea } from "@/registry/mono-ui/ui/textarea"
import { Label } from "@/registry/mono-ui/ui/label"

export function TextareaDemo() {
  return (
    <div className="not-prose my-6 flex flex-col gap-4 rounded-lg border border-border p-6 sm:p-10">
      <div className="grid gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Type your message here." />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="disabled-ta">Disabled</Label>
        <Textarea id="disabled-ta" placeholder="Disabled textarea." disabled />
      </div>
    </div>
  )
}
