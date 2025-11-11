"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from "@/contexts/SiteSettingsContext";
import { imageAssets, IMAGE_PATHS } from "@/data/images";

const ImageWTextSecondary: React.FC = () => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();

  // type: "generic" ve name: "İş Ortaklarımız" olan section'ı bul
  const businessPartnersSection = settings?.sections?.find(
    (section) => section.type === "generic" && section.name_tr === "İş Ortaklarımız"
  );

  // Eğer section bulunamazsa, fallback olarak boş render et
  if (!businessPartnersSection) {
    return null;
  }

  const subtitle = language === "en" 
    ? businessPartnersSection.subtitle_en 
    : businessPartnersSection.subtitle_tr;
  const title = language === "en"
    ? businessPartnersSection.title_en
    : businessPartnersSection.title_tr;
  const description = language === "en"
    ? businessPartnersSection.description_en
    : businessPartnersSection.description_tr;

  const buttonLeftText = language === "en"
    ? businessPartnersSection.button_text_left_en
    : businessPartnersSection.button_text_left_tr;
  const buttonLeftUrl = businessPartnersSection.button_url_left;

  const buttonRightText = language === "en"
    ? businessPartnersSection.button_text_right_en
    : businessPartnersSection.button_text_right_tr;
  const buttonRightUrl = businessPartnersSection.button_url_right;

  // Butonları oluştur
  const buttons = [];
  if (buttonLeftText && buttonLeftUrl) {
    buttons.push({ text: buttonLeftText, url: buttonLeftUrl });
  }
  if (buttonRightText && buttonRightUrl) {
    buttons.push({ text: buttonRightText, url: buttonRightUrl });
  }

  return (
    <section
      className="image-w-text-section-secondary"
      style={{    
        backgroundImage: `url(${IMAGE_PATHS.BG_ATOLYEDEN_DUNYAYA})`,
        backgroundColor: "#F5F5F5",
      }}
    >
      <div className="image-w-text-content">
        {subtitle && (
          <h4 className="image-w-text-subtitle">
            {subtitle}
          </h4>
        )}
        {title && (
          <h2 className="image-w-text-title">{title}</h2>
        )}

        {description && (
          <div 
            className="image-w-text-text"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        {buttons.length > 0 && (
          <div className="image-w-text-buttons-ctr">
            {buttons.map((button, index) => (
              button.url ? (
                <Link 
                  key={index} 
                  href={button.url} 
                  className="image-w-text-button"
                >
                  {button.text}
                </Link>
              ) : (
                <button key={index} className="image-w-text-button">
                  {button.text}
                </button>
              )
            ))}
          </div>
        )}
      </div>

      <div className="image-w-text-visual">
        <img 
          src={IMAGE_PATHS.CONTENT_IMG_W_TEXT_SECONDARY} 
          alt={imageAssets.altTexts.imgWTextSecondary} 
        />
      </div>
      {description && (
        <div className="image-w-text-text-mobile">
          <div 
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {buttons.length > 0 && (
            <>
              {buttons.map((button, index) => (
                button.url ? (
                  <Link 
                    key={index} 
                    href={button.url} 
                    className="image-w-text-button mobile-show"
                  >
                    {button.text}
                  </Link>
                ) : (
                  <button key={index} className="image-w-text-button mobile-show">
                    {button.text}
                  </button>
                )
              ))}
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default ImageWTextSecondary;
