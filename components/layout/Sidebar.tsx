"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Mic2, Library, Plus, Trophy } from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "ទំព័រដើម (Home)" },
  { href: "/discover", icon: Compass, label: "ស្វែងរក (Discover)" },
  { href: "/karaoke", icon: Mic2, label: "ខារ៉ាអូខេ (Karaoke)" },
  { href: "/library", icon: Library, label: "បណ្ណាល័យ (Library)" },
];

interface SidebarProps {
  showKaraokeScore?: boolean;
}

export function Sidebar({ showKaraokeScore = false }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-white/5 bg-black h-full p-6 gap-8 z-20">
      <div className="flex items-center gap-3 px-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7B61FF] to-indigo-600 shadow-[0_0_15px_rgba(123,97,255,0.4)] flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </div>
        <span className="text-xl font-bold text-white tracking-tight">Bontor</span>
      </div>

      <nav className="flex flex-col gap-1">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">Menu</p>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? "bg-gradient-to-r from-[#7B61FF]/20 to-transparent text-white font-medium border-l-2 border-[#7B61FF]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-[#7B61FF]" : ""}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        {showKaraokeScore ? (
          <div className="p-4 rounded-xl bg-[#1A1A1D] border border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#EFB818]/10 flex items-center justify-center text-[#EFB818]">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Your Score</p>
                <p className="text-lg font-bold text-white">98/100</p>
              </div>
            </div>
            <div className="text-xs text-slate-500">You are singing better than 85% of users!</div>
          </div>
        ) : (
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-3 rounded-xl bg-gradient-to-r from-[#7B61FF]/10 to-transparent border border-[#7B61FF]/10 hover:border-[#7B61FF]/30 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#7B61FF]/20 flex items-center justify-center text-[#7B61FF]">
              <Plus className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-white">Create Playlist</span>
          </Link>
        )}
      </div>
    </aside>
  );
}
