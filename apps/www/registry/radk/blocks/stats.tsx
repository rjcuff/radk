"use client"

import * as React from "react"
import { Badge } from "@/registry/radk/ui/badge"
import { Card, CardContent } from "@/registry/radk/ui/card"

const stats = [
  {
    value: "2,500+",
    label: "Developers",
    description: "Building with radk worldwide",
  },
  {
    value: "29",
    label: "Components",
    description: "Production-ready, copy-paste",
  },
  {
    value: "100%",
    label: "Open Source",
    description: "MIT licensed, no lock-in",
  },
  {
    value: "0",
    label: "npm deps",
    description: "No package to install",
  },
]

export function StatsBlock() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="text-center space-y-3">
          <Badge variant="outline">By the numbers</Badge>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Trusted by builders
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6 space-y-1">
                <div className="text-4xl font-black text-primary">
                  {stat.value}
                </div>
                <div className="font-bold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
