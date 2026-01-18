// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://AttractAndClose.github.io',
  base: '/matts-mobile-mechanic',
  vite: {
    plugins: [tailwindcss()]
  }
});