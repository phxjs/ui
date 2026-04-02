/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  framework: '@storybook/react-vite',
  stories: [
    {
      directory: '../!(.*|coverage|doc|node_modules)', // match anything but pattern from https://github.com/micromatch/picomatch?tab=readme-ov-file#extglobs
      files: '**/*.stories.@(jsx|js)',
      titlePrefix: '@phxjs/ui', // 👈 Configure the title prefix
    },
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    { name: '@storybook/addon-vitest' },
  ],
  core: {
    disableTelemetry: true,
  },
};
export default config;
