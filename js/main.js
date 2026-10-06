/* =========================================================
   Data: to add a project, add it to both the EN and FR lists.
   ========================================================= */
const PROJECTS_EN = [
  {
    id: 'nexteam',
    featured: true,
    page: 'projets/nexteam.html',
    thumb: 'assets/projets/nexteam/coupes-champ-cfd.png',
    tags: ['cfd'],
    kind: 'ENGINEERING INTERNSHIP · 4TH YEAR',
    title: 'Can a drone be released from a helicopter in flight?',
    date: '06 – 09 2026',
    summary: 'Effect of a helicopter’s rotor downwash on a drone released in flight: CFD simulation in STAR-CCM+ and a 6-DOF trajectory model developed in MATLAB.',
    tools: ['STAR-CCM+', 'MATLAB', 'CATIA', 'FreeCAD', 'Femap']
  },
  {
    id: 'observatoire',
    page: 'projets/observatoire.html',
    thumb: 'assets/projets/observatoire/cassini-lunes-anneaux.jpg',
    tags: ['research'],
    kind: 'RESEARCH INTERNSHIP · 2ND YEAR',
    title: 'Identifying Saturn’s moons in Cassini images',
    date: '06 – 07 2024',
    summary: 'Astronomical image processing of Cassini spacecraft data with the Arago software, at the Paris Observatory.',
    tools: ['Arago', 'Image processing', 'Astrometry']
  },
  {
    id: 'naca',
    page: 'projets/cfd-naca.html',
    thumb: 'assets/projets/cfd-naca/pression-paroi-aile.png',
    thumbContain: true,
    tags: ['cfd'],
    kind: 'SCHOOL PROJECT · CFD',
    title: 'CFD simulation: cylinder & NACA 0015',
    date: '2025',
    summary: 'Reproducing a wind tunnel test in STAR-CCM+: geometry, meshing, physics and post-processing around a cylinder and an airfoil.',
    tools: ['STAR-CCM+']
  },
  {
    id: 'nastran',
    page: 'projets/patran-nastran.html',
    thumb: 'assets/projets/patran-nastran/piece-hex20-von-mises.png',
    tags: ['structures'],
    kind: 'LAB SERIES · FINITE ELEMENTS',
    title: 'Structural analysis with Patran / Nastran',
    date: '2026',
    summary: 'Four finite element labs: beam, plate with a hole, 3D part and thermal analysis, with systematic analytical validation.',
    tools: ['Patran', 'Nastran']
  },
  {
    id: 'catia',
    page: 'projets/catia-epee.html',
    thumb: 'assets/projets/catia-epee/epee-assemblee.png',
    thumbContain: true,
    thumbBg: '#3b3b6e',
    tags: ['cad'],
    kind: 'SCHOOL PROJECT · CAD',
    title: 'A fully parametric fencing épée in CATIA',
    date: '2026',
    summary: 'One CAD model for every version of an épée: Shape Design, Knowledgeware rules and a parameter-driven assembly.',
    tools: ['CATIA']
  },
  {
    id: 'pmi',
    page: 'projets/pmi-air-france.html',
    tags: ['project'],
    art: 'app',
    kind: 'FINAL-YEAR PROJECT · IN PROGRESS',
    title: 'Digitalising chemical product management in an engine shop',
    date: '2026 – 2027',
    summary: 'Team project for Air France: replacing an Excel/VBA tool with a Power Apps application available to every technician, at Orly and Paris-CDG.',
    tools: ['Power Apps', 'SharePoint', 'Project management']
  }
];

const TIMELINE_EN = [
  { date: '2019 – 2022', title: 'Yves Kernanec High School', text: 'Mathematics and physics-chemistry, advanced maths option, Marcq-en-Barœul.' },
  { date: '2022', title: 'Joining IPSA', text: 'Aerospace engineering school, Ivry-sur-Seine.' },
  { date: '06 – 07 2024', title: 'Internship · Paris Observatory', text: 'Cassini image processing and Saturn’s moons, at the IMCCE.', key: true },
  { date: '2024 – 2025', title: '3rd year · Aerospace Vehicles', text: 'IPSA track.' },
  { date: '08 – 12 2025', title: 'Exchange at NCKU, Taiwan', text: 'Semester in Aeronautics and Astronautics in Tainan.', key: true },
  { date: '2025 – 2026', title: '4th year · Mechanics & Structures', text: 'IPSA track.' },
  { date: '06 – 09 2026', title: 'Internship · NEXTEAM', text: 'CFD analyst, design office.', key: true },
  { date: '2026 – 2027', title: '5th year · CAE for Aircraft Structures', text: 'IPSA track · final-year project with Air France.' },
  { date: 'March 2027', title: 'Final-year internship', text: '6 months.', next: true }
];

