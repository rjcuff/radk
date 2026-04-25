import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { RootProvider } from "fumadocs-ui/provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://radk.dev"),
  title: {
    default: "radk — Build interfaces faster. Own every pixel.",
    template: "%s | radk",
  },
  description:
    "Copy-paste React components built on Radix UI and Tailwind CSS. No npm packages, no lock-in. Just source code you own.",
  keywords: [
    "react components",
    "ui library",
    "tailwind css",
    "radix ui",
    "design system",
    "open source",
    "component library",
    "radk",
  ],
  authors: [{ name: "rjcuff", url: "https://github.com/rjcuff" }],
  creator: "rjcuff",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://radk.dev",
    siteName: "radk",
    title: "radk — Build interfaces faster. Own every pixel.",
    description:
      "Copy-paste React components built on Radix UI and Tailwind CSS. No npm packages, no lock-in. Just source code you own.",
  },
  twitter: {
    card: "summary_large_image",
    title: "radk — Build interfaces faster. Own every pixel.",
    description:
      "Copy-paste React components built on Radix UI and Tailwind CSS. No npm packages, no lock-in.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
