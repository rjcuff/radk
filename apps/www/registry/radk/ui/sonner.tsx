"use client"

import * as React from "react"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

function Toaster({ ...props }: ToasterProps) {
  return (
    <div data-slot="toaster">
      <Sonner
        theme="system"
        className="toaster group"
        toastOptions={{
          classNames: {
            toast:
              "group toast group-[.toaster]:border-2 group-[.toaster]:border-foreground group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:font-medium group-[.toaster]:shadow-[4px_4px_0_0_var(--neo-shadow-color)]",
            title: "group-[.toast]:font-bold group-[.toast]:text-foreground",
            description: "group-[.toast]:text-muted-foreground group-[.toast]:text-sm",
            actionButton:
              "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:border-2 group-[.toast]:border-foreground group-[.toast]:font-bold group-[.toast]:text-xs",
            cancelButton:
              "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:border-2 group-[.toast]:border-foreground group-[.toast]:font-bold group-[.toast]:text-xs",
          },
        }}
        {...props}
      />
    </div>
  )
}

export { Toaster }
