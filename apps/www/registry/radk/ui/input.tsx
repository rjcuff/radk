import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        data-slot="input"
        type={type}
        className={cn(
          "flex h-10 w-full border-2 border-foreground bg-background px-3 py-2 text-sm font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-[4px_4px_0_0_var(--neo-shadow-color)] focus-visible:ring-0 transition-shadow file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
