"use client";

import Image from "next/image";
import { Heart, MoreHorizontal } from "lucide-react";
import { usePlayerStore } from "@/stores/playerStore";

interface SongListItemProps {
  index: number;
  id: string;
  title: string;
  artistName: string;
  coverUrl: string;
  duration: number;
  audioUrl: string;
}

export function SongListItem({
  index,
  id,
  title,
  artistName,
  coverUrl,
  duration,
  audioUrl,
}: SongListItemProps) {
  const { setCurrentSong, setIsPlaying } = usePlayerStore();

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePlay = () => {
    setCurrentSong({ id, title, artistName, coverUrl, audioUrl });
    setIsPlaying(true);
  };

  return (
    <div
      onClick={handlePlay}
      className="group flex items-center p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5"
    >
      <span className="text-slate-500 w-8 text-center text-sm font-medium">
        {index}
      </span>
      <div className="relative w-12 h-12 rounded-lg overflow-hidden mr-4">
        <Image src={coverUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-medium text-sm group-hover:text-brand-purple transition-colors">
          {title}
        </h4>
        <p className="text-slate-500 text-xs">{artistName}</p>
      </div>
      <div className="text-slate-500 text-xs mr-8 hidden md:block">
        {formatDuration(duration)}
      </div>
      <button className="text-slate-400 hover:text-brand-gold p-2">
        <Heart className="w-4 h-4" />
      </button>
      <button className="text-slate-400 hover:text-white p-2">
        <MoreHorizontal className="w-4 h-4" />
      </button>
    </div>
  );
}
