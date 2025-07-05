import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mautik - Crochet & Bisutería Artesanal',
  description: 'Arte hecho a mano desde Panamá. Crochet y bisutería artesanal con amor.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
