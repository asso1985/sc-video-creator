import React, { useState, useCallback } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from "contexts/auth";
import useTouched from "hooks/touched";
import useValidation from "hooks/validation";

import Header from 'components/header';
import Button from 'components/button';
import AuthFooter from 'components/auth-footer';
import Form from 'components/form';
import Loading from 'components/loading';
import Centerer from 'components/centerer';
import FormField from 'components/form-field';
import { isValidEmail, isValidPassword } from 'utils/validation';

const LoginPage = () => {

  const [email, setEmail ] = useState('');
  const [pwd, setPwd ] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, isLoading } = useAuth();

  const from = location.state?.from?.pathname || "/";

  const rules = {
    email: isValidEmail(email),
    password: isValidPassword(pwd)
  };

  const [ touched, setTouched ] = useTouched();
  const { isValid, errorMessage } = useValidation(rules, touched);

  const handleSubmit = useCallback(() => {

    if (!isValid) {
      return;
    }

    signIn({ email, pwd }, () => {
      navigate(from, { replace: true });
    });

  }, [email, pwd, from, navigate, isValid, signIn]);

  return (
    <div>
      <Header title="Sign In"></Header>
      <Centerer>
        <Loading isLoading={isLoading}>
          <Form centered={true} onSubmit={handleSubmit}>
            <FormField label="Email address" error={errorMessage('email', 'Email address is required')}>
              <input name="email" type="email" placeholder="Email" autoComplete="email" disabled={isLoading} value={email} onChange={(e) => setEmail(e.target.value)} onBlur={setTouched} />
            </FormField>
            <FormField label="Password" error={errorMessage('password', 'Password is required')}>
              <input
                name="password"
                placeholder="Enter Password"
                type="password"
                autoComplete="current-password"
                disabled={isLoading}
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                onBlur={setTouched} />
            </FormField>
            <Button type="submit" variant="primary" disabled={isLoading}>Login</Button>
          </Form>
          <AuthFooter text='New here?' link='/sign-up' cta='Sign Up'/>
        </Loading>
      </Centerer>
    </div>
  );
};

export default LoginPage;
