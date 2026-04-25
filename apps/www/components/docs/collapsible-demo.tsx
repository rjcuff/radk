"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/registry/radk/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/radk/ui/collapsible"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[120px] items-start justify-center p-6">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-64 space-y-2">
          <div className="flex items-center justify-between space-x-4">
            <h4 className="text-sm font-bold">@radk/ui starred repos</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="border-2 border-foreground px-4 py-3 text-sm font-medium shadow-[2px_2px_0_0_var(--neo-shadow-color)]">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="border-2 border-foreground px-4 py-3 text-sm font-medium shadow-[2px_2px_0_0_var(--neo-shadow-color)]">
              @radix-ui/colors
            </div>
            <div className="border-2 border-foreground px-4 py-3 text-sm font-medium shadow-[2px_2px_0_0_var(--neo-shadow-color)]">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}
