"use client"

import * as React from "react"
import { Badge } from "@/registry/radk/ui/badge"
import { Button } from "@/registry/radk/ui/button"
import { Card, CardContent, CardFooter } from "@/registry/radk/ui/card"
import { Checkbox } from "@/registry/radk/ui/checkbox"
import { Input } from "@/registry/radk/ui/input"
import { Label } from "@/registry/radk/ui/label"
import { Separator } from "@/registry/radk/ui/separator"

export function SignupFormBlock() {
  const [agreed, setAgreed] = React.useState(false)

  return (
    <section className="py-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <Badge variant="outline">Free forever</Badge>
          <h2 className="text-2xl font-black tracking-tight">Create an account</h2>
          <p className="text-sm text-muted-foreground">
            Start building beautiful interfaces today.
          </p>
        </div>

        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="signup-first">First name</Label>
                <Input id="signup-first" placeholder="Bruce" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-last">Last name</Label>
                <Input id="signup-last" placeholder="Wayne" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="bruce@wayneenterprises.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input
                id="signup-password"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-confirm">Confirm password</Label>
              <Input
                id="signup-confirm"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(v === true)}
                className="mt-0.5"
              />
              <Label htmlFor="terms" className="text-sm font-normal leading-snug cursor-pointer">
                I agree to the{" "}
                <a href="#" className="text-primary font-bold hover:underline underline-offset-4">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary font-bold hover:underline underline-offset-4">
                  Privacy Policy
                </a>
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-3">
            <Button className="w-full" disabled={!agreed}>
              Create Account
            </Button>
            <Separator />
            <Button variant="outline" className="w-full">
              Continue with Google
            </Button>
          </CardFooter>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="#" className="text-primary font-bold underline-offset-4 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </section>
  )
}
