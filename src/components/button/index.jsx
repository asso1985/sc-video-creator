import './button.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ as: Component, variant, children, type, ...rest }) => {
  return <Component {...rest} type={type} className={`scv-button ${variant}`} role="button">{children}</Component>;
};

Button.propTypes = {
  as: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'link']),
  type: PropTypes.oneOf(['button', 'submit']),
  children: PropTypes.node
};

Button.defaultProps = {
  as: 'button',
  variant: 'secondary',
  type: 'button'
};

export default Button;
