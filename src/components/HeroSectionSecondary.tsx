"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from "@/contexts/SiteSettingsContext";
import { imageAssets, IMAGE_PATHS } from "@/data/images";

const HeroSectionSecondary: React.FC = () => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();

  // type: "its_story" ve name: "Hikayemiz" olan section'ı bul
  const itsStorySection = settings?.sections?.find(
    (section) => section.type === "its_story" && section.name_tr === "Hikayemiz"
  );

  // Eğer section bulunamazsa, fallback olarak boş render et
  if (!itsStorySection) {
    return null;
  }

  const subtitle = language === "en"
    ? itsStorySection.subtitle_en
    : itsStorySection.subtitle_tr;
  const title = language === "en"
    ? itsStorySection.title_en
    : itsStorySection.title_tr;
  const description = language === "en"
    ? itsStorySection.description_en
    : itsStorySection.description_tr;

  // Arkaplan resimleri - API'den geliyorsa onları kullan, yoksa fallback
  const backgroundImage = itsStorySection.image_url ;
  const mobileImage = itsStorySection.mobile_image_url ;
  
  return (
    <section className="hero-section-secondary">  
      <div className="hero-container">
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt={imageAssets.altTexts.heroSecondaryBackground}
            className="hero-bg-normal"
          />
        )}

        {mobileImage && (
          <img
            src={mobileImage}
            alt={imageAssets.altTexts.heroSecondaryMobile}
            className="hero-bg-mobile"
          />
        )}
        <div className="hero-content">
          <div className="hero-logo">
            {subtitle && (
              <h2 className="hero-subtitle">{subtitle}</h2>
            )}
            {title && (
              <h1 className="hero-title">{title}</h1>
            )}
          </div>

          {description && (
            <div 
              className="hero-text"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSecondary;
