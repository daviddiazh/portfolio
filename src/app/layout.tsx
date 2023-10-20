import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'David Diaz | Portafolio',
  description: 'Portafolio de David Diaz (Software Developer) de Medellin, Colombia.',
  authors: {
    name: 'David Diaz H.',
    url: 'https://www.linkedin.com/in/david-diaz-herrera-2777ba1a8/',
  },
  keywords: ['Portafolio', 'David', 'Diaz', 'Herrera', 'David Diaz', 'React', 'React Native', 'Nestjs', 'Software', 'Developer', 'Software Developer', 'Full Stack', 'Medellin', 'Colombia', 'Medellin, Colombia'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
