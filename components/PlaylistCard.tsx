import Image from "next/image";
import Link from "next/link";

interface PlaylistCardProps {
  id: string;
  name: string;
  coverUrl?: string;
  songCount: number;
}

export function PlaylistCard({ id, name, coverUrl, songCount }: PlaylistCardProps) {
  return (
    <Link
      href={`/playlists/${id}`}
      className="group block p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
    >
      <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
        {coverUrl ? (
          <Image src={coverUrl} alt={name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-purple to-pink-500 flex items-center justify-center">
            <span className="text-4xl">🎵</span>
          </div>
        )}
      </div>
      <h3 className="font-semibold text-white text-sm truncate group-hover:text-brand-purple transition-colors">
        {name}
      </h3>
      <p className="text-xs text-slate-400 mt-1">{songCount} songs</p>
    </Link>
  );
}
