import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
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

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          element
        ) : (
          <Redirect
            to={{
              pathname: "/LogIn",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
