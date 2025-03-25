# Fábrica de Sitios Web Optimizados

## 📚 Introducción

Este repositorio contiene un conjunto de reglas MDC (Markdown Component) que conforman la base para nuestra fábrica de sitios web optimizados. Estas reglas están diseñadas para estandarizar el desarrollo, garantizando consistencia, calidad y rendimiento excepcional en todos los proyectos derivados.

## 🎯 Propósito

- **Rendimiento superior**: Todos los sitios alcanzan 90+ en Core Web Vitals
- **SEO Técnico optimizado**: Estructura, metadatos y contenido pensados para buscadores
- **Escalabilidad**: Arquitectura que crece con las necesidades del negocio
- **Experiencia UI/UX moderna**: Interfaces coherentes, accesibles y atractivas
- **Componentes reutilizables**: Biblioteca completa de elementos listos para usar
- **Infraestructura robusta**: Integración perfecta con Cloudflare + Vercel
- **Desarrollo acelerado**: Reducción drástica del tiempo de implementación

## 🧩 Estructura de reglas

### `base/` - Configuración fundamental

Establece la arquitectura y configuración base del proyecto.

- **estructura-carpetas.mdc**: Organización estandarizada de directorios y archivos
- **next-config.mdc**: Configuración optimizada para Next.js
- **typescript.mdc**: Estándares y buenas prácticas de TypeScript
- **env-variables.mdc**: Gestión de variables de entorno
- **seguridad.mdc**: Medidas de protección y encabezados HTTP seguros

### `frontend/` - Interfaz y experiencia de usuario

Define los componentes visuales y la experiencia del usuario.

- **design-system.mdc**: Sistema de diseño con tokens, componentes y patrones
- **header.mdc**: Estructura y comportamiento del encabezado del sitio
- **footer.mdc**: Implementación estandarizada del pie de página
- **componentes-ux.mdc**: Biblioteca de componentes optimizados para Core Web Vitals
- **imagenes.mdc**: Gestión y optimización de recursos visuales vía CDN
- **performance.mdc**: Estrategias avanzadas de optimización de rendimiento
- **i18n.mdc**: Implementación de internacionalización
- **pwa-offline.mdc**: Soporte para Progressive Web App y funcionalidad offline
- **sitemap-robots.mdc**: Generación automática de sitemaps y configuración de robots.txt

### `backend/` - Lógica y servicios

Establece la infraestructura para el procesamiento y gestión de datos.

- **cms-integracion.mdc**: Conexión con sistemas de gestión de contenido headless
- **lead-capturing-api.mdc**: API para captura de formularios y contactos
- **schema-org.mdc**: Implementación de datos estructurados para SEO
- **error-monitoring.mdc**: Sistema de monitoreo y reporte de errores
- **state-management.mdc**: Arquitectura de gestión de estado global

### `analytics/` - Medición y seguimiento

Herramientas para analítica y tracking.

- **consent-manager.mdc**: Gestión de consentimiento de cookies GDPR/CCPA/LGPD
- **tracking-conversiones.mdc**: Seguimiento unificado de eventos y conversiones

### `devops/` - Integración y despliegue

Automatización del ciclo de vida del desarrollo.

- **ci-cd.mdc**: Flujos de integración y despliegue continuo
- **testing.mdc**: Estrategias de pruebas unitarias, integración y E2E
- **deploy.mdc**: Proceso estandarizado de despliegue
- **cloudflare-vercel/integracion.mdc**: Configuración óptima de CDN y hosting
- **cloudflare-vercel/rendimiento.mdc**: Optimizaciones específicas para la infraestructura

## 🚀 Cómo usar esta fábrica

### Iniciar un nuevo proyecto

1. Clona este repositorio como plantilla base:  
   `git clone https://github.com/tuusuario/fabrica-sitios-web.git [nombre-proyecto]`
2. Entra a la carpeta del nuevo proyecto:  
   `cd [nombre-proyecto]`
3. Ejecuta el script de inicialización para preparar la estructura del sitio:  
   `npm run init-project`
   > Este comando:
   > - Crea la estructura `/app`, `/components`, `/lib`, `/public`, `/docs`
   > - Copia las reglas `.mdc` en `.cursor/rules/`
   > - Instala dependencias clave (Next.js, TailwindCSS, etc.)
   > - Crea páginas desde los documentos Markdown en `/docs/`
   > - Lanza el servidor local con `next dev`
4. Abre Cursor o tu editor preferido y comienza a desarrollar 🚀

### Agregar contenido del sitio (textos)

1. Crea documentos `.md` dentro de la carpeta `/docs/` para cada página:
   - `inicio.md`
   - `quienes-somos.md`
   - `servicios.md`
   - `contacto.md`, etc.
2. Cada documento debe seguir el [template base de páginas](./docs/templates/page-template.md)
3. El sistema generará automáticamente la estructura de páginas desde esos documentos.

## 🔄 Ciclo de desarrollo

1. **Planificación**: Define qué reglas base utilizarás y cuáles personalizarás
2. **Desarrollo**: Construye sobre los componentes pre-optimizados
3. **Testing**: Ejecuta pruebas unitarias y de rendimiento automatizadas
4. **Despliegue**: Utiliza el pipeline CI/CD pre-configurado
5. **Monitoreo**: Supervisa el rendimiento y comportamiento en producción

## 📈 Beneficios

- **Desarrollo 3x más rápido** gracias a componentes reutilizables
- **Rendimiento garantizado** con prácticas probadas
- **Consistencia entre proyectos** independientemente del equipo de desarrollo
- **Mantenimiento simplificado** con estructura estandarizada
- **Escalabilidad** desde landing pages hasta plataformas complejas

## 🧠 Contribuciones

Los equipos pueden proponer mejoras a las reglas base mediante Pull Requests al repositorio principal. Todas las mejoras serán evaluadas para su incorporación en la fábrica.