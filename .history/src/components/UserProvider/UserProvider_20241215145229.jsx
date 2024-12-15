import React, { useState } from "react";
import { UserContext } from "../Context/UserContext";
// import { UserContext } from "../Context/UserContext";

export const UserProvider = ({ children }) => {
  const [ setUser] = useState({
    email: "example@email.com", 
    name: "John Doe",           
  });

  return (
    <UserContext.Provider value={{  setUser }}>
      {children}
    </UserContext.Provider>
  );
};
