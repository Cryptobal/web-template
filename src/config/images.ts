/**
 * Configuración centralizada para las imágenes de Cloudflare Images
 * 
 * Este archivo contiene los IDs de las imágenes utilizadas en el sitio web.
 * Las URLs completas, descripciones y textos alternativos se documentan en:
 * /docs/Páginas/smd-gard.md
 * 
 * Uso recomendado:
 * 
 * import { CLOUDFLARE_IMAGES } from '@/config/images';
 * import { CloudflareImage } from '@/components/CloudflareImage';
 * 
 * <CloudflareImage 
 *   src={CLOUDFLARE_IMAGES.logo_principal} 
 *   alt="Logo Gard Security" 
 * />
 */

// ID de la cuenta de Cloudflare Images
export const CLOUDFLARE_ACCOUNT_HASH = 'gGw8cfmEZedi85dYm6qcFw';

// Variante por defecto para imágenes públicas
export const DEFAULT_VARIANT = 'public';

// Función para generar URLs de Cloudflare Images
export const getCloudflareImageUrl = (imageId: string, variant = DEFAULT_VARIANT) => {
  return `https://imagedelivery.net/${CLOUDFLARE_ACCOUNT_HASH}/${imageId}/${variant}`;
};

/**
 * CATÁLOGO CENTRALIZADO DE IDs DE IMÁGENES
 * Organizado por páginas y secciones, siguiendo la estructura de smd-gard.md
 */
