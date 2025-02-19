import PropTypes from 'prop-types';
import React from 'react';

Form.propTypes = {
  action: PropTypes.string,
  method: PropTypes.oneOf('get', 'post', 'put'),
  onSubmit: PropTypes.func,
  tagName: PropTypes.string
};

export function Form({ action, method = 'post', onSubmit, tagName = 'form', ...args }) {
  const Tag = tagName;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  if (action) {
    return (
      <Tag
        {...args}
        action={action}
        method={method}
        {...(onSubmit && { onSubmit: handleSubmit })}
      />
    );
  }

  return <Tag {...args} {...(onSubmit && { onSubmit: handleSubmit })} />;
}

Form.Submit = function Submit() {
  return <input type="submit" />;
};
