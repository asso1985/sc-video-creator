import './loading.scss';
import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import { ReactComponent as Spinner } from 'assets/spinner.svg';

const Loading = ({ isLoading, fullScreen, children }) => {

  const cs = classNames('scv-loading', {
    [`full-screen`]: isLoading && fullScreen
  });

  return (
    <div className={cs}>
      {isLoading && <Spinner width="60px" height="60px" />}
      <div style={{ display: !isLoading ? 'block' : 'none' }}>
        {children}
      </div>
    </div>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  fullScreen: PropTypes.bool,
  children: PropTypes.node
};

export default Loading;
