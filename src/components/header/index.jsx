import './header.scss';
import React from "react";
import classNames from 'classnames';
import PropTypes from "prop-types";
import Text from "../text";

const Header = ({ title, leftElement, className, children }) => {
  const cs = classNames('header', className, {
    [`no-border`]: !children
  });

  return (
    <div className={cs}>
      <div className="header-title">
        {leftElement ? leftElement : <Text as="h2" size="lg">{title}</Text>}
      </div>
      {children && <div className="header-actions">{children}</div>}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  leftElement: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Header;
