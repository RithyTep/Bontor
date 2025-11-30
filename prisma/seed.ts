import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create artists
  const vannda = await prisma.artist.upsert({
    where: { id: "artist-vannda" },
    update: {},
    create: {
      id: "artist-vannda",
      name: "VannDa",
      bio: "Cambodian hip-hop artist blending traditional Khmer sounds with modern beats",
      photoUrl: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=400",
      followers: 500000,
    },
  });

  const sisamouth = await prisma.artist.upsert({
    where: { id: "artist-sisamouth" },
    update: {},
    create: {
      id: "artist-sisamouth",
      name: "Sinn Sisamouth",
      bio: "The King of Khmer Music - legendary singer from the golden era",
      photoUrl: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=400",
      followers: 1000000,
    },
  });

  // Create songs
  await prisma.song.upsert({
    where: { id: "song-time-to-rise" },
    update: {},
    create: {
      id: "song-time-to-rise",
      title: "Time to Rise",
      artistId: vannda.id,
      duration: 245,
      audio64: "/audio/time-to-rise-64.mp3",
      audio128: "/audio/time-to-rise-128.mp3",
      audio320: "/audio/time-to-rise-320.mp3",
      coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400",
      tags: ["hip-hop", "khmer", "modern"],
      plays: 1500000,
    },
  });

  await prisma.song.upsert({
    where: { id: "song-violon-sne" },
    update: {},
    create: {
      id: "song-violon-sne",
      title: "Violon Sne",
      artistId: sisamouth.id,
      duration: 225,
      audio64: "/audio/violon-sne-64.mp3",
      audio128: "/audio/violon-sne-128.mp3",
      audio320: "/audio/violon-sne-320.mp3",
      coverUrl: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=400",
      lyrics: "Bong kirt tha yeung...\nSneak knong jit...",
      tags: ["oldies", "classic", "romantic"],
      plays: 2500000,
    },
  });

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
