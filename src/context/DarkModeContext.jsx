// src/context/DarkModeContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const DarkModeContext = createContext();

// Custom hook to use dark mode in any component
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within DarkModeProvider");
  }
  return context;
};

// Provider component that wraps your entire app
export const DarkModeProvider = ({ children }) => {
  // Initialize dark mode from localStorage (persists after refresh)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  // Save to localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // Add/remove 'dark' class to <html> element
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Toggle function
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Value provided to all components
  const value = {
    darkMode,
    toggleDarkMode,
    setDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
