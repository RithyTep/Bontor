"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import {
  Search,
  Plus,
  LayoutGrid,
  Heart,
  Play,
  ChevronUp,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  ListMusic,
  Volume2,
} from "lucide-react";

const recentItems = [
  { title: "Khmer Golden Era", subtitle: "Playlist • By Bontor", img: "photo-1621360841012-3f987258c5dc", type: "playlist" },
  { title: "VannDa - Skull 2", subtitle: "Album • VannDa", img: "photo-1619983081563-430f63602796", type: "album" },
  { title: "Sinn Sisamouth", subtitle: "Artist", img: "photo-1511671782779-c97d3d27a1d4", type: "artist" },
  { title: "Chill Vibes", subtitle: "Playlist • 45 songs", img: "photo-1514525253440-b393452e8d26", type: "playlist" },
  { title: "Romvong 2024", subtitle: "Playlist • Traditional", img: "photo-1496293455970-f8581aae0e3c", type: "playlist" },
];

const playlists = [
  { title: "Wedding Songs Collection", artist: "Various Artists", date: "2 days ago", songs: 45, time: "2:30:15", img: "photo-1621360841012-3f987258c5dc" },
  { title: "Gym Motivation", artist: "By You", date: "1 week ago", songs: 23, time: "1:15:00", img: "photo-1505740420928-5e560c06d30e" },
  { title: "Driving at Night", artist: "By You", date: "Oct 24, 2023", songs: 108, time: "5:42:10", img: "photo-1493225255756-d9584f8606e9" },
];

