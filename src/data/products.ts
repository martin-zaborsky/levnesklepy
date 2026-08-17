export interface Product {
  id: string;
  name: string;
  category: 'klenute' | 'ploche' | 'vinotéky' | 'doplnky' | 'nadrze';
  categoryLabel: string;
  subtitle: string;
  description: string;
  basePriceCZK: number;
  basePriceEUR: number;
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
  priceEUR: number;
  category: 'dvere' | 'schody' | 'ventilace' | 'izolace' | 'elektro' | 'police';
  description: string;
  unit: string;
  iconName: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'klenuty-standard-300',
    name: 'Klenutý sklep Standard 300',
    category: 'klenute',
    categoryLabel: 'Klenuté sklepy',
    subtitle: 'Nejpopulárnější klenutý zahradní sklep pro uskladnění úrody a vína',
    description: 'Monolitický prefabrikovaný železobetonový sklep s půlkruhovou klenbou. Klenutý strop poskytuje vynikající statickou nosnost, ideální cirkulaci vzduchu a stálé vnitřní klima (8–12 °C) po celý rok.',
    basePriceCZK: 62000,
    basePriceEUR: 2480,
    dimensions: {
      length: 300,
      width: 240,
      height: 250,
      innerLength: 280,
      innerWidth: 220,
      innerHeight: 235
    },
    volumeM3: 18,
    weightTons: 9.5,
    wallThicknessCm: 10,
    concreteClass: 'C30/37 (B30/B35) W8 vodostavební',
    features: [
      'Půlkruhová klenba s vysokou nosností zásypu (až 2,5 m zeminy)',
      'Čelní vstup se zpevněným překladem a zárubní',
      'Příprava na gravitační ventilaci (2× prostup DN 110)',
      'Dvojitá hydroizolace vnějších stěn z výroby',
      'Masivní ocelová armatura z žebírkové oceli B500'
    ],
    recommendedFor: ['Zahrady rodinných domů', 'Uskladnění brambor a jablek', 'Domácí vinotéka', 'Zahradní chladírna'],
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'klenuty-maxi-350',
    name: 'Klenutý sklep Maxi 350',
    category: 'klenute',
    categoryLabel: 'Klenuté sklepy',
    subtitle: 'Prostorný klenutý sklep s prodlouženým tělem a velkou kapacitou',
    description: 'Zvětšená verze klenutého sklepa s délkou 3,5 metru. Poskytuje dostatek prostoru jak pro regály na potraviny, tak pro regálový systém na víno a posezení s přáteli.',
    basePriceCZK: 68000,
    basePriceEUR: 2720,
    dimensions: {
      length: 350,
      width: 240,
      height: 250,
      innerLength: 330,
      innerWidth: 220,
      innerHeight: 235
    },
    volumeM3: 21,
    weightTons: 11.2,
    wallThicknessCm: 10,
    concreteClass: 'C30/37 (B30/B35) W8 vodostavební',
    features: [
      'Užitná plocha cca 7,5 m² s vysokým stropem',
      'Přirozená regulace vlhkosti 75–85 % vhodná pro zrání vína',
      'Možnost dovybavení prefabrikovaným vstupním schodištěm',
      'Odolnost vůči mrazu a tlakové vodě',
      'Rychlé usazení hydraulickou rukou za 45 minut'
    ],
    recommendedFor: ['Vinaři a sběratelé', 'Větší rodinné zahrady', 'Úschovna zavařenin a zeleniny'],
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'klenuty-grand-400',
    name: 'Klenutý sklep Grand 400',
    category: 'klenute',
    categoryLabel: 'Klenuté sklepy',
    subtitle: 'Největší jednodílný klenutý sklep na trhu o délce 4 metry',
    description: 'Špičkový klenutý monolit pro náročné klienty a pěstitele. Umožňuje plnohodnotné rozdělení na potravinovou a společensko-degustační část.',
    basePriceCZK: 76000,
    basePriceEUR: 3040,
    dimensions: {
      length: 400,
      width: 240,
      height: 250,
      innerLength: 380,
      innerWidth: 220,
      innerHeight: 235
    },
    volumeM3: 24,
    weightTons: 13.0,
    wallThicknessCm: 11,
    concreteClass: 'C30/37 (B30/B35) W8 vodostavební',
    features: [
      'Prostor pro až 600 lahví vína a 15 velkých přepravek',
      'Extra zesílené stěny s dvojitou armovací sítí',
      'Příprava pro instalaci osvětlení a rozvodů',
      'Záruka na těsnost a konstrukci 5 let',
      'Možnost napojení klenuté vstupní šíje'
    ],
    recommendedFor: ['Privátní vinné sklípky', 'Hospodářská stavení', 'Restaurace a penziony'],
    imageUrl: 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'klenuty-bocni-vstup-350',
    name: 'Klenutý sklep s bočním vstupem 350',
    category: 'klenute',
    categoryLabel: 'Klenuté sklepy',
    subtitle: 'Klenutý sklep se vstupem na delší boční straně pro specifický terén',
    description: 'Ideální řešení pro instalaci ve svahu nebo u plotu, kde není možný čelní přístup. Zachovává veškeré výhody klenutého stropu s upravenou dispozicí vstupu.',
    basePriceCZK: 72000,
    basePriceEUR: 2880,
    dimensions: {
      length: 350,
      width: 250,
      height: 260,
      innerLength: 330,
      innerWidth: 230,
      innerHeight: 240
    },
    volumeM3: 22,
    weightTons: 12.0,
    wallThicknessCm: 10,
    concreteClass: 'C30/37 (B30/B35) W8 vodostavební',
    features: [
      'Boční vstup umožňující symetrické rozdělení vnitřku vlevo/vpravo',
      'Vhodné pro zapuštění do svahovitého pozemku',
      'Masivní překlad a integrované odtokové žlábky',
      '100% vodotěsný a odolný vůči zemní vlhkosti'
    ],
    recommendedFor: ['Svažité pozemky', 'Úzké zahrady', 'Vinné archivy'],
    imageUrl: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-bocni-300',
    name: 'Plochý sklep s bočním vstupem 300',
    category: 'ploche',
    categoryLabel: 'Ploché sklepy',
    subtitle: 'Kompaktní sklep s rovnou pochozí/pojezdovou stropní deskou',
    description: 'Prefabrikovaný sklep s rovnou střechou. Horní stropní desku lze využít jako základ pro zahradní altán, terasu, vyvýšený záhon nebo pochozí dlažbu.',
    basePriceCZK: 54000,
    basePriceEUR: 2160,
    dimensions: {
      length: 300,
      width: 240,
      height: 210,
      innerLength: 280,
      innerWidth: 220,
      innerHeight: 195
    },
    volumeM3: 15,
    weightTons: 8.5,
    wallThicknessCm: 10,
    concreteClass: 'C30/37 (B30/B35) W8 vodostavební',
    features: [
      'Plochá stropní deska s možností nadzemního využití',
      'Pohodlný boční vchod pro chůzi bez ohýbání',
      'Nízká stavební výška vhodná při vyšší hladině spodní vody',
      'Snadná montáž a rychlé zásypy'
    ],
    recommendedFor: ['Menší městské zahrady', 'Umístění pod terasu či pergolu', 'Sklad nářadí i úrody'],
    imageUrl: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1000&q=80',
    isPopular: true,
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-bocni-350',
    name: 'Plochý sklep s bočním vstupem 350',
    category: 'ploche',
    categoryLabel: 'Ploché sklepy',
    subtitle: 'Rozšířený plochý sklep s maximální užitnou rovnou plochou',
    description: 'Všestranný železobetonový sklep o délce 350 cm. Rovné stěny usnadňují montáž standardizovaných policových systémů a regálů podél obou stěn.',
    basePriceCZK: 59000,
    basePriceEUR: 2360,
    dimensions: {
      length: 350,
      width: 240,
      height: 210,
      innerLength: 330,
      innerWidth: 220,
      innerHeight: 195
    },
    volumeM3: 17.5,
    weightTons: 9.8,
    wallThicknessCm: 10,
    concreteClass: 'C30/37 (B30/B35) W8 vodostavební',
    features: [
      'Rovné pravoúhlé stěny pro maximální efektivitu regálů',
      'Nosnost stropní desky dimenzována na pochozí zátěž i zeminu',
      'Izolační nátěr s dlouhou životností',
      'Montáž bez nutnosti autojeřábu přímo z kamionu'
    ],
    recommendedFor: ['Rodinné domy', 'Zahradníci', 'Sklady techniky a potravin'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'plochy-horni-vstup-300',
    name: 'Plochý sklep s horním vstupem (šachta/poklop)',
    category: 'ploche',
    categoryLabel: 'Ploché sklepy',
    subtitle: 'Diskrétní podzemní sklep se vstupem shora pro minimální zábor místa',
    description: 'Sklep zapuštěný zcela pod úroveň terénu s přístupem přes stropní inspekční šachtu a žebřík / strmé schůdky. Na povrchu je viditelný pouze zateplený poklop.',
    basePriceCZK: 51000,
    basePriceEUR: 2040,
    dimensions: {
      length: 300,
      width: 240,
      height: 210,
      innerLength: 280,
      innerWidth: 220,
      innerHeight: 195
    },
    volumeM3: 15,
    weightTons: 8.2,
    wallThicknessCm: 10,
    concreteClass: 'C30/37 (B30/B35) W8 vodostavební',
    features: [
      'Nevyžaduje žádný terénní svah ani zářez do zahrady',
      'Vstup přes horní poklop 80 × 80 cm s plynovými vzpěrami',
      'Nenápadné řešení – trávník nebo dlažba vede přímo kolem',
      'Příprava pro závěsné žebříky nebo skládací schůdky'
    ],
    recommendedFor: ['Rovinaté parcely', 'Malé pozemky', 'Tajný trezor / sklad cenností'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'vinoteka-dvoumodul-600',
    name: 'Modulární vinný sklep & vinotéka 600',
    category: 'vinotéky',
    categoryLabel: 'Vinné & Modulární sklepy',
    subtitle: 'Exkluzivní propojený dvoudílný sklep s degustačním sálem',
    description: 'Profesionální dvoudílná klenutá sestava o celkové délce 6 metrů. Skládá se ze dvou monolitických klenutých segmentů spojených speciálním vodonepropustným dilatačním tmelem. Ideální jako soukromý vinný archiv i degustační salonek.',
    basePriceCZK: 124000,
    basePriceEUR: 4960,
    dimensions: {
      length: 600,
      width: 240,
      height: 250,
      innerLength: 560,
      innerWidth: 220,
      innerHeight: 235
    },
    volumeM3: 36,
    weightTons: 19.0,
    wallThicknessCm: 11,
    concreteClass: 'C30/37 (B30/B35) W8 vodostavební',
    features: [
      'Obrovský vnitřní prostor přes 12 m² s klenutým stropem',
      'Dvě funkční zóny: Degustační posezení + Archiv vín',
      'Těsnicí systém s hydrofobními páskami a kompozitním zámkem',
      'Nadstandardní mikroklima s přirozenou vlhkostí',
      'Reprezentativní vzhled po obezdění lícovými cihlami'
    ],
    recommendedFor: ['Sběratelé vín', 'Penziony a agroturistika', 'Exkluzivní rezidence'],
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1000&q=80',
    isNew: true,
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  },
  {
    id: 'nadrz-destova-voda-10m3',
    name: 'Betonová nádrž na dešťovou vodu 10 m³',
    category: 'nadrze',
    categoryLabel: 'Jímky & Nádrže',
    subtitle: 'Monolitická samonosná nádrž s atestem nepropustnosti a filtrem',
    description: 'Vodotěsná železobetonová nádrž pro akumulaci dešťové vody nebo jako bezodtoková jímka/žumpa. 100% samonosná bez nutnosti obetonování, odolná vůči tlaku zeminy i spodní vodě.',
    basePriceCZK: 36000,
    basePriceEUR: 1440,
    dimensions: {
      length: 300,
      width: 240,
      height: 180
    },
    volumeM3: 10,
    weightTons: 6.5,
    wallThicknessCm: 10,
    concreteClass: 'C30/37 W8 vodostavební',
    features: [
      '100% vodotěsnost s certifikátem TZÚS',
      'Včetně pochozí betonové desky a komínu 50 cm s poklopem',
      'Možnost napojení čerpadel a filtračních košů',
      'Montáž z auta s hydraulickou rukou ZDARMA'
    ],
    recommendedFor: ['Zálivka zahrady', 'Splachování WC dešťovkou', 'Žumpy u chat a domů'],
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1000&q=80',
    stockStatus: 'Skladem – dodání do 2-4 dnů'
  }
];

export const ACCESSORIES: Accessory[] = [
  {
    id: 'dvere-ocel-zateplene',
    name: 'Zateplené ocelové dveře s těsněním a zámkem FAB',
    priceCZK: 8500,
    priceEUR: 340,
    category: 'dvere',
    description: 'Kvalitní lakované ocelové křídlo vyplněné PU pěnou s obvodovým pryžovým těsněním a klikou FAB.',
    unit: 'ks',
    iconName: 'DoorClosed'
  },
  {
    id: 'dvere-dub-masiv',
    name: 'Prémiové masivní dubové dveře s kovanými panty',
    priceCZK: 14500,
    priceEUR: 580,
    category: 'dvere',
    description: 'Stylové řemeslné dřevěné dveře s historizujícím kováním – ideální pro vinné sklepy.',
    unit: 'ks',
    iconName: 'DoorOpen'
  },
  {
    id: 'schody-beton-monolit',
    name: 'Prefabrikované betonové schodiště (5 stupňů)',
    priceCZK: 6000,
    priceEUR: 240,
    category: 'schody',
    description: 'Masivní železobetonové schody s protiskluzovým drážkováním přizpůsobené výšce sklepa.',
    unit: 'sada',
    iconName: 'Footprints'
  },
  {
    id: 'schody-klenuta-predsien',
    name: 'Klenutá vstupní šíje (předsíň) se schodištěm',
    priceCZK: 18000,
    priceEUR: 720,
    category: 'schody',
    description: 'Prodloužená klenutá chodba s integrovaným schodištěm chránící vstup před deštěm a mrazem.',
    unit: 'komplet',
    iconName: 'Maximize2'
  },
  {
    id: 'ventilace-gravitacni',
    name: 'Dvouokruhová gravitační ventilace (nátok + odtah DN 110)',
    priceCZK: 2500,
    priceEUR: 100,
    category: 'ventilace',
    description: 'PVC potrubí se stříškami a nerezovou mřížkou proti hlodavcům zajišťující stálý tah a čerstvý vzduch.',
    unit: 'sada',
    iconName: 'Wind'
  },
  {
    id: 'izolace-hydrostop-extra',
    name: 'Vnější penetrační a asfaltová hydroizolace HYDROSTOP',
    priceCZK: 3500,
    priceEUR: 140,
    category: 'izolace',
    description: 'Aplikace elastického bezešvého hydroizolačního nátěru pro maximální ochranu ve vlhkém podloží.',
    unit: 'aplikace',
    iconName: 'ShieldCheck'
  },
  {
    id: 'elektro-priprava-led',
    name: 'Elektroinstalační příprava s IP65 LED osvětlením',
    priceCZK: 3200,
    priceEUR: 128,
    category: 'elektro',
    description: 'Kabelové průchodky, vodotěsný vypínač a odolné hermetické LED svítidlo se studeným/teplým světlem.',
    unit: 'sada',
    iconName: 'Lightbulb'
  },
  {
    id: 'regaly-drevo-modul',
    name: 'Dřevěné smrkové regály na zavařeniny a přepravky (2 m)',
    priceCZK: 4800,
    priceEUR: 192,
    category: 'police',
    description: 'Tlakově impregnované robustní regály se 4 policemi a vysokou nosností až 120 kg na polici.',
    unit: 'ks',
    iconName: 'Grid'
  }
];

export const REGIONS_SHIPPING = [
  { name: 'Jihomoravský kraj (Brno, Znojmo, Břeclav)', distancePriceCZK: 4500, distancePriceEUR: 180 },
  { name: 'Středočeský kraj & Praha', distancePriceCZK: 5000, distancePriceEUR: 200 },
  { name: 'Vysočina (Jihlava, Třebíč, Havl. Brod)', distancePriceCZK: 4800, distancePriceEUR: 192 },
  { name: 'Olomoucký & Zlínský kraj', distancePriceCZK: 4200, distancePriceEUR: 168 },
  { name: 'Moravskoslezský kraj (Ostrava, Opava)', distancePriceCZK: 4900, distancePriceEUR: 196 },
  { name: 'Jihočeský kraj (Č. Budějovice, Tábor)', distancePriceCZK: 5500, distancePriceEUR: 220 },
  { name: 'Plzeňský & Karlovarský kraj', distancePriceCZK: 6200, distancePriceEUR: 248 },
  { name: 'Ústecký & Liberecký kraj', distancePriceCZK: 5800, distancePriceEUR: 232 },
  { name: 'Královéhradecký & Pardubický kraj', distancePriceCZK: 4900, distancePriceEUR: 196 },
  { name: 'Západní Slovensko (Bratislava, Trnava, Trenčín)', distancePriceCZK: 5500, distancePriceEUR: 220 },
  { name: 'Střední a Východní Slovensko (Žilina, B. Bystrica, Košice)', distancePriceCZK: 6800, distancePriceEUR: 272 }
];
