"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  children: React.ReactNode
  className?: string
}

export function ComponentPreview({ children, className }: ComponentPreviewProps) {
  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div
        className={cn(
          "flex min-h-[200px] items-center justify-center p-6 sm:p-10",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
