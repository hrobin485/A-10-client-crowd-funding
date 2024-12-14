// src/Firebase/Auth.js
import { auth, googleProvider } from './Firebase'; // Import from firebase.js
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

// Register User with Email and Password
export const registerWithEmailPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Google Login
export const googleLogin = () => {
  return signInWithPopup(auth, googleProvider);
};

// Update User Profile
export const updateUserProfile = (user, name, photoURL) => {
  return updateProfile(user, { displayName: name, photoURL });
};
