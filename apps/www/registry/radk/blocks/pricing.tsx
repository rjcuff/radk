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
import { Label } from "@/registry/radk/ui/label"
import { Separator } from "@/registry/radk/ui/separator"
import { Switch } from "@/registry/radk/ui/switch"

type ButtonVariant = "default" | "outline"

interface Plan {
  name: string
  monthlyPrice: number
  yearlyPrice: number
  description: string
  features: string[]
  popular: boolean
  cta: string
  variant: ButtonVariant
}

const plans: Plan[] = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for side projects and personal use.",
    features: ["5 projects", "10 components", "Community support", "Basic analytics"],
    popular: false,
    cta: "Get started free",
    variant: "outline",
  },
  {
    name: "Pro",
    monthlyPrice: 19,
    yearlyPrice: 15,
    description: "Everything you need to ship fast.",
    features: [
      "Unlimited projects",
      "All components",
      "Priority support",
      "Advanced analytics",
      "Custom themes",
    ],
    popular: true,
    cta: "Start free trial",
    variant: "default",
  },
  {
    name: "Team",
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: "For teams building at scale.",
    features: [
      "Everything in Pro",
      "Team management",
      "SSO / SAML",
      "SLA guarantee",
      "Custom contracts",
    ],
    popular: false,
    cta: "Contact sales",
    variant: "outline",
  },
]

export function PricingBlock() {
  const [yearly, setYearly] = React.useState(false)

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="text-center space-y-3">
          <Badge variant="outline">Pricing</Badge>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground">No hidden fees. Cancel anytime.</p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Label htmlFor="billing-toggle">Monthly</Label>
            <Switch
              id="billing-toggle"
              checked={yearly}
              onCheckedChange={setYearly}
            />
            <Label htmlFor="billing-toggle">
              Yearly{" "}
              <span className="text-primary font-bold ml-1">Save 20%</span>
            </Label>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.popular
                  ? "border-primary shadow-[6px_6px_0_0_var(--neo-shadow-color)]"
                  : ""
              }
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.popular && <Badge>Most Popular</Badge>}
                </div>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-2">
                  <span className="text-4xl font-black">
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <Separator />
              <CardContent className="pt-6">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-primary font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.variant} className="w-full">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
