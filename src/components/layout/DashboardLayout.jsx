import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  children,
  currentPage,
  onNavigate,
  title,
}) {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar */}
        <Topbar title={title} />

        {/* Page content - scrollable */}
        <div className="flex-1 overflow-y-auto p-6 bg-background">
          {children}
        </div>
      </div>
    </div>
  );
}
