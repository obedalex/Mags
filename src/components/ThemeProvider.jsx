import React, { createContext,  useEffect, useState } from "react";

 export const ThemeContext = createContext();

export function ThemeProvider({ children, defaultTheme = "system" }) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (theme) => {
      root.classList.remove("light", "dark");

      if (theme === "system") {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;

        root.classList.add(prefersDark ? "dark" : "light");
      } else {
        root.classList.add(theme);
      }
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
