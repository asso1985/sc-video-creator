import React, { useState, useCallback } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from "contexts/auth";

import Header from 'components/header';
import AuthFooter from 'components/auth-footer';
import Button from 'components/button';
import Form from 'components/form';
import Loading from 'components/loading';
import Centerer from 'components/centerer';

const SignUpPage = ({}) => {

  const [email, setEmail ] = useState('');
  const [pwd, setPwd ] = useState('');
  const [fullname, setFullname ] = useState('');

  let navigate = useNavigate();
  let location = useLocation();
  const { signUp, isLoading } = useAuth();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    signUp({ email, fullname, pwd }, () => {
      navigate(from, { replace: true });
    });
  }, [email]);

  return (
    <div>
      <Header title="Sign Up"></Header>
      <Centerer>
        <Loading isLoading={isLoading}>
          <Form centered={true} onSubmit={handleSubmit}>
            <div className="form-field">
              <label>Full Name</label>
              <input name="fullname" placeholder="Full Name" type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            </div>
            <div className="form-field">
              <label>Email address</label>
              <input name="email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-field">
              <label>Password</label>
              <input name="password" placeholder="Enter Password" type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
            </div>
            <Button type="submit" variant="primary">Sign Up</Button>
          </Form>
          <AuthFooter text='Already User?' link='/login' cta='Login'/>
        </Loading>
      </Centerer>
    </div>
  );
};

export default SignUpPage;
