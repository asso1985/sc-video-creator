import './video-preview.scss';
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Button from "../button";

const VideoPreview = ({ actor }) => {
  console.log(actor);
  return (
    <div className="scv-video-preview">
      <div className="scv-video-preview-image" style={{ backgroundImage: `url(${actor.avatar})` }}>
        <Button variant="tertiary">Preview</Button>
      </div>
      <div className="scv-video-preview-text">
        <textarea rows="5" placeholder="Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages"></textarea>
        <Button variant="secondary">Listen</Button>
      </div>
    </div>
  );
};

VideoPreview.propTypes = {
  actor: PropTypes.object
};

export default VideoPreview;
