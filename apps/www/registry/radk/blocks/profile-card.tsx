"use client"

import * as React from "react"
import { Avatar, AvatarFallback } from "@/registry/radk/ui/avatar"
import { Badge } from "@/registry/radk/ui/badge"
import { Button } from "@/registry/radk/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/radk/ui/card"
import { Separator } from "@/registry/radk/ui/separator"

const stats = [
  { label: "Followers", value: "12.4k" },
  { label: "Following", value: "891" },
  { label: "Posts", value: "248" },
]

export function ProfileCardBlock() {
  const [following, setFollowing] = React.useState(false)

  return (
    <section className="py-20 px-6 flex items-center justify-center">
      <Card className="max-w-sm w-full">
        <CardHeader className="flex flex-col items-center gap-3 pb-2 text-center">
          <Avatar className="h-20 w-20 border-2 border-foreground shadow-[4px_4px_0_0_var(--neo-shadow-color)]">
            <AvatarFallback className="text-xl font-black bg-primary text-primary-foreground">
              BC
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h2 className="text-xl font-black tracking-tight">Bruce Wayne</h2>
            <Badge variant="secondary">Dark Knight</Badge>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Defending Gotham one night at a time. Billionaire by day, vigilante by night.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-around">
            {stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div className="text-center">
                  <p className="text-lg font-black">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <Separator orientation="vertical" className="h-10" />
                )}
              </React.Fragment>
            ))}
          </div>
          <Separator />
          <div className="flex gap-2">
            <Button
              className="flex-1"
              variant={following ? "outline" : "default"}
              onClick={() => setFollowing(!following)}
            >
              {following ? "Following" : "Follow"}
            </Button>
            <Button variant="outline" className="flex-1">
              Message
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
