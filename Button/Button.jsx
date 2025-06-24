import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const SM = 'small';
const MD = 'medium';
const LG = 'large';

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf([SM, MD, LG]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};

/**
 * Primary UI component for user interaction
 */
export function Button({ primary = false, size = MD, label, ...props }) {
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
