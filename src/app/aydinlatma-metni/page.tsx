"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import ScrollToTop from "@/components/ScrollToTop";

const AydinlatmaMetni: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "Aydınlatma Metni",
      sections: [
        {
          title: "Kişisel Verilerin İşlenmesi",
          content: "Kitti olarak, kişisel verilerinizin güvenliği bizim için son derece önemlidir. Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin nasıl işlendiği hakkında sizi bilgilendirmek amacıyla hazırlanmıştır."
        },
        {
          title: "Veri Sorumlusu",
          content: "Kişisel verilerinizin işlenmesinden sorumlu olan ALK Group, İstanbul Sancaktepe Merve Mahallesi Akabe Caddesi No:16 adresinde faaliyet göstermektedir."
        },
        {
          title: "İşlenen Kişisel Veriler",
          content: "İletişim formları aracılığıyla ad, soyad, e-posta adresi, telefon numarası ve mesaj içeriği gibi kişisel verileriniz işlenmektedir."
        },
        {
          title: "İşleme Amaçları",
          content: "Kişisel verileriniz; müşteri hizmetleri, ürün ve hizmet tanıtımı, iletişim kurma ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir."
        },
        {
          title: "Haklarınız",
          content: "KVKK kapsamında kişisel verilerinizle ilgili bilgi talep etme, düzeltme, silme ve işlemeyi durdurma haklarınız bulunmaktadır. Bu haklarınızı kullanmak için info@kitti.com.tr adresine başvurabilirsiniz."
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      sections: [
        {
          title: "Processing of Personal Data",
          content: "As Kitti, the security of your personal data is extremely important to us. This privacy policy has been prepared to inform you about how your personal data is processed within the scope of the Personal Data Protection Law No. 6698."
        },
        {
          title: "Data Controller",
          content: "ALK Group, which is responsible for processing your personal data, operates at Merve Mahallesi Akabe Caddesi No:16, Sancaktepe, Istanbul."
        },
        {
          title: "Personal Data Processed",
          content: "Your personal data such as name, surname, email address, phone number and message content are processed through contact forms."
        },
        {
          title: "Processing Purposes",
          content: "Your personal data is processed for the purposes of customer services, product and service promotion, communication and fulfillment of legal obligations."
        },
        {
          title: "Your Rights",
          content: "Within the scope of GDPR, you have the right to request information, correct, delete and stop processing your personal data. You can apply to info@kitti.com.tr to exercise these rights."
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

export default AydinlatmaMetni;
