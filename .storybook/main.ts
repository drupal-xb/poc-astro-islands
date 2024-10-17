import type { StorybookConfig } from "@storybook/preact-vite";
const { mergeConfig } = require('vite');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  refs: {
    svelte: {
      title: 'Svelte Components',
      url: 'http://localhost:6006',
    },
    preact: {
      title: 'Preact Components',
      url: 'http://localhost:6007',
    },
  },
  framework: {
    // name: "@storybook/preact-vite",
    name: "@storybook/svelte-vite",
    options: {},
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: '.storybook/vite.config.js',
      },
    },
  },
  async viteFinal(config, { configType }) {
    // Return the altered config
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
      resolve: {
        alias: {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat', // Must be below test-utils
        },
      },
      esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
      },
    });
  },
};
export default config;
