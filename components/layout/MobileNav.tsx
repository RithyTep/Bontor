"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Mic2, Library } from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/discover", icon: Compass, label: "Explore" },
  { href: "/karaoke", icon: Mic2, label: "Karaoke" },
  { href: "/library", icon: Library, label: "Library" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[80px] bg-[#0A0A0B] border-t border-white/10 flex items-end justify-around pb-4 z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 ${isActive ? "text-[#7B61FF]" : "text-slate-500"}`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
