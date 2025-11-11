"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';
import { imageAssets } from "@/data/images";
import { contentData } from "@/data/content";

const WholesaleInvite: React.FC = () => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();
  
  // type: "kitti_products" ve name: "kitti_products" olan section'ı bul
  const kittiProductsSection = settings?.sections_our_story?.find(
    (section) => section.type === "kitti_products" && section.name === "kitti_products"
  );

  const title = kittiProductsSection
    ? language === "en"
      ? kittiProductsSection.title_en
      : kittiProductsSection.title_tr
    : "";

  const buttonText = kittiProductsSection
    ? language === "en"
      ? kittiProductsSection.button_text_en
      : kittiProductsSection.button_text_tr
    : "";

  const buttonUrl = kittiProductsSection?.button_url;
  const imageUrl = kittiProductsSection?.image_url;
  const mobileImageUrl = kittiProductsSection?.mobile_image_url;
  const subImageUrl = kittiProductsSection?.subimage_url;
  const fallbackImage = imageAssets.content.wholesale;
  
  return (
    <section className="wholesale-invite-section">
      <div className="wholesale-invite-container">
        {subImageUrl && (
          <div 
            className="wholesale-invite-logo"
            style={{ backgroundImage: `url(${subImageUrl})` }}
          />
        )}
        {!subImageUrl && (
          <div 
            className="wholesale-invite-logo"
            dangerouslySetInnerHTML={{ __html: contentData.kittiLogoSvg }}
          />
        )}
        {title && (
          <h2 className="wholesale-invite-title">{title}</h2>
        )}
       
        {(imageUrl || mobileImageUrl || fallbackImage) && (
          <>
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt={title || imageAssets.altTexts.wholesale}  
                className="wholesale-invite-image wholesale-invite-image-desktop"
              />
            )}
            {mobileImageUrl && (
              <img 
                src={mobileImageUrl} 
                alt={title || imageAssets.altTexts.wholesale}  
                className="wholesale-invite-image wholesale-invite-image-mobile"
              />
            )}
            {!imageUrl && !mobileImageUrl && fallbackImage && (
              <img 
                src={fallbackImage} 
                alt={imageAssets.altTexts.wholesale}  
                className="wholesale-invite-image"
              />
            )}
          </>
        )}
        {buttonText && buttonUrl && (
          <Link href={buttonUrl} className="wholesale-invite-button">
            {buttonText}
          </Link>
        )}
        {buttonText && !buttonUrl && (
          <button className="wholesale-invite-button">
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default WholesaleInvite;
