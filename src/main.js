// ============================================================
// WALKMAR PRODUÇÕES — Lógica principal
// ============================================================

import { PROJETOS, getRouanet, getProAc, getVideos } from './projetos.js';

// ── Estado ──────────────────────────────────────────────────
let shown = [...PROJETOS];
let filt  = 'todos';
let idx   = 0;

// ── Elementos ────────────────────────────────────────────────
const trackEl = document.getElementById('track');
const dotsEl  = document.getElementById('dots');
const curEl   = document.getElementById('curN');
const totEl   = document.getElementById('totN');
const emptyEl = document.getElementById('empty');
const statN   = document.getElementById('statN');

// ── Largura do card (responsiva) ─────────────────────────────
function cw() {
  if (window.innerWidth <= 640)  return window.innerWidth * 0.88 - 16;
  if (window.innerWidth <= 1024) return 280;
  return 320;
}
const GAP = 18;

// ════════════════════════════════════════════════════════════
// RENDER CARDS
// ════════════════════════════════════════════════════════════
function render() {
  trackEl.innerHTML = '';
  dotsEl.innerHTML  = '';
  const tot = shown.length;

  if (!tot) {
    emptyEl.style.display = 'block';
    trackEl.style.display = 'none';
    totEl.textContent = ' / 00';
    curEl.textContent = '00';
    statN.textContent = '0';
    return;
  }

  emptyEl.style.display = 'none';
  trackEl.style.display = 'flex';

  shown.forEach((p, i) => {
    const isProac = p.lei === 'proac';
    const capa    = p.fotos[0] || null;

    // Card
    const card = document.createElement('div');
    card.className = 'p-card';
    card.onclick = () => openModal(i);

    card.innerHTML = `
      <div class="c-bg" style="background:${p.bg}"></div>
      ${capa ? `<div class="c-photo" data-src="${capa}"></div>` : ''}
      <div class="c-grad"></div>
      <div class="c-lei${isProac ? ' proac' : ''}">${p.leiLabel}</div>
      <div class="c-num">${String(i+1).padStart(2,'0')} / ${String(tot).padStart(2,'0')}</div>
      <div class="c-body">
        <div class="c-tema${isProac ? ' proac' : ''}">${p.tema}</div>
        <div class="c-title">${p.title}</div>
        <div class="c-meta">
          <span class="c-mi">${p.pronac}</span>
          <div class="c-md"></div>
          <span class="c-mi">${p.valor}</span>
        </div>
        <button class="c-cta">Ver projeto →</button>
      </div>
      <div class="c-impact">
        <div class="ci-val">${p.impacto.split(' ')[0]}</div>
        <div class="ci-label">${p.impacto.split(' ').slice(1).join(' ')}</div>
      </div>`;

    // Lazy load da foto de capa
    if (capa) {
      const ph  = card.querySelector('.c-photo');
      const img = new Image();
      img.onload  = () => { ph.style.backgroundImage = `url('${capa}')`; ph.classList.add('loaded'); };
      img.onerror = () => {};
      img.src = capa;
    }

    trackEl.appendChild(card);

    // Dot
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' on' : '');
    dot.setAttribute('aria-label', `Projeto ${i+1}`);
    dot.onclick = () => goTo(i);
    dotsEl.appendChild(dot);
  });

  totEl.textContent = ` / ${String(tot).padStart(2,'0')}`;
  statN.textContent = tot;
  idx = 0;
  pos(false);
}

// ════════════════════════════════════════════════════════════
// POSICIONAMENTO DO CAROUSEL
// ════════════════════════════════════════════════════════════
function pos(anim = true) {
  const tot = shown.length;
  if (!tot) return;
  const w = cw();
  trackEl.style.transition = anim ? 'transform .62s cubic-bezier(.25,.46,.45,.94)' : 'none';
  trackEl.style.transform  = `translateX(-${idx * (w + GAP)}px)`;
  document.querySelectorAll('.p-card').forEach(c => { c.style.flex = `0 0 ${w}px`; });
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('on', i === idx));
  curEl.textContent = String(idx + 1).padStart(2, '0');
}

