import React, { useState } from "react";

const SAMPLE_REVIEWS = [
  {
    id: 1,
    author: "Priya Sharma",
    text: "Absolutely loved the vibe here!",
  },
  {
    id: 2,
    author: "Rohan Mehta",
    text: "Best chai and conversations.",
  },
  {
    id: 3,
    author: "Aanya Patel",
    text: "Felt like home instantly.",
  },
];

export default function CommunityLove() {
  const [reviews] = useState(SAMPLE_REVIEWS);

  return (
    <div className="min-h-screen bg-[#f5efe6] pt-32 pb-16">

      {/* HERO */}
      <div className="text-center px-4 mb-16">
        <p className="text-purple-900 text-2xl md:text-3xl font-semibold mb-2">
          From our hobo family ♡
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-[#2b0f3a] mb-4">
          Community Love 💛
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          Real moments, real people, real vibes.
        </p>
      </div>

      {/* BIG LOVE TEXT (CLEAN VERSION) */}
      <div className="text-center mb-16">
        <h2 className="text-[4rem] md:text-[8rem] font-extrabold text-[#2b0f3a] opacity-10">
          LOVE
        </h2>
      </div>

      {/* REVIEWS */}
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white p-6 rounded-xl shadow-md border"
          >
            <p className="text-gray-700 mb-3">"{r.text}"</p>
            <p className="font-semibold text-[#2b0f3a]">{r.author}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
