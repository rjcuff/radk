import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "mono-ui — Build interfaces faster. Own every pixel.",
    template: "%s | mono-ui",
  },
  description:
    "Beautifully crafted components built on Radix UI and Tailwind CSS. Copy the source into your project — no packages, no lock-in, full control.",
  keywords: ["ui components", "react", "tailwind", "radix ui", "design system"],
  openGraph: {
    title: "mono-ui",
    description: "Beautifully crafted components you own.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-dvh bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
