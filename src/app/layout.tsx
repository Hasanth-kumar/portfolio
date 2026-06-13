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
  title: "Hasanth Kumar Majji - Software Engineer Portfolio",
  description: "Software engineer (SDE) specializing in full-stack development and applied machine learning. Built production-style systems with Java, Spring Boot, React, TypeScript, and Python.",
  keywords: ["software engineer", "SDE", "full-stack developer", "applied machine learning", "Spring Boot", "React", "TypeScript", "portfolio"],
  authors: [{ name: "Hasanth Kumar Majji" }],
  creator: "Hasanth Kumar Majji",
  publisher: "Hasanth Kumar Majji",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-5km86sit9-hasanth-kumars-projects.vercel.app",
    siteName: "Hasanth Kumar Majji Portfolio",
    title: "Hasanth Kumar Majji - Software Engineer Portfolio",
    description: "Software engineer (SDE) specializing in full-stack development and applied machine learning. Built production-style systems with Java, Spring Boot, React, TypeScript, and Python.",
  },
  twitter: {
    card: "summary",
    title: "Hasanth Kumar Majji - Software Engineer Portfolio",
    description: "Software engineer (SDE) specializing in full-stack development and applied machine learning.",
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
