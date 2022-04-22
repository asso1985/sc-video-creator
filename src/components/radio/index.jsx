import './radio.scss';
import React from "react";
import PropTypes from 'prop-types';

const Radio = ({ value, checked, onSelect }) => {
  return (
    <div className="scv-radio">
      <input checked={checked} id={`radio-${value}`} type="radio" value={value} onChange={(e) => onSelect(e.target.value)}/><label htmlFor={`radio-${value}`}>{value}</label>
    </div>
  );
};

Radio.propTypes = {
  value: PropTypes.any,
  checked: PropTypes.bool,
  onSelect: PropTypes.func
};

export default Radio;
