import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Outfit font config
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // jo chahiye add kar lo
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
      <body className={`${outfit.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
