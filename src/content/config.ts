import { defineCollection, z } from "astro:content"

const conditionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    titleEs: z.string().optional(),
    descriptionEs: z.string().optional(),
    locale: z.string().default("en"),
    canonical: z.string().optional(),
  }),
})

export const collections = {
  conditions: conditionsCollection,
}
