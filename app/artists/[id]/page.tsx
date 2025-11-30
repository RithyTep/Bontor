import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Player } from "@/components/Player";
import { SongListItem } from "@/components/SongListItem";

interface ArtistPageProps {
  params: Promise<{ id: string }>;
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { id } = await params;

  // This would fetch from tRPC in a real app
  const artist = {
    id,
    name: "VannDa",
    bio: "Cambodian hip-hop artist blending traditional Khmer sounds with modern beats",
    photoUrl: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=800",
    followers: 500000,
    songs: [
      {
        id: "1",
        title: "Time to Rise",
        artistName: "VannDa",
        coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400",
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

        {/* Artist Header */}
        <div className="relative h-80">
          <Image
            src={artist.photoUrl}
            alt={artist.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-brand-purple text-sm font-bold mb-2">ARTIST</p>
            <h1 className="text-5xl font-black text-white mb-4">{artist.name}</h1>
            <p className="text-slate-400 max-w-lg mb-4">{artist.bio}</p>
            <p className="text-sm text-slate-500">
              {artist.followers.toLocaleString()} followers
            </p>
          </div>
        </div>

        {/* Songs */}
        <div className="px-8 py-6">
          <h2 className="text-xl font-bold text-white mb-4">Popular Songs</h2>
          <div className="flex flex-col gap-2">
            {artist.songs.map((song, index) => (
              <SongListItem key={song.id} index={index + 1} {...song} />
            ))}
          </div>
        </div>
      </main>
      <Player />
    </>
  );
}
