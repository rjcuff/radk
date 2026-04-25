"use client"

import * as React from "react"
import { Badge } from "@/registry/radk/ui/badge"
import { Button } from "@/registry/radk/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/radk/ui/card"
import { Input } from "@/registry/radk/ui/input"
import { Label } from "@/registry/radk/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/radk/ui/select"
import { Textarea } from "@/registry/radk/ui/textarea"

export function ContactFormBlock() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-2xl space-y-10">
        <div className="text-center space-y-3">
          <Badge variant="outline">Contact</Badge>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Get in touch
          </h2>
          <p className="text-muted-foreground">
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll be in touch.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Wick" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="john@thecontinental.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select>
                <SelectTrigger id="subject">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General inquiry</SelectItem>
                  <SelectItem value="support">Technical support</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us how we can help..."
                rows={5}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Send message</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
