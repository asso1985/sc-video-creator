import './tag.scss';
import React from "react";
import classNames from 'classnames';
import PropTypes from "prop-types";
import Text from "../text";

const Tag = ({ name, active, interactive, onClick }) => {

  const cs = classNames('scv-tag', {
    [`active`]: active,
    [`interactive`]: interactive
  });

  return (
    <div className={cs} onClick={onClick}><Text variant={active ? 'light' : 'gray'}>{name}</Text></div>
  );
};

Tag.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
  interactive: PropTypes.bool,
  onClick: PropTypes.func
};

export default Tag;
