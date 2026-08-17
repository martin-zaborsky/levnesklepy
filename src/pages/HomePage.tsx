import React from 'react';
import { Hero } from '../components/Hero';
import { ProductCatalog } from '../components/ProductCatalog';
import { ConfiguratorSection } from '../components/ConfiguratorSection';
import { PriceListTable } from '../components/PriceListTable';
import { ProcessGuide } from '../components/ProcessGuide';
import { ServicesSection } from '../components/ServicesSection';
import { GallerySection } from '../components/GallerySection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
  currency: 'CZK' | 'EUR';
}

export const HomePage: React.FC<HomePageProps> = ({ currency }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero
        currency={currency}
        onOpenConfigurator={() => navigate('/konfigurator')}
        onScrollToPriceList={() => navigate('/cenik')}
        onOpenInquiry={() => navigate('/kontakt')}
      />

      {/* Highlights Catalog */}
      <ProductCatalog
        currency={currency}
        onSelectForConfig={(id) => navigate(`/konfigurator?model=${id}`)}
        onOpenInquiry={(name) => navigate(name ? `/kontakt?model=${encodeURIComponent(name)}` : '/kontakt')}
      />

      {/* 3D Configurator & Instant Price Calculator */}
      <ConfiguratorSection
        currency={currency}
        onOpenInquiryWithConfig={(summary, total) => navigate('/kontakt')}
      />

      {/* Official Price List Preview */}
      <PriceListTable
        currency={currency}
        onSelectForConfig={(id) => navigate(`/konfigurator?model=${id}`)}
        onOpenInquiry={() => navigate('/kontakt')}
      />

      {/* 5-Step Process & Excavation Blueprint */}
      <ProcessGuide />

      {/* Services & Guarantee */}
      <ServicesSection
        onOpenInquiry={() => navigate('/kontakt')}
      />

      {/* Realization Gallery */}
      <GallerySection />

      {/* FAQ & Customer Reviews */}
      <FaqSection />

      {/* Contact & Dispatcher Inquiry */}
      <ContactSection />
    </div>
  );
};
