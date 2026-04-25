"use client"

import * as React from "react"
import { DayPicker } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      data-slot="calendar"
      className={cn("p-3", className)}
      classNames={{
        root: cn(
          "border-2 border-foreground bg-background shadow-[4px_4px_0_0_var(--neo-shadow-color)] inline-block",
        ),
        months: "flex flex-col sm:flex-row gap-4",
        month: "flex flex-col gap-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-bold",
        nav: "flex items-center gap-1",
        button_previous: cn(
          "absolute left-1 inline-flex items-center justify-center h-7 w-7 border-2 border-foreground bg-background",
          "shadow-[2px_2px_0_0_var(--neo-shadow-color)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all",
        ),
        button_next: cn(
          "absolute right-1 inline-flex items-center justify-center h-7 w-7 border-2 border-foreground bg-background",
          "shadow-[2px_2px_0_0_var(--neo-shadow-color)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all",
        ),
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "text-muted-foreground w-9 font-bold text-[0.8rem] text-center",
        week: "flex w-full mt-2",
        day: "h-9 w-9 text-center text-sm p-0 relative [&:has([data-selected])]:bg-accent focus-within:relative focus-within:z-20",
        day_button: cn(
          "h-9 w-9 p-0 font-medium border-2 border-transparent inline-flex items-center justify-center",
          "hover:border-foreground hover:shadow-[2px_2px_0_0_var(--neo-shadow-color)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all",
          "aria-selected:opacity-100",
        ),
        selected:
          "bg-primary text-primary-foreground [&>button]:border-2 [&>button]:border-foreground [&>button]:shadow-[2px_2px_0_0_var(--neo-shadow-color)] [&>button]:hover:translate-x-0 [&>button]:hover:translate-y-0",
        today: "[&>button]:bg-accent [&>button]:text-accent-foreground [&>button]:border-2 [&>button]:border-foreground",
        outside: "text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        disabled: "text-muted-foreground opacity-50",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "left" ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          ),
      }}
      {...props}
    />
  )
}

export { Calendar }
