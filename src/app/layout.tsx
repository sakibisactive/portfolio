import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAKIB'S PORTFOLIO",
  description:
    "Personal portfolio of Shahriar Sakib, final-year Computer Science & Engineering (CSE) student at BRAC University proficient across Software Engineering, Full-Stack Web Development, Machine Learning, and IoT Systems.",
  keywords: [
    "Shahriar Sakib",
    "Software Engineer",
    "Full-Stack Developer",
    "Computer Science & Engineering",
    "Machine Learning",
    "BRAC University",
    "IoT Systems",
    "Swarm AI",
  ],
  authors: [{ name: "Shahriar Sakib" }],
  openGraph: {
    title: "SAKIB'S PORTFOLIO",
    description:
      "Building high-performance software systems across Full-Stack Web Development, Machine Learning, and IoT.",
    url: "https://shahriarsakib.vercel.app",
    siteName: "SAKIB'S PORTFOLIO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAKIB'S PORTFOLIO",
    description:
      "Building high-performance software systems across Full-Stack Web Development, Machine Learning, and IoT.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#07080c] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}

