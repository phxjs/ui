/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  framework: '@storybook/react-vite',
  stories: ['../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/experimental-addon-test'],
  core: { disableTelemetry: true },
  build: {
    test: {
      disableAutoDocs: false,
      disableBlocks: false,
      disableDocgen: false,
      disableSourcemaps: false,
      disableTreeShaking: false
    }
  }
};
export default config;
