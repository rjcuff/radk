"use client"

import * as React from "react"
import {
  Command as CommandRoot,
  CommandDialog as CommandDialogPrimitive,
  CommandEmpty as CommandEmptyPrimitive,
  CommandGroup as CommandGroupPrimitive,
  CommandInput as CommandInputPrimitive,
  CommandItem as CommandItemPrimitive,
  CommandList as CommandListPrimitive,
  CommandSeparator as CommandSeparatorPrimitive,
} from "cmdk"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandRoot>,
  React.ComponentPropsWithoutRef<typeof CommandRoot>
>(({ className, ...props }, ref) => (
  <CommandRoot
    ref={ref}
    data-slot="command"
    className={cn(
      "flex h-full w-full flex-col overflow-hidden border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0_0_var(--neo-shadow-color)]",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandRoot.displayName

interface CommandDialogProps extends React.ComponentPropsWithoutRef<typeof CommandDialogPrimitive> {}

function CommandDialog({ children, ...props }: CommandDialogProps) {
  return (
    <CommandDialogPrimitive
      {...props}
      className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] overflow-hidden border-2 border-foreground bg-background shadow-[6px_6px_0_0_var(--neo-shadow-color)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
    >
      <Command>{children}</Command>
    </CommandDialogPrimitive>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandInputPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandInputPrimitive>
>(({ className, ...props }, ref) => (
  <div data-slot="command-input-wrapper" className="flex items-center border-b-2 border-foreground px-3">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-70" />
    <CommandInputPrimitive
      ref={ref}
      data-slot="command-input"
      className={cn(
        "flex h-11 w-full bg-transparent py-3 text-sm font-medium placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))
CommandInput.displayName = CommandInputPrimitive.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandListPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandListPrimitive>
>(({ className, ...props }, ref) => (
  <CommandListPrimitive
    ref={ref}
    data-slot="command-list"
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))
CommandList.displayName = CommandListPrimitive.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandEmptyPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandEmptyPrimitive>
>(({ className, ...props }, ref) => (
  <CommandEmptyPrimitive
    ref={ref}
    data-slot="command-empty"
    className={cn("py-6 text-center text-sm font-medium text-muted-foreground", className)}
    {...props}
  />
))
CommandEmpty.displayName = CommandEmptyPrimitive.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandGroupPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandGroupPrimitive>
>(({ className, ...props }, ref) => (
  <CommandGroupPrimitive
    ref={ref}
    data-slot="command-group"
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider",
      className
    )}
    {...props}
  />
))
CommandGroup.displayName = CommandGroupPrimitive.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandSeparatorPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandSeparatorPrimitive>
>(({ className, ...props }, ref) => (
  <CommandSeparatorPrimitive
    ref={ref}
    data-slot="command-separator"
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandSeparatorPrimitive.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandItemPrimitive>
>(({ className, ...props }, ref) => (
  <CommandItemPrimitive
    ref={ref}
    data-slot="command-item"
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 px-2 py-1.5 text-sm font-medium outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
      className
    )}
    {...props}
  />
))
CommandItem.displayName = CommandItemPrimitive.displayName

function CommandShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
}
