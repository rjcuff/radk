import { ScrollArea } from "@/registry/radk/ui/scroll-area"
import { Separator } from "@/registry/radk/ui/separator"

const tags = [
  "v1.2.0", "v1.1.4", "v1.1.3", "v1.1.2", "v1.1.1", "v1.1.0",
  "v1.0.4", "v1.0.3", "v1.0.2", "v1.0.1", "v1.0.0",
  "v0.9.0", "v0.8.0", "v0.7.0", "v0.6.0", "v0.5.0",
]

export function ScrollAreaDemo() {
  return (
    <div className="not-prose my-6 rounded-lg border border-border">
      <div className="flex min-h-[160px] items-center justify-center p-6">
        <ScrollArea className="h-48 w-48 border-2 border-foreground shadow-[4px_4px_0_0_var(--neo-shadow-color)]">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-bold leading-none">Tags</h4>
            {tags.map((tag) => (
              <div key={tag}>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
