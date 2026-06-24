import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  locale: z.string().default("en"),
  canonical: z.string().optional(),
  // Present only on "Conditions We Treat" pages; omitted on standalone
  // pages like insurance and workers-compensation.
  category: z.enum(["general", "womens-health", "mens-health"]).optional(),
})

export const collections = {
  en: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/en" }),
    schema: articleSchema,
  }),
  es: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/es" }),
    schema: articleSchema,
  }),
}
