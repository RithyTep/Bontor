"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Heart,
  Mic,
} from "lucide-react";
import { usePlayerStore } from "@/stores/playerStore";

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const { currentSong, isPlaying, setIsPlaying, karaokeMode, setKaraokeMode } =
    usePlayerStore();

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      setDuration(total);
      setProgress((current / total) * 100);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      audioRef.current.currentTime = percentage * duration;
    }
  };

  if (!currentSong) {
    return null;
  }

  return (
    <aside className="hidden lg:flex w-[400px] bg-[#0A0A0B] border-l border-white/5 flex-col relative z-20">
      <audio
        ref={audioRef}
        src={currentSong.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Tab Switch */}
      <div className="flex p-4 gap-2">
        <button className="flex-1 py-2 rounded-lg bg-white/10 text-white text-xs font-bold tracking-wide">
          PLAYER
        </button>
        <button className="flex-1 py-2 rounded-lg text-slate-500 hover:bg-white/5 text-xs font-bold tracking-wide transition-colors">
          QUEUE
        </button>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar p-6 flex flex-col items-center">
        {/* Cover Art */}
        <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(123,97,255,0.3)] mb-8 border border-white/10 relative group">
          <Image
            src={currentSong.coverUrl}
            alt={currentSong.title}
            fill
            className="object-cover"
          />
          {karaokeMode && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6">
              <p className="text-xs font-bold text-brand-gold mb-2 uppercase tracking-widest">
                Karaoke Mode
              </p>
              <div className="flex gap-1 items-end h-8 mb-4">
                {[0.1, 0.3, 0.5, 0.2, 0.4].map((delay, i) => (
                  <div
                    key={i}
                    className="w-1 bg-brand-purple animate-equalizer"
                    style={{ animationDelay: `${delay}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Song Info */}
        <div className="w-full flex items-start justify-between mb-2">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
              {currentSong.title}
            </h3>
            <p className="text-slate-400 font-medium">{currentSong.artistName}</p>
          </div>
          <button className="text-brand-gold">
            <Heart className="w-6 h-6 fill-brand-gold" />
          </button>
        </div>

        {/* Lyrics Area (Karaoke) */}
        {karaokeMode && (
          <div className="w-full h-48 overflow-hidden relative my-6 mask-image-gradient">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-transparent to-[#0A0A0B] z-10 pointer-events-none" />
            <div className="flex flex-col items-center gap-4 text-center pt-8">
              <p className="text-slate-600 text-lg font-medium blur-[1px]">
                Bong kirt tha yeung...
              </p>
              <p className="text-2xl active-lyric font-bold tracking-tight">
                Sneak knong jit...
              </p>
              <p className="text-slate-600 text-lg font-medium blur-[1px]">
                Tov mork min ...
              </p>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="w-full mt-auto">
          {/* Progress */}
          <div
            className="group w-full mb-4 cursor-pointer"
            onClick={handleSeek}
          >
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden relative">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-purple to-brand-gold shadow-[0_0_10px_rgba(123,97,255,0.5)]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-2 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between mb-8">
            <button className="text-slate-500 hover:text-white transition-colors">
              <Shuffle className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-brand-purple transition-colors">
              <SkipBack className="w-7 h-7 fill-white/10" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-black" />
              ) : (
                <Play className="w-6 h-6 fill-black ml-1" />
              )}
            </button>
            <button className="text-white hover:text-brand-purple transition-colors">
              <SkipForward className="w-7 h-7 fill-white/10" />
            </button>
            <button className="text-slate-500 hover:text-white transition-colors">
              <Repeat className="w-5 h-5" />
            </button>
          </div>

          {/* Karaoke Toggle */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-xl border border-white/5">
            <div className="flex items-center gap-3">
              <Mic className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-bold text-white">Karaoke</span>
            </div>
            <button
              onClick={() => setKaraokeMode(!karaokeMode)}
              className={`w-8 h-4 rounded-full relative cursor-pointer border transition-colors ${
                karaokeMode
                  ? "bg-brand-purple/20 border-brand-purple/50"
                  : "bg-slate-700 border-slate-600"
              }`}
            >
              <div
                className={`absolute top-0.5 w-3 h-3 bg-brand-gold rounded-full shadow-md transition-all ${
                  karaokeMode ? "right-0.5" : "left-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
