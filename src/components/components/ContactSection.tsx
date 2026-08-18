import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { 
  Phone, 
  Mail, 
  Send, 
  Check, 
  Clock, 
  Truck
} from 'lucide-react';

interface ContactSectionProps {
  initialProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProduct
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || PRODUCTS[0].name);
  const [note, setNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-[#F4F1EE] border-t border-[#E7E0D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D8] border border-[#D7CDC1] text-[#5D4037] text-xs font-bold uppercase tracking-wider mb-4">
            <Phone className="w-4 h-4 text-[#795548]" />
            Nezávazná poptávka & Kontakt
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3E2723] tracking-tight font-medium">
            Spojte se s naším <span className="text-[#795548] italic font-semibold">dispečinkem</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6D5D53] mt-4 leading-relaxed">
            Máte dotaz k rozměrům, příjezdu nákladního auta nebo chcete rezervovat termín dodání? Vyplňte formulář nebo nám přímo zavolejte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-white border border-[#E7E0D8] rounded-2xl p-6 relative overflow-hidden group hover:border-[#D7CDC1] transition-colors shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F4F1EE] border border-[#E7E0D8] flex items-center justify-center text-[#795548] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#6D5D53] font-semibold uppercase tracking-wider block">
                    Telefonický dispečink & objednávky
                  </span>
                  <a
                    href="tel:+420797812444"
                    className="text-xl sm:text-2xl font-serif font-bold text-[#3E2723] hover:text-[#795548] transition-colors block mt-1"
                  >
                    +420 797 812 444
                  </a>
                  <div className="flex items-center gap-1.5 text-xs text-[#6D5D53] mt-2">
                    <Clock className="w-3.5 h-3.5 text-[#795548]" />
                    <span>Pondělí – Neděle: 7:00 – 20:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-[#E7E0D8] rounded-2xl p-6 group hover:border-[#D7CDC1] transition-colors shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F4F1EE] border border-[#E7E0D8] flex items-center justify-center text-[#795548] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[#6D5D53] font-semibold uppercase tracking-wider block">
                    Elektronická pošta & poptávky
                  </span>
                  <a
                    href="mailto:info@levnesklepy.cz"
                    className="text-lg sm:text-xl font-serif font-bold text-[#3E2723] hover:text-[#795548] transition-colors block mt-1"
                  >
                    info@levnesklepy.cz
                  </a>
                  <p className="text-xs text-[#6D5D53] mt-1">
                    Cenové nabídky odesíláme obvykle do 2–4 hodin.
                  </p>
                </div>
              </div>
            </div>

            {/* Coverage Summary */}
            <div className="bg-white border border-[#E7E0D8] rounded-2xl p-6 space-y-3 shadow-sm">
              <h4 className="text-sm font-serif font-bold text-[#3E2723] flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#795548]" />
                Dopravní a montážní pokrytí
              </h4>
              <p className="text-xs text-[#6D5D53] leading-relaxed">
                Zavážíme celou <strong>Českou republiku</strong> (všechny kraje) i <strong>Slovensko</strong> (Západní, Střední a Východní Slovensko) přímo z našich výrobních a expedičních skladů.
              </p>
              <div className="pt-2 border-t border-[#E7E0D8] text-[11px] text-[#5D4037] font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#795548] stroke-[3]" />
                <span>Montáž s hydraulickou rukou ZDARMA v ceně sklepa</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E7E0D8] rounded-3xl p-6 sm:p-10 shadow-sm">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-[#3E2723]">
                  Rychlý poptávkový formulář
                </h3>
                <p className="text-xs text-[#6D5D53]">
                  Vyplňte základní údaje a my vám obratem připravíme nezávaznou kalkulaci na míru.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2723] mb-1.5">
                      Jméno a příjmení *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="např. Jan Novák"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#FDFBF7] border border-[#E7E0D8] text-[#3E2723] rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#795548] focus:outline-none placeholder-[#A89F91]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3E2723] mb-1.5">
                      Telefonní číslo *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+420 / +421 ..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FDFBF7] border border-[#E7E0D8] text-[#3E2723] rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#795548] focus:outline-none placeholder-[#A89F91]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3E2723] mb-1.5">
                      E-mailová adresa
                    </label>
                    <input
                      type="email"
                      placeholder="vas@email.cz"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FDFBF7] border border-[#E7E0D8] text-[#3E2723] rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#795548] focus:outline-none placeholder-[#A89F91]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3E2723] mb-1.5">
                      Místo realizace / Obec / PSČ
                    </label>
                    <input
                      type="text"
                      placeholder="např. Benešov, PSČ 256 01"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#FDFBF7] border border-[#E7E0D8] text-[#3E2723] rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#795548] focus:outline-none placeholder-[#A89F91]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3E2723] mb-1.5">
                    Vyberte požadovaný typ nebo rozměr sklepa:
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full bg-[#FDFBF7] border border-[#E7E0D8] text-[#3E2723] rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#795548] focus:outline-none"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name} className="bg-white text-[#3E2723]">
                        {prod.name} ({prod.dimensions.length} × {prod.dimensions.width} × {prod.dimensions.height} cm)
                      </option>
                    ))}
                    <option value="Jiné / Individuální rozměr" className="bg-white text-[#3E2723]">
                      Jiné / Individuální rozměr na zakázku
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3E2723] mb-1.5">
                    Poznámka / Dotaz k terénu, doplňkům nebo termínu:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Popište stav pozemku, termín realizace, požadavek na schody či dveře..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full bg-[#FDFBF7] border border-[#E7E0D8] text-[#3E2723] rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#795548] focus:outline-none placeholder-[#A89F91]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#795548] hover:bg-[#5D4037] text-white font-semibold py-3.5 px-6 rounded-full shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99] text-base cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Odeslat nezávaznou poptávku zdarma</span>
                  </button>
                  <p className="text-center text-[11px] text-[#6D5D53] mt-2">
                    Odesláním formuláře souhlasíte se zpracováním údajů pro účely vytvoření cenové nabídky.
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-[#795548] rounded-full flex items-center justify-center mx-auto text-white shadow-md">
                  <Check className="w-10 h-10 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#3E2723]">
                  Děkujeme za vaši poptávku!
                </h3>
                <p className="text-sm text-[#6D5D53] max-w-md mx-auto leading-relaxed">
                  Poptávku pro <strong className="text-[#3E2723]">{selectedProduct}</strong> jsme úspěšně přijali. Náš technik vás bude kontaktovat na čísle <strong className="text-[#3E2723]">{phone}</strong> pro upřesnění termínu a kalkulace dopravy.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#795548] font-semibold hover:underline cursor-pointer"
                  >
                    Odeslat další dotaz nebo změnit údaje
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
