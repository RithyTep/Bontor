"use client";

import Link from "next/link";
import { Home, Compass, Mic2, Library } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/discover", label: "Explore", icon: Compass },
  { href: "/karaoke", label: "Karaoke", icon: Mic2 },
  { href: "/library", label: "Library", icon: Library },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[60px] bg-[#0A0A0B]/90 backdrop-blur-xl border-t border-white/10 flex items-center justify-around z-50 pb-safe">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 ${
              isActive ? "text-brand-purple" : "text-slate-500"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
