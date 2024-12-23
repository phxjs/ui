import React from 'react';

export function Form({action, method, onSubmit, tagName, children, ...args}) {
  const Tag = tagName || 'form';

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit && onSubmit(event);
  };

  if (action) {
    return (
      <Tag
        {...args}
        {...onSubmit && {onSubmit: handleSubmit}}
        action={action}
        method={method || 'post'}
      >
        {children}
      </Tag>
    );
  }

  return <Tag {...args} onSubmit={handleSubmit}>{children}</Tag>;
}