import React from "react";
import { Bell, Moon, Sun } from "lucide-react";
import { useTheme } from "../../components/useTheme";

const Topbar = ({ title = "Dashboard" }) => {
  const { theme, setTheme } = useTheme();

  // Determine if dark based on theme state
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    if (theme === "system") {
      // If on system, switch to explicit light or dark
      setTheme(isDark ? "light" : "dark");
    } else {
      // Toggle between light and dark
      setTheme(isDark ? "light" : "dark");
    }
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-background border-border transition-colors">
      {/* Title */}
      <div className="text-xl font-semibold text-foreground">{title}</div>

      {/* Actions */}
      <div className="flex items-center gap-6 text-muted-foreground">
        {/* Notifications */}
        <button
          type="button"
          className="relative p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full"></span>
        </button>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Topbar;
