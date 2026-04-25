"use client"

import * as React from "react"
import { Button } from "@/registry/radk/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
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
import { Separator } from "@/registry/radk/ui/separator"
import { Switch } from "@/registry/radk/ui/switch"

export function SettingsFormBlock() {
  const [emailNotifications, setEmailNotifications] = React.useState(true)
  const [marketingEmails, setMarketingEmails] = React.useState(false)
  const [twoFactor, setTwoFactor] = React.useState(false)

  return (
    <section className="py-10 px-6">
      <div className="mx-auto max-w-2xl space-y-6">
        <div>
          <h2 className="text-2xl font-black">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account preferences.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Update your personal information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="settings-first">First name</Label>
                <Input id="settings-first" defaultValue="Tony" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="settings-last">Last name</Label>
                <Input id="settings-last" defaultValue="Stark" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="settings-email">Email</Label>
              <Input
                id="settings-email"
                type="email"
                defaultValue="tony@starkindustries.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="settings-timezone">Timezone</Label>
              <Select defaultValue="et">
                <SelectTrigger id="settings-timezone">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="et">Eastern Time (ET)</SelectItem>
                  <SelectItem value="ct">Central Time (CT)</SelectItem>
                  <SelectItem value="pt">Pacific Time (PT)</SelectItem>
                  <SelectItem value="utc">UTC</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>Save changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Control how you receive notifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-notifs" className="font-bold">
                  Email notifications
                </Label>
                <p className="text-xs text-muted-foreground">
                  Receive emails about your account activity.
                </p>
              </div>
              <Switch
                id="email-notifs"
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="marketing-emails" className="font-bold">
                  Marketing emails
                </Label>
                <p className="text-xs text-muted-foreground">
                  Receive emails about new features and updates.
                </p>
              </div>
              <Switch
                id="marketing-emails"
                checked={marketingEmails}
                onCheckedChange={setMarketingEmails}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>
              Manage your account security settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="two-factor" className="font-bold">
                  Two-factor authentication
                </Label>
                <p className="text-xs text-muted-foreground">
                  Add an extra layer of security to your account.
                </p>
              </div>
              <Switch
                id="two-factor"
                checked={twoFactor}
                onCheckedChange={setTwoFactor}
              />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Password</Label>
              <div>
                <Button variant="outline">Change password</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
