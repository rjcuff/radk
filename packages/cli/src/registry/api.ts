import { registryItemSchema, type RegistryItem } from "./schema.js"

export const REGISTRY_URL = "https://krux.dev/r"

export async function fetchRegistryItem(
  name: string,
  registryUrl = REGISTRY_URL
): Promise<RegistryItem> {
  const url = `${registryUrl}/krux/${name}.json`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(
      `Component "${name}" not found in registry. Status: ${res.status}`
    )
  }

  const json = await res.json()
  const parsed = registryItemSchema.safeParse(json)

  if (!parsed.success) {
    throw new Error(
      `Invalid registry item for "${name}": ${parsed.error.message}`
    )
  }

  return parsed.data
}

export async function fetchRegistryIndex(
  registryUrl = REGISTRY_URL
): Promise<{ name: string; type: string; title?: string }[]> {
  const url = `${registryUrl}/registry.json`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Could not fetch registry index from ${url}`)
  }

  const json = await res.json()
  return json.items ?? []
}
