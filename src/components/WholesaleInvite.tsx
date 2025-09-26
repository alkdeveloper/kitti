"use client";

import React from "react";
import { contentData } from "@/data/content";
import { imageAssets } from "@/data/images";

const WholesaleInvite: React.FC = () => {
  return (
    <section className="wholesale-invite-section">
      <div className="wholesale-invite-container">
        <div 
          className="wholesale-invite-logo"
          dangerouslySetInnerHTML={{ __html: contentData.kittiLogoSvg }}
        />
        <h2 className="wholesale-invite-title">{contentData.wholesaleInvite.title}</h2>
        <img 
          src={imageAssets.content.wholesale} 
          alt={imageAssets.altTexts.wholesale}  
          className="wholesale-invite-image"
        />
        <button className="wholesale-invite-button">
          {contentData.wholesaleInvite.buttonText}
        </button>
      </div>
    </section>
  );
};

export default WholesaleInvite;
