"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import bgImage from "@/images/toptan-portal.png";

const Texts: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="texts-section" style={{
      backgroundImage: `url(${bgImage.src})`,
    }}>
      <div className="texts-container">
        <h2 className="texts-title">{t.texts.title}</h2>
        <p className="texts-description">
          {t.texts.description}
        </p>
        <p className="texts-note">
          {t.texts.note}
        </p>
      </div>
    </section>
  );
};

export default Texts;
