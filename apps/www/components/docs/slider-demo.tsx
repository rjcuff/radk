"use client"

import * as React from "react"
import { Slider } from "@/registry/radk/ui/slider"

export function SliderDemo() {
  const [value, setValue] = React.useState([50])

  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[120px] flex-col items-center justify-center gap-4 p-6">
        <Slider
          min={0}
          max={100}
          step={1}
          value={value}
          onValueChange={setValue}
          className="w-64"
        />
        <p className="text-sm text-muted-foreground">
          Value: <span className="font-bold text-foreground">{value[0]}</span>
        </p>
      </div>
    </div>
  )
}