export default function LibraryPage() {
  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 glass sticky top-0 z-50 bg-[#050505]/80">
        <span className="font-bold text-white tracking-tight text-lg">My Library</span>
        <div className="flex gap-4">
          <button><Search className="w-5 h-5" /></button>
          <button><Plus className="w-5 h-5" /></button>
        </div>
      </div>

      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-[#0A0A0B]">
        {/* Filter Header */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 md:px-8 bg-black/50 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar max-w-full">
            <button className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold transition-transform hover:scale-105">All</button>
            {["Playlists", "Artists", "Albums", "Downloaded"].map((filter) => (
              <button key={filter} className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/5 transition-colors">
                {filter}
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search in library..." 
                className="h-9 w-64 rounded-lg bg-white/5 border border-white/10 pl-9 pr-4 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#7B61FF]/50 focus:ring-1 focus:ring-[#7B61FF]/50 transition-all" 
              />
            </div>
            <button className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto hide-scrollbar p-6 md:p-8 pb-32">
          {/* Hero Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* Liked Songs Card */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1 aspect-[2/1] lg:aspect-square relative group rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-[#7B61FF] to-purple-800 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white fill-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">Liked Songs</h2>
                <div className="flex items-center justify-between">
                  <p className="text-white/80 text-sm font-medium">142 songs</p>
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <Play className="w-5 h-5 fill-black ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Create New Playlist */}
            <div className="hidden lg:flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Plus className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <span className="text-slate-400 font-medium group-hover:text-white transition-colors">Create New Playlist</span>
            </div>

            {/* On Repeat */}
            <div className="relative rounded-2xl overflow-hidden bg-[#1A1A1D] border border-white/5 group cursor-pointer">
              <div className="absolute top-0 right-0 p-4 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur text-white px-2 py-1 rounded border border-white/10">On Repeat</span>
              </div>
              <div className="p-6 h-full flex flex-col justify-end relative z-10">
                <div className="flex -space-x-3 mb-4">
                  {["photo-1614613535308-eb5fbd3d2c17", "photo-1470225620780-dba8ba36b745", "photo-1493225255756-d9584f8606e9"].map((img) => (
                    <img key={img} src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=100&q=80`} alt="" className="w-10 h-10 rounded-full border-2 border-[#1A1A1D]" />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">On Repeat</h3>
                <p className="text-xs text-slate-500">Songs you love right now</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <img src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=600&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-lg tracking-tight">Recent Activity</h3>
              <button className="text-xs text-slate-500 hover:text-white transition-colors">View All</button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {recentItems.map((item, idx) => (
                <div key={item.title} className={`p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group cursor-pointer border border-transparent hover:border-white/5 ${idx >= 3 ? "hidden lg:block" : ""} ${idx >= 4 ? "hidden xl:block" : ""}`}>
                  <div className={`aspect-square ${item.type === "artist" ? "rounded-full mx-auto" : "rounded-lg"} bg-slate-800 mb-3 overflow-hidden relative shadow-lg`}>
                    <img src={`https://images.unsplash.com/${item.img}?auto=format&fit=crop&w=300&q=80`} alt="" className={`w-full h-full object-cover ${item.type === "artist" ? "grayscale group-hover:grayscale-0" : ""} transition-all`} />
                    {item.type !== "artist" && (
                      <button className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-[#7B61FF] text-white flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </button>
                    )}
                  </div>
                  <h4 className={`text-sm font-semibold text-white truncate ${item.type === "artist" ? "text-center" : ""}`}>{item.title}</h4>
                  <p className={`text-xs text-slate-400 mt-1 truncate ${item.type === "artist" ? "text-center" : ""}`}>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Your Playlists */}
          <div>
            <h3 className="text-white font-bold text-lg tracking-tight mb-4">Your Playlists</h3>
            <div className="flex flex-col gap-1">
              {/* Header Row */}
              <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-white/5">
                <div className="col-span-1">#</div>
                <div className="col-span-6 md:col-span-5">Title</div>
                <div className="hidden md:block md:col-span-3">Date Added</div>
                <div className="hidden md:block md:col-span-2 text-right">Songs</div>
                <div className="col-span-5 md:col-span-1 text-right">Time</div>
              </div>

              {playlists.map((playlist, idx) => (
                <div key={playlist.title} className="group grid grid-cols-12 gap-4 px-4 py-3 rounded-lg hover:bg-white/5 items-center cursor-pointer transition-colors">
                  <div className="col-span-1 text-slate-400 text-sm group-hover:text-white">{idx + 1}</div>
                  <div className="col-span-6 md:col-span-5 flex items-center gap-3">
                    <img src={`https://images.unsplash.com/${playlist.img}?auto=format&fit=crop&w=50&q=80`} alt="" className="w-10 h-10 rounded object-cover" />
                    <div className="min-w-0">
                      <h4 className="text-sm font-medium text-white truncate">{playlist.title}</h4>
                      <p className="text-xs text-slate-500 truncate group-hover:text-slate-400">{playlist.artist}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:col-span-3 text-xs text-slate-500">{playlist.date}</div>
                  <div className="hidden md:block md:col-span-2 text-xs text-slate-500 text-right">{playlist.songs}</div>
                  <div className="col-span-5 md:col-span-1 text-xs text-slate-500 text-right">{playlist.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Player Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-40 glass-solid px-4 py-3 md:px-6 md:py-4 flex items-center justify-between gap-4">
          {/* Now Playing */}
          <div className="flex items-center gap-3 w-1/3 min-w-[150px]">
            <div className="group relative w-12 h-12 rounded bg-slate-800 flex-shrink-0 cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=100&q=80" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 hidden group-hover:flex items-center justify-center">
                <ChevronUp className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-white truncate hover:underline cursor-pointer">Sombot Muoy Mern Chnam</h4>
              <p className="text-xs text-slate-400 truncate hover:text-white cursor-pointer transition-colors">Sinn Sisamouth</p>
            </div>
            <button className="hidden md:block text-[#7B61FF] ml-2"><Heart className="w-4 h-4 fill-current" /></button>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-1 flex-1 max-w-lg">
            <div className="flex items-center gap-6">
              <button className="text-slate-400 hover:text-white transition-colors"><Shuffle className="w-4 h-4" /></button>
              <button className="text-slate-200 hover:text-white transition-colors"><SkipBack className="w-5 h-5" /></button>
              <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"><Play className="w-4 h-4 fill-black ml-0.5" /></button>
              <button className="text-slate-200 hover:text-white transition-colors"><SkipForward className="w-5 h-5" /></button>
              <button className="text-slate-400 hover:text-white transition-colors"><Repeat className="w-4 h-4" /></button>
            </div>
            {/* Progress */}
            <div className="w-full hidden md:flex items-center gap-2 text-[10px] font-medium text-slate-500 font-mono">
              <span>1:24</span>
              <div className="flex-1 h-1 bg-white/10 rounded-full cursor-pointer group relative">
                <div className="absolute w-1/3 h-full bg-white rounded-full group-hover:bg-[#7B61FF] transition-colors" />
                <div className="absolute left-1/3 w-2 h-2 bg-white rounded-full -translate-y-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span>3:45</span>
            </div>
          </div>

          {/* Volume */}
          <div className="hidden md:flex items-center justify-end gap-3 w-1/3">
            <button className="text-slate-400 hover:text-white transition-colors"><Mic2 className="w-4 h-4" /></button>
            <button className="text-slate-400 hover:text-white transition-colors"><ListMusic className="w-4 h-4" /></button>
            <div className="flex items-center gap-2 w-24 group">
              <Volume2 className="w-4 h-4 text-slate-400" />
              <div className="flex-1 h-1 bg-white/10 rounded-full cursor-pointer">
                <div className="w-2/3 h-full bg-slate-400 rounded-full group-hover:bg-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <MobileNav />
    </>
  );
}
