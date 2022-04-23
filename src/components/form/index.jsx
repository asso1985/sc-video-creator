import './form.scss';
import React from "react";
import PropTypes from "prop-types";

const Form = ({ centered, children, onSubmit }) => {

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(e);
  };

  return (
    <form className={centered ? 'centered' : ''} onSubmit={handleOnFormSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
