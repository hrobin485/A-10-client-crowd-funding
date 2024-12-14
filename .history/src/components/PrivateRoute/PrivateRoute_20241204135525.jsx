import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLocation } from "react-router-dom";  // Import useLocation hook

const PrivateRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Track auth status
  const location = useLocation(); // Get the current route
  const [redirectTo, setRedirectTo] = useState("/"); // Default redirect after login

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // If user is authenticated, set isAuthenticated to true
    });

    return () => unsubscribe(); // Cleanup the listener when component unmounts
  }, []);

  // If auth status is still being determined, show a loading spinner
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // If the user is authenticated, show the requested route, else redirect to login
  if (isAuthenticated) {
    return element; // If authenticated, show the requested protected component
  } else {
    // If the user is not authenticated, save the attempted route and redirect to login
    setRedirectTo(location.pathname); // Save the attempted route to redirect after login
    return <Navigate to="/LogIn" replace state={{ from: location.pathname }} />; // Redirect to login page
  }
};

export default PrivateRoute;
