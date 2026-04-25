"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/radk/ui/command"

export function CommandDemo() {
  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[320px] items-center justify-center p-6">
        <Command className="w-full max-w-[320px]">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="h-4 w-4" />
                Calendar
                <CommandShortcut>⌘C</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Smile className="h-4 w-4" />
                Search Emoji
                <CommandShortcut>⌘E</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Calculator className="h-4 w-4" />
                Calculator
                <CommandShortcut>⌘K</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="h-4 w-4" />
                Profile
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="h-4 w-4" />
                Billing
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="h-4 w-4" />
                Settings
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  )
}
