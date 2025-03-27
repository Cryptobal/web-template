# SMD: Sistema de Manejo de Imágenes y Estructura Visual – GARD Security

Este documento es la guía oficial para gestionar imágenes y estructuras visuales del sitio web de Gard Security dentro del entorno de desarrollo en Cursor.

> **IMPORTANTE: Sincronización con Código**  
> Este documento está sincronizado con el archivo `config/images.ts` que contiene los IDs oficiales de las imágenes.
> Cuando añadas una nueva imagen en este documento, asegúrate de añadir su ID correspondiente en el archivo de configuración.
> La estructura de ambos archivos sigue el mismo patrón de organización por páginas.

---

## 1. Estructura de Imágenes por Página

Organiza las imágenes por página y módulo para mantener un flujo visual ordenado. Usa **URLs completas** de Cloudflare para que las imágenes sean visibles directamente desde Cursor.

### FORMATO:
```markdown
## Página: [Nombre de la página] (`/ruta`)
- **[Nombre del módulo o sección]**  
  URL: [URL de la imagen desde Cloudflare]  
  Descripción: [Breve descripción de la imagen]  
  Alt Text: [Texto alternativo para accesibilidad]  
```

---

## 2. Ejemplo Real

```markdown
## Página: Inicio (`/`)
- **Hero Principal**  
  URL: https://imagedelivery.net/abc123456789/hero-inicio/public  
  Descripción: Guardia táctico en acción sobre fondo urbano.  
  Alt Text: Guardia táctico de Gard Security monitoreando zona perimetral.

- **Ícono - Escoltas**  
  URL: https://imagedelivery.net/abc123456789/icono-escoltas/public  
  Descripción: Ícono circular de vehículo blindado.  
  Alt Text: Ícono que representa escolta VIP de seguridad.
```

---

## 3. ¿Cómo pedir a Cursor que agregue una imagen?

Cuando quieras incorporar una imagen en cualquier sección visual, pídele a Cursor lo siguiente:

### Estructura recomendada:
```txt
Agrega esta imagen en la sección "[Nombre del módulo]", justo antes/después de "[texto o componente de referencia]".  
URL: [URL de la imagen en Cloudflare]  
Alt Text: [Texto descriptivo de la imagen]
Clase CSS: [opcional – si quieres estilos como `object-cover`, `rounded`, etc.]
```

### Ejemplo:
```txt
Agrega esta imagen en la sección de "Seguridad Electrónica", justo antes del texto "Soluciones integrales".  
URL: https://imagedelivery.net/abc123456789/seguridad-electronica-hero/public  
Alt Text: "Panel de monitoreo de seguridad electrónica"
Clase CSS: object-cover w-full
```

---

## 4. ¿Cómo pedir a Cursor que cree una nueva página?

Cuando quieras generar una nueva página completa en el sitio, usa esta estructura:

### Prompt base:
```txt
Crea una nueva página llamada "[Nombre de la página]" con ruta `/[slug]`.  
Debe contener:
- Un hero visual con imagen [URL Hero]  
- Un título destacado [Título Principal]  
- Secciones:  
  - [Nombre sección 1]  
  - [Nombre sección 2]  
  - [Nombre sección 3]  

Usa los estilos del sitio Gard Security y asegúrate de hacer `import` de la imagen correctamente.
```

### Ejemplo:
```txt
Crea una nueva página llamada "Seguridad para Retail" con ruta `/seguridad-retail`.  
Debe contener:
- Hero visual: https://imagedelivery.net/abc123456789/retail-hero/public  
- Título: Seguridad Integral para el Mundo del Retail  
- Secciones:
  - Beneficios del servicio
  - Casos de éxito
  - CTA final para cotizar
```

---

## 5. Buenas Prácticas

