import React from 'react';
import PropTypes from 'prop-types';

Text.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  tagName: PropTypes.string
};

Text.defaultProps = {
  children: 'I am a Text Component! Give me content.',
  content: '',
  tagName: 'span'
};

export function Text({className, children, content, tagName: Tag, ...props}) {
  const childs = content || children;

  return (
    <Tag className={className} data-ui="text" {...props}>
      {childs}
    </Tag>
  );
}