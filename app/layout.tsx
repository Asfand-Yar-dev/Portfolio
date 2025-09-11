import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";


// Outfit font config
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap", // Add display swap for better font loading
});

export const metadata: Metadata = {
  title: "Asfand's Portfolio",
  icons: {
    icon: "/icon2.png",
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
        <link rel="preload" as="image" href="/icon2.png" />
      </head>
      <body className={`${outfit.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
