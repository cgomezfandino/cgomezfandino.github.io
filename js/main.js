/* =========================================================================
 *  main.js — Sitio personal de Tato. Renderiza desde window.PROFILE (ES/EN).
 * ========================================================================= */
(function () {
  "use strict";

  const P = window.PROFILE || {};
  const UI = window.UI || { es: {}, en: {} };
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  let LANG = localStorage.getItem("lang") || P.defaultLang || "es";
  if (LANG !== "es" && LANG !== "en") LANG = "es";
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) && ("es" in v || "en" in v)) ? (v[LANG] != null ? v[LANG] : (v.es != null ? v.es : v.en)) : v;
  const tt = (k) => (UI[LANG] && UI[LANG][k]) || (UI.es && UI.es[k]) || k;

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33 0-3.04-1.85-3.04s-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    x: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    email: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    download: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
    external: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>',
    /* passion icons */
    music: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/><path d="M9 18V5l12-2v13"/></svg>',
    code: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 9-3 3 3 3M16 9l3 3-3 3M13.5 7l-3 10"/></svg>',
    rocket: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 0zM12 15l-3-3a22 22 0 0 1 8-10c2 0 4 2 4 4a22 22 0 0 1-10 8zM9 12H4s.5-2.8 2-4 5 0 5 0M12 15v5s2.8-.5 4-2 0-5 0-5"/></svg>',
    "moon-stars": '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 5h0M21 8h0M18 11h0M12 3a8 8 0 1 0 9 9 6 6 0 1 1-9-9z"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"/></svg>',
    planet: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6.5"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(-22 12 12)"/></svg>',
    markets: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M16 7h5v5"/></svg>',
  };

  /* aria-label legibles para los iconos sociales (la clave cruda no es accesible) */
  const SOCIAL_LABELS = { github: "GitHub", linkedin: "LinkedIn", email: "Email", x: "X (Twitter)" };

  function visibleProjects() {
    return P.projects || [];
  }

  /* ---- HERO ---- */
  function renderHero() {
    const g = $('[data-i18n="hero.greeting"]'); if (g) g.textContent = t(P.hero.greeting);
    $("#hero-name").innerHTML = esc(t(P.hero.headline)) + (P.hero.alias ? ' <span class="hero-alias">(' + esc(P.hero.alias) + ')</span>' : "");
    $("#hero-tagline").textContent = t(P.hero.tagline);
    const photo = $("#hero-photo"); photo.src = P.photo; photo.alt = (LANG === "es" ? "Foto de " : "Photo of ") + P.name;

    const ctas = $("#hero-ctas"); ctas.innerHTML = "";
    ctas.appendChild(Object.assign(el("a", "btn btn-primary", esc(t(P.hero.primaryCta)) + " " + ICONS.arrow), { href: "#story" }));
    ctas.appendChild(Object.assign(el("a", "btn btn-ghost", esc(t(P.hero.secondaryCta))), { href: "#contact" }));

    const soc = $("#hero-socials"); soc.innerHTML = "";
    const c = P.contact || {};
    [["github", c.github], ["linkedin", c.linkedin], ["x", c.x], ["email", c.email ? "mailto:" + c.email : ""]].forEach(([k, href]) => {
      if (!href) return;
      const a = Object.assign(el("a", "social-btn", ICONS[k]), { href }); a.setAttribute("aria-label", SOCIAL_LABELS[k] || k);
      if (k !== "email") { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      soc.appendChild(a);
    });
  }

  let typedSeq = 0;
  let lastFocused = null;
  function typedRoles() {
    const node = $("#typed"); if (!node) return;
    const roles = (t(P.hero.roles) && t(P.hero.roles).length) ? t(P.hero.roles) : [""];
    typedSeq++; const mySeq = typedSeq;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { node.textContent = roles[0]; return; }
    let r = 0, i = 0, del = false;
    function tick() {
      if (mySeq !== typedSeq) return;
      const w = roles[r]; node.textContent = w.slice(0, i);
      if (!del && i < w.length) { i++; setTimeout(tick, 80); }
      else if (!del && i === w.length) { del = true; setTimeout(tick, 1700); }
      else if (del && i > 0) { i--; setTimeout(tick, 40); }
      else { del = false; r = (r + 1) % roles.length; setTimeout(tick, 350); }
    }
    tick();
  }

  /* ---- STORY ---- */
  function renderStory() {
    $("#story-title").textContent = t(P.story.title);
    const body = $("#story-body"); body.innerHTML = "";
    (P.story.paragraphs || []).forEach((p) => body.appendChild(el("p", null, esc(t(p)))));
    const quotes = P.story.quotes || [];
    if (quotes.length) {
      const qWrap = el("div", "story-quotes");
      if (P.story.disciplineLead) qWrap.appendChild(el("div", "story-quotes-lead", esc(t(P.story.disciplineLead))));
      quotes.forEach((q) => {
        const fig = el("figure", "story-quote");
        fig.innerHTML = `<blockquote>${esc(t(q.text))}</blockquote><figcaption>— ${esc(q.author)}</figcaption>`;
        qWrap.appendChild(fig);
      });
      body.appendChild(qWrap);
    }
  }

  /* ---- PASSIONS ---- */
  function renderPassions() {
    $("#passions-title").textContent = t(P.passions.title);
    const grid = $("#passions-grid"); grid.innerHTML = "";
    (P.passions.items || []).forEach((it) => {
      const card = el("article", "passion-card reveal");
      card.innerHTML = `<div class="passion-icon">${ICONS[it.icon] || ICONS.rocket}</div><h3>${esc(t(it.title))}</h3><p>${esc(t(it.body))}</p>`;
      grid.appendChild(card);
    });
  }

  /* ---- BUILDING + TOOLBOX ---- */
  function renderBuilding() {
    $("#building-title").textContent = t(P.building.title);
    $("#building-body").textContent = t(P.building.body);
    $("#toolbox-title").textContent = t(P.toolbox.title);
    const chips = $("#toolbox-chips"); chips.innerHTML = "";
    (P.toolbox.items || []).forEach((s) => chips.appendChild(el("span", "chip-tag", esc(s))));
  }

  /* ---- PROJECTS ---- */
  function renderProjects() {
    $("#projects-title").textContent = t(P.projectsTitle);
    const grid = $("#projects-grid"); grid.innerHTML = "";
    visibleProjects().forEach((proj) => {
      const card = el("article", "project-card reveal" + (proj.featured ? " is-featured" : ""));
      card.tabIndex = 0; card.setAttribute("role", "button"); card.setAttribute("aria-label", t(proj.name));
      const stack = (proj.stack || []).map((s) => `<span class="badge">${esc(s)}</span>`).join("");
      const hasLink = proj.links && (proj.links.repo || proj.links.demo);
      card.innerHTML =
        `${proj.featured ? `<span class="featured-tag">${LANG === "es" ? "Destacado" : "Featured"}</span>` : ""}
         <h3>${esc(t(proj.name))}</h3>
         <p class="project-sub">${esc(t(proj.subtitle) || "")}</p>
         <p class="project-desc">${esc(t(proj.description) || "")}</p>
         <div class="project-stack">${stack}</div>
         ${hasLink ? `<span class="project-link-hint">${ICONS.external}</span>` : ""}`;
      card.addEventListener("click", () => openModal(proj));
      card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(proj); } });
      grid.appendChild(card);
    });
  }

  function openModal(proj) {
    const body = $("#modal-body");
    const stack = (proj.stack || []).map((s) => `<span class="badge">${esc(s)}</span>`).join("");
    const tags = (proj.tags || []).map((s) => `<span class="badge">${esc(s)}</span>`).join(" ");
    let links = "";
    const l = proj.links || {};
    if (l.demo) links += `<a class="btn btn-primary" target="_blank" rel="noopener noreferrer" href="${esc(l.demo)}">${esc(tt("modal.demo"))} ${ICONS.arrow}</a>`;
    if (l.repo) links += `<a class="btn btn-ghost" target="_blank" rel="noopener noreferrer" href="${esc(l.repo)}">${esc(tt("modal.repo"))} ${ICONS.github}</a>`;
    body.innerHTML =
      `<p class="project-sub">${esc(t(proj.subtitle) || "")}</p>
       <h3 id="modal-title" style="font-size:1.7rem;margin:.2rem 0 1rem">${esc(t(proj.name))}</h3>
       <p style="color:var(--muted);line-height:1.7;margin:0 0 1.2rem">${esc(t(proj.description) || "")}</p>
       <div style="margin:0 0 1.2rem">${tags}</div>
       <h4 style="font-family:var(--font-mono);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin:0 0 .6rem">${esc(tt("modal.stack"))}</h4>
       <div style="margin:0 0 1.3rem">${stack}</div>
       ${links ? `<div style="display:flex;flex-wrap:wrap;gap:.7rem">${links}</div>` : ""}`;
    lastFocused = document.activeElement;
    const m = $("#project-modal"); m.classList.remove("hidden"); document.body.style.overflow = "hidden";
    $("#main") && $("#main").setAttribute("inert", ""); $("#nav") && $("#nav").setAttribute("inert", "");
    $(".modal-close", m).focus();
  }
  function closeModal() {
    $("#project-modal").classList.add("hidden"); document.body.style.overflow = "";
    $("#main") && $("#main").removeAttribute("inert"); $("#nav") && $("#nav").removeAttribute("inert");
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  /* ---- BLOG (home preview) ---- */
  function renderBlogIntro() {
    $("#blog-title").textContent = t(P.blog.title);
    $("#blog-lead").textContent = t(P.blog.lead);
    $("#blog-more").innerHTML = esc(tt("blog.readmore")) + " " + ICONS.arrow;
  }
  async function loadHomePosts() {
    const wrap = $("#home-posts"); if (!wrap) return;
    try {
      const res = await fetch("posts/index.json", { cache: "no-cache" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      let posts = await res.json();
      posts.sort((a, b) => (a.date < b.date ? 1 : -1));
      wrap.innerHTML = "";
      posts.slice(0, 2).forEach((p) => {
        const a = el("a", "post-card");
        a.href = "post.html?slug=" + encodeURIComponent(p.slug);
        const d = new Date(p.date).toLocaleDateString(LANG === "es" ? "es-ES" : "en-US", { year: "numeric", month: "long", day: "numeric" });
        a.innerHTML = `<div class="post-meta"><time datetime="${esc(p.date)}">${esc(d)}</time>${p.readingTime ? `<span>· ${esc(p.readingTime)}</span>` : ""}</div>
          <h3 class="post-card-title">${esc(p.title)}</h3>
          <p class="post-card-excerpt">${esc(p.excerpt || "")}</p>`;
        wrap.appendChild(a);
      });
    } catch (e) { wrap.innerHTML = ""; }
  }

  /* ---- CONTACT ---- */
  function renderContact() {
    $("#contact-title").textContent = t(P.contactSection.title);
    $("#contact-lead").textContent = t(P.contactSection.lead);
    const wrap = $("#contact-links"); wrap.innerHTML = "";
    const c = P.contact || {};
    if (c.email) wrap.appendChild(Object.assign(el("a", "btn btn-primary", ICONS.email + " " + esc(c.email)), { href: "mailto:" + c.email }));
    [["github", c.github, "GitHub"], ["linkedin", c.linkedin, "LinkedIn"], ["x", c.x, "X (Twitter)"]].forEach(([k, href, lbl]) => {
      if (!href) return;
      wrap.appendChild(Object.assign(el("a", "btn btn-ghost", ICONS[k] + " " + lbl), { href, target: "_blank", rel: "noopener noreferrer" }));
    });
  }

  function renderFooter() {
    $("#footer-note").textContent = t(P.footer);
    $("#footer-copy").textContent = `© ${new Date().getFullYear()} ${P.name} · @${P.handle}`;
    const top = $("#footer-top"); if (top) top.textContent = tt("footer.top");
    const fs = $("#footer-socials");
    if (fs) {
      fs.innerHTML = "";
      const c = P.contact || {};
      [["github", c.github], ["linkedin", c.linkedin], ["x", c.x], ["email", c.email ? "mailto:" + c.email : ""]].forEach(([k, href]) => {
        if (!href) return;
        const a = Object.assign(el("a", "social-btn", ICONS[k]), { href }); a.setAttribute("aria-label", SOCIAL_LABELS[k] || k);
        if (k !== "email") { a.target = "_blank"; a.rel = "noopener noreferrer"; }
        fs.appendChild(a);
      });
    }
  }

  /* ---- i18n estático ---- */
  function applyI18n() {
    document.documentElement.lang = LANG;
    $$("[data-i18n]").forEach((n) => { const k = n.getAttribute("data-i18n"); if (UI[LANG] && UI[LANG][k] != null) n.textContent = UI[LANG][k]; });
    $$("[data-i18n-aria]").forEach((n) => { const k = n.getAttribute("data-i18n-aria"); if (UI[LANG] && UI[LANG][k] != null) n.setAttribute("aria-label", UI[LANG][k]); });
    const lbl = $("#lang-label"); if (lbl) lbl.textContent = LANG.toUpperCase();
  }

  function renderAll() {
    renderHero(); renderStory(); renderPassions(); renderBuilding();
    renderProjects(); renderBlogIntro(); loadHomePosts(); renderContact(); renderFooter();
  }

  /* ---- Interacciones ---- */
  function setupTheme() {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) root.classList.add("dark");
    icon(); $("#theme-toggle").addEventListener("click", () => { root.classList.toggle("dark"); localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light"); icon(); });
    function icon() { const d = root.classList.contains("dark"); $(".sun").style.display = d ? "none" : ""; $(".moon").style.display = d ? "" : "none"; }
  }

  function setupLang() {
    applyI18n();
    $("#lang-toggle").addEventListener("click", () => {
      LANG = LANG === "es" ? "en" : "es";
      localStorage.setItem("lang", LANG);
      applyI18n(); renderAll();
      $$(".reveal").forEach((n) => n.classList.add("visible"));
      typedRoles();
    });
  }

  function setupNav() {
    const nav = $("#nav");
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 16);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const menuBtn = $("#menu-toggle"), menu = $("#mobile-menu");
    menuBtn.addEventListener("click", () => { const open = menu.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", String(open)); });
    $$("#mobile-menu a").forEach((a) => a.addEventListener("click", () => { menu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }));

    const ids = ["story", "passions", "building", "projects", "blog", "contact"];
    const links = $$('.nav-links .nav-link[href^="#"]');
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id)); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ids.map((id) => $("#" + id)).filter(Boolean).forEach((s) => spy.observe(s));
  }

  function setupReveal() {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); o.unobserve(e.target); } });
    }, { threshold: 0.12 });
    $$(".reveal").forEach((n) => obs.observe(n));
  }

  function setupModal() {
    $$("[data-close-modal]").forEach((n) => n.addEventListener("click", closeModal));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupLang(); renderAll(); setupTheme(); setupNav(); setupModal(); typedRoles(); setupReveal();
  });
})();
