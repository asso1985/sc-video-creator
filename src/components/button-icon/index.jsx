import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button-icon.scss';
import { ReactComponent as Browse }  from 'assets/browse.svg';
import { ReactComponent as Create } from 'assets/create.svg';
import { ReactComponent as User } from 'assets/user.svg';

const icons = {
  'browse': Browse,
  'create': Create,
  'user': User
};

const ButtonIcon = ({ icon, type, size, className, ...rest }) => {
  const cs = classNames('scv-button-icon', className, {
    [`size-${size}`]: size
  });

  const Icon = icons[icon];
  return <button className={cs} type={type} {...rest}><Icon /></button>;
};

ButtonIcon.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger']),
  size: PropTypes.oneOf(['md', 'lg']),
  type: PropTypes.oneOf(['button', 'submit']),
  children: PropTypes.node
};

ButtonIcon.defaultProps = {
  size: 'md'
};

export default ButtonIcon;
