"use client";

import React from "react";
import { contentData } from "@/data/content";
import { imageAssets } from "@/data/images";

const StoryHero: React.FC = () => {
  return (
    <section className="story-hero">
      <div className="story-hero-container">
        <h1 className="story-hero-title">
          <span className="story-hero-small">{contentData.storyHero.title.small}</span>
          <span className="story-hero-big">{contentData.storyHero.title.big}</span>
          <span className="story-hero-subtitle">{contentData.storyHero.title.subtitle}</span>
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
