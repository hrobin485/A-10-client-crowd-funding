import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sendPasswordResetEmail } from "../../Firebase/Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showRedirect, setShowRedirect] = useState(false); // State to show Gmail redirection link

  // Pre-fill the email if it was passed via state from the Login page
  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Email format validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.warn("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      // Send password reset email via Firebase
      await sendPasswordResetEmail(email);
      toast.success("Password reset email sent!");

      // Show Gmail redirection link after success
      setShowRedirect(true);
    } catch (error) {
      console.error("Error sending password reset email:", error);
      toast.error(error.message || "Error sending password reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Forgot Password</h1>
        <form onSubmit={handlePasswordReset}>
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* Gmail Redirect */}
        {showRedirect && (
          <div className="mt-4 text-center">
            <p className="text-green-600 font-medium">
              Reset email sent! Click below to go to Gmail:
            </p>
            <a
              href="https://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Open Gmail
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
