import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import ImagePreview from "./components/image-preview";

const ImagePicker = ({ images, selectedImageId, onImageSelect }) => {

  return (
    <Container fluid={true} style={{ margin: '0 -15px' }}>
      <Row  gutterWidth={10}>
        {images.map((image) => (
          <Col xs={4} key={image.id}><ImagePreview image={image} isSelected={selectedImageId === image.id} onImageSelect={onImageSelect} /></Col>
        ))}
      </Row>
    </Container>
  );
};

ImagePicker.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string
  })),
  selectedImageId: PropTypes.number,
  onImageSelect: PropTypes.func
};

export default ImagePicker;
