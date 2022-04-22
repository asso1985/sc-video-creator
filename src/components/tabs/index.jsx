import './tabs.scss';
import React, { useState } from "react";
import PropTypes from "prop-types";

import Tab from './tab';

const Tabs = ({ children }) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="scv-tabs">
      <ul className="scv-tabs-nav">
        {children.map((child, index) => {
          const { label } = child.props;

          return (
            <Tab
              isActive={index === activeTab}
              key={label}
              label={label}
              onClick={() => setActiveTab(index)} />
          );
        })}
      </ul>
      <div className="scv-tabs-content">
        {children.map((child, index) => {
          if (index !== activeTab) {
            return null;
          }

          return child.props.children;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object)
};

export default Tabs;
