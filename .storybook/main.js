/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  core: { disableTelemetry: true, },
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
