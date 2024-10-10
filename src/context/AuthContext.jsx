import React, { useState, useEffect, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
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
    <AuthContext.Provider value={{ googleSignIn, loggedInUser, handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
}


