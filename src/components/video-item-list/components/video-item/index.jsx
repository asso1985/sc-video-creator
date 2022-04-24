import './video-item.scss';
import React from "react";
import PropTypes from 'prop-types';
import Tag from 'components/tag';
import Text from 'components/text';
import VideoRatioThumb from 'components/video-ratio-thumb';

const VideoItem = ({ video }) => {

  return (
    <div className="scv-video-item">
      <div className="scv-video-item-outer">
        <VideoRatioThumb image={video.actor?.avatar} radius='sm' />
      </div>
      <Text size='md'>{video.title}</Text>
      {video.tags.length > 0 && (
        <div className='scv-video-item__tags'>
          {video.tags.map((tag, index) => (<Tag name={tag} key={index} />))}
        </div>
      )}
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoItem;
