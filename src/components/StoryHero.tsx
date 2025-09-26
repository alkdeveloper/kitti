"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { imageAssets } from "@/data/images";

const StoryHero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="story-hero">
      <div className="story-hero-container">
        <h1 className="story-hero-title">
          <span className="story-hero-small">{t.storyHero.title.small}</span>
          <span className="story-hero-big">{t.storyHero.title.big}</span>
          <span className="story-hero-subtitle">{t.storyHero.title.subtitle}</span>
        </h1>
        <div className="character-container">
          <img 
            src={imageAssets.babyContour} 
            alt={imageAssets.altTexts.babyContour}
          />
        </div>
      </div>
    </section>
  );
};

export default StoryHero;
