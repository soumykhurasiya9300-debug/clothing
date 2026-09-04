import { MapPin, Clock, Phone, MessageCircle, Star } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomData';

export default function Footer() {
  return (
    <footer className="bg-[#0d0505] text-[#a09888] pt-16 pb-8 px-5 md:px-10 border-t border-[#d4a853]/15">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Brand presentation */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-block mb-3">
              <div className="font-display text-2xl text-[#f5f0e8] tracking-[0.2em] uppercase">
                Shree Vijay<span className="text-[#d4a853]">.</span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-[#a09888] leading-relaxed mb-4">
              Jabalpur&apos;s premier destination for luxury ethnic wear. Exquisite sarees, designer lehengas, royal sherwanis, and complete wedding family shopping.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-[#d4a853]/25 text-xs text-[#e8c87a]">
              <div className="flex text-[#d4a853]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#d4a853]" />
                ))}
              </div>
              <span className="font-semibold text-[#f5f0e8]">4.8 ★</span>
              <span>· 983 Google Reviews</span>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div className="lg:col-span-2">
            <h5 className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a853] mb-4">
              Collections
            </h5>
            <ul className="space-y-2.5 text-xs font-accent tracking-wider">
              <li>
                <a href="#gallery" className="hover:text-[#e8c87a] transition-colors">
                  Pure Silk Sarees
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#e8c87a] transition-colors">
                  Bridal Lehengas
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#e8c87a] transition-colors">
                  Royal Sherwanis
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#e8c87a] transition-colors">
                  Festive Kurtas
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#e8c87a] transition-colors">
                  Salwar Suits
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2">
            <h5 className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a853] mb-4">
              Explore
            </h5>
            <ul className="space-y-2.5 text-xs font-accent tracking-wider">
              <li>
                <a href="#about" className="hover:text-[#e8c87a] transition-colors">
                  Our Legacy
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#e8c87a] transition-colors">
                  Department Edit
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#e8c87a] transition-colors">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#e8c87a] transition-colors">
                  Showroom Directions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#e8c87a] transition-colors">
                  Book In-Store Trial
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="lg:col-span-4">
            <h5 className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a853] mb-4">
              Store Contact
            </h5>
            <ul className="space-y-3 text-xs text-[#a09888]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4a853] shrink-0 mt-0.5" />
                <span>26/1, Garha Phatak Road, Fuhara, Bada, Jabalpur, MP 482002</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#d4a853] shrink-0" />
                <span>Daily: 10:30 AM – 10:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4a853] shrink-0" />
                <a
                  href={`tel:${SHOWROOM_INFO.phone}`}
                  className="hover:text-[#e8c87a] font-semibold text-[#f5f0e8] transition-colors"
                >
                  {SHOWROOM_INFO.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/918989892476"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  Chat with Bridal Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright bar */}
        <div className="pt-8 border-t border-[#d4a853]/10 text-center text-xs text-[#a09888]/70 font-accent tracking-wider">
          <p>© 2026 Shree Vijay Showroom · All Rights Reserved · Jabalpur, Madhya Pradesh 482002</p>
        </div>
      </div>
    </footer>
  );
}
