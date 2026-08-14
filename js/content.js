/* =========================================================================
 *  content.js — ÚNICA FUENTE DE VERDAD (sitio personal de "Tato", bilingüe ES/EN)
 *  -------------------------------------------------------------------------
 *  Textos traducibles = { es, en }. Datos neutros (links, iconos) = strings.
 *  Voz: docs/superpowers/specs/2026-07-25-voice-guide-design.md
 * ========================================================================= */

window.PROFILE = {
  defaultLang: "es",

  /* ---- Identidad ---- */
  name: "Carlos E. Gómez Fandiño",
  handle: "Tato",
  photo: "assets/img/profile.jpg",

  /* ---- Contacto ---- */
  contact: {
    email: "cgomezfandino@gmail.com",
    github: "https://github.com/cgomezfandino",
    linkedin: "https://www.linkedin.com/in/carlosgomezfandino/",
    x: "https://x.com/cgomezfandino",
  },

  /* ---- Hero ---- */
  hero: {
    greeting: { es: "Hola, soy", en: "Hi, I'm" },
    headline: { es: "Carlos E. Gómez Fandiño", en: "Carlos E. Gómez Fandiño" },
    alias: "Tato",
    roles: {
      es: ["Arquitecto de IA & datos", "Construyo productos de IA", "Data engineer", "Curioso del cosmos"],
      en: ["AI & data architect", "I build AI products", "Data engineer", "Cosmos-curious"],
    },
    tagline: {
      es: "Diseño y construyo productos de IA end-to-end —siempre con human in the loop—. Antes en Capital Markets; ahora en Northa Center y Containeer.",
      en: "I design and build AI products end-to-end — always with humans in the loop. Formerly Capital Markets; now Northa Center and Containeer.",
    },
    primaryCta: { es: "Mi historia", en: "My story" },
    secondaryCta: { es: "Hablemos", en: "Let's talk" },
    status: { es: "Disponible", en: "Available" },
    statusLine: {
      es: [{ label: "rol", value: "AI & data architect" }, { label: "base", value: "Madrid, ES" }, { label: "foco", value: "Northa Center · Containeer" }],
      en: [{ label: "role", value: "AI & data architect" }, { label: "based", value: "Madrid, ES" }, { label: "focus", value: "Northa Center · Containeer" }],
    },
  },

  /* ---- Historia ---- */
  story: {
    title: { es: "Cómo llegué aquí", en: "How I got here" },
    paragraphs: [
      {
        es: "Estudié Ingeniería Financiera en Colombia por una razón clara: me apasionaban los negocios y las finanzas. Ya durante la carrera me enamoré del mercado de capitales y bursátil, un interés que me llevó al High-Frequency Trading (HFT) y al trading algorítmico.",
        en: "I studied Financial Engineering in Colombia for a simple reason: I was passionate about business and finance. During the degree I fell for capital markets and equities — an interest that took me straight into high-frequency trading (HFT) and algorithmic trading.",
      },
      {
        es: "Fue ahí donde se encendió la chispa por la programación: el código dejó de ser un pasatiempo y se convirtió en la herramienta clave para ejecutar ideas.",
        en: "That's where the spark for programming lit up: code stopped being a pastime and became the key tool to execute ideas.",
      },
      {
        es: "En medio de ese proceso en la universidad me empezó a rondar una pregunta muy personal: ¿cómo automatizar lo pesado y lo repetitivo para ganar tiempo para lo que a mí de verdad me importaba? Con los años esa búsqueda evolucionó: lo que empezó como una forma de ganar eficiencia para mí se transformó en la visión de quitarle fricción del día a día a los demás.",
        en: "In the middle of university a personal question started circling me: how do you automate the heavy and the repetitive to free time for what actually mattered to me? Over the years that search evolved: what began as a way to gain efficiency for myself became a vision of taking day-to-day friction off other people's plates.",
      },
      {
        es: "Con ganas de llevar esa combinación de finanzas, software y datos más lejos, me mudé a Madrid para profundizar en inteligencia artificial y ciencia de datos.",
        en: "Wanting to take that mix of finance, software and data further, I moved to Madrid to go deeper into artificial intelligence and data science.",
      },
      {
        es: "Durante más de una década me moví en el corazón de Capital Markets como Director de Technology Business Analysis: diseñando pipelines e integraciones de IA en productos corporativos para que los equipos los usaran en su día a día.",
        en: "For more than a decade I worked at the core of Capital Markets as Director of Technology Business Analysis — designing pipelines and AI integrations into corporate products so teams could use them every day.",
      },
      {
        es: "Con toda esa experiencia a la espalda, decidí dar el salto a mis propios proyectos end-to-end —desde la primera idea hasta la persona que los utiliza. Hoy la IA me interesa cuando se usa con criterio y responsabilidad: automatizar todo lo posible, manteniendo siempre al humano en el centro (human in the loop).",
        en: "With that experience behind me, I took the leap into my own end-to-end projects — from the first idea to the person who uses them. Today I care about AI when it's used with judgment and responsibility: automate as much as makes sense, always keeping humans in the loop.",
      },
      {
        es: "Ahí es donde está mi energía ahora: construyendo productos que importan. Si este enfoque te conecta, me encantará que conversemos.",
        en: "That's where my energy is now: building products that matter. If this approach resonates, I'd love to talk.",
      },
    ],
    disciplineLead: {
      es: "El talento solo no basta. Me quedo con estas dos frases:",
      en: "Talent alone isn't enough. I hold onto these two lines:",
    },
    quotes: [
      {
        text: {
          es: "La disciplina, tarde o temprano, vencerá a la inteligencia.",
          en: "Discipline, sooner or later, will defeat intelligence.",
        },
        author: "Yokoi Kenji",
      },
      {
        text: {
          es: "Hoy es cruel, mañana más, pero pasado mañana es hermoso. La mayoría se rinde justo la noche antes.",
          en: "Today is cruel, tomorrow is crueler, but the day after tomorrow is beautiful. Most people give up the night before.",
        },
        author: "Jack Ma",
      },
    ],
  },

  /* ---- Lo que me mueve ---- */
  passions: {
    title: { es: "Lo que me mueve", en: "What moves me" },
    items: [
      {
        icon: "code",
        title: { es: "IA y vibe coding", en: "AI & vibe coding" },
        body: {
          es: "Construyo con agentes (Claude Code, Cursor), pero el plan y el criterio son míos. Una idea por la mañana puede estar corriendo por la tarde: se trata de dirigir bien, no de teclear más.",
          en: "I build with agents (Claude Code, Cursor), but the plan and judgment are mine. An idea in the morning can be running by afternoon: it's about directing well, not typing more.",
        },
      },
      {
        icon: "markets",
        title: { es: "Mercados y real estate", en: "Markets & real estate" },
        body: {
          es: "Me engancha entender qué mueve un precio: capital, comportamiento, rotación. Buscar oportunidad con el riesgo a la vista. De ahí viene Containeer —y años de mirar mercados de cerca.",
          en: "I'm hooked on what moves a price: capital, behavior, rotation. Hunting opportunity with risk in plain sight. That's where Containeer comes from — and years of watching markets up close.",
        },
      },
      {
        icon: "bolt",
        title: { es: "Pioneros y el futuro", en: "Pioneers & the future" },
        body: {
          es: "Me inspiran quienes empujan una industria a un sitio que aún no es obvio —eléctrico, autónomo, espacio—. No tanto el gadget como la visión y la constancia de ejecutarla.",
          en: "I'm inspired by people who push an industry somewhere not obvious yet —electric, autonomous, space—. Less the gadget, more the vision and the discipline to ship it.",
        },
      },
      {
        icon: "planet",
        title: { es: "El Universo", en: "The Universe" },
        body: {
          es: "Mirar al cielo pone la escala en su sitio. Me interesa el futuro multiplanetario por los problemas difíciles que abre —ciencia, ingeniería, paciencia— no por la fantasía del cartel.",
          en: "Looking up puts scale in its place. Multiplanetary futures interest me for the hard problems they open — science, engineering, patience — not poster fantasy.",
        },
      },
      {
        icon: "rocket",
        title: { es: "Construir de cero", en: "Building from zero" },
        body: {
          es: "De la servilleta a producción, con gente real del otro lado. Empezar, equivocarse rápido, rearmar. Es lo que más me engancha: ver algo nacer y que alguien lo use.",
          en: "From napkin to production, with real people on the other side. Start, get it wrong fast, rewire. What hooks me most: watching something come alive and someone actually use it.",
        },
      },
      {
        icon: "moon-stars",
        title: { es: "Astrología", en: "Astrology" },
        body: {
          es: "La veo como un mapa de la persona, no como predicción. Sin dogma. Esa mirada alimenta Northa Center: cálculo serio, IA con criterio, y un humano cuando hace falta.",
          en: "I see it as a map of the person, not as prediction. No dogma. That lens feeds Northa Center: serious calculation, AI with judgment, and a human when it matters.",
        },
      },
    ],
  },

  /* ---- En qué ando ahora ---- */
  building: {
    title: { es: "En qué ando ahora", en: "What I'm building now" },
    body: {
      es: "Ahora mismo, dos productos end-to-end. Northa Center: carta, chat e informes para encontrar tu dirección —con profesional cuando hace falta. Containeer: ownership, transacciones y crédito CMBS en una sola inteligencia para CRE. Distintos, mismo hilo: menos fricción, human in the loop.",
      en: "Right now, two end-to-end products. Northa Center: chart, chat and reports to find your direction — with a pro when you need one. Containeer: ownership, transactions and CMBS credit in one intelligence layer for CRE. Different problems, same thread: less friction, humans in the loop.",
    },
  },

  /* ---- Caja de herramientas ---- */
  toolbox: {
    title: { es: "Con lo que construyo", en: "What I build with" },
    items: [
      "Python", "Databricks", "DuckDB", "LangChain / LangGraph", "RAG",
      "MCP", "Claude Code", "Cursor", "Next.js", "PostgreSQL / pgvector", "Dagster",
    ],
    highlight: ["Claude Code", "LangChain / LangGraph", "MCP"],
  },

  /* ---- Cosas que he construido ---- */
  projectsTitle: { es: "Cosas que he construido", en: "Things I've built" },
  projects: [
    {
      name: { es: "Northa Center", en: "Northa Center" },
      subtitle: {
        es: "Astrología psicológica + IA: encuentra tu dirección",
        en: "Psychological astrology + AI: find your direction",
      },
      description: {
        es: "Plataforma B2C de autoconocimiento: carta natal con cálculo astronómico preciso, chat guiado para explorar tu mapa a tu ritmo e informes en PDF (personalidad, mes psicológico, y más). Cuando quieras ir más lejos, un profesional te acompaña. Diseñé y construí el producto end-to-end —stack, IA y flujo human in the loop—. En vivo en northa.center.",
        en: "B2C self-knowledge platform: natal chart with precise astronomical calculation, guided chat to explore your map at your own pace, and PDF reports (personality, monthly psychological view, and more). When you want to go deeper, a professional walks with you. I designed and built the product end-to-end — stack, AI, and human-in-the-loop flow. Live at northa.center.",
      },
      tags: ["IA", "B2C", "End-to-end"],
      stack: ["Next.js", "PostgreSQL / pgvector", "LangChain", "LLMs", "AWS"],
      links: { demo: "https://www.northa.center" },
      featured: true,
    },
    {
      name: { es: "Containeer", en: "Containeer" },
      subtitle: {
        es: "Property & transaction intelligence para CRE",
        en: "Property & transaction intelligence for CRE",
      },
      description: {
        es: "Una plataforma que unifica ownership inmobiliario en EE.UU., transacciones, financials de compañías y REITs, e inteligencia de crédito CMBS. De filings y datos dispersos a una vista usable: quién posee qué, cómo se mueve el capital y dónde está el riesgo en commercial real estate. Diseñé y construí la cadena end-to-end (pipelines, entity resolution, producto). En vivo en containeer.com.",
        en: "One platform unifying U.S. property ownership, transactions, company and REIT financials, and CMBS credit intelligence. From scattered filings and data to a usable view: who owns what, how capital moves, and where risk sits in commercial real estate. I designed and built the chain end-to-end (pipelines, entity resolution, product). Live at containeer.com.",
      },
      tags: ["CRE", "Fintech", "IA"],
      stack: ["Next.js", "DuckDB", "Splink", "MCP", "Claude API", "Cloudflare"],
      links: { demo: "https://www.containeer.com" },
      featured: true,
    },
    {
      name: { es: "Voxnote", en: "Voxnote" },
      subtitle: {
        es: "Reuniones → notas e insights, 100% en tu navegador",
        en: "Meetings → notes & insights, 100% in your browser",
      },
      description: {
        es: "App web de transcripción de reuniones con IA que corre entera en el navegador: Whisper local vía WebGPU (con fallback a CPU), transcripción offline en 8 idiomas y notas estructuradas con insights de LLM. Tu API key se guarda solo en tu navegador y el audio nunca sale de tu máquina. Proveedores configurables: OpenAI, Gemini, Claude, Z.ai, Kimi u Ollama. Además, pipeline local open source con diarización (quién dijo qué), CLI y API. Pruébala en voxnote.pages.dev.",
        en: "AI meeting-transcription web app that runs entirely in the browser: local Whisper via WebGPU (CPU fallback), offline transcription in 8 languages, and structured notes with LLM insights. Your API key is stored only in your browser and audio never leaves your machine. Configurable providers: OpenAI, Gemini, Claude, Z.ai, Kimi, or Ollama. On top of that, an open-source local pipeline with diarization (who said what), CLI, and API. Try it live at voxnote.pages.dev.",
      },
      tags: ["IA", "Privacidad", "WebGPU", "Open source"],
      stack: ["Whisper (in-browser)", "WebGPU", "Next.js", "Python", "FastAPI", "Ollama"],
      links: { demo: "https://voxnote.pages.dev/", repo: "https://github.com/cgomezfandino/voxnote" },
      featured: true,
    },
    {
      name: { es: "Modelos Vasicek & CIR", en: "Vasicek & CIR Models" },
      subtitle: { es: "Donde empezó el cruce finanzas + código", en: "Where finance met code for me" },
      description: {
        es: "Tesis de grado: predicción de la curva de tipos con Vasicek y CIR en MATLAB. El primer proyecto serio donde finanzas y programación se juntaron —antes del trading algorítmico y de lo que vino después.",
        en: "Undergrad thesis: yield-curve forecasting with Vasicek and CIR in MATLAB. The first serious project where finance and programming met — before algo trading and everything after.",
      },
      tags: ["Quant", "Finanzas"],
      stack: ["MATLAB", "Modelos estocásticos"],
      links: { repo: "https://github.com/cgomezfandino/Matlab-Vasicek_CIR_Models" },
      featured: false,
    },
    {
      name: { es: "Este mismo sitio", en: "This very site" },
      subtitle: { es: "Hecho a mano, dirigido con IA", en: "Hand-built, directed with AI" },
      description: {
        es: "HTML, CSS y JS sin frameworks ni build. Lo monté con agentes; yo pongo el plan, la arquitectura y qué se queda fuera. Automatizar lo pesado, decidir lo importante. El código está abierto.",
        en: "HTML, CSS and JS — no frameworks, no build. Built with agents; I bring the plan, the architecture, and what stays out. Automate the heavy lifting, decide what matters. Code is open.",
      },
      tags: ["Web", "Ingeniería", "Open source"],
      stack: ["HTML", "CSS", "JavaScript"],
      links: { repo: "https://github.com/cgomezfandino/cgomezfandino.github.io" },
      featured: false,
    },
  ],

  /* ---- Blog ---- */
  blog: {
    title: { es: "El blog", en: "The blog" },
    lead: {
      es: "Aquí dejo notas sobre IA, producto y lo que voy aprendiendo al construir. Sin corbata: ideas, errores y alguna obsesión que no me deja dormir.",
      en: "Notes on AI, product, and what I'm learning while building. No tie: ideas, mistakes, and the occasional obsession that won't let me sleep.",
    },
  },

  /* ---- Contacto ---- */
  contactSection: {
    title: { es: "Escríbeme", en: "Get in touch" },
    lead: {
      es: "Si tienes una idea de producto, un reto de datos o IA, o solo quieres charlar, escríbeme. Sin agenda. Respondo de verdad.",
      en: "If you have a product idea, a data or AI challenge, or just want to chat, write me. No agenda. I actually reply.",
    },
  },

  footer: {
    es: "Hecho con curiosidad y café. Madrid · raíz colombiana. — Tato",
    en: "Made with curiosity and coffee. Madrid · Colombian roots. — Tato",
  },
};

