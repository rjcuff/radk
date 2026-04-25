import * as React from "react"
import { Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/registry/radk/ui/button"
import { Input } from "@/registry/radk/ui/input"
import { Separator } from "@/registry/radk/ui/separator"

const footerLinks = {
  Product: ["Components", "Blocks", "Templates", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "License", "Cookies"],
}

export function FooterBlock() {
  return (
    <footer className="border-t-2 border-foreground bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <span className="text-xl font-black tracking-tight">radk</span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Beautiful neobrutalist components you copy into your project.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="space-y-3">
              <h3 className="text-sm font-black uppercase tracking-wider">{group}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} radk. All rights reserved.
          </p>
          <div className="flex gap-2">
            <Input
              placeholder="Enter your email"
              className="w-48 h-9 text-sm"
              type="email"
            />
            <Button size="sm">Subscribe</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
