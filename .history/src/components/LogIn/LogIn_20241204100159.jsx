// src/components/LogIn/LogIn.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    auth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPopup,
    googleProvider,
  } from "../../Firebase/Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate("/"); // Navigate to home or desired route
    } catch (error) {
      toast.error(error.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  // Handle password reset
  const handleForgotPassword = async () => {
    if (!email) {
      toast.warn("Please enter your email to reset the password!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.info("Password reset email sent! Check your inbox.");
    } catch (error) {
      toast.error(error.message || "Failed to send password reset email.");
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google login successful!");
      navigate("/"); // Navigate to home or desired route
    } catch (error) {
      toast.error(error.message || "Google login failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleForgotPassword}
            className="text-blue-500 hover:underline text-sm"
          >
            Forgot Password?
          </button>
          <button
            onClick={() => navigate("/register")}
            className="text-blue-500 hover:underline text-sm"
          >
            Register
          </button>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
