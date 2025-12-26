"use client";

import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 ml-64">
        {children}
      </div>
    </div>
  );
}
