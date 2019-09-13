import React from 'react';
import PropTypes from 'proptypes';
import './_button.scss';

const Button = ({ text, variant, size, outlined, children, attrs }) => {
  return (
    <button className={`button--${variant} button--${size} ${outlined && 'outlined'}`} {...attrs}>
      {text || children || 'Button'}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['aqua']),
  size: PropTypes.oneOf(['sm', 'lg']),
  text: PropTypes.string,
  attrs: PropTypes.object,
  outlined: PropTypes.boolean,
}

Button.defaultProps = {
  variant: 'aqua',
  size: 'lg',
  outlined: false
}

export default Button;
