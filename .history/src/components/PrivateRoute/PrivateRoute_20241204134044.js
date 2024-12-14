import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Track auth status

  useEffect(() => {
    const auth = getAuth(); // Firebase authentication
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Set to true if a user is authenticated, false otherwise
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show loading while checking authentication status
  }

  if (isAuthenticated) {
    return element; // If authenticated, show the protected route
  } else {
    return <Navigate to="/LogIn" replace />; // If not authenticated, redirect to Login page
  }
};

export default PrivateRoute;
