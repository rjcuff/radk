import { DocsLayout } from "fumadocs-ui/layouts/docs"
import type { ReactNode } from "react"
import { source } from "@/lib/source"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <span className="text-sm font-semibold text-foreground">mono-ui</span>
        ),
        transparentMode: "top",
      }}
      sidebar={{
        banner: (
          <div className="rounded-[var(--radius)] border border-border bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
            v0.1 — early access
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  )
}
