import type { StorybookConfig } from "@storybook/preact-vite";

const config: StorybookConfig = {
  // stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)"],
  stories: ['../src/components/SvelteCounter/SvelteCounter.stories.js'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf"
  ],
  framework: {
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
};
export default config;
