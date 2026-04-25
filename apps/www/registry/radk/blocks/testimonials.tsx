"use client"

import * as React from "react"
import { Badge } from "@/registry/radk/ui/badge"
import { Card, CardContent, CardHeader } from "@/registry/radk/ui/card"
import { Avatar, AvatarFallback } from "@/registry/radk/ui/avatar"

const testimonials = [
  {
    name: "Alex Chen",
    role: "Frontend Engineer @ Vercel",
    initials: "AC",
    quote:
      "radk saved me hours of setup. I copied the components I needed, customized the colors, and shipped. The neobrutalism aesthetic is exactly what my project needed.",
  },
  {
    name: "Maria Santos",
    role: "Lead Designer @ Linear",
    initials: "MS",
    quote:
      "Finally a component library that doesn't make every site look the same. The bold shadows and thick borders are distinctive without being distracting.",
  },
  {
    name: "James Park",
    role: "Indie Developer",
    initials: "JP",
    quote:
      "The CLI tool is a game-changer. `radk add button` and it's in my project instantly. No fighting with npm, no version conflicts.",
  },
  {
    name: "Sara Kim",
    role: "CTO @ Startup",
    initials: "SK",
    quote:
      "We switched from shadcn/ui to radk because we wanted a stronger visual identity. The migration was surprisingly smooth since both share the same principles.",
  },
  {
    name: "Tom Wilson",
    role: "Full-Stack Developer",
    initials: "TW",
    quote:
      "Dark mode works perfectly out of the box. No flash, no FOUC, just clean transitions. That alone was worth switching.",
  },
  {
    name: "Priya Nair",
    role: "Product Engineer @ Stripe",
    initials: "PN",
    quote:
      "Accessibility is usually an afterthought in design-forward libraries. Not with radk — every component handles focus management and keyboard navigation correctly.",
  },
]

export function TestimonialsBlock() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="outline">Testimonials</Badge>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Loved by developers
          </h2>
          <p className="text-muted-foreground">
            Don&apos;t take our word for it.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="font-bold">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
