"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, FileSearch, Network } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";

const navigation = [
  { name: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  { name: "Audit", href: "/app/audit", icon: FileSearch },
  { name: "Architecture", href: "/app/architecture", icon: Network },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const isSidebarOpen = useAppStore((state) => state.isSidebarOpen);
  const closeSidebar = useAppStore((state) => state.closeSidebar);

  // Debug: Log when sidebar state changes
  useEffect(() => {
    console.log('Sidebar state changed:', isSidebarOpen);
  }, [isSidebarOpen]);

  // Close sidebar on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSidebarOpen) {
        closeSidebar();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isSidebarOpen, closeSidebar]);


  return (
    <aside
      className={cn(
        "border-r border-gray-200 bg-white transition-all duration-300 ease-in-out overflow-hidden",
        isSidebarOpen ? "w-64" : "w-0"
      )}
    >
      <div className="flex flex-col h-full w-64">
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-gray-200 p-4">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            ← Back to Website
          </Link>
        </div>
      </div>
    </aside>
  );
}
