import { useTheme } from "./useTheme";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded-md bg-card border"
    >
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;