- Siempre usar `Alt Text` en imágenes para SEO y accesibilidad.
- Verifica visualmente que las imágenes cargan correctamente desde Cloudflare.
- Organiza este archivo por orden de aparición del sitio web.
- Mantén las URLs actualizadas si cambias las imágenes en Cloudflare.

---

## 6. Recomendación

Guarda este archivo como `images.md` o `smd-gard.md` y mantenlo sincronizado con tu contenido visual. Este documento es clave para trabajar con IA de Cursor y mantener una estructura visual clara y escalable.

---

## 📂 RESUMEN DE IMÁGENES EN USO

Esta sección es un resumen organizado de todas las imágenes utilizadas en el sitio. Agrupado por página y sección visual.

### 📄 Página: Inicio (`/inicio`)
- **Hero Principal**
  - 🖼 Descripción: Imagen principal de la página de inicio
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/9b4bb16c-85bf-41d0-0cd7-1962dc64c000/public
  - 📎 Alt Text: Seguridad profesional Gard Security vigilando instalaciones

- **Servicios: Guardias de Seguridad**
  - 🖼 Descripción: Guardia de seguridad uniformado en zona corporativa
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/8bc35c05-93da-4a2a-f46e-a926bd422d00/public
  - 📎 Alt Text: Guardia de seguridad de Gard protegiendo edificio empresarial

- **Servicios: Escoltas Privados**
  - 🖼 Descripción: Vehículo de escolta VIP junto a cliente
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/cd3366cf-919b-4723-a8eb-6a287836b600/public
  - 📎 Alt Text: Escolta privado brindando protección a cliente ejecutivo

- **Servicios: Drones de Seguridad**
  - 🖼 Descripción: Dron sobrevolando zona minera en patrullaje
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/b79c0d5f-1d4b-4591-2ccf-694f9afcdc00/public
  - 📎 Alt Text: Dron de vigilancia operado por Gard Security

- **Servicios: Seguridad Electrónica**
  - 🖼 Descripción: Panel de control con monitoreo en tiempo real
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/44f87a3b-0d9c-48c7-f15e-1e8344960000/public
  - 📎 Alt Text: Sistema de seguridad electrónica monitoreado por Gard

- **Servicios: Monitoreo y CCTV**
  - 🖼 Descripción: Sala de monitoreo con pantallas de seguridad activas
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/4a167a19-1ef9-430d-ec5e-ffbbc3c35300/public
  - 📎 Alt Text: Operador de CCTV verificando rondas en tiempo real

- **Íconos Representativos por Categoría de Servicio**
  - 🖼 Descripción: Agregar íconos representativos para cada categoría de servicio.
  - 🧩 Tipo: Íconos vectoriales (no imágenes)
  - 🧠 Sugerencias:
    - 🛡 Guardias → `ShieldCheck` (lucide)
    - 🚗 Escoltas → `Car` o `UserShield`
    - 📹 CCTV → `Camera`
    - 🚁 Drones → `Drone` o `Satellite`
    - 🔌 Electrónica → `Cpu` o `Server`
  - 🎯 Objetivo: Mejorar reconocimiento visual, escaneabilidad y estilo visual mobile-first.

### 📄 Página: Servicios (`/servicios`)
- **Hero Principal**
  - 🖼 Descripción: Panorámica de servicios de seguridad
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/5eea1064-8a2d-4e8b-5606-d28775467a00/public
  - 📎 Alt Text: `Servicios integrados de seguridad profesional Gard Security`

- **[PENDIENTE – SUGERENCIA UIUX]**
  - 📌 ID de imagen: `Pendiente - Infografía de procesos`
  - 🖼 Descripción: Diagrama visual del proceso de implementación de servicios
  - 🔗 URL: `Pendiente`
  - 📎 Alt Text: `Proceso de implementación de servicios de seguridad Gard`

