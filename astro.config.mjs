import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://milhan.kim',
  output: 'static',
  outDir: 'docs',
  integrations: [mdx()],
});
