import type React from "react"
import { ThemeProvider } from "../components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Initialize the Inter font with all weights
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "Discord Justice",
    template: "%s | Discord Justice",
  },
  description: "Protecting Discord communities and fighting scammers with the power of justice!",
  icons: {
    icon: "https://github.com/hyuuuka/discord-justice-branding/blob/main/Enhanced-Logo-Transparent.png?raw=true",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head />
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
