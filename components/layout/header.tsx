"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Kasparro
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/platform" className="text-sm font-medium hover:text-gray-600 transition-colors">
            Platform
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors">
            About
          </Link>
          <Link href="/app/dashboard">
            <Button size="sm">Dashboard</Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Link href="/app/dashboard">
            <Button size="sm">Dashboard</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
