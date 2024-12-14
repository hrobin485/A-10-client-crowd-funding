import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";

// PrivateRoute component to protect routes
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe(); // Cleanup the listener
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => 
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          // Redirect to login if not authenticated
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
