import './video-item.scss';
import React from "react";
import PropTypes from 'prop-types';
import Tag from 'components/tag';
import Text from 'components/text';

const VideoItem = ({ video }) => {

  return (
    <div className="video-item">
      <img src={video.actor.avatar} alt={video.actor.name} />
      <Text size='lg'>{video.infos.title}</Text>
      <div className='video-item__tags'>
        {video.infos.tags.map((tag, index) => (<Tag name={tag} key={index} />))}
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoItem;
