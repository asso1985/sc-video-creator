import './button.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ as: Component, variant, full, className, children, type, role, ...rest }) => {

  const cs = classNames('scv-button', className, {
    [`variant-${variant}`]: variant,
    [`full`]: full
  });

  return <Component {...rest} type={type} role={role} className={cs}>{children}</Component>;
};

Button.propTypes = {
  as: PropTypes.node,
  full: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'link']),
  type: PropTypes.oneOf(['button', 'submit']),
  role: PropTypes.string,
  children: PropTypes.node
};

Button.defaultProps = {
  full: false,
  as: 'button',
  role: 'button',
  variant: 'secondary',
  type: 'button'
};

export default Button;
