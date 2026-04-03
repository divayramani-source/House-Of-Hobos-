import React from "react";

const SAMPLE_REVIEWS = [
  {
    id: 1,
    name: "Priya Sharma",
    handle: "@priya.explores",
    text: "Absolutely loved the vibe here! The book nook is my new favorite corner in Ahmedabad.",
  },
  {
    id: 2,
    name: "Rohan Mehta",
    handle: "@rohanm",
    text: "Best chai and conversations. The Hobo Bazaar has the most unique handmade stuff.",
  },
  {
    id: 3,
    name: "Aanya Patel",
    handle: "@aanyap",
    text: "The murals, lights and music — everything feels like home instantly.",
  },
];

export default function CommunityLove() {
  return (
    <div className="pt-32 pb-16 bg-[#f5efe6] min-h-screen">

      {/* HERO */}
      <div className="text-center px-4 mb-20 relative">

        {/* BIG BACKGROUND LOVE (FIXED) */}
        <h1 className="absolute inset-0 flex items-center justify-center text-[6rem] md:text-[10rem] font-extrabold text-[#2b0f3a]/10 pointer-events-none select-none">
          LOVE
        </h1>

        {/* CONTENT */}
        <div className="relative z-10">
          <p className="text-purple-900 text-2xl md:text-3xl font-semibold mb-2">
            From our hobo family ♡
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold text-[#2b0f3a] mb-4">
            Community Love 💛
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Real moments, real people, real vibes. Share your experience!
          </p>

          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg">
            ❤️ Share Your Experience
          </button>
        </div>
      </div>

      {/* REVIEWS GRID (OLD STYLE BACK) */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        {SAMPLE_REVIEWS.map((r) => (
          <div
            key={r.id}
            className="bg-white p-6 rounded-2xl border-2 border-[#2b0f3a] shadow-[6px_6px_0_#2b0f3a]"
          >
            {/* STARS */}
            <div className="text-yellow-400 mb-3">★★★★★</div>

            {/* TEXT */}
            <p className="text-gray-700 mb-4 leading-relaxed">
              "{r.text}"
            </p>

            {/* NAME */}
            <p className="font-bold text-[#2b0f3a]">
              {r.name}
            </p>

            {/* HANDLE */}
            <p className="text-sm text-gray-500">
              {r.handle}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}
