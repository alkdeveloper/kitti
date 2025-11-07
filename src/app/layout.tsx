"use client";

import { Inter, Caveat, Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.scss";
import { LanguageProvider } from "@/contexts/LanguageContext";
import CookieConsent from "@/components/CookieConsent";
import LoadingSpinner from "@/components/LoadingSpinner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function LayoutContent({ children }: { children: React.ReactNode }) {
  const [showLoading, setShowLoading] = useState(true);
  const [startReveal, setStartReveal] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // 2 saniye loading spinner göster
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
      setStartReveal(true); // Loading bittikten sonra reveal başlat
    }, 2000);

    // Reveal animasyonu bittikten sonra (2s loading + 2s reveal = 4s)
    const revealTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 4000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(revealTimer);
    };
  }, []);

  return (
    <>
      {showLoading && <LoadingSpinner />}
      <div className={`reveal ${startReveal ? 'reveal-start' : ''} ${animationComplete ? 'reveal-complete' : ''}`}>
        {children}
      </div>
      <CookieConsent />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${caveat.variable} ${poppins.variable} antialiased`}
      >
        <LanguageProvider>
          <LayoutContent>
            {children}
          </LayoutContent>
        </LanguageProvider>
      </body>
    </html>
  );
}
