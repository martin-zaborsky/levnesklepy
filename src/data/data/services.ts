export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  keyBenefits: string[];
  specs: { label: string; value: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'doprava-hydraulicka-ruka',
    title: 'Doprava po celé ČR a SR s hydraulickou rukou',
    slug: 'doprava-sklepu',
    shortDesc: 'Vlastní nákladní soupravy se silným hydraulickým jeřábem s dosahem až 10 metrů.',
    fullDesc: 'Disponujeme moderním vozovým parkem specializovaným na přepravu těžkých monolitických betonových prvků. Naše auta jsou vybavena výkonnou hydraulickou rukou (HR), díky které dokážeme sklep bezpečně přemístit a osadit přímo do připraveného výkopu na vašem pozemku.',
    icon: 'Truck',
    keyBenefits: [
      'Garantované dodání do 2 až 4 pracovních dnů (sklep máme skladem)',
      'Dosah hydraulické ruky 6 až 10 metrů od vozu',
      'Zkušení řidiči a technici se stovkami úspěšných vykládek',
      'Přeprava i na Slovensko a do příhraničních oblastí'
    ],
    specs: [
      { label: 'Doba dodání', value: '2–4 pracovní dny' },
      { label: 'Dosah jeřábu', value: 'až 10 metrů' },
      { label: 'Průjezdnost vozu', value: 'Šířka min. 3,0 m, výška 4,0 m' },
      { label: 'Pokrytí', value: 'Celá Česká republika & Slovensko' }
    ]
  },
  {
    id: 'montaz-zdarma',
    title: 'Odborné usazení a montáž ZDARMA',
    slug: 'montaz-zdarma',
    shortDesc: 'Usazení sklepa přímo do připraveného výkopu je u nás vždy v ceně výrobku.',
    fullDesc: 'Zatímco u konkurence platíte desetitisíce za přistavení externího jeřábu, u nás je usazení sklepa do vyhloubeného výkopu zcela ZDARMA. Náš technik na místě provede kontrolu roviny podloží a s milimetrovou přesností sklep usadí.',
    icon: 'Hammer',
    keyBenefits: [
      'Úspora až 15 000 Kč za pronájem autojeřábu',
      'Kompletní usazení trvá pouze 30 až 60 minut',
      'Kontrola těsnosti a uložení na štěrkové lože',
      'Možnost okamžitého montování doplňků a dveří'
    ],
    specs: [
      { label: 'Cena montáže', value: '0 Kč (ZDARMA k objednávce)' },
      { label: 'Délka usazení', value: '30–60 minut' },
      { label: 'Podklad', value: 'Štěrkové lože 10–15 cm (frakce 8–16)' },
      { label: 'Potřeba jeřábu', value: 'Není potřeba (vše zvládne naše auto)' }
    ]
  },
  {
    id: 'priprava-podlozi-a-vykop',
    title: 'Poradenství k výkopu & Příprava podloží',
    slug: 'priprava-podlozi',
    shortDesc: 'Přesné technické výkresy pro bagristu a instrukce pro bezchybnou přípravu stavební jámy.',
    fullDesc: 'Každému zákazníkovi dodáme detailní kótovaný výkres a návod pro strojníka bagru. Doporučíme přesný rozměr výkopu (obvykle o 50 cm širší než sklep pro manipulaci), správnou frakci štěrkového lože a odvodnění drenážním systémem v případě jílovitého podloží.',
    icon: 'Layers',
    keyBenefits: [
      'Přesné technické výkresy výkopu zdarma ke stažení',
      'Telefonická asistence našeho technika před a během výkopu',
      'Doporučení pro odvodnění a drenáž v jílovité půdě',
      'Možnost zprostředkování ověřeného bagristy v regionu'
    ],
    specs: [
      { label: 'Rozměr výkopu', value: '+50 cm na každou stranu sklepa' },
      { label: 'Drenážní lože', value: 'Štěrk frakce 8–16 nebo 16–32 mm' },
      { label: 'Rovinnost', value: 'Vyrovnáno latí do vodováhy (tolerance 1 cm)' },
      { label: 'Podkladní beton', value: 'Není nutný (postačí hutněný štěrk)' }
    ]
  },
  {
    id: 'hydroizolace-zatepleni',
    title: 'Hydroizolace a tepelná izolace',
    slug: 'hydroizolace',
    shortDesc: 'Aplikace vnějších asfaltových a penetračních vrstev pro 100% ochranu před zemní vlhkostí.',
    fullDesc: 'Naše sklepy jsou vyrobeny z certifikovaného vodostavebního betonu B30/B35 W8 s krystalickou hydrofobní přísadou. Pro maximální jistotu v náročných podmínkách aplikujeme vnější penetrační a elastický bezešvý asfaltový nátěr Hydrostop a doporučujeme zateplení XPS deskami.',
    icon: 'ShieldCheck',
    keyBenefits: [
      'Vodotěsný beton třídy C30/37 (W8) již v základu',
      'Dvojitý vnější bezešvý nátěr proti radonu a zemní vlhkosti',
      'Zateplení stropu a vstupní šíje pro eliminaci kondenzace v zimě',
      'Dlouholetá záruka a certifikace nepropustnosti TZÚS'
    ],
    specs: [
      { label: 'Třída betonu', value: 'C30/37 (B30/B35) W8 vodostavební' },
      { label: 'Vnější nátěr', value: 'Asfaltová bezešvá suspenze Hydrostop' },
      { label: 'Doporučené XPS', value: 'Tloušťka 50–100 mm na stropní desku' },
      { label: 'Záruka na těsnost', value: '5 let' }
    ]
  },
  {
    id: 'legislativa-a-ohlaseni',
    title: 'Legislativa & Stavba bez stavebního povolení',
    slug: 'legislativa-a-ohlaseni',
    shortDesc: 'Jednoduché umístění sklepa do 25 m² a hloubky 3 m dle stavebního zákona.',
    fullDesc: 'Podle platné legislativy ČR stavby do 25 m² zastavěné plochy a do hloubky 3 metrů na pozemku rodinného domu či rekreační stavby nepodléhají složitému stavebnímu povolení. Pomůžeme vám s přípravou jednoduchého situačního výkresu pro územní souhlas či ohlášení.',
    icon: 'FileCheck',
    keyBenefits: [
      'Většina našich sklepů (do 15 m²) splňuje limit bez povolení',
      'Dodáme kompletní statické posouzení a certifikát výrobku',
      'Vzorové formuláře pro jednání se stavebním úřadem',
      'Minimální byrokracie a rychlá realizace do několika dnů'
    ],
    specs: [
      { label: 'Limit zastavěné plochy', value: 'Do 25 m² (bez klasického povolení)' },
      { label: 'Limit hloubky', value: 'Do 3,0 m pod terénem' },
      { label: 'Vzdálenost od hranice', value: 'Standardně min. 2 metry od plotu' },
      { label: 'Dokumentace', value: 'Statika + Certifikát shody součástí' }
    ]
  }
];

