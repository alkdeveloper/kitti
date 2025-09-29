"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import ScrollToTop from "@/components/ScrollToTop";

const CerezPolitikasi: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Çerez Politikası",
      sections: [
        {
          title: "Çerez Nedir?",
          content: "Çerezler, web sitelerinin kullanıcı deneyimini iyileştirmek için kullandığı küçük metin dosyalarıdır. Bu dosyalar tarayıcınızda saklanır ve web sitesinin daha iyi çalışmasını sağlar."
        },
        {
          title: "Çerez Türleri",
          content: "Sitemizde zorunlu çerezler, performans çerezleri ve analitik çerezler kullanılmaktadır. Zorunlu çerezler sitenin temel işlevleri için gereklidir."
        },
        {
          title: "Kullanım Amaçları",
          content: "Çerezler; site performansını ölçmek, kullanıcı tercihlerini hatırlamak, güvenliği sağlamak ve size daha iyi bir deneyim sunmak için kullanılır."
        },
        {
          title: "Çerez Yönetimi",
          content: "Tarayıcı ayarlarınızdan çerezleri kabul etmeme, silme veya uyarı alma seçeneklerini kullanabilirsiniz. Ancak bu durumda sitenin bazı özellikleri çalışmayabilir."
        },
        {
          title: "Üçüncü Taraf Çerezleri",
          content: "Google Analytics gibi üçüncü taraf hizmetlerin çerezleri de kullanılabilir. Bu çerezler hakkında detaylı bilgi için ilgili hizmet sağlayıcısının politikasını inceleyebilirsiniz."
        }
      ]
    },
    en: {
      title: "Cookie Policy",
      sections: [
        {
          title: "What is a Cookie?",
          content: "Cookies are small text files that websites use to improve user experience. These files are stored in your browser and help the website work better."
        },
        {
          title: "Types of Cookies",
          content: "Our site uses essential cookies, performance cookies and analytical cookies. Essential cookies are necessary for the basic functions of the site."
        },
        {
          title: "Usage Purposes",
          content: "Cookies are used to measure site performance, remember user preferences, ensure security and provide you with a better experience."
        },
        {
          title: "Cookie Management",
          content: "You can use the options to refuse, delete or receive warnings about cookies from your browser settings. However, in this case, some features of the site may not work."
        },
        {
          title: "Third Party Cookies",
          content: "Cookies from third-party services such as Google Analytics may also be used. For detailed information about these cookies, you can review the policy of the relevant service provider."
        }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-container">
          <h1 className="legal-title">{currentContent.title}</h1>
          
          {currentContent.sections.map((section, index) => (
            <div key={index} className="legal-section">
              <h2 className="legal-section-title">{section.title}</h2>
              <p className="legal-section-content">{section.content}</p>
            </div>
          ))}
          
          <div className="legal-contact">
            <h3>İletişim</h3>
            <p>Bu konularla ilgili sorularınız için: <strong>info@kitti.com.tr</strong></p>
          </div>
        </div>
      </main>
      <Footer theme="bordered border-t-0" />
      <FooterBottom />
      <ScrollToTop />
    </>
  );
};

export default CerezPolitikasi;
