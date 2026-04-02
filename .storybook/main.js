import { readdirSync } from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(process.cwd());
const files = '**/*.stories.@(jsx|js)';
const titlePrefix = '@phxjs/ui';
const DOT = '.';
const ignoreDirectories = 'coverage|doc|node_modules';
const directories = readdirSync(projectRoot, { withFileTypes: true });
const stories = directories
  .filter((entry) =>
    entry.isDirectory() // be a directory
    && !ignoreDirectories.includes(entry.name) // ignore certain  directories
    && entry.name[0] !== DOT // no dot files/directories
  )
  .map((entry) => ({
    directory: `../${entry.name}`, // for some reason... vitest wants relative path instead of absolute path...
    files,
    titlePrefix
  }));

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  framework: '@storybook/react-vite',
  stories,
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
