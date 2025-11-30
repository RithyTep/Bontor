"use client";

import { Search, Bell, ChevronDown } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="hidden md:flex items-center justify-between px-8 py-5 sticky top-0 z-30 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center gap-4 w-96">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-brand-purple transition-colors" />
          <input
            type="text"
            placeholder="Search songs, artists, lyrics..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-transparent placeholder:text-slate-600 transition-all"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 text-slate-400 hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-black" />
        </button>
        <div className="h-8 w-[1px] bg-white/10" />
        <button className="flex items-center gap-2 hover:bg-white/5 pr-4 pl-1 py-1 rounded-full transition-colors">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full border border-white/20"
          />
          <span className="text-sm font-medium text-white">Sopheak</span>
          <ChevronDown className="w-3 h-3 text-slate-500" />
        </button>
      </div>
    </header>
  );
}
