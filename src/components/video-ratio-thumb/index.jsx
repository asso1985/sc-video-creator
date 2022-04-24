import './video-ratio-thumb.scss';
import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';

const VideoRatioThumb = ({ image, radius }) => {

  const cs = classNames('scv-video-thumb-image', {
    [`radius-${radius}`]: radius
  });

  return (
    <div className={cs} style={{ backgroundImage: `url(${image})` }}>
      <div className='scv-video-thumb-spacer'></div>
    </div>
  );
};

VideoRatioThumb.propTypes = {
  image: PropTypes.string,
  radius: PropTypes.oneOf(['sm', 'lg'])
};

VideoRatioThumb.defaultProps = {
  radius: 'lg'
};

export default VideoRatioThumb;
