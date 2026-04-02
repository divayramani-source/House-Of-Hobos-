import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, Coffee } from 'lucide-react';

const values = [
  { icon: Heart,    title: 'Community First',    desc: 'We believe a café should be a living room for the community — a place where strangers become friends.', bg: 'bg-destructive', fg: 'text-destructive-foreground' },
  { icon: Sparkles, title: 'Creativity Everywhere', desc: 'From our walls to our menu, everything is a canvas. We celebrate art, music, and the handmade spirit.', bg: 'bg-secondary', fg: 'text-secondary-foreground' },
  { icon: Users,    title: "Everyone's Welcome",  desc: 'Hobos, artists, students, families, pets — if you have good vibes, you belong here.', bg: 'bg-accent', fg: 'text-accent-foreground' },
  { icon: Coffee,   title: 'Soul Food',           desc: 'Simple, honest, vegetarian food made with love. No pretension, just pure comfort.', bg: 'bg-primary', fg: 'text-primary-foreground' },
];

const timeline = [
  { year: '🌱 The Dream',  text: 'What started as a dream of creating a space that felt like home — for everyone.' },
  { year: '🔨 The Build',  text: 'Every corner was designed with found objects, handmade art, and a whole lot of love.' },
  { year: '🎊 The Opening', text: 'Doors opened at Navrangpura, Ahmedabad. The community showed up — and never left.' },
  { year: '🚀 Today',       text: 'A thriving community hub with a book nook, art bazaar, live music nights, and the best vibes in town.' },
];

export default function Story() {
  return (
    <div className="pt-20 md:pt-24 pb-16 groovy-bg">

      {/* Hero */}
      <div className="text-center px-4 py-12 md:py-16">
        <span className="font-handwritten text-secondary text-3xl md:text-4xl block mb-3 rotate-slight-left inline-block">
          the story behind the house ✨
        </span>
        <h1 className="font-heading text-6xl md:text-8xl text-foreground">
          Our Story ☮
        </h1>
      </div>

      {/* Owner Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20 md:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="relative mx-auto max-w-sm md:max-w-md"
          >
            <div className="polaroid border-4 border-secondary shadow-[8px_8px_0_hsl(270_60%_15%)]">
              <img
                src="https://media.base44.com/images/public/user_699e9901b8286d49d6803418/bcc6d7cc1_hobos1.jpg"
                alt="Owner of House of Hobos"
                className="w-full rounded-sm"
              />
              <p className="font-handwritten text-center text-xl text-foreground mt-3">
                meet our founder ✦
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Meet <span className="text-primary">Yash Shah</span> 💛
            </h2>
            <p className="font-handwritten text-2xl text-secondary mb-4">Founder, House of Hobos</p>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-base font-medium">
              <p>
                House of Hobos wasn't born in a boardroom — it was born from a <em>feeling</em>.
                Yash Shah dreamed of a place where you could just <strong>be</strong>. No pretension,
                no dress code, no judgment. Just warmth, good food, and great conversations.
              </p>
              <p>
                He built a space that feels like home for everyone — artists,
                dreamers, students, families, and wanderers. A place where creativity is
                celebrated, community is everything, and every corner tells a story.
              </p>
              <div className="retro-card p-4 bg-yellow-100">
                <p className="font-handwritten text-2xl text-primary">
                  "We didn't build a café.<br />We built a feeling." ☮
                </p>
                <p className="font-body text-sm text-muted-foreground mt-2 font-semibold">— Yash Shah</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 mb-20 md:mb-28">
        <h2 className="font-heading text-4xl md:text-5xl text-foreground text-center mb-12">
          The Journey 🛤️
        </h2>
        <div className="space-y-6">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, type: 'spring' }}
              className={`retro-card p-6 flex items-start gap-4 ${
                i % 2 === 0 ? 'bg-card' : 'bg-yellow-50'
              }`}
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary border-2 border-foreground flex items-center justify-center font-heading text-primary-foreground text-sm shadow-[2px_2px_0_hsl(270_60%_15%)]">
                {i + 1}
              </div>
              <div>
                <span className="font-heading text-xl text-primary block mb-1">{item.year}</span>
                <p className="font-body text-foreground font-medium">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 px-4" style={{ background: 'hsl(285 75% 58% / 0.06)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-handwritten text-primary text-3xl block mb-2 rotate-slight-right inline-block">
              what we stand for ✦
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                whileHover={{ rotate: i % 2 === 0 ? 2 : -2, scale: 1.02 }}
                transition={{ delay: i * 0.1 }}
                className="retro-card p-6 md:p-8"
              >
                <div className={`w-14 h-14 rounded-2xl ${val.bg} border-2 border-foreground flex items-center justify-center mb-4 shadow-[3px_3px_0_hsl(270_60%_15%)]`}>
                  <val.icon className={`w-7 h-7 ${val.fg}`} />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-2">{val.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed font-medium">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Features */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-handwritten text-secondary text-3xl block mb-2 rotate-slight-left inline-block">
              more than food 🌈
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">Inside the House</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: 'https://media.base44.com/images/public/user_699e9901b8286d49d6803418/087cf703a_hobos7.jpg', title: '📚 The Book Nook', desc: 'A quiet corner filled with books for every mood. Pick one up, leave one behind.', borderColor: 'border-secondary' },
              { img: 'https://media.base44.com/images/public/user_699e9901b8286d49d6803418/aabdfd69b_hobos5.jpg', title: '🛍️ Hobo Bazaar', desc: 'Handmade jewelry, art, notebooks & gifts — all crafted by local artists.', borderColor: 'border-primary' },
              { img: 'https://media.base44.com/images/public/user_699e9901b8286d49d6803418/8961aef06_hobos3.jpg', title: '🌿 The Garden', desc: 'Colorful bunting, fairy lights, plants & open sky — our outdoor paradise.', borderColor: 'border-accent' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ scale: 1.04 }}
                className="retro-card overflow-hidden"
              >
                <div className={`overflow-hidden border-b-4 ${feature.borderColor}`}>
                  <img src={feature.img} alt={feature.title} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl text-foreground mb-1">{feature.title}</h3>
                  <p className="font-body text-sm text-muted-foreground font-medium">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}