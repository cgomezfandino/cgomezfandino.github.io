/* =========================================================================
 *  content.js — ÚNICA FUENTE DE VERDAD (sitio personal de "Tato", bilingüe ES/EN)
 *  -------------------------------------------------------------------------
 *  Textos traducibles = { es, en }. Datos neutros (links, iconos) = strings.
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
      es: ["Data & IA", "Founder", "Guitarrista", "Curioso del cosmos", "Constructor de futuros", "Vibe coder"],
      en: ["Data & AI", "Founder", "Guitar player", "Cosmos-curious", "Future-builder", "Vibe coder"],
    },
    tagline: {
      es: "Construyo cosas que antes no existían —con datos, con IA y mucha curiosidad—. Toco la guitarra, miro al cielo más de la cuenta y creo que el futuro es algo que se construye. Si algo de eso te resuena, quédate un rato.",
      en: "I build things that didn't exist yet —with data, with AI, and a lot of curiosity—. I play guitar, look up at the sky more than I should, and believe the future is something you build. If any of that resonates, stay a while.",
    },
    primaryCta: { es: "Mi historia", en: "My story" },
    secondaryCta: { es: "Hablemos", en: "Let's talk" },
  },

  /* ---- Historia ---- */
  story: {
    title: { es: "Más un lienzo que un CV", en: "More a canvas than a résumé" },
    paragraphs: [
      {
        es: "Crecí en Colombia —tierra de café, de naturaleza desbordante y de gente amable y carismática—, siempre con una guitarra cerca y una pregunta que nunca se apaga: ¿cómo funciona esto? La buena música fue mi primera casa, y la curiosidad, el motor de todo lo demás.",
        en: "I grew up in Colombia —land of coffee, of overflowing nature and warm, charismatic people—, always with a guitar nearby and a question that never switches off: how does this work? Good music was my first home, and curiosity, the engine behind everything else.",
      },
      {
        es: "Me hice ingeniero financiero, pero me enamoré por igual de los negocios y de la programación. Siempre intuí que esos dos mundos terminarían encontrándose y que, juntos, podían hacer la vida más sencilla. Esa misma inquietud por automatizar lo tedioso me empujó a cruzar el océano —de las finanzas a los datos, de Bogotá a Madrid— para hacer un máster en Big Data & Business Analytics.",
        en: "I trained as a financial engineer, but I fell just as hard for business and for programming. I always sensed those two worlds would eventually meet and, together, make life simpler. That same itch to automate the tedious pushed me across the ocean —from finance to data, from Bogotá to Madrid— to do a master's in Big Data & Business Analytics.",
      },
      {
        es: "Durante años le enseñé a las máquinas a encontrar orden en el caos, a convertir montañas de datos en una sola decisión clara. Pero nunca me quedé con el modelo: me quedo con ese instante en que algo confuso, de pronto, tiene sentido. Hoy cierro ese capítulo y abro una página en blanco, con más ganas que nunca de construir lo mío.",
        en: "For years I taught machines to find order in chaos, to turn mountains of data into a single clear decision. But I never kept the model; I keep the moment when something confusing suddenly makes sense. Today I'm closing that chapter and opening a blank page, more eager than ever to build something of my own.",
      },
      {
        es: "Me mueve la inteligencia artificial por todo lo que nos deja crear, y esa misma terquedad de los pioneros por reinventar desde cero y mirar al futuro —y al espacio— sin pedir permiso. Y cuando levanto la vista, el universo me recuerda lo pequeños y lo posibles que somos a la vez. Entre todo eso, siempre, la guitarra cerca. Esto no es un currículum: es un lienzo. Si algo de aquí te resuena, quédate.",
        en: "I'm moved by artificial intelligence and all it lets us create, and by that same pioneer stubbornness to reinvent from scratch and look toward the future —and toward space— without asking permission. And when I look up, the universe reminds me how small and how capable we are at once. Through all of it, always, a guitar within reach. This isn't a résumé: it's a canvas. If any of it resonates, stay a while.",
      },
    ],
    disciplineLead: {
      es: "Si algo he aprendido es que el talento sin constancia se estanca; es la disciplina, ese hábito terco, la que termina logrando lo extraordinario. Por eso llevo conmigo estas dos frases:",
      en: "If there's one thing I've learned, it's that talent without consistency stalls; it's discipline —that stubborn habit— that ends up achieving the extraordinary. That's why I carry these two lines with me:",
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
        icon: "music",
        title: { es: "Música y guitarra", en: "Music & guitar" },
        body: {
          es: "Toco la guitarra desde niño y nunca la he soltado. Para mí no es un hobby: es donde ordeno la cabeza y bajo revoluciones cuando todo va demasiado rápido. Casi siempre llevo una canción sonándome por dentro.",
          en: "I've played guitar since I was a kid and never put it down. For me it's not a hobby: it's where I clear my head and slow down when everything's moving too fast. There's almost always a song playing somewhere in me.",
        },
      },
      {
        icon: "code",
        title: { es: "IA y vibe coding", en: "AI & vibe coding" },
        body: {
          es: "Construyo de la mano de agentes, con herramientas como Claude Code y Cursor. Me fascina lo que sale cuando colaboras con ellos en vez de pelearte: una idea por la mañana y algo funcionando por la tarde. Se siente menos como teclear y más como dirigir.",
          en: "I build hand in hand with agents, using tools like Claude Code and Cursor. I'm fascinated by what comes out when you work with them instead of fighting them: an idea in the morning and something running by the afternoon. It feels less like typing and more like conducting.",
        },
      },
      {
        icon: "markets",
        title: { es: "Mercados y real estate", en: "Markets & real estate" },
        body: {
          es: "Me engancha entender las dinámicas del mercado: los patrones, el comportamiento de consumo y lo que de verdad mueve los precios. Buscar dónde están las oportunidades para generar riqueza —asumiendo los riesgos con los ojos abiertos— es algo que no se me apaga. El real estate es uno de mis terrenos favoritos para verlo de cerca.",
          en: "I'm hooked on understanding how markets work: the patterns, consumer behavior, and what actually moves prices. Hunting for where the real opportunities to build wealth are —taking the risks with my eyes open— is something that never switches off in me. Real estate is one of my favorite places to watch it up close.",
        },
      },
      {
        icon: "bolt",
        title: { es: "Pioneros y el futuro", en: "Pioneers & the future" },
        body: {
          es: "Me mueven los pioneros: los que se meten en una industria entera y la empujan a donde nadie se atrevía. Más que la tecnología en sí, me mueve su visión —apostar por lo eléctrico, lo autónomo, el espacio y el futuro mucho antes de que fueran obvios— y la terquedad para ejecutarla. Me recuerdan que casi todo lo que hoy damos por hecho, alguien tuvo que imaginarlo primero.",
          en: "What moves me are pioneers: the ones who step into a whole industry and push it where no one dared. More than the technology itself, it's their vision that moves me —betting on electric, autonomous, space, the future long before any of it was obvious— and the stubbornness to pull it off. They remind me that almost everything we take for granted today, someone had to imagine first.",
        },
      },
      {
        icon: "planet",
        title: { es: "El Universo", en: "The Universe" },
        body: {
          es: "Mirar al cielo me recuerda lo pequeños que somos y, a la vez, lo lejos que podríamos llegar. Conecto mucho con la idea de Elon Musk de hacer de la humanidad una especie multiplanetaria: esas ganas de llevar la vida humana más allá de la Tierra, a otros planetas y, algún día, aún más lejos. El universo no me da miedo; me da ganas de futuro.",
          en: "Looking up reminds me how small we are and, at the same time, how far we could go. I connect a lot with Elon Musk's idea of making humanity a multiplanetary species: that drive to take human life beyond Earth, to other planets and, someday, further still. The universe doesn't scare me; it makes me hungry for the future.",
        },
      },
      {
        icon: "rocket",
        title: { es: "Emprender", en: "Building things" },
        body: {
          es: "Lo que de verdad me prende es llevar una idea de la servilleta a producción, con usuarios reales del otro lado. Me gusta el caos honesto de empezar de cero, equivocarme rápido y ver algo cobrar vida. Por eso lancé Astro Soul y por eso ando metido en lo nuevo: no hay nada como ver a alguien usar algo que salió de tu cabeza.",
          en: "What really lights me up is taking an idea from napkin to production, with real users on the other side. I like the honest chaos of starting from zero, getting it wrong fast, and watching something come to life. It's why I launched Astro Soul, and why I'm deep in what's next: there's nothing like seeing someone use something that came out of your head.",
        },
      },
      {
        icon: "moon-stars",
        title: { es: "Astrología", en: "Astrology" },
        body: {
          es: "La astrología me atrapa por lo que dice de cada persona, no por el cielo en abstracto: una de las formas más antiguas de entender quiénes somos por dentro y qué nos mueve. No la tomo como dogma ni como adivinación, sino como un mapa para mirarse hacia dentro. Esa curiosidad terminó convirtiéndose en Astro Soul, donde junto mi lado técnico con el más humano.",
          en: "What pulls me into astrology is what it says about each person, not the sky in the abstract: one of the oldest ways of understanding who we are inside and what moves us. I don't take it as dogma or fortune-telling, but as a map for looking inward. That curiosity ended up becoming Astro Soul, where I bring my technical side together with my more human one.",
        },
      },
    ],
  },

  /* ---- En qué ando ahora ---- */
  building: {
    title: { es: "En qué ando ahora", en: "What I'm building now" },
    body: {
      es: "Ahora mismo estoy de lleno en Astro Soul Center, un producto de IA de astrología y bienestar pensado para el público hispanohablante de LATAM y más allá: una forma cálida y personal de acercarse al cosmos, donde mi obsesión por las estrellas y mi oficio de datos por fin se dan la mano. Y, en paralelo, hay algo nuevo en fintech que aún no puedo contar. Cuando llegue el momento, serás de los primeros en saberlo.",
      en: "Right now I'm all in on Astro Soul Center, an astrology and wellness AI product made for Spanish-speaking audiences across LATAM and beyond: a warm, personal way to connect with the cosmos, where my obsession with the stars and my data craft finally shake hands. And in parallel, there's something new in fintech I can't talk about yet. When the time comes, you'll be among the first to know.",
    },
  },

  /* ---- Caja de herramientas (casual) ---- */
  toolbox: {
    title: { es: "Con lo que construyo", en: "What I build with" },
    items: [
      "Python", "Databricks", "DuckDB", "LangChain / LangGraph", "RAG",
      "MCP", "Claude Code", "Cursor", "Next.js", "PostgreSQL / pgvector", "Dagster",
    ],
  },

  /* ---- Cosas que he construido ---- */
  projectsTitle: { es: "Cosas que he construido", en: "Things I've built" },
  projects: [
    {
      name: { es: "Astro Soul Center", en: "Astro Soul Center" },
      subtitle: { es: "Mi producto de IA + astrología", en: "My astrology + AI product" },
      description: {
        es: "Plataforma B2C donde la IA personaliza la experiencia astrológica: cartas natales, guía diaria e interpretación a tu medida. Aquí se juntan mi lado técnico y mi fascinación por el cosmos. Pensada para el público hispanohablante.",
        en: "A B2C platform where AI personalizes the astrology experience: natal charts, daily guidance and tailor-made interpretation. This is where my technical side meets my fascination with the cosmos. Built for Spanish-speaking audiences.",
      },
      tags: ["Founder", "IA", "Producto"],
      stack: ["Next.js", "Supabase", "pgvector", "LLMs"],
      links: {},
      featured: true,
    },
    {
      name: { es: "Modelos Vasicek & CIR", en: "Vasicek & CIR Models" },
      subtitle: { es: "Mis raíces de ingeniero financiero", en: "My financial-engineer roots" },
      description: {
        es: "Mi tesis de grado: predicción de la curva de tipos cupón cero con los modelos de Vasicek y CIR, implementados en MATLAB. El proyecto donde las finanzas y el código empezaron a darse la mano.",
        en: "My undergraduate thesis: forecasting the zero-coupon yield curve with the Vasicek and CIR models, implemented in MATLAB. The project where finance and code first started shaking hands.",
      },
      tags: ["Quant", "Finanzas"],
      stack: ["MATLAB", "Modelos estocásticos"],
      links: { repo: "https://github.com/cgomezfandino/Matlab-Vasicek_CIR_Models" },
      featured: false,
    },
    {
      name: { es: "Este mismo sitio", en: "This very site" },
      subtitle: { es: "Hecho a mano, con vibe coding", en: "Hand-built, with vibe coding" },
      description: {
        es: "La página que estás viendo: HTML, CSS y JavaScript puro, sin frameworks ni build, bilingüe y con modo claro/oscuro. Construida a punta de curiosidad y un poco de vibe coding. El código está abierto.",
        en: "The page you're looking at: plain HTML, CSS and JavaScript, no frameworks or build step, bilingual with light/dark mode. Built on curiosity and a bit of vibe coding. The code is open.",
      },
      tags: ["Web", "Open source"],
      stack: ["HTML", "CSS", "JavaScript"],
      links: { repo: "https://github.com/cgomezfandino/cgomezfandino" },
      featured: false,
    },
  ],

  /* ---- Blog ---- */
  blog: {
    title: { es: "El blog", en: "The blog" },
    lead: {
      es: "Aquí escribo lo que voy aprendiendo: notas sobre IA y construir productos, alguna lección que me costó cara y, de vez en cuando, una idea suelta que no me dejaba dormir. Sin corbata, en voz alta.",
      en: "This is where I write down what I'm learning: notes on AI and building products, the occasional lesson that cost me dearly, and now and then a loose idea that wouldn't let me sleep. No tie, thinking out loud.",
    },
  },

  /* ---- Contacto ---- */
  contactSection: {
    title: { es: "Escríbeme", en: "Get in touch" },
    lead: {
      es: "Me encanta conocer gente y conversar sin agenda: datos e IA, una buena idea de producto, música, astrología, o simplemente la curiosidad de ver qué podríamos construir juntos. Si llegaste hasta aquí, escríbeme. Respondo de verdad.",
      en: "I love meeting people and talking with no agenda: data and AI, a good product idea, music, astrology, or just the curiosity of seeing what we could build together. If you made it this far, write to me. I actually write back.",
    },
  },

  footer: {
    es: "Hecho con curiosidad, café y una guitarra cerca. Desde Madrid, con raíz colombiana. — Tato",
    en: "Made with curiosity, coffee, and a guitar within reach. From Madrid, with Colombian roots. — Tato",
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
    "blog.readmore": "Leer el blog",
    "blog.readpost": "Leer",
    "modal.stack": "Stack",
    "modal.repo": "Ver código",
    "modal.demo": "Ver demo",
    "blog.title": "El blog",
    "blog.subtitle": "Notas sin corbata sobre IA, datos, producto y alguna idea suelta.",
    "blog.loading": "Cargando…",
    "blog.empty": "No hay posts en esta categoría.",
    "blog.all_posts": "Todos los posts",
    "blog.back": "← Volver al blog",
    "blog.home": "← Volver al inicio",
    "blog.read_error": "No se pudieron cargar los posts. Sirve el sitio por HTTP (p.ej. python3 -m http.server).",
    "post.not_found": "Post no encontrado",
    "filter.all": "Todos",
    "a11y.lang": "Cambiar idioma",
    "a11y.theme": "Cambiar tema",
    "a11y.menu": "Abrir menú",
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
    "blog.readmore": "Read the blog",
    "blog.readpost": "Read",
    "modal.stack": "Stack",
    "modal.repo": "View code",
    "modal.demo": "View demo",
    "blog.title": "The blog",
    "blog.subtitle": "No-tie notes on AI, data, product and the occasional loose idea.",
    "blog.loading": "Loading…",
    "blog.empty": "No posts in this category.",
    "blog.all_posts": "All posts",
    "blog.back": "← Back to blog",
    "blog.home": "← Back to home",
    "blog.read_error": "Couldn't load posts. Serve the site over HTTP (e.g. python3 -m http.server).",
    "post.not_found": "Post not found",
    "filter.all": "All",
    "a11y.lang": "Switch language",
    "a11y.theme": "Toggle theme",
    "a11y.menu": "Open menu",
    "a11y.close": "Close",
    "a11y.scroll": "Scroll down",
    "footer.top": "Back to top ↑",
  },
};
