"use client"

import * as React from "react"
import { Progress } from "@/registry/radk/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(30)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 10
      })
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="not-prose my-6 flex flex-col gap-6 rounded-lg border border-border p-6 sm:p-10">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Animated progress</p>
        <Progress value={progress} className="w-full" />
        <p className="text-xs text-muted-foreground">{progress}%</p>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Static examples</p>
        <Progress value={20} className="w-full" />
        <Progress value={60} className="w-full" />
        <Progress value={100} className="w-full" />
      </div>
    </div>
  )
}
