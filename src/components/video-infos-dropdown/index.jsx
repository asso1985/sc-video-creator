import './video-infos-dropdown.scss';
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Text from "../text";
import Button from "../button";
import ButtonGroup from "../button-group";
import Tag from "../tag";
import { ReactComponent as ArrowDown } from 'assets/arrow_down.svg';

const VideoInfosDropdown = ({ newVideoInfos, onSave }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(newVideoInfos.title);
  const [tags, setTags] = useState(newVideoInfos.tags);

  const handleOnSave = useCallback(() => {
    setIsEditing(false);
    onSave && onSave([title, tags]);
  }, [title, tags, onSave]);

  const handleOnCancel = useCallback(() => {
    setIsEditing(false);
    setTitle(newVideoInfos.title);
    setTags(newVideoInfos.tags);
  }, [newVideoInfos]);

  const handleOnTagToggle = useCallback((tag) => {
    setTags(tags.includes(tag) ? tags.filter((item) => item !== tag) : [ ...tags, tag]);
  }, [tags]);

  if (!isEditing) {
    return <div className="video-infos-dropdown-opener" onClick={() => setIsEditing(true)}><Text as="h2" size="lg">{newVideoInfos?.title}</Text> <ArrowDown with={10} height={10} /></div>;
  }

  const canSave = title?.length > 0;

  return (
    <div className="video-infos-dropdown" data-testid='video-infos-dropdown'>
      <input type="text" placeholder="Choose a name" autoFocus={true} value={title} onChange={(e) => setTitle(e.target.value)} />
      <div className="video-infos-dropdown-desc">
        <Text variant="gray">Fusce quis magna vel ex pellentesque consequat sed et turpis. Vivamus bibendum rutrum euismod. Sed non sagittis est, semper</Text>
      </div>
      <div className="video-infos-dropdown-tags">
        <Tag name='email' active={tags?.includes('email')} onClick={() => handleOnTagToggle('email')} />
        <Tag name='marketing' active={tags?.includes('marketing')} onClick={() => handleOnTagToggle('marketing')} />
        <Tag name='greeting' active={tags?.includes('greeting')} onClick={() => handleOnTagToggle('greeting')} />
        <Tag name='other' active={tags?.includes('other')} onClick={() => handleOnTagToggle('other')} />
      </div>
      <ButtonGroup>
        <Button variant="secondary" onClick={handleOnCancel}>cancel</Button>
        <Button variant="primary" disabled={!canSave} onClick={handleOnSave}>Save</Button>
      </ButtonGroup>

    </div>
  );
};

VideoInfosDropdown.propTypes = {
  newVideoInfos: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired
};

export default VideoInfosDropdown;
