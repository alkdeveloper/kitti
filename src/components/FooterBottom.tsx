"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteSettings } from "@/contexts/SiteSettingsContext";

interface FooterBottomProps {
  theme?: string;
}

const FooterBottom: React.FC<FooterBottomProps> = ({ theme }) => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();

  const footerText = settings?.footer_info
    ? language === "en"
      ? settings.footer_info.footer_text_en
      : settings.footer_info.footer_text_tr
    : "kitti.com.tr © 2025 - Tüm hakları saklıdır.";


  return (
    <div className={`footer-bottom ${theme}`}>
      {settings?.footer_info?.logo_url && (
        <div className="footer-bottom-left">
          <img src={settings.footer_info.logo_url} alt="Footer Logo" />
        </div>
      )}
      <div className="footer-bottom-right">{footerText}</div>
    </div>
  );
};

export default FooterBottom;
