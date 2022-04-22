import './actor-preview.scss';
import React, { useCallback } from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Text from "components/text";

const ActorPreview = ({ actor, isSelected, onActorSelect }) => {
  const { avatar, name, id } = actor;

  const cs = classNames('scv-avatar-preview', {
    [`selected`]: isSelected
  });

  const handleOnActorSelect = useCallback(() => {
    onActorSelect(id);
  }, [id, onActorSelect]);

  return (
    <div className={cs} onClick={handleOnActorSelect}>
      <img src={avatar} alt={name} />
      <Text size='sm' variant={isSelected ? 'blue' : 'gray'}>{name}</Text>
    </div>
  );
};

ActorPreview.propTypes = {
  actor: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string
  }),
  isSelected: PropTypes.bool,
  onActorSelect: PropTypes.func
};

ActorPreview.defaultProps = {
  actor: {}
};

export default ActorPreview;
