import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, ACCESSORIES } from '../data/products';
import { CellarBlueprintPreview } from '../components/CellarBlueprintPreview';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Calculator, 
  Phone, 
  Hammer
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const [activeTab, setActiveTab] = useState<'blueprint' | 'photo'>('blueprint');

  const formattedPrice = (czk: number, vat = false) => {
    const factor = vat ? 1.21 : 1;
    return `${Math.round(czk * factor).toLocaleString('cs-CZ')} Kč`;
  };

  return (
    <div className="py-10 sm:py-16 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#6D5D53] mb-8">
          <Link to="/" className="hover:text-[#795548] transition-colors">Úvod</Link>
          <span>/</span>
          <Link to="/sklepy" className="hover:text-[#795548] transition-colors">Katalog sklepů</Link>
          <span>/</span>
          <span className="text-[#3E2723] font-bold">{product.name}</span>
        </div>

        {/* Back button */}
        <div className="mb-6">
          <Link
            to="/sklepy"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5D4037] hover:text-[#795548] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zpět do katalogu všech sklepů</span>
          </Link>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Visual Showcase & Technical Drawings (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Visual Box */}
            <div className="bg-white border border-[#E7E0D8] rounded-3xl overflow-hidden shadow-sm p-4 sm:p-6">
              
              {/* Tab selector between 2D Blueprint and Photo */}
              <div className="flex items-center justify-between mb-4 border-b border-[#E7E0D8] pb-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('blueprint')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'blueprint'
                        ? 'bg-[#795548] text-white shadow-xs'
                        : 'bg-[#F4F1EE] text-[#6D5D53] hover:text-[#3E2723]'
                    }`}
                  >
                    Technický řez & Půdorys
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('photo')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'photo'
                        ? 'bg-[#795548] text-white shadow-xs'
                        : 'bg-[#F4F1EE] text-[#6D5D53] hover:text-[#3E2723]'
                    }`}
                  >
                    Reálná fotografie
                  </button>
                </div>

                <span className="text-[11px] text-[#8D7B70] hidden sm:inline">
                  Měřítko 1:50 • Norma ČSN EN 206
                </span>
              </div>

              {activeTab === 'blueprint' ? (
                <div className="p-2">
                  <CellarBlueprintPreview
                    product={product}
                    selectedAccessories={ACCESSORIES.slice(0, 2)}
                  />
                </div>
              ) : (
                <div className="relative h-[380px] rounded-2xl overflow-hidden bg-[#E7E0D8]">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Excavation and Preparation Guide for this specific model */}
            <div className="bg-[#F4F1EE] border border-[#E7E0D8] rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5D4037]">
                <Hammer className="w-4 h-4 text-[#795548]" />
                Doporučený výkop a podloží pro tento model ({product.dimensions.length} × {product.dimensions.width} cm)
              </div>
              <h3 className="text-xl font-serif font-bold text-[#3E2723]">
                Pokyny pro bagristu & přípravu jámy
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#6D5D53]">
                <div className="bg-white p-4 rounded-2xl border border-[#E7E0D8] space-y-1">
                  <span className="font-bold text-[#3E2723] block">Doporučený rozměr jámy:</span>
                  <span>{product.dimensions.length + 100} × {product.dimensions.width + 100} cm</span>
                  <span className="text-[10px] text-[#8D7B70] block">(50 cm manipulační prostor po obvodu)</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#E7E0D8] space-y-1">
                  <span className="font-bold text-[#3E2723] block">Hloubka výkopu:</span>
                  <span>{product.dimensions.height + 20} cm</span>
                  <span className="text-[10px] text-[#8D7B70] block">(včetně 15 cm štěrkového lože frakce 8–16)</span>
                </div>
              </div>
              <p className="text-xs text-[#6D5D53] leading-relaxed">
                Štěrkové lože na dně výkopu musí být zhutněno a vyrovnáno do vodoroviny (vodováhou s tolerancí do 1 cm). Naše nákladní auto s hydraulickou rukou usadí skelet během 35 minut.
              </p>
            </div>

          </div>

          {/* Right Column: Pricing, Technical Specs & Order CTA (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Price & Specs Card */}
            <div className="bg-white border border-[#E7E0D8] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div>
                <span className="inline-block bg-[#E7E0D8] text-[#5D4037] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 border border-[#D7CDC1]">
                  {product.categoryLabel}
                </span>
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#3E2723]">
                  {product.name}
                </h1>
                <p className="text-xs sm:text-sm text-[#6D5D53] mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price Banner */}
              <div className="p-4 bg-[#FDFBF7] rounded-2xl border border-[#E7E0D8] flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-[#6D5D53] block">Cena bez DPH:</span>
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-[#795548]">
                    {formattedPrice(product.basePriceCZK, false)}
                  </span>
                  <span className="text-[11px] text-[#8D7B70] block mt-0.5">
                    ({formattedPrice(product.basePriceCZK, true)} s DPH 21%)
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#5D4037] bg-[#E7E0D8] px-3 py-1 rounded-full border border-[#D7CDC1]">
                    Montáž ZDARMA
                  </span>
                  <span className="text-[10px] text-[#8D7B70] block mt-1">Expedice do 4 dnů</span>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-2.5 text-xs">
                <h4 className="font-bold text-[#3E2723] uppercase tracking-wider text-[11px] border-b border-[#E7E0D8] pb-1">
                  Technické parametry skeletu:
                </h4>
                
                <div className="flex justify-between py-1.5 border-b border-[#E7E0D8]/60">
                  <span className="text-[#6D5D53]">Vnější rozměry (D × Š × V):</span>
                  <span className="font-bold font-mono text-[#3E2723]">{product.dimensions.length} × {product.dimensions.width} × {product.dimensions.height} cm</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#E7E0D8]/60">
                  <span className="text-[#6D5D53]">Vnitřní užitný objem:</span>
                  <span className="font-bold font-mono text-[#3E2723]">{product.volumeM3} m³</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#E7E0D8]/60">
                  <span className="text-[#6D5D53]">Hmotnost prefabrikátu:</span>
                  <span className="font-bold font-mono text-[#3E2723]">{product.weightTons} tun</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#E7E0D8]/60">
                  <span className="text-[#6D5D53]">Třída betonu:</span>
                  <span className="font-bold text-[#3E2723]">{product.concreteClass}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#E7E0D8]/60">
                  <span className="text-[#6D5D53]">Tloušťka stěn a stropu:</span>
                  <span className="font-bold text-[#3E2723]">{product.wallThicknessCm} cm</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-[#E7E0D8]/60">
                  <span className="text-[#6D5D53]">Hydroizolační úprava:</span>
                  <span className="font-bold text-[#3E2723]">Hydrostop asfaltový nátěr (2 vrstvy)</span>
                </div>

                <div className="flex justify-between py-1.5">
                  <span className="text-[#6D5D53]">Záruční doba:</span>
                  <span className="font-bold text-[#795548]">5 let na těsnost a skelet</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <Link
                  to={`/konfigurator?model=${product.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#795548] hover:bg-[#5D4037] text-white font-semibold py-3.5 px-6 rounded-full shadow-xs transition-all text-sm"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Otevřít v 3D konfigurátoru s doplňky</span>
                </Link>

                <Link
                  to={`/kontakt?model=${encodeURIComponent(product.name)}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#F4F1EE] hover:bg-[#E7E0D8] text-[#3E2723] font-semibold py-3 px-6 rounded-full border border-[#E7E0D8] transition-colors text-sm"
                >
                  <span>Poptat tento model (Nezávazně)</span>
                </Link>
              </div>

              {/* Direct telephone shortcut */}
              <div className="pt-3 border-t border-[#E7E0D8] text-center">
                <p className="text-xs text-[#6D5D53]">Dotaz k dodání a termínům:</p>
                <a
                  href="tel:+420797812444"
                  className="inline-flex items-center gap-2 font-bold text-[#3E2723] hover:text-[#795548] text-sm mt-1"
                >
                  <Phone className="w-4 h-4 text-[#795548]" />
                  <span>+420 797 812 444</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
