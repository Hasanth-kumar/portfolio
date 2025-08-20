import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";

import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Hasanth Kumar Majji - Software Developer Portfolio",
  description: "Full-stack software developer specializing in React, Next.js, Spring Boot, and modern web technologies. View my projects and get in touch for collaborations.",
  keywords: ["software developer", "full-stack developer", "React developer", "Next.js", "Spring Boot", "portfolio", "web development"],
  authors: [{ name: "Hasanth Kumar Majji" }],
  creator: "Hasanth Kumar Majji",
  publisher: "Hasanth Kumar Majji",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hasanth Kumar Majji Portfolio",
    title: "Hasanth Kumar Majji - Software Developer Portfolio",
    description: "Full-stack software developer specializing in React, Next.js, Spring Boot, and modern web technologies. View my projects and get in touch for collaborations.",
  },
  twitter: {
    card: "summary",
    title: "Hasanth Kumar Majji - Software Developer Portfolio",
    description: "Full-stack software developer specializing in React, Next.js, Spring Boot, and modern web technologies.",
  },
  viewport: "width=device-width, initial-scale=1",
  category: "technology",
  classification: "portfolio",
  other: {
    "theme-color": "#111827",
    "msapplication-TileColor": "#111827",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
