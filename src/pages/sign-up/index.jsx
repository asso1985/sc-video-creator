import React, { useState, useCallback } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from "contexts/auth";
import useTouched from "hooks/touched";
import useValidation from "hooks/validation";

import Header from 'components/header';
import AuthFooter from 'components/auth-footer';
import Button from 'components/button';
import Form from 'components/form';
import Loading from 'components/loading';
import Centerer from 'components/centerer';
import FormField from 'components/form-field';
import { isMinLength, isValidEmail, isValidPassword } from 'utils/validation';

const SignUpPage = ({}) => {

  const [email, setEmail ] = useState('');
  const [pwd, setPwd ] = useState('');
  const [fullname, setFullname ] = useState('');

  let navigate = useNavigate();
  let location = useLocation();
  const { signUp, isLoading } = useAuth();

  let from = location.state?.from?.pathname || "/";

  const rules = {
    fullname: isMinLength(fullname),
    email: isValidEmail(email),
    password: isValidPassword(pwd)
  };

  const [ touched, setTouched ] = useTouched();
  const { isValid, errorMessage } = useValidation(rules, touched);

  const handleSubmit = useCallback(() => {

    if (!isValid) {
      return;
    }

    signUp({ email, fullname, pwd }, () => {
      navigate(from, { replace: true });
    });
  }, [isValid, email, fullname, pwd]);

  return (
    <div>
      <Header title="Sign Up"></Header>
      <Centerer>
        <Loading isLoading={isLoading}>
          <Form centered={true} onSubmit={handleSubmit}>
            <FormField label="Full Name" error={errorMessage('fullname', 'Full Name is required')}>
              <input name="fullname" placeholder="Full Name" type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} onBlur={setTouched} />
            </FormField>
            <FormField label="Email address" error={errorMessage('email', 'Email address is required')}>
              <input name="email" placeholder="Email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={setTouched} />
            </FormField>
            <FormField label="Password" error={errorMessage('password', 'Password is required')}>
              <input name="password" placeholder="Enter Password" autoComplete="new-password" type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} onBlur={setTouched} />
            </FormField>
            <Button type="submit" variant="primary" disabled={isLoading}>Sign Up</Button>
          </Form>
          <AuthFooter text='Already User?' link='/login' cta='Login'/>
        </Loading>
      </Centerer>
    </div>
  );
};

export default SignUpPage;
