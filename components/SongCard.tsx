"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { usePlayerStore } from "@/stores/playerStore";

interface SongCardProps {
  id: string;
  title: string;
  artistName: string;
  coverUrl: string;
  audioUrl: string;
}

export function SongCard({ id, title, artistName, coverUrl, audioUrl }: SongCardProps) {
  const { setCurrentSong, setIsPlaying } = usePlayerStore();

  const handlePlay = () => {
    setCurrentSong({
      id,
      title,
      artistName,
      coverUrl,
      audioUrl,
    });
    setIsPlaying(true);
  };

  return (
    <div className="group cursor-pointer" onClick={handlePlay}>
      <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 shadow-lg">
        <Image
          src={coverUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <button className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center shadow-xl text-white transform scale-50 group-hover:scale-100 transition-all duration-300">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </button>
        </div>
      </div>
      <h3 className="font-semibold text-white text-sm truncate">{title}</h3>
      <p className="text-xs text-slate-400 mt-1 truncate">{artistName}</p>
    </div>
  );
}
