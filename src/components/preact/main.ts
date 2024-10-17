const { mergeConfig } = require('vite');

module.exports = {
    stories: ['./*.stories.jsx'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: {
        name: "@storybook/preact-vite",
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
  