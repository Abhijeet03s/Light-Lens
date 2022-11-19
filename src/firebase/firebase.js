import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn2vuJ4yHUyghHioX7-TwfPsDxv4NjCjs",
  authDomain: "light-lens-4b177.firebaseapp.com",
  projectId: "light-lens-4b177",
  storageBucket: "light-lens-4b177.appspot.com",
  messagingSenderId: "273183202479",
  appId: "1:273183202479:web:edbd69b2cd543ed4a8c85a",
  measurementId: "G-3BBBZS0HZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };

