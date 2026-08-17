import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, ACCESSORIES, REGIONS_SHIPPING } from '../data/products';
import { CellarBlueprintPreview } from './CellarBlueprintPreview';
import { 
  Calculator, 
  Check, 
  Truck, 
  FileText, 
  Phone, 
  Send,
  Info, 
  CheckCircle2
} from 'lucide-react';

interface ConfiguratorSectionProps {
  currency: 'CZK' | 'EUR';
  onOpenInquiryWithConfig?: (configSummary: string, totalPrice: number) => void;
}

export const ConfiguratorSection: React.FC<ConfiguratorSectionProps> = ({
  currency
}) => {
  const [searchParams] = useSearchParams();
  const modelParam = searchParams.get('model');

  const [selectedProductId, setSelectedProductId] = useState<string>(() => {
    if (modelParam && PRODUCTS.some(p => p.id === modelParam)) {
      return modelParam;
    }
    return PRODUCTS[0].id;
  });

  useEffect(() => {
    if (modelParam && PRODUCTS.some(p => p.id === modelParam)) {
      setSelectedProductId(modelParam);
    }
  }, [modelParam]);
  const [selectedAccessoryIds, setSelectedAccessoryIds] = useState<string[]>([
    'dvere-ocel-zateplene',
    'ventilace-gravitacni',
    'izolace-hydrostop-extra'
  ]);
  const [selectedRegionIndex, setSelectedRegionIndex] = useState<number>(0);
  const [includeVat, setIncludeVat] = useState<boolean>(false);
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);

  // Form fields for quick lead submission
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerCity, setCustomerCity] = useState('');

  const currentProduct = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];
  const selectedAccessories = ACCESSORIES.filter(a => selectedAccessoryIds.includes(a.id));
  const currentRegion = REGIONS_SHIPPING[selectedRegionIndex] || REGIONS_SHIPPING[0];

  // Pricing calculations
  const basePrice = currency === 'CZK' ? currentProduct.basePriceCZK : currentProduct.basePriceEUR;
  const accessoriesPrice = selectedAccessories.reduce((sum, item) => {
    return sum + (currency === 'CZK' ? item.priceCZK : item.priceEUR);
  }, 0);
  const shippingPrice = currency === 'CZK' ? currentRegion.distancePriceCZK : currentRegion.distancePriceEUR;
  const assemblyPrice = 0; // Montáž ZDARMA!

  const subtotalWithoutVat = basePrice + accessoriesPrice + shippingPrice + assemblyPrice;
  const vatRate = 0.21;
  const vatAmount = subtotalWithoutVat * vatRate;
  const totalWithVat = subtotalWithoutVat + vatAmount;

  const displayPrice = includeVat ? totalWithVat : subtotalWithoutVat;

  const toggleAccessory = (id: string) => {
    if (selectedAccessoryIds.includes(id)) {
      setSelectedAccessoryIds(selectedAccessoryIds.filter(item => item !== id));
    } else {
      setSelectedAccessoryIds([...selectedAccessoryIds, id]);
    }
  };

  const handleSendConfigInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const formattedCurrency = (amount: number) => {
    if (currency === 'CZK') {
      return `${Math.round(amount).toLocaleString('cs-CZ')} Kč`;
    }
    return `${Math.round(amount).toLocaleString('sk-SK')} €`;
  };

  return (
    <section id="konfigurator" className="py-16 sm:py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E7E0D8]/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D8] border border-[#D7CDC1] text-[#5D4037] text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-4 h-4 text-[#795548]" />
            Interaktivní kalkulačka & 3D konfigurátor
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3E2723] tracking-tight font-medium">
            Nakonfigurujte si svůj sklep <span className="text-[#795548] italic font-semibold">za 2 minuty</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6D5D53] mt-4 leading-relaxed">
            Vyberte si rozměry, tvar klenby, zateplené dveře, schody i ventilaci. Získejte okamžitou a transparentní kalkulaci včetně dopravy a montáže zdarma.
          </p>
        </div>

        {/* Configurator Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Options Selection (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Model */}
            <div className="bg-white border border-[#E7E0D8] rounded-2xl p-5 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#795548] text-white font-bold text-xs flex items-center justify-center">
                    1
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#3E2723]">
                    Výběr typu a rozměru sklepa
                  </h3>
                </div>
                <span className="text-xs text-[#6D5D53]">
                  {PRODUCTS.length} modelů skladem
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRODUCTS.map((prod) => {
                  const isSelected = prod.id === selectedProductId;
                  const price = currency === 'CZK' ? prod.basePriceCZK : prod.basePriceEUR;
                  return (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => setSelectedProductId(prod.id)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer relative ${
                        isSelected
                          ? 'bg-[#F4F1EE] border-[#795548] shadow-sm ring-1 ring-[#795548]'
                          : 'bg-[#FDFBF7] border-[#E7E0D8] hover:border-[#D7CDC1] hover:bg-[#F4F1EE]/50'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#795548] text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                      <div className="text-xs font-semibold text-[#795548] mb-1">
                        {prod.categoryLabel}
                      </div>
                      <div className="font-bold text-[#3E2723] text-sm pr-6 leading-snug">
                        {prod.name}
                      </div>
                      <div className="text-xs text-[#6D5D53] mt-1">
                        {prod.dimensions.length} × {prod.dimensions.width} × {prod.dimensions.height} cm
                      </div>
                      <div className="mt-3 flex items-baseline justify-between pt-2 border-t border-[#E7E0D8]">
                        <span className="text-[11px] text-[#6D5D53]">Základní skelet:</span>
                        <span className="text-sm font-bold text-[#795548] font-mono">
                          {formattedCurrency(price)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Accessories & Equipment */}
            <div className="bg-white border border-[#E7E0D8] rounded-2xl p-5 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#795548] text-white font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#3E2723]">
                    Příslušenství, dveře a doplňky
                  </h3>
                </div>
                <span className="text-xs text-[#6D5D53]">
                  Vybráno {selectedAccessories.length} položek
                </span>
              </div>

              <div className="space-y-2.5">
                {ACCESSORIES.map((acc) => {
                  const isChecked = selectedAccessoryIds.includes(acc.id);
                  const price = currency === 'CZK' ? acc.priceCZK : acc.priceEUR;
                  return (
                    <div
                      key={acc.id}
                      onClick={() => toggleAccessory(acc.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                        isChecked
                          ? 'bg-[#F4F1EE] border-[#795548] shadow-sm'
                          : 'bg-[#FDFBF7] border-[#E7E0D8] hover:bg-[#F4F1EE]/50 hover:border-[#D7CDC1]'
                      }`}
                    >
                      <div className="flex items-center gap-3 pr-2">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-[#795548] text-white' : 'border border-[#D7CDC1] bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#3E2723] leading-tight">
                            {acc.name}
                          </div>
                          <div className="text-xs text-[#6D5D53] mt-0.5 line-clamp-1">
                            {acc.description}
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-sm font-bold text-[#795548] font-mono">
                          +{formattedCurrency(price)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Shipping Region */}
            <div className="bg-white border border-[#E7E0D8] rounded-2xl p-5 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#795548] text-white font-bold text-xs flex items-center justify-center">
                    3
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#3E2723]">
                    Lokalita dodání (Doprava s hydraulickou rukou)
                  </h3>
                </div>
                <span className="flex items-center gap-1 text-xs text-[#795548] font-semibold">
                  <Truck className="w-3.5 h-3.5" />
                  Do 2–4 dnů
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3E2723] mb-2">
                  Vyberte kraj nebo oblast dodání v ČR / SR:
                </label>
                <select
                  value={selectedRegionIndex}
                  onChange={(e) => setSelectedRegionIndex(Number(e.target.value))}
                  className="w-full bg-[#FDFBF7] border border-[#E7E0D8] text-[#3E2723] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#795548] transition-colors"
                >
                  {REGIONS_SHIPPING.map((reg, index) => (
                    <option key={reg.name} value={index} className="bg-white text-[#3E2723]">
                      {reg.name} ({formattedCurrency(currency === 'CZK' ? reg.distancePriceCZK : reg.distancePriceEUR)})
                    </option>
                  ))}
                </select>
                <p className="text-xs text-[#6D5D53] mt-2 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#795548]" />
                  Cena dopravy zahrnuje dovoz speciální nákladní soupravou a vykládku ramenem na pozemku.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Live 2D/3D Blueprint Preview & Price Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Live Interactive Blueprint */}
            <CellarBlueprintPreview
              product={currentProduct}
              selectedAccessories={selectedAccessories}
              currency={currency}
            />

            {/* Price Summary Breakdown Card */}
            <div className="bg-white border border-[#E7E0D8] rounded-2xl p-6 shadow-sm relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#E7E0D8]">
                <h4 className="text-base font-serif font-bold text-[#3E2723] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#795548]" />
                  Kalkulace vybrané sestavy
                </h4>

                {/* VAT Toggle */}
                <div className="flex items-center gap-2 text-xs">
                  <span className={!includeVat ? 'text-[#3E2723] font-bold' : 'text-[#6D5D53]'}>bez DPH</span>
                  <button
                    type="button"
                    onClick={() => setIncludeVat(!includeVat)}
                    className={`w-9 h-5 rounded-full transition-colors relative cursor-pointer ${
                      includeVat ? 'bg-[#795548]' : 'bg-[#D7CDC1]'
                    }`}
                  >
                    <span
                      className={`block w-3.5 h-3.5 rounded-full bg-white transition-transform absolute top-0.75 ${
                        includeVat ? 'left-5' : 'left-0.75'
                      }`}
                    />
                  </button>
                  <span className={includeVat ? 'text-[#3E2723] font-bold' : 'text-[#6D5D53]'}>s DPH (21%)</span>
                </div>
              </div>

              {/* Itemized list */}
              <div className="py-4 space-y-2.5 text-xs text-[#3E2723] border-b border-[#E7E0D8]">
                <div className="flex justify-between items-center">
                  <span className="text-[#6D5D53] truncate max-w-[200px]">{currentProduct.name}</span>
                  <span className="font-mono font-semibold text-[#3E2723]">
                    {formattedCurrency(basePrice)}
                  </span>
                </div>

                {selectedAccessories.map(acc => (
                  <div key={acc.id} className="flex justify-between items-center text-[#6D5D53]">
                    <span className="truncate max-w-[200px]">+{acc.name}</span>
                    <span className="font-mono text-[#3E2723]">
                      {formattedCurrency(currency === 'CZK' ? acc.priceCZK : acc.priceEUR)}
                    </span>
                  </div>
                ))}

                <div className="flex justify-between items-center text-[#6D5D53]">
                  <span className="truncate max-w-[200px]">Doprava ({currentRegion.name.split('(')[0]})</span>
                  <span className="font-mono text-[#3E2723]">
                    {formattedCurrency(shippingPrice)}
                  </span>
                </div>

                <div className="flex justify-between items-center bg-[#F4F1EE] px-3 py-2 rounded-xl border border-[#E7E0D8]">
                  <span className="text-[#5D4037] font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#795548]" />
                    Odborné usazení do výkopu
                  </span>
                  <span className="text-[#795548] font-bold font-mono">
                    ZDARMA (0 Kč)
                  </span>
                </div>
              </div>

              {/* Total Price Banner */}
              <div className="pt-4 pb-5 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-[#6D5D53] block">Celková cena {includeVat ? 's DPH 21%' : 'bez DPH'}:</span>
                  <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-[#795548]">
                    {formattedCurrency(displayPrice)}
                  </span>
                </div>
                <div className="text-right text-[11px] text-[#6D5D53]">
                  <span>Platba až při předání</span>
                  <span className="block text-[#5D4037] font-semibold">Dodání do 4 dnů</span>
                </div>
              </div>

              {/* Lead Capture or Quote Submission Box */}
              {!inquirySubmitted ? (
                <form onSubmit={handleSendConfigInquiry} className="space-y-3 pt-2">
                  <div className="text-xs font-semibold text-[#3E2723] mb-1">
                    Odešlete poptávku této konfigurace (Nezávazně):
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Vaše jméno a příjmení"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="bg-[#FDFBF7] border border-[#E7E0D8] text-[#3E2723] rounded-xl px-3 py-2.5 text-xs focus:ring-2 focus:ring-[#795548] focus:outline-none placeholder-[#A89F91]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Telefon (+420 / +421)"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="bg-[#FDFBF7] border border-[#E7E0D8] text-[#3E2723] rounded-xl px-3 py-2.5 text-xs focus:ring-2 focus:ring-[#795548] focus:outline-none placeholder-[#A89F91]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Místo realizace / Obec / PSČ"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    className="w-full bg-[#FDFBF7] border border-[#E7E0D8] text-[#3E2723] rounded-xl px-3 py-2.5 text-xs focus:ring-2 focus:ring-[#795548] focus:outline-none placeholder-[#A89F91]"
                  />
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#795548] hover:bg-[#5D4037] text-white font-semibold py-3 px-4 rounded-full shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99] text-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Získat oficiální nabídku & rezervovat termín</span>
                  </button>
                </form>
              ) : (
                <div className="bg-[#F4F1EE] border border-[#795548]/40 rounded-2xl p-5 text-center space-y-2">
                  <div className="w-10 h-10 bg-[#795548] rounded-full flex items-center justify-center mx-auto text-white">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h5 className="font-serif font-bold text-[#3E2723] text-base">Poptávka úspěšně odeslána!</h5>
                  <p className="text-xs text-[#6D5D53]">
                    Děkujeme, pane/paní <strong className="text-[#3E2723]">{customerName}</strong>. Náš dispečer vás bude kontaktovat na čísle <strong className="text-[#3E2723]">{customerPhone}</strong> s potvrzením termínu dodání a přesným harmonogramem.
                  </p>
                  <button
                    type="button"
                    onClick={() => setInquirySubmitted(false)}
                    className="text-xs text-[#795548] font-semibold hover:underline pt-2 inline-block cursor-pointer"
                  >
                    Upravit konfiguraci
                  </button>
                </div>
              )}

              {/* Direct telephone shortcut */}
              <div className="mt-4 pt-3 border-t border-[#E7E0D8] text-center">
                <p className="text-xs text-[#6D5D53]">
                  Nebo volejte přímo našim technikům:
                </p>
                <a
                  href="tel:+420797812444"
                  className="inline-flex items-center gap-2 font-bold text-[#3E2723] text-sm hover:text-[#795548] transition-colors mt-1"
                >
                  <Phone className="w-4 h-4 text-[#795548]" />
                  <span>+420 797 812 444</span>
                  <span className="text-[11px] text-[#6D5D53] font-normal">(Po–Ne 7:00–20:00)</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
