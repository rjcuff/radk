import { DocsLayout } from "fumadocs-ui/layouts/docs"
import type { ReactNode } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { source } from "@/lib/source"

export const metadata: Metadata = {
  title: {
    default: "Docs",
    template: "%s | krux",
  },
  description: "Documentation for krux components.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <span className="flex items-center gap-2">
            <Image src="/logo.png" alt="krux" width={20} height={20} className="rounded-sm" />
            <span className="text-sm font-semibold text-foreground">krux</span>
          </span>
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