### 📄 Página: Servicio Guardias de Seguridad (`/servicio-guardias-seguridad`)
- **Hero Principal**
  - 🖼 Descripción: Guardias uniformados en posición profesional
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/e01db9f7-4cf6-4cac-cf83-c93215097200/public
  - 📎 Alt Text: Guardias de seguridad profesionales Gard Security

- **Galería de Servicio**
  - 🖼 Descripción: Diferentes contextos de guardias en acción
  - 🔗 URL:
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/04e7aafd-831d-4b6f-666c-116605cc4400/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/5b95423f-4c59-4205-7b90-52e0667ca200/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/fb852267-cb0c-4e3e-fa90-136c201e7000/public
    -

  - 📎 Alt Text:
    - Guardias de seguridad Gard Security en diferentes situaciones operativas
    - Guardias de seguridad en empresas de Gard Security
    - Guardia de seguyridad de Gard Security
    -

- **[PENDIENTE – SUGERENCIA UIUX]**
  - 📌 ID de imagen: `Pendiente - Badges de certificaciones`
  - 🖼 Descripción: Iconos de certificaciones y capacitaciones del personal
  - 🔗 URL: `Pendiente`
  - 📎 Alt Text: `Certificaciones de calidad y seguridad del personal Gard Security`

### 📄 Página: Servicio Seguridad Electrónica (`/servicio-seguridad-electronica`)
- **Hero Principal**
  - 🖼 Descripción: Centro de monitoreo o tecnología de seguridad
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/237c574e-8997-4f6b-47fa-6c3ebe057200/public
  - 📎 Alt Text: Tecnología avanzada de seguridad electrónica Gard Security

- **Galería de Servicio**
  - 🖼 Descripción: Sistemas CCTV y control de acceso biométrico
  - 🔗 URL
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/7f152778-b285-4cbe-7aba-a77620455d00/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/c2aebfd4-132d-4a44-21d0-469e834e5900/public

  - 📎 Alt Text:
    - Sistemas de seguridad electrónica instalados por Gard Security
    - Sistemas de reconocimiento facial instalados por Gard Security

- **[PENDIENTE – SUGERENCIA UIUX]**
  - 📌 ID de imagen: `Pendiente - Esquema de integración tecnológica`
  - 🖼 Descripción: Diagrama visual de integración de tecnologías de seguridad
  - 🔗 URL: `Pendiente`
  - 📎 Alt Text: `Ecosistema integrado de soluciones de seguridad electrónica Gard`

### 📄 Página: Servicio Central de Monitoreo (`/servicio-central-monitoreo`)
- **Hero Principal**
  - 🖼 Descripción: Panel de control con múltiples pantallas
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/4a5d0b79-8f81-4387-54b5-dc9956268400/public
  - 📎 Alt Text: Central de monitoreo 24/7 Gard Security

- **Galería de Servicio**
  - 🖼 Descripción: Central de monitoreo y operador verificando alertas
  - 🔗 URL:
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/4be6a0d1-a23a-49fc-f2a5-aa24df947700/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/165c106f-ae53-496f-d8f9-5d9f10aeb500/public
    -

  - 📎 Alt Text:
    - Operadores profesionales verificando alertas en central de monitoreo Gard
    - Central de monitoreo operada por Gard Security
    - 

- **Sistema de Reportería**
  - 🖼 Descripción: Interfaz del sistema de reportes
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/d0c7fd28-f94f-4138-d307-da723130fd00/public
  - 📎 Alt Text: Sistema de reportería y gestión de alertas Gard Security

### 📄 Página: Servicio Drones de Seguridad (`/servicio-drones-seguridad`)
  - 🖼 Descripción: Dron de vigilancia sobre propiedad
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/be6ef2e1-98d5-4b3c-cd50-ca77cd6f0e00/public
  - 📎 Alt Text: Dron de vigilancia aérea Gard Security

