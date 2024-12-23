import React from 'react';
import {Form} from './Form';
import { withActions } from '@storybook/addon-actions/decorator';
import { fn } from '@storybook/test';
import { FormField } from './Field/FormField';

export default {
  title: '@phxjs/ui/Form',
  component: Form,
  args:{
    onSubmit: fn(),
  },
  decorators: [withActions],
  tags: ['autodocs']
};

export const FormInAction = {
  args: {
    action: '/path',
    method: "post",
  },

  argTypes: {
    method: {
      options: ['post', 'put', 'get'],
      control: { type: 'select' },
    },
  },

  render(args) {
    return (
      <Form {...args}>
        <input name="title" type="text" />
        <input name="description" type="text" />
        <input type="submit" />
      </Form>
    )
  }
};

export const FormOnSubmit = {
  render(args) {
    return (
      <Form {...args}>
        <input name="title" type="text" />
        <input name="description" type="text" />
        <input type="submit" />
      </Form>
    )
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
        <input name="description" type="text" />
        <input type="submit" />
      </Form>
    )
  }
};