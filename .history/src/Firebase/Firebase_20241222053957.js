// /src/Firebase/firebase.js

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEbwBKG6bPrq6k9xNSYwmpf-KIi50jrI4",
  authDomain: "winter-clothing-donation-9b03b.firebaseapp.com",
  projectId: "winter-clothing-donation-9b03b",
  storageBucket: "winter-clothing-donation-9b03b.appspot.com",
  messagingSenderId: "31916970947",
  appId: "1:31916970947:web:7b7ce6f34ec88ac8266376",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firebase Auth setup
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
};
