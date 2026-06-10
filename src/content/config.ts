import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    github: z.string().optional(),
    live: z.string().optional(),
    featured: z.boolean().default(false),
    size: z.enum(['large', 'medium', 'small']).default('small'),
    order: z.number().default(99),
  }),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    period: z.string(),
    description: z.string(),
    logo: z.string().optional(),
    initials: z.string(),
    accentColor: z.string(),
    current: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { projects, work };
