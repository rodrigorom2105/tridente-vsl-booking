import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo Financiero Tridente",
  description:
    "Landing VSL para aplicar al equipo remoto de Grupo Financiero Tridente con video y calendario de GoHighLevel.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/tridente-favicon.png", type: "image/png" },
    ],
    apple: "/tridente-favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black">{children}</body>
    </html>
  );
}
