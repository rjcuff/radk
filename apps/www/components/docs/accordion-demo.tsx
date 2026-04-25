"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/krux/ui/accordion"

export function AccordionDemo() {
  return (
    <div className="not-prose my-6 rounded-lg border border-border p-6 sm:p-10">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern using Radix UI.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the rest of the krux design system.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it using the{" "}
            <code>data-[state=open]</code> and <code>data-[state=closed]</code> CSS selectors.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
