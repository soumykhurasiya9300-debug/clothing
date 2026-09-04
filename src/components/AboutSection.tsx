import { Sparkles, ShieldCheck, Scissors, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SHOWROOM_INFO, SHOWROOM_STATS, TRUST_PILLARS } from '../data/showroomData';

export default function AboutSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#d4a853]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#d4a853]" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-[#d4a853]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#d4a853]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#d4a853]" />;
    }
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-5 md:px-10 bg-[#1a0a0a] border-y border-[#d4a853]/15 relative overflow-hidden"
      aria-label="About Shree Vijay Showroom"
    >
      {/* Decorative subtle background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,_rgba(212,168,83,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Rating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#d4a853]/25 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group">
              <img
                src="https://images.unsplash.com/photo-1603162617001-6e1b5f7d7b4d?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury ethnic wear display at Shree Vijay Showroom Jabalpur"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0505]/90 via-[#0d0505]/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="font-accent text-[10px] tracking-[0.25em] uppercase text-[#e8c87a]">
                  Garha Phatak Road · Jabalpur
                </span>
                <p className="font-display text-base text-[#f5f0e8] tracking-wide">
                  Where Heritage Meets Contemporary Grace
                </p>
              </div>
            </div>

            {/* Floating Golden Rating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#d4a853] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-4 border-[#0d0505] flex flex-col items-center justify-center text-center animate-pulse-badge">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#0d0505] leading-none">
                {SHOWROOM_INFO.rating}
              </span>
              <div className="flex gap-0.5 text-[#0d0505] text-[9px] my-1">
                ★★★★★
              </div>
              <span className="font-accent text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#0d0505]/80">
                {SHOWROOM_INFO.totalReviews} Reviews
              </span>
            </div>
          </div>

          {/* Right Column: Narrative Story & Pillars */}
          <div className="lg:col-span-7">
            <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853] mb-3">
              Our Legacy
            </p>

            <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-wider leading-tight uppercase mb-6">
              Jabalpur&apos;s Trusted{' '}
              <span className="italic text-[#d4a853] font-serif-luxury lowercase">
                ethnic destination
              </span>
            </h2>

            <div className="space-y-4 text-[#a09888] font-body text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Ever wondered how to make your special occasions truly unforgettable? At{' '}
                <strong className="text-[#f5f0e8] font-semibold">Shree Vijay Showroom</strong>, we bring you an exquisite collection of elegant lehengas, sarees, sherwanis, and wedding ethnic wear — carefully tailored to ensure you stand out on every memorable occasion.
              </p>
              <p>
                Whether preparing for a sacred wedding, grand reception, festive celebration, or family gathering, our fusion of timeless Indian traditional charm and contemporary cuts offers unmatched variety. With strictly inspected fabric purity and reasonable pricing, you will find the ensemble that resonates with your personal elegance and budget.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-accent tracking-wider text-[#e8c87a]">
                <span className="px-3 py-1 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30">
                  🏳️‍🌈 LGBTQ+ Friendly
                </span>
                <span className="px-3 py-1 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30">
                  👨‍👩‍👧‍👦 Family Trusted
                </span>
                <span className="px-3 py-1 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/30">
                  📍 Fuhara & Bada Heart of Jabalpur
                </span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#d4a853]/15 mb-8">
              {SHOWROOM_STATS.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="font-display text-xl sm:text-2xl font-bold text-[#d4a853]">
                    {stat.value}
                  </div>
                  <div className="font-accent text-[11px] tracking-wider text-[#a09888] uppercase mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* 4 Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TRUST_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-[#d4a853]/15 hover:border-[#d4a853]/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    {getIcon(pillar.icon)}
                    <h4 className="font-accent text-xs font-semibold uppercase tracking-wider text-[#f5f0e8]">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#a09888] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
