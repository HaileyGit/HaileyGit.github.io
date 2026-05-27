import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cardSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  source: z.string().optional(),
  tags: z.array(z.string()).optional(),
  liveUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  thumbnail: z.string().optional(),
  draft: z.boolean().default(false),
});

const challenges = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/challenges' }),
  schema: cardSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: cardSchema,
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: cardSchema.extend({
    role: z.string().optional(),
    period: z.string().optional(),
    stack: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { challenges, projects, work, blog };
