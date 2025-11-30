"use client";

import { useState } from "react";

const categories = [
  "For You",
  "Remix",
  "Oldies (ស៊ិន ស៊ីសាមុត)",
  "Sad Songs",
  "Love (ស្នេហា)",
  "EDM Khmer",
  "Hip-Hop",
  "Traditional",
];

interface CategoryChipsProps {
  onSelect?: (category: string) => void;
}

export function CategoryChips({ onSelect }: CategoryChipsProps) {
  const [selected, setSelected] = useState("For You");

  const handleSelect = (category: string) => {
    setSelected(category);
    onSelect?.(category);
  };

  return (
    <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleSelect(category)}
          className={`whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm transition-colors ${
            selected === category
              ? "bg-white text-black font-semibold"
              : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
