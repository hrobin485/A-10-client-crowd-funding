import React, { useState, useEffect } from "react";
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
  const [user, setUser] = useState(null); // State to store user details
  const [passwordVisible, setPasswordVisible] = useState(false); // For password visibility toggle

  // Track authentication state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser); // Set user if logged in
      } else {
        setUser(null); // Set null if logged out
      }
    });
    return () => unsubscribe(); // Cleanup the listener
  }, []);

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
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User Info:", user); // Debugging step to check the user object
      toast.success("Google login successful!");
      navigate("/"); // Navigate to home or desired route
    } catch (error) {
      toast.error(error.message || "Google login failed.");
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        {/* If the user is logged in, show profile picture; otherwise, show login form */}
        {!user ? (
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
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter your password"
                  required
                />
                
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={togglePasswordVisibility}
                >
                  <i className={`fa-solid ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`} />
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center">
            {/* Profile Picture and User Info */}
            <img
              src={user.photoURL || "https://via.placeholder.com/150"} // Show user's photo or placeholder if no photo
              alt="User"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{user.displayName || "User"}</h2>
            <button
              onClick={() => navigate("/")} // Redirect to home
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Go to Dashboard
            </button>
          </div>
        )}

        {/* Links for forgot password and register */}
        {!user && (
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handleForgotPassword}
              className="text-blue-500 hover:underline text-sm"
            >
              Forgot Password?
            </button>
            <button
              onClick={() => navigate("/Register")}
              className="text-blue-500 hover:underline text-sm"
            >
              Register
            </button>
          </div>
        )}

        {/* Google Login */}
        {!user && (
          <div className="text-center mt-6">
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Login with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
