import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Player } from "@/components/Player";
import { Settings, Crown } from "lucide-react";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 h-full overflow-y-auto hide-scrollbar bg-black">
        <Header />

        <div className="px-8 py-6 max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-purple">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256"
                alt="Profile"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Sopheak</h1>
              <p className="text-slate-400 mb-3">sopheak@email.com</p>
              <div className="flex items-center gap-2 px-3 py-1 bg-brand-gold/20 text-brand-gold rounded-full text-sm font-semibold">
                <Crown className="w-4 h-4" />
                VIP Member
              </div>
            </div>
            <button className="ml-auto p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <Settings className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <p className="text-3xl font-bold text-white mb-1">127</p>
              <p className="text-slate-400 text-sm">Songs Played</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <p className="text-3xl font-bold text-white mb-1">12</p>
              <p className="text-slate-400 text-sm">Playlists</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <p className="text-3xl font-bold text-white mb-1">45</p>
              <p className="text-slate-400 text-sm">Downloads</p>
            </div>
          </div>

          {/* Settings Sections */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Settings</h2>
            
            <div className="bg-white/5 rounded-xl border border-white/10 divide-y divide-white/10">
              <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
                <span className="text-white">Audio Quality</span>
                <span className="text-slate-400">High (320kbps)</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
                <span className="text-white">Download Quality</span>
                <span className="text-slate-400">High</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
                <span className="text-white">Language</span>
                <span className="text-slate-400">ខ្មែរ (Khmer)</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Player />
    </>
  );
}
