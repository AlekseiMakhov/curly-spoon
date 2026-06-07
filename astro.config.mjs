// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://arinamakhova.com', // canonical origin — drives canonical URLs + sitemap
  output: 'static',
  integrations: [
    // Playground is empty/noindex for now, so keep it out of the sitemap.
    sitemap({ filter: (page) => !page.includes('/playground') }),
  ],
});
