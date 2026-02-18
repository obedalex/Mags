import AppearanceSettings from "@/components/settings/AppearanceSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import StoreInfoSettings from "@/components/settings/StoreInfoSettings";
import WhatsappSettings from "@/components/settings/WhatsappSettings";
import React, { useState } from "react";
import { Palette, Bell, Store, MessageCircle } from "lucide-react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("appearance");

  const tabs = [
    {
      id: "appearance",
      label: "Appearance",
      icon: Palette,
      component: AppearanceSettings,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: MessageCircle,
      component: WhatsappSettings,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
      component: NotificationSettings,
    },
    {
      id: "store",
      label: "Store Info",
      icon: Store,
      component: StoreInfoSettings,
    },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your application preferences and configurations
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-card border border-border rounded-lg mb-6 overflow-hidden">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-4 font-medium transition-all whitespace-nowrap
                  border-b-2 min-w-fit
                  ${
                    isActive
                      ? "border-primary text-primary bg-primary/5"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Tab Content */}
      <div>{ActiveComponent && <ActiveComponent />}</div>
    </div>
  );
};

export default SettingsPage;
