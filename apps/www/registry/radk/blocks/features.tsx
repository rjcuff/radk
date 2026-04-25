"use client"

import * as React from "react"
import { Badge } from "@/registry/radk/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/registry/radk/ui/card"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/radk/ui/tabs"

const features = [
  {
    category: "dx",
    icon: "⚡",
    title: "Copy & Paste",
    description:
      "No npm install required. Copy components directly into your project and own the code.",
  },
  {
    category: "dx",
    icon: "🎨",
    title: "Customizable",
    description:
      "Every component is built with Tailwind CSS, making customization straightforward.",
  },
  {
    category: "dx",
    icon: "📦",
    title: "No Lock-in",
    description:
      "Components live in your codebase. Modify, extend, or delete them however you want.",
  },
  {
    category: "design",
    icon: "🖤",
    title: "Neobrutalism",
    description:
      "Bold borders, offset shadows, and high contrast — a distinctive aesthetic that stands out.",
  },
  {
    category: "design",
    icon: "🌙",
    title: "Dark Mode",
    description:
      "First-class dark mode support via next-themes with zero flash on load.",
  },
  {
    category: "design",
    icon: "🎯",
    title: "Accessible",
    description:
      "Built on Radix UI primitives, so keyboard navigation and screen readers work out of the box.",
  },
]

export function FeaturesBlock() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="outline">Features</Badge>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Everything you need
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A complete set of components, thoughtfully built for real products.
          </p>
        </div>
        <Tabs defaultValue="all">
          <div className="overflow-x-auto pb-1">
            <TabsList className="mx-auto flex w-fit">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="dx">Developer Experience</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
          </div>
          {(["all", "dx", "design"] as const).map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                {features
                  .filter((f) => tab === "all" || f.category === tab)
                  .map((feature) => (
                    <Card key={feature.title}>
                      <CardHeader>
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <CardTitle className="text-base">
                          {feature.title}
                        </CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
