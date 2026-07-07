import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shams Agency",
    template: "%s | Shams Agency",
  },
  description: "Production-ready foundation for the Shams Agency website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-off-white text-navy">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
