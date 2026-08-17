import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home, ArrowLeft, Phone } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 bg-[#FDFBF7] text-center px-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#E7E0D8] text-[#795548] flex items-center justify-center mx-auto">
          <Building2 className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#3E2723]">404</h1>
        <h2 className="text-xl font-serif font-semibold text-[#3E2723]">Stránka nebyla nalezena</h2>
        <p className="text-xs sm:text-sm text-[#6D5D53] leading-relaxed">
          Omlouváme se, ale požadovaná podstránka neexistuje nebo byla přesunuta. Vyberte si z našeho katalogu nebo pokračujte na úvodní stránku.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#795548] hover:bg-[#5D4037] text-white font-semibold py-3 px-6 rounded-full text-xs shadow-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Přejít na úvod</span>
          </Link>
          <Link
            to="/sklepy"
            className="inline-flex items-center gap-2 bg-[#F4F1EE] hover:bg-[#E7E0D8] text-[#3E2723] font-semibold py-3 px-6 rounded-full text-xs border border-[#E7E0D8] transition-colors"
          >
            <span>Katalog sklepů</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
