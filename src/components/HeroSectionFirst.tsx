"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from "@/contexts/SiteSettingsContext";
import { imageAssets, IMAGE_PATHS } from "@/data/images";
import { contentData } from "@/data/content";

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();

  // type: "whats_kitty" olan section'ı bul
  const whatsKittySection = settings?.sections?.find(
    (section) => section.type === "whats_kitty"
  );

  // headers array'indeki ilk entry'yi al (background image için)
  const headerData = settings?.headers?.[0];

  // Eğer section bulunamazsa, fallback olarak boş render et
  if (!whatsKittySection) {
    return null;
  }

  const title = language === "en"
    ? whatsKittySection.title_en
    : whatsKittySection.title_tr;
  const description = language === "en"
    ? whatsKittySection.description_en
    : whatsKittySection.description_tr;
  const buttonText = language === "en"
    ? whatsKittySection.button_text_left_en || whatsKittySection.button_text_left_tr
    : whatsKittySection.button_text_left_tr;
  const buttonUrl = whatsKittySection.button_url_left;

  // Arkaplan resimleri - önce section'dan, sonra headers'dan, sonra fallback
  const backgroundImage = whatsKittySection.image_url || headerData?.image || IMAGE_PATHS.CONTENT_HERO_BACKGROUND;
  const mobileImage = whatsKittySection.mobile_image_url || IMAGE_PATHS.CONTENT_HERO_MOBILE;

  return (
    <section className="hero-section">
      <div className="hero-container">
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt={imageAssets.altTexts.heroBackground}
            className="hero-bg-normal"
          />
        )}

        {mobileImage && (
          <img
            src={mobileImage}
            alt={imageAssets.altTexts.heroMobile}
            className="hero-bg-mobile"
          />
        )}
        <div className="hero-content">
          <div className="hero-logo">
            <div dangerouslySetInnerHTML={{ __html: contentData.heroLogoSvg }} />
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

          {buttonText && (
            buttonUrl ? (
              <Link href={buttonUrl} className="hero-button" style={{ textDecoration: 'none' }}>
                {buttonText}
              </Link>
            ) : (
              <button className="hero-button">
                {buttonText}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
