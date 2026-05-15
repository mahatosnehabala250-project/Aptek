import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import PageLoader from "@/components/aptek/PageLoader";
import ScrollProgress from "@/components/aptek/ScrollProgress";
import Navbar from "@/components/aptek/Navbar";
import Footer from "@/components/aptek/Footer";
import WhatsAppButton from "@/components/aptek/WhatsAppButton";
import FloatingCTA from "@/components/aptek/FloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APTEK MEDIA | Outdoor Advertising in Purulia & West Bengal | Hoardings, Flex Printing",
  description:
    "APTEK MEDIA - Trusted outdoor advertising partner in Purulia & West Bengal since 2016. Specialists in hoardings, flex printing, shop branding, billboard installation, event branding & LED sign boards.",
  keywords: [
    "APTEK Media",
    "APTEK",
    "A Complete AD Publicity",
    "outdoor advertising",
    "hoardings",
    "billboards",
    "flex printing",
    "banner advertising",
    "promotional advertising",
    "advertising solutions",
    "India advertising",
    "commercial advertising",
    "DPS hoardings",
    "PNB advertising",
    "Shyam Steel advertising",
  ],
  authors: [{ name: "APTEK Media" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "APTEK MEDIA | Outdoor Advertising in Purulia & West Bengal",
    description:
      "Purulia & West Bengal's trusted outdoor advertising partner since 2016 — hoardings, flex printing, shop branding & more.",
    type: "website",
    siteName: "APTEK MEDIA",
  },
  twitter: {
    card: "summary_large_image",
    title: "APTEK MEDIA | Outdoor Advertising in Purulia & West Bengal",
    description:
      "Trusted outdoor advertising partner in Purulia & West Bengal since 2016.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#FFFFFF", color: "#1A1A2E" }}
      >
        <PageLoader />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <FloatingCTA />
        <Toaster />
      </body>
    </html>
  );
}
