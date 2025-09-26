"use client";

import React from "react";
import babyImage from "@/images/baby-contour.png";

const StoryHero: React.FC = () => {
  return (
    <section className="story-hero">
      <div className="story-hero-container">
        <h1 className="story-hero-title">
          <span className="story-hero-small">Minik kafalar için</span>
          <span className="story-hero-big">BÜYÜK</span>
          <span className="story-hero-subtitle">bir hikaye</span>
        </h1>
        <div className="character-container">
          <img src={babyImage.src} />
        </div>
      </div>
    </section>
  );
};

export default StoryHero;
