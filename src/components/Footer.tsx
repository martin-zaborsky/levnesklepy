import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { 
  Phone, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUp,
  MapPin,
  Mail,
  FileText
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FDFBF7] border-t border-[#E7E0D8] text-[#6D5D53] text-xs">
      {/* Top Banner with Guarantee and Badges */}
      <div className="border-b border-[#E7E0D8] py-8 bg-[#F4F1EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E0D8] text-[#795548] flex items-center justify-center shrink-0 shadow-xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif font-bold text-[#3E2723] text-sm">Montáž ZDARMA</div>
                <div className="text-[11px] text-[#6D5D53]">Usazení do výkopu je v ceně</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E0D8] text-[#795548] flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif font-bold text-[#3E2723] text-sm">Záruka 5 let</div>
                <div className="text-[11px] text-[#6D5D53]">Vodostavební beton B30 W8</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E0D8] text-[#795548] flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif font-bold text-[#3E2723] text-sm">Dodání do 2–4 dnů</div>
                <div className="text-[11px] text-[#6D5D53]">Stálé skladové zásoby</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E7E0D8] text-[#795548] flex items-center justify-center shrink-0 shadow-xs">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif font-bold text-[#3E2723] text-sm">+420 797 812 444</div>
                <div className="text-[11px] text-[#6D5D53]">Dispečink Po–Ne 7:00–20:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-[#6D5D53] text-xs leading-relaxed max-w-sm">
              Přední výrobce monolitických železobetonových sklepů, zahradních sklípků, vinoték a jímek. Zajišťujeme kompletní logistiku s hydraulickou rukou a montáž zdarma po celé České republice a na Slovensku.
            </p>
            <div className="pt-2 text-[11px] text-[#8D7B70]">
              © {new Date().getFullYear()} LevnéSklepy.cz • Všechna práva vyhrazena
            </div>
          </div>

          {/* Col 2: Katalog sklepů */}
          <div className="space-y-3">
            <h4 className="text-[#3E2723] font-serif font-bold text-sm tracking-wider uppercase">
              Katalog produktů
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sklepy" className="hover:text-[#795548] transition-colors">
                  Všechny betonové sklepy
                </Link>
              </li>
              <li>
                <Link to="/sklepy/klenuty-sklep-300-240" className="hover:text-[#795548] transition-colors">
                  Klenutý sklep 300 × 240 cm
                </Link>
              </li>
              <li>
                <Link to="/sklepy/klenuty-sklep-350-240" className="hover:text-[#795548] transition-colors">
                  Klenutý sklep 350 × 240 cm
                </Link>
              </li>
              <li>
                <Link to="/sklepy/plochy-zahradni-sklep-300-240" className="hover:text-[#795548] transition-colors">
                  Plochý sklep (boční vstup)
                </Link>
              </li>
              <li>
                <Link to="/sklepy/modularni-archiv-vinoteka-600-240" className="hover:text-[#795548] transition-colors">
                  Modulární vinný archiv
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Služby & Realizace */}
          <div className="space-y-3">
            <h4 className="text-[#3E2723] font-serif font-bold text-sm tracking-wider uppercase">
              Služby a servis
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sluzby" className="hover:text-[#795548] transition-colors">
                  Doprava s hydraulickou rukou
                </Link>
              </li>
              <li>
                <Link to="/sluzby" className="hover:text-[#795548] transition-colors">
                  Montáž do výkopu ZDARMA
                </Link>
              </li>
              <li>
                <Link to="/postup" className="hover:text-[#795548] transition-colors">
                  Příprava podloží & výkopu
                </Link>
              </li>
              <li>
                <Link to="/o-nas" className="hover:text-[#795548] transition-colors">
                  Certifikace betonu B30 W8
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#795548] transition-colors">
                  Stavba bez stavebního povolení
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Ceník & Nástroje */}
          <div className="space-y-3">
            <h4 className="text-[#3E2723] font-serif font-bold text-sm tracking-wider uppercase">
              Ceník & Nástroje
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/cenik" className="hover:text-[#795548] transition-colors">
                  Oficiální ceník 2026
                </Link>
              </li>
              <li>
                <Link to="/konfigurator" className="hover:text-[#795548] transition-colors text-[#795548] font-semibold">
                  3D Online Konfigurátor
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="hover:text-[#795548] transition-colors">
                  Fotogalerie realizací
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#795548] transition-colors">
                  Časté dotazy (FAQ)
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-[#795548] transition-colors">
                  Nezávazná poptávka
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#E7E0D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[#8D7B70] text-[11px]">
            LevnéSklepy.cz – Specialista na prefabrikované betonové sklepy v České republice a na Slovensku.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#6D5D53] hover:text-[#795548] transition-colors cursor-pointer text-xs font-semibold"
          >
            <span>Zpět nahoru</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
