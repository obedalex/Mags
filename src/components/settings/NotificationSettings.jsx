import React, { useState } from "react";
import { Bell, Mail, TrendingUp, Package, FileText, Save } from "lucide-react";

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    highTrafficAlert: false,
    lowProductAlert: true,
    weeklySummary: true,
  });

  const handleToggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saved notifications:", notifications);
  };

  const notificationOptions = [
    {
      key: "emailNotifications",
      icon: Mail,
      title: "Email Notifications",
      description: "Receive notifications via email",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
    },
    {
      key: "highTrafficAlert",
      icon: TrendingUp,
      title: "High Traffic Alert",
      description: "Get notified when traffic spikes are detected",
      iconColor: "text-green-500",
      iconBg: "bg-green-500/10",
    },
    {
      key: "lowProductAlert",
      icon: Package,
      title: "Low Product Count Alert",
      description: "Alert when inventory falls below threshold",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10",
    },
    {
      key: "weeklySummary",
      icon: FileText,
      title: "Weekly Summary Report",
      description: "Receive weekly analytics and performance summaries",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10",
    },
  ];

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Bell className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold text-foreground">
            Notification Preferences
          </h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Manage how and when you receive notifications
        </p>
      </div>

      {/* Notification Options */}
      <div className="space-y-4">
        {notificationOptions.map((option) => {
          const Icon = option.icon;
          const isEnabled = notifications[option.key];

          return (
            <div
              key={option.key}
              className="bg-card border border-border rounded-lg p-5 hover:border-muted-foreground/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                {/* Icon and Text */}
                <div className="flex items-start gap-4 flex-1">
                  <div className={`p-2.5 ${option.iconBg} rounded-lg shrink-0`}>
                    <Icon className={`h-5 w-5 ${option.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-card-foreground mb-1">
                      {option.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>

                {/* Toggle Switch */}
                <button
                  type="button"
                  onClick={() => handleToggle(option.key)}
                  className={`
                    relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                    ${isEnabled ? "bg-primary" : "bg-muted"}
                  `}
                  role="switch"
                  aria-checked={isEnabled}
                  aria-label={`Toggle ${option.title}`}
                >
                  <span
                    className={`
                      inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform
                      ${isEnabled ? "translate-x-6" : "translate-x-1"}
                    `}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Settings Card */}
      <div className="bg-card border border-border rounded-lg p-6 mt-6">
        <h2 className="text-lg font-semibold text-card-foreground mb-4">
          Notification Delivery
        </h2>

        <div className="space-y-4">
          {/* Frequency Setting */}
          <div>
            <label
              htmlFor="frequency"
              className="text-sm font-medium text-card-foreground mb-2 block"
            >
              Notification Frequency
            </label>
            <select
              id="frequency"
              className="w-full px-4 py-2.5 bg-background border border-border rounded-lg 
                       text-foreground focus:outline-none focus:ring-2 focus:ring-ring 
                       focus:border-transparent transition-all"
            >
              <option>Real-time</option>
              <option>Hourly digest</option>
              <option>Daily digest</option>
              <option>Weekly digest</option>
            </select>
          </div>

          {/* Quiet Hours */}
          <div className="flex items-center justify-between py-3 border-t border-border">
            <div>
              <p className="font-medium text-card-foreground">Quiet Hours</p>
              <p className="text-sm text-muted-foreground">
                Pause notifications during specific hours
              </p>
            </div>
            <button
              type="button"
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors hover:bg-muted-foreground/20"
            >
              <span className="inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center gap-3 mt-6">
        <button
          type="button"
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground 
                   rounded-lg font-medium hover:opacity-90 transition-all
                   shadow-sm hover:shadow-md"
        >
          <Save className="h-4 w-4" />
          Save Preferences
        </button>
        <button
          type="button"
          className="px-6 py-2.5 bg-secondary text-secondary-foreground 
                   rounded-lg font-medium hover:bg-secondary/80 transition-colors"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;
