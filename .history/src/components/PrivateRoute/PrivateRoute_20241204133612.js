import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const PrivateRoute = ({ element, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Check if user is authenticated
    });
    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Loading state while checking auth
  }

  if (isAuthenticated) {
    return element; // If authenticated, render the element
  } else {
    return <Navigate to="/LogIn" replace />; // If not authenticated, redirect to LogIn page
  }
};

export default PrivateRoute;
