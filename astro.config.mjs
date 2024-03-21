import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './remark-reading-time.mjs';

export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  image: {
    domains: ['res.cloudinary.com']
  }
});
