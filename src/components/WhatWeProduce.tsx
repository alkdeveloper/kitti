"use client";

import React from "react";
import { imageAssets } from "@/data/images";

interface WhatWeProduceProps {
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
  imageAlt?: string;
  backgroundColor?: string;
}

const WhatWeProduce: React.FC<WhatWeProduceProps> = ({
  title,
  description,
  image,
  mobileImage,
  imageAlt = "What we produce",
}) => {
  return (
    <section
      className="what-we-produce-section"
      style={{ backgroundImage: `url(${imageAssets.backgrounds.contact})` }}
    >
      <div className="what-we-produce-container">
        <div className="what-we-produce-header">
          <h2 className="what-we-produce-title">{title}</h2>
          <div 
            className="what-we-produce-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className="what-we-produce-visual">
          {image && (
            <img 
              src={image} 
              alt={imageAlt} 
              className="what-we-produce-image what-we-produce-image-desktop" 
            />
          )}
          {mobileImage && (
            <img 
              src={mobileImage} 
              alt={imageAlt} 
              className="what-we-produce-image what-we-produce-image-mobile" 
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatWeProduce;
