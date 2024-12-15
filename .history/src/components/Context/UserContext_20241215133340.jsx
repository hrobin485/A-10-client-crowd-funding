import React, { createContext, useState } from 'react';

// Context তৈরি করুন
export const UserContext = createContext();

// Provider Component তৈরি করুন
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: '', name: '' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
