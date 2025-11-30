"use client";

import Image from "next/image";
import { Play, Pause, SkipForward } from "lucide-react";
import { usePlayerStore } from "@/stores/playerStore";

export function MobilePlayer() {
  const { currentSong, isPlaying, setIsPlaying, karaokeMode } = usePlayerStore();

  if (!currentSong) return null;

  return (
    <div className="md:hidden fixed bottom-[64px] left-2 right-2 bg-[#1C1C1E] border border-white/10 rounded-xl p-2 flex items-center justify-between shadow-2xl z-40 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-800 relative">
          <Image
            src={currentSong.coverUrl}
            alt={currentSong.title}
            fill
            className={`object-cover ${isPlaying ? "animate-spin-slow" : ""}`}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold truncate max-w-[150px]">
            {currentSong.title}
          </h4>
          <p className="text-brand-gold text-[10px]">
            {karaokeMode ? "Karaoke Active" : currentSong.artistName}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 pr-2">
        <button onClick={() => setIsPlaying(!isPlaying)} className="text-white">
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-white" />
          ) : (
            <Play className="w-5 h-5 fill-white" />
          )}
        </button>
        <button className="text-slate-400">
          <SkipForward className="w-5 h-5 fill-slate-400" />
        </button>
      </div>
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-2 right-2 h-[2px] bg-white/10">
        <div className="h-full w-1/3 bg-brand-purple" />
      </div>
    </div>
  );
}
