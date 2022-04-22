import './header.scss';
import React from "react";
import classNames from 'classnames';
import PropTypes from "prop-types";
import Text from "../text";

const Header = ({ title, hasBorder, leftElement, className, children }) => {
  const cs = classNames('header', className, {
    [`has-border`]: hasBorder
  });

  return (
    <div className={cs}>
      <div className="header-title">
        {leftElement ? leftElement : <Text as="h2" size="lg">{title}</Text>}
      </div>
      <div className="header-actions">{children}</div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  leftElement: PropTypes.node,
  hasBorder: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Header;
