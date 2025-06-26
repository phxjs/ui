import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import react from '@vitejs/plugin-react';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
const configDir = path.join(dirname, '.storybook');
const setupFile = path.join(dirname, '.storybook/vitest.setup.js');

export default defineConfig({
  plugins: [react()],
  test: {
    // Use `workspace` field in Vitest < 3.2
    projects: [{
      plugins: [
        storybookTest({
          // The location of your Storybook config, main.js|ts
          configDir,

          // This should match your package.json script to run Storybook
          // The --ci flag will skip prompts and not open a browser
          storybookScript: 'npx storybook --ci'
        })
      ],
      test: {
        name: 'storybook',
        // Enable browser mode
        browser: {
          enabled: true,
          headless: true,
          // Make sure to install Playwright
          provider: 'playwright',
          instances: [{ browser: 'chromium' }]
        },
        coverage: {
          ...coverageConfigDefaults,
          exclude: coverageConfigDefaults.exclude
        },
        setupFiles: [setupFile]
      }
    }]
  }
});
