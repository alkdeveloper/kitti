"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import ScrollToTop from "@/components/ScrollToTop";

const AydinlatmaMetni: React.FC = () => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();

  // Find the policy by matching title (Aydınlatma Metni / Privacy Policy)
  const policy = settings?.footer_policies?.find(
    (p) => p.title.toLowerCase().includes('aydınlatma') || p.title_en.toLowerCase().includes('privacy')
  );

  const title = language === "en"
    ? (policy?.title_en || "Privacy Policy")
    : (policy?.title_tr || "Aydınlatma Metni");

  const description = language === "en"
    ? (policy?.description_en || "")
    : (policy?.description_tr || "");

  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-container">
          <h1 className="legal-title">{title}</h1>
          
          {description && (
            <div 
              className="legal-content"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
      </main>
      <Footer theme="bordered" />
      <FooterBottom />
      <ScrollToTop />
    </>
  );
};

export default AydinlatmaMetni;
