"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from "@/contexts/SiteSettingsContext";
import { imageAssets, IMAGE_PATHS } from "@/data/images";

const AboutUs: React.FC = () => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();

  // type: "who_are_we" olan section'ı bul
  const whoAreWeSection = settings?.sections?.find(
    (section) => section.type === "who_are_we"
  );

  // Eğer section bulunamazsa, fallback olarak boş render et
  if (!whoAreWeSection) {
    return null;
  }

  const subtitle = language === "en"
    ? whoAreWeSection.subtitle_en
    : whoAreWeSection.subtitle_tr;
  const title = language === "en"
    ? whoAreWeSection.title_en
    : whoAreWeSection.title_tr;
  const description = language === "en"
    ? whoAreWeSection.description_en
    : whoAreWeSection.description_tr;

  // Arkaplan resmi - API'den geliyorsa onu kullan, yoksa fallback
  const backgroundImage = whoAreWeSection.image_url;
  
  // Gif resmi - API'den geliyorsa onu kullan, yoksa fallback
  const mapGif = whoAreWeSection.mobile_image_url || IMAGE_PATHS.CONTENT_TURKEY_MAP_GIF;
  
  return (
    <section
      className="about-us-section"
      style={{
        backgroundImage: `url(${IMAGE_PATHS.CONTENT_WHO_WE_ARE})`,
      }}
    >
      {subtitle && (
        <h4 className="about-us-subtitle">{subtitle}</h4>
      )}
      {title && (
        <h2 className="about-us-title">{title}</h2>
      )}

      {backgroundImage && (
        <div className="about-us-map">
          <img 
            src={backgroundImage} 
            alt={imageAssets.altTexts.whoWeAre} 
          />
        </div>
      )}

      {description && (
        <div 
          className="about-us-text"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </section>
  );
};

export default AboutUs;
