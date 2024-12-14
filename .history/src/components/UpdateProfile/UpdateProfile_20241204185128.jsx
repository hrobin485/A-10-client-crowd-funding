import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get user info from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setDisplayName(userData.displayName || "");
      setEmail(userData.email || "");
      setPhotoURL(userData.photoURL || "");
    } else {
      navigate("/"); // Redirect to login if no user info is available
    }
  }, [navigate]);

  // Handle form submission
  const handleUpdate = () => {
    // You can add the logic to save the updated profile here (e.g., Firebase update)

    // Save updated user info to localStorage
    const updatedUser = {
      ...user,
      displayName,
      email,
      photoURL,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    // Show a success message and redirect back to the dashboard
    alert("Profile updated successfully!");
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
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter your name"
              className="mb-4 p-2 border rounded"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mb-4 p-2 border rounded"
            />
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter profile image URL"
              className="mb-4 p-2 border rounded"
            />
            <button
              onClick={handleUpdate}
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
