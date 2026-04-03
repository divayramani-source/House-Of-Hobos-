export default function GalleryPreview() {
  const images = [
    "https://media.base44.com/images/public/user_699e9901b8286d49d6803418/29163b745_hobos6.jpg",
  { src: 'https://media.base44.com/images/public/user_699e9901b8286d49d6803418/8961aef06_hobos3.jpg', caption: 'outdoor garden', rotation: 'rotate-slight-left', border: 'border-primary' },
  { src: 'https://media.base44.com/images/public/user_699e9901b8286d49d6803418/a0e87a725_hobos4.jpg', caption: 'mural art', rotation: 'rotate-medium-left', border: 'border-destructive' },
  { src: 'https://media.base44.com/images/public/user_699e9901b8286d49d6803418/b557b7ac3_hobos2.jpg', caption: 'indoor seating', rotation: 'rotate-slight-right', border: 'border-accent' },
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

      {/* POLAROID IMAGES ONLY */}
      <div className="flex flex-wrap justify-center items-center gap-10 max-w-6xl mx-auto">

        {images.map((src, i) => (
          <div
            key={i}
            className="bg-white p-3 shadow-xl transition duration-300 hover:scale-105"
            style={{
              transform: `rotate(${i % 2 === 0 ? "-6deg" : "6deg"})`,
            }}
          >
            <img
              src={src}
              alt="gallery"
              className="w-60 h-60 object-cover rounded-md"
            />
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
