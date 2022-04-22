import React, { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const fakeAuthProvider = {
  isAuthenticated: false,
  signIn(callback) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 1500 ); // fake async
  },
  signUp(callback) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 1500); // fake async
  },
  signOut(callback) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const lStorageUser = JSON.parse(localStorage.getItem('user'));

  const [user, setUser] = useState(lStorageUser);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = ({ email, pwd }, callback) => {
    setIsLoading(true);
    return fakeAuthProvider.signIn(() => {
      localStorage.setItem('user', JSON.stringify(email));
      setUser(email);
      setIsLoading(false);
      callback && callback();
    });
  };

  const signUp = ({ email, fullname, pwd }, callback) => {
    setIsLoading(true);
    return fakeAuthProvider.signUp(() => {
      localStorage.setItem('user', JSON.stringify(email));
      setUser(email);
      setIsLoading(false);
      callback && callback();
    });
  };

  const signOut = (callback) => {
    return fakeAuthProvider.signOut(() => {
      localStorage.setItem('user', null);
      setUser(null);
      callback && callback();
    });
  };

  const isLogged = user !== null;

  const value = { user, isLogged, isLoading, signIn, signUp, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export const useAuth = () => {
  return useContext(AuthContext);
};

