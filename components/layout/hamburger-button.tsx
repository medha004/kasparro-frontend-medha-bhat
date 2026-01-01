"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";

export function HamburgerButton() {
  const toggleSidebar = useAppStore((state) => state.toggleSidebar);
  const isSidebarOpen = useAppStore((state) => state.isSidebarOpen);

  const handleClick = () => {
    console.log('Hamburger clicked! Current state:', isSidebarOpen);
    toggleSidebar();
    console.log('After toggle, state should be:', !isSidebarOpen);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      aria-label="Toggle menu"
    >
      <Menu className="h-6 w-6" />
    </Button>
  );
}
