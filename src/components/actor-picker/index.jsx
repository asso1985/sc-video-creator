import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import ActorPreview from "./components/actor-preview";

const ActorPicker = ({ actors, selectedActorId, onActorSelect }) => {

  return (

    <Container fluid={true} style={{ margin: '0 -15px' }}>
      <Row  gutterWidth={10}>
        {actors.map((actor) => (
          <Col xs={4} key={actor.id}><ActorPreview actor={actor} isSelected={selectedActorId === actor.id} onActorSelect={onActorSelect} /></Col>
        ))}
      </Row>
    </Container>

  );
};

ActorPicker.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string
  })),
  selectedActorId: PropTypes.number,
  onActorSelect: PropTypes.func
};

ActorPicker.defaultProps = {
  actor: {}
};

export default ActorPicker;
