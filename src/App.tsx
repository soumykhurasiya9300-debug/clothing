import { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import CategoriesSection from './components/CategoriesSection';
import AboutSection from './components/AboutSection';
import CollectionGallery from './components/CollectionGallery';
import ProductModal from './components/ProductModal';
import ReviewsSection from './components/ReviewsSection';
import VisitSection from './components/VisitSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import BackToTop from './components/BackToTop';
import { ProductItem } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [contactInterest, setContactInterest] = useState<string>('');
  const [contactMessage, setContactMessage] = useState<string>('');

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
  };

  const handleOpenProduct = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
  };

  const handleBookTrial = (productName: string) => {
    setContactInterest('Wedding Collection');
    setContactMessage(`I would like to schedule an in-store trial for "${productName}". Please advise available slots this week.`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0d0505] text-[#f5f0e8] selection:bg-[#d4a853] selection:text-[#0d0505]">
      {/* Luxury Preloader */}
      <Preloader />

      {/* Smooth Trailing Gold Cursor */}
      <CustomCursor />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Ambient Luxury Hero */}
        <Hero />

        {/* Marquee Banner */}
        <MarqueeTicker />

        {/* Categories Section */}
        <CategoriesSection onSelectCategory={handleSelectCategory} />

        {/* About & Trust Section */}
        <AboutSection />

        {/* Filterable Curated Gallery */}
        <CollectionGallery
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          onOpenProductModal={handleOpenProduct}
        />

        {/* Customer Testimonials Slider */}
        <ReviewsSection />

        {/* Showroom Visit & Location */}
        <VisitSection />

        {/* Appointment & Enquiry Form */}
        <ContactForm
          initialInterest={contactInterest}
          initialMessage={contactMessage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Quick-View Details Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseProduct}
          onBookTrial={handleBookTrial}
        />
      )}

      {/* Floating Action Buttons */}
      <WhatsAppFloatingButton />
      <BackToTop />
    </div>
  );
}
