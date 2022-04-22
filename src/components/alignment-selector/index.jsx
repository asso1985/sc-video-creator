import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import PropTypes from 'prop-types';
import Form from 'components/form';
import Radio from 'components/radio';

const AlignmentSelector = ({ selectedAlignment, onAlignmentSelect }) => {

  return (
    <Form onSubmit={onAlignmentSelect}>
      <Container fluid={true} style={{ margin: '0 -15px' }}>
        <Row gutterWidth={22} >
          <Col><Radio value='left' checked={selectedAlignment === 'left'} onSelect={onAlignmentSelect} /></Col>
          <Col><Radio value='center' checked={selectedAlignment === 'center'} onSelect={onAlignmentSelect} /></Col>
          <Col><Radio value='right' checked={selectedAlignment === 'right'} onSelect={onAlignmentSelect} /></Col>
        </Row>
      </Container>
    </Form>
  );
};

AlignmentSelector.propTypes = {
  selectedAlignment: PropTypes.oneOf(['left', 'right', 'center']),
  onAlignmentSelect: PropTypes.func
};

export default AlignmentSelector;
