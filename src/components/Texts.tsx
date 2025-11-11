"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';
import bgImage from "@/images/toptan-portal.png";

const Texts: React.FC = () => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();
  
  const wholesaleSection = settings?.sections_wholasale?.[0];

  const title = wholesaleSection
    ? language === "en"
      ? wholesaleSection.title_en
      : wholesaleSection.title_tr
    : "";

  const description = wholesaleSection
    ? language === "en"
      ? wholesaleSection.description_en
      : wholesaleSection.description_tr
    : "";

  const infoText = wholesaleSection
    ? language === "en"
      ? wholesaleSection.info_text_en
      : wholesaleSection.info_text_tr
    : "";
  
  return (
    <section className="texts-section" style={{
      backgroundImage: `url(${bgImage.src})`,
    }}>
      <div className="texts-container">
        {title && (
          <h2 className="texts-title">{title}</h2>
        )}
        {description && (
          <p 
            className="texts-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {infoText && (
          <p 
            className="texts-note"
            dangerouslySetInnerHTML={{ __html: infoText }}
          />
        )}
      </div>
    </section>
  );
};

export default Texts;
