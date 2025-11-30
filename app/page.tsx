import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { MobileHeader } from "@/components/MobileHeader";
import { MobileNav } from "@/components/MobileNav";
import { MobilePlayer } from "@/components/MobilePlayer";
import { Player } from "@/components/Player";
import { HeroBanner } from "@/components/HeroBanner";
import { CategoryChips } from "@/components/CategoryChips";
import { SongCard } from "@/components/SongCard";
import { SongListItem } from "@/components/SongListItem";

const trendingSongs = [
  {
    id: "1",
    title: "Time to Rise",
    artistName: "VannDa ft. Master Kong Nay",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
    audioUrl: "/audio/sample.mp3",
  },
  {
    id: "2",
    title: "Saang Sne (សាងស្នេហ៍)",
    artistName: "G-Devith",
    coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
    audioUrl: "/audio/sample.mp3",
  },
  {
    id: "3",
    title: "Are You Okay?",
    artistName: "Ton Chanseyma",
    coverUrl: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=400&q=80",
    audioUrl: "/audio/sample.mp3",
  },
  {
    id: "4",
    title: "Kromum Srok Khmer",
    artistName: "Popular Remix",
    coverUrl: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=400&q=80",
    audioUrl: "/audio/sample.mp3",
  },
  {
    id: "5",
    title: "Champa Battambang",
    artistName: "Sinn Sisamouth",
    coverUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=400&q=80",
    audioUrl: "/audio/sample.mp3",
  },
];

const oldiesSongs = [
  {
    id: "6",
    title: "Violon Sne",
    artistName: "Sinn Sisamouth",
    coverUrl: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=100&q=80",
    duration: 225,
    audioUrl: "/audio/sample.mp3",
  },
  {
    id: "7",
    title: "Sombot Muoy Mern Chnam",
    artistName: "Sinn Sisamouth & Ros Sereysothea",
    coverUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=100&q=80",
    duration: 252,
    audioUrl: "/audio/sample.mp3",
  },
];

export default function HomePage() {
  return (
    <>
      <MobileHeader />
      <Navbar />

      <main className="flex-1 h-full overflow-y-auto hide-scrollbar bg-black relative pb-32 md:pb-0">
        <Header />

        <div className="px-4 md:px-8 py-6 space-y-10">
          {/* Hero Banner */}
          <HeroBanner
            title="VannDa"
            subtitle="Skull 2"
            description="Experience the latest masterpiece blending traditional Khmer instruments with modern hip-hop beats. The album that defines a generation."
            imageUrl="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=1200&q=80"
          />

          {/* Categories */}
          <CategoryChips />

          {/* Trending Section */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                Trending in Cambodia
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              </h2>
              <a href="#" className="text-xs text-brand-purple font-semibold hover:underline">
                VIEW ALL
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {trendingSongs.map((song) => (
                <SongCard key={song.id} {...song} />
              ))}
            </div>
          </section>

          {/* Oldies List Section */}
          <section className="pb-20">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-white tracking-tight">
                Khmer Oldies Classics
              </h2>
              <a href="#" className="text-xs text-brand-purple font-semibold hover:underline">
                VIEW ALL
              </a>
            </div>
            <div className="flex flex-col gap-2">
              {oldiesSongs.map((song, index) => (
                <SongListItem key={song.id} index={index + 1} {...song} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Player />
      <MobilePlayer />
      <MobileNav />
    </>
  );
}
