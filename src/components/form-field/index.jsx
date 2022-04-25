import './form-field.scss';
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Text from 'components/text';

const FormField = ({ label, error, children }) => {

  const cs = classNames('scv-form-field', {
    [`error`]: error
  });

  return (
    <div className={cs}>
      <label>{label}</label>
      {children}
      {error && <div className='scv-form-field-error'><Text size='sm' variant='danger'>{error}</Text></div>}
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
