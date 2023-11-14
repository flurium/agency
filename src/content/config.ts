import { defineCollection, z } from "astro:content"

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    category: z.string(),
  }),
})

const legalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
})

export const collections = {
  blog: blogCollection,
  legal: legalCollection,
}
