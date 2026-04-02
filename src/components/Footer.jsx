import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#2b0f3a] text-white pt-20 pb-10 relative">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            ☮ HOUSE OF <span className="text-orange-500">HOBOS</span>
          </h2>

          <p className="italic mb-3 text-white/90">
            "Come as you are, leave as family."
          </p>

          <p className="text-sm text-white/70 mb-4">
            A creative, community-driven café where art, music, good food,
            and great people come together in Ahmedabad.
          </p>

          {/* SOCIAL */}
          <a
            href="https://instagram.com/houseofhobos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition mt-2"
          >
            {/* Instagram Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
            >
              <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5c3.176 0 5.75-2.574 5.75-5.75v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm8.75 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>

            @houseofhobos
          </a>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-400">
            Explore ✦
          </h3>

          <div className="flex flex-col gap-2 text-white/80">
            <Link to="/home" className="hover:text-white transition">Home</Link>
            <Link to="/menu" className="hover:text-white transition">Menu</Link>
            <Link to="/events" className="hover:text-white transition">Events</Link>
            <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
            <Link to="/story" className="hover:text-white transition">Our Story</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-400">
            Find Us ✦
          </h3>

          <div className="flex flex-col gap-3 text-white/80 text-sm">

            <p>📍 Navrangpura, Ahmedabad</p>

            <a
              href="tel:+919313132195"
              className="hover:text-white transition"
            >
              📞 +91 93131 32195
            </a>

            <p>🕒 11:30 AM – 11:30 PM</p>

            <a
              href="https://maps.google.com/?q=Navrangpura,Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition"
            >
              📍 Get Directions
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 text-center text-white/50 text-sm">
        Made with ❤️ by House of Hobos · Ahmedabad
      </div>

    </footer>
  );
}