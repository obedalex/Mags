import React, { useState, useEffect } from "react";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import { Palette, MessageCircle } from "lucide-react";

const SettingsPage = () => {
  // ========================================
  // STATE - Move INSIDE component
  // ========================================
  const [activeTab, setActiveTab] = useState("appearance");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [messageTemplate, setMessageTemplate] = useState(
    "Hi! I'm interested in {product_name}. Is it available for {price}?"
  );

  // ========================================
  // LOAD from localStorage
  // ========================================
  useEffect(() => {
    const saved = localStorage.getItem("whatsAppSettings");
    if (saved) {
      const settings = JSON.parse(saved);
      setWhatsappNumber(settings.whatsappNumber || "");
      setMessageTemplate(settings.messageTemplate || "");
    }
  }, []);

  // ========================================
  // SAVE to localStorage
  // ========================================
  const handleSaveWhatsappSettings = () => {
    const settings = {
      whatsappNumber,
      messageTemplate,
    };
    localStorage.setItem("whatsAppSettings", JSON.stringify(settings));
    alert("Settings saved! ✅");
  };

  // ========================================
  // TEST WhatsApp
  // ========================================
  const handleTestWhatsApp = () => {
    if (!whatsappNumber) {
      alert("Please enter a WhatsApp number first!");
      return;
    }

    const testMessage = messageTemplate
      .replace("{product_name}", "Wireless Headphones")
      .replace("{price}", "$99.99");

    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(testMessage)}`;

    window.open(whatsappUrl, "_blank");
  };

  const tabs = [
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  ];

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
      <div>
        {activeTab === "appearance" && <AppearanceSettings />}
        
        {activeTab === "whatsapp" && (
          <div className="bg-card rounded-lg shadow-md border border-border p-6">
            <h2 className="text-xl font-semibold text-card-foreground mb-4">
              WhatsApp Integration
            </h2>

            {/* WhatsApp Number */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-card-foreground mb-2">
                WhatsApp Number <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="+233123456789"
                className="w-full px-3 py-2 border border-border rounded-lg 
                          bg-background text-foreground placeholder:text-muted-foreground
                          focus:ring-2 focus:ring-primary outline-none"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Include country code (e.g., +233 for Ghana)
              </p>
            </div>

            {/* Message Template */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Message Template
              </label>
              <textarea
                value={messageTemplate}
                onChange={(e) => setMessageTemplate(e.target.value)}
                rows="4"
                className="w-full px-3 py-2 border border-border rounded-lg 
                          bg-background text-foreground placeholder:text-muted-foreground
                          focus:ring-2 focus:ring-primary outline-none resize-none"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Use <code className="bg-muted px-1 rounded">{"{product_name}"}</code> and{" "}
                <code className="bg-muted px-1 rounded">{"{price}"}</code> as placeholders
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleTestWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 
                          rounded-lg font-medium transition-colors"
              >
                💬 Test WhatsApp
              </button>
              
              <button
                onClick={handleSaveWhatsappSettings}
                className="bg-primary hover:opacity-90 text-primary-foreground px-4 py-2 
                          rounded-lg font-medium transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;