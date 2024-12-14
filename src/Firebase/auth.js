// src/Firebase/auth.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth setup
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Functions to interact with Firebase Authentication
export const signUpWithEmailAndPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const resetPassword = (email) => sendPasswordResetEmail(auth, email);

export const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

export const updateUserProfile = (user, profileData) =>
  updateProfile(user, profileData);
