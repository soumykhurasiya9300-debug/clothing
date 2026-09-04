import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const whatsappUrl =
    'https://wa.me/918989892476?text=' +
    encodeURIComponent('Namaste! I would like to inquire about ethnic collections & bridal trials at Shree Vijay Showroom Jabalpur.');

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 group flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.55)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      aria-label="Chat with Showroom on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
      <span className="font-accent text-xs font-semibold tracking-wider uppercase hidden sm:inline">
        WhatsApp Us
      </span>
    </a>
  );
}
