import { CATEGORIES } from '../data/showroomData';

interface CategoriesSectionProps {
  onSelectCategory: (categoryTag: string) => void;
}

export default function CategoriesSection({ onSelectCategory }: CategoriesSectionProps) {
  const handleCategoryClick = (tag: string) => {
    onSelectCategory(tag);
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="categories"
      className="py-20 md:py-28 px-5 md:px-10 bg-[#0d0505] relative overflow-hidden"
      aria-label="Collections"
    >
      {/* Background Image perfectly fitted to frame with enhanced visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/categories-bg.jpg"
          alt="Shree Vijay Showroom Heritage Texture"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105 saturate-110 opacity-85"
          onError={(e) => {
            // Fallback to direct pin link if local asset has any loading delay
            (e.currentTarget as HTMLImageElement).src = 'https://i.pinimg.com/736x/99/1e/29/991e2953a1556622878ceb307b2df292.jpg';
          }}
        />
        {/* Soft gradient blend for seamless section transition while keeping image rich and clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0505]/60 via-[#0d0505]/25 to-[#0d0505]/65" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853] mb-3">
            Our Collections
          </p>
          <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-wider uppercase mb-4">
            Find Your <span className="italic text-[#d4a853] font-serif-luxury lowercase">perfect style</span>
          </h2>
          <p className="text-[#a09888] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            From everyday handloom elegance to grand bridal royalty — explore our curated departmental collections.
          </p>
        </div>

        {/* 5-Column Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.tag)}
              className="cursor-pointer group flex flex-col items-center text-center p-6 rounded-xl bg-[#0d0505]/65 backdrop-blur-md border border-[#d4a853]/25 hover:border-[#d4a853]/60 hover:bg-[#1a0a0a]/80 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_30px_rgba(212,168,83,0.25)]"
            >
              <div className="text-3xl sm:text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>

              <h4 className="font-accent text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[#e8c87a] group-hover:text-[#f5f0e8] transition-colors mb-1">
                {cat.name}
              </h4>

              <span className="text-[10px] font-serif-luxury text-[#d4a853]/80 mb-2">
                {cat.hindiName}
              </span>

              <p className="text-[11px] text-[#a09888] font-body leading-snug group-hover:text-[#e0d8cc] transition-colors">
                {cat.subtitle}
              </p>

              <span className="mt-4 inline-flex items-center text-[10px] font-accent tracking-widest text-[#d4a853] opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                Browse →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
