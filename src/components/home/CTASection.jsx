export default function CTASection() {
  return (
    <section className="relative py-28 px-4 text-center overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-purple-600/80"></div>
      </div>

      {/* CONTENT */}
      <p className="text-yellow-300 font-semibold text-lg mb-3">
        COME HANG WITH US ☮
      </p>

      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Your Table is Waiting!
      </h2>

      <div className="flex flex-wrap justify-center gap-6 text-white/90 mb-8">
        <span>⏰ 11:30 AM – 11:30 PM</span>
        <span>📍 Navrangpura, Ahmedabad</span>
        <span>📞 +91 93131 32195</span>
      </div>

      <button className="bg-yellow-300 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
        📍 Get Directions
      </button>

    </section>
  );
}