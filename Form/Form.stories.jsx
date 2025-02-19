import React from 'react';
import { Form } from './Form';
import { withActions } from '@storybook/addon-actions/decorator';
import { fn } from '@storybook/test';
import { FormField } from './Field/FormField';

export default {
  title: '@phxjs/ui/Form',
  component: Form,
  decorators: [withActions],
  tags: ['autodocs'],
  args: {
    onSubmit: fn(),
    action: '/api',
    method: 'post',
    tagName: 'form'
  },
  argTypes: {
    method: {
      control: { type: 'radio' },
      options: ['post', 'put', 'get']
    }
  }
};

export const FormInAction = {
  render(args) {
    return (
      <Form {...args}>
        <input name="title" type="text" placeholder="title" />
        <input name="description" type="text" placeholder="description" />
        <input type="submit" />
      </Form>
    );
  }
};

export const FormOnSubmit = {
  render(args) {
    return (
      <Form {...args}>
        <input name="title" type="text" placeholder="title" />
        <input name="description" type="text" placeholder="description" />
        <input type="submit" />
      </Form>
    );
  }
};

export const FormFieldExample = {
  render(args) {
    return (
      <Form {...args}>
        <FormField name="title" label="Title">
          <FormField.Label />
          <FormField.Input />
        </FormField>

        <FormField name="description" label="Description" describedBy="extraDescription">
          <FormField.Label />
          <FormField.Input />
          <div id="extraDescription">some extra content</div>
        </FormField>

        <Form.Submit />
      </Form>
    );
  }
};
