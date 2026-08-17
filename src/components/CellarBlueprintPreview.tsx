import React from 'react';
import { Product, Accessory } from '../data/products';
import { Thermometer, Droplets, ShieldCheck, Sparkles } from 'lucide-react';

interface CellarBlueprintPreviewProps {
  product: Product;
  selectedAccessories: Accessory[];
  currency: 'CZK' | 'EUR';
}

export const CellarBlueprintPreview: React.FC<CellarBlueprintPreviewProps> = ({
  product,
  selectedAccessories
}) => {
  const isVaulted = product.category === 'klenute' || product.category === 'vinotéky';
  const hasTopEntrance = product.id.includes('horni-vstup');
  
  const hasStairs = selectedAccessories.some(a => a.category === 'schody');
  const hasDoor = selectedAccessories.some(a => a.category === 'dvere');
  const hasVent = selectedAccessories.some(a => a.category === 'ventilace');
  const hasHydro = selectedAccessories.some(a => a.category === 'izolace');
  const hasLighting = selectedAccessories.some(a => a.category === 'elektro');
  const hasShelves = selectedAccessories.some(a => a.category === 'police');

  return (
    <div className="bg-white border border-[#E7E0D8] rounded-2xl p-4 sm:p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
      {/* Blueprint Header */}
      <div className="flex items-start justify-between gap-2 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#5D4037] bg-[#E7E0D8] px-2.5 py-0.5 rounded-full border border-[#D7CDC1]">
              <Sparkles className="w-3 h-3 text-[#795548]" />
              Interaktivní 2D / 3D náhled řezu
            </span>
            <span className="text-xs text-[#6D5D53] font-mono">
              B30/B35 W8
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-serif font-bold text-[#3E2723] mt-1.5">
            {product.name}
          </h4>
          <p className="text-xs text-[#6D5D53]">
            Délka {product.dimensions.length} × Šířka {product.dimensions.width} × Výška {product.dimensions.height} cm • Objem {product.volumeM3} m³
          </p>
        </div>

        {/* Climate Sensor badge */}
        <div className="hidden sm:flex flex-col items-end gap-1 bg-[#F4F1EE] border border-[#E7E0D8] rounded-xl px-3 py-1.5 text-[11px]">
          <div className="flex items-center gap-1.5 text-[#5D4037] font-semibold">
            <Thermometer className="w-3.5 h-3.5 text-[#795548]" />
            <span>Klima: 8–11 °C</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#6D5D53] font-medium">
            <Droplets className="w-3.5 h-3.5 text-[#795548]" />
            <span>Vlhkost: 75–85 %</span>
          </div>
        </div>
      </div>

      {/* SVG Interactive Blueprint Schematic in Natural Tones */}
      <div className="relative bg-[#FDFBF7] rounded-xl border border-[#E7E0D8] p-4 aspect-[16/10] flex items-center justify-center overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        <svg
          viewBox="0 0 600 360"
          className="w-full h-full max-h-[320px] select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground surface line (terén) */}
          <line x1="30" y1="80" x2="570" y2="80" stroke="#8D7B70" strokeWidth="2" strokeDasharray="6 4" />
          <text x="40" y="72" fill="#6D5D53" fontSize="11" fontFamily="sans-serif" fontWeight="600">
            Úroveň terénu (±0,000)
          </text>
          {/* Natural foliage marks on surface */}
          <path d="M 460 80 Q 465 65 470 80 M 472 80 Q 477 60 482 80 M 484 80 Q 489 65 494 80" stroke="#795548" strokeWidth="2" fill="none" />
          <path d="M 120 80 Q 125 65 130 80 M 132 80 Q 137 60 142 80" stroke="#795548" strokeWidth="2" fill="none" />

          {/* Earth backfill mound (zásyp zeminou) */}
          <path
            d="M 60 80 Q 300 40 540 80 Z"
            fill="rgba(215, 205, 193, 0.4)"
            stroke="#A1887F"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <text x="300" y="58" textAnchor="middle" fill="#5D4037" fontSize="10" fontWeight="bold">
            Ochranný zásyp zeminou (60–100 cm)
          </text>

          {/* Excavation pit boundary outline */}
          <path
            d="M 110 80 L 130 330 L 470 330 L 490 80"
            fill="none"
            stroke="#BCAAA4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <text x="135" y="322" fill="#8D7B70" fontSize="9" fontWeight="600">
            Štěrkové lože (tl. 15 cm)
          </text>

          {/* Gravel foundation bed under cellar */}
          <rect x="150" y="305" width="300" height="20" fill="#E7E0D8" opacity="0.9" rx="2" stroke="#D7CDC1" />
          {/* Gravel dots */}
          <circle cx="170" cy="315" r="2" fill="#8D7B70" />
          <circle cx="210" cy="313" r="3" fill="#8D7B70" />
          <circle cx="260" cy="316" r="2" fill="#8D7B70" />
          <circle cx="310" cy="314" r="2.5" fill="#8D7B70" />
          <circle cx="360" cy="317" r="2" fill="#8D7B70" />
          <circle cx="410" cy="313" r="3" fill="#8D7B70" />

          {/* Main Cellar Body */}
          {isVaulted ? (
            /* Vaulted Arch Profile */
            <g id="vaulted-structure">
              {/* Outer Concrete Wall with Hydrostop coating if enabled */}
              <path
                d="M 170 305 V 190 C 170 120 225 100 300 100 C 375 100 430 120 430 190 V 305 Z"
                fill="#F4F1EE"
                stroke={hasHydro ? '#795548' : '#8D7B70'}
                strokeWidth={hasHydro ? "5" : "3.5"}
              />
              
              {/* Inner Room Area */}
              <path
                d="M 190 295 V 195 C 190 140 238 120 300 120 C 362 120 410 140 410 195 V 295 Z"
                fill="#FFFFFF"
                stroke="#5D4037"
                strokeWidth="1.5"
              />

              {/* Rebar reinforcement indicator */}
              <path
                d="M 180 300 V 192 C 180 130 230 110 300 110 C 370 110 420 130 420 192 V 300"
                fill="none"
                stroke="#A1887F"
                strokeWidth="1.2"
                strokeDasharray="2 3"
                opacity="0.8"
              />
            </g>
          ) : (
            /* Flat Roof Profile */
            <g id="flat-structure">
              {/* Outer Concrete Wall */}
              <rect
                x="170"
                y="130"
                width="260"
                height="175"
                rx="4"
                fill="#F4F1EE"
                stroke={hasHydro ? '#795548' : '#8D7B70'}
                strokeWidth={hasHydro ? "5" : "3.5"}
              />
              
              {/* Inner Room */}
              <rect
                x="190"
                y="150"
                width="220"
                height="145"
                rx="2"
                fill="#FFFFFF"
                stroke="#5D4037"
                strokeWidth="1.5"
              />

              {/* Reinforced Flat Ceiling slab */}
              <rect x="165" y="125" width="270" height="15" fill="#E7E0D8" stroke="#8D7B70" strokeWidth="1.5" />
              <line x1="175" y1="132" x2="425" y2="132" stroke="#A1887F" strokeWidth="1" strokeDasharray="3 2" />
            </g>
          )}

          {/* Hydrostop waterproof badge tag in SVG */}
          {hasHydro && (
            <g>
              <rect x="175" y="105" width="115" height="18" rx="4" fill="#795548" />
              <text x="232" y="117" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
                ✓ Hydrostop izolace
              </text>
            </g>
          )}

          {/* Shelves & Wine racks inside */}
          {hasShelves && (
            <g id="shelves">
              {/* Left shelves */}
              <rect x="195" y="210" width="35" height="4" fill="#795548" />
              <rect x="195" y="240" width="35" height="4" fill="#795548" />
              <rect x="195" y="270" width="35" height="4" fill="#795548" />
              {/* Bottles/jars */}
              <rect x="198" y="200" width="6" height="10" rx="1" fill="#5D4037" />
              <rect x="206" y="198" width="6" height="12" rx="1" fill="#795548" />
              <rect x="214" y="201" width="7" height="9" rx="1" fill="#8D6E63" />
              <rect x="198" y="231" width="8" height="9" rx="1" fill="#5D4037" />
              <rect x="208" y="230" width="8" height="10" rx="1" fill="#795548" />
              
              {/* Right shelves */}
              <rect x="370" y="210" width="35" height="4" fill="#795548" />
              <rect x="370" y="240" width="35" height="4" fill="#795548" />
              <rect x="370" y="270" width="35" height="4" fill="#795548" />
            </g>
          )}

          {/* Internal LED Light */}
          {hasLighting ? (
            <g id="lighting">
              <circle cx="300" cy={isVaulted ? 135 : 158} r="5" fill="#D97706" />
              <path
                d={`M 285 ${isVaulted ? 140 : 163} L 240 290 L 360 290 L 315 ${isVaulted ? 140 : 163} Z`}
                fill="rgba(217, 119, 6, 0.08)"
              />
              <text x="300" y={isVaulted ? 128 : 152} textAnchor="middle" fill="#795548" fontSize="8" fontWeight="bold">
                LED IP65
              </text>
            </g>
          ) : (
            <g>
              <circle cx="300" cy={isVaulted ? 135 : 158} r="3" fill="#D7CDC1" />
            </g>
          )}

          {/* Gravity Ventilation pipes */}
          {hasVent ? (
            <g id="ventilation">
              {/* Left intake pipe (down) */}
              <path d="M 215 65 V 280 H 225 V 65 Z" fill="#8D7B70" />
              <path d="M 210 65 L 220 55 L 230 65 Z" fill="#5D4037" />
              <text x="220" y="50" textAnchor="middle" fill="#5D4037" fontSize="8" fontWeight="bold">
                Přívod DN110
              </text>

              {/* Right exhaust pipe (up) */}
              <path d="M 385 65 V 150 H 395 V 65 Z" fill="#8D7B70" />
              <path d="M 380 65 L 390 55 L 400 65 Z" fill="#5D4037" />
              <text x="390" y="50" textAnchor="middle" fill="#5D4037" fontSize="8" fontWeight="bold">
                Odtah DN110
              </text>

              {/* Airflow arrows */}
              <path d="M 220 270 Q 250 285 300 280 T 385 160" fill="none" stroke="#795548" strokeWidth="1.5" strokeDasharray="3 3" />
            </g>
          ) : null}

          {/* Entrance & Stairs / Doorways */}
          {hasTopEntrance ? (
            /* Top entrance hatch with ladder */
            <g id="top-hatch">
              <rect x="270" y="120" width="60" height="15" fill="#E7E0D8" stroke="#795548" strokeWidth="2" />
              <line x1="285" y1="135" x2="285" y2="295" stroke="#8D7B70" strokeWidth="2" />
              <line x1="315" y1="135" x2="315" y2="295" stroke="#8D7B70" strokeWidth="2" />
              {/* Rungs */}
              <line x1="285" y1="165" x2="315" y2="165" stroke="#8D7B70" strokeWidth="1.5" />
              <line x1="285" y1="195" x2="315" y2="195" stroke="#8D7B70" strokeWidth="1.5" />
              <line x1="285" y1="225" x2="315" y2="225" stroke="#8D7B70" strokeWidth="1.5" />
              <line x1="285" y1="255" x2="315" y2="255" stroke="#8D7B70" strokeWidth="1.5" />
              <line x1="285" y1="285" x2="315" y2="285" stroke="#8D7B70" strokeWidth="1.5" />
              <text x="300" y="112" textAnchor="middle" fill="#3E2723" fontSize="9" fontWeight="bold">
                Zateplený poklop 80×80
              </text>
            </g>
          ) : (
            /* Side or Front Entrance with Door and Prefab Stairs */
            <g id="front-entrance">
              {/* Entrance Door */}
              <rect
                x="280"
                y="195"
                width="40"
                height="100"
                rx="2"
                fill={hasDoor ? (selectedAccessories.some(a => a.id.includes('dub')) ? '#5D4037' : '#795548') : '#F4F1EE'}
                stroke={hasDoor ? '#3E2723' : '#8D7B70'}
                strokeWidth="2"
              />
              {/* Door handle */}
              <circle cx="288" cy="245" r="2" fill="#E7E0D8" />
              <line x1="288" y1="245" x2="283" y2="245" stroke="#E7E0D8" strokeWidth="2" />

              {/* Prefab Steps outside */}
              {hasStairs && (
                <g id="stairs">
                  <path
                    d="M 120 170 L 135 170 L 135 195 L 150 195 L 150 220 L 165 220 L 165 245 L 175 245 L 175 305 L 110 305 Z"
                    fill="#E7E0D8"
                    stroke="#795548"
                    strokeWidth="1.5"
                  />
                  <text x="140" y="270" textAnchor="middle" fill="#5D4037" fontSize="8" fontWeight="bold">
                    Prefab schody
                  </text>
                </g>
              )}
            </g>
          )}

          {/* Dimension Lines (Kóty) */}
          {/* Height Dimension on Right */}
          <line x1="450" y1={isVaulted ? 100 : 130} x2="450" y2="305" stroke="#795548" strokeWidth="1.5" />
          <line x1="442" y1={isVaulted ? 100 : 130} x2="458" y2={isVaulted ? 100 : 130} stroke="#795548" strokeWidth="1.5" />
          <line x1="442" y1="305" x2="458" y2="305" stroke="#795548" strokeWidth="1.5" />
          <text x="470" y={isVaulted ? 205 : 220} fill="#795548" fontSize="11" fontWeight="bold" fontFamily="monospace">
            V: {product.dimensions.height} cm
          </text>

          {/* Width Dimension on Bottom */}
          <line x1="170" y1="345" x2="430" y2="345" stroke="#795548" strokeWidth="1.5" />
          <line x1="170" y1="337" x2="170" y2="353" stroke="#795548" strokeWidth="1.5" />
          <line x1="430" y1="337" x2="430" y2="353" stroke="#795548" strokeWidth="1.5" />
          <text x="300" y="358" textAnchor="middle" fill="#795548" fontSize="11" fontWeight="bold" fontFamily="monospace">
            Š: {product.dimensions.width} cm | D: {product.dimensions.length} cm
          </text>
        </svg>

        {/* Floating tech pill */}
        <div className="absolute bottom-2 left-2 bg-white/95 border border-[#E7E0D8] rounded-xl px-2.5 py-1 text-[10px] text-[#3E2723] flex items-center gap-1.5 backdrop-blur-sm shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-[#795548]" />
          <span>Tl. stěny {product.wallThicknessCm} cm • Váha {product.weightTons} t</span>
        </div>
      </div>

      {/* Feature Highlights Grid in Natural Tones */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
        <div className="bg-[#F4F1EE] border border-[#E7E0D8] rounded-xl p-2.5 text-center">
          <span className="text-[10px] text-[#6D5D53] block">Vnitřní objem</span>
          <span className="text-sm font-bold text-[#3E2723] font-mono">{product.volumeM3} m³</span>
        </div>

        <div className="bg-[#F4F1EE] border border-[#E7E0D8] rounded-xl p-2.5 text-center">
          <span className="text-[10px] text-[#6D5D53] block">Hmotnost skeletu</span>
          <span className="text-sm font-bold text-[#795548] font-mono">{product.weightTons} tun</span>
        </div>

        <div className="bg-[#F4F1EE] border border-[#E7E0D8] rounded-xl p-2.5 text-center">
          <span className="text-[10px] text-[#6D5D53] block">Třída betonu</span>
          <span className="text-sm font-bold text-[#3E2723]">B30 / B35 W8</span>
        </div>

        <div className="bg-[#F4F1EE] border border-[#E7E0D8] rounded-xl p-2.5 text-center">
          <span className="text-[10px] text-[#6D5D53] block">Montáž do výkopu</span>
          <span className="text-sm font-bold text-[#795548]">ZDARMA (0 Kč)</span>
        </div>
      </div>
    </div>
  );
};
