import React from "react";
import { BarChart3, Package, Settings, Store } from "lucide-react";
import { cn } from "../../lib/utils";

const NAV_ITEMS = [
  { key: "analytics", label: "Analytics", icon: BarChart3 },
  { key: "products", label: "Products", icon: Package },
  { key: "settings", label: "Settings", icon: Settings },
];

const Sidebar = ({ currentPage = "products", onNavigate }) => {
  return (
    <div className="w-64 h-screen border-r p-4 bg-sidebar border-sidebar-border transition-colors relative">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-sidebar-primary">
          <Store className="w-6 h-6 text-sidebar-primary-foreground" />
        </div>
        <div className="text-xl font-bold text-sidebar-foreground">
          Your Store
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive = item.key === currentPage;
          const Icon = item.icon;

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onNavigate?.(item.key)}
              className={cn(
                "flex items-center gap-3 text-left px-3 py-2.5 rounded-lg transition-colors font-medium",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="absolute bottom-4 left-4 right-4 pt-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-sidebar-primary flex items-center justify-center text-sidebar-primary-foreground font-semibold">
            A
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate text-sidebar-foreground">
              Admin User
            </div>
            <div className="text-xs truncate text-muted-foreground">
              admin@store.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
