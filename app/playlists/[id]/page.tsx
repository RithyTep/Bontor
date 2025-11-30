import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Player } from "@/components/Player";
import { SongListItem } from "@/components/SongListItem";

interface PlaylistPageProps {
  params: Promise<{ id: string }>;
}

export default async function PlaylistPage({ params }: PlaylistPageProps) {
  const { id } = await params;

  // This would fetch from tRPC in a real app
  const playlist = {
    id,
    name: "Khmer Hits 2024",
    description: "The best Khmer songs of the year",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400",
    songs: [
      {
        id: "1",
        title: "Time to Rise",
        artistName: "VannDa",
        coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=100",
        duration: 245,
        audioUrl: "/audio/sample.mp3",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 h-full overflow-y-auto hide-scrollbar bg-black">
        <Header />

        <div className="px-8 py-6">
          {/* Playlist Header */}
          <div className="flex gap-8 mb-8">
            <div className="w-60 h-60 rounded-2xl overflow-hidden shadow-2xl">
              {playlist.coverUrl ? (
                <Image
                  src={playlist.coverUrl}
                  alt={playlist.name}
                  width={240}
                  height={240}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-brand-purple to-pink-500 flex items-center justify-center">
                  <span className="text-6xl">🎵</span>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-brand-purple text-sm font-bold mb-2">PLAYLIST</p>
              <h1 className="text-4xl font-black text-white mb-2">{playlist.name}</h1>
              <p className="text-slate-400 mb-4">{playlist.description}</p>
              <p className="text-sm text-slate-500">{playlist.songs.length} songs</p>
            </div>
          </div>

          {/* Songs */}
          <div className="flex flex-col gap-2">
            {playlist.songs.map((song, index) => (
              <SongListItem key={song.id} index={index + 1} {...song} />
            ))}
          </div>
        </div>
      </main>
      <Player />
    </>
  );
}
