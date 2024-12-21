import { createContext, useContext, useState, useEffect } from 'react';

// Create Auth Context
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State for user
  const [loading, setLoading] = useState(true); // Loading state

  // Simulated login function
  const login = async (email, password) => {
    // Simulate an API call to log in the user
    const response = await fetch('https://crowdfunding-store-server.vercel.app/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (data.user) {
      setUser(data.user); // Set user when login successful
      setLoading(false);
    }
  };

  // Simulated logout function
  const logout = () => {
    setUser(null); // Remove user from state
  };

  // Check user session
  useEffect(() => {
    // Simulate checking if the user is logged in
    fetch('https://crowdfunding-store-server.vercel.app/check-session')
      .then(res => res.json())
      .then(data => {
        setUser(data.user); // Set user state if logged in
        setLoading(false); // Stop loading
      });
  }, []);

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
