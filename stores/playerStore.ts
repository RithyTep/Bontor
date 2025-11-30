import { create } from "zustand";

interface CurrentSong {
  id: string;
  title: string;
  artistName: string;
  coverUrl: string;
  audioUrl: string;
}

interface PlayerState {
  currentSong: CurrentSong | null;
  isPlaying: boolean;
  karaokeMode: boolean;
  volume: number;
  queue: CurrentSong[];
  setCurrentSong: (song: CurrentSong) => void;
  setIsPlaying: (playing: boolean) => void;
  setKaraokeMode: (mode: boolean) => void;
  setVolume: (volume: number) => void;
  addToQueue: (song: CurrentSong) => void;
  clearQueue: () => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentSong: null,
  isPlaying: false,
  karaokeMode: false,
  volume: 0.8,
  queue: [],
  setCurrentSong: (song) => set({ currentSong: song }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  setKaraokeMode: (mode) => set({ karaokeMode: mode }),
  setVolume: (volume) => set({ volume }),
  addToQueue: (song) => set((state) => ({ queue: [...state.queue, song] })),
  clearQueue: () => set({ queue: [] }),
}));
