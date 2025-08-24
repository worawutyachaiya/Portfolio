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
  title: "Worawut Yachaiya - Full Stack Web Developer",
  description: "นักศึกษาสาขาวิทยาการคอมพิวเตอร์ที่มีความสนใจในด้านการพัฒนาเว็บไซต์ พร้อมรับงาน Web Developer",
  keywords: "Worawut Yachaiya, web developer, full stack developer, React, Next.js, TypeScript, portfolio, นักพัฒนาเว็บ",
  authors: [{ name: "Worawut Yachaiya" }],
  creator: "Worawut Yachaiya",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://worawut-portfolio.vercel.app",
    title: "Worawut Yachaiya - Full Stack Web Developer",
    description: "นักศึกษาสาขาวิทยาการคอมพิวเตอร์ที่มีความสนใจในด้านการพัฒนาเว็บไซต์ พร้อมรับงาน Web Developer",
    siteName: "Worawut Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Worawut Yachaiya - Full Stack Web Developer",
    description: "นักศึกษาสาขาวิทยาการคอมพิวเตอร์ที่มีความสนใจในด้านการพัฒนาเว็บไซต์ พร้อมรับงาน Web Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
