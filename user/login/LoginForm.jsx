import React from 'react';
import { FormField } from '../../Form/Field/FormField';
import { Form } from '../../Form/Form';
import PropTypes from 'prop-types';

LoginForm.propTypes = {
  action: PropTypes.string,
  onSubmit: PropTypes.func
};

export function LoginForm({ action = 'api/login', onSubmit }) {
  return (
    <Form action={action} onSubmit={onSubmit}>
      <FormField name="email" label="email" type="email" />
      <FormField name="password" label="password" type="password" />
      <Form.Submit />
    </Form>
  );
}
