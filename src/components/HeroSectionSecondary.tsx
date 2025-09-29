"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { imageAssets, IMAGE_PATHS } from "@/data/images";

const HeroSectionSecondary: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="hero-section-secondary">  
      <div className="hero-container">
        <img
          src={IMAGE_PATHS.CONTENT_HERO_SECONDARY_BACKGROUND}
          alt={imageAssets.altTexts.heroSecondaryBackground}
          className="hero-bg-normal"
        />

        <img
          src={IMAGE_PATHS.CONTENT_HERO_SECONDARY_MOBILE}
          alt={imageAssets.altTexts.heroSecondaryMobile}
          className="hero-bg-mobile"
        />
        <div className="hero-content">
          <div className="hero-logo">
            <h2 className="hero-subtitle">{t.heroSectionSecondary.subtitle}</h2>
            <h1 className="hero-title">{t.heroSectionSecondary.title}</h1>
          </div>

          <div className="hero-text">
            {t.heroSectionSecondary.description.map((text, index) => (
              <p key={index} style={{marginBottom: index === t.heroSectionSecondary.description.length - 1 ? "0" : "10px"}} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSecondary;
