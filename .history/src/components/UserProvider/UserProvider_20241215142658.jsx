import React, { useState } from "react";
import { UserContext } from "../Context/UserContext";
// import { UserContext } from "../Context/UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "example@email.com", 
    name: "John Doe",           
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
