'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'

const schema = z.object({
  nombre: z.string().min(1, 'Requerido'),
  apellido: z.string().min(1, 'Requerido'),
  email: z.string().email('Email inválido'),
  celular: z
    .string()
    .regex(/^\d{9}$/, 'Debe tener 9 dígitos (sin +56)'),
  empresa: z.string().min(1, 'Requerido'),
  direccion: z.string().min(1, 'Requerido'),
  pagina_web: z.string().url('URL inválida'),
  industria: z.string().min(1, 'Requerido'),
  detalle: z.string().min(1, 'Describe tus necesidades'),
})

type FormData = z.infer<typeof schema>

export default function CotizarForm() {
  const [estado, setEstado] = useState<'idle' | 'enviando' | 'ok' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setEstado('enviando')

    try {
      const res = await fetch('https://hook.us1.make.com/230cn8ic3ifsa2uqqo7p6aiq9mmx341x', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setEstado('ok')
        reset()
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold">Solicita tu Cotización</h2>

      {/* Nombre y Apellido */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input {...register('nombre')} className="input" />
          {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Apellido</label>
          <input {...register('apellido')} className="input" />
          {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido.message}</p>}
        </div>
      </div>

      {/* Email y Celular */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input {...register('email')} type="email" className="input" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Celular (sin +56)</label>
          <input {...register('celular')} className="input" />
          {errors.celular && <p className="text-red-500 text-sm">{errors.celular.message}</p>}
        </div>
      </div>

      {/* Empresa y Dirección */}
      <div>
        <label className="block text-sm font-medium">Empresa</label>
        <input {...register('empresa')} className="input" />
        {errors.empresa && <p className="text-red-500 text-sm">{errors.empresa.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Dirección</label>
        <input {...register('direccion')} className="input" />
        {errors.direccion && <p className="text-red-500 text-sm">{errors.direccion.message}</p>}
      </div>

      {/* Página Web */}
      <div>
        <label className="block text-sm font-medium">Página Web</label>
        <input {...register('pagina_web')} className="input" />
        {errors.pagina_web && <p className="text-red-500 text-sm">{errors.pagina_web.message}</p>}
      </div>

      {/* Industria */}
      <div>
        <label className="block text-sm font-medium">Industria</label>
        <select {...register('industria')} className="input">
          <option value="">Selecciona</option>
          <option value="Retail">Retail</option>
          <option value="Salud">Salud</option>
          <option value="Minería">Minería</option>
          <option value="Banca">Banca</option>
          <option value="Construcción">Construcción</option>
        </select>
        {errors.industria && <p className="text-red-500 text-sm">{errors.industria.message}</p>}
      </div>

      {/* Detalle */}
      <div>
        <label className="block text-sm font-medium">Detalle de la cotización</label>
        <textarea {...register('detalle')} rows={4} className="input" />
        {errors.detalle && <p className="text-red-500 text-sm">{errors.detalle.message}</p>}
      </div>

      {/* Estado */}
      {estado === 'ok' && <p className="text-green-600 text-sm">Cotización enviada correctamente.</p>}
      {estado === 'error' && <p className="text-red-600 text-sm">Error al enviar. Intenta de nuevo.</p>}

      <button type="submit" className="bg-black text-white px-6 py-2 rounded-full font-semibold" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? 'Enviando...' : 'Enviar Cotización'}
      </button>
    </form>
  )
}