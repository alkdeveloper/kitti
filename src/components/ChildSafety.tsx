"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';
import { imageAssets } from "@/data/images";

const ChildSafety: React.FC = () => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();
  
  // type: "growing_safely" ve name: "child_safety" olan section'ı bul
  const childSafetySection = settings?.sections_our_story?.find(
    (section) => section.type === "growing_safely" && section.name === "child_safety"
  );

  const title = childSafetySection
    ? language === "en"
      ? childSafetySection.title_en
      : childSafetySection.title_tr
    : "";

  const description = childSafetySection
    ? language === "en"
      ? childSafetySection.description_en
      : childSafetySection.description_tr
    : "";

  const imageUrl = childSafetySection?.image_url;
  const fallbackImage = imageAssets.content.smileGirl;
  
  return (
    <section 
      className="child-safety-section"
      style={{ 
        backgroundImage: imageUrl 
          ? `url(${imageUrl})` 
          : `url(${fallbackImage})` 
      }}
    >
      <div className="child-safety-container">
        {title && (
          <h2 className="child-safety-title">{title}</h2>
        )}
        {description && (
          <div 
            className="child-safety-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </section>
  );
};

export default ChildSafety;
