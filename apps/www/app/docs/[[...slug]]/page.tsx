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
import { SheetDemo } from "@/components/docs/sheet-demo"
import { PopoverDemo } from "@/components/docs/popover-demo"
import { SliderDemo } from "@/components/docs/slider-demo"
import { RadioGroupDemo } from "@/components/docs/radio-group-demo"
import { TableDemo } from "@/components/docs/table-demo"
import { CollapsibleDemo } from "@/components/docs/collapsible-demo"
import { BreadcrumbDemo } from "@/components/docs/breadcrumb-demo"
import { ScrollAreaDemo } from "@/components/docs/scroll-area-demo"
import { HeroBlockDemo } from "@/components/docs/blocks/hero-block-demo"
import { FeaturesBlockDemo } from "@/components/docs/blocks/features-block-demo"
import { PricingBlockDemo } from "@/components/docs/blocks/pricing-block-demo"
import { FaqBlockDemo } from "@/components/docs/blocks/faq-block-demo"
import { ContactFormBlockDemo } from "@/components/docs/blocks/contact-form-block-demo"
import { StatsBlockDemo } from "@/components/docs/blocks/stats-block-demo"
import { TestimonialsBlockDemo } from "@/components/docs/blocks/testimonials-block-demo"
import { LoginFormBlockDemo } from "@/components/docs/blocks/login-form-block-demo"
import { DataTableBlockDemo } from "@/components/docs/blocks/data-table-block-demo"
import { SettingsFormBlockDemo } from "@/components/docs/blocks/settings-form-block-demo"
import { SonnerDemo } from "@/components/docs/sonner-demo"
import { CommandDemo } from "@/components/docs/command-demo"
import { CalendarDemo } from "@/components/docs/calendar-demo"
import { FormDemo } from "@/components/docs/form-demo"
import { DatePickerDemo } from "@/components/docs/date-picker-demo"
import { ComboboxDemo } from "@/components/docs/combobox-demo"
import { NavbarBlockDemo } from "@/components/docs/blocks/navbar-block-demo"
import { SidebarBlockDemo } from "@/components/docs/blocks/sidebar-block-demo"
import { SignupFormBlockDemo } from "@/components/docs/blocks/signup-form-block-demo"
import { FooterBlockDemo } from "@/components/docs/blocks/footer-block-demo"
import { ProfileCardBlockDemo } from "@/components/docs/blocks/profile-card-block-demo"

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
  SheetDemo,
  PopoverDemo,
  SliderDemo,
  RadioGroupDemo,
  TableDemo,
  CollapsibleDemo,
  BreadcrumbDemo,
  ScrollAreaDemo,
  HeroBlockDemo,
  FeaturesBlockDemo,
  PricingBlockDemo,
  FaqBlockDemo,
  ContactFormBlockDemo,
  StatsBlockDemo,
  TestimonialsBlockDemo,
  LoginFormBlockDemo,
  DataTableBlockDemo,
  SettingsFormBlockDemo,
  SonnerDemo,
  CommandDemo,
  CalendarDemo,
  FormDemo,
  DatePickerDemo,
  ComboboxDemo,
  NavbarBlockDemo,
  SidebarBlockDemo,
  SignupFormBlockDemo,
  FooterBlockDemo,
  ProfileCardBlockDemo,
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
      title: `${page.data.title} — radk`,
      description: page.data.description,
      type: "article",
      url: `/docs/${(slug ?? []).join("/")}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.data.title} — radk`,
      description: page.data.description,
    },
  }
}
