"use client"

import * as React from "react"
import { Button } from "@/registry/radk/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/radk/ui/card"
import { Checkbox } from "@/registry/radk/ui/checkbox"
import { Input } from "@/registry/radk/ui/input"
import { Label } from "@/registry/radk/ui/label"
import { Separator } from "@/registry/radk/ui/separator"

export function LoginFormBlock() {
  return (
    <section className="py-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-black tracking-tight">Welcome back</h2>
          <p className="text-sm text-muted-foreground">
            Sign in to your account
          </p>
        </div>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email</Label>
              <Input
                id="login-email"
                type="email"
                placeholder="bruce@wayneenterprises.com"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="login-password">Password</Label>
                <a
                  href="#"
                  className="text-xs text-primary underline-offset-4 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="login-password"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember-me" />
              <Label
                htmlFor="remember-me"
                className="text-sm font-normal cursor-pointer"
              >
                Remember me for 30 days
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-3">
            <Button className="w-full">Sign in</Button>
            <Separator />
            <Button variant="outline" className="w-full">
              Continue with GitHub
            </Button>
          </CardFooter>
        </Card>
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-primary font-bold underline-offset-4 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </section>
  )
}
