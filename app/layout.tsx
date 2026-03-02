import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PointerTrail from "@/components/PointerTrail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "DS Biomedical & IT Services | Biomedical & IT Support",
  description: "Professional biomedical equipment maintenance, repair, calibration, AMC support, and IT solutions by Senior Biomedical Engineer Debojyoti Saha.",
  keywords: "biomedical engineer, medical equipment service, healthcare, maintenance, repair, calibration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <PointerTrail />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
