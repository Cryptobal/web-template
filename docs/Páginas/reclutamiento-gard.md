# Página: Reclutamiento

## 🎯 Objetivo
Atraer y captar a los mejores guardias de seguridad mediante una página que transmita profesionalismo, ética, claridad del proceso, beneficios y una cultura de excelencia. Esta página será una herramienta estratégica para reducir la rotación y mejorar la calidad operativa desde el primer contacto.

## 🧩 Wireframe Estructural

- **Hero principal**
  - Imagen de guardias profesionales + frase potente
  - CTA “Postula Aquí”

- **Sección 1: ¿A quién buscamos?**
  - Texto que describa el perfil ideal
  - Lista de cualidades: responsabilidad, compromiso, OS10 al día, disponibilidad

- **Sección 2: Proceso de Reclutamiento**
  - 6 pasos en formato visual:
    1. Identificación de necesidades del cliente
    2. Filtro documental inicial
    3. Evaluación psicológica y clínica
    4. Verificación de antecedentes
    5. Entrevista personal
    6. Capacitación inicial y asignación

- **Sección 3: Beneficios de trabajar en Gard**
  - Seguridad laboral, pagos puntuales, formación continua, oportunidades de crecimiento

- **Sección 4: Testimonios o cultura**
  - Frases breves de guardias reales o valores internos

- **Formulario**
  - Nombre, RUT, Email, Teléfono, Región, Certificado OS10 (sí/no), Subir CV

- **CTA final**
  - “Sé parte del equipo Gard”

## ✍️ Contenido SEO Optimizado

### Hero
**Título:**  
Sé parte de Gard Security: Seguridad con Compromiso

**Subtítulo:**  
Buscamos a los mejores guardias de seguridad. Si tienes vocación de servicio, formación OS10 y pasión por proteger, te queremos con nosotros.

**Botón:**  
[Postula Aquí]

### ¿A quién buscamos?

En Gard Security seleccionamos a personas comprometidas, íntegras y capacitadas. Nuestro equipo humano es el pilar de nuestra excelencia operativa.

**Perfil ideal:**
- Certificado OS10 al día
- Buena presencia y comunicación
- Compromiso y puntualidad
- Experiencia en seguridad (no excluyente)
- Disponibilidad para turnos rotativos

### Proceso de Reclutamiento

Nuestro proceso garantiza excelencia desde el primer paso. Nos aseguramos de contratar a los mejores para entregar el mejor servicio.

1. **Identificación de necesidad específica**
2. **Filtro documental** (OS10, antecedentes, referencias)
3. **Evaluación psicológica y clínica**
4. **Verificación de antecedentes**
5. **Entrevista personal con Recursos Humanos**
6. **Capacitación inicial y asignación a instalación**

### Beneficios de trabajar en Gard

- 🛡️ Contrato formal y estabilidad laboral
- 💸 Pagos puntuales y correctos
- 🎓 Capacitación constante (presencial y online)
- 🧩 Posibilidades de crecimiento profesional
- 🤝 Excelente clima laboral y trato respetuoso

### Formulario de Postulación

[Nombre] [RUT]  
[Email] [Teléfono]  
[Región] [¿Tiene OS10 vigente?]  
[Subir CV PDF]  
[Botón: Enviar Postulación]

## 📈 Notas SEO

**Palabras clave:**  
`trabajo guardia de seguridad`, `postular empresa seguridad`, `empresa busca guardias`, `reclutamiento seguridad privada`, `empleo seguridad Chile`, `trabajo con OS10`, `guardias con curso OS10`

**Meta título sugerido:**  
`Trabaja con Nosotros | Gard Security`

**Meta descripción:**  
`Postula para ser guardia de seguridad en Gard Security. Ofrecemos estabilidad laboral, pagos puntuales, formación constante y un equipo de excelencia. Súmate a una empresa líder en seguridad privada.`

## 🎨 Notas UI/UX

- Visual tipo onboarding: mostrar el camino al trabajo con íconos claros
- Hero con imagen real de guardias (no stock genérico)
- Componentes visuales para los pasos del proceso
- Botón de postulación siempre visible (sticky en móvil)
- Formulario breve, responsivo y con validación

## 🛠️ Reglas para Cursor (Frontend)

- Ruta: /reclutamiento
- Estructura modular con `<Hero>`, `<StepsTimeline>`, `<ProfileChecklist>`, `<BenefitsGrid>`, `<Testimonios>`, `<RecruitmentForm>`
- Botón "Postula Aquí" debe hacer scroll al formulario
- Usar animaciones tipo `fade-in` en cada bloque
- Adaptado 100% a móviles
- Validación en formulario para tipo de archivo (solo PDF), campos obligatorios
- Enviar datos a endpoint /api/postulaciones
- Usar íconos modernos para beneficios y pasos
- Incluir componente para testimonios o frases destacadas