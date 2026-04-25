"use client"

import { Bell, Check, MessageSquare, UserPlus } from "lucide-react"
import { Button } from "@/registry/krux/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/registry/krux/ui/card"
import { Badge } from "@/registry/krux/ui/badge"
import { Separator } from "@/registry/krux/ui/separator"
import { Skeleton } from "@/registry/krux/ui/skeleton"

const notifications = [
  {
    icon: MessageSquare,
    title: "New comment",
    description: "Someone commented on your post.",
    time: "2m ago",
  },
  {
    icon: UserPlus,
    title: "New follower",
    description: "A new user started following you.",
    time: "1h ago",
  },
  {
    icon: Check,
    title: "Task completed",
    description: "Your deployment was successful.",
    time: "3h ago",
  },
]

export function NotificationsCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Notifications</CardTitle>
          <Badge>3 new</Badge>
        </div>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {notifications.map((n) => (
          <div key={n.title} className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <n.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{n.title}</p>
              <p className="text-xs text-muted-foreground">{n.description}</p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {n.time}
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex items-start gap-3">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="flex-1 space-y-1.5">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-40" />
          </div>
          <Skeleton className="h-3 w-10" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full gap-2">
          <Bell className="h-4 w-4" />
          Mark all as read
        </Button>
      </CardFooter>
    </Card>
  )
}
