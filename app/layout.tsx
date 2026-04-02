import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "True Terrain Services | Queen Creek, AZ Landscaping",
  description:
    "Professional landscaping, rock spreading, irrigation, hardscape, pavers, artificial turf, and more. Locally owned in Queen Creek, AZ. Free estimates. Call (480) 417-8385.",
  keywords:
    "landscaping Queen Creek AZ, rock spreading, irrigation repair, hardscape, pavers, artificial turf, junk removal, East Valley landscaping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
