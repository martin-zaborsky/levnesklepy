/**
 * LevnéSklepy.cz – Vanilla JavaScript Engine (No React / No Node / No Build Step)
 * Standard ES6+ code that runs natively in any web browser and GitHub Pages.
 */

// ================= GLOBAL STATE =================
let currentCurrency = 'CZK';
let currentCatalogCategory = 'all';
let selectedConfigModelId = 'klenuty-sklep-300-240';
let selectedConfigAccessories = ['dvere', 'vetrani'];
let selectedConfigRegionId = 'jihomoravsky';

// ================= PRODUCTS DATABASE =================
const PRODUCTS = [
  {
    id: 'klenuty-sklep-300-240',
    name: 'Klenutý sklep 300 × 240 cm',
    category: 'klenute',
    categoryLabel: 'Klenutý sklep',
    subtitle: 'Klasický monolitický sklep s klenbovým stropem pro optimální mikroklima.',
    dimensions: { length: 300, width: 240, height: 210 },
    volumeM3: 12.5,
    weightTons: 9.5,
    basePriceCZK: 89000,
    basePriceEUR: 3560,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    features: ['Monolitický odlitek B30 W8', 'Příprava pro odvětrání', 'Nosnost stropu do 3,5 t', 'Montáž do výkopu ZDARMA']
  },
  {
    id: 'klenuty-sklep-350-240',
    name: 'Klenutý sklep 350 × 240 cm',
    category: 'klenute',
    categoryLabel: 'Klenutý sklep',
    subtitle: 'Prostornější varianta pro uskladnění úrody, vína a zahradní techniky.',
    dimensions: { length: 350, width: 240, height: 215 },
    volumeM3: 15.0,
    weightTons: 11.0,
    basePriceCZK: 99000,
    basePriceEUR: 3960,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    features: ['Prodloužený půdorys', 'Vysoká klenba 215 cm', 'Vodotěsný beton B30 W8', 'Montáž do výkopu ZDARMA']
  },
  {
    id: 'klenuty-sklep-400-240',
    name: 'Klenutý sklep MAXI 400 × 240 cm',
    category: 'klenute',
    categoryLabel: 'Klenutý sklep',
    subtitle: 'Největší jednodílný klenutý model s kapacitou pro rozsáhlý vinný archiv.',
    dimensions: { length: 400, width: 240, height: 220 },
    volumeM3: 18.2,
    weightTons: 12.8,
    basePriceCZK: 115000,
    basePriceEUR: 4600,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
    features: ['Maxi prostor 18,2 m³', 'Možnost regálů po obou stranách', 'Armovaná ocel BSt500S', 'Montáž ZDARMA']
  },
  {
    id: 'plochy-sklep-300-240',
    name: 'Plochý sklep (boční vstup) 300 × 240 cm',
    category: 'ploche',
    categoryLabel: 'Plochý sklep',
    subtitle: 'Plochá pochozí stropní deska ideální pro zapuštění do rovného terénu pod trávník.',
    dimensions: { length: 300, width: 240, height: 200 },
    volumeM3: 12.0,
    weightTons: 9.0,
    basePriceCZK: 85000,
    basePriceEUR: 3400,
    image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1000&q=80',
    features: ['Plochý pochozí strop', 'Vstup z čelní stěny', 'Síla stěny 10 cm', 'Montáž ZDARMA']
  },
  {
    id: 'plochy-sklep-350-240',
    name: 'Plochý sklep (boční vstup) 350 × 240 cm',
    category: 'ploche',
    categoryLabel: 'Plochý sklep',
    subtitle: 'Zesílená stropní deska s možností parkování osobního automobilu.',
    dimensions: { length: 350, width: 240, height: 210 },
    volumeM3: 14.8,
    weightTons: 10.5,
    basePriceCZK: 95000,
    basePriceEUR: 3800,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    features: ['Přejezdová únosnost', 'Vnitřní světlá výška 210 cm', 'Hydroizolace Hydrostop', 'Montáž ZDARMA']
  },
  {
    id: 'modularni-archiv-600-240',
    name: 'Modulární vinný archiv 600 × 240 cm',
    category: 'vinoteky',
    categoryLabel: 'Vinný archiv',
    subtitle: 'Dvoumodulový propojený komplex s klenbou pro degustační místnost a sklad vína.',
    dimensions: { length: 600, width: 240, height: 220 },
    volumeM3: 28.0,
    weightTons: 20.0,
    basePriceCZK: 195000,
    basePriceEUR: 7800,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
    features: ['2 spojené segmenty', 'Kapacita přes 1500 lahví', 'Těsnění spojů v ceně', 'Montáž 2 skeletů ZDARMA']
  }
];

