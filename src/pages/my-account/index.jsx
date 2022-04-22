import React from "react";
import { useAuth } from "contexts/auth";

import Header from 'components/header';
import Button from 'components/button';
import Tabs from 'components/tabs';

const MyAccount = ({}) => {

  let auth = useAuth();

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div>
      <Header title="My Account">
        <Button variant="danger" onClick={handleLogout}>Sign out</Button>
      </Header>
      <Tabs>
        <div label="Profile">profile content</div>
        <div label="My Plan">plan content</div>
        <div label="Billing">billing content</div>
      </Tabs>
    </div>
  );
};

export default MyAccount;
