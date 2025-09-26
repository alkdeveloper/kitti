import type { Metadata } from "next";
import { Inter, Caveat, Poppins } from "next/font/google";
import "./globals.scss";

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

export const metadata: Metadata = {
  title: "Kitti - Çocuk Aksesuarları",
  description: "Çocuklar için kaliteli ve şık şapka, eldiven ve atkı koleksiyonları",
};

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
        {children}
      </body>
    </html>
  );
}
