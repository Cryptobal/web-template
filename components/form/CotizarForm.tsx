# Ruta: /components/form/CotizarForm.tsx

'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'

// Esquema de validación
const schema = z.object({
  nombre: z.string().min(1),
  apellido: z.string().min(1),
  email: z.string().email(),
  celular: z.string().regex(/^\d{9}$/),
  empresa: z.string().min(1),
  direccion: z.string().min(1),
  pagina_web: z.string().url(),
  industria: z.string().min(1),
  detalle: z.string().min(1),
})

type FormData = z.infer<typeof schema>

export default function CotizarForm() {
  const [estado, setEstado] = useState<'idle' | 'enviando' | 'ok' | 'error'>('idle')

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
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
      {/* Campos */}
      {/* ... campos ya incluidos ... */}
    </form>
  )
}