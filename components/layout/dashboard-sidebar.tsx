"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, FileSearch, Network } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  { name: "Audit", href: "/app/audit", icon: FileSearch },
  { name: "Architecture", href: "/app/architecture", icon: Network },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 border-r border-gray-200 bg-white">
      <div className="flex flex-col h-full">
        <div className="flex h-16 items-center border-b border-gray-200 px-6">
          <Link href="/" className="text-xl font-bold">
            Kasparro
          </Link>
        </div>

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
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
            ← Back to Website
          </Link>
        </div>
      </div>
    </aside>
  );
}
