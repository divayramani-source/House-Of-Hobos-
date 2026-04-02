import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, X, Heart } from 'lucide-react';

const SAMPLE_REVIEWS = [
  { id: 1, author_name: 'Priya Sharma', instagram_handle: '@priya.explores', rating: 5, text: 'Absolutely loved the vibe here! The book nook is my new favorite corner in Ahmedabad. Will be back every week!', photo_url: '' },
  { id: 2, author_name: 'Rohan Mehta', instagram_handle: '@rohanm', rating: 5, text: 'Best chai and conversations. The Hobo Bazaar has the most unique handmade stuff. A hidden gem!', photo_url: '' },
  { id: 3, author_name: 'Aanya Patel', instagram_handle: '@aanyap', rating: 5, text: 'The murals, the lights, the music — everything is so carefully curated. Felt like home instantly.', photo_url: '' },
  { id: 4, author_name: 'Kabir Singh', instagram_handle: '', rating: 4, text: 'Great place to work remotely or just chill. The garden area is stunning at night with fairy lights.', photo_url: '' },
  { id: 5, author_name: 'Meera Joshi', instagram_handle: '@meeraj', rating: 5, text: 'Came for a friend\'s birthday and stayed for 4 hours! The energy is unmatched. Love this place.', photo_url: '' },
  { id: 6, author_name: 'Dev Trivedi', instagram_handle: '@devt', rating: 5, text: 'The Bollywood ceiling alone is worth the visit. Such a creative and welcoming space!', photo_url: '' },
];

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <button key={s} type="button"
          onMouseEnter={() => setHovered(s)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(s)}>
          <Star className={`w-8 h-8 transition-colors ${(hovered || value) >= s ? 'fill-yellow-400 text-yellow-400' : 'text-border'}`} />
        </button>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="retro-card p-6 flex flex-col gap-3">
      {review.photo_url && (
        <div className="rounded-xl overflow-hidden border-2 border-border aspect-square">
          <img src={review.photo_url} alt="customer photo" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} className={`w-4 h-4 ${review.rating >= s ? 'fill-yellow-400 text-yellow-400' : 'text-border'}`} />
        ))}
      </div>
      <p className="font-body text-sm text-foreground font-medium leading-relaxed">"{review.text}"</p>
      <div className="mt-auto">
        <p className="font-heading text-base text-foreground">{review.author_name}</p>
        {review.instagram_handle && (
          <a href={`https://www.instagram.com/${review.instagram_handle.replace('@', '')}`}
            target="_blank" rel="noopener noreferrer"
            className="font-body text-xs text-destructive hover:underline font-semibold">
            {review.instagram_handle}
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function CommunityLove() {
  const [reviews, setReviews] = useState(SAMPLE_REVIEWS);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ author_name: '', instagram_handle: '', rating: 0, text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.rating) return;
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 800)); // simulate submit
    const newReview = { id: Date.now(), ...form, photo_url: '' };
    setReviews((prev) => [newReview, ...prev]);
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setForm({ author_name: '', instagram_handle: '', rating: 0, text: '' });
    }, 2500);
  };

  return (
    <div className="pt-20 md:pt-24 pb-16 groovy-bg">
      <div className="text-center px-4 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center font-heading text-[6rem] md:text-[12rem] text-foreground/3 select-none pointer-events-none leading-none">
          LOVE
        </div>
        <div className="relative z-10">
          <span className="font-handwritten text-destructive text-3xl md:text-4xl block mb-3 rotate-slight-left inline-block">
            from our hobo family ♡
          </span>
          <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-4">Community Love 💛</h1>
          <p className="font-body text-muted-foreground max-w-lg mx-auto font-medium">
            Real moments, real people, real vibes. Share your Hobo experience with the world!
          </p>
          <button onClick={() => setShowForm(true)}
            className="mt-6 funky-btn inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body font-bold text-base border-2 border-foreground shadow-[4px_4px_0_hsl(270_60%_15%)]">
            <Heart className="w-5 h-5" /> Share Your Experience
          </button>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((r) => <ReviewCard key={r.id} review={r} />)}
        </div>
      </section>

      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && setShowForm(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="retro-card p-8 w-full max-w-lg bg-background relative max-h-[90vh] overflow-y-auto">
              <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
              {submitted ? (
                <div className="text-center py-8">
                  <span className="text-6xl block mb-4">💛</span>
                  <h3 className="font-heading text-3xl text-foreground mb-2">Thanks for the love!</h3>
                  <p className="font-body text-muted-foreground font-medium">Your review has been added to the community wall.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-3xl text-foreground mb-1">Your Review</h2>
                  <p className="font-handwritten text-xl text-secondary mb-6">tell us how you felt ✦</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="font-body font-semibold text-sm text-foreground mb-1.5 block">Your Name *</label>
                      <input required type="text" value={form.author_name}
                        onChange={(e) => setForm({ ...form, author_name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-4 py-3 rounded-xl border-2 border-foreground font-body text-sm bg-background focus:outline-none focus:border-primary shadow-[2px_2px_0_hsl(270_60%_15%)]" />
                    </div>
                    <div>
                      <label className="font-body font-semibold text-sm text-foreground mb-1.5 block">Instagram Handle (optional)</label>
                      <input type="text" value={form.instagram_handle}
                        onChange={(e) => setForm({ ...form, instagram_handle: e.target.value })}
                        placeholder="@yourhandle"
                        className="w-full px-4 py-3 rounded-xl border-2 border-foreground font-body text-sm bg-background focus:outline-none focus:border-primary shadow-[2px_2px_0_hsl(270_60%_15%)]" />
                    </div>
                    <div>
                      <label className="font-body font-semibold text-sm text-foreground mb-1.5 block">Rating *</label>
                      <StarPicker value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
                    </div>
                    <div>
                      <label className="font-body font-semibold text-sm text-foreground mb-1.5 block">Your Review *</label>
                      <textarea required value={form.text}
                        onChange={(e) => setForm({ ...form, text: e.target.value })} rows={3}
                        placeholder="Share your experience at House of Hobos..."
                        className="w-full px-4 py-3 rounded-xl border-2 border-foreground font-body text-sm bg-background focus:outline-none focus:border-primary shadow-[2px_2px_0_hsl(270_60%_15%)] resize-none" />
                    </div>
                    <button type="submit" disabled={submitting || !form.rating}
                      className="w-full funky-btn flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-body font-bold text-base border-2 border-foreground shadow-[4px_4px_0_hsl(270_60%_15%)] disabled:opacity-60">
                      {submitting ? <><span className="animate-spin">⏳</span> Posting...</> : <><Send className="w-5 h-5" /> Post Review</>}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}