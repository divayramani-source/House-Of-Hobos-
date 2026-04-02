import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const photos = [
  { src: 'https://media.base44.com/images/public/user_699e9901b8286d49d6803418/29163b745_hobos6.jpg', caption: 'Evening vibes under fairy lights ✨', span: 'md:col-span-2 md:row-span-2', border: 'border-primary' },
  { src: 'https://media.base44.com/images/public/user_699e9901b8286d49d6803418/a0e87a725_hobos4.jpg', caption: '"On The Road" — our iconic mural 🎨', span: '', border: 'border-secondary' },
  { src: 'https://media.base44.com/images/public/user_699e9901b8286d49d6803418/087cf703a_hobos7.jpg', caption: 'Our cozy book nook 📚', span: '', border: 'border-accent' },
  { src: 'https://media.base44.com/images/public/user_699e9901b8286d49d6803418/b557b7ac3_hobos2.jpg', caption: 'Colorful indoor seating 🌈', span: 'md:col-span-2', border: 'border-destructive' },
  { src: 'https://media.base44.com/images/public/user_699e9901b8286d49d6803418/aabdfd69b_hobos5.jpg', caption: 'Hobo Bazaar — handmade crafts & art 🛍️', span: '', border: 'border-primary' },
  { src: 'https://media.base44.com/images/public/user_699e9901b8286d49d6803418/8961aef06_hobos3.jpg', caption: 'Outdoor garden pathway 🌿', span: '', border: 'border-secondary' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/ed3474a73_IMG_1743.jpg', caption: 'Welcome to the House ☮', span: '', border: 'border-accent' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/270b45a70_IMG_1745.jpg', caption: 'On the Road mural & garden 🌿', span: '', border: 'border-primary' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/d552901c6_IMG_1746.jpg', caption: 'The iconic mural up close 🎸', span: 'md:col-span-2', border: 'border-destructive' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/1ec75045a_IMG_1749.jpg', caption: 'Colourful canopy garden 🎨', span: '', border: 'border-secondary' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/9dc33cb2c_IMG_1751.jpg', caption: 'The blue door awaits 💙', span: '', border: 'border-accent' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/809d5f1f9_IMG_1752.jpg', caption: 'Hobo Bazaar shelves 🛍️', span: '', border: 'border-primary' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/e4256c843_IMG_1755.jpg', caption: 'Funky lights & vibes inside 💡', span: 'md:col-span-2', border: 'border-secondary' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/f480851e3_IMG_1758.jpg', caption: 'Dream catcher wall art 🌀', span: '', border: 'border-destructive' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/ac944a8a0_IMG_1760.jpg', caption: 'Retro Marlboro wall art 🎨', span: '', border: 'border-accent' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/d66f3dc4b_IMG_1761.jpg', caption: 'Visit Again — the back door 🚪', span: '', border: 'border-primary' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/84e648303_IMG_1766.jpg', caption: 'Bollywood ceiling 🎬', span: 'md:col-span-2', border: 'border-secondary' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/a0a990600_IMG_1767.jpg', caption: 'Hobo Baba blesses us 🧙', span: '', border: 'border-destructive' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/e1eb3c628_IMG_1769.jpg', caption: 'Community postcard board 📮', span: '', border: 'border-accent' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/68588f7b6_IMG_1781.jpg', caption: 'Vinyl soul on the wall 🎵', span: '', border: 'border-primary' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/b4b8fef97_PXL_20260323_091210451jpg.jpg', caption: 'Hand-painted Marlboro 🖌️', span: 'md:col-span-2', border: 'border-secondary' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/62ad99448_PXL_20260323_091229592jpg.jpg', caption: 'The EXIT corridor 🚪', span: '', border: 'border-destructive' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/967d8eaa4_PXL_20260323_091253782jpg.jpg', caption: 'Main seating hall 🌈', span: '', border: 'border-accent' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/bc824f9f8_PXL_20260323_091336750jpg.jpg', caption: 'Elm Street vibes 🛣️', span: 'md:col-span-2', border: 'border-primary' },
  { src: 'https://media.base44.com/images/public/69bafadfbfae2749f58157da/458d16e39_PXL_20260323_091536666jpg.jpg', caption: 'Bazaar — handmade with love ✨', span: '', border: 'border-secondary' },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="pt-20 md:pt-24 pb-16 groovy-bg">

      {/* Header */}
      <div className="text-center px-4 py-12 md:py-16">
        <span className="font-handwritten text-secondary text-3xl md:text-4xl block mb-3 rotate-slight-right inline-block">
          snapshots from the house 📷
        </span>
        <h1 className="font-heading text-6xl md:text-8xl text-foreground mb-4">
          Gallery ✦
        </h1>
        <p className="font-body text-muted-foreground max-w-lg mx-auto font-medium">
          Every corner of House of Hobos tells a story. Here's a little peek into our world.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -4 : 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, type: 'spring' }}
              whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? 2 : -2 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer border-4 ${photo.border} shadow-[5px_5px_0_hsl(270_60%_15%)] ${photo.span}`}
              onClick={() => setSelected(photo)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover aspect-square md:aspect-auto md:min-h-[240px] group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="font-handwritten text-xl text-yellow-300 drop-shadow-lg">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'hsl(285 75% 58% / 0.9)', backdropFilter: 'blur(8px)' }}
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 bg-primary text-primary-foreground rounded-full p-2 border-2 border-foreground shadow-[3px_3px_0_hsl(270_60%_15%)]"
            >
              <X className="w-7 h-7" />
            </button>
            <motion.div
              initial={{ scale: 0.7, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.7, rotate: 5 }}
              transition={{ type: 'spring', bounce: 0.3 }}
              className="max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="polaroid mx-auto">
                <img src={selected.src} alt={selected.caption} className="w-full rounded-sm" />
                <p className="font-handwritten text-center text-xl text-foreground mt-3">{selected.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}