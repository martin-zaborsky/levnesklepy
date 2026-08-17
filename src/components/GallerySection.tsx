import React, { useState } from 'react';
import { Camera, X, Maximize2, MapPin } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'klenute' | 'ploche' | 'vinotéky' | 'montaz';
  location: string;
  image: string;
  desc: string;
  specs: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Klenutý sklep se zeleným travnatým svahem',
    category: 'klenute',
    location: 'Benešov u Prahy',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    desc: 'Usazení klenutého sklepa 350 × 240 cm s následným zatravněním a kamennou vstupní zídkou.',
    specs: 'Klenba 350 cm • Vstup s dubovými dveřmi'
  },
  {
    id: 2,
    title: 'Soukromý vinný archiv a degustační salonek',
    category: 'vinotéky',
    location: 'Mikulov (Jižní Morava)',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80',
    desc: 'Dvoudílný modul 600 cm s cihlovou dlažbou a dubovými regály na 800 lahví vína.',
    specs: 'Dvoudílný modul 600 cm • Stálá teplota 10 °C'
  },
  {
    id: 3,
    title: 'Plochý zahradní sklep s posezením na střeše',
    category: 'ploche',
    location: 'Tábor (Jihočeský kraj)',
    image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80',
    desc: 'Využití rovné stropní desky pro dřevěnou pergolu a posezení u rodinného domu.',
    specs: 'Plochý sklep 300 × 240 cm • Boční vstup'
  },
  {
    id: 4,
    title: 'Přesné usazení hydraulickou rukou do výkopu',
    category: 'montaz',
    location: 'Olomouc',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    desc: 'Vykládka 11tunového sklepa z kamionu přímo na připravené štěrkové lože během 35 minut.',
    specs: 'Montáž ZDARMA • Dosah ramene 8 m'
  },
  {
    id: 5,
    title: 'Klenutý sklep s prodlouženou vstupní šíjí',
    category: 'klenute',
    location: 'Hradec Králové',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    desc: 'Částečně zapuštěný sklep s klenutým vstupním schodištěm pro snadný přístup s přepravkami.',
    specs: 'Klenutý sklep 400 × 240 cm + šíje'
  },
  {
    id: 6,
    title: 'Interiér zahradního sklepa s regály na úrodu',
    category: 'klenute',
    location: 'Plzeň-sever',
    image: 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=1200&q=80',
    desc: 'Praktické dřevěné regály po obou stranách klenby pro uskladnění jablek, brambor a moštů.',
    specs: 'Vnitřní vlhkost 82 % • Čistý objem 21 m³'
  }
];

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="galerie" className="py-16 sm:py-24 bg-[#F4F1EE] border-t border-[#E7E0D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7E0D8] border border-[#D7CDC1] text-[#5D4037] text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-[#795548]" />
              Fotogalerie realizací
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#3E2723] tracking-tight font-medium">
              Ukázky hotových sklepů a <span className="text-[#795548] italic font-semibold">montáží</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6D5D53] mt-2 max-w-xl">
              Inspirujte se reálnými realizacemi našich zákazníků od rodinných zahrad po exkluzivní vinné archivy.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'Všechny fotky' },
              { id: 'klenute', label: 'Klenuté sklepy' },
              { id: 'vinotéky', label: 'Vinné archivy' },
              { id: 'ploche', label: 'Ploché sklepy' },
              { id: 'montaz', label: 'Průběh montáže' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#795548] text-white shadow-sm'
                    : 'bg-white text-[#6D5D53] border border-[#E7E0D8] hover:text-[#3E2723] hover:bg-[#FDFBF7]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-white border border-[#E7E0D8] rounded-2xl overflow-hidden shadow-sm hover:border-[#D7CDC1] transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-[#E7E0D8]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/90 via-[#3E2723]/20 to-transparent" />

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-[#E7E0D8] text-[11px] text-[#3E2723] font-medium px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3 h-3 text-[#795548]" />
                  <span>{item.location}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="text-sm sm:text-base font-serif font-bold text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/80 mt-1 line-clamp-1">
                    {item.specs}
                  </p>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-[#E7E0D8] flex items-center justify-center text-[#3E2723] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-[#3E2723]/70 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FDFBF7] border border-[#E7E0D8] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative cursor-default"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#F4F1EE] text-[#3E2723] hover:bg-[#E7E0D8] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[65vh] object-cover"
            />

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs text-[#795548] font-bold uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedImage.location}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#3E2723]">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-[#6D5D53] mt-2 leading-relaxed">
                {selectedImage.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-[#E7E0D8] text-xs text-[#6D5D53] font-mono">
                Parametry: {selectedImage.specs}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
