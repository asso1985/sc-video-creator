import * as EmailValidator from 'email-validator';

export const isValidEmail = (email) => EmailValidator.validate(email);
export const isMinLength = (value , length = 0) => value.length > length;

// would need to add a proper validation based on desired matching rules
export const isValidPassword = (pwd) => pwd && pwd.length > 0;
