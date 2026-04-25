import { DocsLayout } from "fumadocs-ui/layouts/docs"
import type { ReactNode } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { source } from "@/lib/source"

export const metadata: Metadata = {
  title: {
    default: "Docs",
    template: "%s | radk",
  },
  description: "Documentation for radk components.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <span className="flex items-center gap-2">
            <Image src="/logo.png" alt="radk" width={20} height={20} className="rounded-sm" />
            <span className="text-sm font-semibold text-foreground">radk</span>
          </span>
        ),
        transparentMode: "top",
      }}
      sidebar={{

      }}
    >
      {children}
    </DocsLayout>
  )
}
