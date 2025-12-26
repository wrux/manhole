import { defineConfig } from 'astro/config';
import sanityIntegration from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { dataset, projectId } from './src/sanity/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://manhole.gallery',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  output: 'static',
  integrations: [
    sanityIntegration({
      projectId,
      dataset,
      useCdn: false,
      studioBasePath: '/studio',
    }),
    sitemap(),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
