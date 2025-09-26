"use client";

import React from "react";
import { contentData } from "@/data/content";
import { imageAssets, IMAGE_PATHS } from "@/data/images";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <img
          src={IMAGE_PATHS.CONTENT_HERO_BACKGROUND}
          alt={imageAssets.altTexts.heroBackground}
          className="hero-bg-normal"
        />

        <img
          src={IMAGE_PATHS.CONTENT_HERO_MOBILE}
          alt={imageAssets.altTexts.heroMobile}
          className="hero-bg-mobile"
        />
        <div className="hero-content">
          <div className="hero-logo">
            <div dangerouslySetInnerHTML={{ __html: contentData.heroLogoSvg }} />
            <h1 className="hero-title">{contentData.heroSectionFirst.title}</h1>
          </div>

          <div className="hero-text">
            {contentData.heroSectionFirst.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <button className="hero-button">{contentData.heroSectionFirst.buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
