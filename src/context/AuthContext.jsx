import React, { useState, useEffect } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider);
  };

  const accLogOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const logOut = onAuthStateChanged(auth, (loggedInUser) => {
      setLoggedInUser(loggedInUser);
    });
    return () => {
      logOut();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, loggedInUser, accLogOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
