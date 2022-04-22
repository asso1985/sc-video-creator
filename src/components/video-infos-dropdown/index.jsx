import './video-infos-dropdown.scss';
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Text from "../text";
import Button from "../button";
import Tag from "../tag";
import { ReactComponent as ArrowDown } from 'assets/arrow_down.svg';

const VideoInfosDropdown = ({ newVideoInfos, onVideoTitleChange, onTagToggle, onSaveRequest }) => {

  const [isEditing, setIsEditing] = useState(false);

  const handleOnSave = useCallback(() => {
    setIsEditing(false);
    onSaveRequest && onSaveRequest();
  }, []);

  if (!isEditing) {
    return <div className="video-infos-dropdown-opener" onClick={() => setIsEditing(true)}><Text as="h2" size="lg">{newVideoInfos?.title}</Text> <ArrowDown with={10} height={10} /></div>;
  }

  const canSave = newVideoInfos.title?.length > 0;

  return (
    <div className="video-infos-dropdown">
      <input type="text" autoFocus={true} value={newVideoInfos.title} onChange={(e) => onVideoTitleChange(e.target.value)} />
      <div className="video-infos-dropdown-desc">
        <Text variant="gray">Fusce quis magna vel ex pellentesque consequat sed et turpis. Vivamus bibendum rutrum euismod. Sed non sagittis est, semper</Text>
      </div>
      <div className="video-infos-dropdown-tags">
        <Tag name='email' active={newVideoInfos?.tags?.includes('email')} onClick={() => onTagToggle('email')} />
        <Tag name='marketing' active={newVideoInfos?.tags?.includes('marketing')} onClick={() => onTagToggle('marketing')} />
        <Tag name='greeting' active={newVideoInfos?.tags?.includes('greeting')} onClick={() => onTagToggle('greeting')} />
        <Tag name='other' active={newVideoInfos?.tags?.includes('other')} onClick={() => onTagToggle('other')} />
      </div>
      <Button variant="primary" disabled={!canSave} onClick={handleOnSave}>Save</Button>
    </div>
  );
};

VideoInfosDropdown.propTypes = {
  newVideoInfos: PropTypes.shape({
    title: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onVideoTitleChange: PropTypes.func.isRequired,
  onTagToggle: PropTypes.func.isRequired,
  onSaveRequest: PropTypes.func.isRequired
};

export default VideoInfosDropdown;