export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: 'Výběr modelu a kalkulace',
    desc: 'Vyberete si typ sklepa (klenutý, plochý, vinný) a doplňky v našem online konfigurátoru nebo telefonicky s naším specialistou.',
    tag: '5 minut'
  },
  {
    step: 2,
    title: 'Příprava výkopu na pozemku',
    desc: 'Podle dodaného technického nákresu místní bagrista vyhloubí jámu a vytvoří rovné štěrkové lože (10–15 cm).',
    tag: '1 den'
  },
  {
    step: 3,
    title: 'Doprava a usazení ZDARMA',
    desc: 'Náš nákladní vůz s hydraulickou rukou přiveze sklep a během 45 minut jej usadí s milimetrovou přesností do výkopu.',
    tag: 'Do 2–4 dnů'
  },
  {
    step: 4,
    title: 'Montáž doplňků & Hydroizolace',
    desc: 'Namontují se dveře, ventilační potrubí a aplikuje se izolační vrstva na strop a stěny sklepa.',
    tag: 'Tentýž den'
  },
  {
    step: 5,
    title: 'Zasypání zeminou & Užívání',
    desc: 'Sklep se obsype a zasype zeminou. Vznikne přírodní zelený kopeček nebo pochozí terasa a můžete okamžitě skladovat úrodu a víno.',
    tag: 'Hotovo!'
  }
];

