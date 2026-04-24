"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/mono-ui/ui/tabs"
import { Button } from "@/registry/mono-ui/ui/button"
import { Input } from "@/registry/mono-ui/ui/input"
import { Label } from "@/registry/mono-ui/ui/label"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/registry/mono-ui/ui/card"

export function TabsDemo() {
  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[300px] items-center justify-center p-6 sm:p-10">
        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="tab-name">Name</Label>
                  <Input id="tab-name" defaultValue="John Doe" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="tab-username">Username</Label>
                  <Input id="tab-username" defaultValue="@johndoe" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="tab-current">Current password</Label>
                  <Input id="tab-current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="tab-new">New password</Label>
                  <Input id="tab-new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
