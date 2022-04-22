import './empty.scss';
import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Text from "../text";
import Button from "../button";
import Centerer from "../centerer";

const Empty = ({ cta, link }) => {
  return (
    <Centerer>
      <div className="scv-empty-state">
        <Text size="lg" as='h2'>Sorry, nothing to show yet</Text>
        <Text size="sm" as='p'>go ahead and create your first {cta}</Text>
        <Link to={link}><Button variant="primary" as='span'>Create new {cta}</Button></Link>
      </div>
    </Centerer>

  );
};

Empty.propTypes = {
  cta: PropTypes.string,
  link: PropTypes.string
};

export default Empty;
