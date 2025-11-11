"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';

interface FooterProps {
    theme?: string; 
  }

// Policy URL mapping
const getPolicyUrl = (title: string): string => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('aydınlatma') || titleLower.includes('privacy')) {
    return '/aydinlatma-metni';
  }
  if (titleLower.includes('leti') || titleLower.includes('consent')) {
    return '/ileti-onay-metni';
  }
  if (titleLower.includes('çerez') || titleLower.includes('cookie')) {
    return '/cerez-politikasi';
  }
  return '#';
};

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();

  const socialText = settings?.footer_info
    ? language === "en"
      ? settings.footer_info.social_text_en
      : settings.footer_info.social_text_tr
    : "";

  const renderSocialIcon = (icon: string) => {
    if (icon === "instagram") {
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0294 9.93758C14.4731 9.92008 9.95813 14.4176 9.94063 19.9738C9.92313 25.5301 14.4206 30.0451 19.9769 30.0626C25.5331 30.0801 30.0481 25.5826 30.0656 20.0263C30.0831 14.4701 25.5856 9.95508 20.0294 9.93758ZM19.9769 13.4726C23.5819 13.4551 26.5131 16.3688 26.5306 19.9738C26.5481 23.5788 23.6344 26.5101 20.0294 26.5276C16.4244 26.5451 13.4931 23.6313 13.4756 20.0263C13.4581 16.4213 16.3719 13.4901 19.9769 13.4726ZM28.1494 9.52633C28.1494 8.23133 29.1994 7.18133 30.4944 7.18133C31.7894 7.18133 32.8394 8.23133 32.8394 9.52633C32.8394 10.8213 31.7894 11.8713 30.4944 11.8713C29.1994 11.8713 28.1494 10.8213 28.1494 9.52633ZM39.4981 11.9063C39.3494 8.76508 38.6319 5.98258 36.3306 3.69008C34.0381 1.39758 31.2556 0.680078 28.1144 0.522578C24.8769 0.338828 15.1731 0.338828 11.9356 0.522578C8.80313 0.671328 6.02063 1.38883 3.71938 3.68133C1.41812 5.97383 0.709375 8.75633 0.551875 11.8976C0.368125 15.1351 0.368125 24.8388 0.551875 28.0763C0.700625 31.2176 1.41812 34.0001 3.71938 36.2926C6.02063 38.5851 8.79438 39.3026 11.9356 39.4601C15.1731 39.6438 24.8769 39.6438 28.1144 39.4601C31.2556 39.3113 34.0381 38.5938 36.3306 36.2926C38.6231 34.0001 39.3406 31.2176 39.4981 28.0763C39.6819 24.8388 39.6819 15.1438 39.4981 11.9063ZM35.3156 31.5501C34.6331 33.2651 33.3119 34.5863 31.5881 35.2776C29.0069 36.3013 22.8819 36.0651 20.0294 36.0651C17.1769 36.0651 11.0431 36.2926 8.47062 35.2776C6.75563 34.5951 5.43438 33.2738 4.74313 31.5501C3.71938 28.9688 3.95563 22.8438 3.95563 19.9913C3.95563 17.1388 3.72813 11.0051 4.74313 8.43258C5.42563 6.71758 6.74688 5.39633 8.47062 4.70508C11.0519 3.68133 17.1769 3.91758 20.0294 3.91758C22.8819 3.91758 29.0156 3.69008 31.5881 4.70508C33.3031 5.38758 34.6244 6.70883 35.3156 8.43258C36.3394 11.0138 36.1031 17.1388 36.1031 19.9913C36.1031 22.8438 36.3394 28.9776 35.3156 31.5501Z"
            fill="#2E6193"
          />
        </svg>
      );
    }
    if (icon === "facebook") {
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.6 0.399902C2.51125 0.399902 0 2.91115 0 5.9999V33.9999C0 37.0886 2.51125 39.5999 5.6 39.5999H14.1925V26.8424H9.5725V19.9999H14.1925V17.0511C14.1925 9.4299 17.64 5.8949 25.13 5.8949C26.5475 5.8949 28.9975 6.1749 30.0037 6.4549V12.6499C29.4787 12.5974 28.56 12.5624 27.4137 12.5624C23.7387 12.5624 22.3212 13.9537 22.3212 17.5674V19.9999H29.6362L28.3762 26.8424H22.3125V39.5999H33.6C36.6887 39.5999 39.2 37.0886 39.2 33.9999V5.9999C39.2 2.91115 36.6887 0.399902 33.6 0.399902H5.6Z"
            fill="#2E6193"
          />
        </svg>
      );
    }
    return null;
  };
  
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-inner">
        {/* Linkler */}
        {settings?.footer_policies && settings.footer_policies.length > 0 && (
          <div className="footer-links">
            {settings.footer_policies.map((policy, index) => {
              const policyTitle = language === "en" ? policy.title_en : policy.title_tr;
              const policyUrl = getPolicyUrl(policy.title);
              return (
                <React.Fragment key={policy.id}>
                  {index > 0 && <span>·</span>}
                  <Link href={policyUrl}>{policyTitle}</Link>
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Sosyal medya */}
        {settings?.social_links && settings.social_links.length > 0 && (
          <div className="footer-social">
            {socialText && <span>{socialText}</span>}
            <div className="icons">
              {settings.social_links.map((social) => (
                <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer">
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
