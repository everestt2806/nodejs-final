import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon-16x16.ico', sizes: '16x16' },
      { url: '/favicon-32x32.ico', sizes: '32x32' },
      { url: '/favicon-64x64.ico', sizes: '64x64' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

