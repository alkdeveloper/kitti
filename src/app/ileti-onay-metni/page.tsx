"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import ScrollToTop from "@/components/ScrollToTop";

const IletiOnayMetni: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: "İleti Onay Metni",
      sections: [
        {
          title: "Elektronik İleti İzni",
          content: "Bu metin, elektronik ileti gönderimi için verdiğiniz izinle ilgili bilgileri içermektedir. 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun kapsamında hazırlanmıştır."
        },
        {
          title: "İletilerin İçeriği",
          content: "Size gönderilecek elektronik iletiler; ürün tanıtımları, kampanya duyuruları, özel indirimler, etkinlik bilgilendirmeleri ve şirket haberleri içerebilir."
        },
        {
          title: "İletişim Kanalları",
          content: "Elektronik iletiler e-posta, SMS ve diğer elektronik iletişim araçları ile gönderilebilir. İletişim bilgileriniz yalnızca bu amaçla kullanılacaktır."
        },
        {
          title: "İzin Yönetimi",
          content: "Verdiğiniz izni istediğiniz zaman geri çekebilirsiniz. Bunun için e-posta içindeki 'abonelikten çık' linkini kullanabilir veya info@kitti.com.tr adresine başvurabilirsiniz."
        },
        {
          title: "Veri Güvenliği",
          content: "İletişim bilgileriniz güvenli sunucularda saklanır ve üçüncü taraflarla paylaşılmaz. Yalnızca yasal zorunluluklar durumunda yetkili mercilerle paylaşılabilir."
        }
      ]
    },
    en: {
      title: "Consent Form",
      sections: [
        {
          title: "Electronic Communication Permission",
          content: "This text contains information about the permission you give for sending electronic communications. It has been prepared within the scope of the Law No. 6563 on the Regulation of Electronic Commerce."
        },
        {
          title: "Content of Communications",
          content: "Electronic communications to be sent to you may include product promotions, campaign announcements, special discounts, event information and company news."
        },
        {
          title: "Communication Channels",
          content: "Electronic communications can be sent via email, SMS and other electronic communication tools. Your contact information will only be used for this purpose."
        },
        {
          title: "Permission Management",
          content: "You can withdraw your permission at any time. For this, you can use the 'unsubscribe' link in the email or contact info@kitti.com.tr."
        },
        {
          title: "Data Security",
          content: "Your contact information is stored on secure servers and is not shared with third parties. It can only be shared with authorized authorities in case of legal obligations."
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

export default IletiOnayMetni;
