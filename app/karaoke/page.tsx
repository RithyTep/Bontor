"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { 
  ChevronLeft, 
  Settings2, 
  Mic, 
  SkipBack, 
  Pause, 
  SkipForward, 
  X, 
  PlusCircle, 
  BarChart2,
  ListMusic
} from "lucide-react";

export default function KaraokePage() {
  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 glass sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7B61FF] to-blue-600 flex items-center justify-center font-bold text-white">B</div>
          <span className="font-bold text-white tracking-tight">Karaoke</span>
        </div>
        <div className="px-2 py-1 bg-[#EFB818]/20 text-[#EFB818] text-xs rounded border border-[#EFB818]/30 font-bold">VIP</div>
      </div>

      <Sidebar showKaraokeScore />

      {/* Karaoke Main Interface */}
      <main className="flex-1 h-full relative flex flex-col bg-[#050505] overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=1200&q=80" 
            alt="" 
            className="w-full h-full object-cover opacity-20 blur-3xl scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
          <div className="absolute inset-0 karaoke-bg animate-pulse-slow" />
        </div>

        {/* Karaoke Header */}
        <header className="relative z-10 flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white border border-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2">
                Sombot Muoy Mern Chnam
                <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-slate-300 font-normal border border-white/5">Original Key</span>
              </h1>
              <p className="text-slate-400 text-sm">Sinn Sisamouth</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Mic Ready</span>
            </div>
            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors">
              <Settings2 className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Lyrics Stage */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 text-center">
          {/* Previous Lines */}
          <div className="space-y-6 mb-8 opacity-40 blur-[1px] transform scale-95 transition-all duration-700">
            <p className="text-2xl md:text-3xl font-bold text-slate-300">Oh... sneaha del khnom...</p>
          </div>

          {/* Active Line */}
          <div className="my-6 transform transition-all duration-300 animate-float">
            <p className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-white drop-shadow-[0_0_30px_rgba(123,97,255,0.3)]">
              <span className="lyric-gradient">Mean </span>
              <span className="active-word">champaoh</span>
              <span className="lyric-gradient"> srey...</span>
            </p>
            <p className="text-lg text-[#7B61FF]/80 font-medium mt-4 tracking-widest uppercase">Instrumental Break</p>
          </div>

          {/* Next Lines */}
          <div className="space-y-6 mt-8 opacity-40 blur-[1px] transform scale-95 transition-all duration-700">
            <p className="text-2xl md:text-3xl font-bold text-slate-300">Min prae prul... laey...</p>
            <p className="text-xl md:text-2xl font-bold text-slate-500">Teat roy chnam...</p>
          </div>
        </div>

        {/* Karaoke Controls */}
        <div className="relative z-20 pb-10 px-8 flex justify-center">
          <div className="w-full max-w-3xl glass rounded-2xl p-4 border border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between gap-6">
              {/* Vocal Toggle */}
              <div className="flex flex-col items-center gap-2">
                <button className="w-12 h-12 rounded-full bg-[#7B61FF] text-white flex items-center justify-center shadow-[0_0_15px_rgba(123,97,255,0.5)] hover:scale-105 transition-transform">
                  <Mic className="w-5 h-5" />
                </button>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Vocal On</span>
              </div>

              {/* Audio Controls */}
              <div className="flex-1 grid grid-cols-2 gap-8 px-4 border-l border-r border-white/5">
                {/* Key Control */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-400">
                    <span>KEY</span>
                    <span className="text-[#EFB818]">0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center text-xs font-bold border border-white/10">-</button>
                    <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-slate-600" />
                    </div>
                    <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center text-xs font-bold border border-white/10">+</button>
                  </div>
                </div>

                {/* Echo Control */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-400">
                    <span>ECHO</span>
                    <span className="text-[#7B61FF]">50%</span>
                  </div>
                  <div className="relative h-8 flex items-center cursor-pointer group">
                    <div className="absolute w-full h-1 bg-slate-800 rounded-full" />
                    <div className="absolute w-1/2 h-1 bg-[#7B61FF] rounded-full shadow-[0_0_10px_rgba(123,97,255,0.5)]" />
                    <div className="absolute left-1/2 w-4 h-4 bg-white rounded-full shadow-lg transform -translate-x-2 scale-0 group-hover:scale-100 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Playback Controls */}
              <div className="flex items-center gap-4">
                <button className="text-slate-400 hover:text-white transition-colors">
                  <SkipBack className="w-6 h-6" />
                </button>
                <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <Pause className="w-6 h-6 fill-black" />
                </button>
                <button className="text-slate-400 hover:text-white transition-colors">
                  <SkipForward className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Right Panel: Queue */}
      <aside className="hidden lg:flex w-[320px] bg-[#0A0A0B] border-l border-white/5 flex-col relative z-20">
        <div className="p-5 border-b border-white/5">
          <h3 className="text-white font-bold text-sm tracking-wide">Up Next</h3>
          <p className="text-xs text-slate-500 mt-1">From: Khmer Classic Playlist</p>
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar p-3 space-y-1">
          {/* Queue Item (Active) */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-[#7B61FF]/20 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#7B61FF]" />
            <div className="w-10 h-10 rounded bg-slate-800 flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=100&q=80" alt="" className="w-full h-full object-cover rounded opacity-50" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-medium text-sm truncate">Sombot Muoy Mern Chnam</h4>
              <p className="text-[#7B61FF] text-xs flex items-center gap-1">
                <BarChart2 className="w-3 h-3" /> Playing
              </p>
            </div>
          </div>

          {/* Queue Items */}
          {[
            { title: "Time to Rise", artist: "VannDa", img: "photo-1470225620780-dba8ba36b745" },
            { title: "Champa Battambang", artist: "Sinn Sisamouth", img: "photo-1493225255756-d9584f8606e9" },
            { title: "Saang Sne", artist: "G-Devith", img: "photo-1511671782779-c97d3d27a1d4" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5">
              <div className="w-10 h-10 rounded bg-slate-800 flex-shrink-0 overflow-hidden">
                <img src={`https://images.unsplash.com/${item.img}?auto=format&fit=crop&w=100&q=80`} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-slate-300 group-hover:text-white font-medium text-sm truncate transition-colors">{item.title}</h4>
                <p className="text-slate-500 text-xs truncate">{item.artist}</p>
              </div>
              <button className="opacity-0 group-hover:opacity-100 text-white"><X className="w-4 h-4" /></button>
            </div>
          ))}
        </div>

        <div className="p-4 bg-black border-t border-white/5">
          <button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-bold border border-white/10 transition-colors flex items-center justify-center gap-2">
            <PlusCircle className="w-4 h-4" />
            Add Song to Queue
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[60px] bg-[#0A0A0B]/90 backdrop-blur-xl border-t border-white/10 flex items-center justify-around z-50">
        {/* Mobile nav items handled by separate component or inline */}
      </nav>

      {/* Mobile Control Panel */}
      <div className="md:hidden fixed bottom-[70px] left-4 right-4 z-40">
        <div className="glass p-4 rounded-2xl flex items-center justify-between shadow-2xl border border-white/10">
          <button className="w-10 h-10 rounded-full bg-[#7B61FF]/20 text-[#7B61FF] flex items-center justify-center">
            <Mic className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4">
            <button className="text-white"><SkipBack className="w-6 h-6" /></button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><Pause className="w-5 h-5 fill-black" /></button>
            <button className="text-white"><SkipForward className="w-6 h-6" /></button>
          </div>
          <button className="w-10 h-10 rounded-full bg-white/5 text-slate-300 flex items-center justify-center">
            <ListMusic className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}
