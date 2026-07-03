// ===================================
// Lupizeira — Landing Page App
// Loads content.json and hydrates each section.
// ===================================

const SOCIAL_ICONS = {
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 1.8.25 2.2.42.6.23 1 .5 1.5 1 .5.5.77.9 1 1.5.17.4.36 1 .42 2.2.07 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.25 1.8-.42 2.2-.23.6-.5 1-1 1.5-.5.5-.9.77-1.5 1-.4.17-1 .36-2.2.42-1.2.07-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-1.8-.25-2.2-.42a4.1 4.1 0 0 1-1.5-1 4.1 4.1 0 0 1-1-1.5c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.06-1.2.25-1.8.42-2.2.23-.6.5-1 1-1.5.5-.5.9-.77 1.5-1 .4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52.01-4.76.07-1 .05-1.55.21-1.91.35-.48.19-.82.41-1.18.77-.36.36-.58.7-.77 1.18-.14.36-.3.91-.35 1.91C3.01 8.48 3 8.85 3 12s.01 3.52.07 4.76c.05 1 .21 1.55.35 1.91.19.48.41.82.77 1.18.36.36.7.58 1.18.77.36.14.91.3 1.91.35 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1-.05 1.55-.21 1.91-.35.48-.19.82-.41 1.18-.77.36-.36.58-.7.77-1.18.14-.36.3-.91.35-1.91.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1-.21-1.55-.35-1.91a3.18 3.18 0 0 0-.77-1.18 3.18 3.18 0 0 0-1.18-.77c-.36-.14-.91-.3-1.91-.35C15.52 4.01 15.15 4 12 4zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3zm5.15-2.05a1.16 1.16 0 1 1 0 2.31 1.16 1.16 0 0 1 0-2.31z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>',
  linktree: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.11 17.21c-.28-.14-1.65-.81-1.91-.9-.26-.09-.45-.14-.64.14-.19.28-.73.9-.89 1.09-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.28-1 .98-1 2.39s1.02 2.78 1.16 2.97c.14.19 2 3.05 4.84 4.27.68.29 1.21.47 1.62.61.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.12-.26-.19-.54-.33zM12 2C6.48 2 2 6.48 2 12c0 1.94.55 3.75 1.5 5.29L2 22l4.83-1.47A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>',
  email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>'
};

// Inline UI icons (stroke-based for buttons / inline use)
const UI_ICONS = {
  whatsapp: '<svg class="btn-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.11 17.21c-.28-.14-1.65-.81-1.91-.9-.26-.09-.45-.14-.64.14-.19.28-.73.9-.89 1.09-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.28-1 .98-1 2.39s1.02 2.78 1.16 2.97c.14.19 2 3.05 4.84 4.27.68.29 1.21.47 1.62.61.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.12-.26-.19-.54-.33zM12 2C6.48 2 2 6.48 2 12c0 1.94.55 3.75 1.5 5.29L2 22l4.83-1.47A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>',
  instagram: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  calendar: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
  arrowUpRight: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',
  pin: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  arrowUp: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  cart: '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h2l2.4 12.5a2 2 0 0 0 2 1.5h7.7a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="10" cy="21" r="1.2"/><circle cx="18" cy="21" r="1.2"/></svg>'
};

