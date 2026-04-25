"use client"

import { Users } from "lucide-react"
import { Button } from "@/registry/krux/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/krux/ui/card"
import {
  Avatar,
  AvatarFallback,
} from "@/registry/krux/ui/avatar"
import { Separator } from "@/registry/krux/ui/separator"
import { Badge } from "@/registry/krux/ui/badge"

const members = [
  { name: "Alice Martin", email: "alice@example.com", initials: "AM" },
  { name: "Bob Johnson", email: "bob@example.com", initials: "BJ" },
  { name: "Carol Smith", email: "carol@example.com", initials: "CS" },
]

export function TeamMembersCard() {
  return (
    <Card>
      <CardHeader className="items-center text-center">
        <div className="flex -space-x-3">
          {members.map((m) => (
            <Avatar key={m.initials} className="ring-2 ring-card">
              <AvatarFallback>{m.initials}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <CardTitle className="mt-2">Team Members</CardTitle>
        <CardDescription>
          Invite your team to collaborate on this project.
        </CardDescription>
        <Button className="mt-2 gap-2">
          <Users className="h-4 w-4" />
          Invite Members
        </Button>
      </CardHeader>
      <Separator />
      <CardContent className="pt-4 space-y-3">
        {members.map((m) => (
          <div key={m.initials} className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">{m.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{m.name}</p>
              <p className="text-xs text-muted-foreground truncate">{m.email}</p>
            </div>
            <Badge variant="secondary">Member</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
