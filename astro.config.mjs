// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://arinamakhova.com', // canonical origin — drives canonical URLs + sitemap
  output: 'static',
  integrations: [sitemap()],
});
