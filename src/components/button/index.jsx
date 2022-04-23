import './button.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ as: Component, variant, children, type, role, ...rest }) => {
  return <Component {...rest} type={type} role={role} className={`scv-button ${variant}`}>{children}</Component>;
};

Button.propTypes = {
  as: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'link']),
  type: PropTypes.oneOf(['button', 'submit']),
  role: PropTypes.string,
  children: PropTypes.node
};

Button.defaultProps = {
  as: 'button',
  role: 'button',
  variant: 'secondary',
  type: 'button'
};

export default Button;
