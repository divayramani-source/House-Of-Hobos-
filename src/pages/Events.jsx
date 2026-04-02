import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Music, Star, CheckCircle } from 'lucide-react';

const upcomingEvents = [
{
  id: 1,
  title: 'Band Party Jam Session 🎸',
  date: 'March 21, 2026',
  time: '9:00 PM onwards',
  tag: '🔥 TONIGHT',
  tagBg: 'bg-primary text-primary-foreground',
  description:
  'Get ready to feel the rhythm! House of Hobos is hosting an epic live Band Party Jam Session. Local bands take the stage for a night of raw, soulful music, improvised jams, and pure vibes. Bring your crew, grab a drink, and let the music move you!',
  highlights: ['Live band performances', 'Open jam sessions', 'Dance floor open', 'Special menu for the night'],
  emoji: '🎸',
  bg: 'bg-primary',
  fg: 'text-primary-foreground',
  borderColor: 'border-primary',
  vibe: 'Music • Energy • Freedom'
}];


const pastEvents = [
{
  id: 101,
  title: 'Holi Party 🎨',
  date: 'March 4, 2026',
  time: '11:00 AM – 4:00 PM',
  tag: '✅ Past Event',
  tagBg: 'bg-muted text-muted-foreground',
  description:
  'House of Hobos turned into a riot of colors for Holi! The outdoor garden was soaked in gulal, music, laughter, and pure joy. We had colour stations, Bollywood beats, and special holi drinks — an unforgettable afternoon with our amazing community.',
  highlights: ['Colour station & gulal play', 'Bollywood & folk music', 'Special holi drinks & food', 'Community bonding & fun'],
  emoji: '🌈',
  bg: 'bg-secondary',
  fg: 'text-secondary-foreground',
  borderColor: 'border-secondary',
  vibe: 'Colours • Joy • Community'
}];


function EventCard({ event, isPast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: 'spring' }}
      whileHover={{ scale: 1.02 }}
      className={`retro-card overflow-hidden ${isPast ? 'opacity-90' : ''}`}>
      
      {/* Top color bar */}
      <div className={`h-3 w-full ${event.bg}`} />

      <div className="p-6 md:p-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="text-5xl">{event.emoji}</span>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-foreground leading-tight">
                {event.title}
              </h3>
              <p className="font-handwritten text-lg text-muted-foreground">{event.vibe}</p>
            </div>
          </div>
          

          
        </div>

        {/* Date / Time / Location */}
        <div className="flex flex-wrap gap-4 mb-5">
          <div className="flex items-center gap-2 retro-card px-4 py-2 bg-card border-2 border-border shadow-[2px_2px_0_hsl(270_60%_15%)]">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-body text-sm font-semibold text-foreground">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 retro-card px-4 py-2 bg-card border-2 border-border shadow-[2px_2px_0_hsl(270_60%_15%)]">
            <Clock className="w-4 h-4 text-secondary" />
            <span className="font-body text-sm font-semibold text-foreground">{event.time}</span>
          </div>
          <div className="flex items-center gap-2 retro-card px-4 py-2 bg-card border-2 border-border shadow-[2px_2px_0_hsl(270_60%_15%)]">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="font-body text-sm font-semibold text-foreground">House of Hobos, Navrangpura</span>
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-muted-foreground font-medium leading-relaxed mb-5">
          {event.description}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-2">
          {event.highlights.map((h, i) =>
          <div key={i} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              <span className="font-body text-sm font-semibold text-foreground">{h}</span>
            </div>
          )}
        </div>

        {/* CTA for upcoming */}
        {!isPast &&
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
            href="tel:+919313132195"
            className="funky-btn flex-1 text-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-body font-bold text-base border-2 border-foreground shadow-[4px_4px_0_hsl(270_60%_15%)]">
            
              📞 Reserve Your Spot
            </a>
            <a
            href="https://www.google.com/maps/dir/?api=1&destination=23.0418992000,72.5483804000"
            target="_blank"
            rel="noopener noreferrer"
            className="funky-btn flex-1 text-center bg-yellow-300 text-foreground px-6 py-3 rounded-full font-body font-bold text-base border-2 border-foreground shadow-[4px_4px_0_hsl(270_60%_15%)]">
            
              📍 Get Directions
            </a>
          </div>
        }
      </div>
    </motion.div>);

}

export default function Events() {
  return (
    <div className="pt-20 md:pt-24 pb-16 groovy-bg">

      {/* Hero Header */}
      <div className="text-center px-4 py-12 md:py-16 relative overflow-hidden">
        {/* Background decorative text */}
        <div className="absolute inset-0 flex items-center justify-center font-heading text-[10rem] md:text-[16rem] text-foreground/3 select-none pointer-events-none leading-none">
          EVENTS
        </div>
        <div className="relative z-10">
          <span className="font-handwritten text-secondary text-3xl md:text-4xl block mb-3 rotate-slight-left inline-block">
            what's happening ✦
          </span>
          
          

          
        </div>
      </div>

      {/* ── UPCOMING EVENTS ── */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 flex-1 bg-primary rounded-full" />
          <span className="font-heading text-3xl md:text-4xl text-foreground whitespace-nowrap">
            🎸 Upcoming Events
          </span>
          <div className="h-1 flex-1 bg-primary rounded-full" />
        </div>

        <div className="space-y-8">
          {upcomingEvents.map((event) =>
          <EventCard key={event.id} event={event} isPast={false} />
          )}
        </div>
      </section>

      {/* ── STAY TUNED BANNER ── */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="retro-card p-8 text-center"
          style={{ background: 'linear-gradient(135deg, hsl(285 75% 58% / 0.12), hsl(16 95% 55% / 0.12))' }}>
          
          <span className="text-5xl block mb-3">🌟</span>
          <h3 className="font-heading text-3xl text-foreground mb-2">More Events Coming Soon!</h3>
          <p className="font-body text-muted-foreground font-medium mb-5">
            Follow us on Instagram or call us to stay updated on open mics, art workshops, flea markets, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.instagram.com/houseofhobos"
              target="_blank"
              rel="noopener noreferrer"
              className="funky-btn bg-destructive text-destructive-foreground px-6 py-2.5 rounded-full font-body font-bold text-sm border-2 border-foreground shadow-[3px_3px_0_hsl(270_60%_15%)]">
              
              📷 Follow on Instagram
            </a>
            <a
              href="tel:+919313132195"
              className="funky-btn bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-body font-bold text-sm border-2 border-foreground shadow-[3px_3px_0_hsl(270_60%_15%)]">
              
              📞 Call Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── PAST EVENTS ── */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 flex-1 bg-muted-foreground/30 rounded-full" />
          <span className="font-heading text-3xl md:text-4xl text-muted-foreground whitespace-nowrap">
            🕰️ Past Events
          </span>
          <div className="h-1 flex-1 bg-muted-foreground/30 rounded-full" />
        </div>

        <p className="font-handwritten text-2xl text-secondary text-center mb-8 rotate-slight-right inline-block w-full">
          memories from the house ♡
        </p>

        <div className="space-y-8">
          {pastEvents.map((event) =>
          <EventCard key={event.id} event={event} isPast={true} />
          )}
        </div>
      </section>
    </div>);

}