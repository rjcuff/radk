import { readFileSync, writeFileSync, mkdirSync } from "fs"
import { resolve, dirname, basename } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, "..")

interface RegistryManifestItem {
  name: string
  type: string
  title?: string
  description?: string
  dependencies?: string[]
  devDependencies?: string[]
  registryDependencies?: string[]
  files?: { path: string; type: string }[]
  cssVars?: Record<string, Record<string, string>>
}

interface RegistryManifest {
  name: string
  homepage?: string
  items: RegistryManifestItem[]
}

function buildRegistry() {
  const manifestPath = resolve(ROOT, "registry.json")
  const manifest: RegistryManifest = JSON.parse(readFileSync(manifestPath, "utf-8"))

  const outDir = resolve(ROOT, "public", "r", "mono-ui")
  mkdirSync(outDir, { recursive: true })

  const indexItems: { name: string; type: string; title?: string; description?: string }[] = []

  for (const item of manifest.items) {
    const files = (item.files ?? []).map((f) => {
      const filePath = resolve(ROOT, f.path)
      let content: string
      try {
        content = readFileSync(filePath, "utf-8")
      } catch {
        console.warn(`  [warn] could not read ${f.path}`)
        content = ""
      }
      return { ...f, content }
    })

    const output = {
      $schema: "https://mono-ui.dev/schema/registry-item.json",
      name: item.name,
      type: item.type,
      title: item.title,
      description: item.description,
      dependencies: item.dependencies ?? [],
      devDependencies: item.devDependencies ?? [],
      registryDependencies: item.registryDependencies ?? [],
      files,
      cssVars: item.cssVars ?? {},
    }

    const outPath = resolve(outDir, `${item.name}.json`)
    writeFileSync(outPath, JSON.stringify(output, null, 2) + "\n")
    console.log(`  ✓ ${item.name}`)

    indexItems.push({
      name: item.name,
      type: item.type,
      title: item.title,
      description: item.description,
    })
  }

  const registryIndex = {
    $schema: "https://mono-ui.dev/schema/registry.json",
    name: manifest.name,
    homepage: manifest.homepage,
    items: indexItems,
  }

  writeFileSync(
    resolve(ROOT, "public", "r", "registry.json"),
    JSON.stringify(registryIndex, null, 2) + "\n"
  )

  console.log(`\nRegistry built: ${indexItems.length} components → public/r/mono-ui/\n`)
}

buildRegistry()
