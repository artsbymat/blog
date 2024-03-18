import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    modifiedDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()),
    isDraft: z.boolean()
  })
});

export const collections = {
  articles: blogCollection
};
