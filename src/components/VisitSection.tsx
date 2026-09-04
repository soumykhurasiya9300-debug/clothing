import { MapPin, Clock, Phone, ShoppingBag, Heart, ExternalLink, Navigation } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/showroomData';

export default function VisitSection() {
  const isCurrentlyOpen = () => {
    // Showroom open daily 10:30 AM to 10:00 PM
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours + minutes / 60;
    return currentTime >= 10.5 && currentTime < 22;
  };

  const openStatus = isCurrentlyOpen();

  const showroomCards = [
    {
      icon: <MapPin className="w-5 h-5 text-[#d4a853]" />,
      title: 'Address & Landmark',
      desc: SHOWROOM_INFO.address,
      action: {
        label: 'Get Directions',
        href: SHOWROOM_INFO.googleMapsUrl,
        external: true,
      },
    },
    {
      icon: <Clock className="w-5 h-5 text-[#d4a853]" />,
      title: 'Showroom Hours',
      desc: SHOWROOM_INFO.hours,
      badge: openStatus ? 'Open Now · Closes 10 PM' : 'Opens Daily at 10:30 AM',
      badgeColor: openStatus ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' : 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    },
    {
      icon: <Phone className="w-5 h-5 text-[#d4a853]" />,
      title: 'Direct Showroom Contact',
      desc: `Call us for bridal appointments, bridal trial scheduling & stock inquiries: ${SHOWROOM_INFO.displayPhone}`,
      action: {
        label: 'Call Showroom Now',
        href: `tel:${SHOWROOM_INFO.phone}`,
        external: false,
      },
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-[#d4a853]" />,
      title: 'Customer Services',
      desc: 'In-store Bridal Trials · Kerbside Pickup · Express Jabalpur Delivery · Bespoke Alterations & Fall-Picot',
    },
    {
      icon: <Heart className="w-5 h-5 text-[#d4a853]" />,
      title: 'Warm & Inclusive Atmosphere',
      desc: 'LGBTQ+ Friendly · Safe & welcoming shopping experience for all families and brides across Madhya Pradesh.',
    },
  ];

  return (
    <section
      id="visit"
      className="py-20 md:py-28 px-5 md:px-10 bg-[#0d0505] relative"
      aria-label="Visit Shree Vijay Showroom Jabalpur"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-accent text-xs font-semibold tracking-[0.45em] uppercase text-[#d4a853] mb-3">
            Store Location
          </p>
          <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] tracking-wider uppercase mb-3">
            Visit <span className="italic text-[#d4a853] font-serif-luxury lowercase">Shree Vijay</span>
          </h2>
          <p className="text-[#a09888] text-sm md:text-base max-w-lg mx-auto">
            Conveniently located in the bustling heart of Jabalpur, opposite Jain Dairy on Garha Phatak Road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Information Cards */}
          <div className="lg:col-span-7 space-y-4">
            {showroomCards.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/[0.02] border border-[#d4a853]/15 hover:border-[#d4a853]/40 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/25 flex items-center justify-center shrink-0 mt-0.5">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                    <h4 className="font-accent text-xs font-semibold uppercase tracking-wider text-[#e8c87a]">
                      {item.title}
                    </h4>

                    {item.badge && (
                      <span
                        className={`text-[10px] font-accent uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#a09888] leading-relaxed mb-2">
                    {item.desc}
                  </p>

                  {item.action && (
                    <a
                      href={item.action.href}
                      target={item.action.external ? '_blank' : undefined}
                      rel={item.action.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-xs font-accent tracking-wider text-[#d4a853] hover:text-[#e8c87a] transition-colors"
                    >
                      <span>{item.action.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Map Visualizer */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-square border border-[#d4a853]/25 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-gradient-to-br from-[#2a1212] via-[#1a0a0a] to-[#0d0505] p-6 flex flex-col justify-between text-center group">
              {/* Decorative Map Pattern Background */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d4a853_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              <div className="relative z-10 pt-4">
                <div className="w-14 h-14 rounded-full bg-[#d4a853] text-[#0d0505] mx-auto flex items-center justify-center mb-4 shadow-[0_10px_30px_rgba(212,168,83,0.4)] animate-bounce">
                  <MapPin className="w-7 h-7" />
                </div>

                <h4 className="font-display text-2xl text-[#f5f0e8] mb-1">
                  Shree Vijay Showroom
                </h4>
                <p className="font-serif-luxury italic text-sm text-[#e8c87a] mb-3">
                  Garha Phatak Road, Fuhara, Bada
                </p>
                <p className="text-xs text-[#a09888] font-mono mb-2">
                  Plus Code: 5WGJ+4G Jabalpur, MP
                </p>
                <p className="text-xs text-[#f5f0e8] max-w-xs mx-auto">
                  Landmark: Right in front of Jain Dairy, near historic Fuhara marketplace
                </p>
              </div>

              {/* Direct Link Action */}
              <div className="relative z-10 pt-4 border-t border-[#d4a853]/20">
                <a
                  href={SHOWROOM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#d4a853] text-[#0d0505] font-accent font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#e8c87a] transition-all shadow-[0_8px_25px_rgba(212,168,83,0.3)]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Quick Helper Box */}
            <div className="p-4 rounded-xl bg-[#1a0a0a] border border-[#d4a853]/15 text-xs text-[#a09888] flex items-center justify-between">
              <span>Need help finding parking or directions?</span>
              <a
                href={`tel:${SHOWROOM_INFO.phone}`}
                className="text-[#d4a853] hover:underline font-semibold font-accent"
              >
                Call Staff →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
