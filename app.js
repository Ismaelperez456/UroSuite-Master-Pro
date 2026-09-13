// BASE DE DATOS DE CIRUGÍAS INTERACTIVAS
const atlasCirugias = {
  torsion: {
    titulo: "Exploración & Orquidopexia por Torsión Testicular",
    nivel: "Nivel R1 • Urgencia Quirúrgica",
    badgeClass: "badge-surg",
    queryPubmed: "testicular torsion orchiopexy surgical technique",
    contenido: `
      <div class="modal-section">
        <h4>1. Indicación y Ventana Quirúrgica</h4>
        <p>Sospecha clínica o Doppler de torsión funicular. <strong>Ventana de oro:</strong> &lt; 6 horas desde el inicio del dolor.</p>
      </div>
      <div class="modal-section">
        <h4>2. Posición y Campo</h4>
        <p>Decúbito supino. Rasurado escrotal, campos aislando el pene hacia el abdomen.</p>
      </div>
      <div class="modal-section">
        <h4>3. Tiempos Operatorios Paso a Paso</h4>
        <ol>
          <li>Incisión transversa en hemiescroto o longitudinal en rafe medio.</li>
          <li>Apertura de dartos y túnica celular con electrobisturí.</li>
          <li>Incisión de túnica vaginal parietal y exteriorización testicular.</li>
          <li>Desrotación medial a lateral ("abrir un libro"). Compresas tibias 10-15 min.</li>
          <li>Orquidopexia en 3 puntos al tabique/dartos con Prolene 3-0 o 4-0.</li>
          <li><strong>Regla obligatoria:</strong> Fijación profiláctica contralateral inmediata. Si necrosis irreversible: orquiectomía.</li>
        </ol>
      </div>
    `
  },
  circuncision: {
    titulo: "Circuncisión & Plastia de Frenillo",
    nivel: "Nivel R1 • Cirugía Menor",
    badgeClass: "badge-surg",
    queryPubmed: "circumcision adult technique urology",
    contenido: `
      <div class="modal-section">
        <h4>1. Indicación</h4>
        <p>Fimosis adquirida, balanopostitis recurrente, liquen escleroso o parafimosis.</p>
      </div>
      <div class="modal-section">
        <h4>2. Técnica de Manga (Sleeve)</h4>
        <ol>
          <li>Bloqueo troncular dorsal sin epinefrina en la base peneana.</li>
          <li>Plastia de frenillo si está retraído (Vicryl Rapid 4-0).</li>
          <li>Incisión circular externa distal e interna respetando 0.5 a 1 cm del surco.</li>
          <li>Disección sobre fascia de Buck y hemostasia puntual prolija.</li>
          <li>Afrontamiento mucocutáneo con puntos simples de Vicryl Rapid 4-0.</li>
        </ol>
      </div>
    `
  },
  rtuv: {
    titulo: "Resección Transuretral de Vejiga (RTUV)",
    nivel: "Nivel R2 • Endourología Oncológica",
    badgeClass: "badge-surg",
    queryPubmed: "transurethral resection of bladder tumor technique",
    contenido: `
      <div class="modal-section">
        <h4>1. Objetivo Oncológico</h4>
        <p>Resección completa y etapificación histológica del detrusor muscular.</p>
      </div>
      <div class="modal-section">
        <h4>2. Pasos de Quirófano</h4>
        <ol>
          <li>Cistoscopía diagnóstica y mapeo topográfico vesical.</li>
          <li>Resección en capas: exófito, base y detrusor profundo en frascos separados.</li>
          <li>Identificación de haces entrelazados blanquecinos musculares.</li>
          <li>Cortes cortos en cara lateral para evitar reflejo del nervio obturador.</li>
          <li>Hemostasia cuidadosa y sonda Foley de 3 vías con lavado continuo.</li>
        </ol>
      </div>
    `
  },
  rtup: {
    titulo: "Resección Transuretral de Próstata (RTUP)",
    nivel: "Nivel R2 • Endourología Próstata",
    badgeClass: "badge-surg",
    queryPubmed: "transurethral resection prostate technique urology",
    contenido: `
      <div class="modal-section">
        <h4>1. Reparos Anatómicos Clave</h4>
        <p><strong>Veru montanum:</strong> Límite distal estricto para proteger el esfínter estriado y evitar incontinencia.</p>
      </div>
      <div class="modal-section">
        <h4>2. Secuencia</h4>
        <ol>
          <li>Canal de trabajo anterior a hora 12 desde cuello a veru.</li>
          <li>Resección de lóbulo medio hacia cavidad vesical.</li>
          <li>Resección de lóbulos laterales respetando la cápsula quirúrgica.</li>
          <li>Hemostasia arterial a hora 4-5 y 7-8. Evacuación con pera de Ellick.</li>
        </ol>
      </div>
    `
  },
  urs: {
    titulo: "Ureteroscopía Semirrígida & Flexible (URS)",
    nivel: "Nivel R2 • Endourología Litiasis",
    badgeClass: "badge-surg",
    queryPubmed: "ureteroscopy flexible holmium laser technique",
    contenido: `
      <div class="modal-section">
        <h4>1. Secuencia de Abordaje</h4>
        <ol>
          <li>Cateterismo del meato con alambre guía hidrofílico 0.035" bajo fluoroscopía.</li>
          <li>URS semirrígido para uréter pelviano e ilíaco con hidrodilatación.</li>
          <li>URS flexible con vaina (UAS) para cálices renales inferiores.</li>
          <li>Láser: Dusting (0.2-0.4 J / 30-50 Hz) o Fragmentación (1.0-1.5 J / 8-12 Hz).</li>
          <li>Colocación de catéter Doble J retrógrado de protección.</li>
        </ol>
      </div>
    `
  },
  nefrectomia: {
    titulo: "Nefrectomía Radical Laparoscópica",
    nivel: "Nivel R3 • Cirugía Laparoscópica",
    badgeClass: "badge-onco",
    queryPubmed: "laparoscopic radical nephrectomy technique",
    contenido: `
      <div class="modal-section">
        <h4>1. Disposición de Trócares & Pasos</h4>
        <ol>
          <li>Decúbito lateral a 90° con quiebre de camilla sobre cresta ilíaca.</li>
          <li>Óptica umbilical de 30° y puertos en semiluna (5 mm y 10-12 mm).</li>
          <li>Descenso colónico por línea de Toldt (Cattell-Braasch / Mattox).</li>
          <li><strong>Regla de oro:</strong> Control y clipado con Hem-o-lok de <strong>arteria renal primero</strong> antes de seccionar vena renal.</li>
          <li>Extracción del riñón en bolsa laparoscópica intacta.</li>
        </ol>
      </div>
    `
  },
  prostatectomia: {
    titulo: "Prostatectomía Radical (Laparoscópica / Robótica)",
    nivel: "Nivel R4 • Oncología Mayor",
    badgeClass: "badge-onco",
    queryPubmed: "radical prostatectomy technique robotic laparoscopic",
    contenido: `
      <div class="modal-section">
        <h4>1. Tiempos Operatorios</h4>
        <ol>
          <li>Trendelenburg forzado a 25-30°. Acceso al espacio de Retzius.</li>
          <li>Apertura de fascia endopélvica y ligadura del complejo de Santorini.</li>
          <li>Disección y preservación circular del cuello vesical.</li>
          <li>Aislamiento de deferentes, vesículas y fascia de Denonvilliers.</li>
          <li>Preservación de bandeletas neurovasculares eréctiles posterolaterales.</li>
          <li>Anastomosis vesicouretral continua (Van Velthoven) sobre sonda Foley 18 Fr.</li>
        </ol>
      </div>
    `
  }
};

