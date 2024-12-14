import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const PrivateRoute = ({ element, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Check if user is authenticated
    });
    return () => unsubscribe();
  }, []);

  if (isAuthenticated) {
    return element; // If authenticated, render the element (e.g., DonationDetail)
  } else {
    return <Navigate to="/LogIn" replace />; // If not authenticated, redirect to LogIn page
  }
};

export default PrivateRoute;
