import React, { useState } from 'react';
import { PRODUCTS, ACCESSORIES } from '../data/products';
import { 
  FileSpreadsheet, 
  Printer, 
  CheckCircle2, 
  Search, 
  ArrowRight,
  ShieldCheck, 
  Phone
} from 'lucide-react';

interface PriceListTableProps {
  currency: 'CZK' | 'EUR';
  onSelectForConfig: (productId: string) => void;
  onOpenInquiry: () => void;
}

export const PriceListTable: React.FC<PriceListTableProps> = ({
  currency,
  onSelectForConfig,
  onOpenInquiry
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceTab, setPriceTab] = useState<'sklepy' | 'doplnky'>('sklepy');

  const filteredProducts = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.dimensions.length.toString().includes(searchTerm)
  );

  const formattedCurrency = (czk: number, eur: number, withVat = false) => {
    const factor = withVat ? 1.21 : 1;
    if (currency === 'CZK') {
      return `${Math.round(czk * factor).toLocaleString('cs-CZ')} Kč`;
    }
    return `${Math.round(eur * factor).toLocaleString('sk-SK')} €`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="cenik" className="py-16 sm:py-24 bg-[#FDFBF7] relative border-t border-[#E7E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D8] border border-[#D7CDC1] text-[#5D4037] text-xs font-bold uppercase tracking-wider mb-3">
              <FileSpreadsheet className="w-3.5 h-3.5 text-[#795548]" />
              Oficiální ceník výrobce 2026
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#3E2723] tracking-tight font-medium">
              Transparentní ceník <span className="text-[#795548] italic font-semibold">bez skrytých poplatků</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6D5D53] mt-2 max-w-2xl">
              Všechny ceny uvádíme jak bez DPH pro firmy, tak s DPH (21%). <strong>Montáž a usazení do výkopu je u nás vždy ZDARMA.</strong>
            </p>
          </div>

          {/* Action pills: Print / Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex bg-[#F4F1EE] border border-[#E7E0D8] rounded-full p-1 text-xs font-semibold">
              <button
                onClick={() => setPriceTab('sklepy')}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  priceTab === 'sklepy' ? 'bg-[#795548] text-white font-bold shadow-sm' : 'text-[#6D5D53] hover:text-[#3E2723]'
                }`}
              >
                Betonové sklepy
              </button>
              <button
                onClick={() => setPriceTab('doplnky')}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  priceTab === 'doplnky' ? 'bg-[#795548] text-white font-bold shadow-sm' : 'text-[#6D5D53] hover:text-[#3E2723]'
                }`}
              >
                Příslušenství & Dveře
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-white hover:bg-[#F4F1EE] text-[#3E2723] border border-[#E7E0D8] px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer shadow-sm"
            >
              <Printer className="w-4 h-4 text-[#795548]" />
              <span>Vytisknout / PDF</span>
            </button>
          </div>
        </div>

        {/* Filter / Search bar */}
        <div className="mb-6 flex items-center justify-between gap-4 bg-[#F4F1EE] border border-[#E7E0D8] rounded-2xl p-3">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#6D5D53] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Vyhledat model, rozměr nebo typ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-[#E7E0D8] text-[#3E2723] rounded-xl pl-10 pr-4 py-2 text-xs focus:ring-2 focus:ring-[#795548] focus:outline-none placeholder:text-[#A89F91]"
            />
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs text-[#6D5D53]">
            <span className="flex items-center gap-1.5 text-[#5D4037] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#795548]" />
              Montáž do výkopu: 0 Kč
            </span>
            <span className="flex items-center gap-1.5 text-[#6D5D53] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#795548]" />
              Záruka 5 let
            </span>
          </div>
        </div>

        {/* Products Table View */}
        {priceTab === 'sklepy' ? (
          <div className="border border-[#E7E0D8] rounded-2xl overflow-hidden shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#F4F1EE] border-b border-[#E7E0D8] text-[#5D4037] uppercase tracking-wider font-bold">
                    <th className="py-4 px-4 sm:px-6">Model a provedení</th>
                    <th className="py-4 px-3">Rozměry (D × Š × V)</th>
                    <th className="py-4 px-3">Objem / Váha</th>
                    <th className="py-4 px-3">Montáž do výkopu</th>
                    <th className="py-4 px-3 text-right">Cena bez DPH</th>
                    <th className="py-4 px-3 text-right">Cena s DPH (21%)</th>
                    <th className="py-4 px-4 sm:px-6 text-right">Akce</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E0D8] bg-white">
                  {filteredProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-[#FDFBF7] transition-colors group">
                      {/* Name & Category */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="font-bold text-[#3E2723] text-sm group-hover:text-[#795548] transition-colors">
                          {p.name}
                        </div>
                        <div className="text-[11px] text-[#6D5D53] mt-0.5">
                          {p.categoryLabel} • {p.concreteClass.split(' ')[0]}
                        </div>
                      </td>

                      {/* Dimensions */}
                      <td className="py-4 px-3 font-mono text-[#3E2723]">
                        <span className="font-semibold">{p.dimensions.length} × {p.dimensions.width} × {p.dimensions.height}</span> cm
                      </td>

                      {/* Volume & Weight */}
                      <td className="py-4 px-3 text-[#6D5D53]">
                        <span className="font-mono font-semibold text-[#3E2723]">{p.volumeM3} m³</span>
                        <span className="text-[#8D7B70] text-[11px] block">({p.weightTons} tun)</span>
                      </td>

                      {/* Assembly */}
                      <td className="py-4 px-3">
                        <span className="inline-flex items-center gap-1 font-bold text-[#5D4037] bg-[#E7E0D8] px-2.5 py-0.5 rounded-full text-[11px] border border-[#D7CDC1]">
                          <CheckCircle2 className="w-3 h-3 text-[#795548]" />
                          ZDARMA
                        </span>
                      </td>

                      {/* Price without VAT */}
                      <td className="py-4 px-3 text-right font-mono font-bold text-base text-[#795548]">
                        {formattedCurrency(p.basePriceCZK, p.basePriceEUR, false)}
                      </td>

                      {/* Price with VAT */}
                      <td className="py-4 px-3 text-right font-mono text-[#6D5D53] text-xs">
                        {formattedCurrency(p.basePriceCZK, p.basePriceEUR, true)}
                      </td>

                      {/* Action */}
                      <td className="py-4 px-4 sm:px-6 text-right">
                        <button
                          onClick={() => onSelectForConfig(p.id)}
                          className="inline-flex items-center gap-1.5 bg-[#F4F1EE] hover:bg-[#795548] text-[#3E2723] hover:text-white font-semibold py-2 px-3.5 rounded-full border border-[#E7E0D8] hover:border-[#795548] transition-all text-xs cursor-pointer shadow-sm"
                        >
                          <span>Kalkulovat</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Accessories Table View */
          <div className="border border-[#E7E0D8] rounded-2xl overflow-hidden shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#F4F1EE] border-b border-[#E7E0D8] text-[#5D4037] uppercase tracking-wider font-bold">
                    <th className="py-4 px-4 sm:px-6">Položka příslušenství</th>
                    <th className="py-4 px-3">Kategorie</th>
                    <th className="py-4 px-3">Popis</th>
                    <th className="py-4 px-3 text-right">Cena bez DPH</th>
                    <th className="py-4 px-4 sm:px-6 text-right">Cena s DPH (21%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E0D8] bg-white">
                  {ACCESSORIES.map((acc) => (
                    <tr key={acc.id} className="hover:bg-[#FDFBF7] transition-colors">
                      <td className="py-4 px-4 sm:px-6 font-bold text-[#3E2723] text-sm">
                        {acc.name}
                      </td>
                      <td className="py-4 px-3">
                        <span className="text-[11px] font-semibold text-[#5D4037] bg-[#E7E0D8] px-2.5 py-0.5 rounded-full uppercase border border-[#D7CDC1]">
                          {acc.category}
                        </span>
                      </td>
                      <td className="py-4 px-3 text-[#6D5D53] max-w-md">
                        {acc.description}
                      </td>
                      <td className="py-4 px-3 text-right font-mono font-bold text-[#795548] text-sm">
                        {formattedCurrency(acc.priceCZK, acc.priceEUR, false)}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-right font-mono text-[#6D5D53] text-xs">
                        {formattedCurrency(acc.priceCZK, acc.priceEUR, true)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Bottom Trust Banner */}
        <div className="mt-8 bg-[#F4F1EE] border border-[#E7E0D8] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-[#3E2723]">
              Potřebujete individuální rozměr nebo atypickou sestavu?
            </h4>
            <p className="text-xs sm:text-sm text-[#6D5D53] max-w-2xl">
              Vyrábíme také vícedílné propojené sklepy, komory pro vinařství a nádrže na míru. Připravíme vám bezplatnou cenovou nabídku do 24 hodin.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenInquiry}
              className="bg-[#795548] hover:bg-[#5D4037] text-white font-semibold px-6 py-3 rounded-full text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              Vyžádat nabídku na míru
            </button>
            <a
              href="tel:+420797812444"
              className="flex items-center gap-2 bg-white hover:bg-[#FDFBF7] text-[#3E2723] font-semibold px-5 py-3 rounded-full text-xs sm:text-sm border border-[#E7E0D8] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#795548]" />
              <span>+420 797 812 444</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
