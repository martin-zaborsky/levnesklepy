import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, Product } from '../data/products';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Info, 
  Check, 
  X,
  Flame,
  ExternalLink
} from 'lucide-react';

interface ProductCatalogProps {
  onSelectForConfig: (productId: string) => void;
  onOpenInquiry: (productName: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectForConfig
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'Všechny modely' },
    { id: 'kupolove', label: 'Kupolové sklepy' },
    { id: 'ploche-bok', label: 'Ploché – vstup z boku' },
    { id: 'ploche-shora', label: 'Ploché – vstup shora' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const formattedCurrency = (priceCZK: number) => {
    return `${priceCZK.toLocaleString('cs-CZ')} Kč`;
  };

  return (
    <section id="katalog" className="py-16 sm:py-24 bg-[#F4F1EE] border-y border-[#E7E0D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D8] border border-[#D7CDC1] text-[#5D4037] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#795548]" />
              Katalog produktů
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#3E2723] tracking-tight font-medium">
              Vyberte si ideální <span className="text-[#795548] italic font-semibold">betonový sklep</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6D5D53] mt-2 max-w-xl">
              Monolitické odlitky z vodostavebního betonu B30/B35 W8 s ocelovou armaturou. Žádné netěsné spáry, 100% vodotěsnost.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#795548] text-white shadow-sm'
                    : 'bg-white text-[#6D5D53] border border-[#E7E0D8] hover:text-[#3E2723] hover:bg-[#FDFBF7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#E7E0D8] hover:border-[#D7CDC1] rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group"
            >
              {/* Product Image */}
              <div className="relative h-52 overflow-hidden bg-[#E7E0D8]">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/60 via-transparent to-transparent opacity-60" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5D4037] bg-[#E7E0D8] px-2.5 py-0.5 rounded-full shadow-sm border border-[#D7CDC1]">
                    {product.categoryLabel}
                  </span>
                  {product.isPopular && (
                    <span className="text-[10px] font-bold text-white bg-[#795548] px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                      <Flame className="w-3 h-3 fill-white" />
                      Nejprodávanější
                    </span>
                  )}
                </div>

                <div className="absolute bottom-2.5 right-3 bg-white/90 backdrop-blur-sm border border-[#E7E0D8] rounded-lg px-2 py-0.5 text-[11px] text-[#3E2723] font-mono shadow-sm">
                  {product.dimensions.length} × {product.dimensions.width} × {product.dimensions.height} cm
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#3E2723] group-hover:text-[#795548] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#6D5D53] mt-1 line-clamp-2 leading-relaxed">
                    {product.subtitle}
                  </p>

                  {/* Quick specs pill row */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-[#E7E0D8] text-center">
                    <div className="bg-[#F4F1EE] rounded-xl p-2 border border-[#E7E0D8]/60">
                      <span className="text-[9px] text-[#6D5D53] block uppercase">Objem</span>
                      <span className="text-xs font-bold text-[#3E2723] font-mono">{product.volumeM3} m³</span>
                    </div>
                    <div className="bg-[#F4F1EE] rounded-xl p-2 border border-[#E7E0D8]/60">
                      <span className="text-[9px] text-[#6D5D53] block uppercase">Hmotnost</span>
                      <span className="text-xs font-bold text-[#3E2723] font-mono">{product.weightTons} t</span>
                    </div>
                    <div className="bg-[#F4F1EE] rounded-xl p-2 border border-[#E7E0D8]/60">
                      <span className="text-[9px] text-[#6D5D53] block uppercase">Montáž</span>
                      <span className="text-xs font-bold text-[#795548]">ZDARMA</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="mt-3 space-y-1.5 text-xs text-[#6D5D53]">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#795548] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA Actions */}
                <div className="pt-4 border-t border-[#E7E0D8] space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-[#6D5D53] block">Cena skeletu bez DPH:</span>
                      <span className="text-xl font-bold font-mono text-[#795548]">
                        {formattedCurrency(product.basePriceCZK)}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#5D4037] font-semibold bg-[#E7E0D8] px-2.5 py-0.5 rounded-full border border-[#D7CDC1]">
                      Skladem
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to={`/sklepy/${product.id}`}
                      className="w-full flex items-center justify-center gap-1.5 bg-[#F4F1EE] hover:bg-[#E7E0D8] text-[#3E2723] text-xs font-semibold py-2.5 px-3 rounded-xl border border-[#E7E0D8] transition-colors"
                    >
                      <Info className="w-3.5 h-3.5 text-[#795548]" />
                      <span>Detail & Výkres</span>
                    </Link>

                    <button
                      onClick={() => onSelectForConfig(product.id)}
                      className="w-full flex items-center justify-center gap-1.5 bg-[#795548] hover:bg-[#5D4037] text-white text-xs font-semibold py-2.5 px-3 rounded-xl shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>Kalkulace</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Technical Sheet Modal */}
      {modalProduct && (
        <div className="fixed inset-0 z-50 bg-[#3E2723]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FDFBF7] border border-[#E7E0D8] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            
            <button
              onClick={() => setModalProduct(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-[#F4F1EE] text-[#6D5D53] hover:text-[#3E2723] hover:bg-[#E7E0D8] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#795548] text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Technická specifikace výrobku</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#3E2723] font-medium">
              {modalProduct.name}
            </h3>
            <p className="text-sm text-[#6D5D53] mt-2 leading-relaxed">
              {modalProduct.description}
            </p>

            {/* Technical Parameters Table */}
            <div className="mt-6 border border-[#E7E0D8] rounded-2xl overflow-hidden bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <tbody className="divide-y divide-[#E7E0D8]">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-[#6D5D53]">Vnější rozměry (D × Š × V):</td>
                    <td className="px-4 py-3 text-[#3E2723] font-mono font-medium">{modalProduct.dimensions.length} × {modalProduct.dimensions.width} × {modalProduct.dimensions.height} cm</td>
                  </tr>
                  {modalProduct.dimensions.innerLength && (
                    <tr>
                      <td className="px-4 py-3 font-semibold text-[#6D5D53]">Vnitřní čisté rozměry:</td>
                      <td className="px-4 py-3 text-[#3E2723] font-mono font-medium">{modalProduct.dimensions.innerLength} × {modalProduct.dimensions.innerWidth} × {modalProduct.dimensions.innerHeight} cm</td>
                    </tr>
                  )}
                  <tr>
                    <td className="px-4 py-3 font-semibold text-[#6D5D53]">Vnitřní objem:</td>
                    <td className="px-4 py-3 text-[#3E2723] font-mono font-medium">{modalProduct.volumeM3} m³</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-[#6D5D53]">Hmotnost skeletu:</td>
                    <td className="px-4 py-3 text-[#795548] font-bold font-mono">{modalProduct.weightTons} tun</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-[#6D5D53]">Tloušťka stěny a dna:</td>
                    <td className="px-4 py-3 text-[#3E2723]">{modalProduct.wallThicknessCm} cm (monolitické lití)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-[#6D5D53]">Třída a atest betonu:</td>
                    <td className="px-4 py-3 text-[#3E2723]">{modalProduct.concreteClass}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-[#6D5D53]">Armování:</td>
                    <td className="px-4 py-3 text-[#3E2723]">Žebírková ocel Bst500S (svařovaná prostorová armokoš)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-[#6D5D53]">Příprava prostupů:</td>
                    <td className="px-4 py-3 text-[#3E2723]">2× gravitační větrací otvor DN 110 + prostup na kabely</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-[#6D5D53]">Záruční doba:</td>
                    <td className="px-4 py-3 text-[#795548] font-bold">5 let (na těsnost a konstrukci)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Key Benefits */}
            <div className="mt-5 space-y-2">
              <h4 className="text-xs font-bold text-[#5D4037] uppercase tracking-wider">Klíčové vlastnosti:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {modalProduct.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#3E2723] bg-white p-2.5 rounded-xl border border-[#E7E0D8]">
                    <Check className="w-3.5 h-3.5 text-[#795548] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-[#E7E0D8] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-xs text-[#6D5D53] block">Základní cena:</span>
                <span className="text-xl font-bold text-[#795548] font-mono">
                  {formattedCurrency(modalProduct.basePriceCZK)} <span className="text-xs font-normal text-[#6D5D53]">bez DPH</span>
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const id = modalProduct.id;
                    setModalProduct(null);
                    onSelectForConfig(id);
                  }}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#795548] hover:bg-[#5D4037] text-white text-xs font-semibold py-3 px-6 rounded-full cursor-pointer shadow-sm transition-colors"
                >
                  <span>Otevřít v konfigurátoru</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