/* =========================================================================
 *  UI — etiquetas estáticas
 * ========================================================================= */
window.UI = {
  es: {
    "nav.home": "Inicio",
    "nav.story": "Historia",
    "nav.passions": "Pasiones",
    "nav.projects": "Proyectos",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "nav.skip": "Saltar al contenido",
    "section.story": "Mi historia",
    "section.passions": "Lo que me mueve",
    "section.building": "En qué ando",
    "section.projects": "Cosas que he construido",
    "section.blog": "El blog",
    "section.contact": "Contacto",
    "blog.readmore": "Ver el blog",
    "blog.readpost": "Leer",
    "modal.stack": "Stack",
    "modal.repo": "Ver código",
    "modal.demo": "Ver sitio",
    "card.repo": "Código",
    "card.demo": "Sitio",
    "card.more": "Más detalle",
    "blog.eyebrow": "Bitácora",
    "blog.title": "El blog",
    "blog.subtitle": "Notas sobre IA, datos, producto y alguna idea suelta.",
    "blog.toc": "Contenido",
    "blog.related": "Sigue leyendo",
    "blog.count": "{n} notas",
    "blog.count_one": "{n} nota",
    "blog.soon": "Aún no hay notas. Cuando publique alguna, aparecerá aquí y podrás abrirla.",
    "blog.loading": "Cargando…",
    "blog.empty": "No hay posts en esta categoría.",
    "blog.all_posts": "← Todas las notas",
    "blog.back": "← Volver al blog",
    "blog.home": "← Volver al inicio",
    "blog.read_error": "No se pudieron cargar los posts. Sirve el sitio por HTTP (p.ej. python3 -m http.server).",
    "post.not_found": "Post no encontrado",
    "filter.all": "Todos",
    "a11y.lang": "Cambiar idioma",
    "a11y.theme": "Cambiar tema",
    "a11y.menu": "Abrir menú",
    "a11y.filters": "Filtrar por tema",
    "a11y.totop": "Volver arriba",
    "a11y.close": "Cerrar",
    "a11y.scroll": "Bajar",
    "footer.top": "Volver arriba ↑",
  },
  en: {
    "nav.home": "Home",
    "nav.story": "Story",
    "nav.passions": "Passions",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.skip": "Skip to content",
    "section.story": "My story",
    "section.passions": "What moves me",
    "section.building": "What I'm building",
    "section.projects": "Things I've built",
    "section.blog": "The blog",
    "section.contact": "Contact",
    "blog.readmore": "See the blog",
    "blog.readpost": "Read",
    "modal.stack": "Stack",
    "modal.repo": "View code",
    "modal.demo": "View site",
    "card.repo": "Code",
    "card.demo": "Site",
    "card.more": "More detail",
    "blog.eyebrow": "Field notes",
    "blog.title": "The blog",
    "blog.subtitle": "Notes on AI, data, product and the occasional loose idea.",
    "blog.toc": "Contents",
    "blog.related": "Keep reading",
    "blog.count": "{n} notes",
    "blog.count_one": "{n} note",
    "blog.soon": "No notes yet. When I publish one, it will show up here and you can open it.",
    "blog.loading": "Loading…",
    "blog.empty": "No posts in this category.",
    "blog.all_posts": "← All notes",
    "blog.back": "← Back to the blog",
    "blog.home": "← Back to home",
    "blog.read_error": "Couldn't load posts. Serve the site over HTTP (e.g. python3 -m http.server).",
    "post.not_found": "Post not found",
    "filter.all": "All",
    "a11y.lang": "Switch language",
    "a11y.theme": "Toggle theme",
    "a11y.menu": "Open menu",
    "a11y.filters": "Filter by topic",
    "a11y.totop": "Back to top",
    "a11y.close": "Close",
    "a11y.scroll": "Scroll down",
    "footer.top": "Back to top ↑",
  },
};
