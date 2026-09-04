import { X, Sparkles, MessageCircle, Calendar, Check, Shield } from 'lucide-react';
import { ProductItem } from '../types';
import { SHOWROOM_INFO } from '../data/showroomData';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onBookTrial: (productName: string) => void;
}

export default function ProductModal({ product, onClose, onBookTrial }: ProductModalProps) {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Namaste Shree Vijay Showroom! I am interested in viewing / purchasing "${product.title}" (${product.priceRange}) listed on your showroom catalog. Please let me know current availability at your Jabalpur showroom.`
  );

  const whatsappUrl = `https://wa.me/918989892476?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0d0505]/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#1a0a0a] border border-[#d4a853]/30 rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.9)] flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#0d0505]/70 text-[#f5f0e8] hover:text-[#d4a853] hover:bg-[#0d0505] transition-all border border-[#d4a853]/20"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Garment Image */}
        <div className="md:w-1/2 relative bg-[#0d0505] min-h-[300px] md:min-h-[480px]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0a] via-transparent to-transparent pointer-events-none md:hidden" />

          {product.isBestseller && (
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#d4a853] text-[#0d0505] font-accent text-[10px] font-bold tracking-widest uppercase shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Showroom Bestseller</span>
            </div>
          )}
        </div>

        {/* Right: Details & Action */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 font-accent text-[11px] tracking-[0.2em] text-[#d4a853] uppercase mb-1">
              <span>{product.category.replace('-', ' ')}</span>
              <span>·</span>
              <span>{product.occasion}</span>
            </div>

            <h3
              id="modal-product-title"
              className="font-display text-2xl sm:text-3xl text-[#f5f0e8] tracking-wide mb-2"
            >
              {product.title}
            </h3>

            <p className="font-serif-luxury italic text-sm text-[#e8c87a] mb-4">
              {product.subtitle}
            </p>

            {/* Price Tier */}
            <div className="inline-block px-3.5 py-1.5 rounded-lg bg-[#d4a853]/10 border border-[#d4a853]/30 text-sm font-semibold text-[#f5f0e8] mb-6">
              Range: <span className="text-[#d4a853]">{product.priceRange}</span>
            </div>

            {/* Description */}
            <p className="text-[#a09888] text-xs sm:text-sm leading-relaxed mb-6 font-body">
              {product.description}
            </p>

            {/* Fabric & Craftsmanship specs */}
            <div className="space-y-3 p-4 rounded-xl bg-white/[0.02] border border-[#d4a853]/15 mb-6 text-xs">
              <div>
                <span className="text-[#d4a853] font-accent uppercase tracking-wider block text-[10px] mb-0.5">
                  Fabric & Material
                </span>
                <span className="text-[#e0d8cc]">{product.fabric}</span>
              </div>
              <div>
                <span className="text-[#d4a853] font-accent uppercase tracking-wider block text-[10px] mb-0.5">
                  Artisanal Craftsmanship
                </span>
                <span className="text-[#e0d8cc]">{product.craftsmanship}</span>
              </div>
            </div>

            {/* Trust highlights */}
            <div className="flex items-center gap-4 text-[11px] text-[#a09888] mb-6">
              <span className="flex items-center gap-1 text-[#e8c87a]">
                <Shield className="w-3.5 h-3.5 text-[#d4a853]" />
                100% Authentic Fabric
              </span>
              <span className="flex items-center gap-1 text-[#e8c87a]">
                <Check className="w-3.5 h-3.5 text-[#d4a853]" />
                In-Store Fitting Available
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#d4a853]/15">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] text-white font-accent font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all hover:bg-[#20bd5a] shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Showroom</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookTrial(product.title);
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-[#d4a853] text-[#0d0505] font-accent font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all hover:bg-[#e8c87a]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Trial</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
