"use client"

import { Switch } from "@/registry/mono-ui/ui/switch"
import { Label } from "@/registry/mono-ui/ui/label"

export function SwitchDemo() {
  return (
    <div className="not-prose my-6 flex flex-col gap-4 rounded-lg border border-border p-6 sm:p-10">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="notifications" defaultChecked />
        <Label htmlFor="notifications">Push Notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-switch" disabled />
        <Label htmlFor="disabled-switch" className="opacity-50">
          Disabled
        </Label>
      </div>
    </div>
  )
}
