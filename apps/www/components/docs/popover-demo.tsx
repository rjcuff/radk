"use client"

import { Button } from "@/registry/radk/ui/button"
import { Input } from "@/registry/radk/ui/input"
import { Label } from "@/registry/radk/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/radk/ui/popover"

export function PopoverDemo() {
  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[120px] items-center justify-center p-6">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-bold leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="popover-width">Width</Label>
                  <Input id="popover-width" defaultValue="100%" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="popover-height">Height</Label>
                  <Input id="popover-height" defaultValue="auto" className="col-span-2 h-8" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
