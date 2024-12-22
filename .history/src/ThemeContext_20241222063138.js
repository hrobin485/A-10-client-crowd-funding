import React, { createContext, useState, useEffect } from "react";

// Create a Theme Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get the saved theme from local storage or default to light
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "light");

  // Toggle between dark and light theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the theme to local storage
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme); // Apply theme to body class
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
