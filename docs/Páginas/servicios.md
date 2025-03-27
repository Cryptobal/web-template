# Página: Servicios

## 🎯 Objetivo
Presentar de manera clara, estructurada y persuasiva los servicios que ofrece Gard Security, destacando nuestra oferta diferenciadora en seguridad privada: guardias altamente capacitados, vigilancia electrónica avanzada, monitoreo centralizado, y drones de seguridad. El objetivo es posicionarnos como la empresa de seguridad más completa y tecnológica del mercado, optimizando visibilidad SEO con foco en términos como *guardias de seguridad para empresas*, *empresa de seguridad privada*, *seguridad electrónica*, y *drones de vigilancia*.

## 🧩 Wireframe Estructural
- **Hero principal**: Título impactante, subtítulo explicativo, botón de acción.
- **Resumen de Servicios**: Cuadrícula visual con íconos por tipo de servicio.
- **Sección Guardias de Seguridad**: Imagen + texto + botón.
- **Sección Seguridad Electrónica**: Imagen + texto + subcategorías.
- **Sección Drones de Seguridad**: Imagen + texto + beneficios.
- **CTA Cotiza**: Franja con fondo destacado y botón llamativo.

## ✍️ Contenido SEO Optimizado

### 1. Hero Section
**Título:** Servicios de Seguridad Integral para Empresas e Industrias  
**Subtítulo:** Soluciones 360° en seguridad privada: Guardias, vigilancia electrónica, monitoreo remoto y drones.  
**Botón:** [Cotiza tu servicio de seguridad](#)

---

### 2. Cuadrícula de Servicios

**Guardias de Seguridad**  
*Protección presencial de alta calidad con personal capacitado y operativo 24/7.*

**Seguridad Electrónica**  
*Instalación y monitoreo de CCTV, control de accesos y sistemas perimetrales avanzados.*

**Monitoreo y Central de Alarmas**  
*Supervisión remota con inteligencia artificial y protocolos personalizados.*

**Drones de Seguridad**  
*Vigilancia aérea inteligente con rondas virtuales y prevención proactiva.*

---

### 3. Guardias de Seguridad

**Título:** Guardias de Seguridad para Empresas con OS10  
**Texto:**  
En Gard Security, nuestros guardias de seguridad están altamente capacitados y cuentan con certificación OS10 vigente. Brindamos servicios de vigilancia profesional para industrias, oficinas, retail, eventos, minería y más. Nuestra cobertura es completa, adaptándonos a las necesidades de cada cliente y aplicando protocolos estrictos para mantener entornos protegidos y bajo control.

**Botón:** [Conoce nuestros guardias](#)

---

### 4. Seguridad Electrónica

**Título:** Seguridad Electrónica Profesional para Empresas  
**Texto:**  
Ofrecemos soluciones tecnológicas avanzadas en seguridad electrónica: cámaras HD, control de accesos biométrico, alarmas de intrusión, ciberseguridad y automatización de edificios. Cada sistema es diseñado a medida para maximizar la protección, eficiencia y control operativo de tu empresa.

**Subservicios:**  
- Central de Monitoreo Remoto y CCTV  
- Sistemas de Seguridad Perimetral  
- Automatización y Domótica  
- Electricidad y Corrientes Débiles  
- Redes de Datos Corporativas

**Botón:** [Ver soluciones electrónicas](#)

---

### 5. Drones de Seguridad

**Título:** Drones de Vigilancia para Rondas Nocturnas y Monitoreo Aéreo  
**Texto:**  
Gard Security lidera la vigilancia aérea con drones autónomos que realizan rondas de seguridad, disuasión remota y patrullaje perimetral. Esta tecnología reduce costos, mejora la cobertura y refuerza la prevención de amenazas en tiempo real. Nuestros drones se integran con la operación terrestre para una solución híbrida altamente efectiva.

**Beneficios clave:**  
- Rondas ininterrumpidas  
- Cobertura de grandes áreas  
- Reducción de dotaciones físicas  
- IA para detección de anomalías  
- Integración con monitoreo remoto

**Botón:** [Descubre nuestros drones](#)

---

### 6. CTA Final

**Frase:** Protege tu empresa con una solución de seguridad privada personalizada y de clase mundial.  
**Botón:** [Solicita una cotización gratuita](#)

---

## 📈 Notas de SEO
- Palabras clave principales utilizadas: *empresa de seguridad privada*, *guardias de seguridad*, *seguridad para empresas*, *seguridad electrónica*, *monitoreo con drones*.
- Frases clave colocadas estratégicamente al inicio de cada sección.
- Uso de headings jerárquicos (`H2` y `H3`) para estructura semántica clara.
- Inclusión de llamadas a la acción con verbos clave: “cotiza”, “descubre”, “conoce”.
- Optimizado para snippets y búsqueda de servicios locales en Google.

## 🎨 Notas UI/UX
- Diseño modular, con bloques visuales por tipo de servicio.
- Uso de íconos e ilustraciones para facilitar escaneo visual.
- Botones CTA bien visibles en todas las secciones.
- Contenido adaptable a móvil (responsive) con jerarquía clara.
- Interactividad con efectos hover en botones e imágenes.

## 🛠️ Reglas para Cursor (Frontend)
- Cada servicio debe renderizarse como un componente independiente (`ServiceCard`).
- La cuadrícula de servicios debe ser un `Grid` con 1 columna en móvil, 2 en tablet, 3-4 en desktop.
- Los botones deben utilizar el componente `Button` de shadcn/ui con variante `primary`.
- Hero con fondo en gradiente oscuro, texto blanco, tipografía `text-4xl` y botón `xl`.
- CTA final debe ser un componente `CallToAction` reutilizable.
- Cada sección debe tener `id` para navegación interna (anchor links).
- Todos los textos deben estar en `i18n` para internacionalización futura.