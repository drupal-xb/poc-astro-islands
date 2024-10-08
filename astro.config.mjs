import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Enable Preact to support Preact JSX components.
  integrations: [preact(), svelte(), tailwind()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Filename pattern for the output files
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name][extname]',
        },
      },
    },
  },
});
