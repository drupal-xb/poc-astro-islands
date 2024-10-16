import { defineConfig } from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import preact from '@preact/preset-vite';
import {sveltePreprocess} from 'svelte-preprocess';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
    preact()
  ],
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
});
