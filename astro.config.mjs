import { defineConfig } from 'astro/config';
import sanityIntegration from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
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
  output: 'hybrid',
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
