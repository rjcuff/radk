"use client"

import * as React from "react"
import { Badge } from "@/registry/radk/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/radk/ui/accordion"

const faqs = [
  {
    question: "What is radk?",
    answer:
      "radk is a copy-paste component library built on Radix UI and Tailwind CSS with a neobrutalism design aesthetic. You copy the components directly into your project — no npm package to install.",
  },
  {
    question: "How is this different from shadcn/ui?",
    answer:
      "radk follows the same copy-paste philosophy as shadcn/ui but with a distinct neobrutalism aesthetic: thick borders, offset box shadows, and bold typography. The components are also opinionated about design rather than being neutral.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "You need Radix UI primitives and Tailwind CSS v4 in your project. Individual components may have additional peer dependencies listed in their docs. Use the CLI to add components with all dependencies automatically resolved.",
  },
  {
    question: "Can I use this with Next.js?",
    answer:
      "Yes. radk works with any React framework. The docs site itself is built with Next.js 15 and App Router.",
  },
  {
    question: "Is radk free?",
    answer:
      "radk is completely free and open source under the MIT license.",
  },
]

export function FaqBlock() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-2xl space-y-10">
        <div className="text-center space-y-3">
          <Badge variant="outline">FAQ</Badge>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? Reach out on GitHub.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="font-bold text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
