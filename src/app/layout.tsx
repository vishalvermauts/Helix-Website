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
  title: "Helix Engine | Autonomous Agentic Compute",
  description: "The Helix Engine is a state-of-the-art framework leveraging a rigorous Three-Tier Defensive Architecture to write, execute, and self-heal Python and Node.js agents dynamically.",
  keywords: ["Autonomous AI", "Agentic Compute", "AI Swarm", "Code Generation", "Python Agents", "Helix Engine"],
  authors: [{ name: "Helix Ecosystem" }],
  openGraph: {
    title: "Helix Engine | Autonomous Agentic Compute",
    description: "State-of-the-art framework leveraging a rigorous Three-Tier Defensive Architecture to write, execute, and self-heal agents dynamically.",
    url: "https://helixengine.app",
    siteName: "Helix Engine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helix Engine | Autonomous Agentic Compute",
    description: "Write, execute, and self-heal Python and Node.js agents dynamically on the fly.",
  },
  metadataBase: new URL('https://helixengine.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">{children}</body>
    </html>
  );
}
