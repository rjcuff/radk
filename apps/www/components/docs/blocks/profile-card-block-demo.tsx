"use client"

import { ProfileCardBlock } from "@/registry/radk/blocks/profile-card"

export function ProfileCardBlockDemo() {
  return (
    <div className="not-prose my-6 border-2 border-foreground overflow-hidden">
      <ProfileCardBlock />
    </div>
  )
}
