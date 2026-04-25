"use client"

import { CreditCard, Apple } from "lucide-react"
import { Button } from "@/registry/krux/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/registry/krux/ui/card"
import { Input } from "@/registry/krux/ui/input"
import { Label } from "@/registry/krux/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/krux/ui/select"

export function PaymentMethodCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          All transactions are secure and encrypted.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="justify-start gap-2">
            <CreditCard className="h-4 w-4" />
            Card
          </Button>
          <Button variant="outline" className="justify-start gap-2">
            <Apple className="h-4 w-4" />
            Apple Pay
          </Button>
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Name on Card</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 space-y-2">
            <Label htmlFor="number">Card Number</Label>
            <Input id="number" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" placeholder="123" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label>Month</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => (
                  <SelectItem key={i} value={String(i + 1).padStart(2, "0")}>
                    {String(i + 1).padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Year</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 6 }, (_, i) => (
                  <SelectItem key={i} value={String(2024 + i)}>
                    {2024 + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Submit</Button>
      </CardFooter>
    </Card>
  )
}