// MODAL
function abrirCirugia(clave) {
  const data = atlasCirugias[clave];
  if (!data) return;

  document.getElementById('mTitulo').innerText = data.titulo;
  const badge = document.getElementById('mBadge');
  badge.innerText = data.nivel;
  badge.className = `badge ${data.badgeClass}`;

  const bloqueBuscador = `
    <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:10px; padding:12px; margin-top:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
      <span style="font-size:0.8rem; color:var(--brand-dark); font-weight:600;">¿Querés ver artículos y casos clínicos de esta técnica?</span>
      <button class="btn-act btn-primary" onclick="buscarCirugiaDesdeModal('${data.queryPubmed}')">🔍 Buscar en PubMed</button>
    </div>
  `;

  document.getElementById('mContenido').innerHTML = data.contenido + bloqueBuscador;
  document.getElementById('modalSurg').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function forzarCierreModal() {
  document.getElementById('modalSurg').classList.remove('open');
  document.body.style.overflow = 'auto';
}

function cerrarModal(e) {
  if (e.target.id === 'modalSurg') {
    forzarCierreModal();
  }
}

function buscarCirugiaDesdeModal(termino) {
  forzarCierreModal();
  cambiarPestana('tab-buscador', document.querySelectorAll('.dock-btn')[0]);
  document.getElementById('termInput').value = termino;
  ejecutarBusqueda();
}

// NAVEGACIÓN Y TOAST
let filtroActivo = '';

function setFiltro(btn, filtro) {
  document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filtroActivo = filtro;
  ejecutarBusqueda();
}

function cambiarPestana(tabId, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.dock-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mostrarToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

function copiarCita(titulo, autores, revista, anio) {
  const primerAutor = autores ? autores.split(',')[0].trim() : 'Autor';
  const cita = `${primerAutor} et al. ${titulo}. ${revista}. ${anio}.`;
  navigator.clipboard.writeText(cita).then(() => {
    mostrarToast("Cita copiada en formato Vancouver");
  });
}

function copiarPlantillaProyecto() {
  const plantilla = `PROTOCOLO DE PROYECTO DE INVESTIGACIÓN (UROLOGÍA)
1. TÍTULO: 
2. INVESTIGADOR PRINCIPAL: 
3. SERVICIO: Urología
4. INTRODUCCIÓN Y ANTECEDENTES: 
5. HIPÓTESIS / PREGUNTA PICO: 
6. OBJETIVO GENERAL: 
7. OBJETIVOS ESPECÍFICOS: 
8. MATERIAL Y MÉTODOS:
   - Diseño del estudio: 
   - Criterios de Inclusión: 
   - Criterios de Exclusión: 
   - Variables a evaluar: 
9. ANÁLISIS ESTADÍSTICO: 
10. ASPECTOS ÉTICOS Y CONSENTIMIENTO: 
11. BIBLIOGRAFÍA (Normas Vancouver): `;
  navigator.clipboard.writeText(plantilla).then(() => {
    mostrarToast("Plantilla copiada");
  });
}

// LOCALSTORAGE (CUADERNO)
function guardarNota() {
  const tit = document.getElementById('notaTitulo').value.trim();
  const cue = document.getElementById('notaCuerpo').value.trim();
  if (!tit && !cue) return;

  const notas = JSON.parse(localStorage.getItem('uro_notas') || '[]');
  notas.unshift({ id: Date.now(), titulo: tit || 'Sin título', cuerpo: cue, fecha: new Date().toLocaleDateString() });
  localStorage.setItem('uro_notas', JSON.stringify(notas));

  document.getElementById('notaTitulo').value = '';
  document.getElementById('notaCuerpo').value = '';
  mostrarToast("Guardado en tu cuaderno");
  cargarNotas();
}

function borrarNota(id) {
  let notas = JSON.parse(localStorage.getItem('uro_notas') || '[]');
  notas = notas.filter(n => n.id !== id);
  localStorage.setItem('uro_notas', JSON.stringify(notas));
  cargarNotas();
}

function cargarNotas() {
  const cont = document.getElementById('listaNotas');
  const notas = JSON.parse(localStorage.getItem('uro_notas') || '[]');
  if (notas.length === 0) {
    cont.innerHTML = '<p style="font-size:0.8rem; color:var(--text-muted);">No tenés proyectos guardados aún.</p>';
    return;
  }
  cont.innerHTML = notas.map(n => `
    <div style="background:#f8fafc; border:1px solid var(--border); border-radius:10px; padding:12px; margin-bottom:8px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <strong style="font-size:0.9rem; color:var(--brand-dark);">${n.titulo}</strong>
        <button onclick="borrarNota(${n.id})" style="border:none; background:none; color:#ef4444; font-size:0.75rem; cursor:pointer;">Borrar</button>
      </div>
      <p style="font-size:0.82rem; color:#334155; margin-top:6px; white-space:pre-wrap;">${n.cuerpo}</p>
      <div style="font-size:0.7rem; color:var(--text-muted); margin-top:6px;">Fecha: ${n.fecha}</div>
    </div>
  `).join('');
}

cargarNotas();

// BÚSQUEDA EN PUBMED / EUROPE PMC
async function ejecutarBusqueda() {
  const input = document.getElementById('termInput').value.trim();
  const cont = document.getElementById('resultadosPapers');
  if (!input) return;

  cont.innerHTML = `
    <div class="skeleton-card">
      <div class="skeleton-line" style="width: 25%;"></div>
      <div class="skeleton-line" style="width: 80%;"></div>
      <div class="skeleton-line" style="width: 100%; height: 50px;"></div>
    </div>
  `;

  let q = `(${input}) AND (urology OR urologic OR urological)`;
  if (filtroActivo === 'case reports') q += ' AND ("case report" OR "case series")';
  if (filtroActivo === 'clinical trial') q += ' AND "clinical trial"';
  if (filtroActivo === 'uro-oncology') q += ' AND (oncology OR cancer OR carcinoma)';
  if (filtroActivo === 'surgical technique') q += ' AND ("surgical technique" OR "laparoscopy" OR "robotic")';
  if (filtroActivo === 'guidelines') q += ' AND ("guideline" OR "consensus")';

  const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(q)}&format=json&pageSize=8&resultType=core&sort=P_PDATE_D desc`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const papers = data.resultList.result;

    if (!papers || papers.length === 0) {
      cont.innerHTML = '<div class="card" style="text-align:center; padding:25px; color:var(--text-muted);">Sin resultados. Probá con términos en inglés.</div>';
      return;
    }

    let html = '';
    papers.forEach((p, i) => {
      const abs = p.abstractText ? p.abstractText.replace(/<[^>]*>/g, '') : "Resumen no disponible directamente en el índice.";
      const journal = p.journalTitle || "Revista Urológica Internacional";
      const year = p.pubYear || "";
      const authors = p.authorString || "Autores internacionales";
      const journalUrl = `https://www.ncbi.nlm.nih.gov/nlmcatalog/?term=${encodeURIComponent(journal)}`;

      html += `
        <div class="card">
          <span class="badge badge-surg">${p.pubType || 'Publicación Científica'}</span>
          <h3>${p.title}</h3>
          <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px;">
            <strong>Revista:</strong> <a href="${journalUrl}" target="_blank" class="journal-link">${journal} ↗</a> (${year}) | <strong>Autores:</strong> ${authors}
          </p>
          <div class="abstract-box" id="abs-${i}">${abs}</div>
          <div class="btn-row">
            <button class="btn-act btn-primary" onclick="traducirAbstract('abs-${i}')">🌐 Traducir Abstract</button>
            <button class="btn-act btn-purple" onclick="copiarCita('${p.title.replace(/'/g, "\\'")}', '${authors.replace(/'/g, "\\'")}', '${journal}', '${year}')">📋 Copiar Cita Vancouver</button>
            <a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(p.title + ' ct scan urology')}" target="_blank" class="btn-act btn-green">📸 Ver Tomografías/TC</a>
            <a href="https://doi.org/${p.doi || ''}" target="_blank" class="btn-act" style="color:var(--brand);">Ver Paper Oficial ↗</a>
          </div>
        </div>
      `;
    });
    cont.innerHTML = html;
  } catch (e) {
    cont.innerHTML = '<div class="card" style="text-align:center; padding:20px; color:#ef4444;">Error al conectar con el servidor médico internacional.</div>';
  }
}

