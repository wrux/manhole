import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import { dataset, projectId } from './src/sanity/config';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  output: 'hybrid',
  integrations: [
    tailwind(),
    sanity({
      projectId,
      dataset,
      useCdn: false,
      studioBasePath: '/studio',
    }),
    react(),
  ],
});
