import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { resume } from "@/data/resume";
import "./globals.css";

const sans = Inter({ variable: "--font-sans-face", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono-face", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${resume.name} · ${resume.role}`,
  description: resume.summary,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
