import { ArrowDown, Sparkles, Star } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0505] pt-24 pb-16 px-4"
      aria-label="Shree Vijay Showroom Hero"
    >
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105 saturate-110"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source
            src="https://v1.pinimg.com/videos/iht/expMp4/a2/82/3a/a2823a9647c2650a5bb739b93b8fb9e2_720w.mp4"
            type="video/mp4"
          />
        </video>

        {/* Multi-layered Vignette & Maroon Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0505]/65 via-[#0d0505]/40 to-[#0d0505]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(13,5,5,0.75)_100%)] pointer-events-none" />

        {/* Warm Golden Ambient Glow from bottom */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[85%] max-w-4xl h-72 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,83,0.18)_0%,_transparent_70%)] pointer-events-none animate-glow-pulse" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4a853]/30 bg-[#d4a853]/5 mb-6 backdrop-blur-sm">
          <Sparkles className="w-3 h-3 text-[#d4a853]" />
          <span className="font-accent text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#e8c87a]">
            Premium Ethnic Wear · Jabalpur
          </span>
          <Sparkles className="w-3 h-3 text-[#d4a853]" />
        </div>

        {/* Primary Title */}
        <h1 className="font-display font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f5f0e8] tracking-[0.12em] md:tracking-[0.16em] uppercase leading-tight mb-6">
          Shree <span className="text-[#d4a853] inline-block animate-gold-shimmer">Vijay</span> Showroom
        </h1>

        {/* Descriptive Tagline */}
        <p className="text-[#a09888] font-body text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide mb-8">
          Sarees · Lehengas · Sherwanis · Wedding Wear — Where tradition meets modern elegance.
          Discover your perfect heirloom look for every sacred celebration in Jabalpur.
        </p>

        {/* Rating Trust Badge */}
        <div className="flex items-center justify-center gap-3 mb-8 text-xs font-accent tracking-wider text-[#e8c87a]">
          <div className="flex items-center gap-1 text-[#d4a853]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#d4a853]" />
            ))}
          </div>
          <span className="text-[#f5f0e8] font-semibold">{SHOWROOM_INFO.rating} Rating</span>
          <span className="text-[#a09888]">|</span>
          <span className="text-[#a09888]">{SHOWROOM_INFO.totalReviews} Google Reviews</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#categories"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#d4a853] text-[#0d0505] font-accent font-semibold text-xs tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#e8c87a] hover:-translate-y-1 shadow-[0_12px_30px_rgba(212,168,83,0.35)] hover:shadow-[0_16px_40px_rgba(212,168,83,0.5)] flex items-center justify-center gap-2"
          >
            <span>Explore Collections</span>
            <span>→</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#d4a853]/50 text-[#f5f0e8] font-accent font-medium text-xs tracking-[0.18em] uppercase transition-all duration-300 hover:border-[#d4a853] hover:bg-[#d4a853]/10 hover:-translate-y-1"
          >
            Contact Showroom
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#categories"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
        aria-label="Scroll to collections"
      >
        <span className="font-accent text-[9px] tracking-[0.3em] uppercase text-[#a09888]">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#d4a853] to-transparent animate-scroll-line" />
      </a>
    </section>
  );
}