// TRADUCTOR
async function traducirAbstract(id) {
  const el = document.getElementById(id);
  const txt = el.innerText;
  if (!txt || txt.startsWith("Resumen no disponible")) return;

  el.innerText = "Traduciendo con IA biomédica...";
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(txt.slice(0, 480))}&langpair=en|es`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.responseData?.translatedText) {
      el.innerText = data.responseData.translatedText;
      mostrarToast("Traducción completada");
    } else {
      el.innerText = txt;
    }
  } catch(e) {
    el.innerText = txt;
  }
}

// CALCULADORA STENT
function calcularStent() {
  const v = document.getElementById('selectAltura').value;
  const r = document.getElementById('resStent');
  if (!v) { r.style.display = 'none'; return; }
  r.style.display = 'block';
  if (v === 'baja') r.innerHTML = "<strong>Sugerencia:</strong> Catéter Doble J de <strong>24 cm</strong> (4.7 a 6 Fr). Previene irritación vesical.";
  else if (v === 'media') r.innerHTML = "<strong>Sugerencia:</strong> Catéter Doble J de <strong>26 cm</strong> (6 Fr estándar).";
  else r.innerHTML = "<strong>Sugerencia:</strong> Catéter Doble J de <strong>28 cm</strong> (6 Fr). Evita migración proximal.";
}