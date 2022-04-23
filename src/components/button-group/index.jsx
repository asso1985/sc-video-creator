import './button-group.scss';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ButtonGroup = ({ align, children }) => {
  const cs = classNames('scv-button-group', {
    [`align-${align}`]: align
  });

  return (
    <div className={cs}>{children}</div>
  );
};

ButtonGroup.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node
};

ButtonGroup.defaultProps = {
  align: 'left'
};

export default ButtonGroup;
