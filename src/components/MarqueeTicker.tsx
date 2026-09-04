export default function MarqueeTicker() {
  const items = [
    'Premium Sarees',
    'Designer Lehengas',
    'Royal Sherwanis',
    'Wedding Collection',
    'Kurtas & Salwar Suits',
    'Best Quality · Reasonable Prices',
    '4.8★ · 983 Google Reviews',
    'Garha Phatak Road · Bada Jabalpur',
  ];

  return (
    <div className="bg-[#d4a853] py-3 overflow-hidden relative z-10 border-y border-[#b8860b]/40 select-none shadow-[0_4px_20px_rgba(212,168,83,0.2)]">
      <div className="flex w-max animate-marquee">
        {/* Repeating twice for seamless infinite scroll */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 px-6 whitespace-nowrap text-[#0d0505] font-accent text-xs font-semibold tracking-[0.22em] uppercase"
          >
            <span>{item}</span>
            <span className="text-[10px] text-[#2a1212]/70 font-serif">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
