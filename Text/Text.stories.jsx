import { Text } from './Text';

export default {
  title: '@phxjs/ui/Text',
  component: Text,
  tags: ['autodocs']
};

export const TextFonts = {
  args: {
    className: 'font-tiny5',
    children: 'I am a Text Component! Give me content.',
    content: '',
    tagName: 'span'
  },
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' },
    content: { control: 'text' },
    tagName: { control: 'text' }
  }
};
