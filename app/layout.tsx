import type { Metadata } from "next";
import "./globals.css";
import { TRPCProvider } from "@/components/providers/TRPCProvider";

export const metadata: Metadata = {
  title: "Bontor Music - Khmer Streaming",
  description: "Experience the best of Khmer music with Hi-Res Audio, Karaoke, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="km" className="dark">
      <body className="bg-black text-slate-200 antialiased overflow-hidden h-screen flex flex-col md:flex-row selection:bg-brand-purple selection:text-white">
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
