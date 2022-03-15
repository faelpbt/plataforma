import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { authenticationApp } from '../servers/firebase/firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signIn(email, password) {
    return signInWithEmailAndPassword(authenticationApp, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(authenticationApp, email, password);
  }
  function logOut() {
    return signOut(authenticationApp);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authenticationApp, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user, signIn, signUp, logOut,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
