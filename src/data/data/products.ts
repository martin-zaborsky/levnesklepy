export interface Product {
  id: string;
  name: string;
  category: 'kupolove' | 'ploche-bok' | 'ploche-shora';
  categoryLabel: string;
  subtitle: string;
  description: string;
  basePriceCZK: number;
  dimensions: {
    length: number; // in cm
    width: number;
    height: number;
    innerLength?: number;
    innerWidth?: number;
    innerHeight?: number;
  };
  volumeM3: number;
  weightTons: number;
  wallThicknessCm: number;
  concreteClass: string;
  features: string[];
  recommendedFor: string[];
  imageUrl: string;
  isPopular?: boolean;
  isNew?: boolean;
  stockStatus: 'Skladem – dodání do 2-4 dnů' | 'Na objednávku (do 7 dnů)';
}

export interface Accessory {
  id: string;
  name: string;
  priceCZK: number;
  category: 'predsin' | 'schody' | 'dvere';
  description: string;
  unit: string;
  iconName: string;
}

// Ceny jsou uvedeny bez DPH, dle aktuálního ceníku výrobce (levnesklepy.cz).

export const PRODUCTS: Product[] = [
  // ── KUPOLOVÉ SKLEPY ─────────────────────────────────────────────
  {
    id: 'kupolovy-300',
    name: 'Kupolový sklep 300',
    category: 'kupolove',
    categoryLabel: 'Kupolové sklepy',
    subtitle: 'Nejoblíbenější kupolový sklep se stálou teplotou a vlhkostí',
    description: 'Kupolovitý tvar zajišťuje přirozené proudění vzduchu a pomáhá udržovat stálou teplotu i vlhkost po celý rok. Konstrukce z vyztuženého betonu B35 zaručuje dlouhou životnost a minimální nároky na údržbu.',
    basePriceCZK: 42000,
    dimensions: { length: 300, width: 240, height: 240, innerLength: 280, innerWidth: 220, innerHeight: 220 },
    volumeM3: 17.3,
    weightTons: 9.5,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Kupolovitý strop pro přirozené proudění vzduchu',
      'Vyztužený beton B35 odolný vůči vlhkosti a mrazu',
      'Dlouhá životnost s minimální údržbou',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Zahrady rodinných domů', 'Uskladnění úrody', 'Domácí sklípek'],
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'kupolovy-340-a',
    name: 'Kupolový sklep 340 (nižší)',
    category: 'kupolove',
    categoryLabel: 'Kupolové sklepy',
    subtitle: 'Prodloužený kupolový sklep s nižší konstrukční výškou',
    description: 'Kupolový sklep s délkou 340 cm a nižší výškou pro pozemky s omezenou hloubkou výkopu. Zachovává výhody kupolovité klenby a stálého mikroklimatu.',
    basePriceCZK: 48000,
    dimensions: { length: 340, width: 240, height: 230, innerLength: 320, innerWidth: 220, innerHeight: 210 },
    volumeM3: 18.8,
    weightTons: 10.3,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Kupolovitý strop pro přirozené proudění vzduchu',
      'Nižší konstrukční výška vhodná pro mělčí výkop',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Zahrady rodinných domů', 'Uskladnění úrody', 'Domácí sklípek'],
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'kupolovy-340-b',
    name: 'Kupolový sklep 340 (vyšší)',
    category: 'kupolove',
    categoryLabel: 'Kupolové sklepy',
    subtitle: 'Prodloužený kupolový sklep s vyšší konstrukční výškou',
    description: 'Verze kupolového sklepa 340 cm s vyšší klenbou pro pohodlnější stání a více úložného prostoru nad regály.',
    basePriceCZK: 51000,
    dimensions: { length: 340, width: 240, height: 250, innerLength: 320, innerWidth: 220, innerHeight: 230 },
    volumeM3: 20.4,
    weightTons: 11.2,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Vyšší kupolovitý strop pro pohodlnější stání',
      'Vyztužený beton B35',
      'Dlouhá životnost s minimální údržbou',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Zahrady rodinných domů', 'Uskladnění úrody', 'Domácí sklípek'],
    imageUrl: 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'kupolovy-390',
    name: 'Kupolový sklep 390',
    category: 'kupolove',
    categoryLabel: 'Kupolové sklepy',
    subtitle: 'Prostorný kupolový sklep s délkou téměř 4 metry',
    description: 'Zvětšená verze kupolového sklepa s délkou 390 cm poskytující dostatek prostoru pro regály i větší množství zásob.',
    basePriceCZK: 58000,
    dimensions: { length: 390, width: 240, height: 250, innerLength: 370, innerWidth: 220, innerHeight: 230 },
    volumeM3: 23.4,
    weightTons: 12.9,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Kupolovitý strop pro přirozené proudění vzduchu',
      'Velkorysý vnitřní prostor',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Větší rodinné zahrady', 'Uskladnění úrody', 'Domácí sklípek'],
    imageUrl: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'kupolovy-450',
    name: 'Kupolový sklep 450',
    category: 'kupolove',
    categoryLabel: 'Kupolové sklepy',
    subtitle: 'Největší kupolový sklep v nabídce, délka 450 cm',
    description: 'Vlajkový model kupolových sklepů s délkou 4,5 metru pro náročné klienty vyžadující maximální úložnou kapacitu.',
    basePriceCZK: 74000,
    dimensions: { length: 450, width: 250, height: 245, innerLength: 430, innerWidth: 230, innerHeight: 225 },
    volumeM3: 27.6,
    weightTons: 15.2,
    wallThicknessCm: 11,
    concreteClass: 'Železobeton B35',
    features: [
      'Nejprostornější kupolový model v nabídce',
      'Kupolovitý strop pro přirozené proudění vzduchu',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Rozsáhlé pozemky', 'Vinaři a sběratelé', 'Hospodářská stavení'],
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'kupolovy-390-bocni-vstup',
    name: 'Kupolový sklep 390 s bočním vstupem',
    category: 'kupolove',
    categoryLabel: 'Kupolové sklepy',
    subtitle: 'Kupolový sklep s délkou 390 cm a vstupem z delší strany',
    description: 'Varianta kupolového sklepa 390 cm se vstupem z delší (boční) strany místo tradičního čelního vstupu – vhodné pro atypické umístění na pozemku.',
    basePriceCZK: 60500,
    dimensions: { length: 390, width: 240, height: 250, innerLength: 370, innerWidth: 220, innerHeight: 230 },
    volumeM3: 23.4,
    weightTons: 12.9,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Vstup z delší (boční) strany sklepa',
      'Kupolovitý strop pro přirozené proudění vzduchu',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Atypické umístění na pozemku', 'Uskladnění úrody', 'Domácí sklípek'],
    imageUrl: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },

  // ── PLOCHÉ SKLEPY – VSTUP Z BOKU ────────────────────────────────
  {
    id: 'plochy-bok-240',
    name: 'Plochý sklep s bočním vstupem 240',
    category: 'ploche-bok',
    categoryLabel: 'Ploché sklepy – vstup z boku',
    subtitle: 'Nejmenší a nejdostupnější plochý sklep s bočním vchodem',
    description: 'Kompaktní betonový sklep s rovnou střechou a bočním vstupem. Praktické a cenově nejdostupnější řešení pro menší zahrady.',
    basePriceCZK: 34000,
    dimensions: { length: 240, width: 200, height: 218 },
    volumeM3: 10.5,
    weightTons: 5.8,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Rovná stropní deska s možností dalšího využití',
      'Boční vstup pro pohodlnou manipulaci',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Menší zahrady', 'Sklad nářadí i úrody'],
    imageUrl: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-bok-300-a',
    name: 'Plochý sklep s bočním vstupem 300',
    category: 'ploche-bok',
    categoryLabel: 'Ploché sklepy – vstup z boku',
    subtitle: 'Standardní plochý sklep s rovnou stropní deskou',
    description: 'Prefabrikovaný sklep s rovnou střechou a délkou 300 cm. Horní deska poslouží i jako základ pro terasu či pochozí plochu.',
    basePriceCZK: 41000,
    dimensions: { length: 300, width: 240, height: 218 },
    volumeM3: 15.7,
    weightTons: 8.6,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Rovná stropní deska s možností nadzemního využití',
      'Boční vstup pro pohodlnou manipulaci',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Rodinné domy', 'Sklad nářadí i úrody'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-bok-300-b',
    name: 'Plochý sklep s bočním vstupem 300 (vyšší)',
    category: 'ploche-bok',
    categoryLabel: 'Ploché sklepy – vstup z boku',
    subtitle: 'Plochý sklep 300 cm s vyšší konstrukční výškou',
    description: 'Verze plochého sklepa 300 cm s vyšší konstrukční výškou pro pohodlnější stání a více místa na regály.',
    basePriceCZK: 45000,
    dimensions: { length: 300, width: 240, height: 232 },
    volumeM3: 16.7,
    weightTons: 9.2,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Vyšší konstrukční výška pro pohodlnější stání',
      'Boční vstup pro pohodlnou manipulaci',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Rodinné domy', 'Sklad nářadí i úrody'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-bok-340',
    name: 'Plochý sklep s bočním vstupem 340',
    category: 'ploche-bok',
    categoryLabel: 'Ploché sklepy – vstup z boku',
    subtitle: 'Prostornější plochý sklep s délkou 340 cm',
    description: 'Rozšířený plochý sklep s délkou 340 cm. Rovné stěny usnadňují montáž regálů podél obou stran.',
    basePriceCZK: 46000,
    dimensions: { length: 340, width: 240, height: 225 },
    volumeM3: 18.4,
    weightTons: 10.1,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Rovné stěny pro efektivní rozmístění regálů',
      'Boční vstup pro pohodlnou manipulaci',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Rodinné domy', 'Zahradníci'],
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-bok-390-mod',
    name: 'Modulární plochý sklep 390',
    category: 'ploche-bok',
    categoryLabel: 'Ploché sklepy – vstup z boku',
    subtitle: 'Modulární plochý sklep s délkou 390 cm',
    description: 'Modulární řada plochých sklepů s délkou 390 cm nabízí větší kapacitu při zachování rovné, dobře využitelné stropní desky.',
    basePriceCZK: 55000,
    dimensions: { length: 390, width: 240, height: 235 },
    volumeM3: 22,
    weightTons: 12.1,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Modulární řada s větší kapacitou',
      'Boční vstup pro pohodlnou manipulaci',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Větší rodinné zahrady', 'Zahradníci'],
    imageUrl: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1000&q=80',
    isNew: true,
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-bok-450-mod',
    name: 'Modulární plochý sklep 450',
    category: 'ploche-bok',
    categoryLabel: 'Ploché sklepy – vstup z boku',
    subtitle: 'Největší modulární plochý sklep, délka 450 cm',
    description: 'Vlajkový model modulární řady plochých sklepů s délkou 4,5 metru pro maximální úložnou kapacitu.',
    basePriceCZK: 74000,
    dimensions: { length: 450, width: 250, height: 245.5 },
    volumeM3: 27.6,
    weightTons: 15.2,
    wallThicknessCm: 11,
    concreteClass: 'Železobeton B35',
    features: [
      'Nejprostornější model plochých sklepů s bočním vstupem',
      'Modulární konstrukce',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Rozsáhlé pozemky', 'Zahradníci'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },

  // ── PLOCHÉ SKLEPY – VSTUP SHORA ─────────────────────────────────
  {
    id: 'plochy-shora-240',
    name: 'Plochý sklep s horním vstupem 240',
    category: 'ploche-shora',
    categoryLabel: 'Ploché sklepy – vstup shora',
    subtitle: 'Nejmenší plochý sklep se vstupem přes horní poklop',
    description: 'Betonový sklep s rovnou střechou a horním vstupem je optimální pro lokality s omezeným prostorem – nevyžaduje boční přístup ani svah.',
    basePriceCZK: 34000,
    dimensions: { length: 240, width: 200, height: 218 },
    volumeM3: 10.5,
    weightTons: 5.8,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Vstup přes horní poklop – žádný zábor místa na pozemku',
      'Vhodné pro rovinaté i stísněné parcely',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Menší pozemky', 'Rovinaté parcely'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-shora-300-a',
    name: 'Plochý sklep s horním vstupem 300',
    category: 'ploche-shora',
    categoryLabel: 'Ploché sklepy – vstup shora',
    subtitle: 'Standardní plochý sklep se vstupem shora',
    description: 'Sklep zapuštěný pod úroveň terénu s přístupem přes stropní poklop. Na povrchu zůstává viditelný pouze zateplený vstupní otvor.',
    basePriceCZK: 41000,
    dimensions: { length: 300, width: 240, height: 218 },
    volumeM3: 15.7,
    weightTons: 8.6,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Vstup přes horní poklop – žádný zábor místa na pozemku',
      'Nenápadné řešení, trávník lze vést až k poklopu',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Rovinaté parcely', 'Malé pozemky'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-shora-300-b',
    name: 'Plochý sklep s horním vstupem 300 (vyšší)',
    category: 'ploche-shora',
    categoryLabel: 'Ploché sklepy – vstup shora',
    subtitle: 'Plochý sklep 300 cm s vyšší konstrukční výškou',
    description: 'Verze plochého sklepa se vstupem shora a vyšší konstrukční výškou pro pohodlnější pohyb uvnitř.',
    basePriceCZK: 45000,
    dimensions: { length: 300, width: 240, height: 232 },
    volumeM3: 16.7,
    weightTons: 9.2,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Vyšší konstrukční výška',
      'Vstup přes horní poklop',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Rovinaté parcely', 'Malé pozemky'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-shora-340',
    name: 'Plochý sklep s horním vstupem 340',
    category: 'ploche-shora',
    categoryLabel: 'Ploché sklepy – vstup shora',
    subtitle: 'Prostornější plochý sklep se vstupem shora, délka 340 cm',
    description: 'Rozšířený plochý sklep se vstupem přes horní poklop a délkou 340 cm pro větší úložnou kapacitu.',
    basePriceCZK: 46000,
    dimensions: { length: 340, width: 240, height: 225 },
    volumeM3: 18.4,
    weightTons: 10.1,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Vstup přes horní poklop',
      'Větší úložná kapacita',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Rovinaté parcely', 'Malé pozemky'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-shora-390-mod',
    name: 'Modulární plochý sklep 390 se vstupem shora',
    category: 'ploche-shora',
    categoryLabel: 'Ploché sklepy – vstup shora',
    subtitle: 'Modulární plochý sklep se vstupem shora, délka 390 cm',
    description: 'Modulární řada plochých sklepů se vstupem přes horní poklop a délkou 390 cm.',
    basePriceCZK: 55000,
    dimensions: { length: 390, width: 240, height: 235 },
    volumeM3: 22,
    weightTons: 12.1,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Modulární řada s větší kapacitou',
      'Vstup přes horní poklop',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Větší rodinné zahrady', 'Rovinaté parcely'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-shora-450-mod',
    name: 'Modulární plochý sklep 450 se vstupem shora',
    category: 'ploche-shora',
    categoryLabel: 'Ploché sklepy – vstup shora',
    subtitle: 'Největší modulární plochý sklep se vstupem shora',
    description: 'Vlajkový model modulární řady se vstupem přes horní poklop a délkou 4,5 metru.',
    basePriceCZK: 74000,
    dimensions: { length: 450, width: 250, height: 245.5 },
    volumeM3: 27.6,
    weightTons: 15.2,
    wallThicknessCm: 11,
    concreteClass: 'Železobeton B35',
    features: [
      'Nejprostornější model se vstupem shora',
      'Modulární konstrukce',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Rozsáhlé pozemky', 'Rovinaté parcely'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-shora-300-operna',
    name: 'Plochý sklep 300 s opěrnou stěnou na desce',
    category: 'ploche-shora',
    categoryLabel: 'Ploché sklepy – vstup shora',
    subtitle: 'Provedení s opěrnou stěnou na základové desce',
    description: 'Varianta plochého sklepa se vstupem shora a opěrnou stěnou přímo na základové desce – vhodné pro svažitější terén kolem vstupu.',
    basePriceCZK: 43500,
    dimensions: { length: 300, width: 240, height: 218 },
    volumeM3: 15.7,
    weightTons: 8.6,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Opěrná stěna na základové desce',
      'Vstup přes horní poklop',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Svažité pozemky', 'Rovinaté parcely'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-shora-340-operna',
    name: 'Plochý sklep 340 s opěrnou stěnou na desce',
    category: 'ploche-shora',
    categoryLabel: 'Ploché sklepy – vstup shora',
    subtitle: 'Prostornější provedení s opěrnou stěnou na základové desce',
    description: 'Rozšířená varianta plochého sklepa se vstupem shora, opěrnou stěnou na základové desce a délkou 340 cm.',
    basePriceCZK: 49500,
    dimensions: { length: 340, width: 240, height: 225 },
    volumeM3: 18.4,
    weightTons: 10.1,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Opěrná stěna na základové desce',
      'Vstup přes horní poklop',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Svažité pozemky', 'Rovinaté parcely'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-shora-300-bez-desky',
    name: 'Plochý sklep 300 bez základové desky',
    category: 'ploche-shora',
    categoryLabel: 'Ploché sklepy – vstup shora',
    subtitle: 'Provedení bez základové desky pro vlastní betonáž základu',
    description: 'Varianta plochého sklepa se vstupem shora bez přiložené základové desky – vhodné, pokud si zákazník připravuje vlastní základovou konstrukci.',
    basePriceCZK: 39000,
    dimensions: { length: 300, width: 240, height: 232 },
    volumeM3: 16.7,
    weightTons: 9.2,
    wallThicknessCm: 10,
    concreteClass: 'Železobeton B35',
    features: [
      'Bez základové desky – nižší cena',
      'Vstup přes horní poklop',
      'Vyztužený beton B35',
      'Dodání skladem do 2–4 pracovních dnů'
    ],
    recommendedFor: ['Vlastní příprava základu', 'Rovinaté parcely'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  }
];

export const ACCESSORIES: Accessory[] = [
  {
    id: 'kopulova-predsin',
    name: 'Kopulová předsíň',
    priceCZK: 20000,
    category: 'predsin',
    description: 'Kupolovitá vstupní předsíň chránící vchod do sklepa před deštěm, sněhem a mrazem.',
    unit: 'ks',
    iconName: 'DoorOpen'
  },
  {
    id: 'kopulova-predsin-schody',
    name: 'Kopulová předsíň se schody',
    priceCZK: 27500,
    category: 'predsin',
    description: 'Kupolovitá vstupní předsíň s integrovaným prefabrikovaným schodištěm.',
    unit: 'ks',
    iconName: 'Maximize2'
  },
  {
    id: 'schody',
    name: 'Schody',
    priceCZK: 20000,
    category: 'schody',
    description: 'Prefabrikované betonové schodiště přizpůsobené výšce zvoleného sklepa.',
    unit: 'sada',
    iconName: 'Footprints'
  },
  {
    id: 'rovne-dvere',
    name: 'Rovné dveře',
    priceCZK: 18500,
    category: 'dvere',
    description: 'Standardní vstupní dveře pro betonový sklep.',
    unit: 'ks',
    iconName: 'DoorClosed'
  },
  {
    id: 'dvere-kupolovy-sklep',
    name: 'Dveře pro kupolový sklep',
    priceCZK: 20000,
    category: 'dvere',
    description: 'Dveře tvarované speciálně pro vstup kupolového sklepa.',
    unit: 'ks',
    iconName: 'DoorClosed'
  },
  {
    id: 'dvere-kupolova-predsin',
    name: 'Dveře pro kupolovou předsíň',
    priceCZK: 20000,
    category: 'dvere',
    description: 'Vstupní dveře osazené do kupolové předsíně.',
    unit: 'ks',
    iconName: 'DoorClosed'
  }
];

export const REGIONS_SHIPPING = [
  { name: 'Jihomoravský kraj (Brno, Znojmo, Břeclav)', distancePriceCZK: 4500 },
  { name: 'Středočeský kraj & Praha', distancePriceCZK: 5000 },
  { name: 'Vysočina (Jihlava, Třebíč, Havl. Brod)', distancePriceCZK: 4800 },
  { name: 'Olomoucký & Zlínský kraj', distancePriceCZK: 4200 },
  { name: 'Moravskoslezský kraj (Ostrava, Opava)', distancePriceCZK: 4900 },
  { name: 'Jihočeský kraj (Č. Budějovice, Tábor)', distancePriceCZK: 5500 },
  { name: 'Plzeňský & Karlovarský kraj', distancePriceCZK: 6200 },
  { name: 'Ústecký & Liberecký kraj', distancePriceCZK: 5800 },
  { name: 'Královéhradecký & Pardubický kraj', distancePriceCZK: 4900 },
  { name: 'Západní Slovensko (Bratislava, Trnava, Trenčín)', distancePriceCZK: 5500 },
  { name: 'Střední a Východní Slovensko (Žilina, B. Bystrica, Košice)', distancePriceCZK: 6800 }
];
