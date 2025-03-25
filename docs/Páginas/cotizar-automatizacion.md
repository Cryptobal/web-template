# Página: Cotizar Solución de Automatización

## 🎯 Objetivo
Convertir visitantes en leads calificados interesados en soluciones de automatización, integración de sistemas o inteligencia artificial. El formulario debe ser rápido, confiable y transmitir experiencia. Toda la información se conecta a Make.com para integración con CRM u otras apps.

---

## 🧩 Wireframe Estructural

### 1. Hero + Mensaje de Confianza
- H1: Cotiza tu Solución de Automatización para Empresas
- Subtítulo: Automatización, Integración de Sistemas e Inteligencia Artificial aplicada a tu negocio.
- Texto adicional: “Te contactaremos en menos de 24 horas con una propuesta personalizada.”
- Logos o frases de validación social (opcional)

### 2. Formulario de Cotización (izquierda)
- Nombre
- Apellido
- Email (validado)
- Teléfono (solo 9 dígitos, sin +56)

### 3. Información de Empresa / Proyecto (derecha)
- Nombre de empresa
- Sitio web de la empresa
- Industria (select con opciones)
- ¿Qué quieres automatizar o integrar? (textarea)
- ¿Tienes sistemas existentes que usamos como base? (checkbox sí/no + input opcional)

### 4. CTA final
- Texto: “Un experto se pondrá en contacto contigo muy pronto.”
- Botón: [Solicitar Cotización]

---

## ✍️ Contenido SEO Optimizado

### H1
**Cotiza tu Proyecto de Automatización en Menos de 1 Minuto**

### Subtítulo
Ofrecemos soluciones de automatización, integración de sistemas e inteligencia artificial adaptadas a empresas de todos los rubros. Rápido, personalizado y con enfoque en resultados.

### Beneficios
- Respuesta en menos de 24 horas  
- Automatizaciones a medida, sin plantillas genéricas  
- Integración con tus sistemas actuales (ERP, CRM, etc.)  
- Expertos reales con experiencia empresarial y técnica

### Meta descripción sugerida
“Cotiza tu solución de automatización para empresas. Aplicaciones, IA, chatbots e integración de sistemas. Formulario rápido, propuesta personalizada en menos de 24 horas.”

---

## 📬 Configuración Técnica del Formulario

### 🛰️ Webhook Make.com
**Endpoint:**  
`https://hook.us1.make.com/230cn8ic3ifsa2uqqo7p6aiq9mmx341x`

### 🛡️ Validaciones
- Email válido (formato RFC)
- Teléfono: solo 9 dígitos
- Campos requeridos: nombre, apellido, email, teléfono, empresa, mensaje

### 🧠 Campos inteligentes
- Select de industria (ver abajo)
- Campo “¿Qué quieres automatizar?” debe ser textarea largo
- Si selecciona “Sí” en sistemas existentes, mostrar campo libre para escribir cuáles

### 🧾 Tipos de industria (select):
- Retail  
- Seguridad privada  
- Educación  
- Salud  
- Servicios profesionales  
- Construcción e inmobiliaria  
- Minería e industria  
- Transporte y logística  
- Gobierno o instituciones públicas  
- Otra

---

## 🛠️ Reglas Cursor (Frontend)

- Framework: **React + TailwindCSS + React Hook Form + Yup**
- Página accesible vía `/cotizar`
- Envío de datos usando `fetch()` al webhook
- Mostrar feedback al usuario (éxito / error)
- Formularios responsive, mobile-first
- `<CotizarFormAutomatizacion />` debe ser componente reutilizable
- Preparado para futura integración con CRM / CMS

---

## 🎨 Notas UI/UX

- Diseño tipo dos columnas en desktop, una en mobile  
- Inputs con validación visual y UX clara  
- Envío sin recarga (SPA)  
- Mostrar texto de confianza o logos (clientes, casos de éxito)  
- Adaptar el tono visual al branding del sitio (tecnológico, limpio, profesional)