export const FAQS = [
  {
    question: 'Potřebuji na betonový sklep stavební povolení?',
    answer: 'Ve většině případů NE. Dle platného stavebního zákona stavba podzemního sklepa do 25 m² zastavěné plochy a do hloubky 3 metrů na pozemku rodinného domu nebo rekreační stavby nevyžaduje klasické stavební povolení ani ohlášení, postačí územní souhlas nebo volný režim při dodržení odstupové vzdálenosti 2 m od hranice sousedního pozemku. Ke každému sklepu dodáváme certifikát a technický list pro stavební úřad.'
  },
  {
    question: 'Jak rychle sklep dodáte a máte výrobky skladem?',
    answer: 'Všechny standardní rozměry klenutých a plochých sklepů (300×240, 350×240, 400×240 cm) držíme trvale SKLADEM ve velkém počtu. Dodání a montáž realizujeme po celé ČR a SR běžně do 2 až 4 pracovních dnů od potvrzení objednávky.'
  },
  {
    question: 'Jak probíhá montáž a kolik stojí?',
    answer: 'Montáž, tedy složení a osazení sklepa přímo do vámi připraveného výkopu, je u nás ZDARMA! Přijede naše nákladní souprava vybavená silným hydraulickým jeřábem s dosahem až 10 metrů. Není potřeba objednávat drahý externí autojeřáb. Celé usazení sklepa trvá pouze cca 45 minut.'
  },
  {
    question: 'Jak má být připraven výkop před příjezdem auta?',
    answer: 'Výkop by měl být po obvodu o cca 40–50 cm širší a delší než rozměry sklepa, aby byla možná pohodlná manipulace a následný zásyp. Dno výkopu musí být vyrovnané vodorovně a vysypané vrstvou štěrku (frakce 8–16 nebo 16–32 mm) o síle 10–15 cm, která se zhutní vibrační deskou. Podkladní betonová deska není nutná.'
  },
  {
    question: 'Jaká je teplota a vlhkost uvnitř sklepa?',
    answer: 'Díky monolitickému železobetonovému tělu a zásypu zeminou (ideálně 60–100 cm) se uvnitř udržuje celoročně stabilní teplota mezi 8 °C v zimě a 12 °C v létě při přirozené vlhkosti 75–85 %. To jsou perfektní podmínky pro uskladnění jablek, brambor, kořenové zeleniny, zavařenin i pro dlouhodobé zrání vína bez nutnosti klimatizace.'
  },
  {
    question: 'Co když mám na pozemku vysokou hladinu spodní vody?',
    answer: 'Naše sklepy jsou lité z certifikovaného vodostavebního betonu B30/B35 W8 s přísadami pro 100% vodonepropustnost. Pro lokality s vysokou spodní vodou doporučujeme plochý sklep s nižší stavební výškou nebo klenutý sklep s dodatečnou vnější izolací Hydrostop a instalací obvodové drenáže do štěrkového lože s kontrolní šachticí.'
  },
  {
    question: 'Jak se řeší platba za sklep a dopravu?',
    answer: 'Platba probíhá až po úspěšném dovezení a přesném usazení sklepa do výkopu přímo na místě řidiči/technikovi v hotovosti nebo okamžitým bankovním převodem na základě vystavené faktury. Žádné zálohy předem u standardních modelů nepožadujeme.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ing. Pavel Novotný',
    location: 'Benešov u Prahy',
    product: 'Klenutý sklep 350 × 240 cm',
    date: 'Červen 2026',
    rating: 5,
    text: 'Skvělá domluva s dispečinkem. V úterý jsem objednal, ve čtvrtek ráno už nákladní auto stálo u brány. Řidič pan Marek usadil 11tunový sklep na milimetr přesně mezi stromy za necelých 40 minut. Uvnitř máme stálých 9 °C a jablka z podzimu vydrží křupavá až do května.'
  },
  {
    id: 2,
    name: 'Marek & Zuzana Dvořákovi',
    location: 'Mikulov (Pálava)',
    product: 'Modulární vinný sklep 600 cm',
    date: 'Květen 2026',
    rating: 5,
    text: 'Postavili jsme si soukromý vinný archiv ze dvou propojených modulů. Spoje jsou perfektně utěsněné, klenba vypadá po nasvícení fantasticky. Montáž zdarma nám ušetřila přes 20 tisíc za jeřáb. Doporučuji všem milovníkům vína!'
  },
  {
    id: 3,
    name: 'Petr Kalousek',
    location: 'Tábor (Jižní Čechy)',
    product: 'Plochý sklep s bočním vstupem 300 cm',
    date: 'Duben 2026',
    rating: 5,
    text: 'Hledal jsem řešení na malou zahradu. Na stropní desku plochého sklepa jsme udělali dřevěnou terasu s grilem a pod ní máme perfektní chladírnu na pivo, brambory a zahradní nářadí. Cena bezkonkurenční a kvalita betonu prvotřídní.'
  }
];

export const CERTIFICATES = [
  {
    title: 'Certifikát vodostavebního betonu C30/37 (B30/B35) W8',
    issuer: 'TZÚS Praha – Technický a zkušební ústav stavební',
    desc: 'Ověřená nepropustnost vůči tlakové vodě a mrazuvzdornost dle ČSN EN 206.'
  },
  {
    title: 'Hygienický atest pro styk s potravinami a pitnou vodou',
    issuer: 'Státní zdravotní ústav (SZÚ)',
    desc: 'Zdravotně nezávadný materiál vhodný pro uskladnění čerstvých potravin a vína.'
  },
  {
    title: 'Protokol o statické únosnosti a zkoušce zatížení',
    issuer: 'Autorizovaný inženýr pro statiku a dynamiku staveb',
    desc: 'Garantovaná nosnost pro zásyp zeminou až do 2,5 metru a pojezd lehkou mechanizací.'
  }
];
