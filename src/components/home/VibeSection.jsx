export default function VibeSection() {
  const features = [
    {
      icon: "📚",
      title: "Book Nook",
      desc: "Curl up with a book from our shelf",
    },
    {
      icon: "🎵",
      title: "Live Music",
      desc: "Acoustic nights & open mics",
    },
    {
      icon: "🎨",
      title: "Art Space",
      desc: "Handmade crafts & creativity",
    },
    {
      icon: "🤝",
      title: "Community",
      desc: "Events, workshops & hangouts",
    },
    {
      icon: "🐾",
      title: "Pet Friendly",
      desc: "Bring your furry friends along",
    },
    {
      icon: "🥗",
      title: "Pure Veg",
      desc: "100% vegetarian goodness",
    },
  ];

  return (
    <section className="relative bg-[#f5efe6] py-24 px-4 overflow-hidden">

      {/* HUGE BACKGROUND TEXT */}
      <h1 className="absolute text-[120px] md:text-[200px] font-black text-[#2a0f3f] opacity-10 top-10 left-1/2 -translate-x-1/2 select-none">
        HOBOS
      </h1>

      {/* TITLE */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2a0f3f]">
          More than just a café ✨
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">

        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 text-center border-4 border-[#2a0f3f] shadow-[6px_6px_0px_#2a0f3f] hover:scale-105 transition"
          >
            <div className="text-3xl mb-4">{item.icon}</div>

            <h3 className="text-xl font-bold text-[#2a0f3f]">
              {item.title}
            </h3>

            <p className="text-[#2a0f3f]/70 mt-2 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}