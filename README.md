# Carlos E. Gómez Fandiño — Tato

Mi sitio personal y blog, **bilingüe (ES/EN)**. Carta de presentación de un arquitecto de IA & datos: productos end-to-end, mercados y cosmos. → [cgomezfandino.github.io](https://cgomezfandino.github.io/)

Sitio **estático** (HTML + CSS + JS, sin frameworks ni build), **construido con IA (vibe coding)** y dirigido como un proyecto, para **GitHub Pages**. Identidad "Editorial Cream" (crema + rojo), tipografía serif Fraunces, modo claro/oscuro.

## Editar el contenido

Casi todo vive en un solo archivo:

- **`js/content.js`** — perfil completo + diccionario de UI (`window.UI`).
  - Los textos traducibles son objetos `{ es: "...", en: "..." }`.
  - Los datos neutros (links, fechas, tecnologías) son strings normales.

### Idioma ES/EN
El selector 🌐 de la barra superior cambia el idioma y lo recuerda (`localStorage`).
El idioma inicial se controla con `PROFILE.defaultLang` (`"es"` por defecto).
Para traducir una etiqueta de interfaz, edita `window.UI.es` / `window.UI.en` en `content.js`.

### Otros datos
- Foto: sustituye `assets/img/avatar.svg` (o pon la ruta de `assets/img/profile.jpg` en `PROFILE.photo`).

## Blog

- Cada post es un `.md` en `posts/` con *front-matter* (título, fecha, tags…).
- Añade una entrada a `posts/index.json` para que aparezca en el listado.
- Se renderiza en cliente con `marked` + `highlight.js` (versión fijada con SRI).
- La interfaz del blog es bilingüe; los posts se muestran en el idioma en que están escritos.

## Desarrollo local

El blog usa `fetch`, así que **no** funciona abriendo el archivo directamente (`file://`):

```bash
python3 -m http.server 8004 --directory ~/repos/cgomezfandino
# http://localhost:8004   (8004 a propósito: el 8000 lo usa otro proyecto del usuario)
```

## Despliegue en GitHub Pages

1. Sube estos archivos a la rama `main` del repo `cgomezfandino.github.io`.
2. *Settings → Pages*: **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Quedará en `https://cgomezfandino.github.io`. El `.nojekyll` evita el procesado Jekyll.

## Estructura

```
index.html        Página principal (hero, historia, pasiones, en qué ando, proyectos, blog, contacto)
blog.html         Redirige a index.html#blog (el índice vive en el landing)
post.html         Render de un post (?slug=...)
css/              styles.css (tema/animaciones) · blog.css (prosa)
js/               content.js (datos + UI) · main.js (perfil) · blog.js (blog)
posts/            index.json + posts en Markdown
assets/           img/ (avatar, og-image)
```

---
_Hecho con HTML, CSS y JS. Sin frameworks, sin build._
