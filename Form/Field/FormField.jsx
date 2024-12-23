/* eslint-disable react/prop-types */ /* TODO : remove disable */
import React from 'react';
import { findTypeElement } from './findTypeElement';

FormField.Error = FormFieldError;
FormField.Input = FormFieldInput;
FormField.Label = FormFieldLabel;

export function FormField({ children, errorMessage = null, label, name, inputTagName = 'input', tagName, ...args }) {
  const inputId = React.useId();
  const errorId = `${inputId}__error`;
  const Tag = tagName || 'div';

  const hasError = Boolean(errorMessage);

  const childs = React.Children.toArray(children)
    .map((child) => {
      if (child.type === FormFieldError) {
        return React.cloneElement(child, { errorId }, errorMessage);
      }
      if (child.type === FormFieldInput) {
        return React.cloneElement(child, { id: inputId, inputTagName, name, 'aria-describedby': `${errorId}` });
      }
      if (child.type === FormFieldLabel) {
        return React.cloneElement(child, { inputId }, label);
      }

      return child;
    });

  const hasErrorElement = findTypeElement(childs, FormFieldError);
  const hasInputElement = findTypeElement(childs, FormFieldInput);
  const hasLabelElement = findTypeElement(childs, FormFieldLabel);

  if (!hasLabelElement && !hasInputElement && !hasErrorElement) {
    return (
      <Tag {...args}>
        <FormFieldLabel inputId={inputId}>{label}</FormFieldLabel>
        <FormFieldInput id={inputId} inputTagName={inputTagName} aria-describedby={`${errorId}`} />
        <FormFieldError id={errorId}>{errorMessage}</FormFieldError>
        {childs}
      </Tag>
    );
  }

  if (!hasLabelElement && hasInputElement && !hasErrorElement) {
    return (
      <Tag {...args}>
        {!hasLabelElement && <FormFieldLabel inputId={inputId}>{label}</FormFieldLabel>}
        {!hasErrorElement && <FormFieldError id={errorId}>{errorMessage}</FormFieldError>}
        {childs}
      </Tag>
    );
  }

  return (
    <Tag {...args}>
      {!hasLabelElement && <FormFieldLabel inputId={inputId}>{label}</FormFieldLabel>}
      {childs}
      {!hasErrorElement && <FormFieldError id={errorId} hasError={hasError}>{errorMessage}</FormFieldError>}
    </Tag>
  );
}

export function FormFieldInput({ inputTagName, ...args }) {
  const Input = inputTagName || 'input';
  return <Input {...args} />;
}

export function FormFieldLabel({ inputId, tagName, ...args }) {
  const Label = tagName || 'label';
  return <Label {...args} htmlFor={inputId} />;
}

export function FormFieldError({ hasError, tagName, ...args }) {
  const ErrorTag = tagName || 'span';
  return <ErrorTag {...args} />;
}
