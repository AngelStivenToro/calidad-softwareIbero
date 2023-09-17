import Nav from "@/components/Nav";
import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calidad de desarrollo de aplicaciones',
  description: 'Blog de desarrollo de software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="body">
      <Nav/>
        <body className={inter.className}>{children}</body>
    </main>
  )
}
