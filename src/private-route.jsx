import React from "react";
import {
  Navigate,
  useLocation
} from "react-router-dom";
import PropTypes from "prop-types";

import { useAuth } from "./contexts/auth";

const PrivateRoute = ({ children }) => {
  let { isLogged } = useAuth();
  let location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node
};

export default PrivateRoute;
