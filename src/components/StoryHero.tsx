"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';

const StoryHero: React.FC = () => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();
  
  // type: "big_story" ve name: "story_hero" olan section'ı bul
  const storyHeroSection = settings?.sections_our_story?.find(
    (section) => section.type === "big_story" && section.name === "story_hero"
  );

  const subtitle = storyHeroSection
    ? language === "en"
      ? storyHeroSection.subtitle_en
      : storyHeroSection.subtitle_tr
    : "";

  const title = storyHeroSection
    ? language === "en"
      ? storyHeroSection.title_en
      : storyHeroSection.title_tr
    : "";

  const buttonText = storyHeroSection
    ? language === "en"
      ? storyHeroSection.button_text_en
      : storyHeroSection.button_text_tr
    : "";

  const buttonUrl = storyHeroSection?.button_url;
  
  const imageUrl = storyHeroSection?.image_url;
  const mobileImageUrl = storyHeroSection?.mobile_image_url;
  
  return (
    <section className="story-hero">
      <div className="story-hero-container">
        <div className="story-hero-content">
          <h1 className="story-hero-title">
            {subtitle && (
              <span className="story-hero-small">{subtitle}</span>
            )}
            {title && (
              <span className="story-hero-big">{title}</span>
            )}
          </h1>
          {buttonText && buttonUrl && (
            <Link href={buttonUrl} className="story-hero-button">
              {buttonText}
            </Link>
          )}
        </div>
        {(imageUrl || mobileImageUrl) && (
          <div className="character-container">
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt={title || "Story Hero"}
                className="story-hero-image-desktop"
              />
            )}
            {mobileImageUrl && (
              <img 
                src={mobileImageUrl} 
                alt={title || "Story Hero"}
                className="story-hero-image-mobile"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default StoryHero;
