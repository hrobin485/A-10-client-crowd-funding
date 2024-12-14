import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import the toast styles

const UpdateProfile = () => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setDisplayName(userData.displayName || "");
      setEmail(userData.email || "");
      setPhotoURL(userData.photoURL || "");
    } else {
      navigate("/"); // Redirect to login if no user data is available
    }
  }, [navigate]);

  // Handle update functionality
  const handleUpdate = () => {
    // Update user data in localStorage
    const updatedUser = {
      ...user,
      displayName,
      email,
      photoURL,
    };

    // Save the updated user data
    localStorage.setItem("user", JSON.stringify(updatedUser));

    // Show success toast notification
    toast.success("Profile updated successfully!");

    // Redirect to Dashboard after successful update
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Update Profile</h1>

        {user ? (
          <div className="flex flex-col items-center">
            <img
              src={photoURL || "https://via.placeholder.com/150"}
              alt="User"
              className="w-24 h-24 rounded-full mb-4"
            />
            {/* Input for Display Name */}
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter your name"
              className="mb-4 p-2 border rounded"
            />
            {/* Input for Email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mb-4 p-2 border rounded"
            />
            {/* Input for Profile Image URL */}
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter profile image URL"
              className="mb-4 p-2 border rounded"
            />
            {/* Update Profile Button */}
            <button
              onClick={handleUpdate} // On click, update the profile and show success toast
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Update Profile
            </button>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default UpdateProfile;
