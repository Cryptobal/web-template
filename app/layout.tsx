import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web Template',
  description: 'Template base para sitios web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
} 