"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const THEMES = [
  { id: "pink",   label: "Pink",   color: "oklch(0.76 0.2 350)" },
  { id: "green",  label: "Green",  color: "oklch(0.72 0.26 140)" },
  { id: "blue",   label: "Blue",   color: "oklch(0.64 0.26 250)" },
  { id: "orange", label: "Orange", color: "oklch(0.78 0.22 52)" },
  { id: "purple", label: "Purple", color: "oklch(0.62 0.28 295)" },
] as const

type ThemeId = (typeof THEMES)[number]["id"]

export function ThemeColorSwitcher({ className }: { className?: string }) {
  const [active, setActive] = React.useState<ThemeId>("pink")

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("radk-color-theme") as ThemeId | null
      if (stored && THEMES.some((t) => t.id === stored)) {
        setActive(stored)
      }
    } catch {}
  }, [])

  function apply(id: ThemeId) {
    setActive(id)
    try {
      localStorage.setItem("radk-color-theme", id)
    } catch {}
    if (id === "pink") {
      document.documentElement.removeAttribute("data-theme-color")
    } else {
      document.documentElement.setAttribute("data-theme-color", id)
    }
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Theme
      </span>
      <div className="flex items-center gap-2">
        {THEMES.map((theme) => (
          <button
            key={theme.id}
            title={theme.label}
            onClick={() => apply(theme.id)}
            aria-pressed={active === theme.id}
            className={cn(
              "h-7 w-7 border-2 border-foreground transition-all",
              active === theme.id
                ? "translate-x-[2px] translate-y-[2px] shadow-none"
                : "shadow-[2px_2px_0_0_var(--neo-shadow-color)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_var(--neo-shadow-color)]"
            )}
            style={{ backgroundColor: theme.color }}
          />
        ))}
      </div>
    </div>
  )
}
