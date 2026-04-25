import { getPage, getPages } from "@/lib/source"
import type { Metadata } from "next"
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import defaultMdxComponents from "fumadocs-ui/mdx"
import { ButtonDemo } from "@/components/docs/button-demo"
import { BadgeDemo } from "@/components/docs/badge-demo"
import { CardDemo } from "@/components/docs/card-demo"
import { InputDemo } from "@/components/docs/input-demo"
import { TabsDemo } from "@/components/docs/tabs-demo"
import { SkeletonDemo } from "@/components/docs/skeleton-demo"
import { AvatarDemo } from "@/components/docs/avatar-demo"
import { SeparatorDemo } from "@/components/docs/separator-demo"
import { SelectDemo } from "@/components/docs/select-demo"
import { DialogDemo } from "@/components/docs/dialog-demo"
import { TooltipDemo } from "@/components/docs/tooltip-demo"
import { DropdownMenuDemo } from "@/components/docs/dropdown-menu-demo"
import { LabelDemo } from "@/components/docs/label-demo"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CheckboxDemo } from "@/components/docs/checkbox-demo"
import { SwitchDemo } from "@/components/docs/switch-demo"
import { TextareaDemo } from "@/components/docs/textarea-demo"
import { ProgressDemo } from "@/components/docs/progress-demo"
import { AccordionDemo } from "@/components/docs/accordion-demo"
import { AlertDemo } from "@/components/docs/alert-demo"
import { SpinnerDemo } from "@/components/docs/spinner-demo"
import { ToggleDemo } from "@/components/docs/toggle-demo"

const customComponents = {
  ...defaultMdxComponents,
  ButtonDemo,
  BadgeDemo,
  CardDemo,
  InputDemo,
  TabsDemo,
  SkeletonDemo,
  AvatarDemo,
  SeparatorDemo,
  SelectDemo,
  DialogDemo,
  TooltipDemo,
  DropdownMenuDemo,
  LabelDemo,
  ComponentPreview,
  CheckboxDemo,
  SwitchDemo,
  TextareaDemo,
  ProgressDemo,
  AccordionDemo,
  AlertDemo,
  SpinnerDemo,
  ToggleDemo,
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params
  const page = getPage(slug)
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={customComponents} />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return getPages().map((page) => ({ slug: page.slugs }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = getPage(slug)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: `${page.data.title} — krux`,
      description: page.data.description,
      type: "article",
      url: `/docs/${(slug ?? []).join("/")}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.data.title} — krux`,
      description: page.data.description,
    },
  }
}
