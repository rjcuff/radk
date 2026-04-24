import { existsSync } from "fs"
import path from "path"

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun"

export function getPackageManager(cwd: string): PackageManager {
  if (existsSync(path.join(cwd, "bun.lockb"))) return "bun"
  if (existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm"
  if (existsSync(path.join(cwd, "yarn.lock"))) return "yarn"
  return "npm"
}

export function getInstallCommand(pm: PackageManager, packages: string[]): string[] {
  const pkgs = packages.join(" ")
  switch (pm) {
    case "bun": return ["bun", "add", ...packages]
    case "pnpm": return ["pnpm", "add", ...packages]
    case "yarn": return ["yarn", "add", ...packages]
    default: return ["npm", "install", ...packages]
  }
}
