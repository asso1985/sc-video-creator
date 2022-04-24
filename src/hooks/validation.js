import { useState } from "react";

const useValidation = (rules, touched) => {

  const isValid = Object.values(rules).every((value) => value);
  const hasError = (field) => touched[field] && !rules[field];

  return { isValid, hasError };
};

export default useValidation;
