import './form.scss';
import React from "react";
import PropTypes from "prop-types";

const Form = ({ onSubmit, children }) => {

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(e);
  };

  return (
    <form onSubmit={handleOnFormSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
