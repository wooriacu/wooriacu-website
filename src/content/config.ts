import { defineCollection, z } from "astro:content"

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  locale: z.string().default("en"),
  canonical: z.string().optional(),
})

export const collections = {
  en: defineCollection({ type: "content", schema: articleSchema }),
  es: defineCollection({ type: "content", schema: articleSchema }),
}
