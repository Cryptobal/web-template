# Página: Cotizar Seguridad

## 🎯 Objetivo
Página dedicada a la conversión de visitantes en leads calificados. Debe inspirar confianza, explicar brevemente la propuesta de valor y presentar un formulario optimizado para SEO, velocidad y experiencia de usuario. Toda la información enviada se conecta vía webhook a Make.com.

---

## 🧩 Wireframe Estructural

### 1. Hero + Mensaje de Confianza
- H1: Solicita tu Cotización de Seguridad para Empresas
- Subtítulo: Guardias, Monitoreo, Tecnología y Soluciones Personalizadas.
- Texto adicional: “Nuestro equipo te responderá en menos de 12 horas.”
- Logos de clientes confiables (opcional)

### 2. Formulario de Cotización (izquierda)
- Nombre
- Apellido
- Email (validado)
- Celular (solo 9 dígitos, sin +56)

### 3. Información de Instalación (derecha)
- Nombre de empresa
- Dirección (autocompletado Google Maps → extrae comuna y ciudad)
- Página web
- Tipo de industria (select con opciones)
- Detalle de cotización (textarea)

### 4. CTA final
- Texto: “Nos pondremos en contacto contigo rápidamente.”
- Botón: [Enviar Cotización]

---

## ✍️ Contenido SEO Optimizado

### H1
**Cotiza Seguridad para tu Empresa en Menos de 1 Minuto**

### Subtítulo
¿Necesitas guardias, monitoreo o soluciones integradas? En Gard Security diseñamos planes de seguridad con tecnología e inteligencia operativa.

### Beneficios
- Respuesta en menos de 12 horas hábiles  
- Guardias con OS10 y cobertura nacional  
- Monitoreo 24/7 y reportería inteligente  
- Soluciones adaptadas a tu industria

### Meta descripción sugerida
“Cotiza tu plan de seguridad privada en Gard Security. Guardias, monitoreo y soluciones con inteligencia artificial. Formulario rápido, respuesta en menos de 12 horas.”

---

## 📬 Configuración Técnica del Formulario

### 🛰️ Webhook Make.com
**Endpoint:**  
`https://hook.us1.make.com/230cn8ic3ifsa2uqqo7p6aiq9mmx341x`

### 🛡️ Validaciones
- Email válido (formato RFC)
- Teléfono: solo 9 dígitos (ej: 912345678)
- Campos requeridos: nombre, apellido, email, celular, empresa, dirección, industria

### 🧠 Autocompletado Dirección
- Usar Google Maps Places API
- Extraer automáticamente `comuna` y `ciudad` del campo dirección

### 🧾 Tipos de industria (select):
- Bancos e Instituciones Financieras  
- Construcción e Inmobiliarias  
- Educación (Colegios y Universidades)  
- Empresas y Oficinas  
- Eventos y Espectáculos  
- Gobierno y Entidades Públicas  
- Hoteles y Turismo  
- Industria y Manufactura  
- Minera y Energía  
- Residencial y Condominios  
- Retail y Centros Comerciales  
- Salud (Clínicas y Hospitales)  
- Tecnología y Data Centers  
- Transporte y Logística  

---

## 🛠️ Reglas Cursor (Frontend)

- Framework: **React + TailwindCSS + React Hook Form + Yup**
- Página accesible vía `/cotizar`
- Envío de datos usando `fetch()` al webhook
- Mostrar feedback al usuario (éxito / error)
- Formularios responsive, mobile-first
- `<CotizarForm />` debe ser componente reutilizable
- Preparado para futura integración con CMS o CRM

---

## 🎨 Notas UI/UX

- Diseño en 2 columnas en desktop, 1 en mobile  
- Inputs con validaciones visuales claras  
- Envío sin recarga (SPA)  
- Mostrar elementos de confianza: escudo Gard, clientes, certificados  