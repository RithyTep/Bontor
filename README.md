# 🎵 Bontor Music - Khmer Streaming App

A modern Khmer music streaming application built with Next.js 16, tRPC, Prisma, and PostgreSQL.

## Features

- 🎧 High-quality audio streaming (64/128/320 kbps)
- 🎤 Karaoke mode with lyrics display
- 📱 Responsive design (mobile & desktop)
- 💳 KHQR payment integration (ABA, Wing, Bakong)
- 👤 User authentication (Google, Email)
- 📚 Playlist management
- ⬇️ Offline downloads (VIP)
- 🔍 Search songs, artists, and lyrics

## Tech Stack

- **Frontend**: Next.js 16 (App Router + Server Components)
- **Backend**: tRPC (type-safe API)
- **ORM**: Prisma
- **Database**: PostgreSQL
- **State**: Zustand + React Query
- **Styling**: Tailwind CSS
- **Auth**: NextAuth.js v5

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/bontor.git
cd bontor

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL and other secrets

# Push database schema
pnpm db:push

# Seed the database
pnpm db:seed

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
/bontor
├── app/                  # Next.js App Router pages
├── components/           # React components
├── lib/                  # Utility functions & configs
├── server/               # tRPC routers
├── stores/               # Zustand stores
├── prisma/               # Database schema & seeds
└── styles/               # Global styles
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm db:push` - Push schema changes
- `pnpm db:migrate` - Run migrations
- `pnpm db:seed` - Seed database
- `pnpm db:studio` - Open Prisma Studio

## License

MIT
