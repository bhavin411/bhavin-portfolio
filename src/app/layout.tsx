import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhavin Parmar — Android & iOS Engineer",
  description:
    "Mobile engineer with 7+ years building production apps in Kotlin, Jetpack Compose, Kotlin Multiplatform and SwiftUI. Based in Surat, India.",
  metadataBase: new URL("https://bhavin.dev"),
  openGraph: {
    title: "Bhavin Parmar — Android & iOS Engineer",
    description:
      "Crafting mobile experiences. Android, iOS and Kotlin Multiplatform — shipped to thousands of users.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050509",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
