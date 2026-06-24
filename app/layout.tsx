import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";


// Outfit font config
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap", // Add display swap for better font loading
});

export const metadata: Metadata = {
  title: "Asfand Yar | Gen AI Backend Developer",
  description: "Portfolio of Asfand Yar, a Gen AI Backend Developer specializing in LLMs, RAG pipelines, Prompt Engineering, and Python backend systems.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/logo.svg" />
      </head>
      <body className={`${outfit.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