export const CLOUDFLARE_IMAGE_IDS = {
  // ==========================================================================
  // PÁGINA: INICIO (/inicio)
  // ==========================================================================
  
  // Hero Principal
  hero_home: '7e313483-291e-47df-8c0a-12e762231600', // Seguridad profesional vigilando instalaciones
  
  // Sección de Servicios
  servicio_guardias: '8bc35c05-93da-4a2a-f46e-a926bd422d00', // Guardia de seguridad uniformado
  servicio_escoltas: 'cd3366cf-919b-4723-a8eb-6a287836b600', // Vehículo de escolta VIP
  servicio_drones: 'b79c0d5f-1d4b-4591-2ccf-694f9afcdc00', // Dron sobrevolando zona minera
  servicio_electronica: '44f87a3b-0d9c-48c7-f15e-1e8344960000', // Panel de control con monitoreo
  servicio_monitoreo: '4a167a19-1ef9-430d-ec5e-ffbbc3c35300', // Sala de monitoreo con pantallas
  
  // ==========================================================================
  // PÁGINA: SERVICIOS (/servicios)
  // ==========================================================================
  
  // Hero Principal
  hero_servicios: '5eea1064-8a2d-4e8b-5606-d28775467a00', // Panorámica de servicios integrados
  
  // ==========================================================================
  // PÁGINA: SERVICIO GUARDIAS DE SEGURIDAD (/servicio-guardias-seguridad)
  // ==========================================================================
  
  // Hero Principal
  hero_guardias: 'e01db9f7-4cf6-4cac-cf83-c93215097200', // Guardias uniformados en posición profesional
  
  // Galería de Servicio
  servicio_guardias_1: '5b95423f-4c59-4205-7b90-52e0667ca200', // Guardias en entrada de edificio
  servicio_guardias_2: 'fb852267-cb0c-4e3e-fa90-136c201e7000', // Guardias patrullando
  servicio_guardias_3: '04e7aafd-831d-4b6f-666c-116605cc4400', // Guardias con parkas
  
  // ==========================================================================
  // PÁGINA: SERVICIO SEGURIDAD ELECTRÓNICA (/servicio-seguridad-electronica)
  // ==========================================================================
  
  // Hero Principal
  hero_electronica: '237c574e-8997-4f6b-47fa-6c3ebe057200', // Centro de monitoreo o tecnología de seguridad
  
  // Galería de Servicio
  servicio_electronica_1: '7f152778-b285-4cbe-7aba-a77620455d00', // Sistemas CCTV instalados
  servicio_electronica_2: 'c2aebfd4-132d-4a44-21d0-469e834e5900', // Control de acceso biométrico
  
  // ==========================================================================
  // PÁGINA: SERVICIO CENTRAL DE MONITOREO (/servicio-central-monitoreo)
  // ==========================================================================
  
  // Hero Principal
  hero_monitoreo: '4a5d0b79-8f81-4387-54b5-dc9956268400', // Panel de control con múltiples pantallas
  
  // Galería de Servicio
  servicio_monitoreo_1: '4be6a0d1-a23a-49fc-f2a5-aa24df947700', // Central de monitoreo en operación
  servicio_monitoreo_2: '165c106f-ae53-496f-d8f9-5d9f10aeb500', // Operador verificando alertas
  
  // Sistema de Reportería
  sistema_reporteria: 'd0c7fd28-f94f-4138-d307-da723130fd00', // Interfaz del sistema de reportes
  
  // ==========================================================================
  // PÁGINA: SERVICIO DRONES DE SEGURIDAD (/servicio-drones-seguridad)
  // ==========================================================================
  
  // Hero Principal
  hero_drones: 'be6ef2e1-98d5-4b3c-cd50-ca77cd6f0e00', // Dron de vigilancia sobre propiedad
  
  // Galería de Servicio
  servicio_drones_1: '79e59b55-d3cb-4cee-1f58-d5512b7d0000', // Dron vigilando perímetro
  servicio_drones_2: '330ea24f-8216-48e2-ea7f-b33e24815b00', // Operador controlando dron
  
  // ==========================================================================
  // PÁGINA: INDUSTRIAS (/industrias)
  // ==========================================================================
  
  // Hero Principal
  hero_industrias: '4a46b63d-0e1b-4640-b95c-7f040a288c00', // Instalación industrial con seguridad
  
  // Sectores Industriales
  industria_salud: '71cb7755-9445-4def-6beb-7c69d2e5e100', // Seguridad en entorno hospitalario
  industria_construccion: 'c7037bb7-16a8-4d88-882b-c3b7690b1400', // Seguridad en obra
  industria_educacion: 'ba7a4916-54d2-42c8-bbc1-8ceda1cf7d00', // Seguridad en entorno educativo
  industria_bodegas: '683f9081-3573-4e90-e733-5c1507350900', // Seguridad en bodegas 
  industria_mineria: '77e4d99e-a497-44ad-6c70-88cc1d7f2e00', // Seguridad en operación minera
  industria_retail: '450beb48-762f-457b-59b4-2a313a198f00', // Seguridad en retail
  industria_eventos: '5c97d40c-bf3c-4413-6ead-c15f7c9aa100', // Seguridad en eventos
  
  // ==========================================================================
  // PÁGINA: TECNOLOGÍAS (/tecnologias)
  // ==========================================================================
  
  // Hero Principal
  hero_tecnologias: '678cad4f-9b0d-49e6-3bbd-0d747a2fdc00', // Tecnología de seguridad avanzada
  
  // ==========================================================================
  // PÁGINA: QUIENES SOMOS (/quienes-somos)
  // ==========================================================================
  
  // Hero Principal
  hero_quienes_somos: '7d33f2ab-1ad7-4f8d-11c3-e82a0b54db00', // Equipo profesional o sede
  
  // ==========================================================================
  // PÁGINA: BLOG (/blog)
  // ==========================================================================
  
  // Hero Principal
  hero_blog: '68a88111-b8a7-4e5b-0baa-4e81cb630d00', // Imagen de conocimiento sobre seguridad
  
  // Placeholder para artículos
  blog_placeholder: '68a88111-b8a7-4e5b-0baa-4e81cb630d00', // Mismo que hero_blog
  
  // ==========================================================================
  // PÁGINA: SOSTENIBILIDAD (/sostenibilidad)
  // ==========================================================================
  
  // Hero Principal
  hero_sostenibilidad: '1b09642f-da1e-4247-52c6-acd8362d1a00', // Imagen de sostenibilidad
  
  // ==========================================================================
  // PÁGINA: COTIZAR (/cotizar)
  // ==========================================================================
  
  // Hero Principal
  hero_cotizar: '428c1028-8f6b-455a-e110-38421eeb5700', // Atención al cliente profesional
  
  // ==========================================================================
  // IDENTIDAD CORPORATIVA (Transversal)
  // ==========================================================================
  
  // Logos Corporativos
  logo_principal: '7661cf51-c66b-4419-9229-e6e50f76ff00', // Logo completo horizontal
  logo_small: '24172844-496d-4cd1-4ef0-894b5574e700', // Versión compacta del logo
  
  // Favicons
  favicon: '89a214ef-5112-4c4e-912e-4f56514c1600', // Versión cuadrada 32x32 o 64x64
  favicon_large: '195f82cb-9a5e-4964-6fb5-ea43da47b000', // Versión 512x512 para PWA
  
  // ==========================================================================
  // CLIENTES/TESTIMONIOS (Transversal)
  // ==========================================================================
  
  // Logos de Clientes
  cliente_polpaico: 'eeaf472c-ab11-448b-f5e2-d18415147800', // Logo Polpaico
  cliente_zerando: 'bee9d371-805c-4029-59f6-93cdfd916000', // Logo Zerando
  cliente_dhemax: '7db0cea1-4eab-4c2d-65a8-6bdd50918800', // Logo Dhemax
  cliente_transmat: '732f1a26-ecdd-4dbd-cae3-f62b3f212700', // Logo Transmat
  cliente_tritec: '068a0aaa-47f0-428c-bdf0-b8f7f780cb00', // Logo Tritec
  cliente_tattersall: 'bf9629aa-071f-48e3-cf86-a9a29203fd00', // Logo Tattersall
  cliente_forestal_sb: '10786958-2ce6-4352-ccc2-2c6f45c6a100', // Logo Forestal Santa Blanca
  cliente_gl_events: '62c92cfb-7c18-4699-2433-552682479a00', // Logo GL Events
  cliente_ecars: 'd5c3a497-e5de-416c-de6b-95ade83f9900', // Logo eCars
  cliente_chanaral: '72310c38-9a82-4923-bd28-800ba8d9ef00', // Logo Delegación Chañaral
  cliente_bbosch: '0b1d6037-3672-4cd9-1c72-6ba511bc5100', // Logo Bbosch
  
  // ==========================================================================
  // LEGACY (mantener por compatibilidad)
  // ==========================================================================
  
  // Las siguientes claves se mantienen por compatibilidad con código existente
  // Preferir usar las nuevas claves más arriba
  guardias_hero: '0d7c54d4-e5ff-40d6-8674-e3b4ea777d00', // DEPRECATED: Usar hero_guardias
  seguridad_electronica: 'b1d74aae-6878-42a9-7ee1-367117a84f00', // DEPRECATED: Usar servicio_electronica 
  drones_seguridad: 'cd13c2a6-3fea-40ce-4481-c708f3ee6e00', // DEPRECATED: Usar servicio_drones
  
  // Las siguientes claves numéricas se reemplazan por nombres descriptivos
  cliente_1: 'eeaf472c-ab11-448b-f5e2-d18415147800', // DEPRECATED: Usar cliente_polpaico
  cliente_2: 'bee9d371-805c-4029-59f6-93cdfd916000', // DEPRECATED: Usar cliente_zerando
  cliente_3: '7db0cea1-4eab-4c2d-65a8-6bdd50918800', // DEPRECATED: Usar cliente_dhemax
  cliente_4: '732f1a26-ecdd-4dbd-cae3-f62b3f212700', // DEPRECATED: Usar cliente_transmat
  cliente_5: '068a0aaa-47f0-428c-bdf0-b8f7f780cb00', // DEPRECATED: Usar cliente_tritec
  cliente_6: 'bf9629aa-071f-48e3-cf86-a9a29203fd00', // DEPRECATED: Usar cliente_tattersall
  cliente_7: '10786958-2ce6-4352-ccc2-2c6f45c6a100', // DEPRECATED: Usar cliente_forestal_sb
  cliente_8: '62c92cfb-7c18-4699-2433-552682479a00', // DEPRECATED: Usar cliente_gl_events
  cliente_9: 'd5c3a497-e5de-416c-de6b-95ade83f9900', // DEPRECATED: Usar cliente_ecars
  cliente_10: '72310c38-9a82-4923-bd28-800ba8d9ef00', // DEPRECATED: Usar cliente_chanaral
};

/**
 * URLs completas para usar directamente en componentes
 * Este objeto se genera automáticamente a partir de CLOUDFLARE_IMAGE_IDS
 * 
 * Ejemplo: CLOUDFLARE_IMAGES.logo_principal retorna la URL completa
 */
export const CLOUDFLARE_IMAGES = Object.fromEntries(
  Object.entries(CLOUDFLARE_IMAGE_IDS).map(
    ([key, id]) => [key, getCloudflareImageUrl(id)]
  )
) as {
  [K in keyof typeof CLOUDFLARE_IMAGE_IDS]: string;
}; 