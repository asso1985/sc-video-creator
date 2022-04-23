import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './text.scss';

const Text = ({ as: Component, children, variant, size, bold, className, ...rest }) => {

  const cs = classNames('scv-text', className, {
    [`variant-${variant}`]: variant,
    [`size-${size}`]: size,
    ['bold']: bold
  });

  return (
    <Component className={cs} {...rest}>{children}</Component>
  );
};

Text.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'strong', 'b', 'i', 'sub', 'sup', 'time']),
  size: PropTypes.oneOf(['sm', 'body', 'md', 'lg']),
  variant: PropTypes.oneOf(['dark', 'blue', 'gray', 'light']),
  bold: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

Text.defaultProps = {
  as: 'span',
  variant: 'dark',
  size: 'body',
  bold: false
};

export default Text;
