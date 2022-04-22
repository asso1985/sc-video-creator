import React from "react";
import PropTypes from "prop-types";
import Text from 'components/text';

const Tab = ({ isActive, label, onClick }) => {


  return (
    <li
      onClick={onClick}
    >
      <Text variant={!isActive ? 'gray' : 'blue'}>{label}</Text>
    </li>
  );
};

Tab.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default Tab;
