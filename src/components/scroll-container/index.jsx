import React from 'react';
import PropTypes from 'prop-types';

const ScrollContainer = ({ children }) => {
  return (
    <div className="scv-scroll-container">
      {children}
    </div>
  );
};

ScrollContainer.propTypes = {
  children: PropTypes.node
};

export default ScrollContainer;
