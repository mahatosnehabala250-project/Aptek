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
  title: "APTEK | Outdoor Advertising & Branding Solutions",
  description:
    "APTEK is a premier outdoor advertising and branding company specializing in hoardings, flex printing, banner branding, and promotional advertising. Transform your brand visibility with India's trusted advertising partner.",
  keywords: [
    "APTEK",
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
  ],
  authors: [{ name: "APTEK Advertising" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "APTEK | Outdoor Advertising & Branding Solutions",
    description:
      "Premier outdoor advertising and branding company. Hoardings, flex printing, banner branding & more.",
    type: "website",
    siteName: "APTEK",
  },
  twitter: {
    card: "summary_large_image",
    title: "APTEK | Outdoor Advertising & Branding Solutions",
    description:
      "Premier outdoor advertising and branding company. Hoardings, flex printing, banner branding & more.",
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
        style={{ backgroundColor: "#0B0B0F", color: "#FFFFFF" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
