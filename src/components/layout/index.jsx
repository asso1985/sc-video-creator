import React from "react";
import { Outlet } from "react-router-dom";
import classNames from "classnames";
import { useAuth } from "contexts/auth";
import SideMenu from "../side-menu";
import PropTypes from 'prop-types';
import './layout.scss';

const Layout = ({ className }) => {

  let { isLogged } = useAuth();

  const cs = classNames('layout-wrapper', className, {
    [`not-logged`]: !isLogged
  });

  return (
    <div className={cs}>
      <SideMenu />
      <div className="layout-main">{<Outlet />}</div>
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Layout;
