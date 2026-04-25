"use client"

import * as React from "react"
import { toast } from "sonner"
import { Toaster } from "@/registry/radk/ui/sonner"
import { Button } from "@/registry/radk/ui/button"

export function SonnerDemo() {
  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <Toaster />
      <div className="flex min-h-[150px] flex-wrap items-center justify-center gap-3 p-6">
        <Button variant="outline" onClick={() => toast("Event has been created.")}>
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success("Profile saved successfully.")}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("Something went wrong.")}
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.warning("Your session is about to expire.")}
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("File deleted.", {
              description: "Monday, January 3rd at 6:00pm",
              action: { label: "Undo", onClick: () => toast("Undo triggered.") },
            })
          }
        >
          With Action
        </Button>
      </div>
    </div>
  )
}
