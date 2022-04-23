import React, { useState, useCallback } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from "contexts/auth";

import Header from 'components/header';
import Button from 'components/button';
import AuthFooter from 'components/auth-footer';
import Form from 'components/form';
import Loading from 'components/loading';
import Centerer from 'components/centerer';

const LoginPage = () => {

  const [email, setEmail ] = useState('');
  const [pwd, setPwd ] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, isLoading } = useAuth();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = useCallback(() => {

    signIn({ email, pwd }, () => {
      navigate(from, { replace: true });
    });

  }, [email, signIn]);

  return (
    <div>
      <Header title="Sign In"></Header>
      <Centerer>
        <Loading isLoading={isLoading}>
          <Form centered={true} onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Email address</label>
              <input name="email" type="email" placeholder="Email" disabled={isLoading} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-field">
              <label>Password</label>
              <input name="password" placeholder="Enter Password" type="password" disabled={isLoading} value={pwd} onChange={(e) => setPwd(e.target.value)} />
            </div>
            <Button type="submit" variant="primary" disabled={isLoading}>Login</Button>
          </Form>
          <AuthFooter text='New here?' link='/sign-up' cta='Sign Up'/>
        </Loading>
      </Centerer>
    </div>
  );
};

export default LoginPage;
