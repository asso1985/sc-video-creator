import './video-preview.scss';
import React from "react";
import PropTypes from "prop-types";
import Button from "../button";

const VideoPreview = ({ video, onScriptChange }) => {

  return (
    <div className="scv-video-preview">
      <div className="scv-video-preview-image outer" style={{ backgroundImage: `url(${video.background?.avatar})` }}>
        <div className="scv-video-preview-image" style={{ backgroundImage: `url(${video.actor?.avatar})` }}>
          <Button variant="tertiary">Preview</Button>
        </div>
      </div>
      <div className="scv-video-preview-text">
        <textarea
          rows="5"
          placeholder="Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages"
          value={video.script}
          onChange={(e) => onScriptChange(e.target.value)}
        />
        <Button variant="secondary">Listen</Button>
      </div>
    </div>
  );
};

VideoPreview.propTypes = {
  video: PropTypes.object,
  onScriptChange: PropTypes.func
};

export default VideoPreview;