- **Galería de Servicio**
  - 🖼 Descripción: Drones en operacion
  - 🔗 URL:
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/79e59b55-d3cb-4cee-1f58-d5512b7d0000/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/330ea24f-8216-48e2-ea7f-b33e24815b00/public
    -

  - 📎 Alt Text:
    - Operaciones con drones de vigilancia Gard Security
    - Servicio de drones para empresas
    -


- **[PENDIENTE – SUGERENCIA UIUX]**
  - 📌 ID de imagen: `Pendiente - Mapa de cobertura aérea`
  - 🖼 Descripción: Visualización de área de cobertura con drones
  - 🔗 URL: `Pendiente`
  - 📎 Alt Text: `Mapa de cobertura de vigilancia con drones Gard Security`

### 📄 Página: Industrias (`/industrias`)
- **Hero Principal**
  - 🖼 Descripción: Instalación industrial con elementos de seguridad
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/4a46b63d-0e1b-4640-b95c-7f040a288c00/public
  - 📎 Alt Text: Seguridad industrial especializada Gard Security

- **Sectores Industriales**
  - 🖼 Descripción: Imágenes representativas de cada industria servida por Gard Security, usadas en sección de tarjetas o grilla.
  - 🔗 URLs:
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/71cb7755-9445-4def-6beb-7c69d2e5e100/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/c7037bb7-16a8-4d88-882b-c3b7690b1400/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/c7037bb7-16a8-4d88-882b-c3b7690b1400/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/7f152778-b285-4cbe-7aba-a77620455d00/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/77e4d99e-a497-44ad-6c70-88cc1d7f2e00/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/450beb48-762f-457b-59b4-2a313a198f00/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/5c97d40c-bf3c-4413-6ead-c15f7c9aa100/public
    - ...
  - 📎 Alt Texts:
    - Seguridad especializada para el sector Salud por Gard Security
    - Seguridad especializada para el sector Construcción por Gard Security
    - Seguridad especializada para el sector Educación por Gard Security
    - Seguridad especializada para el sector Bodegas por Gard Security
    - Seguridad especializada para el sector Minería por Gard Security
    - Seguridad especializada para el sector Retail por Gard Security
    - Seguridad especializada para el sector Eventos por Gard Security
    -

- **[PENDIENTE – SUGERENCIA UIUX]**
  - 📌 ID de imagen: `Pendiente - Iconos de ventajas por sector`
  - 🖼 Descripción: Iconos específicos que ilustren ventajas para cada industria
  - 🔗 URL: `Pendiente`
  - 📎 Alt Text: `Beneficios específicos de seguridad para [nombre del sector]`

### 📄 Página: Tecnologías (`/tecnologias`)
- **Hero Principal**
  - 🖼 Descripción: Tecnología de seguridad avanzada
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/678cad4f-9b0d-49e6-3bbd-0d747a2fdc00/public
  - 📎 Alt Text: Tecnologías avanzadas de seguridad Gard Security

- **[PENDIENTE – SUGERENCIA UIUX]**
  - 📌 ID de imagen: `Pendiente - Mockups de interfaces`
  - 🖼 Descripción: Capturas de las interfaces tecnológicas de Gard Security
  - 🔗 URL: `Pendiente`
  - 📎 Alt Text: `Interfaces tecnológicas de los sistemas de seguridad Gard`

### 📄 Página: Quienes Somos (`/quienes-somos`)
- **Hero Principal**
  - 🖼 Descripción: Equipo profesional o sede de la empresa
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/7d33f2ab-1ad7-4f8d-11c3-e82a0b54db00/public
  - 📎 Alt Text: Equipo profesional de Gard Security

- **[PENDIENTE – SUGERENCIA UIUX]**
  - 📌 ID de imagen: `Pendiente - Galería del equipo`
  - 🖼 Descripción: Fotos profesionales del equipo directivo y operativo
  - 🔗 URL: `Pendiente`
  - 📎 Alt Text: `Equipo directivo y profesionales de Gard Security`

