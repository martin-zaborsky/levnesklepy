import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/services';
import { 
  CheckCircle2, 
  Layers, 
  Phone,
  FileText
} from 'lucide-react';

export const ProcessGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="postup" className="py-16 sm:py-24 bg-[#FDFBF7] border-t border-[#E7E0D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D8] border border-[#D7CDC1] text-[#5D4037] text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-4 h-4 text-[#795548]" />
            Jednoduchý postup v 5 krocích
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3E2723] tracking-tight font-medium">
            Od objednávky k hotovému sklepu <span className="text-[#795548] italic font-semibold">za 4 dny</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6D5D53] mt-4 leading-relaxed">
            Stavba klasického zděného sklepa trvá měsíce. S naším prefabrikovaným monstrem máte hotovo za 45 minut od příjezdu auta na váš pozemek.
          </p>
        </div>

        {/* 5-Step Horizontal / Stacked Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {WORKFLOW_STEPS.map((step) => {
            const isCurrent = activeStep === step.step;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-[#F4F1EE] border-[#795548] ring-1 ring-[#795548] shadow-sm'
                    : 'bg-white border-[#E7E0D8] hover:bg-[#FDFBF7] hover:border-[#D7CDC1]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      isCurrent ? 'bg-[#795548] text-white shadow-sm' : 'bg-[#F4F1EE] text-[#6D5D53] border border-[#E7E0D8]'
                    }`}>
                      0{step.step}
                    </span>
                    <span className="text-[11px] font-semibold text-[#5D4037] bg-[#E7E0D8] px-2 py-0.5 rounded-full border border-[#D7CDC1]">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#3E2723] leading-snug">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-[#6D5D53] mt-2 line-clamp-3 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-[#E7E0D8] flex items-center gap-1 text-[11px] text-[#795548] font-semibold">
                  <span>Krok {step.step} z 5</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Guide for the Excavation & Foundation Preparation */}
        <div className="bg-white border border-[#E7E0D8] rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5D4037] bg-[#E7E0D8] px-3 py-1 rounded-full border border-[#D7CDC1]">
              Praktický návod pro stavebníka & bagristu
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#3E2723]">
              Jak správně připravit stavební jámu a podloží?
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#6D5D53] leading-relaxed">
              <p>
                <strong className="text-[#3E2723]">1. Rozměr jámy:</strong> Vykopejte jámu o cca 50 cm širší a delší než vybraný sklep (např. pro sklep 300 × 240 cm vykopejte cca 400 × 340 cm), aby zbyl prostor pro bezpečnou manipulaci vázacími lany.
              </p>
              <p>
                <strong className="text-[#3E2723]">2. Štěrkové lože:</strong> Na dno výkopu navezte 10–15 cm drceného kameniva/štěrku (frakce 8–16 mm nebo 16–32 mm) a vyrovnejte vibrační deskou do vodoroviny s tolerancí max. 1 cm.
              </p>
              <p>
                <strong className="text-[#3E2723]">3. Příjezd vozu:</strong> Pro náš nákladní vůz je nutný průjezd o šířce min. 3,0 m a výšce 4,0 m. Vůz může stát 2 až 8 metrů od okraje výkopu.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-[#F4F1EE] hover:bg-[#E7E0D8] text-[#3E2723] border border-[#E7E0D8] px-5 py-2.5 rounded-full text-xs font-semibold transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#795548]" />
                <span>Stáhnout výkres výkopu (PDF)</span>
              </a>

              <a
                href="tel:+420797812444"
                className="inline-flex items-center gap-2 text-[#6D5D53] hover:text-[#795548] text-xs font-semibold px-2 py-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#795548]" />
                <span>Konzultace s technikem zdarma</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FDFBF7] rounded-2xl border border-[#E7E0D8] p-6 space-y-4">
            <h4 className="text-sm font-bold text-[#3E2723] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#795548]" />
              Kontrolní checklist před příjezdem
            </h4>
            <div className="space-y-2.5 text-xs text-[#6D5D53]">
              <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#E7E0D8]">
                <span className="text-[#795548] font-bold">✓</span>
                <span>Výkop vyrovnán latí a vodováhou do roviny</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#E7E0D8]">
                <span className="text-[#795548] font-bold">✓</span>
                <span>Štěrkové lože zhutněno na únosnost min. 150 kPa</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#E7E0D8]">
                <span className="text-[#795548] font-bold">✓</span>
                <span>Zkontrolovány nadzemní kabely a větve stromů (průjezdná výška 4m)</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#E7E0D8]">
                <span className="text-[#795548] font-bold">✓</span>
                <span>Připraven materiál pro následný obsyp a zásyp</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
