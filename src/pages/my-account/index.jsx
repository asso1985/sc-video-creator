import React from "react";
import { useAuth } from "contexts/auth";

import Header from 'components/header';
import Button from 'components/button';
import Tabs from 'components/tabs';
import Profile from 'components/profile';
import Plans from 'components/plans';

const MyAccount = ({}) => {

  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  return (
    <div>
      <Header title="My Account">
        <Button variant="danger" onClick={handleLogout}>Sign out</Button>
      </Header>
      <Tabs>
        <div label="Profile"><Profile/></div>
        <div label="My Plan"><Plans/></div>
        <div label="Billing">billing content</div>
      </Tabs>
    </div>
  );
};

export default MyAccount;
