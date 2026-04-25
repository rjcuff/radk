import { z } from "zod"

export const registryItemFileSchema = z.object({
  path: z.string(),
  content: z.string().optional(),
  type: z.enum([
    "registry:ui",
    "registry:component",
    "registry:hook",
    "registry:lib",
    "registry:file",
  ]),
  target: z.string().optional(),
})

export const registryItemSchema = z.object({
  name: z.string(),
  type: z.enum([
    "registry:ui",
    "registry:component",
    "registry:block",
    "registry:hook",
    "registry:lib",
    "registry:style",
    "registry:theme",
  ]),
  title: z.string().optional(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional().default([]),
  devDependencies: z.array(z.string()).optional().default([]),
  registryDependencies: z.array(z.string()).optional().default([]),
  files: z.array(registryItemFileSchema).optional().default([]),
  cssVars: z
    .object({
      theme: z.record(z.string()).optional(),
      light: z.record(z.string()).optional(),
      dark: z.record(z.string()).optional(),
    })
    .optional(),
})

export const registrySchema = z.object({
  name: z.string(),
  homepage: z.string().optional(),
  items: z.array(registryItemSchema),
})

export type RegistryItem = z.infer<typeof registryItemSchema>
export type RegistryItemFile = z.infer<typeof registryItemFileSchema>
export type Registry = z.infer<typeof registrySchema>

export const componentsJsonSchema = z.object({
  $schema: z.string().optional(),
  style: z.string().default("radk"),
  rsc: z.boolean().default(true),
  tsx: z.boolean().default(true),
  tailwind: z.object({
    config: z.string().optional(),
    css: z.string(),
    baseColor: z.string().default("slate-blue"),
    cssVariables: z.boolean().default(true),
  }),
  aliases: z.object({
    components: z.string(),
    utils: z.string(),
    ui: z.string().optional(),
    lib: z.string().optional(),
    hooks: z.string().optional(),
  }),
  registryUrl: z.string().default("https://radk.dev/r"),
})

export type ComponentsJson = z.infer<typeof componentsJsonSchema>
