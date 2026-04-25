"use client"

import * as React from "react"
import {
  ChevronDown,
  FolderOpen,
  Home,
  Inbox,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react"
import { Badge } from "@/registry/radk/ui/badge"
import { Button } from "@/registry/radk/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/registry/radk/ui/collapsible"
import { Separator } from "@/registry/radk/ui/separator"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Inbox, label: "Inbox", badge: 12 },
  { icon: Users, label: "Team" },
  { icon: LayoutDashboard, label: "Analytics" },
]

const projects = [
  { label: "Website Redesign" },
  { label: "Mobile App" },
  { label: "API Integration" },
]

export function SidebarBlock() {
  const [projectsOpen, setProjectsOpen] = React.useState(true)

  return (
    <aside className="w-64 border-r-2 border-foreground h-screen flex flex-col bg-background">
      <div className="border-b-2 border-foreground p-4">
        <span className="text-xl font-black tracking-tight">radk</span>
      </div>

      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 text-sm font-bold transition-all",
              item.active
                ? "bg-primary text-primary-foreground border-2 border-foreground shadow-[2px_2px_0_0_var(--neo-shadow-color)]"
                : "text-muted-foreground hover:text-foreground hover:bg-muted border-2 border-transparent"
            )}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <Badge variant="secondary" className="ml-auto text-xs px-1.5 py-0.5">
                {item.badge}
              </Badge>
            )}
          </button>
        ))}

        <Collapsible open={projectsOpen} onOpenChange={setProjectsOpen}>
          <CollapsibleTrigger asChild>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-all border-2 border-transparent hover:bg-muted">
              <FolderOpen className="h-4 w-4 shrink-0" />
              <span className="flex-1 text-left">Projects</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  projectsOpen && "rotate-180"
                )}
              />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-9 space-y-1 pt-1">
            {projects.map((project) => (
              <button
                key={project.label}
                className="w-full text-left px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {project.label}
              </button>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </nav>

      <div className="p-2">
        <Separator className="mb-2" />
        <Button variant="ghost" className="w-full justify-start gap-3 font-bold text-muted-foreground">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
        <div className="flex items-center gap-3 px-3 py-2 mt-1">
          <div className="h-8 w-8 border-2 border-foreground bg-primary flex items-center justify-center text-xs font-black text-primary-foreground">
            RC
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold truncate">Ryan Cuff</p>
            <p className="text-xs text-muted-foreground truncate">ryan@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
