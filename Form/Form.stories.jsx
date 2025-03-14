import React from 'react';
import { withActions } from '@storybook/addon-actions/decorator';
import { expect, fn, userEvent } from '@storybook/test';
import { Form } from './Form';
import { FormField } from './Field/FormField';

export default {
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
        <input
          name="title"
          type="text"
          placeholder="title"
        />
        <input
          name="description"
          type="text"
          placeholder="description"
        />
        <input type="submit" />
      </Form>
    );
  },
  play: async ({ args, canvas }) => {
    const input = await canvas.getByPlaceholderText('title');
    await userEvent.type(input, 'The Form Example');

    const input2 = await canvas.getByPlaceholderText('description');
    await userEvent.type(input2, 'dedicated to all the developers');

    const submitBtn = await canvas.getByRole('button');
    expect(submitBtn).toBeDefined();

    await userEvent.click(submitBtn);

    expect(args.onSubmit).toHaveBeenCalledOnce();
  }
};

export const FormOnSubmitAccessibly = {
  render(args) {
    return (
      <Form {...args}>
        <label htmlFor="title_input">title</label>
        <input
          id="title_input"
          name="title"
          type="text"
        />
        <label htmlFor="description_input">description</label>
        <input
          id="description_input"
          name="description"
          type="text"
        />
        <input type="submit" />
      </Form>
    );
  },
  play: async ({ args, canvas, canvasElement }) => {
    const document = canvasElement.ownerDocument;

    const titleLabel = await canvas.getByText('title');
    await userEvent.click(titleLabel);
    await userEvent.type(document.activeElement, 'The Form Example');

    const descriptionLabel = await canvas.getByText('description');
    await userEvent.click(descriptionLabel);
    await userEvent.type(document.activeElement, 'dedicated to all the developers {Enter}');

    expect(args.onSubmit).toHaveBeenCalledOnce();
  }
};

export const FormFieldExample = {
  render(args) {
    return (
      <Form {...args}>
        <FormField
          name="title"
          label="Title"
        >
          <FormField.Label />
          <FormField.Input />
        </FormField>

        <FormField
          name="description"
          label="Description"
          describedBy="extraDescription"
        >
          <FormField.Label />
          <FormField.Input />
          <div id="extraDescription">some extra content</div>
        </FormField>

        <Form.Submit />
      </Form>
    );
  },
  play: async ({ args, canvas, canvasElement }) => {
    const document = canvasElement.ownerDocument;

    const titleLabel = await canvas.getByText(/title/i);
    await userEvent.click(titleLabel);
    await userEvent.type(document.activeElement, 'The Form Example');

    const descriptionLabel = await canvas.getByText(/description/i);
    await userEvent.click(descriptionLabel);
    await userEvent.type(document.activeElement, 'dedicated to all the developers {Enter}');

    const submitBtn = await canvas.getByRole('button');
    expect(submitBtn).toBeDefined();

    await userEvent.click(submitBtn);

    expect(args.onSubmit).toHaveBeenCalledTimes(2);
  }
};
