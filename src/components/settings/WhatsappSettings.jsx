import React, { useState } from "react";
import { MessageCircle, Save, Phone, FileText } from "lucide-react";

const WhatsappSettings = () => {
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [messageTemplate, setMessageTemplate] = useState("");

  const handleSave = () => {
    // Handle save logic here
    console.log("Saved:", { whatsappNumber, messageTemplate });
  };

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-green-500/10 rounded-lg">
            <MessageCircle className="h-6 w-6 text-green-500" />
          </div>
          <h1 className="text-2xl font-semibold text-foreground">
            WhatsApp Integration
          </h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Connect your WhatsApp account to send automated messages
        </p>
      </div>

      {/* Main Settings Card */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-6">
        {/* WhatsApp Number */}
        <div>
          <label
            htmlFor="whatsapp-number"
            className="flex items-center gap-2 text-sm font-medium text-card-foreground mb-2"
          >
            <Phone className="h-4 w-4" />
            WhatsApp Number
          </label>
          <input
            id="whatsapp-number"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-border rounded-lg 
                     text-foreground placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
                     transition-all"
          />
          <p className="text-xs text-muted-foreground mt-1.5">
            Enter your WhatsApp Business number with country code
          </p>
        </div>

        {/* Message Template */}
        <div>
          <label
            htmlFor="message-template"
            className="flex items-center gap-2 text-sm font-medium text-card-foreground mb-2"
          >
            <FileText className="h-4 w-4" />
            Message Template
          </label>
          <textarea
            id="message-template"
            rows="6"
            placeholder="Hello {customer_name},&#10;&#10;Thank you for your order #{order_id}.&#10;&#10;Your order will be delivered on {delivery_date}.&#10;&#10;Best regards,&#10;{business_name}"
            value={messageTemplate}
            onChange={(e) => setMessageTemplate(e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-border rounded-lg 
                     text-foreground placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
                     transition-all resize-none"
          />
          <p className="text-xs text-muted-foreground mt-1.5">
            Use variables like {"{customer_name}"}, {"{order_id}"}, and{" "}
            {"{delivery_date}"} to personalize messages
          </p>
        </div>

        {/* Available Variables Info Box */}
        <div className="bg-muted/50 border border-border rounded-lg p-4">
          <h3 className="text-sm font-semibold text-card-foreground mb-2">
            Available Variables
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <code className="bg-background px-2 py-1 rounded border border-border">
              {"{customer_name}"}
            </code>
            <code className="bg-background px-2 py-1 rounded border border-border">
              {"{order_id}"}
            </code>
            <code className="bg-background px-2 py-1 rounded border border-border">
              {"{delivery_date}"}
            </code>
            <code className="bg-background px-2 py-1 rounded border border-border">
              {"{business_name}"}
            </code>
            <code className="bg-background px-2 py-1 rounded border border-border">
              {"{product_name}"}
            </code>
            <code className="bg-background px-2 py-1 rounded border border-border">
              {"{total_amount}"}
            </code>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground 
                     rounded-lg font-medium hover:opacity-90 transition-all
                     shadow-sm hover:shadow-md"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
          <button
            type="button"
            className="px-4 py-2.5 bg-secondary text-secondary-foreground 
                     rounded-lg font-medium hover:bg-secondary/80 transition-colors"
          >
            Test Message
          </button>
        </div>
      </div>

      {/* Connection Status Card */}
      <div className="bg-card border border-border rounded-lg p-6 mt-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-card-foreground mb-1">
              Connection Status
            </h3>
            <p className="text-xs text-muted-foreground">
              WhatsApp Business API
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">
              Not Connected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappSettings;
