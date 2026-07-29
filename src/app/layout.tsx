import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Neeraj Yamaji | Frontend Developer",
  description: "Frontend developer focused on React, TypeScript, responsive web experiences, and practical AI-powered developer tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <body className="antialiased min-h-screen font-sans bg-bg-primary text-text-primary flex flex-col">
        <Navbar />
        <CustomCursor/>
        <SmoothScroll>
          <main className="flex-1 w-full relative z-[1]">
            {children}
          </main>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
