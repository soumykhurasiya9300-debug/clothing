import { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollPercent((scrollY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collections', href: '#categories' },
    { label: 'Our Legacy', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Store', href: '#visit' },
  ];

  return (
    <>
      {/* Top scroll progress line */}
      <div
        id="scrollProgress"
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#b8860b] via-[#d4a853] to-[#e8c87a] z-[9999] transition-all duration-75 pointer-events-none"
        style={{ width: `${scrollPercent}%` }}
        aria-hidden="true"
      />

      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-40 px-5 md:px-10 transition-all duration-500 flex items-center justify-between ${
          isScrolled
            ? 'h-16 bg-[#0d0505]/92 backdrop-blur-xl border-b border-[#d4a853]/20 shadow-[0_10px_35px_rgba(0,0,0,0.7)]'
            : 'h-20 md:h-24 bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex flex-col items-start leading-none cursor-pointer"
        >
          <div className="font-display text-xl md:text-2xl text-[#f5f0e8] tracking-[0.2em] uppercase transition-colors group-hover:text-[#e8c87a]">
            Vijay<span className="text-[#d4a853]">.</span>
          </div>
          <span className="font-accent text-[9px] tracking-[0.3em] text-[#a09888] uppercase -mt-0.5">
            Shree Vijay · Jabalpur
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative font-accent text-xs font-medium tracking-[0.16em] uppercase text-[#f5f0e8] hover:text-[#e8c87a] py-1 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4a853] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${SHOWROOM_INFO.phone}`}
            className="flex items-center gap-2 text-xs font-accent tracking-wider text-[#d4a853] hover:text-[#e8c87a] transition-colors"
            title="Call Showroom"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4a853]" />
            <span className="hidden lg:inline">{SHOWROOM_INFO.displayPhone}</span>
          </a>

          <a
            href="#contact"
            className="relative px-5 py-2.5 rounded-full bg-[#d4a853] text-[#0d0505] font-accent text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:bg-[#e8c87a] hover:-translate-y-0.5 shadow-[0_4px_18px_rgba(212,168,83,0.3)] hover:shadow-[0_8px_25px_rgba(212,168,83,0.45)]"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#f5f0e8] hover:text-[#d4a853] transition-colors"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed inset-0 top-16 bg-[#0d0505]/98 backdrop-blur-2xl border-l border-[#d4a853]/20 z-50 flex flex-col justify-between p-8 transition-all duration-400 md:hidden ${
            mobileMenuOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-6 pt-4">
            <div className="flex items-center gap-2 text-[#d4a853] text-xs uppercase tracking-widest font-accent pb-2 border-b border-[#d4a853]/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Luxury Ethnic Wear</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl text-[#f5f0e8] hover:text-[#d4a853] tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-[#d4a853]/15">
            <a
              href={`tel:${SHOWROOM_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#d4a853]/40 text-[#f5f0e8] font-accent text-xs tracking-widest uppercase"
            >
              <Phone className="w-4 h-4 text-[#d4a853]" />
              <span>Call: {SHOWROOM_INFO.displayPhone}</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-4 rounded-xl bg-[#d4a853] text-[#0d0505] text-center font-accent font-semibold text-xs tracking-widest uppercase"
            >
              Book Consultation & Trial
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
