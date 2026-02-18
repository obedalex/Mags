# Code Citations

## License: MIT
https://github.com/xiadd/pastebin-worker/blob/449d07c485f06f6dc93546c35b129aa82390a619/static/src/hooks/use-theme-select.ts

```
This warning appears because your `ThemeProvider.jsx` file exports a function component (`ThemeProvider`) but also contains logic that could be extracted. While the current setup works, the warning suggests creating separate files for non-component exports to improve fast refresh performance during development.

Here's how to refactor this:

````jsx
// filepath: src/hooks/useTheme.js
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
````

````jsx
// filepath: src/context/ThemeContext.js
import { createContext } from "react";

export const ThemeContext = createContext();
````

````jsx
// filepath: src/providers/ThemeProvider.jsx
import React, { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

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

        root.classList.add(prefersDark ?
```


## License: MIT
https://github.com/xiadd/pastebin-worker/blob/449d07c485f06f6dc93546c35b129aa82390a619/static/src/hooks/use-theme-select.ts

```
This warning appears because your `ThemeProvider.jsx` file exports a function component (`ThemeProvider`) but also contains logic that could be extracted. While the current setup works, the warning suggests creating separate files for non-component exports to improve fast refresh performance during development.

Here's how to refactor this:

````jsx
// filepath: src/hooks/useTheme.js
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
````

````jsx
// filepath: src/context/ThemeContext.js
import { createContext } from "react";

export const ThemeContext = createContext();
````

````jsx
// filepath: src/providers/ThemeProvider.jsx
import React, { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

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

        root.classList.add(prefersDark ?
```


## License: MIT
https://github.com/xiadd/pastebin-worker/blob/449d07c485f06f6dc93546c35b129aa82390a619/static/src/hooks/use-theme-select.ts

```
This warning appears because your `ThemeProvider.jsx` file exports a function component (`ThemeProvider`) but also contains logic that could be extracted. While the current setup works, the warning suggests creating separate files for non-component exports to improve fast refresh performance during development.

Here's how to refactor this:

````jsx
// filepath: src/hooks/useTheme.js
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
````

````jsx
// filepath: src/context/ThemeContext.js
import { createContext } from "react";

export const ThemeContext = createContext();
````

````jsx
// filepath: src/providers/ThemeProvider.jsx
import React, { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

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

        root.classList.add(prefersDark ?
```


## License: MIT
https://github.com/xiadd/pastebin-worker/blob/449d07c485f06f6dc93546c35b129aa82390a619/static/src/hooks/use-theme-select.ts

```
This warning appears because your `ThemeProvider.jsx` file exports a function component (`ThemeProvider`) but also contains logic that could be extracted. While the current setup works, the warning suggests creating separate files for non-component exports to improve fast refresh performance during development.

Here's how to refactor this:

````jsx
// filepath: src/hooks/useTheme.js
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
````

````jsx
// filepath: src/context/ThemeContext.js
import { createContext } from "react";

export const ThemeContext = createContext();
````

````jsx
// filepath: src/providers/ThemeProvider.jsx
import React, { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

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

        root.classList.add(prefersDark ?
```


## License: MIT
https://github.com/xiadd/pastebin-worker/blob/449d07c485f06f6dc93546c35b129aa82390a619/static/src/hooks/use-theme-select.ts

```
This warning appears because your `ThemeProvider.jsx` file exports a function component (`ThemeProvider`) but also contains logic that could be extracted. While the current setup works, the warning suggests creating separate files for non-component exports to improve fast refresh performance during development.

Here's how to refactor this:

````jsx
// filepath: src/hooks/useTheme.js
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
````

````jsx
// filepath: src/context/ThemeContext.js
import { createContext } from "react";

export const ThemeContext = createContext();
````

````jsx
// filepath: src/providers/ThemeProvider.jsx
import React, { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

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
    <ThemeContext
```

