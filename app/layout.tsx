import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL("https://autostrata.ai"),
  title: {
    default: "AutoStrata.ai — AI‑Powered IT Solutions",
    template: "%s | AutoStrata.ai"
  },
  description: "Agentic AI, automation, data science, and full‑stack development without offshore outsourcing.",
  openGraph: {
    title: "AutoStrata.ai — AI‑Powered IT Solutions",
    description: "Agentic AI, automation, data science, and full‑stack development.",
    url: "https://autostrata.ai",
    siteName: "AutoStrata.ai",
    images: ["/og-image.png"],
    type: "website"
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <div className="bg-orbits"><span className="orb orb-1"/><span className="orb orb-2"/><span className="orb orb-3"/></div>
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
