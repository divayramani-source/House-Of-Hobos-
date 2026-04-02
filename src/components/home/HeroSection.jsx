import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(168,85,247,0.7), rgba(249,115,22,0.6), rgba(42,15,63,0.9)), url('https://media.base44.com/images/public/user_699e9901b8286d49d6803418/29163b745_hobos6.jpg')",
      }}
    >

      {/* ✅ CONTENT ONLY */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        {/* Welcome */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-yellow-300 text-3xl md:text-5xl mb-3 font-bold"
          style={{ transform: 'rotate(-3deg)' }}
        >
          Welcome to
        </motion.p>

        {/* HOUSE OF */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl lg:text-[8rem] text-white leading-none font-extrabold text-outline"
        >
          HOUSE OF
        </motion.h1>

        {/* HOBOS */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl lg:text-[8rem] leading-none mb-6 font-extrabold text-outline"
          style={{ color: '#FFD84D' }}
        >
          HOBOS ☮
        </motion.h1>

        {/* TAGLINE */}
        <p className="text-white/90 text-base md:text-xl mb-10 font-semibold">
          Art • Music • Food • Community • Good Vibes Only ✦
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/menu"
            className="funky-btn bg-orange-500 text-white px-8 py-3 rounded-full"
          >
            🍕 Explore Menu
          </Link>

          <Link
            to="/story"
            className="funky-btn bg-yellow-300 text-black px-8 py-3 rounded-full"
          >
            ✨ Our Story
          </Link>

          <Link
            to="/gallery"
            className="funky-btn bg-purple-500 text-white px-8 py-3 rounded-full"
          >
            📸 See Gallery
          </Link>
        </div>

      </div>

      {/* SCROLL ICON */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-yellow-300"
      >
        <ArrowDown size={30} />
      </motion.div>

    </section>
  );
}