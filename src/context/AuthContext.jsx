import React, { useState, useEffect, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, } from "firebase/auth";
import { auth } from "../firebase/firebase";
import PropTypes from 'prop-types';
export const AuthContext = createContext();
import { useNavigate } from "react-router-dom";

export function AuthContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedInUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, loggedInUser, handleLogOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

