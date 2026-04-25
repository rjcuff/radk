"use client"

import * as React from "react"
import { Badge } from "@/registry/radk/ui/badge"
import { Button } from "@/registry/radk/ui/button"
import { Input } from "@/registry/radk/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/radk/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/radk/ui/table"

type Status = "active" | "inactive" | "pending"
type BadgeVariant = "default" | "secondary" | "outline"

interface User {
  name: string
  email: string
  role: string
  status: Status
  joined: string
}

const users: User[] = [
  { name: "Alex Chen", email: "alex@example.com", role: "Admin", status: "active", joined: "Jan 2024" },
  { name: "Maria Santos", email: "maria@example.com", role: "Member", status: "active", joined: "Feb 2024" },
  { name: "James Park", email: "james@example.com", role: "Member", status: "inactive", joined: "Mar 2024" },
  { name: "Sara Kim", email: "sara@example.com", role: "Editor", status: "active", joined: "Mar 2024" },
  { name: "Tom Wilson", email: "tom@example.com", role: "Member", status: "pending", joined: "Apr 2024" },
  { name: "Priya Nair", email: "priya@example.com", role: "Admin", status: "active", joined: "Apr 2024" },
]

const statusVariant: Record<Status, BadgeVariant> = {
  active: "default",
  inactive: "secondary",
  pending: "outline",
}

export function DataTableBlock() {
  const [search, setSearch] = React.useState("")
  const [roleFilter, setRoleFilter] = React.useState("all")

  const filtered = users.filter(
    (u) =>
      (u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())) &&
      (roleFilter === "all" || u.role.toLowerCase() === roleFilter)
  )

  return (
    <section className="py-10 px-6">
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black">Team Members</h2>
          <Button size="sm">Add member</Button>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Input
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="sm:max-w-xs"
          />
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-full sm:w-36">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="editor">Editor</SelectItem>
              <SelectItem value="member">Member</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((user) => (
              <TableRow key={user.email}>
                <TableCell>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {user.email}
                  </div>
                </TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[user.status]}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {user.joined}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-xs text-muted-foreground">
          Showing {filtered.length} of {users.length} members
        </p>
      </div>
    </section>
  )
}
