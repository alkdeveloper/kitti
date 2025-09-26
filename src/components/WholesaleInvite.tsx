"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { imageAssets } from "@/data/images";
import { contentData } from "@/data/content";

const WholesaleInvite: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="wholesale-invite-section">
      <div className="wholesale-invite-container">
        <div 
          className="wholesale-invite-logo"
          dangerouslySetInnerHTML={{ __html: contentData.kittiLogoSvg }}
        />
        <h2 className="wholesale-invite-title">{t.wholesaleInvite.title}</h2>
       
        <img 
          src={imageAssets.content.wholesale} 
          alt={imageAssets.altTexts.wholesale}  
          className="wholesale-invite-image"
        />
        <button className="wholesale-invite-button">
          {t.wholesaleInvite.button}
        </button>
      </div>
    </section>
  );
};

export default WholesaleInvite;
