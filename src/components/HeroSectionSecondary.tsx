"use client";

import React from "react";
import { contentData } from "@/data/content";
import { imageAssets, IMAGE_PATHS } from "@/data/images";

const HeroSectionSecondary: React.FC = () => {
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
            <h2 className="hero-subtitle">{contentData.heroSectionSecondary.subtitle}</h2>
            <h1 className="hero-title">{contentData.heroSectionSecondary.title}</h1>
          </div>

          <div className="hero-text">
            {contentData.heroSectionSecondary.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSecondary;
