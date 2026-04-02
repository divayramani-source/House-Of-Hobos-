export default function CommunityPreview() {
  return (
    <section className="bg-[#f5efe6] py-28 px-4">

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="text-pink-500 font-semibold tracking-wide">
            FROM OUR HOBO FAMILY 💗
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2a0f3f] mt-2">
            Community Love 💛
          </h2>

          <p className="text-[#2a0f3f]/70 mt-4">
            Real moments, real people, real vibes. Share your Hobo experience with the world!
          </p>
        </div>

        {/* REVIEWS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="retro-card p-6">
            <div className="text-yellow-400 mb-2 text-lg">★★★★★</div>
            <p className="text-[#2a0f3f] font-medium">
              "Very gorgeous and homely great food and vibes."
            </p>
            <p className="mt-4 text-sm font-bold text-[#2a0f3f]">
              PRIYA SHARMA
            </p>
          </div>

          <div className="retro-card p-6">
            <div className="text-yellow-400 mb-2 text-lg">★★★★★</div>
            <p className="text-[#2a0f3f] font-medium">
              "Amazing ambience, feels like home. Perfect hangout spot!"
            </p>
            <p className="mt-4 text-sm font-bold text-[#2a0f3f]">
              RAHUL MEHTA
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="funky-btn bg-orange-500 text-white px-8 py-4 rounded-full text-lg">
            ❤️ Share Your Experience
          </button>
        </div>

      </div>

    </section>
  );
}