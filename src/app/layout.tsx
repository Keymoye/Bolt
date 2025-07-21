import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seltop - Minecraft Graphic Designer',
  description: 'Professional Minecraft graphic designer specializing in custom builds, textures, and visual content creation.',
  keywords: 'minecraft, graphic design, 3d modeling, textures, builds',
  authors: [{ name: 'Seltop' }],
  openGraph: {
    title: 'Seltop - Minecraft Graphic Designer',
    description: 'Professional Minecraft graphic designer specializing in custom builds, textures, and visual content creation.',
    type: 'website',
  },
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