import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://milhan.kim',
  outDir: 'docs',
  integrations: [mdx()],
  markdown: {
    smartypants: true,
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
