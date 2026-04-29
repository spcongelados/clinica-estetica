import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { NoiseOverlay } from "@/components/NoiseOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Valeria Montserrat — Medicina Estética",
  description:
    "Centro líder en medicina estética facial y corporal. Tecnología avanzada, resultados naturales, atención personalizada.",
  openGraph: {
    title: "Dra. Valeria Montserrat — Medicina Estética",
    description:
      "Centro líder en medicina estética facial y corporal. Tecnología avanzada, resultados naturales, atención personalizada.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <NoiseOverlay />
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
