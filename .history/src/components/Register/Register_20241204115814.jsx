import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signUpWithEmailAndPassword, updateUserProfile, loginWithGoogle } from "../../Firebase/auth"; // Import the functions from auth.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility toggle

  // Password validation function
  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

    if (!hasUppercase) return "Password must have at least one uppercase letter.";
    if (!hasLowercase) return "Password must have at least one lowercase letter.";
    if (!isValidLength) return "Password must be at least 6 characters long.";
    return "";
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle the form submission for registration
  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, photoURL, password } = formData;

    // Validate password
    const validationError = validatePassword(password);
    if (validationError) {
      setPasswordError(validationError);
      return;
    }
    setPasswordError("");
    setLoading(true);

    try {
      // Create user with email and password using Firebase
      const userCredential = await signUpWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Update user profile (e.g., name, photo URL)
      await updateUserProfile(user, { displayName: name, photoURL });
      toast.success("Registration successful!");
      navigate("/"); // Navigate to the home page after successful registration
    } catch (error) {
      toast.error(error.message); // Show error if registration fails
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Google login successful!");
      navigate("/"); // Navigate to the home page after successful login
    } catch (error) {
      toast.error(error.message); // Show error if Google login fails
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter photo URL (optional)"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              type={passwordVisible ? "text" : "password"} // Toggle between text and password
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded pr-10" // Add padding-right for the eye icon
              placeholder="Enter your password"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />} {/* Toggle the eye icon */}
            </span>
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"} text-white`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:underline text-sm"
          >
            Already have an account? Login
          </button>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Register with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
