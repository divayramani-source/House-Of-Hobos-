export default function StatsSection() {
  return (
    <section className="bg-[#2a0f3f] py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

        {/* CARD */}
        <div className="bg-[#1c082b] rounded-2xl p-8 text-center border border-white/10 shadow-xl">
          <div className="text-2xl mb-2">❤️</div>
          <h3 className="text-4xl font-bold text-orange-500">2.5L+</h3>
          <p className="text-white/70 mt-2 text-sm">HAPPY HOBOS</p>
        </div>

        <div className="bg-[#1c082b] rounded-2xl p-8 text-center border border-white/10 shadow-xl">
          <div className="text-2xl mb-2">☮</div>
          <h3 className="text-4xl font-bold text-orange-500">10+</h3>
          <p className="text-white/70 mt-2 text-sm">YEARS OF VIBES</p>
        </div>

        <div className="bg-[#1c082b] rounded-2xl p-8 text-center border border-white/10 shadow-xl">
          <div className="text-2xl mb-2">🎸</div>
          <h3 className="text-4xl font-bold text-orange-500">100+</h3>
          <p className="text-white/70 mt-2 text-sm">EVENTS HOSTED</p>
        </div>

        <div className="bg-[#1c082b] rounded-2xl p-8 text-center border border-white/10 shadow-xl">
          <div className="text-2xl mb-2">⭐</div>
          <h3 className="text-4xl font-bold text-orange-500">4.9★</h3>
          <p className="text-white/70 mt-2 text-sm">AVERAGE RATING</p>
        </div>

      </div>
    </section>
  );
}