"use client";

import Link from "next/link";
import { Home, Compass, Mic2, Library, QrCode } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "ទំព័រដើម (Home)", icon: Home },
  { href: "/discover", label: "ស្វែងរក (Discover)", icon: Compass },
  { href: "/karaoke", label: "ខារ៉ាអូខេ (Karaoke)", icon: Mic2 },
  { href: "/library", label: "បណ្ណាល័យ (Library)", icon: Library },
];

const playlists = [
  { name: "បទពេញនិយម (Hits)", color: "bg-brand-gold" },
  { name: "ស្នេហា (Love Songs)", color: "bg-blue-500" },
  { name: "Khmer Oldies", color: "bg-purple-500" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-white/5 bg-black h-full p-6 gap-8 z-20">
      {/* Logo */}
      <div className="flex items-center gap-3 px-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-purple to-indigo-600 shadow-[0_0_15px_rgba(123,97,255,0.4)] flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
        </div>
        <span className="text-xl font-bold text-white tracking-tight">Bontor</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">
          Menu
        </p>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                isActive
                  ? "bg-white/5 text-white border border-white/5"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-brand-purple" : ""}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Playlists */}
      <div className="flex flex-col gap-1 mt-auto">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">
          Playlists
        </p>
        {playlists.map((playlist) => (
          <Link
            key={playlist.name}
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white transition-colors text-sm"
          >
            <div className={`w-2 h-2 rounded-full ${playlist.color}`} />
            <span>{playlist.name}</span>
          </Link>
        ))}
      </div>

      {/* VIP Banner */}
      <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10 relative overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-brand-purple/10 group-hover:bg-brand-purple/20 transition-colors" />
        <div className="relative z-10">
          <h4 className="font-bold text-white text-sm mb-1">Go Premium VIP</h4>
          <p className="text-xs text-slate-400 mb-3">Hi-Res Audio & Offline</p>
          <div className="flex items-center gap-2 text-brand-gold font-bold text-xs">
            <span>KHQR Payment</span>
            <QrCode className="w-3 h-3" />
          </div>
        </div>
      </div>
    </aside>
  );
}