function goTo(i) {
  const t = shown.length;
  if (!t) return;
  idx = ((i % t) + t) % t;
  pos();
}
function next() { goTo(idx + 1); }
function prev() { goTo(idx - 1); }

document.getElementById('btnN').onclick = next;
document.getElementById('btnP').onclick = prev;
window.addEventListener('resize', () => pos(false));

// Teclado
document.addEventListener('keydown', e => {
  if (document.getElementById('mOv').classList.contains('open')) {
    if (e.key === 'Escape')     closeModal();
    if (e.key === 'ArrowRight') modalNext();
    if (e.key === 'ArrowLeft')  modalPrev();
    return;
  }
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft')  prev();
});

// Touch
const shell = document.querySelector('.car-shell');
let tx = 0;
shell.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
shell.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
});
// ════════════════════════════════════════════════════════════
// FILTRO
// ════════════════════════════════════════════════════════════
window.setF = function(f, btn) {
  filt = f;
  document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');

  const isVideos = f === 'videos';
  document.querySelector('.car-shell').style.display    = isVideos ? 'none' : '';
  document.querySelector('.controls').style.display     = isVideos ? 'none' : '';
  document.getElementById('videoGridWrap').style.display = isVideos ? 'block' : 'none';

  if (isVideos) { renderVideoGrid(); return; }

  shown = f === 'todos' ? [...PROJETOS] : f === 'rouanet' ? getRouanet() : getProAc();
  render();
};

// ════════════════════════════════════════════════════════════
// MODAL
// ════════════════════════════════════════════════════════════
let activeThumb   = 0;
let activeProject = null;
let modalList     = [];
let modalIdx      = 0;

