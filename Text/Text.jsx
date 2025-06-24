import React from 'react';
import PropTypes from 'prop-types';

Text.propTypes = {
  /** font-tiny5|font-shantell-sans|font-urbanist */
  className: PropTypes.string,
  /** could be string. */
  children: PropTypes.node,
  /** expects string values, should look into html content... */
  content: PropTypes.string,
  /** expecting string representation of tag names */
  tagName: PropTypes.string
};

export function Text({ className, children = 'I am a Text Component! Give me content.', content = '', tagName = 'span', ...props }) {
  const childs = content || children;
  const Tag = tagName;

  return (
    <Tag className={className} data-ui="text" {...props}>
      {childs}
    </Tag>
  );
}
