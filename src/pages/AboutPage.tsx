import React from 'react';
import { CERTIFICATES } from '../data/services';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Truck, 
  Layers, 
  Phone, 
  FileCheck,
  HardHat
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D8] border border-[#D7CDC1] text-[#5D4037] text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#795548]" />
            O společnosti & Výroba
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3E2723] tracking-tight font-medium">
            Kvalita, na kterou se můžete <span className="text-[#795548] italic font-semibold">spolehnout</span>
          </h1>
          <p className="text-base sm:text-lg text-[#6D5D53] mt-4 leading-relaxed">
            Jsme přímý výrobce monolitických železobetonových sklepů, vinných komor a retenčních nádrží s dlouholetou tradicí. Naše výrobky dodáváme zákazníkům v celé České republice a na Slovensku.
          </p>
        </div>

        {/* Manufacturing & Material Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#795548] bg-[#E7E0D8] px-3 py-1 rounded-full">
              Výrobní technologie
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3E2723]">
              Monolitické lití do ocelových forem
            </h2>
            <p className="text-sm text-[#6D5D53] leading-relaxed">
              Na rozdíl od zděných sklepů z tvárnic jsou naše prefabrikáty odlévány jako jeden celistvý monolitický kus (dno i obvodové stěny v jednom lití). Tím je zcela eliminováno riziko vzniku netěsných spár a průsaků spodní vody.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E7E0D8] text-[#795548] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3E2723]">Vodostavební beton třídy B30 (C25/30) W8</h4>
                  <p className="text-xs text-[#6D5D53]">Přísady krystalizační hydroizolace a plastifikátorů garantují absolutní vodonepropustnost i při vysoké hladině podzemní vody.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E7E0D8] text-[#795548] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3E2723]">Masivní armování žebírkovou ocelí BSt 500S</h4>
                  <p className="text-xs text-[#6D5D53]">Ocelová armovací síť zajišťuje vysokou statickou únosnost proti tlaku zeminy a možnost přejezdu lehkých vozidel po stropní desce.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E7E0D8] text-[#795548] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3E2723]">Vnější hydroizolační asfaltový nátěr Hydrostop</h4>
                  <p className="text-xs text-[#6D5D53]">Vícevrstvý penetrační a izolační nátěr chrání beton proti působení kyselých půd a zemní vlhkosti.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E7E0D8] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#3E2723] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#795548]" />
              Záruky a garance výrobce
            </h3>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-[#E7E0D8]">
                <span className="text-3xl font-serif font-bold text-[#795548] block">5 let</span>
                <span className="text-xs text-[#6D5D53] font-semibold mt-1 block">Záruka na těsnost skeletu</span>
              </div>
              <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-[#E7E0D8]">
                <span className="text-3xl font-serif font-bold text-[#795548] block">100%</span>
                <span className="text-xs text-[#6D5D53] font-semibold mt-1 block">Certifikovaný beton</span>
              </div>
            </div>

            <p className="text-xs text-[#6D5D53] leading-relaxed">
              Ke každému dodanému sklepu předáváme kompletní dokumentaci: certifikát shody výrobku, statický výpočet a protokol o tlakové zkoušce těsnosti.
            </p>

            <div className="pt-2">
              <Link
                to="/kontakt"
                className="w-full flex items-center justify-center gap-2 bg-[#795548] hover:bg-[#5D4037] text-white font-semibold py-3 px-6 rounded-full shadow-xs transition-all text-xs"
              >
                <span>Vyžádat technický list a nabídku</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Certificates List */}
        <div className="bg-[#F4F1EE] border border-[#E7E0D8] rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-white border border-[#E7E0D8] flex items-center justify-center text-[#795548]">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#3E2723]">Oficiální certifikáty a normy</h3>
              <p className="text-xs text-[#6D5D53]">Dokumenty pro stavební úřad a kolaudační řízení</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert, idx) => (
              <div key={idx} className="bg-white border border-[#E7E0D8] rounded-2xl p-5 space-y-2 shadow-xs">
                <div className="text-xs font-bold text-[#795548] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#795548]" />
                  <span>{cert.issuer}</span>
                </div>
                <h4 className="text-sm font-bold text-[#3E2723]">{cert.title}</h4>
                <p className="text-xs text-[#6D5D53] leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
