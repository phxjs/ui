import { test, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

// Import all stories and the component annotations from the stories file
import * as stories from './Form.stories';

// Every component that is returned maps 1:1 with the stories,
// but they already contain all annotations from story, meta, and project levels
const { FormOnSubmit, FormInAction } = composeStories(stories);

test('renders FormInAction with default args', async () => {
  await FormInAction.run();
  const buttonElement = screen.getByText('Submit');
  expect(buttonElement).not.toBeNull();
});

test('renders FormOnSubmit with only submit listener props', async () => {
  await FormOnSubmit.run();
  const buttonElement = screen.getByText(/Submit/i);
  expect(buttonElement).not.toBeNull();
});