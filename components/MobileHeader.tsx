import { Search } from "lucide-react";
import Image from "next/image";

export function MobileHeader() {
  return (
    <div className="md:hidden flex items-center justify-between p-4 glass sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-purple to-blue-600 flex items-center justify-center font-bold text-white">
          B
        </div>
        <span className="font-bold text-white tracking-tight">Bontor</span>
      </div>
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 text-slate-400" />
        <div className="w-8 h-8 rounded-full bg-slate-800 overflow-hidden border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
            alt="Profile"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
