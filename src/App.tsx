import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ConfiguratorPage } from './pages/ConfiguratorPage';
import { PriceListPage } from './pages/PriceListPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessPage } from './pages/ProcessPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Calculator, Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3E2723] flex flex-col font-sans selection:bg-[#795548] selection:text-white">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Top Navigation Bar with exact Logo & Routing Links */}
      <Navbar />

      {/* Standalone Route Pages */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sklepy" element={<ProductsPage />} />
          <Route path="/sklepy/:id" element={<ProductDetailPage />} />
          <Route path="/konfigurator" element={<ConfiguratorPage />} />
          <Route path="/cenik" element={<PriceListPage />} />
          <Route path="/sluzby" element={<ServicesPage />} />
          <Route path="/postup" element={<ProcessPage />} />
          <Route path="/priprava-vykopu" element={<ProcessPage />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Complete Footer with full sitemap */}
      <Footer />

      {/* Mobile Floating Quick Action Pill */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex items-center gap-2">
        <a
          href="tel:+420797812444"
          className="flex-1 flex items-center justify-center gap-1.5 bg-white border border-[#E7E0D8] text-[#3E2723] font-semibold py-3 rounded-full shadow-lg text-xs"
        >
          <Phone className="w-4 h-4 text-[#795548]" />
          <span>Zavolat dispečink</span>
        </a>
        <Link
          to="/konfigurator"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#795548] hover:bg-[#5D4037] text-white font-semibold py-3 rounded-full shadow-lg text-xs cursor-pointer"
        >
          <Calculator className="w-4 h-4" />
          <span>Kalkulátor & 3D</span>
        </Link>
      </div>
    </div>
  );
}
