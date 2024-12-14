import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { sendPasswordResetEmail } from "../../Firebase/Firebase";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    // If the email is passed from the login page, pre-fill it
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  // Handle password reset
  const handleResetPassword = async () => {
    if (!email) {
      toast.warn("Please enter your email to reset the password!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.info("Password reset email sent! Check your inbox.");
      // Redirect to Gmail or show a confirmation
      window.location.href = `mailto:${email}?subject=Password Reset`;
    } catch (error) {
      toast.error(error.message || "Failed to send password reset email.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Forgot Password</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Enter Your Email
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
        <button
          onClick={handleResetPassword}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
