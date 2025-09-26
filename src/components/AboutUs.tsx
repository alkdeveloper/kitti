"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { imageAssets, IMAGE_PATHS } from "@/data/images";

const AboutUs: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section
      className="about-us-section"
      style={{
        backgroundImage: `url(${IMAGE_PATHS.CONTENT_WHO_WE_ARE})`,
      }}
    >
      <h4 className="about-us-subtitle">{t.aboutUs.subtitle}</h4>
      <h2 className="about-us-title">{t.aboutUs.title}</h2>

      <div className="about-us-map">
        <img 
          src={IMAGE_PATHS.CONTENT_TURKEY_MAP_GIF} 
          alt={imageAssets.altTexts.turkeyMapGif} 
        />
      </div>

      {t.aboutUs.description.map((text, index) => (
        <p key={index} className="about-us-text">
          {text}
        </p>
      ))}
    </section>
  );
};

export default AboutUs;
