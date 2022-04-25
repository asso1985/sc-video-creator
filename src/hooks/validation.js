const useValidation = (rules, touched) => {

  const isValid = Object.values(rules).every((value) => value);
  const hasError = (field) => touched[field] && !rules[field];
  const errorMessage = (field, message) => {
    if (hasError(field)) {
      return message;
    }

    return false;
  };

  return { isValid, hasError, errorMessage };
};

export default useValidation;