const PROJECTS_FR = [
  {
    id: 'nexteam',
    featured: true,
    page: 'projets/nexteam-fr.html',
    thumb: 'assets/projets/nexteam/coupes-champ-cfd.png',
    tags: ['cfd'],
    kind: 'STAGE INGÉNIEUR · 4E ANNÉE',
    title: 'Peut-on larguer un drone depuis un hélicoptère en vol ?',
    date: '06 – 09 2026',
    summary: 'Influence du souffle rotor d’un hélicoptère sur un drone éjecté en vol : simulation CFD sous STAR-CCM+ et trajectoire 6 DDL développée sous MATLAB.',
    tools: ['STAR-CCM+', 'MATLAB', 'CATIA', 'FreeCAD', 'Femap']
  },
  {
    id: 'observatoire',
    page: 'projets/observatoire-fr.html',
    thumb: 'assets/projets/observatoire/cassini-lunes-anneaux.jpg',
    tags: ['research'],
    kind: 'STAGE DE RECHERCHE · 2E ANNÉE',
    title: 'Identifier les lunes de Saturne dans les images de Cassini',
    date: '06 – 07 2024',
    summary: 'Traitement d’images astronomiques de la sonde Cassini avec le logiciel Arago, à l’Observatoire de Paris.',
    tools: ['Arago', 'Traitement d’images', 'Astrométrie']
  },
  {
    id: 'naca',
    page: 'projets/cfd-naca-fr.html',
    thumb: 'assets/projets/cfd-naca/pression-paroi-aile.png',
    thumbContain: true,
    tags: ['cfd'],
    kind: 'PROJET ÉCOLE · CFD',
    title: 'Simulation CFD : cylindre & NACA 0015',
    date: '2025',
    summary: 'Reproduire un essai de soufflerie sous STAR-CCM+ : géométrie, maillage, physique et post-traitement autour d’un cylindre et d’un profil d’aile.',
    tools: ['STAR-CCM+']
  },
  {
    id: 'nastran',
    page: 'projets/patran-nastran-fr.html',
    thumb: 'assets/projets/patran-nastran/piece-hex20-von-mises.png',
    tags: ['structures'],
    kind: 'SÉRIE DE TP · ÉLÉMENTS FINIS',
    title: 'Calcul de structures sous Patran / Nastran',
    date: '2026',
    summary: 'Quatre TP d’éléments finis : poutre, plaque trouée, pièce 3D et thermique, avec validation systématique par le calcul analytique.',
    tools: ['Patran', 'Nastran']
  },
  {
    id: 'catia',
    page: 'projets/catia-epee-fr.html',
    thumb: 'assets/projets/catia-epee/epee-assemblee.png',
    thumbContain: true,
    thumbBg: '#3b3b6e',
    tags: ['cad'],
    kind: 'PROJET ÉCOLE · CAO',
    title: 'Une épée d’escrime entièrement paramétrée sous CATIA',
    date: '2026',
    summary: 'Un seul modèle CAO pour toutes les versions d’une épée : Shape Design, règles Knowledgeware et assemblage piloté.',
    tools: ['CATIA']
  },
  {
    id: 'pmi',
    page: 'projets/pmi-air-france-fr.html',
    tags: ['project'],
    art: 'app',
    kind: 'PROJET DE FIN D’ÉTUDES · EN COURS',
    title: 'Digitaliser la gestion des produits chimiques d’un atelier moteur',
    date: '2026 – 2027',
    summary: 'Projet en équipe pour Air France : remplacer un outil Excel/VBA par une application Power Apps accessible à tous les agents, à Orly et à Roissy-CDG.',
    tools: ['Power Apps', 'SharePoint', 'Gestion de projet']
  }
];

