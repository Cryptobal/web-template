'use client';

import { useState } from 'react';

type FormData = {
  nombre: string;
  apellido: string;
  email: string;
  celular: string;
  empresa: string;
  direccion: string;
  comuna?: string;
  ciudad?: string;
  web?: string;
  industria: string;
  detalle?: string;
};

const industrias = [
  'Bancos e Instituciones Financieras',
  'Construcción e Inmobiliarias',
  'Educación (Colegios y Universidades)',
  'Empresas y Oficinas',
  'Eventos y Espectáculos',
  'Gobierno y Entidades Públicas',
  'Hoteles y Turismo',
  'Industria y Manufactura',
  'Minera y Energía',
  'Residencial y Condominios',
  'Retail y Centros Comerciales',
  'Salud (Clínicas y Hospitales)',
  'Tecnología y Data Centers',
  'Transporte y Logística',
];

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    empresa: '',
    direccion: '',
    industria: '',
    detalle: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.nombre) newErrors.nombre = 'El nombre es requerido';
    if (!formData.apellido) newErrors.apellido = 'El apellido es requerido';
    
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.celular) {
      newErrors.celular = 'El celular es requerido';
    } else if (!/^[0-9]{9}$/.test(formData.celular)) {
      newErrors.celular = 'El celular debe tener 9 dígitos';
    }
    
    if (!formData.empresa) newErrors.empresa = 'La empresa es requerida';
    if (!formData.direccion) newErrors.direccion = 'La dirección es requerida';
    if (!formData.industria) newErrors.industria = 'La industria es requerida';
    
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Limpiar el error cuando el usuario ingresa datos
    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // En un entorno real, aquí se enviaría la data al webhook de Make.com
      const response = await fetch('https://hook.us1.make.com/230cn8ic3ifsa2uqqo7p6aiq9mmx341x', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        // Resetear el formulario
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          celular: '',
          empresa: '',
          direccion: '',
          industria: '',
          detalle: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {submitStatus === 'success' ? (
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-2">¡Gracias por contactarnos!</h3>
          <p className="text-green-600 mb-4">
            Hemos recibido tu solicitud. Nos pondremos en contacto contigo en las próximas 12 horas.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Enviar otra cotización
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Tus datos</h3>
            
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.nombre ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.nombre && <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>}
            </div>
            
            <div>
              <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                Apellido <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.apellido ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.apellido && <p className="mt-1 text-sm text-red-500">{errors.apellido}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="celular" className="block text-sm font-medium text-gray-700 mb-1">
                Celular (9 dígitos) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="celular"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                placeholder="912345678"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.celular ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.celular && <p className="mt-1 text-sm text-red-500">{errors.celular}</p>}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Información de la empresa</h3>
            
            <div>
              <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre de la empresa <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.empresa ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.empresa && <p className="mt-1 text-sm text-red-500">{errors.empresa}</p>}
            </div>
            
            <div>
              <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-1">
                Dirección <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.direccion ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.direccion && <p className="mt-1 text-sm text-red-500">{errors.direccion}</p>}
            </div>
            
            <div>
              <label htmlFor="web" className="block text-sm font-medium text-gray-700 mb-1">
                Página web (opcional)
              </label>
              <input
                type="url"
                id="web"
                name="web"
                value={formData.web || ''}
                onChange={handleChange}
                placeholder="https://www.ejemplo.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="industria" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de industria <span className="text-red-500">*</span>
              </label>
              <select
                id="industria"
                name="industria"
                value={formData.industria}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.industria ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Selecciona una industria</option>
                {industrias.map((industria) => (
                  <option key={industria} value={industria}>
                    {industria}
                  </option>
                ))}
              </select>
              {errors.industria && <p className="mt-1 text-sm text-red-500">{errors.industria}</p>}
            </div>
            
            <div>
              <label htmlFor="detalle" className="block text-sm font-medium text-gray-700 mb-1">
                Detalle de la cotización (opcional)
              </label>
              <textarea
                id="detalle"
                name="detalle"
                value={formData.detalle || ''}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe tu necesidad de seguridad..."
              />
            </div>
          </div>
          
          <div className="md:col-span-2 mt-6 text-center">
            <p className="text-gray-600 mb-4">
              Nos pondremos en contacto contigo rápidamente para ofrecerte la mejor solución de seguridad.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 bg-blue-800 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Cotización'}
            </button>
            
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-500">
                Ocurrió un error al enviar tu solicitud. Por favor intenta nuevamente.
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm; 