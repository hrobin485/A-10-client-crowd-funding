import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "example@email.com", // ডিফল্ট ভ্যালু
    name: "John Doe",          // ডিফল্ট ভ্যালু
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
