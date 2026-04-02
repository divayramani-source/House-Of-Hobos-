import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function Franchise() {
  const [form, setForm] = useState({
    name: '', number: '', business: '', experience: '', budget: '', location: '', message: ''
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send via WhatsApp
    const whatsappMessage = encodeURIComponent(
`🏪 New Franchise Enquiry — House of Hobos

Name: ${form.name}
Phone: ${form.number}
Current Business: ${form.business}
Hospitality Experience: ${form.experience}
Investment Budget: ${form.budget}
Preferred Location: ${form.location}
Message: ${form.message || 'N/A'}`
    );
    window.open(`https://wa.me/919313132195?text=${whatsappMessage}`, '_blank');
    setSent(true);
  };

  return (
    <div className="pt-20 md:pt-24 pb-16 groovy-bg">

      {/* Header */}
      <div className="text-center px-4 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center font-heading text-[8rem] md:text-[14rem] text-foreground/3 select-none pointer-events-none leading-none">
          FRANCHISE
        </div>
        <div className="relative z-10">
          <span className="font-handwritten text-secondary text-3xl md:text-4xl block mb-3 rotate-slight-right inline-block">
            grow with us ☮
          </span>
        </div>
      </div>

      {/* Why Franchise Section */}
      <section className="max-w-5xl mx-auto px-4 mb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { emoji: '🌍', title: 'Growing Brand', desc: "Ahmedabad's favourite community café" },
            { emoji: '🤝', title: 'Full Support', desc: 'Training, ops & marketing support' },
            { emoji: '🎨', title: 'Unique Concept', desc: 'Art, music & food — all in one' },
            { emoji: '💰', title: 'Proven Model', desc: 'Tested & profitable business model' }
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              className="retro-card p-5 text-center">
              <span className="text-4xl block mb-2">{item.emoji}</span>
              <h3 className="font-heading text-lg text-foreground mb-1">{item.title}</h3>
              <p className="font-body text-xs text-muted-foreground font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="retro-card p-8 md:p-10">

          {sent ? (
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="font-heading text-3xl text-foreground mb-3">Enquiry Sent! 🎉</h2>
              <p className="font-body text-muted-foreground font-medium">
                Your details have been sent via WhatsApp. Our team will reach out within 2–3 business days.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', number: '', business: '', experience: '', budget: '', location: '', message: '' }); }}
                className="mt-6 funky-btn bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-bold text-base border-2 border-foreground shadow-[4px_4px_0_hsl(270_60%_15%)]">
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8 text-center">
                <span className="font-handwritten text-primary text-2xl">fill in your details ✦</span>
                <h2 className="font-heading text-3xl text-foreground mt-1">Enquiry Form</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Your full name', required: true },
                  { label: 'Phone Number *', name: 'number', type: 'tel', placeholder: '+91 XXXXX XXXXX', required: true },
                  { label: 'Current Business *', name: 'business', type: 'text', placeholder: 'e.g. Restaurant owner, IT professional', required: true },
                  { label: 'Years of Experience in Hospitality *', name: 'experience', type: 'text', placeholder: 'e.g. 3 years, Fresher', required: true },
                  { label: 'Investment Budget *', name: 'budget', type: 'text', placeholder: 'e.g. ₹20 Lakhs, ₹50 Lakhs', required: true },
                  { label: 'Preferred Café Location *', name: 'location', type: 'text', placeholder: 'e.g. Surat, Mumbai, Vadodara', required: true },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="font-body font-semibold text-foreground text-sm mb-1.5 block">{field.label}</label>
                    <input type={field.type} name={field.name} required={field.required}
                      value={form[field.name]} onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl border-2 border-foreground font-body text-sm bg-background focus:outline-none focus:border-primary transition-colors shadow-[2px_2px_0_hsl(270_60%_15%)]" />
                  </div>
                ))}

                <div>
                  <label className="font-body font-semibold text-foreground text-sm mb-1.5 block">Additional Message (optional)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                    placeholder="Anything else you'd like to share..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-foreground font-body text-sm bg-background focus:outline-none focus:border-primary transition-colors shadow-[2px_2px_0_hsl(270_60%_15%)] resize-none" />
                </div>

                <button type="submit" disabled={!form.budget}
                  className="w-full funky-btn flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-bold text-lg border-2 border-foreground shadow-[4px_4px_0_hsl(270_60%_15%)] disabled:opacity-60 disabled:cursor-not-allowed">
                  <Send className="w-5 h-5" /> Send via WhatsApp
                </button>

                <p className="text-center font-body text-xs text-muted-foreground">
                  This will open WhatsApp with your details pre-filled to send to our team.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </section>
    </div>
  );
}