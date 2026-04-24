"use client"

import { Spinner } from "@/registry/mono-ui/ui/spinner"

export function SpinnerDemo() {
  return (
    <div className="not-prose my-6 flex flex-wrap items-center justify-center gap-8 rounded-lg border border-border p-6 sm:p-10">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs text-muted-foreground">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner />
        <span className="text-xs text-muted-foreground">default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted-foreground">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-primary" />
        <span className="text-xs text-muted-foreground">primary</span>
      </div>
    </div>
  )
}
