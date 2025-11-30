import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Player } from "@/components/Player";

interface SongPageProps {
  params: Promise<{ id: string }>;
}

export default async function SongPage({ params }: SongPageProps) {
  const { id } = await params;

  // This would fetch from tRPC in a real app
  const song = {
    id,
    title: "Time to Rise",
    artistName: "VannDa ft. Master Kong Nay",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800",
    lyrics: "Bong kirt tha yeung...\nSneak knong jit...\nTov mork min...",
    plays: 1500000,
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 h-full overflow-y-auto hide-scrollbar bg-black">
        <Header />

        <div className="px-8 py-6 flex gap-8">
          {/* Cover */}
          <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
            <Image
              src={song.coverUrl}
              alt={song.title}
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <p className="text-brand-purple text-sm font-bold mb-2">SONG</p>
            <h1 className="text-4xl font-black text-white mb-2">{song.title}</h1>
            <p className="text-xl text-slate-400 mb-4">{song.artistName}</p>
            <p className="text-sm text-slate-500 mb-8">
              {song.plays.toLocaleString()} plays
            </p>

            {/* Lyrics */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-white font-bold mb-4">Lyrics</h3>
              <pre className="text-slate-400 whitespace-pre-wrap font-sans">
                {song.lyrics}
              </pre>
            </div>
          </div>
        </div>
      </main>
      <Player />
    </>
  );
}
