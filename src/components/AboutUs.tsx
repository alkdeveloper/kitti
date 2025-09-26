"use client";

import React from "react";
import { contentData } from "@/data/content";
import { imageAssets, IMAGE_PATHS } from "@/data/images";

const AboutUs: React.FC = () => {
  return (
    <section
      className="about-us-section"
      style={{
        backgroundImage: `url(${IMAGE_PATHS.CONTENT_WHO_WE_ARE})`,
      }}
    >
      <h4 className="about-us-subtitle">{contentData.aboutUs.subtitle}</h4>
      <h2 className="about-us-title">{contentData.aboutUs.title}</h2>

      <div className="about-us-map">
        <img 
          src={IMAGE_PATHS.CONTENT_TURKEY_MAP_GIF} 
          alt={imageAssets.altTexts.turkeyMapGif} 
        />
      </div>

      {contentData.aboutUs.description.map((text, index) => (
        <p key={index} className="about-us-text">
          {text}
        </p>
      ))}
    </section>
  );
};

export default AboutUs;
