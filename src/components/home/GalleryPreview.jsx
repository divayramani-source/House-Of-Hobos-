export default function GalleryPreview() {
  const images = [
    "https://media.base44.com/images/public/user_699e9901b8286d49d6803418/29163b745_hobos6.jpg",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  ];

  return (
    <section className="bg-gradient-to-b from-[#f5efe6] to-[#efe6d9] py-24 px-4">

      {/* TITLE */}
      <div className="text-center mb-16">
        <p className="text-orange-500 font-semibold tracking-wide">
          PEEK INSIDE 📸
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#2a0f3f] mt-2">
          Our Space ✨
        </h2>
      </div>

      {/* POLAROID STYLE */}
      <div className="flex flex-wrap justify-center items-center gap-10 max-w-6xl mx-auto">

        {images.map((src, i) => (
          <div
            key={i}
            className="bg-white p-3 pb-6 shadow-xl rotate-[-2deg] hover:rotate-0 transition duration-300"
            style={{
              transform: `rotate(${i % 2 === 0 ? "-6deg" : "6deg"})`,
            }}
          >
            <img
              src={src}
              alt="gallery"
              className="w-60 h-60 object-cover rounded-md"
            />

            <p className="text-center mt-3 text-sm text-[#2a0f3f] font-medium">
              {i === 0 && "Outdoor Garden 🌿"}
              {i === 1 && "Book Nook 📚"}
              {i === 2 && "Mural Art 🎨"}
              {i === 3 && "Indoor Vibes ☕"}
            </p>
          </div>
        ))}

      </div>

      {/* BUTTON */}
      <div className="text-center mt-16">
        <button className="bg-purple-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
          📸 See Full Gallery →
        </button>
      </div>

    </section>
  );
}