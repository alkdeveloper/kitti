"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';
import { imageAssets } from "@/data/images";

const TurkeyMap: React.FC = () => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();
  
  // type: "all_over" ve name: "turkey_map" olan section'ı bul
  const turkeyMapSection = settings?.sections_our_story?.find(
    (section) => section.type === "all_over" && section.name === "turkey_map"
  );

  const subtitle = turkeyMapSection
    ? language === "en"
      ? turkeyMapSection.subtitle_en
      : turkeyMapSection.subtitle_tr
    : "";

  const title = turkeyMapSection
    ? language === "en"
      ? turkeyMapSection.title_en
      : turkeyMapSection.title_tr
    : "";

  const description = turkeyMapSection
    ? language === "en"
      ? turkeyMapSection.description_en
      : turkeyMapSection.description_tr
    : "";

  const imageUrl = turkeyMapSection?.image_url;
  const mobileImageUrl = turkeyMapSection?.mobile_image_url;
  const fallbackImage = imageAssets.turkeyMap;
  
  return (
    <section className="turkey-map-section">
      <div className="turkey-map-container">
        <h2 className="turkey-map-title">
          {subtitle && (
            <span className="turkey-map-small">{subtitle}</span>
          )}
          {title && (
            <span className="turkey-map-big">{title}</span>
          )}
        </h2>

        {(imageUrl || mobileImageUrl || fallbackImage) && (
          <div className="turkey-map-visual">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={title || imageAssets.altTexts.turkeyMap}
                className="turkey-map-image turkey-map-image-desktop"
              />
            )}
            {mobileImageUrl && (
              <img
                src={mobileImageUrl}
                alt={title || imageAssets.altTexts.turkeyMap}
                className="turkey-map-image turkey-map-image-mobile"
              />
            )}
            {!imageUrl && !mobileImageUrl && fallbackImage && (
              <img
                src={fallbackImage}
                alt={imageAssets.altTexts.turkeyMap}
                className="turkey-map-image"
              />
            )}
          </div>
        )}

        {description && (
          <div 
            className="map-text"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </section>
  );
};

export default TurkeyMap;