const escapeHtml = (str = '') =>
  String(str).replace(/[&<>"']/g, (s) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));

// ----- Internationalization (PT / EN) -----
const LANG_KEY = 'lupizeira-lang';
const SUPPORTED_LANGS = ['pt', 'en'];
const DEFAULT_LANG = 'pt';

// A translation leaf is EXACTLY { pt, en } and nothing else.
const isLangLeaf = (v) =>
  v && typeof v === 'object' && !Array.isArray(v) &&
  Object.prototype.hasOwnProperty.call(v, 'pt') &&
  Object.prototype.hasOwnProperty.call(v, 'en') &&
  Object.keys(v).length === 2;

// Recursively resolve every {pt,en} leaf to the active-language string.
// Arrays, image paths, hrefs and all other structure pass through unchanged.
const localize = (node, lang) => {
  if (Array.isArray(node)) return node.map((n) => localize(n, lang));
  if (node && typeof node === 'object') {
    if (isLangLeaf(node)) return node[lang] ?? node.pt ?? node.en ?? '';
    const out = {};
    for (const k of Object.keys(node)) out[k] = localize(node[k], lang);
    return out;
  }
  return node; // string | number | boolean | null
};

// First letter of an author label, ignoring a leading "@", for monogram avatars.
const monogramLetter = (name = '') => {
  const m = String(name).replace(/^@+/, '').trim();
  return (m.charAt(0) || '•').toUpperCase();
};

// Allow only <strong class="about-stat">...</strong> markup inside About paragraphs.
const renderAboutInline = (str = '') => {
  const placeholders = [];
  const withMarkers = String(str).replace(
    /<strong class="about-stat">([\s\S]*?)<\/strong>/g,
    (_match, inner) => {
      const idx = placeholders.length;
      placeholders.push(inner);
      return `\u0000${idx}\u0000`;
    }
  );
  const escaped = escapeHtml(withMarkers);
  return escaped.replace(/\u0000(\d+)\u0000/g, (_m, i) => {
    const safeInner = escapeHtml(placeholders[Number(i)] ?? '');
    return `<strong class="about-stat">${safeInner}</strong>`;
  });
};

class LupizeiraApp {
  constructor() {
    this.content = null;
    this.rawContent = null;
    this.lang = DEFAULT_LANG;
    this.lightbox = null;
    this.carouselDrag = null;
    this._globalsBound = false;
    this.init();
  }

  async init() {
    await this.loadContent();
    if (!this.rawContent) return;
    this.lang = this.getInitialLang();
    this.bindGlobalListeners();
    this.renderAll();
  }

  async loadContent() {
    try {
      const res = await fetch('config/content.json');
      this.rawContent = await res.json();
    } catch (err) {
      console.error('Falha ao carregar content.json:', err);
    }
  }

  // ----- Language -----

  getInitialLang() {
    let stored = null;
    try { stored = localStorage.getItem(LANG_KEY); } catch { /* private mode */ }
    if (SUPPORTED_LANGS.includes(stored)) return stored;
    const nav = (navigator.language || '').toLowerCase();
    return nav.startsWith('en') ? 'en' : DEFAULT_LANG;
  }

  applyLanguage(lang) {
    this.lang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
    this.content = localize(this.rawContent, this.lang);
  }

  setLanguage(lang) {
    if (lang === this.lang || !SUPPORTED_LANGS.includes(lang)) return;
    try { localStorage.setItem(LANG_KEY, lang); } catch { /* ignore */ }
    this.lang = lang;
    this.renderAll();
  }

  // Re-run on every language change: resolve content, re-render, re-bind
  // DOM-scoped listeners. Window/document listeners are bound once (see
  // bindGlobalListeners) and read live state, so they are NOT touched here.
  renderAll() {
    this.applyLanguage(this.lang);
    this.applyMeta();
    this.render();
    this.attachDomListeners();
    this.initRevealOnScroll();
    this.initTestimonialsCarousel();
    this.initHeroShowcaseRotator();
  }

  // Bound exactly once (guarded). Handlers read live DOM/instance state so
  // they survive full re-renders on language toggle without duplicating.
  bindGlobalListeners() {
    if (this._globalsBound) return;
    this._globalsBound = true;

    // Delegated on the stable #main-nav (its innerHTML changes each render,
    // but the node itself is never replaced) — handles the language toggle
    // and the mobile hamburger.
    const nav = document.getElementById('main-nav');
    nav?.addEventListener('click', (e) => {
      if (e.target.closest('[data-lang-toggle]')) {
        this.setLanguage(this.lang === 'pt' ? 'en' : 'pt');
        return;
      }
      const hamburger = e.target.closest('.nav-toggle');
      if (hamburger) {
        const open = nav.classList.toggle('menu-open');
        hamburger.setAttribute('aria-expanded', String(open));
      }
    });

    // Smooth scroll for in-page anchors (delegated once; covers nav links
    // recreated on every render plus static anchors, with no duplication).
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav?.classList.remove('menu-open');
      nav?.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');
    });

    // Nav background on scroll.
    const onScroll = () => {
      const n = document.getElementById('main-nav');
      n?.classList.toggle('scrolled', window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Announcement "Saber mais" modal (delegated once; bar/modal re-render each language change)
    const annModal = document.getElementById('announcement-modal');
    const openAnn = () => {
      if (!annModal) return;
      annModal.hidden = false;
      requestAnimationFrame(() => annModal.classList.add('is-open'));
      document.body.classList.add('is-locked');
      annModal.querySelector('[data-ann-close]')?.focus();
    };
    const closeAnn = () => {
      if (!annModal) return;
      annModal.classList.remove('is-open');
      document.body.classList.remove('is-locked');
      setTimeout(() => { annModal.hidden = true; }, 340);
    };
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-ann-more]')) { openAnn(); return; }
      if (e.target.closest('[data-ann-close]') || e.target === annModal) closeAnn();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && annModal && !annModal.hidden) closeAnn();
    });
    window.addEventListener('resize', () => {
      const b = document.getElementById('announcement-bar');
      if (b && !b.hidden) document.documentElement.style.setProperty('--ann-h', b.offsetHeight + 'px');
    }, { passive: true });

    // Testimonial "view full" modal (delegated once; cards re-render each language change)
    const tModal = document.getElementById('testimonial-modal');
    const openTestimonial = (i) => {
      const item = (this._testimonials ?? [])[i];
      if (!tModal || !item) return;
      const author = item.author ?? '';
      const avatar = item.avatar
        ? `<span class="tmodal-avatar"><img src="${escapeHtml(item.avatar)}" alt="${escapeHtml(author)}" decoding="async" /></span>`
        : `<span class="tmodal-avatar tmodal-monogram" aria-hidden="true">${escapeHtml(monogramLetter(author))}</span>`;
      tModal.innerHTML = `
        <div class="tmodal-card" role="document">
          <button type="button" class="tmodal-close" data-tmodal-close aria-label="Fechar">×</button>
          <div class="tmodal-head">
            ${avatar}
            <span class="tmodal-author">${escapeHtml(author)}</span>
            ${item.date ? `<span class="tmodal-date">${escapeHtml(item.date)}</span>` : ''}
          </div>
          <svg class="tmodal-quote" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.13 8.5C7.8 8.5 6.7 9.6 6.7 10.93c0 1.34 1.1 2.43 2.43 2.43.34 0 .67-.07.97-.2-.05 1.97-1.3 3.55-3.06 4.07l.49 1.27c2.95-.8 4.97-3.4 4.97-6.4 0-2.04-1.66-3.6-3.37-3.6zm8.4 0c-1.34 0-2.44 1.1-2.44 2.43 0 1.34 1.1 2.43 2.43 2.43.34 0 .67-.07.97-.2-.04 1.97-1.3 3.55-3.05 4.07l.48 1.27c2.96-.8 4.98-3.4 4.98-6.4 0-2.04-1.66-3.6-3.37-3.6z"/></svg>
          <p class="tmodal-text">${escapeHtml(item.text ?? '')}</p>
        </div>
      `;
      tModal.hidden = false;
      requestAnimationFrame(() => tModal.classList.add('is-open'));
      document.body.classList.add('is-locked');
      tModal.querySelector('[data-tmodal-close]')?.focus();
    };
    const closeTestimonial = () => {
      if (!tModal) return;
      tModal.classList.remove('is-open');
      document.body.classList.remove('is-locked');
      setTimeout(() => { tModal.hidden = true; }, 340);
    };
    document.addEventListener('click', (e) => {
      const exp = e.target.closest('[data-texpand]');
      if (exp) { openTestimonial(Number(exp.dataset.texpand)); return; }
      if (e.target.closest('[data-tmodal-close]') || e.target === tModal) closeTestimonial();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && tModal && !tModal.hidden) closeTestimonial();
    });

    this.initLightbox();
    this.bindCarouselWindowDrag();
  }

  applyMeta() {
    const { meta } = this.content;
    document.documentElement.lang = this.lang === 'en' ? 'en' : 'pt-BR';
    if (!meta) return;
    if (meta.title) document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description ?? '');
  }

  render() {
    this.renderAnnouncement();
    this.renderNav();
    this.renderHero();
    this.renderAbout();
    this.renderBotanica();
    this.renderFreehand();
    this.renderPortfolio();
    this.renderStudio();
    this.renderProcess();
    this.renderTestimonials();
    this.renderCta();
    this.renderLocationSocial();
    this.renderFooter();
    this.renderFloatingCta();
  }

  // ----- Sections -----

  renderAnnouncement() {
    const bar = document.getElementById('announcement-bar');
    const modal = document.getElementById('announcement-modal');
    const a = this.content.announcement;
    if (!a || !a.enabled) {
      if (bar) { bar.hidden = true; bar.innerHTML = ''; }
      if (modal) { modal.hidden = true; modal.innerHTML = ''; }
      document.body.classList.remove('has-announcement');
      document.documentElement.style.setProperty('--ann-h', '0px');
      return;
    }
    if (bar) {
      bar.innerHTML = `
        <div class="container announcement-bar-inner">
          <p class="announcement-bar-text">
            ${a.flag ? `<span class="announcement-bar-flag" aria-hidden="true">${escapeHtml(a.flag)}</span>` : ''}
            <span>${escapeHtml(a.bannerText ?? a.title)}</span>
          </p>
          <button type="button" class="announcement-bar-btn" data-ann-more>${escapeHtml(a.moreLabel ?? 'Saber mais')}</button>
        </div>
      `;
      bar.hidden = false;
      document.body.classList.add('has-announcement');
      // Offset the fixed nav below the bar (height is dynamic across languages/breakpoints)
      const setH = () => document.documentElement.style.setProperty('--ann-h', bar.offsetHeight + 'px');
      setH();
      requestAnimationFrame(setH);
    }
    if (modal) {
      const tags = (a.tags ?? []).map((t) => `<li>${escapeHtml(t)}</li>`).join('');
      const priceRows = (a.prices ?? []).map((p) => `
        <li class="announcement-price">
          <span class="announcement-price-style">${escapeHtml(p.style)}</span>
          <span class="announcement-price-value">${escapeHtml(p.from)}</span>
        </li>
      `).join('');
      const pricesBlock = priceRows ? `
        ${a.pricesTitle ? `<p class="announcement-prices-title">${escapeHtml(a.pricesTitle)}</p>` : ''}
        <ul class="announcement-prices">${priceRows}</ul>
        ${a.pricesNote ? `<p class="announcement-prices-note">${escapeHtml(a.pricesNote)}</p>` : ''}
      ` : '';
      modal.innerHTML = `
        <div class="announcement-card" role="document">
          <button type="button" class="announcement-close" data-ann-close aria-label="Fechar">×</button>
          ${a.flag ? `<span class="announcement-card-flag" aria-hidden="true">${escapeHtml(a.flag)}</span>` : ''}
          ${a.eyebrow ? `<span class="announcement-card-eyebrow">${escapeHtml(a.eyebrow)}</span>` : ''}
          <h2 class="announcement-card-title">${escapeHtml(a.title)}</h2>
          ${a.date ? `<p class="announcement-card-date">${escapeHtml(a.date)}</p>` : ''}
          ${a.badge ? `<span class="announcement-card-badge">${escapeHtml(a.badge)}</span>` : ''}
          ${tags ? `<ul class="announcement-card-tags">${tags}</ul>` : ''}
          <p class="announcement-card-text">${escapeHtml(a.text)}</p>
          ${pricesBlock}
          ${a.cta ? `<a href="${escapeHtml(a.cta.href)}" class="btn btn-whatsapp btn-large" target="_blank" rel="noopener">${UI_ICONS.whatsapp}<span>${escapeHtml(a.cta.label)}</span></a>` : ''}
        </div>
      `;
    }
  }

  renderNav() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    const { nav: data, hero } = this.content;
    const links = (data?.links ?? [])
      .map((l) => `<a href="${escapeHtml(l.href)}" class="nav-link">${escapeHtml(l.label)}</a>`)
      .join('');
    const ctaHref = this.content.cta?.primary?.href || hero?.ctaPrimary?.href || '#cta';
    nav.innerHTML = `
      <div class="container">
        <div class="nav-content">
          <a href="#hero" class="nav-logo">${escapeHtml(data?.logo ?? hero?.name ?? '')}</a>
          <button class="nav-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"/></svg>
          </button>
          <div class="nav-links">
            ${links}
            <button type="button" class="lang-toggle" data-lang-toggle aria-label="${this.lang === 'pt' ? 'Mudar idioma para inglês' : 'Switch language to Portuguese'}">
              <span class="lang-opt${this.lang === 'pt' ? ' is-active' : ''}" aria-hidden="true">PT</span>
              <span class="lang-sep" aria-hidden="true">/</span>
              <span class="lang-opt${this.lang === 'en' ? ' is-active' : ''}" aria-hidden="true">EN</span>
            </button>
            <a href="${escapeHtml(ctaHref)}" class="btn btn-primary nav-cta" target="_blank" rel="noopener">${UI_ICONS.calendar}<span>${escapeHtml(data?.ctaLabel ?? 'Agendar')}</span></a>
          </div>
        </div>
      </div>
    `;
  }

  renderHero() {
    const el = document.getElementById('hero');
    if (!el) return;
    const h = this.content.hero;
    const stylesItems = this.content.styles?.items ?? [];
    const stylesChips = stylesItems.map((t) =>
      `<span class="hero-style-chip">${escapeHtml(t)}</span>`
    ).join('');
    const featuredAll = h.featured ?? [];
    const PAGE_SIZE = 5;
    const featuredPages = [];
    for (let i = 0; i < featuredAll.length; i += PAGE_SIZE) {
      featuredPages.push(featuredAll.slice(i, i + PAGE_SIZE));
    }
    const featuredPagesHtml = featuredPages.map((page, pi) => {
      const cards = page.map((f, i) => `
        <figure class="hero-showcase-card hero-showcase-card--${i + 1}">
          <img src="${escapeHtml(f.image)}" alt="${escapeHtml(f.alt ?? '')}" loading="${pi === 0 ? 'eager' : 'lazy'}" decoding="async" />
        </figure>
      `).join('');
      return `<div class="hero-showcase-page${pi === 0 ? ' is-active' : ''}" data-page="${pi}" aria-hidden="${pi === 0 ? 'false' : 'true'}">${cards}</div>`;
    }).join('');
    const hasMultiplePages = featuredPages.length > 1;
    el.innerHTML = `
      <div class="container">
        <div class="hero-layout">
          <div class="hero-content reveal">
            <div class="hero-avatar">
              <img src="${escapeHtml(h.avatar)}" alt="${escapeHtml(h.avatarAlt ?? h.name)}" loading="eager" decoding="async" />
            </div>
            <span class="hero-eyebrow">${escapeHtml(h.eyebrow ?? 'Tatuagem autoral · Fortaleza-CE')}</span>
            <h1 class="hero-title">${escapeHtml(h.name)}</h1>
            ${h.signature ? `<span class="hero-signature" aria-hidden="true">${escapeHtml(h.signature)}</span>` : ''}
            <p class="hero-tagline">${escapeHtml(h.tagline)}</p>
            <div class="hero-cta">
              <a href="${escapeHtml(h.ctaPrimary.href)}" class="btn btn-whatsapp" target="_blank" rel="noopener">${UI_ICONS.whatsapp}<span>${escapeHtml(h.ctaPrimary.label)}</span></a>
              <a href="${escapeHtml(h.ctaSecondary.href)}" class="btn btn-secondary" target="_blank" rel="noopener">${UI_ICONS.instagram}<span>${escapeHtml(h.ctaSecondary.label)}</span></a>
            </div>
            ${stylesItems.length ? `
              <div class="hero-style-strip" aria-label="Especialidades">
                ${stylesChips}
              </div>
            ` : ''}
          </div>
          ${featuredAll.length ? `
            <aside class="hero-showcase reveal" aria-label="Trabalhos em destaque">
              <span class="hero-showcase-eyebrow">${escapeHtml(h.featuredEyebrow ?? 'Em destaque')}</span>
              <div class="hero-showcase-stage">
                <div class="hero-showcase-grid" data-pages="${featuredPages.length}">
                  ${featuredPagesHtml}
                </div>
                ${hasMultiplePages ? `
                  <button type="button" class="hero-showcase-rotate" aria-label="Próximas obras em destaque">
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>
                  </button>
                ` : ''}
              </div>
            </aside>
          ` : ''}
        </div>
      </div>
    `;
  }

  renderAbout() {
    const el = document.getElementById('about');
    if (!el) return;
    const a = this.content.about;
    const paragraphItems = Array.isArray(a.paragraphs)
      ? a.paragraphs.filter((p) => typeof p === 'string' && p.trim().length > 0)
      : [a.bio, a.bioSecondary].filter((p) => typeof p === 'string' && p.trim().length > 0);
    const introParagraph = paragraphItems[0] ?? '';
    const extraParagraphs = paragraphItems.slice(1);
    const extraParagraphsHtml = extraParagraphs
      .map((p) => `<p class="about-bio">${renderAboutInline(p)}</p>`)
      .join('');
    const aboutMoreId = 'about-more-content';
    const highlights = (a.highlights ?? []).map((h) => {
      if (typeof h === 'string') return `<li><h4>${escapeHtml(h)}</h4></li>`;
      return `<li><h4>${escapeHtml(h.title)}</h4>${h.description ? `<p>${escapeHtml(h.description)}</p>` : ''}</li>`;
    }).join('');
    const galleryItems = a.gallery ?? [];
    const collage = galleryItems.length
      ? `<div class="about-collage">${galleryItems.slice(0, 4).map((g, i) => `
          <figure class="about-collage-item about-collage-item--${escapeHtml(g.role || 'item-' + (i + 1))}">
            <img src="${escapeHtml(g.image)}" alt="${escapeHtml(g.alt ?? '')}" loading="lazy" decoding="async" />
          </figure>
        `).join('')}</div>`
      : (this.content.hero?.avatar
        ? `<div class="about-portrait"><img src="${escapeHtml(this.content.hero.avatar)}" alt="${escapeHtml(this.content.hero.avatarAlt ?? this.content.hero.name)}" loading="lazy" decoding="async" /></div>`
        : '');
    el.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <span class="section-index">01</span>
          <span class="section-eyebrow">${escapeHtml(a.eyebrow ?? 'A artista')}</span>
          <h2 class="section-title">${escapeHtml(a.title)}</h2>
        </div>
        <div class="about-content reveal">
          <div class="about-aside">
            ${collage}
           
          </div>
          <div class="about-text">
            <p class="about-lead">${escapeHtml(a.lead)}</p>
            ${introParagraph ? `
              <div class="about-intro-wrap">
                <p class="about-intro">${renderAboutInline(introParagraph)}</p>
                ${extraParagraphs.length ? `
                  <button type="button" class="about-read-toggle about-read-toggle--inside" aria-expanded="false" aria-controls="${aboutMoreId}">
                    <span class="about-read-label">${escapeHtml(this.content.ui?.readMore ?? 'Ler mais')}</span>
                    <span class="about-read-icon" aria-hidden="true">+</span>
                  </button>
                ` : ''}
              </div>
            ` : ''}
            ${extraParagraphs.length ? `
              <div id="${aboutMoreId}" class="about-more" hidden>
                ${extraParagraphsHtml}
              </div>
            ` : ''}
            ${a.signature ? `<p class="about-signature">${escapeHtml(a.signature)}</p>` : ''}
          </div>
          ${highlights ? `<ul class="about-highlights">${highlights}</ul>` : ''}
        </div>
      </div>
    `;
  }

  renderBotanica() {
    const el = document.getElementById('botanica');
    if (!el) return;
    const b = this.content.botanica;
    if (!b || !Array.isArray(b.items) || b.items.length === 0) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    this._botanicaFlat = [];
    const itemsHtml = b.items.map((item) => {
      const idx = this._botanicaFlat.length;
      this._botanicaFlat.push({ ...item, category: b.title });
      return `
        <button type="button" class="botanica-item" data-bindex="${idx}" aria-label="Ampliar ${escapeHtml(item.alt)}">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async" />
        </button>
      `;
    }).join('');
    el.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <span class="section-index">02</span>
          <span class="section-eyebrow">${escapeHtml(b.eyebrow ?? 'Botânica')}</span>
          <h2 class="section-title">${escapeHtml(b.title)}</h2>
          ${b.description ? `<p class="section-subtitle botanica-description">${escapeHtml(b.description)}</p>` : ''}
        </div>
        <div class="botanica-grid reveal">${itemsHtml}</div>
      </div>
    `;
  }

  renderFreehand() {
    const el = document.getElementById('freehand');
    if (!el) return;
    const f = this.content.freehand;
    const items = Array.isArray(f?.items) ? f.items : (Array.isArray(f?.pairs) ? f.pairs : []);
    if (!f || items.length === 0) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    this._freehandFlat = [];
    const itemsHtml = items.map((item) => {
      // Single combined image (color sketch + B&W final already in one photo)
      if (item.single) {
        const idx = this._freehandFlat.length;
        this._freehandFlat.push({ ...item.single, category: 'Sketch → Final', color: true });
        return `
          <article class="freehand-tile freehand-tile--single reveal">
            <button type="button" class="freehand-item freehand-item--single" data-findex="${idx}" aria-label="Ampliar ${escapeHtml(item.single.alt)}">
              <img src="${escapeHtml(item.single.image)}" alt="${escapeHtml(item.single.alt)}" loading="lazy" decoding="async" />
              <span class="freehand-tag">Sketch</span>
              <span class="freehand-tag freehand-tag--final">Final</span>
            </button>
          </article>
        `;
      }
      // Sketch (color) | Final (B&W) diptych tile
      const sketchIndex = this._freehandFlat.length;
      this._freehandFlat.push({ ...item.sketch, category: 'Sketch', color: true });
      const finalIndex = this._freehandFlat.length;
      this._freehandFlat.push({ ...item.final, category: 'Final' });
      return `
        <article class="freehand-tile freehand-tile--pair reveal">
          <button type="button" class="freehand-item freehand-half freehand-half--sketch" data-findex="${sketchIndex}" aria-label="Ampliar sketch">
            <img src="${escapeHtml(item.sketch.image)}" alt="${escapeHtml(item.sketch.alt)}" loading="lazy" decoding="async" />
            <span class="freehand-tag">Sketch</span>
          </button>
          <button type="button" class="freehand-item freehand-half freehand-half--final" data-findex="${finalIndex}" aria-label="Ampliar resultado final">
            <img src="${escapeHtml(item.final.image)}" alt="${escapeHtml(item.final.alt)}" loading="lazy" decoding="async" />
            <span class="freehand-tag freehand-tag--final">Final</span>
          </button>
        </article>
      `;
    }).join('');

    el.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <span class="section-index">03</span>
          <span class="section-eyebrow">${escapeHtml(f.eyebrow ?? 'Processo autoral')}</span>
          <h2 class="section-title">${escapeHtml(f.title)}</h2>
          ${f.subtitle ? `<p class="section-subtitle">${escapeHtml(f.subtitle)}</p>` : ''}
        </div>
        ${f.description ? `<p class="freehand-description reveal">${escapeHtml(f.description)}</p>` : ''}
        <div class="freehand-grid">${itemsHtml}</div>
      </div>
    `;
  }

  renderPortfolio() {
    const el = document.getElementById('portfolio');
    if (!el) return;
    const p = this.content.portfolio;
    this._portfolioFlat = [];
    const dividerIcon = p.dividerIcon
      ? `<img class="group-divider-icon" src="${escapeHtml(p.dividerIcon)}" alt="" aria-hidden="true" />`
      : '';

    const groups = (p.groups ?? []).map((group, gi) => {
      const itemsHtml = (group.items ?? []).map((item) => {
        const flatIndex = this._portfolioFlat.length;
        this._portfolioFlat.push(item);
        return `
          <button type="button" class="portfolio-item" data-index="${flatIndex}" aria-label="Ampliar ${escapeHtml(item.alt)}">
            <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async" />
            <span class="portfolio-item-caption">${escapeHtml(item.category ?? '')}</span>
          </button>
        `;
      }).join('');
      const divider = gi > 0
        ? `<div class="group-divider" aria-hidden="true"><span class="group-divider-line"></span>${dividerIcon}<span class="group-divider-line"></span></div>`
        : '';
      return `
        ${divider}
        <div class="portfolio-group reveal">
          <header class="portfolio-group-header">            
            <h3 class="portfolio-group-title">${escapeHtml(group.title)}</h3>
            ${group.description ? `<p class="portfolio-group-description">${escapeHtml(group.description)}</p>` : ''}
          </header>
          <div class="portfolio-grid">${itemsHtml}</div>
        </div>
      `;
    }).join('');

    el.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <span class="section-index">04</span>
          <span class="section-eyebrow">${escapeHtml(p.eyebrow ?? 'Trabalhos')}</span>
          <h2 class="section-title">${escapeHtml(p.title)}</h2>
          <p class="section-subtitle">${escapeHtml(p.subtitle ?? '')}</p>
        </div>
        ${groups}
      </div>
    `;
  }

  renderStudio() {
    const el = document.getElementById('studio');
    if (!el) return;
    const s = this.content.studio;
    const gallery = (s.gallery ?? []).map((g) => `
      <figure class="studio-gallery-item">
        <img src="${escapeHtml(g.image)}" alt="${escapeHtml(g.alt ?? s.name)}" loading="lazy" decoding="async" />
      </figure>
    `).join('');
    const map = s.mapEmbed
      ? `<div class="studio-map"><iframe src="${escapeHtml(s.mapEmbed)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localiza\u00e7\u00e3o do est\u00fadio ${escapeHtml(s.name)}"></iframe></div>`
      : '';
    el.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <span class="section-index">05</span>
          <span class="section-eyebrow">${escapeHtml(s.title)}</span>
          <h2 class="section-title">${escapeHtml(s.name)}</h2>
        </div>
        <div class="studio-content">
          <div class="studio-col-primary reveal">
            <div class="studio-info">
              <p class="studio-location">${escapeHtml(s.location)}</p>
              <p class="studio-address">${escapeHtml(s.address)}</p>
              <p class="studio-description">${escapeHtml(s.description)}</p>
              ${s.website ? `<a class="studio-website" href="${escapeHtml(s.website)}" target="_blank" rel="noopener"><span>${escapeHtml(s.websiteLabel ?? s.website)}</span>${UI_ICONS.arrowUpRight}</a>` : ''}
            </div>
            <div class="studio-gallery">${gallery}</div>
          </div>
          ${map ? `<div class="studio-col-map reveal">${map}</div>` : ''}
        </div>
      </div>
    `;
  }

  renderProcess() {
    const el = document.getElementById('process');
    if (!el) return;
    const p = this.content.process;
    const steps = (p.steps ?? []).map((s) => `
      <li class="process-step">
        <span class="process-number">${escapeHtml(s.number)}</span>
        <h3 class="process-title">${escapeHtml(s.title)}</h3>
        <p class="process-description">${escapeHtml(s.description)}</p>
      </li>
    `).join('');
    el.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <span class="section-index">06</span>
          <span class="section-eyebrow">${escapeHtml(p.eyebrow ?? 'Processo')}</span>
          <h2 class="section-title">${escapeHtml(p.title)}</h2>
          <p class="section-subtitle">${escapeHtml(p.subtitle ?? '')}</p>
        </div>
        <ul class="process-list reveal">${steps}</ul>
      </div>
    `;
  }

  renderShop() {
    const el = document.getElementById('shop');
    if (!el || !this.content.shop) return;
    const s = this.content.shop;
    const prod = s.product;
    el.innerHTML = `
      <div class="container">
        <aside class="shop-aside reveal" aria-labelledby="shop-aside-title">
          <div class="shop-aside-thumb">
            <img src="${escapeHtml(prod.image)}" alt="${escapeHtml(prod.name)}" loading="lazy" decoding="async" />
          </div>
          <div class="shop-aside-body">
            <span class="shop-aside-eyebrow">07 — ${escapeHtml(s.title)}</span>
            <h3 id="shop-aside-title" class="shop-aside-title">${escapeHtml(prod.name)}</h3>
            <p class="shop-aside-description">${escapeHtml(prod.description)}</p>
          </div>
          <a href="${escapeHtml(prod.cta.href)}" class="shop-aside-cta" target="_blank" rel="noopener">
            ${escapeHtml(prod.cta.label)} <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>
    `;
  }

  renderTestimonials() {
    const el = document.getElementById('testimonials');
    if (!el || !this.content.testimonials) return;
    const t = this.content.testimonials;
    this._testimonials = t.items ?? [];
    const cards = this._testimonials.map((item, i) => {
      const text = item.text ?? '';
      const author = item.author ?? '';
      const date = item.date ?? '';
      const avatar = item.avatar
        ? `<span class="testimonial-avatar"><img src="${escapeHtml(item.avatar)}" alt="${escapeHtml(author)}" loading="lazy" decoding="async" /></span>`
        : `<span class="testimonial-avatar testimonial-monogram" aria-hidden="true">${escapeHtml(monogramLetter(author))}</span>`;
      return `
        <article class="testimonial-card" data-tindex="${i}">
          <button type="button" class="testimonial-expand" data-texpand="${i}" aria-label="Ver depoimento completo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <div class="testimonial-body">
            <header class="testimonial-head">
              ${avatar}
              <span class="testimonial-author">${escapeHtml(author)}</span>
            </header>
            <svg class="testimonial-quote" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.13 8.5C7.8 8.5 6.7 9.6 6.7 10.93c0 1.34 1.1 2.43 2.43 2.43.34 0 .67-.07.97-.2-.05 1.97-1.3 3.55-3.06 4.07l.49 1.27c2.95-.8 4.97-3.4 4.97-6.4 0-2.04-1.66-3.6-3.37-3.6zm8.4 0c-1.34 0-2.44 1.1-2.44 2.43 0 1.34 1.1 2.43 2.43 2.43.34 0 .67-.07.97-.2-.04 1.97-1.3 3.55-3.05 4.07l.48 1.27c2.96-.8 4.98-3.4 4.98-6.4 0-2.04-1.66-3.6-3.37-3.6z"/></svg>
            <p class="testimonial-text">${escapeHtml(text)}</p>
            ${date ? `<footer class="testimonial-date">${escapeHtml(date)}</footer>` : ''}
          </div>
        </article>
      `;
    }).join('');

    el.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <span class="section-index">07</span>
          <span class="section-eyebrow">${escapeHtml(t.eyebrow ?? 'Feedbacks')}</span>
          <h2 class="section-title">${escapeHtml(t.title)}</h2>
          <p class="section-subtitle">${escapeHtml(t.subtitle ?? '')}</p>
        </div>
        ${t.featuredQuote ? `
          <figure class="featured-quote reveal">
            <blockquote>${escapeHtml(t.featuredQuote)}</blockquote>
            ${t.featuredAuthor ? `<figcaption>\u2014 ${escapeHtml(t.featuredAuthor)}</figcaption>` : ''}
          </figure>
        ` : ''}
        <div class="testimonials-carousel reveal">
          <button type="button" class="carousel-btn carousel-prev" aria-label="Depoimento anterior">‹</button>
          <div class="carousel-track" tabindex="0" aria-label="Carrossel de depoimentos">${cards}</div>
          <button type="button" class="carousel-btn carousel-next" aria-label="Próximo depoimento">›</button>
          <div class="carousel-dots" role="tablist" aria-label="Navegação do carrossel"></div>
        </div>
      </div>
    `;
  }

  renderCta() {
    const el = document.getElementById('cta');
    if (!el) return;
    const c = this.content.cta;
    el.innerHTML = `
      <div class="container">
        <div class="cta-content reveal">
          <h2 class="cta-title">${escapeHtml(c.title)}</h2>
          <p class="cta-subtitle">${escapeHtml(c.subtitle)}</p>
          <div class="cta-actions">
            <a href="${escapeHtml(c.primary.href)}" class="btn btn-whatsapp btn-large" target="_blank" rel="noopener">${UI_ICONS.whatsapp}<span>${escapeHtml(c.primary.label)}</span></a>
            <a href="${escapeHtml(c.secondary.href)}" class="btn btn-secondary btn-large" target="_blank" rel="noopener">${UI_ICONS.instagram}<span>${escapeHtml(c.secondary.label)}</span></a>
          </div>
        </div>
      </div>
    `;
  }

  renderLocationSocial() {
    const el = document.getElementById('location-social');
    if (!el) return;
    const loc = this.content.location;
    const social = this.content.social;
    const shop = this.content.shop;
    const icons = (social?.links ?? []).map((l) => `
      <a href="${escapeHtml(l.url)}" class="icon-link" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(l.platform)}">
        ${SOCIAL_ICONS[l.icon] ?? SOCIAL_ICONS.email}
      </a>
    `).join('');
    const brushes = shop && shop.product ? `
      <aside class="shop-aside reveal" aria-labelledby="shop-aside-title">
        <div class="shop-aside-thumb">
          <img src="${escapeHtml(shop.product.image)}" alt="${escapeHtml(shop.product.name)}" loading="lazy" decoding="async" />
        </div>
        <div class="shop-aside-body">
          <span class="shop-aside-eyebrow">${escapeHtml(shop.title)}</span>
          <h3 id="shop-aside-title" class="shop-aside-title">${escapeHtml(shop.product.name)}</h3>
          <a href="${escapeHtml(shop.product.cta.href)}" class="shop-aside-cta" target="_blank" rel="noopener">
            ${UI_ICONS.cart}<span>${escapeHtml(shop.product.cta.label)}</span>
          </a>
        </div>
      </aside>
    ` : '';
    el.innerHTML = `
      <div class="container">
        <div class="location-social-content reveal">
          <div class="location-social-row location-social-row--minor">
            <div class="location-info">
              <p class="location-city">${UI_ICONS.pin}<span>${escapeHtml(loc.city)} · ${escapeHtml(loc.region)}</span></p>
              <span class="availability-badge">${escapeHtml(loc.availability)}</span>
            </div>
            ${brushes}
          </div>
          <div class="location-social-row location-social-row--main">
            <p class="social-title">${escapeHtml(social.title)}</p>
            <div class="social-icons">${icons}</div>
          </div>
        </div>
      </div>
    `;
  }

  renderFooter() {
    const el = document.getElementById('main-footer');
    if (!el) return;
    const f = this.content.footer;
    el.innerHTML = `
      <div class="container">
        <div class="footer-content">
          <p class="footer-copyright">${escapeHtml(f.copyright)}</p>
          <p class="footer-tagline">${escapeHtml(f.builtWith)}</p>
          <a href="#hero" class="back-to-top">${UI_ICONS.arrowUp}<span>${escapeHtml(this.content.ui?.backToTop ?? 'Voltar ao topo')}</span></a>
        </div>
      </div>
    `;
  }

  renderFloatingCta() {
    const el = document.getElementById('floating-cta');
    if (!el || !this.content.floatingCta) return;
    const f = this.content.floatingCta;
    el.href = f.href;
    el.setAttribute('aria-label', f.label);
    el.querySelector('.floating-cta-label').textContent = f.label;
    el.hidden = false;
  }

  // ----- Behavior -----

  // DOM-scoped listeners re-bound on every render. These attach to elements
  // that are recreated each render, so the previous elements (and their
  // listeners) are discarded — no duplication. Window/document listeners live
  // in bindGlobalListeners (bound once).
  attachDomListeners() {
    const readMore = this.content.ui?.readMore ?? 'Ler mais';
    const readLess = this.content.ui?.readLess ?? 'Ler menos';

    // About: expand/collapse long text
    const aboutToggle = document.querySelector('.about-read-toggle');
    aboutToggle?.addEventListener('click', () => {
      const contentId = aboutToggle.getAttribute('aria-controls');
      if (!contentId) return;
      const moreContent = document.getElementById(contentId);
      if (!moreContent) return;
      const isExpanded = aboutToggle.getAttribute('aria-expanded') === 'true';
      const nextExpanded = !isExpanded;
      moreContent.hidden = !nextExpanded;
      aboutToggle.setAttribute('aria-expanded', String(nextExpanded));
      const label = aboutToggle.querySelector('.about-read-label');
      if (label) label.textContent = nextExpanded ? readLess : readMore;
    });
  }

  initRevealOnScroll() {
    const els = document.querySelectorAll('.reveal');
    // On a language re-render, reveal instantly (no full-page re-fade); only
    // animate the scroll reveal on the first load.
    if (this._hasRendered || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      this._hasRendered = true;
      return;
    }
    this._hasRendered = true;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => io.observe(el));
  }

  // ----- Lightbox -----

  initLightbox() {
    const root = document.getElementById('lightbox');
    if (!root) return;
    const img = root.querySelector('.lightbox-image');
    const caption = root.querySelector('.lightbox-caption');
    const btnClose = root.querySelector('.lightbox-close');
    const btnPrev = root.querySelector('.lightbox-prev');
    const btnNext = root.querySelector('.lightbox-next');

    let items = this._portfolioFlat ?? [];
    let index = 0;
    let lastFocus = null;

    const update = () => {
      const item = items[index];
      if (!item) return;
      img.src = item.image;
      img.alt = item.alt ?? '';
      img.classList.toggle('lightbox-image--color', !!item.color);
      const label = item.category ?? item.author ?? '';
      caption.textContent = label ? `${label} · ${index + 1} / ${items.length}` : `${index + 1} / ${items.length}`;
    };

    const open = (i, source) => {
      if (source === 'freehand') items = this._freehandFlat ?? [];
      else if (source === 'botanica') items = this._botanicaFlat ?? [];
      else items = this._portfolioFlat ?? [];
      index = i;
      update();
      lastFocus = document.activeElement;
      root.hidden = false;
      requestAnimationFrame(() => root.classList.add('is-open'));
      document.body.classList.add('is-locked');
      btnClose.focus();
    };

    const close = () => {
      root.classList.remove('is-open');
      document.body.classList.remove('is-locked');
      setTimeout(() => { root.hidden = true; }, 200);
      lastFocus?.focus?.();
    };

    const prev = () => { index = (index - 1 + items.length) % items.length; update(); };
    const next = () => { index = (index + 1) % items.length; update(); };

    // Triggers
    document.addEventListener('click', (e) => {
      const portfolioTrigger = e.target.closest('.portfolio-item');
      if (portfolioTrigger) {
        const i = Number(portfolioTrigger.dataset.index);
        if (Number.isInteger(i)) open(i, 'portfolio');
        return;
      }
      const freehandTrigger = e.target.closest('.freehand-item');
      if (freehandTrigger) {
        const i = Number(freehandTrigger.dataset.findex);
        if (Number.isInteger(i)) open(i, 'freehand');
        return;
      }
      const botanicaTrigger = e.target.closest('.botanica-item');
      if (botanicaTrigger) {
        const i = Number(botanicaTrigger.dataset.bindex);
        if (Number.isInteger(i)) open(i, 'botanica');
      }
    });

    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', prev);
    btnNext.addEventListener('click', next);
    root.addEventListener('click', (e) => {
      if (e.target === root) close();
    });

    document.addEventListener('keydown', (e) => {
      if (root.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    });

    // Touch swipe
    let touchStartX = null;
    root.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    root.addEventListener('touchend', (e) => {
      if (touchStartX == null) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
      touchStartX = null;
    }, { passive: true });

    this.lightbox = { open, close, prev, next };
  }

  // ----- Testimonials Carousel -----

  // Bound once. Reads this.carouselDrag (refreshed each render) so the drag
  // always targets the live track after a language re-render.
  bindCarouselWindowDrag() {
    window.addEventListener('mousemove', (e) => {
      const d = this.carouselDrag;
      if (!d || !d.isDown) return;
      const dx = e.pageX - d.startX;
      if (Math.abs(dx) > 4) d.moved = true;
      d.track.scrollLeft = d.startScroll - dx;
    });
    window.addEventListener('mouseup', () => {
      const d = this.carouselDrag;
      if (!d || !d.isDown) return;
      d.isDown = false;
      d.track.classList.remove('is-dragging');
    });
  }

  initTestimonialsCarousel() {
    const root = document.querySelector('.testimonials-carousel');
    if (!root) return;
    const track = root.querySelector('.carousel-track');
    const btnPrev = root.querySelector('.carousel-prev');
    const btnNext = root.querySelector('.carousel-next');
    const dotsWrap = root.querySelector('.carousel-dots');
    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    if (!cards.length) return;

    // Refresh drag state for the freshly-rendered track; the window-level
    // move/up handlers (bound once) read this object.
    this.carouselDrag = { track, isDown: false, startX: 0, startScroll: 0, moved: false };

    let index = 0;

    // Build dots
    dotsWrap.innerHTML = cards.map((_, i) =>
      `<button type="button" class="carousel-dot" role="tab" aria-label="Ir para depoimento ${i + 1}" data-dot="${i}"></button>`
    ).join('');
    const dots = Array.from(dotsWrap.querySelectorAll('.carousel-dot'));

    const goTo = (i) => {
      index = (i + cards.length) % cards.length;
      const target = cards[index];
      track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: 'smooth' });
      dots.forEach((d, di) => d.classList.toggle('is-active', di === index));
    };

    // Loop the carousel: at the right edge, next → first; at the left edge, prev → last.
    const atStart = () => track.scrollLeft <= 2;
    const atEnd = () => track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    btnPrev.addEventListener('click', () => goTo(atStart() ? cards.length - 1 : index - 1));
    btnNext.addEventListener('click', () => goTo(atEnd() ? 0 : index + 1));
    dots.forEach((d) => d.addEventListener('click', () => goTo(Number(d.dataset.dot))));

    // Sync index with manual scroll
    let scrollTimer;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let minDist = Infinity;
        cards.forEach((c, i) => {
          const cardCenter = c.offsetLeft - track.offsetLeft + c.clientWidth / 2;
          const d = Math.abs(cardCenter - center);
          if (d < minDist) { minDist = d; closest = i; }
        });
        index = closest;
        dots.forEach((d, di) => d.classList.toggle('is-active', di === index));
      }, 80);
    }, { passive: true });

    // Keyboard nav on track
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
    });

    // Mouse drag-to-scroll. The window-level move/up handlers are bound once
    // (bindCarouselWindowDrag) and read this.carouselDrag, refreshed above, so
    // they always act on the current track — no stale reference after a toggle.
    const drag = this.carouselDrag;
    track.addEventListener('mousedown', (e) => {
      drag.isDown = true;
      drag.moved = false;
      drag.startX = e.pageX;
      drag.startScroll = track.scrollLeft;
      track.classList.add('is-dragging');
    });

    // Suppress click on cards after a drag
    track.addEventListener('click', (e) => {
      if (drag.moved) {
        e.preventDefault();
        e.stopPropagation();
        drag.moved = false;
      }
    }, true);

    // Prevent native image drag-ghost
    track.querySelectorAll('img').forEach((img) => {
      img.addEventListener('dragstart', (e) => e.preventDefault());
    });

    goTo(0);
  }

  // ----- Hero Showcase Rotator -----

  initHeroShowcaseRotator() {
    const grid = document.querySelector('.hero-showcase-grid');
    const btn = document.querySelector('.hero-showcase-rotate');
    if (!grid || !btn) return;
    const pages = Array.from(grid.querySelectorAll('.hero-showcase-page'));
    if (pages.length < 2) return;
    let active = 0;
    btn.addEventListener('click', () => {
      pages[active].classList.remove('is-active');
      pages[active].setAttribute('aria-hidden', 'true');
      active = (active + 1) % pages.length;
      pages[active].classList.add('is-active');
      pages[active].setAttribute('aria-hidden', 'false');
      btn.classList.add('is-spinning');
      setTimeout(() => btn.classList.remove('is-spinning'), 500);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new LupizeiraApp());

