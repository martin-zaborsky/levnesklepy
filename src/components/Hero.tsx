import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Calculator, 
  FileSpreadsheet, 
  Phone, 
  ArrowRight,
  ThermometerSnowflake,
  Star
} from 'lucide-react';

interface HeroProps {
  onOpenConfigurator: () => void;
  onScrollToPriceList: () => void;
  onOpenInquiry: () => void;
  currency: 'CZK' | 'EUR';
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConfigurator,
  onScrollToPriceList,
  currency
}) => {
  return (
    <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 bg-[#FDFBF7] overflow-hidden">
      {/* Subtle Background Earth Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#E7E0D8]/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#D7CDC1]/30 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & High-converting copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D8] border border-[#D7CDC1] text-xs font-bold uppercase tracking-wider text-[#5D4037]">
              <span className="flex h-2 w-2 rounded-full bg-[#795548]" />
              <span>Ceník 2026</span>
              <span className="text-[#A89F91]">•</span>
              <span className="font-bold">Kvalita do hloubky</span>
              <span className="text-[#A89F91]">•</span>
              <span className="text-[#6D5D53]">Dodání do 2–4 dnů</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#3E2723] tracking-tight leading-[1.15] font-medium">
              Realizujeme moderní <br className="hidden sm:inline" />
              <span className="text-[#795548] font-semibold italic">
                betonové sklepy na klíč
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#6D5D53] max-w-2xl leading-relaxed">
              Od projektu přes výkopové práce až po osazení železobetonového skeletu z certifikovaného betonu <strong>B30/B35 W8</strong>. Levné, rychlé a trvanlivé řešení s ideálním stálým mikroklimatem 8–11 °C.
            </p>

            {/* Key Value Propositions Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm text-[#3E2723]">
                <div className="w-5 h-5 rounded-full bg-[#F4F1EE] border border-[#E7E0D8] text-[#795548] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span><strong>Montáž ZDARMA</strong> (usazení do výkopu)</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-[#3E2723]">
                <div className="w-5 h-5 rounded-full bg-[#F4F1EE] border border-[#E7E0D8] text-[#795548] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span><strong>Bez stavebního povolení</strong> (do 25 m²)</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-[#3E2723]">
                <div className="w-5 h-5 rounded-full bg-[#F4F1EE] border border-[#E7E0D8] text-[#795548] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Doprava s hydraulickou rukou po celé ČR & SR</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-[#3E2723]">
                <div className="w-5 h-5 rounded-full bg-[#F4F1EE] border border-[#E7E0D8] text-[#795548] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Platba až při předání a usazení na pozemku</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConfigurator}
                className="flex items-center gap-2.5 bg-[#795548] hover:bg-[#5D4037] text-white font-semibold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] text-base cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-white/90" />
                <span>Spustit 3D Konfigurátor</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onScrollToPriceList}
                className="flex items-center gap-2 bg-white hover:bg-[#F4F1EE] text-[#3E2723] border border-[#E7E0D8] hover:border-[#D7CDC1] font-semibold px-6 py-3.5 rounded-full transition-all text-base cursor-pointer shadow-sm"
              >
                <FileSpreadsheet className="w-5 h-5 text-[#795548]" />
                <span>Zobrazit Ceník 2026</span>
              </button>

              <a
                href="tel:+420797812444"
                className="flex items-center gap-2 text-[#6D5D53] hover:text-[#795548] font-semibold px-3 py-2 text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#795548]" />
                <span>+420 797 812 444</span>
              </a>
            </div>

            {/* Social Proof Mini Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#E7E0D8]">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full border-2 border-[#FDFBF7] bg-[#E7E0D8] flex items-center justify-center font-bold text-xs text-[#5D4037]">
                  JN
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-[#FDFBF7] bg-[#D7CDC1] flex items-center justify-center font-bold text-xs text-[#5D4037]">
                  MK
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-[#FDFBF7] bg-[#C1B5A9] flex items-center justify-center font-bold text-xs text-[#5D4037]">
                  PB
                </div>
              </div>
              <div className="text-xs text-[#6D5D53]">
                <div className="flex items-center gap-1 text-[#795548] font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#795548] text-[#795548]" />
                  ))}
                  <span className="text-[#3E2723] ml-1 font-semibold">4.9 / 5</span>
                </div>
                <span className="text-[#6D5D53]">Více než 1 800+ spokojených zákazníků po ČR a SR</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Showcase Visual Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Image with overlay badge */}
            <div className="relative rounded-3xl overflow-hidden border border-[#E7E0D8] bg-white shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
                alt="Klenutý vinný sklep z betonu"
                className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/90 via-[#3E2723]/30 to-transparent" />

              {/* Floating Highlight Card on Top */}
              <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#E7E0D8] rounded-2xl p-3.5 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4F1EE] border border-[#E7E0D8] flex items-center justify-center text-[#795548]">
                    <ThermometerSnowflake className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#3E2723]">Přirozené mikroklima</div>
                    <div className="text-[11px] text-[#6D5D53]">Stálých 8–11 °C bez elektřiny</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold text-[#795548] block font-mono">
                    od {currency === 'CZK' ? '51 000 Kč' : '2 040 €'}
                  </span>
                  <span className="text-[10px] text-[#6D5D53]">vč. montáže</span>
                </div>
              </div>

              {/* Bottom Feature Pill Cluster */}
              <div className="absolute bottom-4 left-4 right-4 space-y-2">
                <div className="bg-white/95 backdrop-blur-md border border-[#E7E0D8] rounded-xl p-3 text-xs text-[#3E2723] flex items-center justify-between shadow-sm">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#795548]" />
                    <strong>Monolit B30/B35 W8</strong>
                  </span>
                  <span className="text-[#5D4037] font-bold">100% vodotěsné</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="bg-[#5D4037] text-white rounded-xl py-2 px-3 shadow-sm">
                    <span className="text-white/70 block text-[10px]">Rychlost usazení</span>
                    <span className="font-bold">45 minut</span>
                  </div>
                  <div className="bg-[#795548] text-white rounded-xl py-2 px-3 shadow-sm">
                    <span className="text-white/70 block text-[10px]">Záruka nepropustnosti</span>
                    <span className="font-bold">5 let</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Decorative background shadow in natural tone */}
            <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-3xl bg-[#D7CDC1]/50 blur-lg" />
          </div>

        </div>
      </div>
    </section>
  );
};
