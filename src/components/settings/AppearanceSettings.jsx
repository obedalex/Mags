import React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../useTheme";

const AppearanceSettings = () => {
  const { theme, setTheme } = useTheme();

  const themeOptions = [
    {
      value: "light",
      label: "Light",
      icon: Sun,
      description: "Light mode",
    },
    {
      value: "dark",
      label: "Dark",
      icon: Moon,
      description: "Dark mode",
    },
    {
      value: "system",
      label: "System",
      icon: Monitor,
      description: "Use system preference",
    },
  ];

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          Appearance
        </h1>
        <p className="text-sm text-muted-foreground">
          Customize the appearance of the application
        </p>
      </div>

      {/* Theme Section */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-card-foreground mb-1">
            Theme
          </h2>
          <p className="text-sm text-muted-foreground">
            Choose your preferred color scheme
          </p>
        </div>

        {/* Theme Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {themeOptions.map((option) => {
            const Icon = option.icon;
            const isActive = theme === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setTheme(option.value)}
                className={`
                  relative flex flex-col items-center gap-3 p-6 rounded-lg border-2 transition-all
                  ${
                    isActive
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/30"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`
                  p-3 rounded-full transition-colors
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }
                `}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Label */}
                <div className="text-center">
                  <p
                    className={`font-medium mb-0.5 ${
                      isActive ? "text-primary" : "text-card-foreground"
                    }`}
                  >
                    {option.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {option.description}
                  </p>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute top-3 right-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Additional Settings (Optional) */}
      <div className="bg-card border border-border rounded-lg p-6 mt-6">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-card-foreground mb-1">
            Display Settings
          </h2>
          <p className="text-sm text-muted-foreground">
            Additional appearance options
          </p>
        </div>

        {/* Toggle Example */}
        <div className="flex items-center justify-between py-3">
          <div>
            <p className="font-medium text-card-foreground">Compact Mode</p>
            <p className="text-sm text-muted-foreground">
              Reduce spacing for a denser layout
            </p>
          </div>
          <button
            type="button"
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors hover:bg-muted-foreground/20"
          >
            <span className="inline-block h-4 w-4 transform rounded-full bg-background shadow-sm transition-transform translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppearanceSettings;
