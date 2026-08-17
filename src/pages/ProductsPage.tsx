import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Maximize2, 
  Layers, 
  Truck,
  Sparkles,
  Phone,
  Calculator
} from 'lucide-react';

interface ProductsPageProps {
  currency: 'CZK' | 'EUR';
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ currency }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'Všechny modely sklepa' },
    { id: 'klenute', label: 'Klenuté sklepy' },
    { id: 'ploche', label: 'Ploché sklepy' },
    { id: 'vinotéky', label: 'Vinné archivy & Moduly' },
    { id: 'nadrze', label: 'Jímky & Nádrže' }
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.dimensions.length.toString().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  const formattedPrice = (czk: number, eur: number) => {
    if (currency === 'CZK') {
      return `${czk.toLocaleString('cs-CZ')} Kč`;
    }
    return `${eur.toLocaleString('sk-SK')} €`;
  };

  return (
    <div className="py-12 sm:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D8] border border-[#D7CDC1] text-[#5D4037] text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-4 h-4 text-[#795548]" />
            Katalog prefabrikovaných železobetonových sklepů
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3E2723] tracking-tight font-medium">
            Betonové sklepy <span className="text-[#795548] italic font-semibold">přímo od výrobce</span>
          </h1>
          <p className="text-base sm:text-lg text-[#6D5D53] mt-4 leading-relaxed">
            Monolitické nádrže z certifikovaného vodostavebního betonu <strong>B30 W8</strong>. Usazení do připraveného výkopu naší hydraulickou rukou je u všech modelů <strong>ZDARMA</strong>.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#F4F1EE] border border-[#E7E0D8] rounded-3xl p-4 sm:p-6 mb-12 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-[#6D5D53] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Hledat podle rozměru (např. 300, 350, 400), názvu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-[#E7E0D8] text-[#3E2723] rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:ring-2 focus:ring-[#795548] focus:outline-none placeholder-[#A89F91]"
              />
            </div>

            {/* Quick stats badge */}
            <div className="flex items-center gap-4 text-xs text-[#5D4037]">
              <span className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#795548]" />
                Montáž ZDARMA
              </span>
              <span className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#795548]" />
                Záruka 5 let
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#795548] text-white shadow-xs'
                    : 'bg-white text-[#6D5D53] border border-[#E7E0D8] hover:text-[#3E2723] hover:bg-[#FDFBF7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white border border-[#E7E0D8] rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#D7CDC1] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Product Image Box */}
                <div className="relative h-60 overflow-hidden bg-[#E7E0D8]">
                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/80 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-[#E7E0D8] text-[11px] font-bold text-[#3E2723] px-3 py-1 rounded-full shadow-xs">
                    {prod.categoryLabel}
                  </span>

                  {/* Weight & Volume badge */}
                  <span className="absolute bottom-3 left-3 text-xs text-white/95 font-medium flex items-center gap-2">
                    <span>{prod.volumeM3} m³</span>
                    <span>•</span>
                    <span>{prod.weightTons} tun</span>
                  </span>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-[#3E2723] group-hover:text-[#795548] transition-colors leading-snug">
                    <Link to={`/sklepy/${prod.id}`}>
                      {prod.name}
                    </Link>
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#6D5D53] mt-2 leading-relaxed line-clamp-2">
                    {prod.subtitle}
                  </p>

                  {/* Dimensions Box */}
                  <div className="mt-4 p-3 bg-[#FDFBF7] rounded-2xl border border-[#E7E0D8] grid grid-cols-3 gap-2 text-center">
                    <div>
                      <span className="text-[10px] text-[#8D7B70] uppercase block">Délka</span>
                      <span className="font-bold text-[#3E2723] text-xs font-mono">{prod.dimensions.length} cm</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8D7B70] uppercase block">Šířka</span>
                      <span className="font-bold text-[#3E2723] text-xs font-mono">{prod.dimensions.width} cm</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8D7B70] uppercase block">Výška</span>
                      <span className="font-bold text-[#3E2723] text-xs font-mono">{prod.dimensions.height} cm</span>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="mt-4 space-y-1.5">
                    {prod.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#5D4037]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#795548] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price and Action Bar */}
              <div className="p-6 pt-0 border-t border-[#E7E0D8]/60 mt-4">
                <div className="flex items-baseline justify-between py-3">
                  <div>
                    <span className="text-[11px] text-[#6D5D53] block">Cena bez DPH:</span>
                    <span className="text-xl font-bold font-mono text-[#795548]">
                      {formattedPrice(prod.basePriceCZK, prod.basePriceEUR)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-[#6D5D53] block">Montáž do výkopu:</span>
                    <span className="text-xs font-bold text-[#5D4037] bg-[#E7E0D8] px-2 py-0.5 rounded-full border border-[#D7CDC1]">
                      ZDARMA
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Link
                    to={`/sklepy/${prod.id}`}
                    className="flex items-center justify-center gap-1 bg-[#F4F1EE] hover:bg-[#E7E0D8] text-[#3E2723] font-semibold py-2.5 px-3 rounded-full border border-[#E7E0D8] transition-colors text-xs"
                  >
                    <span>Detail & Výkres</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={`/konfigurator?model=${prod.id}`}
                    className="flex items-center justify-center gap-1.5 bg-[#795548] hover:bg-[#5D4037] text-white font-semibold py-2.5 px-3 rounded-full shadow-xs transition-colors text-xs"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Kalkulovat</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom dimensions banner */}
        <div className="mt-16 bg-[#F4F1EE] border border-[#E7E0D8] rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#E7E0D8] text-[#795548] flex items-center justify-center mx-auto">
            <Layers className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3E2723]">
            Nenašli jste přesný rozměr pro váš pozemek?
          </h2>
          <p className="text-sm text-[#6D5D53] max-w-xl mx-auto leading-relaxed">
            Vyrábíme také vícedílné propojené sklepní moduly, atypické vinné sklípky a retenční nádrže na zakázku. Náš statik pro vás připraví technický nákres do 24 hodin.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/kontakt"
              className="bg-[#795548] hover:bg-[#5D4037] text-white font-semibold px-6 py-3 rounded-full text-sm shadow-xs transition-all"
            >
              Poptat atypické řešení
            </Link>
            <a
              href="tel:+420797812444"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FDFBF7] text-[#3E2723] font-semibold px-6 py-3 rounded-full text-sm border border-[#E7E0D8] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#795548]" />
              <span>+420 797 812 444</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
