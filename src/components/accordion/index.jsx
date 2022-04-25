import './accordion.scss';
import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Text from 'components/text';
import { ReactComponent as ArrowDown } from 'assets/arrow_down.svg';

const AccordionItem = ({ title, isOpen, hasBorder, children, onToggle }) => {
  const cs = classNames('scv-accordion-item', {
    [`open`]: isOpen,
    ['border']: hasBorder
  });

  return (
    <div className={cs}>
      <header onClick={onToggle}>
        <div><Text variant={isOpen ? 'blue' : 'gray'}>{title}</Text></div>
        <ArrowDown />
      </header>
      {isOpen && <div className="scv-accordion-item__content">{children}</div>}
    </div>
  );
};

AccordionItem.propTypes = {
  isOpen: PropTypes.bool,
  hasBorder: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  onToggle: PropTypes.func
};

const Accordion = ({ children: accordions, initialOpen }) => {

  const [activeAccordion, setActiveAccordion] = useState(initialOpen);

  const handleOnToggle = useCallback((title) => {
    setActiveAccordion(title);
  }, []);

  return (
    <div className="scv-accordion">
      <ul className="scv-accordion-list">
        {accordions.map((child, index) => {
          const { title, children } = child.props;
          const isOpen = activeAccordion === title;
          const hasBorder = !isOpen && accordions[index + 1]?.props.title !== activeAccordion;

          return (
            <AccordionItem
              isOpen={isOpen}
              hasBorder={hasBorder}
              key={index}
              title={title}
              onToggle={() => handleOnToggle(title)}>
              {children}
            </AccordionItem>
          );
        })}
      </ul>
    </div>
  );
};

Accordion.propTypes = {
  initialOpen: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object)
};

Accordion.defaultProps = {
  initialOpen: undefined
};

export default Accordion;
