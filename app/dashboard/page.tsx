import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Users, Music, ListMusic, DollarSign } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 h-full overflow-y-auto hide-scrollbar bg-black">
        <Header />

        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-brand-purple/20 to-brand-purple/5 rounded-2xl p-6 border border-brand-purple/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">12,450</p>
                  <p className="text-slate-400 text-sm">Total Users</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Music className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">1,234</p>
                  <p className="text-slate-400 text-sm">Total Songs</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 rounded-2xl p-6 border border-pink-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                  <ListMusic className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">567</p>
                  <p className="text-slate-400 text-sm">Playlists</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 rounded-2xl p-6 border border-brand-gold/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">$8,920</p>
                  <p className="text-slate-400 text-sm">Revenue</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-500">✓</span>
                </div>
                <div>
                  <p className="text-white">New VIP subscription</p>
                  <p className="text-slate-400 text-sm">User Sopheak upgraded to VIP</p>
                </div>
                <span className="ml-auto text-slate-500 text-sm">2 min ago</span>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Music className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <p className="text-white">New song uploaded</p>
                  <p className="text-slate-400 text-sm">&quot;Time to Rise&quot; by VannDa</p>
                </div>
                <span className="ml-auto text-slate-500 text-sm">1 hour ago</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
