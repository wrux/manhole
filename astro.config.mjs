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
  // View transitions are enabled by default in Astro 3+
  // ClientRouter handles client-side navigation
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
