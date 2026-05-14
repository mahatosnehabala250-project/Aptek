import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APTEK MEDIA | A Complete AD Publicity - Outdoor Advertising & Branding Solutions",
  description:
    "APTEK MEDIA - A Complete AD Publicity. Premier outdoor advertising and branding company specializing in hoardings, flex printing, banner branding, and promotional advertising across India.",
  keywords: [
    "APTEK Media",
    "APTEK",
    "A Complete AD Publicity",
    "outdoor advertising",
    "hoardings",
    "billboards",
    "flex printing",
    "banner branding",
    "promotional advertising",
    "branding solutions",
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
    title: "APTEK MEDIA | A Complete AD Publicity",
    description:
      "APTEK MEDIA - A Complete AD Publicity. Premier outdoor advertising, hoardings, flex printing, banner branding & more.",
    type: "website",
    siteName: "APTEK MEDIA",
  },
  twitter: {
    card: "summary_large_image",
    title: "APTEK MEDIA | A Complete AD Publicity",
    description:
      "APTEK MEDIA - A Complete AD Publicity. Premier outdoor advertising & branding company.",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
