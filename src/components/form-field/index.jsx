import './form-field.scss';
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const FormField = ({ label, error, children }) => {

  const cs = classNames('scv-form-field', {
    [`error`]: error
  });

  return (
    <div className={cs}>
      <label>{label}</label>
      {children}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default FormField;
