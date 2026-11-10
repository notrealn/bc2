import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { NavBar } from '../components/navbar'
import { Footer } from '@/components/footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'GIG FOREVER',
  description: '主愛粉絲團/GIG FOREVER',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="zh-Hant">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[max-content_1fr_max-content] min-h-screen`}
        >
          <header>
            <NavBar />
          </header>
          <div>{children}</div>
          <Footer />
        </body>
      </html>
    </>
  )
}
