import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS, SHOWROOM_INFO } from '../data/showroomData';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 px-5 md:px-10 bg-[#1a0a0a] border-y border-[#d4a853]/15 relative overflow-hidden"
      aria-label="Customer Reviews"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853] mb-3">
          Customer Endorsements
        </p>
        <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-wider uppercase mb-3">
          What Our <span className="italic text-[#d4a853] font-serif-luxury lowercase">patrons say</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mb-10 text-xs text-[#a09888]">
          <span className="text-[#e8c87a] font-semibold">{SHOWROOM_INFO.rating} ★ Rating</span>
          <span>·</span>
          <span>Verified Google Maps Reviews in Jabalpur</span>
        </div>

        {/* Testimonial Card */}
        <div
          className="relative p-6 sm:p-10 md:p-12 rounded-2xl bg-white/[0.02] border border-[#d4a853]/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-500"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Quote className="w-8 h-8 text-[#d4a853]/30 mx-auto mb-4" />

          {/* Stars */}
          <div className="flex justify-center gap-1.5 text-[#d4a853] mb-4">
            {[...Array(currentReview.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#d4a853]" />
            ))}
          </div>

          {/* Highlight pill */}
          {currentReview.highlight && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/25 text-[11px] font-accent text-[#e8c87a] mb-5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a853]" />
              <span>{currentReview.highlight}</span>
            </div>
          )}

          {/* Review Text */}
          <p className="font-serif-luxury italic text-lg sm:text-xl md:text-2xl text-[#f5f0e8] leading-relaxed mb-6 max-w-2xl mx-auto min-h-[90px] flex items-center justify-center">
            &ldquo;{currentReview.review}&rdquo;
          </p>

          {/* Author info */}
          <div className="font-accent">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d4a853]">
              {currentReview.author}
            </h4>
            <div className="text-[11px] text-[#a09888] tracking-wider mt-1">
              {currentReview.meta} {currentReview.city && `· ${currentReview.city}`}
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-[#d4a853]/30 bg-transparent hover:bg-[#d4a853]/15 text-[#f5f0e8] hover:border-[#d4a853] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-[#d4a853]" />
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-6 bg-[#d4a853]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-[#d4a853]/30 bg-transparent hover:bg-[#d4a853]/15 text-[#f5f0e8] hover:border-[#d4a853] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-[#d4a853]" />
          </button>
        </div>
      </div>
    </section>
  );
}
