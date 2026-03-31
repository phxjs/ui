import React from 'react';
import { expect, fn, userEvent } from 'storybook/test';
import { LoginForm } from './LoginForm';

export default {
  component: LoginForm,
  args: {
    action: '/api/login',
    onSubmit: fn(),
  }
};

export const ContrivedLoginForm = {
  render(args) {
    const handleSubmit = (event) => {
      event.preventDefault();
      args.onSubmit(event);
    };
    return (
      <form action={args.action} onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor="email">email</label>
        <input type="email" id="email" name="email"/>
        <label htmlFor="password">password</label>
        <input type="password" id="password" name="password"/>
        <input type="submit" />
      </form>
    );
  },
  play: async ({ args, canvas, canvasElement }) => {
    const document = canvasElement.ownerDocument;

    const emailLabel = await canvas.getByText('email');
    await userEvent.click(emailLabel);
    await userEvent.type(document.activeElement, 'test@gmail.com');

    const passwordLabel = await canvas.getByText('password');
    await userEvent.click(passwordLabel);
    await userEvent.type(document.activeElement, 'Password1234!{Enter}');

    await expect(args.onSubmit).toHaveBeenCalledOnce();
  }
}

export const LoginFormInAction = {
  ...ContrivedLoginForm,
  render(args) {
    return (
      <LoginForm action={args.action} onSubmit={args.onSubmit} />
    );
  }
}