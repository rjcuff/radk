import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { RootProvider } from "fumadocs-ui/provider"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://radk.sh"),
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
    url: "https://radk.sh",
    siteName: "radk",
    title: "radk — Build beautiful interfaces faster. Own every pixel.",
    description:
      "Copy-paste React components built on Radix UI and Tailwind CSS. No npm packages, no lock-in. Just source code you own.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "radk — Build beautiful interfaces faster. Own every pixel.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "radk — Build beautiful interfaces faster. Own every pixel.",
    description:
      "Copy-paste React components built on Radix UI and Tailwind CSS. No npm packages, no lock-in.",
    images: ["/og.png"],
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
      <head>
        {/* Prevent flash of wrong color theme on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('radk-color-theme');if(t&&t!=='pink')document.documentElement.setAttribute('data-theme-color',t);}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-dvh bg-background font-sans antialiased">
        <RootProvider>
          {children}
        </RootProvider>
        <Analytics />
      </body>
    </html>
  )
}
