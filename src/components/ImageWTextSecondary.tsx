"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { imageAssets, IMAGE_PATHS } from "@/data/images";

const ImageWTextSecondary: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section
      className="image-w-text-section-secondary"
      style={{    
        backgroundImage: `url(${IMAGE_PATHS.BG_ATOLYEDEN_DUNYAYA})`,
      }}
    >
      <div className="image-w-text-content">
        <h4 className="image-w-text-subtitle">
          {t.imageWTextSecondary.subtitle}
        </h4>
        <h2 className="image-w-text-title">{t.imageWTextSecondary.title}</h2>

        <div className="image-w-text-text">
          {t.imageWTextSecondary.description.map((text, index) => (
            <React.Fragment key={index}>
              {text === "" ? (
                <br />
              ) : text.includes("Büyük ölçekli") ? (
                <b>{text}</b>
              ) : (
                text
              )}
              {index < t.imageWTextSecondary.description.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>

        <div className="image-w-text-buttons-ctr">
          {t.imageWTextSecondary.buttons.map((button, index) => (
            <button key={index} className="image-w-text-button">
              {button.text}
            </button>
          ))}
        </div>
      </div>

      <div className="image-w-text-visual">
        <img 
          src={IMAGE_PATHS.CONTENT_IMG_W_TEXT_SECONDARY} 
          alt={imageAssets.altTexts.imgWTextSecondary} 
        />
      </div>
      <div className="image-w-text-text-mobile">
        {t.imageWTextSecondary.mobileDescription.map((text, index) => (
          <React.Fragment key={index}>
            {text === "" ? (
              <br />
            ) : text.includes("Büyük ölçekli") ? (
              <b>{text}</b>
            ) : (
              text
            )}
            {index < t.imageWTextSecondary.mobileDescription.length - 1 && <br />}
          </React.Fragment>
        ))}
        {t.imageWTextSecondary.buttons.map((button, index) => (
          <button key={index} className="image-w-text-button mobile-show">
            {button.text}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageWTextSecondary;
