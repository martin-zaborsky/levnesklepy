import React from 'react';
import { SERVICES, CERTIFICATES } from '../data/services';
import { 
  Truck, 
  Hammer, 
  Layers, 
  ShieldCheck, 
  FileCheck, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenInquiry: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Truck': return <Truck className="w-6 h-6 text-[#795548]" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-[#795548]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#795548]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#795548]" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-[#795548]" />;
      default: return <Sparkles className="w-6 h-6 text-[#795548]" />;
    }
  };

  return (
    <section id="sluzby" className="py-16 sm:py-24 bg-[#F4F1EE] relative overflow-hidden border-t border-[#E7E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D8] border border-[#D7CDC1] text-[#5D4037] text-xs font-bold uppercase tracking-wider mb-4">
            <Hammer className="w-4 h-4 text-[#795548]" />
            Kompletní servis a realizace
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3E2723] tracking-tight font-medium">
            Vše od výroby až po <span className="text-[#795548] italic font-semibold">usazení do výkopu</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6D5D53] mt-4 leading-relaxed">
            Nemusíte shánět drahé jeřáby ani řešit složitou logistiku. Naše vlastní nákladní auta s hydraulickou rukou se postarají o bezpečné dovezení i montáž zdarma.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white border border-[#E7E0D8] hover:border-[#D7CDC1] rounded-2xl p-6 sm:p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F4F1EE] border border-[#E7E0D8] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(srv.icon)}
                </div>

                <h3 className="text-xl font-serif font-bold text-[#3E2723] group-hover:text-[#795548] transition-colors">
                  {srv.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#6D5D53] mt-2 leading-relaxed">
                  {srv.fullDesc}
                </p>

                {/* Key Benefits List */}
                <div className="mt-5 pt-4 border-t border-[#E7E0D8] space-y-2">
                  {srv.keyBenefits.map((ben, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#3E2723]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#795548] shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs pill list at bottom */}
              <div className="mt-6 pt-4 border-t border-[#E7E0D8] grid grid-cols-2 gap-2 text-[11px]">
                {srv.specs.slice(0, 2).map((sp, idx) => (
                  <div key={idx} className="bg-[#FDFBF7] rounded-xl p-2.5 border border-[#E7E0D8]">
                    <span className="text-[#8D7B70] block text-[9px] uppercase">{sp.label}</span>
                    <span className="font-semibold text-[#3E2723]">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Official Certificates and Quality Standards */}
        <div className="mt-16 bg-white border border-[#E7E0D8] rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#F4F1EE] border border-[#E7E0D8] flex items-center justify-center text-[#795548]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-[#3E2723]">Certifikace, statika & garance kvality</h3>
              <p className="text-xs text-[#6D5D53]">Všechny výrobky prochází přísnou výstupní kontrolou a splňují normy ČSN EN 206</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CERTIFICATES.map((cert, idx) => (
              <div key={idx} className="bg-[#FDFBF7] border border-[#E7E0D8] rounded-2xl p-5 space-y-2">
                <div className="text-xs font-bold text-[#795548] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#795548]" />
                  <span>{cert.issuer}</span>
                </div>
                <h4 className="text-sm font-bold text-[#3E2723]">{cert.title}</h4>
                <p className="text-xs text-[#6D5D53] leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
