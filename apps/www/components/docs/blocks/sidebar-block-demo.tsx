"use client"

import { SidebarBlock } from "@/registry/radk/blocks/sidebar"

export function SidebarBlockDemo() {
  return (
    <div className="not-prose my-6 border-2 border-foreground overflow-hidden h-[500px] flex">
      <SidebarBlock />
    </div>
  )
}
