import "./colors.css";
import './globals.css'
import classes from "./layout.module.css";
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { Header } from '@/components/layout/header'

const inter = Noto_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Amodio Pesce',
  description: 'Amodio portfolio',
  // TODO: Remove this when the website should be public indexable
  robots: "noindex",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${classes.layout}`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
