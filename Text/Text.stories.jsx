import React from 'react';
import { Text } from './Text';

export default {
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'radio',
      description: 'optional font styling',
      options: [
        'font-tiny5', 'font-shantell-sans', 'font-urbanist'
      ]
    },
    children: {
      control: 'radio',
      type: 'function',
      description: 'examples of children',
      options: ['None', 'Element', 'String'],
      mapping: {
        None: undefined,
        Element: <h1>heading one</h1>,
        String: 'AWESOME STRING'
      }
    },
    content: { control: 'text' },
    tagName: { control: 'radio', options: ['span', 'div', 'marquee'] }
  }
};

export const TextFonts = {
  args: {
    className: 'font-tiny5',
    children: 'String',
    content: undefined,
    tagName: 'span'
  }
};

export const TextContent = {
  args: {
    className: 'font-tiny5',
    children: 'None',
    content: 'Text Content in props',
    tagName: 'span'
  }
};
