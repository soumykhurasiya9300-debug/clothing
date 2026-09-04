import { useState } from 'react';
import { Eye, Sparkles, Filter } from 'lucide-react';
import { PRODUCTS } from '../data/showroomData';
import { ProductItem } from '../types';

interface CollectionGalleryProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenProductModal: (product: ProductItem) => void;
}

export default function CollectionGallery({
  activeCategory,
  onSelectCategory,
  onOpenProductModal,
}: CollectionGalleryProps) {
  const filterTabs = [
    { id: 'all', label: 'All Collections' },
    { id: 'sarees', label: 'Sarees' },
    { id: 'lehengas', label: 'Lehengas' },
    { id: 'sherwanis', label: 'Sherwanis' },
    { id: 'kurtas', label: 'Kurtas' },
    { id: 'salwar-suits', label: 'Salwar Suits' },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 px-5 md:px-10 bg-[#0d0505] relative"
      aria-label="Gallery and Collections"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853] mb-3">
            Featured Gallery
          </p>
          <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-wider uppercase mb-4">
            The <span className="italic text-[#d4a853] font-serif-luxury lowercase">curated collection</span>
          </h2>
          <p className="text-[#a09888] text-sm md:text-base max-w-lg mx-auto">
            Click any garment to inspect fabric authenticity, intricate weave details, and inquire for in-store trials.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-4 py-2 rounded-full font-accent text-xs tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-[#d4a853] text-[#0d0505] font-semibold shadow-[0_4px_15px_rgba(212,168,83,0.35)] scale-105'
                    : 'bg-white/[0.03] text-[#a09888] border border-[#d4a853]/15 hover:border-[#d4a853]/40 hover:text-[#f5f0e8]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onOpenProductModal(product)}
              className="cursor-view-target group relative rounded-xl overflow-hidden aspect-[3/4] bg-[#1a0a0a] border border-[#d4a853]/15 hover:border-[#d4a853]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(212,168,83,0.18)] cursor-pointer"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.82] group-hover:brightness-95"
                loading="lazy"
              />

              {/* Bestseller Badge */}
              {product.isBestseller && (
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-[#d4a853] text-[#0d0505] font-accent text-[9px] font-bold tracking-widest uppercase shadow-md flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Popular</span>
                </div>
              )}

              {/* Quick View Floating Button on Desktop Hover */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="p-2 rounded-full bg-[#0d0505]/80 text-[#d4a853] border border-[#d4a853]/30 flex items-center justify-center">
                  <Eye className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bottom Info Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0d0505] via-[#0d0505]/80 to-transparent flex flex-col justify-end text-left transition-all">
                <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-[#d4a853] mb-1">
                  {product.category.replace('-', ' ')}
                </span>

                <h4 className="font-display text-base text-[#f5f0e8] leading-snug tracking-wide group-hover:text-[#e8c87a] transition-colors mb-1">
                  {product.title}
                </h4>

                <div className="flex items-center justify-between text-xs text-[#a09888] font-accent pt-1 border-t border-[#d4a853]/15">
                  <span className="text-[#e8c87a] font-medium">{product.priceRange}</span>
                  <span className="text-[10px] tracking-wider text-[#d4a853] group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
