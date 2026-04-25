"use client"

import * as React from "react"
import { DatePicker } from "@/registry/radk/ui/date-picker"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[150px] flex-col items-center justify-center gap-4 p-6">
        <DatePicker date={date} onDateChange={setDate} placeholder="Pick a date" />
        {date && (
          <p className="text-sm text-muted-foreground">
            You picked: {date.toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  )
}
