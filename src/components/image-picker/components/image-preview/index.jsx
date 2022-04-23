import './image-preview.scss';
import React, { useCallback } from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Text from "components/text";

const ImagePreview = ({ image, isSelected, onImageSelect }) => {
  const { avatar, name, id } = image;

  const cs = classNames('scv-image-preview', {
    [`selected`]: isSelected
  });

  const handleOnImageSelect = useCallback(() => {
    onImageSelect(id);
  }, [id, onImageSelect]);

  return (
    <div className={cs} onClick={handleOnImageSelect}>
      <img src={avatar} alt={name} />
      <Text size='sm' variant={isSelected ? 'blue' : 'gray'}>{name}</Text>
    </div>
  );
};

ImagePreview.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string
  }),
  isSelected: PropTypes.bool,
  onImageSelect: PropTypes.func
};

ImagePreview.defaultProps = {
  image: {}
};

export default ImagePreview;
