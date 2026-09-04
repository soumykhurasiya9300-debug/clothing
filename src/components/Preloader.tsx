import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      setTimeout(() => setRemoved(true), 700);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (removed) return null;

  return (
    <div
      id="preloader"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0d0505] transition-opacity duration-700 ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="text-center px-6">
        <div className="font-display text-3xl sm:text-4xl md:text-5xl text-[#d4a853] tracking-[0.3em] uppercase mb-2 animate-pulse">
          Shree Vijay
        </div>
        <div className="font-accent text-xs tracking-[0.45em] text-[#a09888] uppercase">
          Showroom · Ethnic Luxury · Jabalpur
        </div>
        <div className="w-52 h-[2px] bg-[#d4a853]/20 mx-auto mt-7 rounded overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#b8860b] via-[#d4a853] to-[#e8c87a] animate-[preloaderFill_1.4s_ease_forwards]" />
        </div>
      </div>
      <style>{`
        @keyframes preloaderFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
