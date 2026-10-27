import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Caveat } from 'next/font/google'
import './globals.css'

const handwriting = Caveat({ subsets: ['latin'], weight: '400', variable: '--font-handwriting' })

export const metadata: Metadata = {
  title: 'Ark-Y — Lyricist & AI Songwriter',
  description: 'Original lyrics in English, Hindi, and Kannada. Ark-Y creates songs with SUNO, with original lyrics at the heart of every song.',
  generator: 'v0.app',
  icons: {
    icon: { url: '/icon.svg', type: 'image/svg+xml' },
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#071316',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${handwriting.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
