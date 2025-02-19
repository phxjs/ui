import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: '@phxjs/ui',
  brandUrl: 'https://phx.js.org/ui',
  brandImage: 'https://raw.githubusercontent.com/phxjs/.github/refs/heads/main/profile/logo.svg',
  brandTarget: '_self',

  // Typography
  fontBase: '"Urbanist", sans-serif',
  fontCode: '"tiny5"',
});