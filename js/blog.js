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
    if (nav) { const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 16); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); }

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

  /* ---- Índice ---- */
  async function renderBlogList() {
    const list = $("#blog-list"), filters = $("#blog-filters");
    try {
      const res = await fetch("posts/index.json", { cache: "no-cache" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      let posts = await res.json();
      posts.sort((a, b) => (a.date < b.date ? 1 : -1));
      const tags = [...new Set(posts.flatMap((p) => p.tags || []))];
      let active = "__all__";
      const draw = () => {
        list.innerHTML = "";
        const shown = posts.filter((p) => active === "__all__" || (p.tags || []).includes(active));
        if (!shown.length) { list.innerHTML = `<p style="color:var(--muted)">${esc(tt("blog.empty"))}</p>`; return; }
        shown.forEach((p, i) => {
          const card = document.createElement("a");
          card.href = "post.html?slug=" + encodeURIComponent(p.slug);
          card.className = "post-card" + (i === 0 && active === "__all__" ? " post-card--feature" : "");
          const tagsHtml = (p.tags || []).map((tg) => `<span class="badge">${esc(tg)}</span>`).join(" ");
          card.innerHTML =
            `<div class="post-meta"><time datetime="${esc(p.date)}">${esc(fmtDate(p.date))}</time>${p.readingTime ? `<span>· ${esc(p.readingTime)}</span>` : ""}</div>
             <h2 class="post-card-title">${esc(p.title)}</h2>
             <p class="post-card-excerpt">${esc(p.excerpt || "")}</p>
             <div style="margin-top:.7rem">${tagsHtml}</div>`;
          list.appendChild(card);
        });
      };
      filters.innerHTML = "";
      [{ value: "__all__", label: tt("filter.all") }, ...tags.map((tg) => ({ value: tg, label: tg }))].forEach((d) => {
        const chip = document.createElement("button");
        chip.className = "chip" + (d.value === active ? " active" : "");
        chip.textContent = d.label; chip.dataset.filter = d.value;
        chip.addEventListener("click", () => { active = d.value; $$(".chip", filters).forEach((c) => c.classList.toggle("active", c.dataset.filter === active)); draw(); });
        filters.appendChild(chip);
      });
      draw();
    } catch (err) {
      list.innerHTML = `<div style="background:var(--surface);border:1px solid var(--border);border-radius:1rem;padding:1.25rem 1.5rem;color:var(--muted)">${esc(tt("blog.read_error"))}</div>`;
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
        `<p class="eyebrow">${esc(tt("blog.eyebrow"))}</p>
         <div class="post-meta">${meta.date ? `<time datetime="${esc(meta.date)}">${esc(fmtDate(meta.date))}</time>` : ""}${meta.readingTime ? `<span>· ${esc(meta.readingTime)}</span>` : ""}</div>
         <h1>${esc(meta.title || slug)}</h1>
         ${meta.subtitle ? `<p class="sub">${esc(meta.subtitle)}</p>` : ""}
         <div class="section-rule" style="margin:.9rem 0 0"></div>
         <div style="margin-top:1rem">${tagsHtml}</div>`;
      if (window.marked) {
        marked.setOptions({ breaks: false, gfm: true });
        content.innerHTML = marked.parse(body);
        if (window.hljs) $$("pre code", content).forEach((b) => window.hljs.highlightElement(b));
        $$('#post-content a[href^="http"]').forEach((a) => { a.target = "_blank"; a.rel = "noopener noreferrer"; });
      } else { content.textContent = body; }
    } catch (err) {
      header.innerHTML = `<h1>${esc(tt("post.not_found"))}</h1>`;
      content.innerHTML = `<p style="color:var(--muted)">${esc(tt("blog.read_error"))}</p><p><a class="post-back" href="blog.html">${esc(tt("blog.back"))}</a></p>`;
      console.error(err);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupChrome();
    if ($("#blog-list")) renderBlogList();
    if ($("#post-content")) renderPost();
  });
})();
