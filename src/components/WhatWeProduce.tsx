"use client";

import React from "react";

import contactBg from "@/images/contact-bg.png";

interface WhatWeProduceProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  backgroundColor?: string;
}

const WhatWeProduce: React.FC<WhatWeProduceProps> = ({
  title,
  description,
  image,
  imageAlt = "What we produce",
}) => {
  return (
    <section
      className="what-we-produce-section"
      style={{ backgroundImage: `url(${contactBg.src})` }}
    >
      <div className="what-we-produce-container">
        <div className="what-we-produce-header">
          <h2 className="what-we-produce-title">{title}</h2>
          <p className="what-we-produce-description">{description}</p>
        </div>

        <div className="what-we-produce-visual">
          <img src={image} alt={imageAlt} className="what-we-produce-image" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeProduce;
