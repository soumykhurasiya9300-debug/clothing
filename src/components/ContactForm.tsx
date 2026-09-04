import { useState, useEffect, type FormEvent } from 'react';
import { Send, CheckCircle2, MessageSquare, Sparkles, MessageCircle } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomData';

interface ContactFormProps {
  initialInterest?: string;
  initialMessage?: string;
}

export default function ContactForm({ initialInterest, initialMessage }: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState(initialInterest || '');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState(initialMessage || '');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialInterest) setInterest(initialInterest);
  }, [initialInterest]);

  useEffect(() => {
    if (initialMessage) setMessage(initialMessage);
  }, [initialMessage]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Please provide a valid contact number.');
      return;
    }

    if (!interest) {
      setErrorMessage('Please select what collection you are interested in.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable enquiry dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setName('');
        setPhone('');
        setInterest('');
        setBudget('');
        setMessage('');
      }, 5000);
    }, 1000);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shree Vijay Showroom Jabalpur!\nName: ${name || 'Customer'}\nPhone: ${phone || 'N/A'}\nInterested In: ${interest || 'General Ethnic Wear'}\nBudget: ${budget || 'Flexible'}\nMessage: ${message || 'I would like to know more about your collection.'}`
    );
    window.open(`https://wa.me/918989892476?text=${text}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-5 md:px-10 bg-[#1a0a0a] border-t border-[#d4a853]/15 relative"
      aria-label="Contact Shree Vijay Showroom"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853] mb-3">
            Get In Touch
          </p>
          <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-wider uppercase mb-3">
            We&apos;d Love to <span className="italic text-[#d4a853] font-serif-luxury lowercase">hear from you</span>
          </h2>
          <p className="text-[#a09888] text-sm md:text-base max-w-lg mx-auto">
            Book an appointment with our bridal styling consultants or ask for customized wedding package quotes.
          </p>
        </div>

        {/* Form Container */}
        <div className="p-6 sm:p-10 rounded-2xl bg-white/[0.02] border border-[#d4a853]/25 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-sm">
          {isSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl text-[#f5f0e8]">
                ✓ Enquiry Successfully Sent!
              </h3>
              <p className="text-sm text-[#a09888] max-w-md mx-auto">
                Dhanyawaad <strong className="text-[#f5f0e8]">{name}</strong>! Our showroom consultants at Garha Phatak Road, Jabalpur will connect with you shortly on <strong className="text-[#d4a853]">{phone}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleDirectWhatsApp}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-accent text-xs font-semibold tracking-wider uppercase hover:bg-[#20bd5a] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Also Connect on WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center font-accent">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="font-accent text-[11px] font-semibold uppercase tracking-wider text-[#e8c87a]"
                  >
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Aditi Sharma"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-[#d4a853]/20 text-[#f5f0e8] placeholder-[#a09888]/50 text-sm focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="font-accent text-[11px] font-semibold uppercase tracking-wider text-[#e8c87a]"
                  >
                    Phone / Mobile <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98XXX XXXXX"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-[#d4a853]/20 text-[#f5f0e8] placeholder-[#a09888]/50 text-sm focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Interest */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-interest"
                    className="font-accent text-[11px] font-semibold uppercase tracking-wider text-[#e8c87a]"
                  >
                    Interested In <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="contact-interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#1a0a0a] border border-[#d4a853]/20 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-colors"
                  >
                    <option value="" disabled>Select category</option>
                    <option value="Sarees">Sarees (Silk / Cotton / Designer)</option>
                    <option value="Lehengas">Lehengas (Bridal / Party / Sangeet)</option>
                    <option value="Sherwanis">Sherwanis (Royal / Groom / Wedding)</option>
                    <option value="Kurtas">Kurtas & Sets (Festive / Casual)</option>
                    <option value="Salwar Suits">Salwar Suits & Anarkalis</option>
                    <option value="Wedding Collection">Complete Family Wedding Collection</option>
                    <option value="Other">Other Custom Request</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-budget"
                    className="font-accent text-[11px] font-semibold uppercase tracking-wider text-[#e8c87a]"
                  >
                    Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#1a0a0a] border border-[#d4a853]/20 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-colors"
                  >
                    <option value="">Select budget</option>
                    <option value="Under ₹5,000">Under ₹5,000</option>
                    <option value="₹5,000 – ₹15,000">₹5,000 – ₹15,000</option>
                    <option value="₹15,000 – ₹50,000">₹15,000 – ₹50,000</option>
                    <option value="₹50,000+">₹50,000+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="font-accent text-[11px] font-semibold uppercase tracking-wider text-[#e8c87a]"
                >
                  Message / Occasion Date
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Tell us about your requirements, wedding date, preferred colors, or questions..."
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-[#d4a853]/20 text-[#f5f0e8] placeholder-[#a09888]/50 text-sm focus:outline-none focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] transition-colors resize-y"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-[#d4a853] text-[#0d0505] font-accent font-semibold text-xs tracking-widest uppercase hover:bg-[#e8c87a] transition-all shadow-[0_4px_20px_rgba(212,168,83,0.3)] hover:shadow-[0_8px_30px_rgba(212,168,83,0.45)] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="py-3.5 px-6 rounded-xl bg-[#25D366]/90 hover:bg-[#25D366] text-white font-accent font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quick WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
