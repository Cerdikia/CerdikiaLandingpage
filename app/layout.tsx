import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Cerdikia - Aplikasi Pembelajaran Interaktif untuk Anak",
  description:
    "Kumpulkan ilmu, naik level, dan jadilah juara masa depan dengan Cerdikia! Aplikasi pembelajaran yang menyenangkan dengan sistem gamifikasi.",
  keywords: "aplikasi belajar, edukasi anak, gamifikasi, pembelajaran interaktif, cerdikia",
  authors: [{ name: "Cerdikia Team" }],
  openGraph: {
    title: "Cerdikia - Aplikasi Pembelajaran Interaktif untuk Anak",
    description: "Kumpulkan ilmu, naik level, dan jadilah juara masa depan dengan Cerdikia!",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* Add your SVG favicon */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