function _setupModal(p) {
  const existingIframe = document.querySelector('.m-video-iframe');
  if (existingIframe) existingIframe.remove();

  activeProject = p;
  activeThumb = 0;

  const isProac = p.lei === 'proac';

  document.getElementById('mBg').style.background = p.bg;

  const leiEl = document.getElementById('mLei');
  leiEl.textContent = p.leiLabel;
  leiEl.className   = 'm-lei-tag' + (isProac ? ' proac' : '');

  document.getElementById('mTitle').textContent  = p.title;
  document.getElementById('mPronac').textContent = p.pronac;

  document.getElementById('mStats').innerHTML = `
    <div class="m-stat"><div class="m-stat-val">${p.valor}</div><div class="m-stat-label">Valor do projeto</div></div>
    <div class="m-stat"><div class="m-stat-val">${p.impacto}</div><div class="m-stat-label">Impacto direto</div></div>`;

  setHeroPhoto(p.fotos[0] || null, p.bg);

  // Thumbs: vídeo primeiro, depois fotos
  const thumbsEl = document.getElementById('mThumbs');
  let thumbsHTML = '';
  if (p.video) {
    thumbsHTML = `<button class="m-thumb-video" onclick="showHeroVideo('${p.video}')">▶ Assistir Vídeo</button>`;
  }
  if (p.fotos.length > 0) {
    thumbsHTML += p.fotos.map((url, ti) => `
      <img class="m-thumb${ti === 0 ? ' on' : ''}"
           src="${url}" loading="lazy" alt="Foto ${ti+1}"
           onclick="selectPhoto(${ti},'${url}')"
           onerror="this.style.display='none'">`).join('');
  } else if (!p.video) {
    thumbsHTML = `<div class="m-thumb-ph">📷</div>`;
  }
  thumbsEl.innerHTML = thumbsHTML;

  document.getElementById('mDesc').textContent = p.desc;
  document.getElementById('mTags').innerHTML = `
    <div class="m-tag"><strong>Tema</strong>${p.tema}</div>
    <div class="m-tag"><strong>Público</strong>${p.publico}</div>
    <div class="m-tag"><strong>Realização</strong>${p.local}</div>`;

  document.getElementById('mCotas').innerHTML = p.cotas.map(c => `
    <div class="m-cota">
      <div class="cota-l">${c.label}</div>
      <div class="cota-d">${c.desc}</div>
    </div>`).join('');

  document.getElementById('mOv').classList.add('open');
  document.getElementById('mBox').scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

window.openModal = function(i) {
  modalList = shown;
  modalIdx  = i;
  _setupModal(shown[i]);
};

function setHeroPhoto(url, bgColor) {
  const img = document.getElementById('mImg');
  const bg  = document.getElementById('mBg');
  bg.style.background = bgColor;
  if (url) {
    img.src = url;
    img.classList.remove('hidden');
    img.onerror = () => img.classList.add('hidden');
  } else {
    img.src = '';
    img.classList.add('hidden');
  }
}

window.selectPhoto = function(ti, url) {
  activeThumb = ti;
  const iframe = document.querySelector('.m-video-iframe');
  if (iframe) iframe.remove();
  setHeroPhoto(url, activeProject?.bg || '#111');
  document.querySelectorAll('.m-thumb').forEach((t, i) => t.classList.toggle('on', i === ti));
};

window.showHeroVideo = function(videoId) {
  const hero = document.querySelector('.m-hero');
  const img  = document.getElementById('mImg');
  const h    = hero.offsetHeight || 400;

  const existing = hero.querySelector('.m-video-iframe');
  if (existing) existing.remove();

  img.classList.add('hidden');

  const iframe = document.createElement('iframe');
  iframe.className = 'm-video-iframe';
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', String(h));
  iframe.setAttribute('allow', 'autoplay; encrypted-media; fullscreen');
  iframe.allowFullscreen = true;

  hero.insertBefore(iframe, img);
  document.querySelectorAll('.m-thumb').forEach(t => t.classList.remove('on'));
};

window.closeModal = function() {
  const iframe = document.querySelector('.m-video-iframe');
  if (iframe) iframe.remove();
  if (activeProject) {
    setHeroPhoto(activeProject.fotos[0] || null, activeProject.bg);
    activeThumb = 0;
    document.querySelectorAll('.m-thumb').forEach((t, i) => t.classList.toggle('on', i === 0));
  }
  document.getElementById('mOv').classList.remove('open');
  document.body.style.overflow = '';
};

window.closeM = function(e) {
  if (e.target === document.getElementById('mOv')) closeModal();
};

window.modalPrev = function() {
  if (modalList.length <= 1) return;
  modalIdx = ((modalIdx - 1) + modalList.length) % modalList.length;
  _setupModal(modalList[modalIdx]);
};

window.modalNext = function() {
  if (modalList.length <= 1) return;
  modalIdx = (modalIdx + 1) % modalList.length;
  _setupModal(modalList[modalIdx]);
};

// ════════════════════════════════════════════════════════════
// GRADE DE VÍDEOS
// ════════════════════════════════════════════════════════════
function renderVideoGrid() {
  const grid = document.getElementById('videoGrid');
  grid.innerHTML = getVideos().map(p => {
    const isProac = p.lei === 'proac';
    return `
      <div class="v-card" onclick="openVideoModal('${p.id}')">
        <div class="v-thumb">
          <img src="https://img.youtube.com/vi/${p.video}/hqdefault.jpg" alt="${p.title}" loading="lazy">
          <div class="v-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
        </div>
        <div class="v-info">
          <span class="v-lei${isProac ? ' proac' : ''}">${p.leiLabel}</span>
          <div class="v-title">${p.title}</div>
          <div class="v-pronac">${p.pronac}</div>
        </div>
      </div>`;
  }).join('');
}

window.openVideoModal = function(projetoId) {
  const videos = getVideos();
  const i = videos.findIndex(p => p.id === projetoId);
  modalList = videos;
  modalIdx  = i >= 0 ? i : 0;
  _setupModal(modalList[modalIdx]);
  setTimeout(() => showHeroVideo(modalList[modalIdx].video), 80);
};

// ── Init ─────────────────────────────────────────────────────
render();
