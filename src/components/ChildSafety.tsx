"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { imageAssets } from "@/data/images";

const ChildSafety: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section 
      className="child-safety-section"
      style={{ backgroundImage: `url(${imageAssets.content.smileGirl})` }}
    >
      <div className="child-safety-container">
        <h2 className="child-safety-title">{t.childSafety.title}</h2>
        <div className="child-safety-description">
          {t.childSafety.description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChildSafety;
