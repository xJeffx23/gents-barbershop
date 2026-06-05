import type { Metadata } from "next"
import { Inter_Tight } from "next/font/google"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  title: "GENTS BARBERSHOP — Estilo, precisión y presencia",
  description: "Barbería premium en Rohrmoser, San José. Cortes, barba, afeitado clásico y grooming para el hombre moderno.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={interTight.variable}>
      <body>{children}</body>
    </html>
  )
}
