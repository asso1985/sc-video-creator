import './centerer.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Centerer = ({ children }) => {
  return (
    <div className="scv-centerer">{children}</div>
  );
};

Centerer.propTypes = {
  children: PropTypes.node
};

export default Centerer;
