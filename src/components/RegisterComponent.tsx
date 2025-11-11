"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';
import kittiComputer from "@/images/img-w-text-secondary-image.png";

const RegisterComponent: React.FC = () => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();
  
  const wholesaleSection = settings?.sections_wholasale?.[0];

  const buttonTopTitle = wholesaleSection
    ? language === "en"
      ? wholesaleSection.button_top_title_en
      : wholesaleSection.button_top_title_tr
    : "";

  const buttonTopText = wholesaleSection
    ? language === "en"
      ? wholesaleSection.button_top_text_en
      : wholesaleSection.button_top_text_tr
    : "";

  const buttonBottomTitle = wholesaleSection
    ? language === "en"
      ? wholesaleSection.button_bottom_title_en
      : wholesaleSection.button_bottom_title_tr
    : "";

  const buttonBottomText = wholesaleSection
    ? language === "en"
      ? wholesaleSection.button_bottom_text_en
      : wholesaleSection.button_bottom_text_tr
    : "";

  const imageUrl = wholesaleSection?.image_url || kittiComputer.src;
  
  return (
    <section className="register-section">
      <div className="register-inner">
        <div className="register-left">
          {buttonTopTitle && buttonTopText && (
            <div className="register-block">
              <h3>{buttonTopTitle}</h3>
              {wholesaleSection?.button_top_url ? (
                <Link href={wholesaleSection.button_top_url} className="register-btn">
                  {buttonTopText}
                </Link>
              ) : (
                <button className="register-btn">{buttonTopText}</button>
              )}
            </div>
          )}
          {buttonBottomTitle && buttonBottomText && (
            <div className="register-block">
              <h3>{buttonBottomTitle}</h3>
              {wholesaleSection?.button_bottom_url ? (
                <Link href={wholesaleSection.button_bottom_url} className="register-btn">
                  {buttonBottomText}
                </Link>
              ) : (
                <button className="register-btn">{buttonBottomText}</button>
              )}
            </div>
          )}
        </div>
        <div className="register-right">
          <img src={imageUrl} alt="kitti portal bilgisayar" />
        </div>
      </div>
    </section>
  );
};

export default RegisterComponent;