const TIMELINE_FR = [
  { date: '2019 – 2022', title: 'Lycée Yves Kernanec', text: 'Spécialités mathématiques & physique-chimie, option maths expertes, Marcq-en-Barœul.' },
  { date: '2022', title: 'Entrée à l’IPSA', text: 'École d’ingénieurs aéronautique & spatial, Ivry-sur-Seine.' },
  { date: '06 – 07 2024', title: 'Stage · Observatoire de Paris', text: 'Traitement d’images Cassini et lunes de Saturne, à l’IMCCE.', key: true },
  { date: '2024 – 2025', title: '3e année · Véhicules aérospatiaux', text: 'Filière IPSA.' },
  { date: '08 – 12 2025', title: 'Échange à NCKU, Taïwan', text: 'Semestre en Aeronautics and Astronautics à Tainan.', key: true },
  { date: '2025 – 2026', title: '4e année · Mécanique & Structure', text: 'Filière IPSA.' },
  { date: '06 – 09 2026', title: 'Stage · NEXTEAM', text: 'Calculatrice / modélisatrice CFD, bureau d’études.', key: true },
  { date: '2026 – 2027', title: '5e année · CAE Cellule Aéronautique', text: 'Filière IPSA · projet de fin d’études avec Air France.' },
  { date: 'Mars 2027', title: 'Stage de fin d’études', text: '6 mois.', next: true }
];

// The page language (<html lang>) picks the data set and interface labels.
const LANG = document.documentElement.lang === 'fr' ? 'fr' : 'en';
const PROJECTS = LANG === 'fr' ? PROJECTS_FR : PROJECTS_EN;
const TIMELINE = LANG === 'fr' ? TIMELINE_FR : TIMELINE_EN;
const UI = {
  en: { open: 'VIEW THE FULL CASE STUDY →', aria: 'View the full case study: ', sheet: 'SH.' },
  fr: { open: 'VOIR L’ÉTUDE COMPLÈTE →', aria: 'Voir l’étude complète : ', sheet: 'PL.' }
}[LANG];

/* =========================================================
   SVG drawing helpers
   ========================================================= */
const f = (n) => n.toFixed(1);

// Symmetric 4-digit NACA airfoil (relative thickness t)
function nacaPath(ox, oy, c, t = 0.15, n = 60) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const x = (1 - Math.cos((Math.PI * i) / n)) / 2;
    const y = 5 * t * (0.2969 * Math.sqrt(x) - 0.126 * x - 0.3516 * x * x + 0.2843 * x ** 3 - 0.1036 * x ** 4);
    pts.push([x, y]);
  }
  const upper = pts.slice().reverse().map(([x, y]) => [ox + x * c, oy - y * c]);
  const lower = pts.slice(1).map(([x, y]) => [ox + x * c, oy + y * c]);
  return 'M' + [...upper, ...lower].map(([x, y]) => `${f(x)} ${f(y)}`).join(' L') + ' Z';
}

function gearPath(cx, cy, r, teeth, h) {
  const step = (2 * Math.PI) / teeth;
  const pts = [];
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    pts.push([r, a], [r + h, a + step * 0.2], [r + h, a + step * 0.45], [r, a + step * 0.65]);
  }
  return 'M' + pts.map(([rr, a]) => `${f(cx + rr * Math.cos(a))} ${f(cy + rr * Math.sin(a))}`).join(' L') + ' Z';
}