// ================= ACCESSORIES =================
const ACCESSORIES = [
  { id: 'dvere', name: 'Zateplené ocelové dveře s těsněním', priceCZK: 9500, priceEUR: 380 },
  { id: 'vetrani', name: 'Gravitační ventilace (přívod + odtah)', priceCZK: 3500, priceEUR: 140 },
  { id: 'schody', name: 'Prefabrikované betonové vstupní schody', priceCZK: 8500, priceEUR: 340 },
  { id: 'regaly', name: 'Pozinkovaný regálový systém (2 ks)', priceCZK: 5800, priceEUR: 230 }
];

// ================= REGIONS =================
const REGIONS = [
  { id: 'jihomoravsky', name: 'Jihomoravský kraj (Brno a okolí)', priceCZK: 2500, priceEUR: 100 },
  { id: 'praha', name: 'Praha a Středočeský kraj', priceCZK: 4500, priceEUR: 180 },
  { id: 'moravskoslezsky', name: 'Moravskoslezský & Olomoucký kraj', priceCZK: 3500, priceEUR: 140 },
  { id: 'vysocina', name: 'Kraj Vysočina & Pardubický kraj', priceCZK: 3500, priceEUR: 140 },
  { id: 'jihocesky', name: 'Jihočeský & Plzeňský kraj', priceCZK: 4800, priceEUR: 190 },
  { id: 'severocesky', name: 'Ústecký & Liberecký & Královéhradecký', priceCZK: 5000, priceEUR: 200 },
  { id: 'sr_zapad', name: 'Slovensko – Západ (Bratislava, Trnava, Trenčín)', priceCZK: 4000, priceEUR: 160 },
  { id: 'sr_stred', name: 'Slovensko – Stred a Východ (Žilina, B. Bystrica, Košice)', priceCZK: 6000, priceEUR: 240 }
];