- **[PENDIENTE – SUGERENCIA UIUX]**
  - 📌 ID de imagen: `Pendiente - Línea de tiempo`
  - 🖼 Descripción: Infografía de hitos históricos de la empresa
  - 🔗 URL: `Pendiente`
  - 📎 Alt Text: `Historia y evolución de Gard Security a través del tiempo`

### 📄 Página: Blog (`/blog`)
- **Hero Principal**
  - 🖼 Descripción: Imagen conceptual de seguridad/conocimiento
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/68a88111-b8a7-4e5b-0baa-4e81cb630d00/public
  - 📎 Alt Text: Blog de conocimiento sobre seguridad de Gard Security

- **Placeholders de Artículos**
  - 📌 ID de imagen: `blog_placeholder`
  - 🖼 Descripción: Imagen para artículos sin imagen destacada
  - 🔗 URL: `Pendiente`
  - 📎 Alt Text: `Artículo del blog de seguridad Gard Security`

- **Avatares**
  - 📌 ID de imagen: `avatar_placeholder`
  - 🖼 Descripción: Avatar genérico para autores
  - 🔗 URL: `Pendiente`
  - 📎 Alt Text: `Autor del blog de Gard Security`

### 📄 Página: Sostenibilidad (`/sostenibilidad`)
- **Hero Principal**
  - 🖼 Descripción: Imagen conceptual de sostenibilidad
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/1b09642f-da1e-4247-52c6-acd8362d1a00/public
  - 📎 Alt Text: Compromiso con la sostenibilidad de Gard Security

- **[PENDIENTE – SUGERENCIA UIUX]**
  - 📌 ID de imagen: `Pendiente - Infografías de impacto ambiental`
  - 🖼 Descripción: Visualizaciones del impacto ambiental positivo
  - 🔗 URL: `Pendiente`
  - 📎 Alt Text: `Impacto ambiental positivo de las iniciativas de Gard Security`

### 📄 Página: Cotizar (`/cotizar`)
- **Hero Principal**
  - 🖼 Descripción: Imagen de atención al cliente profesional
  - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/428c1028-8f6b-455a-e110-38421eeb5700/public
  - 📎 Alt Text: Solicita una cotización personalizada de Gard Security

- **Íconos del Proceso de Cotización**
  - 🖼 Descripción: Íconos vectoriales que representan visualmente los pasos del proceso de cotización de servicios con énfasis en la visita a terreno como etapa clave.
  - 🧩 Tipo: Íconos SVG desde `lucide-react`
  - 🧠 Íconos sugeridos:
    - 📝 Paso 1: Formulario de contacto → `FileText`
    - 📞 Paso 2: Llamada de validación inicial → `PhoneCall`
    - 👷 Paso 3: Visita a terreno para levantamiento → `HardHat` o `MapPin`
    - 🧠 Paso 4: Análisis de riesgos y planificación → `Brain`
    - 📄 Paso 5: Envío de propuesta personalizada → `ClipboardList`
    - ✅ Paso 6: Aprobación y activación del servicio → `ShieldCheck`
  - 🎯 Objetivo: Representar el proceso con claridad y profesionalismo, destacando la importancia de la visita presencial para evaluar vulnerabilidades y entregar una cotización a medida.

### 📄 Página: Identidad Corporativa (Transversal)

- **Logos Corporativos**
  - 🖼 Imágenes:
    - **Logo Principal**
      - Descripción: Logo institucional horizontal completo
      - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/7661cf51-c66b-4419-9229-e6e50f76ff00/public
      - 📎 Alt Text: Logo oficial de Gard Security
    - **Logo Simplificado**
      - Descripción: Versión compacta del logo para espacios reducidos
      - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/24172844-496d-4cd1-4ef0-894b5574e700/public
      - 📎 Alt Text: Isotipo de Gard Security

