"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import ScrollToTop from "@/components/ScrollToTop";

const IletiOnayMetni: React.FC = () => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();

  // Find the policy by matching title (İleti Onay Metni / Consent Form)
  const policy = settings?.footer_policies?.find(
    (p) => p.title.toLowerCase().includes('ileti') || p.title_en.toLowerCase().includes('consent')
  );

  const title = language === "en"
    ? (policy?.title_en || "Consent Form")
    : (policy?.title_tr || "İleti Onay Metni");

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
      <Footer theme="bordered border-t-0" />
      <FooterBottom />
      <ScrollToTop />
    </>
  );
};

export default IletiOnayMetni;
