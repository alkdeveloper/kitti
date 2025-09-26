"use client";

import React from "react";
import { contentData } from "@/data/content";
import { imageAssets } from "@/data/images";

const ChildSafety: React.FC = () => {
  return (
    <section 
      className="child-safety-section"
      style={{ backgroundImage: `url(${imageAssets.content.smileGirl})` }}
    >
      <div className="child-safety-container">
        <h2 className="child-safety-title">{contentData.childSafety.title}</h2>
        <p className="child-safety-description">
          {contentData.childSafety.description}
        </p>
      </div>
    </section>
  );
};

export default ChildSafety;
