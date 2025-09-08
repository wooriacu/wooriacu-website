import { defineCollection, z } from "astro:content"

const conditionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    locale: z.string().default("en"),
    canonical: z.string().optional(),
    layout: z.string().default("ConditionLayout"),
  }),
})

export const collections = {
  conditions: conditionsCollection,
}
