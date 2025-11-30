import Image from "next/image";
import { Play, Plus } from "lucide-react";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  badge?: string;
}

export function HeroBanner({
  title,
  subtitle,
  description,
  imageUrl,
  badge = "Featured Artist",
}: HeroBannerProps) {
  return (
    <section className="relative w-full h-[400px] md:h-[320px] rounded-3xl overflow-hidden group">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/30 to-transparent mix-blend-overlay" />

      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10 pb-8 items-start">
        <div className="px-3 py-1 bg-brand-gold/20 text-brand-gold text-xs font-bold rounded-full border border-brand-gold/20 backdrop-blur-md mb-4 uppercase tracking-widest">
          {badge}
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-500">
            {subtitle}
          </span>
        </h1>
        <p className="text-slate-300 max-w-lg mb-6 text-sm md:text-base leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <Play className="w-4 h-4 fill-black" />
            Play Now
          </button>
          <button className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors">
            <Plus className="w-4 h-4" />
            Add to Library
          </button>
        </div>
      </div>
    </section>
  );
}
