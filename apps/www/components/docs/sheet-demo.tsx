"use client"

import { Button } from "@/registry/radk/ui/button"
import { Input } from "@/registry/radk/ui/input"
import { Label } from "@/registry/radk/ui/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/radk/ui/sheet"

export function SheetDemo() {
  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[120px] items-center justify-center gap-3 p-6 flex-wrap">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button variant="outline">{side}</Button>
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={`sheet-name-${side}`} className="text-right">Name</Label>
                  <Input id={`sheet-name-${side}`} defaultValue="John Doe" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor={`sheet-username-${side}`} className="text-right">Username</Label>
                  <Input id={`sheet-username-${side}`} defaultValue="@johndoe" className="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <Button type="submit">Save changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </div>
  )
}
