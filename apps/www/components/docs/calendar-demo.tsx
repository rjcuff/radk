"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar } from "@/registry/radk/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 p-6">
        <Calendar mode="single" selected={date} onSelect={setDate} />
        <p className="text-sm text-muted-foreground">
          Selected: {date ? format(date, "PPP") : "None"}
        </p>
      </div>
    </div>
  )
}
