import React, { useState } from 'react';
import { FAQS, TESTIMONIALS } from '../data/services';
import { 
  HelpCircle, 
  ChevronDown, 
  Star, 
  Phone, 
  MapPin, 
  Quote
} from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FDFBF7] border-t border-[#E7E0D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D8] border border-[#D7CDC1] text-[#5D4037] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-[#795548]" />
            Často kladené otázky & Hodnocení
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3E2723] tracking-tight font-medium">
            Vše, co potřebujete vědět <span className="text-[#795548] italic font-semibold">před nákupem</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6D5D53] mt-4 leading-relaxed">
            Odpovědi na nejčastější dotazy ohledně stavebního povolení, spodní vody, příjezdu těžkého vozu a usazení.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: FAQ Accordions (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E7E0D8] rounded-2xl overflow-hidden transition-colors shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FDFBF7] transition-colors"
                  >
                    <span className="font-serif font-bold text-[#3E2723] text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full bg-[#F4F1EE] border border-[#E7E0D8] flex items-center justify-center text-[#6D5D53] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-[#795548] text-white border-[#795548]' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#6D5D53] leading-relaxed border-t border-[#E7E0D8] pt-3 bg-[#FDFBF7]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct Question Box */}
            <div className="bg-[#F4F1EE] border border-[#E7E0D8] rounded-2xl p-5 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-serif font-bold text-[#3E2723]">Máte další specifickou otázku?</h4>
                <p className="text-xs text-[#6D5D53] mt-0.5">Rádi vám poradíme s technickými detaily vašeho pozemku.</p>
              </div>
              <a
                href="tel:+420797812444"
                className="bg-[#795548] hover:bg-[#5D4037] text-white text-xs font-semibold px-5 py-2.5 rounded-full whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+420 797 812 444</span>
              </a>
            </div>
          </div>

          {/* Right Column: Customer Reviews / Testimonials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-serif font-bold text-[#3E2723] flex items-center gap-2">
                <Quote className="w-5 h-5 text-[#795548]" />
                Zkušenosti našich zákazníků
              </h3>
              <div className="flex items-center gap-1 text-[#795548] text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-[#795548]" />
                <span>4.9 / 5</span>
              </div>
            </div>

            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="bg-white border border-[#E7E0D8] rounded-2xl p-5 space-y-3 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#3E2723] text-sm">{review.name}</div>
                    <div className="text-[11px] text-[#6D5D53] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#795548]" />
                      <span>{review.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-[#795548]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#795548]" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#6D5D53] italic leading-relaxed">
                  "{review.text}"
                </p>

                <div className="pt-2 border-t border-[#E7E0D8] flex items-center justify-between text-[10px] text-[#6D5D53]">
                  <span className="text-[#795548] font-semibold">Koupeno: {review.product}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
