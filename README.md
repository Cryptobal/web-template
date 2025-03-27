# 🧱 Fábrica de Sitios Web Optimizados

Este repositorio es la base de la fábrica de sitios web Gard, desarrollada para garantizar rendimiento, escalabilidad, SEO de clase mundial y una experiencia UI/UX excepcional.

---

## 📘 Reglas del Proyecto

Este repositorio obedece estrictamente las reglas definidas en [`.cursor.rules.md`](./.cursor.rules.md).

**⚠️ Importante:**  
Cursor y cualquier desarrollador humano **deben leer y aplicar esas reglas antes de modificar cualquier cosa.**

---

## 🚀 Estructura Principal del Repositorio

/public               → Imágenes optimizadas (WebP)
/content/blog_posts   → Artículos del blog en Markdown SEO-ready
/docs                 → Documentación del proyecto
/src
├── components      → Componentes UI reutilizables
├── pages           → Páginas del sitio (Next.js routing)
├── config          → SEO global, metadatos, info del sitio
├── lib             → Funciones auxiliares (formularios, validación, etc.)
├── styles          → Tailwind o CSS Modules
└── data            → JSON con navegación, industrias, etc.

---

## 📰 Blog Integrado

El blog del sitio se genera automáticamente desde los archivos Markdown ubicados en:

docs/blog_posts/

Cada archivo contiene metadatos SEO estructurados en la cabecera (`frontmatter`):

```md
---
title: "Título del artículo"
slug: "titulo-del-articulo"
date: "2024-01-25"
description: "Resumen optimizado para motores de búsqueda."
tags: ["seguridad", "guardias", "empresa de seguridad"]
---

📍 Esto permite generar:
	•	/blog → Listado de artículos
	•	/blog/[slug] → Página individual por artículo

⸻

🧪 Checklist antes del Deploy
	•	✅ Títulos y metadescripciones SEO correctos en todas las páginas
	•	✅ Lighthouse ≥ 90/100 en móvil
	•	✅ Accesibilidad WCAG AA mínima
	•	✅ Sitemap.xml actualizado
	•	✅ Robots.txt configurado
	•	✅ Formularios conectados a GA4 o Tag Manager
	•	✅ Imágenes con lazy loading y en WebP
	•	✅ Código limpio y sin duplicaciones

⸻

📈 Integraciones Estándar
	•	✅ Google Analytics 4 (GA4)
	•	✅ Google Tag Manager
	•	✅ Google Search Console
	•	✅ Meta Tags y Open Graph
	•	✅ Despliegue con Vercel + optimización CDN vía Cloudflare
	•	✅ Eventos de conversión para formularios y botones CTA

⸻

⚙️ Comandos de Desarrollo

pnpm install     # Instala dependencias
pnpm dev         # Levanta el entorno local
pnpm build       # Genera build para producción

## 🖼 Uso de Imágenes desde Cloudflare

Todas las imágenes del sitio se cargan dinámicamente desde Cloudflare utilizando URLs optimizadas.

- Evitar duplicación en `/public`
- URLs se almacenan en: `src/data/images.ts`
- No usar IDs sin procesar ni rutas absolutas al cargar imágenes.
- Usar el componente `ImageCloudflare.tsx` para mantener compatibilidad y rendimiento.

## 📮 Formularios Integrados

Este sitio incluye dos formularios listos para ser reutilizados:

- `/src/components/form/ContactForm.tsx` → Para la página de contacto
- `/src/components/form/CotizarForm.tsx` → Para solicitar cotización

Ambos están validados y preparados para integrarse con Google Tag Manager, eventos de conversión y correo.

⸻

🧠 Filosofía de la Fábrica

Esta fábrica está diseñada para lanzar sitios con nivel de calidad mundial:
✨ Rápidos, ✨ escalables, ✨ optimizados para SEO, ✨ con diseño moderno y ✨ sin errores de estructura.

⸻

Made with ❤️ por Carlos y su Fábrica de Sitios Web 🚀