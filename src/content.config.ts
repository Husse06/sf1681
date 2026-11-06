import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const tentor = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/tentor' }),
  schema: z.object({
    datum: z.string(),
    uppgift: z.number(),
    del: z.enum(['I', 'II', 'III']),
    poang: z.number(),
    modul: z.number(),
    delvis: z.array(z.number()).default([]),
    amne: z.string(),
    losning: z.enum(['officiell', 'egen']),
    kalla: z.string(),
  }),
});

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  tentor,
};
