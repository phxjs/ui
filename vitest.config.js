import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import react from '@vitejs/plugin-react';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
const configDir = path.join(dirname, '.storybook');
const setupFile = path.join(dirname, '.storybook/vitest.setup.js');

export default defineConfig({
  test: {
    // Use `workspace` field in Vitest < 3.2
    projects: [{
      plugins: [
        // because... it reactjs
        react(),

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
          provider: 'istanbul',
          exclude: [
            ...coverageConfigDefaults.exclude,
            '**/.storybook/**',
            // 👇 This pattern must align with the `stories` property of your `.storybook/main` config
            '**/*.stories.*',
            // 👇 This pattern must align with the output directory of `storybook build`
            '**/storybook-static/**',
            '**/doc/**'
          ]
        },
        setupFiles: [setupFile]
      }
    }]
  }
});