const ART = {
  rotor: `<svg viewBox="0 0 220 130" class="stroke">
      <ellipse cx="80" cy="28" rx="66" ry="11" stroke-dasharray="4 4"/>
      <line x1="14" y1="28" x2="146" y2="28"/><line x1="55" y1="18" x2="105" y2="38"/>
      <line x1="80" y1="28" x2="80" y2="44"/>
      <path d="M58 44 H102 Q112 44 112 54 V58 H50 Q48 44 58 44 Z"/>
      <path d="M112 50 H150 L156 42"/>
      <g stroke="var(--cyan)" color="var(--cyan)">
        <line x1="40" y1="42" x2="40" y2="82" marker-end="url(#arrow)"/>
        <line x1="120" y1="42" x2="120" y2="72" marker-end="url(#arrow)" opacity=".6"/>
      </g>
      <path d="M95 62 Q 120 95 170 104" stroke="var(--signal)" stroke-dasharray="4 4"/>
      <g stroke="var(--signal)">
        <rect x="168" y="98" width="16" height="10"/>
        <circle cx="166" cy="96" r="4"/><circle cx="186" cy="96" r="4"/>
        <circle cx="166" cy="110" r="4"/><circle cx="186" cy="110" r="4"/>
      </g>
      <text x="100" y="124" class="svg-label" font-size="9" stroke="none">V_i · 6-DOF</text>
    </svg>`,
  saturn: `<svg viewBox="0 0 220 130" class="stroke">
      <circle cx="95" cy="66" r="28"/>
      <ellipse cx="95" cy="66" rx="58" ry="13" transform="rotate(-14 95 66)"/>
      <ellipse cx="95" cy="66" rx="48" ry="10" transform="rotate(-14 95 66)" opacity=".5"/>
      <circle cx="178" cy="30" r="3" fill="currentColor"/>
      <circle cx="30" cy="104" r="2.5" fill="currentColor"/>
      <circle cx="190" cy="100" r="2" fill="currentColor"/>
      <g stroke="var(--signal)">
        <rect x="166" y="18" width="24" height="24"/>
        <line x1="178" y1="10" x2="178" y2="16"/><line x1="178" y1="44" x2="178" y2="50"/>
        <line x1="158" y1="30" x2="164" y2="30"/><line x1="192" y1="30" x2="198" y2="30"/>
      </g>
      <text x="150" y="62" class="svg-label signal" font-size="9" stroke="none">ID-03</text>
    </svg>`,
  airfoil: `<svg viewBox="0 0 220 130" class="stroke">
      <g opacity=".35" stroke-dasharray="3 3">
        <ellipse cx="105" cy="65" rx="95" ry="48"/><ellipse cx="105" cy="65" rx="75" ry="32"/><ellipse cx="105" cy="65" rx="60" ry="20"/>
      </g>
      <g transform="rotate(8 50 65)"><path d="${nacaPath(50, 65, 120)}" class="airfoil-shape"/></g>
      <g stroke="var(--cyan)" color="var(--cyan)">
        <line x1="110" y1="55" x2="110" y2="20" marker-end="url(#arrow)"/>
        <text x="116" y="26" class="svg-label" font-size="10" stroke="none">L</text>
      </g>
      <text x="8" y="122" class="svg-label" font-size="9" stroke="none">C-L(α) · stall</text>
    </svg>`,
  plate: `<svg viewBox="0 0 220 130" class="stroke">
      <rect x="45" y="30" width="130" height="70"/>
      <circle cx="110" cy="65" r="15" stroke="var(--signal)"/>
      <g opacity=".35">
        ${Array.from({ length: 16 }, (_, i) => {
          const a = (i * Math.PI) / 8;
          const x1 = 110 + 15 * Math.cos(a), y1 = 65 + 15 * Math.sin(a);
          const k = Math.min(65 / Math.abs(Math.cos(a) || 1e-6), 35 / Math.abs(Math.sin(a) || 1e-6));
          return `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(110 + k * Math.cos(a))}" y2="${f(65 + k * Math.sin(a))}"/>`;
        }).join('')}
        <circle cx="110" cy="65" r="24"/><circle cx="110" cy="65" r="34"/>
      </g>
      <g stroke="var(--cyan)" color="var(--cyan)">
        <line x1="45" y1="65" x2="12" y2="65" marker-end="url(#arrow)"/>
        <line x1="175" y1="65" x2="208" y2="65" marker-end="url(#arrow)"/>
      </g>
      <text x="92" y="120" class="svg-label signal" font-size="10" stroke="none">K_t ≈ 3</text>
    </svg>`,
  gears: `<svg viewBox="0 0 220 130" class="stroke">
      <path d="${gearPath(80, 65, 34, 14, 7)}"/>
      <circle cx="80" cy="65" r="9"/>
      <path d="${gearPath(142, 65, 20, 9, 7)}" stroke="var(--signal)"/>
      <circle cx="142" cy="65" r="6" stroke="var(--signal)"/>
      <g class="centerline"><line x1="30" y1="65" x2="190" y2="65"/><line x1="80" y1="18" x2="80" y2="112"/><line x1="142" y1="30" x2="142" y2="100"/></g>
      <text x="96" y="124" class="svg-label" font-size="9" stroke="none">Ø = real measurements</text>
    </svg>`,
  app: `<svg viewBox="0 0 220 130" class="stroke">
      <rect x="20" y="14" width="110" height="102" rx="6"/>
      <line x1="20" y1="32" x2="130" y2="32"/>
      <g stroke="var(--cyan)">
        <rect x="30" y="42" width="40" height="8"/><line x1="78" y1="46" x2="120" y2="46"/>
        <rect x="30" y="58" width="40" height="8"/><line x1="78" y1="62" x2="112" y2="62"/>
        <rect x="30" y="74" width="40" height="8"/><line x1="78" y1="78" x2="116" y2="78"/>
      </g>
      <rect x="30" y="92" width="44" height="14" rx="3" stroke="var(--signal)"/>
      <g stroke="var(--signal)">
        <rect x="150" y="34" width="52" height="52"/>
        <rect x="156" y="40" width="12" height="12"/><rect x="184" y="40" width="12" height="12"/><rect x="156" y="68" width="12" height="12"/>
        <path d="M176 60 h6 v6 M188 62 h8 M184 72 v8 h12 M174 76 h4"/>
      </g>
      <path d="M130 60 H146" stroke-dasharray="3 3" marker-end="url(#arrow)"/>
      <text x="152" y="104" class="svg-label signal" font-size="9" stroke="none">QR code</text>
    </svg>`,
  curve: `<svg viewBox="0 0 220 130" class="stroke">
      <line x1="30" y1="110" x2="200" y2="110" marker-end="url(#arrow)"/>
      <line x1="30" y1="110" x2="30" y2="12" marker-end="url(#arrow)"/>
      <path d="M30 110 L72 44 Q 90 28 120 30 T 180 44" stroke="var(--signal)" stroke-width="2"/>
      <line x1="30" y1="40" x2="200" y2="40" stroke="var(--cyan)" stroke-dasharray="4 4"/>
      <circle cx="180" cy="44" r="3" fill="var(--signal)" stroke="none"/>
      <text x="16" y="20" class="svg-label" font-size="11" stroke="none">σ</text>
      <text x="196" y="124" class="svg-label" font-size="11" stroke="none">ε</text>
      <text x="150" y="34" class="svg-label" font-size="9" stroke="none">Rp0,2</text>
    </svg>`
};


/* =========================================================
   Project sheets + filters
   ========================================================= */
function renderSheets() {
  const root = document.getElementById('sheets');
  root.innerHTML = PROJECTS.map((p, i) => `
    <article class="sheet reveal${p.featured ? ' is-featured' : ''}" data-tags="${p.tags.join(' ')}">
      ${p.thumb
        ? `<div class="sheet-art has-photo${p.thumbContain ? ' is-contain' : ''}"${p.thumbBg ? ` style="background:${p.thumbBg}"` : ''}><img src="${p.thumb}" alt="" loading="lazy"></div>`
        : `<div class="sheet-art">${ART[p.art]}</div>`}
      <div class="sheet-body">
        <p class="sheet-kind mono">${p.kind}</p>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <ul class="chips">${p.tools.map((t) => `<li>${t}</li>`).join('')}</ul>
      </div>
      <div class="open-hint">${UI.open}</div>
      <div class="cartouche">
        <span>${UI.sheet}</span><span>${String(i + 1).padStart(2, '0')}</span>
        <span>DATE</span><span>${p.date}</span>
      </div>
      <a class="sheet-open" href="${p.page}" aria-label="${UI.aria}${p.title}"></a>
    </article>`).join('');

  document.getElementById('filters').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    document.querySelectorAll('#filters button').forEach((b) => b.classList.toggle('is-active', b === btn));
    const tag = btn.dataset.filter;
    root.querySelectorAll('.sheet').forEach((s) => {
      s.classList.toggle('is-hidden', tag !== 'all' && !s.dataset.tags.split(' ').includes(tag));
    });
  });
}

function renderTimeline() {
  document.getElementById('flightplan').innerHTML = TIMELINE.map((w, i) => `
    <li class="wpt reveal${w.key ? ' is-key' : ''}${w.next ? ' is-next' : ''}">
      <span class="wpt-date">${w.date}</span>
      <span class="wpt-marker"></span>
      <div class="wpt-content">
        <span class="wpt-code">WPT ${String(i + 1).padStart(2, '0')}</span>
        <h3>${w.title}</h3>
        <p>${w.text}</p>
      </div>
    </li>`).join('');
}

/* =========================================================
   Global interactions
   ========================================================= */
function setupAltimeter() {
  const fill = document.getElementById('altFill');
  const value = document.getElementById('altValue');
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? Math.min(scrollY / max, 1) : 0;
    fill.style.height = `${p * 100}%`;
    value.textContent = `${String(Math.round(p * 39000)).padStart(5, '0')} ft`;
  };
  addEventListener('scroll', update, { passive: true });
  update();
}

function setupCoords() {
  const el = document.getElementById('coords');
  addEventListener('mousemove', (e) => {
    el.textContent = `X ${String(e.clientX).padStart(4, '0')} · Y ${String(e.clientY).padStart(4, '0')}`;
  }, { passive: true });
}

function setupReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}

function setupNav() {
  const links = [...document.querySelectorAll('.nav a')];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${en.target.id}`));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach((s) => io.observe(s));
}


// The same script runs on the home page and on project pages: only initialise what exists.
const has = (id) => document.getElementById(id);
if (has('sheets')) renderSheets();
if (has('flightplan')) renderTimeline();
setupAltimeter();
setupCoords();
setupReveal();
setupNav();
