import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="backToTop"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#d4a853] text-[#0d0505] flex items-center justify-center shadow-[0_8px_25px_rgba(212,168,83,0.35)] hover:bg-[#e8c87a] hover:-translate-y-1 transition-all duration-300 border border-[#b8860b]/40 cursor-pointer"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}
