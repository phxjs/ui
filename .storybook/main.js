/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  framework: '@storybook/react-vite',
  stories: [
    {
      directory: '../.',
      files: './**!(node_modules)/*.stories.@(js|jsx|mjs|ts|tsx)',
      titlePrefix: '@phxjs/ui' // 👈 Configure the title prefix
    }
  ],
  addons: [
    '@storybook/addon-vitest',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage'
  ],
  core: {
    disableTelemetry: true
  }
};
export default config;
