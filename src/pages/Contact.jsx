import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Navigation } from 'lucide-react';

const infoCards = [
  { icon: MapPin,  emoji: '📍', title: 'Address', bg: 'bg-primary',     fg: 'text-primary-foreground',     lines: ['1, Nilima Flats, Nilima Park Society', 'Vijay Cross Road, Navrangpura', 'Ahmedabad, Gujarat'] },
  { icon: Clock,   emoji: '⏰', title: 'Hours',   bg: 'bg-accent',      fg: 'text-accent-foreground',      lines: ['Monday – Sunday', '11:30 AM – 11:30 PM', 'Open every day! 🎉'] },
  { icon: Phone,   emoji: '📞', title: 'Phone',   bg: 'bg-secondary',   fg: 'text-secondary-foreground',   lines: ['+91 93131 32195', 'Call or WhatsApp us!'], link: 'tel:+919313132195' },
];

export default function Contact() {
  return (
    <div className="pt-20 md:pt-24 pb-16 groovy-bg">

      {/* Header */}
      <div className="text-center px-4 py-12 md:py-16">
        <span className="font-handwritten text-primary text-3xl md:text-4xl block mb-3 rotate-slight-right inline-block">
          we'd love to hear from you ♡
        </span>
        <h1 className="font-heading text-6xl md:text-8xl text-foreground mb-4">
          Find Us ☮
        </h1>
        <p className="font-body text-muted-foreground max-w-lg mx-auto font-medium">
          Whether you want to visit, host an event, or just say hi — we're here for you.
        </p>
      </div>

      {/* Info Cards */}
      <div className="max-w-5xl mx-auto px-4 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -4 : 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: 'spring' }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              className="retro-card p-6 md:p-8 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${card.bg} border-2 border-foreground flex items-center justify-center text-3xl shadow-[4px_4px_0_hsl(270_60%_15%)]`}>
                {card.emoji}
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-3">{card.title}</h3>
              <div className="space-y-1">
                {card.lines.map((line, j) => (
                  <p key={j} className="font-body text-sm text-muted-foreground font-medium">{line}</p>
                ))}
              </div>
              {card.link && (
                <a href={card.link} className="inline-block mt-3 font-body text-sm text-primary font-bold hover:underline">
                  Tap to call →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="max-w-5xl mx-auto px-4 mb-14">
        <div className="rounded-2xl overflow-hidden border-4 border-foreground shadow-[8px_8px_0_hsl(270_60%_15%)]">
          <iframe
            title="House of Hobos Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9022!2d72.5483804!3d23.0418992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzMwLjgiTiA3MsKwMzInNTQuMiJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-3xl mx-auto px-4 mb-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=23.0418992000,72.5483804000"
            target="_blank"
            rel="noopener noreferrer"
            className="funky-btn flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body font-bold text-base border-2 border-foreground shadow-[4px_4px_0_hsl(270_60%_15%)]"
          >
            <Navigation className="w-5 h-5" />
            📍 Get Directions
          </a>
          <a
            href="https://www.instagram.com/house_of_hobos/"
            target="_blank"
            rel="noopener noreferrer"
            className="funky-btn flex items-center gap-2 bg-destructive text-destructive-foreground px-8 py-3.5 rounded-full font-body font-bold text-base border-2 border-foreground shadow-[4px_4px_0_hsl(270_60%_15%)]"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
          <a
            href="https://www.zomato.com/ahmedabad/house-of-hobos-navrangpura"
            target="_blank"
            rel="noopener noreferrer"
            className="funky-btn flex items-center gap-2 bg-[hsl(48_95%_55%)] text-foreground px-8 py-3.5 rounded-full font-body font-bold text-base border-2 border-foreground shadow-[4px_4px_0_hsl(270_60%_15%)]"
          >
            🍽️ View on Zomato
          </a>
        </div>
      </div>

      {/* Fun CTA */}
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true }}
          className="retro-card p-8 md:p-10 bg-yellow-100 border-4 border-secondary shadow-[8px_8px_0_hsl(270_60%_15%)]"
        >
          <p className="font-handwritten text-3xl md:text-4xl text-secondary mb-4">
            Come as you are ☮
          </p>
          <p className="font-body text-muted-foreground font-medium">
            No reservations needed. Just walk in, grab a seat, and make yourself at home.
            We've got a book, a coffee, and a conversation waiting for you.
          </p>
        </motion.div>
      </div>
    </div>
  );
}