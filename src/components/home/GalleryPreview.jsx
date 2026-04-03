import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "https://media.base44.com/images/public/user_699e9901b8286d49d6803418/8961aef06_hobos3.jpg",
    rotation: "rotate-slight-left",
  },
  {
    src: "https://media.base44.com/images/public/user_699e9901b8286d49d6803418/087cf703a_hobos7.jpg",
    rotation: "rotate-slight-right",
  },
  {
    src: "https://media.base44.com/images/public/user_699e9901b8286d49d6803418/a0e87a725_hobos4.jpg",
    rotation: "rotate-medium-left",
  },
  {
    src: "https://media.base44.com/images/public/user_699e9901b8286d49d6803418/b557b7ac3_hobos2.jpg",
    rotation: "rotate-slight-right",
  },
];

export default function GalleryPreview() {
  return (
    <section
      className="py-20 md:py-28 px-4"
      style={{ background: "hsl(285 75% 58% / 0.08)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <span className="font-handwritten text-primary text-3xl md:text-4xl block mb-3 rotate-slight-right inline-block">
            peek inside 📷
          </span>

          <h2 className="font-heading text-5xl md:text-7xl text-foreground">
            Our Space ✦
          </h2>
        </div>

        {/* POLAROID GRID (NO TEXT NOW) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -8 : 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.07, rotate: 0, zIndex: 10 }}
              className={`polaroid ${img.rotation} hover:rotate-0 transition-transform duration-300`}
            >
              <img
                src={img.src}
                alt="gallery"
                className="w-full aspect-square object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 funky-btn bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-body font-semibold text-lg border-2 border-foreground shadow-[4px_4px_0_hsl(270_60%_15%)] group"
          >
            📸 See Full Gallery
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
