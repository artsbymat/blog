import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './remark-reading-time.mjs';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'one-dark-pro',
      langs: ['html', 'css', 'js', 'ts', 'jsx', 'tsx'],
      wrap: false,
      transformers: []
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: '⤴' }
        }
      ]
    ]
  },
  image: {
    domains: ['res.cloudinary.com']
  }
});
