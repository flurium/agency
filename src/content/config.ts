import { defineCollection, z } from "astro:content"

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
  }),
})

export const collections = {
  blog: blogCollection,
}
