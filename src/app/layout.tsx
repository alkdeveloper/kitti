"use client";

import { Inter, Caveat, Poppins } from "next/font/google";
import "./globals.scss";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import CookieConsent from "@/components/CookieConsent";

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
  const { isLoading } = useLanguage();
  
  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      <div className={isLoading ? 'page-fade-enter' : 'page-fade-enter-active'}>
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
