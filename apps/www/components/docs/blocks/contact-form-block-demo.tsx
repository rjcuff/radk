"use client"

import { ContactFormBlock } from "@/registry/radk/blocks/contact-form"

export function ContactFormBlockDemo() {
  return (
    <div className="not-prose my-6 border-2 border-foreground overflow-hidden">
      <ContactFormBlock />
    </div>
  )
}
