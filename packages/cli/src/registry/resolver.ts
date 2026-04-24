import { fetchRegistryItem } from "./api.js"
import type { RegistryItem } from "./schema.js"

export async function resolveRegistryItems(
  names: string[],
  registryUrl: string
): Promise<RegistryItem[]> {
  const resolved = new Map<string, RegistryItem>()

  async function resolve(name: string) {
    if (resolved.has(name)) return
    const item = await fetchRegistryItem(name, registryUrl)
    resolved.set(name, item)
    for (const dep of item.registryDependencies ?? []) {
      await resolve(dep)
    }
  }

  await Promise.all(names.map(resolve))
  return Array.from(resolved.values())
}
