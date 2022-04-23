import './video-item.scss';
import React from "react";
import PropTypes from 'prop-types';
import Tag from 'components/tag';
import Text from 'components/text';

const VideoItem = ({ video }) => {

  return (
    <div className="scv-video-item">
      <div>
        <div className="scv-video-item-image" style={{ backgroundImage: `url(${video.actor?.avatar})` }}>
          <div className='scv-video-item-spacer'></div>
        </div>
      </div>
      <Text size='md'>{video.title}</Text>
      <div className='scv-video-item__tags'>
        {video.tags.map((tag, index) => (<Tag name={tag} key={index} />))}
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoItem;
