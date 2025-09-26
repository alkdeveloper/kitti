"use client";

import React from "react";
import { contentData } from "@/data/content";
import { imageAssets } from "@/data/images";

const TurkeyMap: React.FC = () => {
  return (
    <section className="turkey-map-section">
      <div className="turkey-map-container">
        <h2 className="turkey-map-title">
          <span className="turkey-map-small">{contentData.turkeyMap.title.small}</span>
          <span className="turkey-map-big">{contentData.turkeyMap.title.big}</span>
        </h2>

        <div className="turkey-map-visual">
          <img
            src={imageAssets.turkeyMap}
            alt={imageAssets.altTexts.turkeyMap}
            className="turkey-map-image"
          />
        </div>

        <div className="map-text">
          {contentData.turkeyMap.description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TurkeyMap;
