import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined
};

/**
 * Primary UI component for user interaction
 */
export function Button({ primary, size, label, ...props }) {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      {...props}
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    >
      {label}
    </button>
  );
}
