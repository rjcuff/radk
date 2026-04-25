"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/radk/ui/form"
import { Input } from "@/registry/radk/ui/input"
import { Button } from "@/registry/radk/ui/button"

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(50, { message: "Username must be at most 50 characters." }),
})

type FormValues = z.infer<typeof formSchema>

export function FormDemo() {
  const [submitted, setSubmitted] = React.useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "" },
  })

  function onSubmit(values: FormValues) {
    setSubmitted(values.username)
  }

  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[200px] items-center justify-center p-6">
        <div className="w-full max-w-sm">
          {submitted ? (
            <div className="border-2 border-foreground bg-primary/10 p-4 shadow-[4px_4px_0_0_var(--neo-shadow-color)]">
              <p className="text-sm font-bold">Submitted username: {submitted}</p>
              <button
                onClick={() => { setSubmitted(null); form.reset() }}
                className="mt-2 text-xs underline text-muted-foreground hover:text-foreground"
              >
                Reset
              </button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter a username..." {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </div>
  )
}
