"use client";

import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { HamburgerButton } from "@/components/layout/hamburger-button";
import { useAppStore } from "@/store/useAppStore";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSidebarOpen = useAppStore((state) => state.isSidebarOpen);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-30 h-16 bg-white border-b border-gray-200 flex items-center px-4">
        <HamburgerButton />
        <span className="text-lg font-bold ml-4">Kasparro</span>
      </div>

      {/* Main content area with sidebar and page content */}
      <div className="flex flex-1 pt-16">
        <DashboardSidebar />

        {/* Page content */}
        <main className="flex-1 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}
