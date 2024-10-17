module.exports = {
    stories: ['./*.stories.js'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: {
        name: "@storybook/svelte-vite",
        options: {},
    },
    core: {
        builder: {
            name: '@storybook/builder-vite',
            options: {
            viteConfigPath: './.storybook/vite.config.js',
            },
        },
    },
  };
  