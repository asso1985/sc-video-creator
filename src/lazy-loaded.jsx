import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/loading';

const LazyLoaded = ({ children }) => {
  return (
    <React.Suspense fallback={<Loading isLoading={true} fullScreen={true}></Loading>}>
      {children}
    </React.Suspense>
  );
};

LazyLoaded.propTypes = {
  children: PropTypes.node
};

export default LazyLoaded;
