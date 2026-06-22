/* =========================================================================
 *  blog.js — Índice del blog (blog.html) y render de post (post.html)
 *  Bilingüe ES/EN (chrome). Posts en su idioma escrito. Paleta Editorial Cream.
 * ========================================================================= */
(function () {
  "use strict";

  const UI = window.UI || { es: {}, en: {} };
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

  let LANG = localStorage.getItem("lang") || (window.PROFILE && window.PROFILE.defaultLang) || "es";
  if (LANG !== "es" && LANG !== "en") LANG = "es";
  const tt = (k) => (UI[LANG] && UI[LANG][k]) || (UI.es && UI.es[k]) || k;

  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function revealIn(container) {
    if (!container) return;
    const items = $$(".reveal", container);
    if (REDUCED) { items.forEach((el) => el.classList.add("visible")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
  }

  function applyI18n() {
    document.documentElement.lang = LANG;
    $$("[data-i18n]").forEach((n) => { const k = n.getAttribute("data-i18n"); if (UI[LANG] && UI[LANG][k] != null) n.textContent = UI[LANG][k]; });
    $$("[data-i18n-aria]").forEach((n) => { const k = n.getAttribute("data-i18n-aria"); if (UI[LANG] && UI[LANG][k] != null) n.setAttribute("aria-label", UI[LANG][k]); });
    const lbl = $("#lang-label"); if (lbl) lbl.textContent = LANG.toUpperCase();
  }

  function setupChrome() {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) root.classList.add("dark");
    const icon = () => { const d = root.classList.contains("dark"); const s = $(".sun"), m = $(".moon"); if (s) s.style.display = d ? "none" : ""; if (m) m.style.display = d ? "" : "none"; };
    icon();
    $("#theme-toggle") && $("#theme-toggle").addEventListener("click", () => { root.classList.toggle("dark"); localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light"); icon(); });

    applyI18n();
    $("#lang-toggle") && $("#lang-toggle").addEventListener("click", () => {
      LANG = LANG === "es" ? "en" : "es";
      localStorage.setItem("lang", LANG);
      applyI18n();
      if ($("#blog-list")) renderBlogList();
      if ($("#post-content")) renderPost();
    });

    const nav = $("#nav");
    const bar = $("#reading-progress");
    const toTop = $("#to-top");
    let ticking = false;
    const onScroll = () => {
      ticking = false;
      const y = window.scrollY;
      if (nav) nav.classList.toggle("scrolled", y > 16);
      if (bar) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = "scaleX(" + (h > 0 ? Math.min(y / h, 1) : 0) + ")";
      }
      if (toTop) toTop.hidden = y < 600;
    };
    onScroll();
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" }));

    const menuBtn = $("#menu-toggle"), menu = $("#mobile-menu");
    if (menuBtn && menu) {
      menuBtn.addEventListener("click", () => { const open = menu.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", String(open)); });
      $$("#mobile-menu a").forEach((a) => a.addEventListener("click", () => { menu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }));
    }
  }

  function fmtDate(iso) {
    try { return new Date(iso).toLocaleDateString(LANG === "es" ? "es-ES" : "en-US", { year: "numeric", month: "long", day: "numeric" }); }
    catch { return iso; }
  }

  function parseFrontMatter(md) {
    const m = md.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
    if (!m) return { meta: {}, body: md };
    const meta = {};
    m[1].split("\n").forEach((line) => {
      const idx = line.indexOf(":"); if (idx === -1) return;
      const key = line.slice(0, idx).trim();
      let val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
      if (val.startsWith("[") && val.endsWith("]")) val = val.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
      meta[key] = val;
    });
    return { meta, body: md.slice(m[0].length) };
  }

  function slugify(s) {
    return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "s";
  }

  function buildTOC(content, tocEl) {
    if (!tocEl) return;
    const heads = $$("h2, h3", content);
    if (heads.length < 2) { tocEl.hidden = true; const pl = tocEl.closest(".post-layout"); if (pl) pl.classList.add("no-toc"); return; }
    const used = {};
    const items = heads.map((h) => {
      let id = slugify(h.textContent);
      if (used[id]) { id = id + "-" + ++used[id]; } else { used[id] = 1; }
      h.id = id;
      return { id, text: h.textContent, level: h.tagName.toLowerCase() };
    });
    const inner = "<ul>" + items.map((l) => `<li class="toc-${l.level}"><a href="#${l.id}">${esc(l.text)}</a></li>`).join("") + "</ul>";
    const nav = `<nav aria-label="${esc(tt("blog.toc"))}"><p class="post-toc-title">${esc(tt("blog.toc"))}</p>${inner}</nav>`;
    tocEl.hidden = false;
    tocEl.innerHTML = window.innerWidth >= 1024
      ? nav
      : `<details class="post-toc-collapse"><summary>${esc(tt("blog.toc"))}</summary>${inner}</details>`;
    const linkFor = {};
    $$("a", tocEl).forEach((a) => { linkFor[a.getAttribute("href").slice(1)] = a; });
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          $$("a", tocEl).forEach((a) => a.classList.remove("active"));
          const a = linkFor[e.target.id]; if (a) a.classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    heads.forEach((h) => spy.observe(h));
  }

  async function renderRelated(slug, postTags) {
    const box = $("#post-related"); if (!box) return;
    try {
      const res = await fetch("posts/index.json", { cache: "no-cache" });
      if (!res.ok) return;
      const posts = await res.json();
      posts.sort((a, b) => (a.date < b.date ? 1 : -1));
      const others = posts.filter((p) => p.slug !== slug);
      if (!others.length) return;
      const tagSet = new Set(postTags || []);
      const overlap = (p) => (p.tags || []).filter((t) => tagSet.has(t)).length;
      others.sort((a, b) => overlap(b) - overlap(a));
      const cards = others.slice(0, 2).map((p) =>
        `<a class="post-card" href="post.html?slug=${encodeURIComponent(p.slug)}">
           <div class="post-meta"><time datetime="${esc(p.date)}">${esc(fmtDate(p.date))}</time>${p.readingTime ? `<span>· ${esc(p.readingTime)}</span>` : ""}</div>
           <h3 class="post-card-title">${esc(p.title)}</h3>
           <span class="post-card-go" aria-hidden="true">→</span>
         </a>`).join("");
      box.innerHTML = `<p class="eyebrow">${esc(tt("blog.related"))}</p><div class="section-rule" style="margin:.6rem 0 1.2rem"></div><div class="grid">${cards}</div>`;
      box.hidden = false;
    } catch (e) { /* silencioso */ }
  }

  /* ---- Índice ---- */
  async function renderBlogList() {
    const list = $("#blog-list"), filters = $("#blog-filters");
    filters.setAttribute("role", "group");
    filters.setAttribute("aria-label", tt("a11y.filters"));
    list.setAttribute("aria-live", "polite");
    try {
      const res = await fetch("posts/index.json", { cache: "no-cache" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      let posts = await res.json();
      posts.sort((a, b) => (a.date < b.date ? 1 : -1));
      if (!posts.length) {
        filters.innerHTML = "";
        const countEl = $("#blog-count"); if (countEl) countEl.textContent = "";
        list.innerHTML = `<div class="post-card" style="grid-column:1/-1;text-align:center"><p style="color:var(--muted);margin:0">${esc(tt("blog.soon"))}</p></div>`;
        return;
      }
      const tags = [...new Set(posts.flatMap((p) => p.tags || []))];
      const urlTag = new URLSearchParams(location.search).get("tag");
      let active = (urlTag && tags.includes(urlTag)) ? urlTag : "__all__";
      const draw = () => {
        list.innerHTML = "";
        const shown = posts.filter((p) => active === "__all__" || (p.tags || []).includes(active));
        const countEl = $("#blog-count");
        if (countEl) countEl.textContent = tt(shown.length === 1 ? "blog.count_one" : "blog.count").replace("{n}", shown.length);
        if (!shown.length) {
          list.innerHTML = `<div class="post-card" style="grid-column:1/-1;text-align:center"><p style="color:var(--muted);margin:0 0 .9rem">${esc(tt("blog.empty"))}</p><button class="chip" data-reset>${esc(tt("filter.all"))}</button></div>`;
          const rb = $("[data-reset]", list);
          if (rb) rb.addEventListener("click", () => { const all = $$(".chip", filters).find((c) => c.dataset.filter === "__all__"); if (all) all.click(); });
          return;
        }
        shown.forEach((p, i) => {
          const card = document.createElement("a");
          card.href = "post.html?slug=" + encodeURIComponent(p.slug);
          const isFeature = (i === 0 && active === "__all__") || shown.length === 1;
          card.className = "post-card reveal" + (isFeature ? " post-card--feature" : "");
          card.style.transitionDelay = Math.min(i * 70, 280) + "ms";
          const tagsHtml = (p.tags || []).map((tg) => `<span class="badge">${esc(tg)}</span>`).join(" ");
          card.innerHTML =
            `<div class="post-meta"><time datetime="${esc(p.date)}">${esc(fmtDate(p.date))}</time>${p.readingTime ? `<span>· ${esc(p.readingTime)}</span>` : ""}</div>
             <h2 class="post-card-title">${esc(p.title)}</h2>
             <p class="post-card-excerpt">${esc(p.excerpt || "")}</p>
             <div style="margin-top:.7rem">${tagsHtml}</div>
             <span class="post-card-go" aria-hidden="true">→</span>`;
          list.appendChild(card);
        });
        revealIn(list);
      };
      filters.innerHTML = "";
      [{ value: "__all__", label: tt("filter.all") }, ...tags.map((tg) => ({ value: tg, label: tg }))].forEach((d) => {
        const chip = document.createElement("button");
        chip.className = "chip" + (d.value === active ? " active" : "");
        chip.textContent = d.label; chip.dataset.filter = d.value;
        chip.setAttribute("aria-pressed", String(d.value === active));
        chip.addEventListener("click", () => {
          active = d.value;
          history.replaceState(null, "", active === "__all__" ? location.pathname : "?tag=" + encodeURIComponent(active));
          $$(".chip", filters).forEach((c) => {
            const on = c.dataset.filter === active;
            c.classList.toggle("active", on);
            c.setAttribute("aria-pressed", String(on));
          });
          draw();
        });
        filters.appendChild(chip);
      });
      draw();
    } catch (err) {
      list.innerHTML = `<div class="post-card" style="grid-column:1/-1;text-align:center"><p style="color:var(--muted);margin:0">${esc(tt("blog.read_error"))}</p></div>`;
      console.error(err);
    }
  }

  /* ---- Post ---- */
  async function renderPost() {
    const slug = new URLSearchParams(location.search).get("slug");
    const header = $("#post-header"), content = $("#post-content");
    if (!slug || !/^[a-z0-9-]+$/i.test(slug)) {
      header.innerHTML = `<h1>${esc(tt("post.not_found"))}</h1>`;
      content.innerHTML = `<p><a class="post-back" href="blog.html">${esc(tt("blog.back"))}</a></p>`;
      return;
    }
    try {
      const res = await fetch("posts/" + slug + ".md", { cache: "no-cache" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const { meta, body } = parseFrontMatter(await res.text());
      document.title = (meta.title || slug) + " — Tato";
      const tagsHtml = (Array.isArray(meta.tags) ? meta.tags : []).map((tg) => `<span class="badge">${esc(tg)}</span>`).join(" ");
      header.innerHTML =
        `<p class="eyebrow reveal">${esc(tt("blog.eyebrow"))}</p>
         <div class="post-meta reveal" style="transition-delay:60ms">${meta.date ? `<time datetime="${esc(meta.date)}">${esc(fmtDate(meta.date))}</time>` : ""}${meta.readingTime ? `<span>· ${esc(meta.readingTime)}</span>` : ""}</div>
         <h1 class="reveal" style="transition-delay:120ms">${esc(meta.title || slug)}</h1>
         ${meta.subtitle ? `<p class="sub reveal" style="transition-delay:180ms">${esc(meta.subtitle)}</p>` : ""}
         <div class="section-rule reveal" style="transition-delay:220ms;margin:.9rem 0 0"></div>
         <div class="reveal" style="transition-delay:260ms;margin-top:1rem">${tagsHtml}</div>`;
      revealIn(header);
      if (window.marked) {
        marked.setOptions({ breaks: false, gfm: true });
        content.innerHTML = marked.parse(body);
        if (window.hljs) $$("pre code", content).forEach((b) => window.hljs.highlightElement(b));
        $$('#post-content a[href^="http"]').forEach((a) => { a.target = "_blank"; a.rel = "noopener noreferrer"; });
      } else { content.textContent = body; }
      buildTOC(content, $("#post-toc"));
      renderRelated(slug, Array.isArray(meta.tags) ? meta.tags : []);
    } catch (err) {
      header.innerHTML = `<h1>${esc(tt("post.not_found"))}</h1>`;
      content.innerHTML = `<p style="color:var(--muted)">${esc(tt("blog.read_error"))}</p><p><a class="post-back" href="blog.html">${esc(tt("blog.back"))}</a></p>`;
      console.error(err);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupChrome();
    revealIn($(".blog-hero"));
    if ($("#blog-list")) renderBlogList();
    if ($("#post-content")) renderPost();
  });
})();
