import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewCampaign = () => {
  const [user, setUser] = useState(null); // State to store user info
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user information from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse the JSON string to object
    } else {
      // If no user info in localStorage, redirect to login page
      navigate("/"); // Redirect to login page
    }
  }, [navigate]);

  // Function to handle profile update redirection
  const handleUpdateProfile = () => {
    navigate("/update-profile"); // Navigate to update profile page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Welcome, {user ? user.displayName : "User"}!
        </h1>

        {user ? (
          <div className="flex flex-col items-center">
            {/* Displaying user information */}
            <img
              src={user.photoURL || "https://via.placeholder.com/150"} // Display user's profile photo or placeholder
              alt="User"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{user.displayName || "User"}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>

            {/* Button to navigate to update profile page */}
            <button
               onClick={() => navigate("/UpdateProfile")}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Update Profile
            </button>

            {/* Logout Button */}
            <button
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token"); // Remove user data from localStorage
                navigate("/"); // Redirect to login page
              }}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <p>Loading user data...</p> // Show a loading message while the data is being fetched
        )}
      </div>
    </div>
  );
};

export default AddNewCampaign;
