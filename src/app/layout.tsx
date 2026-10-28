import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SpiderWebs } from "@/components/ui/SpiderWebs";
import { Terminal } from "@/components/ui/Terminal";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import { UniverseModal } from "@/components/ui/UniverseModal";
import { VercelTelemetry } from "@/components/observability/VercelTelemetry";
import { siteMetadata } from "@/lib/site";

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

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen font-sans bg-bg-primary text-text-primary flex flex-col transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Terminal />
          <UniverseModal />
          <CustomCursor/>
          <SmoothScroll>
            <main className="flex-1 w-full relative z-[1]">
              <SpiderWebs />
              {children}
            </main>
          </SmoothScroll>
          <Footer />
        </ThemeProvider>
        <VercelTelemetry enabled={process.env.VERCEL_ENV === "production"} />
      </body>
    </html>
  );
}