- **Favicons**
  - 🖼 Imágenes:
    - **Favicon Navegador**
      - Descripción: Icono pequeño para pestaña del navegador
      - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/89a214ef-5112-4c4e-912e-4f56514c1600/public
      - 📎 Alt Text: Favicon de Gard Security
    - **Favicon PWA**
      - Descripción: Versión en alta resolución para Progressive Web App
      - 🔗 URL: https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/195f82cb-9a5e-4964-6fb5-ea43da47b000/public
      - 📎 Alt Text: Ícono grande de aplicación Gard Security

### 📄 Página: Clientes/Testimonios (Transversal)
- **Logos de Clientes**
  - 🖼 Descripción: Logos de clientes destacados presentados en carrusel o grilla.
  - 🔗 URLs:
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/eeaf472c-ab11-448b-f5e2-d18415147800/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/bee9d371-805c-4029-59f6-93cdfd916000/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/7db0cea1-4eab-4c2d-65a8-6bdd50918800/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/732f1a26-ecdd-4dbd-cae3-f62b3f212700/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/068a0aaa-47f0-428c-bdf0-b8f7f780cb00/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/bf9629aa-071f-48e3-cf86-a9a29203fd00/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/10786958-2ce6-4352-ccc2-2c6f45c6a100/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/62c92cfb-7c18-4699-2433-552682479a00/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/72310c38-9a82-4923-bd28-800ba8d9ef00/public
    - https://imagedelivery.net/gGw8cfmEZedi85dYm6qcFw/0b1d6037-3672-4cd9-1c72-6ba511bc5100/public
    -
    
    - ...
  - 📎 Alt Texts:
    - Logo de Polpaico, cliente de Gard Security
    - Logo de Zerando, cliente de Gard Security
    - Logo de Dhemax, cliente de Gard Security
    - Logo de Transmat, cliente de Gard Security
    - Logo de Tritec, cliente de Gard Security
    - Logo de Tattersall, cliente de Gard Security
    - Logo de Forestal Santa Blanca, cliente de Gard Security
    - Logo de GL Events Metropolitan, cliente de Gard Security
    - Logo de Delegacion Presidencial Chañaral, cliente de Gard Security
    - Logo de Bbosch, cliente de Gard Security
    - ...

- **[PENDIENTE – SUGERENCIA UIUX]**
  - 📌 ID de imagen: `Pendiente - Testimonios con fotos`
  - 🖼 Descripción: Fotografías de clientes dando testimonios
  - 🔗 URL: `Pendiente`
  - 📎 Alt Text: `Testimonio de [nombre/cargo] sobre servicios de Gard Security`

## 🎨 Sugerencias UI/UX para Mejora Visual

### 📱 Experiencia Móvil
- **Microcards en Hero Mobile**: Añadir tarjetas pequeñas para servicios clave en la versión móvil del hero, mejorando la navegabilidad en pantallas pequeñas.
- **Menú de navegación con iconos**: Implementar iconos junto al texto del menú móvil para mejorar la escaneabilidad.

### 🖥️ Jerarquía de Contenido
- **Testimonios visueles**: Crear una sección de "casos de éxito" con fotos reales de clientes y breves citas, aumentando la credibilidad visual.
- **Badges de industrias atendidas**: Implementar un sistema visual de badges que destaque rápidamente las industrias servidas en secciones relevantes.

### 🌐 Claridad Visual
- **Infografías de procesos**: En páginas de servicios específicos, incluir infografías que muestren visualmente el proceso de implementación.
- **Visualización de datos de seguridad**: Añadir gráficos simples que muestren estadísticas de mejora en seguridad con los servicios de Gard.

### 🔍 SEO y Escaneabilidad
- **Imágenes optimizadas para compartir**: Crear versiones específicas de imágenes para compartir en redes sociales con texto integrado.
- **Ilustraciones de conceptos clave**: Para secciones técnicas, desarrollar ilustraciones que comuniquen conceptos complejos de seguridad.
