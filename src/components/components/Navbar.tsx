import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { 
  Phone, 
  Menu, 
  X, 
  Calculator, 
  ChevronDown
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const primaryNavItems = [
    { label: 'Katalog sklepů', to: '/sklepy' },
    { label: '3D Konfigurátor', to: '/konfigurator' },
    { label: 'Ceník 2026', to: '/cenik' },
    { label: 'Služby & Montáž', to: '/sluzby' },
    { label: 'Příprava výkopu', to: '/postup' },
  ];

  const secondaryNavItems = [
    { label: 'Fotogalerie', to: '/galerie' },
    { label: 'O nás & Certifikace', to: '/o-nas' },
    { label: 'Časté dotazy (FAQ)', to: '/faq' },
    { label: 'Kontakt & Poptávka', to: '/kontakt' },
  ];

  const allNavItems = [...primaryNavItems, ...secondaryNavItems];

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E7E0D8]">
      {/* Top Bar: Emergency Dispatcher Announcement & Currency Switcher */}
      <div className="bg-[#F4F1EE] border-b border-[#E7E0D8] py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#795548] animate-pulse" />
            <span className="text-[#3E2723] font-medium hidden sm:inline">
              Výrobní kapacity pro sezónu 2026: <strong>Expedice do 2–4 dnů</strong> po celé ČR a SR
            </span>
            <span className="text-[#3E2723] font-medium sm:hidden">
              Expedice skladem do 2–4 dnů
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Direct Telephone */}
            <a
              href="tel:+420797812444"
              className="flex items-center gap-1.5 font-bold text-[#3E2723] hover:text-[#795548] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#795548]" />
              <span className="hidden md:inline">+420 797 812 444</span>
              <span className="md:hidden">Dispečink</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo Zone */}
          <div className="shrink-0 flex items-center">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-[#F4F1EE] text-[#795548] font-bold border border-[#E7E0D8]'
                    : 'text-[#5D4037] hover:text-[#3E2723] hover:bg-[#F4F1EE]'
                }`
              }
            >
              Úvod
            </NavLink>

            {primaryNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-[#F4F1EE] text-[#795548] font-bold border border-[#E7E0D8]'
                      : 'text-[#5D4037] hover:text-[#3E2723] hover:bg-[#F4F1EE]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Dropdown for More Subpages */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                onBlur={() => setTimeout(() => setMoreDropdownOpen(false), 200)}
                className="flex items-center gap-1 px-3 py-2 rounded-full text-xs font-semibold text-[#5D4037] hover:text-[#3E2723] hover:bg-[#F4F1EE] transition-colors cursor-pointer"
              >
                <span>Více</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-[#E7E0D8] rounded-2xl shadow-lg p-2 z-50">
                  {secondaryNavItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setMoreDropdownOpen(false)}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                          isActive
                            ? 'bg-[#F4F1EE] text-[#795548]'
                            : 'text-[#5D4037] hover:bg-[#F4F1EE] hover:text-[#3E2723]'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Action Zone: Configurator CTA + Quick Inquiry */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              to="/konfigurator"
              className="flex items-center gap-2 bg-[#F4F1EE] hover:bg-[#E7E0D8] text-[#3E2723] border border-[#E7E0D8] text-xs font-bold py-2.5 px-4 rounded-full transition-all cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#795548]" />
              <span>3D Kalkulátor</span>
            </Link>

            <Link
              to="/kontakt"
              className="flex items-center gap-1.5 bg-[#795548] hover:bg-[#5D4037] text-white text-xs font-bold py-2.5 px-4 rounded-full shadow-xs transition-all cursor-pointer"
            >
              <span>Nezávazná poptávka</span>
            </Link>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#F4F1EE] text-[#3E2723] hover:text-[#795548] border border-[#E7E0D8] transition-colors cursor-pointer"
              aria-label="Otevřít menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E7E0D8] bg-[#FDFBF7] px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isActive ? 'bg-[#795548] text-white font-bold' : 'text-[#3E2723] hover:bg-[#F4F1EE]'
              }`
            }
          >
            Úvodní stránka
          </NavLink>

          {allNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive ? 'bg-[#795548] text-white font-bold' : 'text-[#3E2723] hover:bg-[#F4F1EE]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="pt-4 border-t border-[#E7E0D8] grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/konfigurator');
              }}
              className="flex items-center justify-center gap-2 bg-[#F4F1EE] border border-[#E7E0D8] text-[#3E2723] font-bold py-2.5 px-3 rounded-xl text-xs"
            >
              <Calculator className="w-4 h-4 text-[#795548]" />
              <span>3D Kalkulátor</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/kontakt');
              }}
              className="flex items-center justify-center gap-2 bg-[#795548] text-white font-bold py-2.5 px-3 rounded-xl text-xs"
            >
              <span>Poptávka</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