// ================= GALLERY =================
const GALLERY_ITEMS = [
  { title: 'Klenutý sklep ve svahu', location: 'Mikulov', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80' },
  { title: 'Usazení hydraulickou rukou', location: 'Benešov', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80' },
  { title: 'Zapuštěný zahradní sklípek', location: 'Kroměříž', img: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80' },
  { title: 'Vinný archiv v klenbě', location: 'Znojmo', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80' },
  { title: 'Plochý sklep pod terasou', location: 'Plzeň', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
  { title: 'Zatravněný hotový sklep', location: 'Trenčín', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80' }
];

// ================= FAQS =================
const FAQS = [
  { q: 'Je potřeba na betonový sklep stavební povolení?', a: 'Podle platného stavebního zákona nepodléhají stavby do 25 m² zastavěné plochy a do hloubky 3 m povinnosti stavebního povolení ani ohlášení, splňují-li odstupové vzdálenosti od hranice pozemku.' },
  { q: 'Jak probíhá montáž a usazení do jámy?', a: 'Přijíždíme s nákladním automobilem vybaveným hydraulickým jeřábovým ramenem s dosahem až 10 metrů. Skelet spustíme přímo do vámi připravené jámy na štěrkové lože. Celé usazení je ZDARMA a trvá zhruba 30–45 minut.' },
  { q: 'Co se stane při vysoké hladině spodní vody?', a: 'Naše sklepy jsou lité jako monolit bez spár z vodostavebního betonu třídy B30 s přísadou W8 a ošetřeny hydroizolací Hydrostop. Ani při trvalém tlaku podzemní vody nedochází k průsakům.' },
  { q: 'Jaká je dodací lhůta?', a: 'Standardní rozměry držíme trvale skladem. Expedici realizujeme obvykle do 2 až 4 pracovních dnů od objednání.' }
];

// ================= CURRENCY FORMATTER =================
function formatMoney(czk, eur) {
  if (currentCurrency === 'CZK') {
    return czk.toLocaleString('cs-CZ') + ' Kč';
  } else {
    return eur.toLocaleString('sk-SK') + ' €';
  }
}

window.setCurrency = function(curr) {
  currentCurrency = curr;
  document.getElementById('currency-czk').classList.toggle('active', curr === 'CZK');
  document.getElementById('currency-eur').classList.toggle('active', curr === 'EUR');
  
  renderHomeFeatured();
  renderCatalog();
  renderPriceList();
  updateConfigurator();
};

// ================= HASH ROUTER =================
function handleRoute() {
  const hash = window.location.hash || '#/';
  const cleanPath = hash.replace(/^#/, '');

  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  
  document.querySelectorAll('.nav-link').forEach(link => {
    const route = link.getAttribute('data-route');
    if (cleanPath === route || (route !== '/' && cleanPath.startsWith(route))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  if (cleanPath.startsWith('/sklep/')) {
    const prodId = cleanPath.replace('/sklep/', '');
    renderProductDetailPage(prodId);
    document.getElementById('page-sklep-detail').classList.add('active');
  } else if (cleanPath === '/sklepy') {
    document.getElementById('page-sklepy').classList.add('active');
  } else if (cleanPath === '/konfigurator') {
    document.getElementById('page-konfigurator').classList.add('active');
  } else if (cleanPath === '/cenik') {
    document.getElementById('page-cenik').classList.add('active');
  } else if (cleanPath === '/sluzby') {
    document.getElementById('page-sluzby').classList.add('active');
  } else if (cleanPath === '/postup' || cleanPath === '/priprava-vykopu') {
    document.getElementById('page-postup').classList.add('active');
  } else if (cleanPath === '/galerie') {
    document.getElementById('page-galerie').classList.add('active');
  } else if (cleanPath === '/o-nas') {
    document.getElementById('page-o-nas').classList.add('active');
  } else if (cleanPath === '/faq') {
    document.getElementById('page-faq').classList.add('active');
  } else if (cleanPath === '/kontakt') {
    document.getElementById('page-kontakt').classList.add('active');
  } else {
    document.getElementById('page-home').classList.add('active');
  }

  window.scrollTo(0, 0);
  if (window.lucide) { lucide.createIcons(); }
}

window.addEventListener('hashchange', handleRoute);

// ================= MOBILE DRAWER =================
window.toggleMobileMenu = function() {
  document.getElementById('mobile-drawer').classList.toggle('open');
};

window.closeMobileMenu = function() {
  document.getElementById('mobile-drawer').classList.remove('open');
};

// ================= RENDER HOME FEATURED =================
function renderHomeFeatured() {
  const container = document.getElementById('home-featured-products');
  if (!container) return;
  container.innerHTML = PRODUCTS.slice(0, 3).map(prod => `
    <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
      <div>
        <div style="height:190px; position:relative; overflow:hidden; background:#E7E0D8;">
          <img src="${prod.image}" alt="${prod.name}" style="width:100%; height:100%; object-fit:cover;" />
          <span style="position:absolute; top:10px; left:10px; background:rgba(255,255,255,0.9); font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:99px;">${prod.categoryLabel}</span>
        </div>
        <div class="card-padding">
          <h3 class="font-serif" style="font-size:1.15rem; font-weight:700; color:var(--text-primary);">${prod.name}</h3>
          <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:6px;">${prod.subtitle}</p>
          <div style="margin-top:12px; padding-top:10px; border-top:1px solid var(--border-color); display:flex; justify-content:space-between; font-size:0.75rem;">
            <span style="color:var(--text-secondary);">Rozměry:</span>
            <span class="font-mono" style="font-weight:700;">${prod.dimensions.length} × ${prod.dimensions.width} cm</span>
          </div>
        </div>
      </div>
      <div style="padding:0 1.5rem 1.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:10px;">
          <span style="font-size:0.75rem; color:var(--text-secondary);">Cena bez DPH:</span>
          <span class="font-mono" style="font-size:1.15rem; font-weight:700; color:var(--accent);">${formatMoney(prod.basePriceCZK, prod.basePriceEUR)}</span>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
          <a href="#/sklep/${prod.id}" class="btn btn-secondary btn-sm">Detail</a>
          <a href="#/konfigurator" onclick="selectModelForConfig('${prod.id}')" class="btn btn-primary btn-sm">Kalkulovat</a>
        </div>
      </div>
    </div>
  `).join('');
}

// ================= RENDER CATALOG =================
function renderCatalog() {
  const container = document.getElementById('catalog-grid');
  if (!container) return;
  const search = (document.getElementById('catalog-search')?.value || '').toLowerCase();
  
  const filtered = PRODUCTS.filter(p => {
    const matchCat = currentCatalogCategory === 'all' || p.category === currentCatalogCategory;
    const matchSearch = p.name.toLowerCase().includes(search) || p.subtitle.toLowerCase().includes(search) || p.dimensions.length.toString().includes(search);
    return matchCat && matchSearch;
  });

  container.innerHTML = filtered.map(prod => `
    <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
      <div>
        <div style="height:210px; position:relative; overflow:hidden; background:#E7E0D8;">
          <img src="${prod.image}" alt="${prod.name}" style="width:100%; height:100%; object-fit:cover;" />
          <span style="position:absolute; top:10px; left:10px; background:rgba(255,255,255,0.9); font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:99px;">${prod.categoryLabel}</span>
          <span style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.6); color:#fff; font-size:0.7rem; padding:2px 8px; border-radius:99px;">${prod.volumeM3} m³ • ${prod.weightTons} tun</span>
        </div>
        <div class="card-padding">
          <h3 class="font-serif" style="font-size:1.2rem; font-weight:700;">${prod.name}</h3>
          <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:6px; line-height:1.5;">${prod.subtitle}</p>
          
          <div style="margin-top:12px; padding:10px; background:var(--bg-primary); border:1px solid var(--border-color); border-radius:var(--radius-md); display:grid; grid-template-columns:repeat(3, 1fr); text-align:center; font-size:0.75rem;">
            <div><span style="font-size:0.65rem; color:var(--text-muted); display:block;">Délka</span><strong>${prod.dimensions.length} cm</strong></div>
            <div><span style="font-size:0.65rem; color:var(--text-muted); display:block;">Šířka</span><strong>${prod.dimensions.width} cm</strong></div>
            <div><span style="font-size:0.65rem; color:var(--text-muted); display:block;">Výška</span><strong>${prod.dimensions.height} cm</strong></div>
          </div>
        </div>
      </div>
      <div style="padding:0 1.5rem 1.5rem; border-top:1px solid var(--border-color); padding-top:12px;">
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:10px;">
          <div>
            <span style="font-size:0.7rem; color:var(--text-secondary); display:block;">Cena bez DPH:</span>
            <span class="font-mono" style="font-size:1.2rem; font-weight:700; color:var(--accent);">${formatMoney(prod.basePriceCZK, prod.basePriceEUR)}</span>
          </div>
          <span style="font-size:0.7rem; font-weight:700; color:var(--accent-hover); background:var(--bg-tertiary); padding:3px 8px; border-radius:99px;">Montáž ZDARMA</span>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
          <a href="#/sklep/${prod.id}" class="btn btn-secondary btn-sm">Detail & Výkres</a>
          <a href="#/konfigurator" onclick="selectModelForConfig('${prod.id}')" class="btn btn-primary btn-sm">3D Kalkulace</a>
        </div>
      </div>
    </div>
  `).join('');
}

window.setCatalogCategory = function(cat, btn) {
  currentCatalogCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(b => {
    b.className = 'btn btn-secondary btn-sm cat-btn';
  });
  if (btn) btn.className = 'btn btn-primary btn-sm cat-btn';
  renderCatalog();
};

window.filterCatalog = function() {
  renderCatalog();
};

// ================= RENDER PRODUCT DETAIL =================
function renderProductDetailPage(prodId) {
  const prod = PRODUCTS.find(p => p.id === prodId) || PRODUCTS[0];
  const container = document.getElementById('product-detail-container');
  if (!container) return;

  container.innerHTML = `
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:2.5rem; align-items:start;">
      <div>
        <div class="card" style="margin-bottom:1.5rem;">
          <div style="height:320px; background:#E7E0D8;">
            <img src="${prod.image}" alt="${prod.name}" style="width:100%; height:100%; object-fit:cover;" />
          </div>
        </div>

        <div class="card card-padding" style="background:var(--bg-secondary);">
          <h3 class="font-serif" style="font-size:1.15rem; font-weight:700; color:var(--text-primary); margin-bottom:10px;">
            Pokyny pro výkop jámy (${prod.dimensions.length} × ${prod.dimensions.width} cm)
          </h3>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.75rem;">
            <div style="background:#fff; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
              <strong>Půdorys jámy:</strong><br/>${prod.dimensions.length + 100} × ${prod.dimensions.width + 100} cm (+50 cm manipulace)
            </div>
            <div style="background:#fff; padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-color);">
              <strong>Hloubka výkopu:</strong><br/>${prod.dimensions.height + 20} cm (včetně 15 cm štěrku 8–16)
            </div>
          </div>
        </div>
      </div>

      <div class="card card-padding" style="box-shadow:var(--shadow-sm);">
        <span class="badge">${prod.categoryLabel}</span>
        <h1 class="font-serif" style="font-size:2rem; font-weight:700; margin:8px 0;">${prod.name}</h1>
        <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.6;">${prod.subtitle}</p>

        <div style="margin:1.5rem 0; padding:1.25rem; background:var(--bg-primary); border:1px solid var(--border-color); border-radius:var(--radius-md);">
          <span style="font-size:0.75rem; color:var(--text-secondary); display:block;">Cena skeletu bez DPH:</span>
          <span class="font-mono font-serif" style="font-size:2rem; font-weight:700; color:var(--accent);">${formatMoney(prod.basePriceCZK, prod.basePriceEUR)}</span>
          <span style="font-size:0.75rem; color:var(--accent-hover); font-weight:700; display:block; margin-top:4px;">Usazení hydraulickou rukou ZDARMA</span>
        </div>

        <div style="font-size:0.8rem; line-height:2.2; border-top:1px solid var(--border-color); padding-top:1rem;">
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-color);"><span>Délka × Šířka × Výška:</span><strong>${prod.dimensions.length} × ${prod.dimensions.width} × ${prod.dimensions.height} cm</strong></div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-color);"><span>Užitný objem:</span><strong>${prod.volumeM3} m³</strong></div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-color);"><span>Hmotnost:</span><strong>${prod.weightTons} tun</strong></div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-color);"><span>Třída betonu:</span><strong>B30 W8 (vodostavební)</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>Záruční doba:</span><strong style="color:var(--accent);">5 let</strong></div>
        </div>

        <div style="display:grid; grid-template-columns:1fr; gap:10px; margin-top:1.5rem;">
          <a href="#/konfigurator" onclick="selectModelForConfig('${prod.id}')" class="btn btn-primary">Otevřít v 3D konfigurátoru</a>
          <a href="#/kontakt" class="btn btn-secondary">Poptat tento model</a>
        </div>
      </div>
    </div>
  `;
}

// ================= RENDER PRICE LIST =================
function renderPriceList() {
  const tbody = document.getElementById('pricelist-table-body');
  if (!tbody) return;

  tbody.innerHTML = PRODUCTS.map(prod => `
    <tr>
      <td><strong><a href="#/sklep/${prod.id}" style="color:var(--text-primary);">${prod.name}</a></strong></td>
      <td class="font-mono">${prod.dimensions.length} × ${prod.dimensions.width} × ${prod.dimensions.height} cm</td>
      <td class="font-mono">${prod.volumeM3} m³</td>
      <td class="font-mono">${prod.weightTons} t</td>
      <td class="font-mono" style="font-weight:700; color:var(--accent);">${formatMoney(prod.basePriceCZK, prod.basePriceEUR)}</td>
      <td class="font-mono" style="color:var(--text-secondary);">${formatMoney(Math.round(prod.basePriceCZK * 1.21), Math.round(prod.basePriceEUR * 1.21))}</td>
      <td style="text-align:right;">
        <a href="#/konfigurator" onclick="selectModelForConfig('${prod.id}')" class="btn btn-secondary btn-sm">Kalkulovat</a>
      </td>
    </tr>
  `).join('');
}

// ================= CONFIGURATOR ENGINE =================
window.selectModelForConfig = function(prodId) {
  selectedConfigModelId = prodId;
  updateConfigurator();
};

function initConfiguratorUI() {
  const modelsContainer = document.getElementById('config-models-list');
  if (modelsContainer) {
    modelsContainer.innerHTML = PRODUCTS.map(p => `
      <div
        onclick="setConfigModel('${p.id}')"
        class="card card-padding"
        style="cursor:pointer; border-color:${p.id === selectedConfigModelId ? 'var(--accent)' : 'var(--border-color)'}; background:${p.id === selectedConfigModelId ? 'var(--bg-secondary)' : '#fff'};"
      >
        <strong style="font-size:0.85rem; display:block;">${p.name}</strong>
        <span style="font-size:0.75rem; color:var(--text-secondary);">${p.dimensions.length} × ${p.dimensions.width} × ${p.dimensions.height} cm</span>
        <div class="font-mono" style="font-size:0.85rem; font-weight:700; color:var(--accent); margin-top:4px;">${formatMoney(p.basePriceCZK, p.basePriceEUR)}</div>
      </div>
    `).join('');
  }

  const accContainer = document.getElementById('config-accessories-list');
  if (accContainer) {
    accContainer.innerHTML = ACCESSORIES.map(acc => `
      <label style="display:flex; justify-content:space-between; align-items:center; padding:10px 14px; border:1px solid var(--border-color); border-radius:var(--radius-md); background:#fff; cursor:pointer; font-size:0.8rem; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" onchange="toggleAccessory('${acc.id}')" ${selectedConfigAccessories.includes(acc.id) ? 'checked' : ''} />
          <strong>${acc.name}</strong>
        </div>
        <span class="font-mono" style="font-weight:700; color:var(--accent);">+${formatMoney(acc.priceCZK, acc.priceEUR)}</span>
      </label>
    `).join('');
  }

  const regSelect = document.getElementById('config-region-select');
  if (regSelect) {
    regSelect.innerHTML = REGIONS.map(reg => `
      <option value="${reg.id}" ${reg.id === selectedConfigRegionId ? 'selected' : ''}>
        ${reg.name} (+${formatMoney(reg.priceCZK, reg.priceEUR)})
      </option>
    `).join('');
  }

  updateConfigurator();
}

window.setConfigModel = function(id) {
  selectedConfigModelId = id;
  initConfiguratorUI();
};

window.toggleAccessory = function(id) {
  if (selectedConfigAccessories.includes(id)) {
    selectedConfigAccessories = selectedConfigAccessories.filter(a => a !== id);
  } else {
    selectedConfigAccessories.push(id);
  }
  updateConfigurator();
};

window.updateConfigurator = function() {
  const regSelect = document.getElementById('config-region-select');
  if (regSelect) {
    selectedConfigRegionId = regSelect.value;
  }

  const currentModel = PRODUCTS.find(p => p.id === selectedConfigModelId) || PRODUCTS[0];
  const currentRegion = REGIONS.find(r => r.id === selectedConfigRegionId) || REGIONS[0];

  let accTotalCZK = 0;
  let accTotalEUR = 0;
  selectedConfigAccessories.forEach(accId => {
    const item = ACCESSORIES.find(a => a.id === accId);
    if (item) {
      accTotalCZK += item.priceCZK;
      accTotalEUR += item.priceEUR;
    }
  });

  const totalCZK = currentModel.basePriceCZK + accTotalCZK + currentRegion.priceCZK;
  const totalEUR = currentModel.basePriceEUR + accTotalEUR + currentRegion.priceEUR;

  document.getElementById('summary-model-name').innerText = currentModel.name + ':';
  document.getElementById('summary-model-price').innerText = formatMoney(currentModel.basePriceCZK, currentModel.basePriceEUR);
  document.getElementById('summary-accessories-price').innerText = formatMoney(accTotalCZK, accTotalEUR);
  document.getElementById('summary-region-name').innerText = currentRegion.name + ':';
  document.getElementById('summary-shipping-price').innerText = formatMoney(currentRegion.priceCZK, currentRegion.priceEUR);
  
  document.getElementById('summary-total-price').innerText = formatMoney(totalCZK, totalEUR);
  document.getElementById('summary-total-with-vat').innerText = `(${formatMoney(Math.round(totalCZK * 1.21), Math.round(totalEUR * 1.21))} s DPH 21%)`;
  document.getElementById('config-blueprint-dims').innerText = `${currentModel.dimensions.length} × ${currentModel.dimensions.width} × ${currentModel.dimensions.height} cm`;

  renderBlueprintSVG(currentModel);
};

function renderBlueprintSVG(model) {
  const svg = document.getElementById('config-blueprint-svg');
  if (!svg) return;

  const isArch = model.category === 'klenute';
  const width = 300;
  const height = isArch ? 160 : 140;
  const x = 50;
  const y = 30;

  svg.innerHTML = `
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${isArch ? 20 : 4}" fill="#795548" fill-opacity="0.12" stroke="#795548" stroke-width="2.5" />
    <rect x="${x+10}" y="${y+10}" width="${width-20}" height="${height-20}" rx="${isArch ? 14 : 2}" fill="#FDFBF7" stroke="#795548" stroke-width="1.5" stroke-dasharray="3 3" />
    <rect x="${x+width-16}" y="${y+height/2-20}" width="16" height="40" fill="#5D4037" rx="2" />
    <text x="${x+width-8}" y="${y+height/2+3}" font-size="8" fill="#fff" font-weight="bold" text-anchor="middle">VSTUP</text>
    <text x="${x+width/2}" y="${y+height/2-6}" font-size="12" fill="#3E2723" font-weight="bold" font-family="Fraunces" text-anchor="middle">${model.name}</text>
    <text x="${x+width/2}" y="${y+height/2+12}" font-size="9" fill="#6D5D53" font-family="JetBrains Mono" text-anchor="middle">Plocha: ${(model.dimensions.length * model.dimensions.width / 10000).toFixed(1)} m² • Objem: ${model.volumeM3} m³</text>
    <text x="${x+width/2}" y="${y-8}" font-size="10" fill="#795548" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">${model.dimensions.length} cm (Délka)</text>
    <text x="${x-12}" y="${y+height/2}" font-size="10" fill="#795548" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle" transform="rotate(-90, ${x-12}, ${y+height/2})">${model.dimensions.width} cm</text>
  `;
}

window.sendConfigToInquiry = function() {
  const model = PRODUCTS.find(p => p.id === selectedConfigModelId) || PRODUCTS[0];
  const modelSelect = document.getElementById('form-selected-model');
  if (modelSelect) {
    modelSelect.value = model.name;
  }
  window.location.hash = '#/kontakt';
};

window.handleInquirySubmit = function(e) {
  e.preventDefault();
  document.getElementById('form-success-msg').style.display = 'block';
  e.target.reset();
};

// ================= GALLERY & FAQ =================
function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;
  container.innerHTML = GALLERY_ITEMS.map(item => `
    <div class="card">
      <div style="height:220px; overflow:hidden; background:#E7E0D8;">
        <img src="${item.img}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover;" />
      </div>
      <div class="card-padding">
        <strong class="font-serif" style="font-size:0.95rem; color:var(--text-primary); display:block;">${item.title}</strong>
        <span style="font-size:0.75rem; color:var(--text-muted); display:block; margin-top:4px;">Lokalita: ${item.location}</span>
      </div>
    </div>
  `).join('');
}

function renderFAQ() {
  const container = document.getElementById('faq-accordion-list');
  if (!container) return;
  container.innerHTML = FAQS.map(faq => `
    <details class="card card-padding" style="margin-bottom:10px; cursor:pointer;">
      <summary class="font-serif" style="font-size:0.95rem; font-weight:700; color:var(--text-primary); outline:none;">${faq.q}</summary>
      <p style="font-size:0.8rem; color:var(--text-secondary); line-height:1.6; margin-top:10px; padding-top:10px; border-top:1px solid var(--border-color);">${faq.a}</p>
    </details>
  `).join('');
}

// ================= INIT EVERYTHING =================
document.addEventListener('DOMContentLoaded', () => {
  renderHomeFeatured();
  renderCatalog();
  renderPriceList();
  initConfiguratorUI();
  renderGallery();
  renderFAQ();
  handleRoute();
});
