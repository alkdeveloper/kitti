"use client";
import React, { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteSettings } from "@/contexts/SiteSettingsContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSectionFirst";
import ProductCards from "@/components/ProductCards";
import AboutUs from "@/components/AboutUs";
import SunGif from "@/images/sun.gif";
import seaGif from "@/images/sea.gif";
import seaBottom from "@/images/sea-bottom.svg";
import ImageWText from "@/components/ImageWText";
import HeroSectionSecondary from "@/components/HeroSectionSecondary";
import ImageWTextSecondary from "@/components/ImageWTextSecondary";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";
import ScrollToTop from "./ScrollToTop";
import WholeSaleCategories from "./WholeSaleCategories";
import bgImage from "@/images/atolyeden-dunyaya-bg.png";
import pageImage from "@/images/atolyeden-dunyaya.gif";

const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();

  // FAQ items'ı WholeSaleCategories formatına dönüştür
  const faqTabs = useMemo(() => {
    if (!settings?.faq_items || settings.faq_items.length === 0) {
      return [];
    }

    // order'a göre sırala
    const sortedFaqs = [...settings.faq_items].sort((a, b) => a.order - b.order);

    return sortedFaqs.map((faq) => ({
      key: `faq-${faq.id}`,
      label: language === "en" ? faq.question_en : faq.question_tr,
      title: language === "en" ? faq.question_en : faq.question_tr,
      paragraphs: language === "en" ? faq.answer_en : faq.answer_tr,
    }));
  }, [settings?.faq_items, language]);

  // production_capacity section'ını bul
  const productionCapacitySection = useMemo(() => {
    return settings?.sections?.find(
      (section) => section.type === "production_capacity"
    );
  }, [settings?.sections]);

  return (
    <>
      <Header />
      <main>
        <img src={SunGif.src} alt="Sun" className="sun-gif" />
        <div className="sea-gif-ctr">
          <img src={seaGif.src} alt="Sea" className="sea-gif" />
          <img src={seaBottom.src} alt="Sea Bottom" className="sea-bottom" />
        </div>

        <HeroSection />
        <ProductCards />
        <AboutUs />
        {productionCapacitySection && (
          <ImageWText
            subtitle={language === "en" ? (productionCapacitySection.subtitle_en || productionCapacitySection.subtitle_tr || "") : (productionCapacitySection.subtitle_tr || "")}
            title={language === "en" ? productionCapacitySection.title_en : productionCapacitySection.title_tr}
            text={language === "en" ? productionCapacitySection.description_en : productionCapacitySection.description_tr}
            buttonText={language === "en" ? (productionCapacitySection.button_text_left_en || productionCapacitySection.button_text_left_tr || undefined) : (productionCapacitySection.button_text_left_tr || undefined)}
            buttonUrl={productionCapacitySection.button_url_left || undefined}
            backgroundImage={bgImage.src}
            contentImage={productionCapacitySection.image_url || ""}
            imageAlt="Production Capacity"
            showButton={!!productionCapacitySection.button_text_left_tr}
            reverse={false}
            backgroundColor="#F5F5F5"
          />
        )}
        <HeroSectionSecondary />
        <ImageWTextSecondary />
        {faqTabs.length > 0 && (
          <WholeSaleCategories
            tabs={faqTabs}
            defaultActive={faqTabs[0]?.key}
          />
        )}
      <ScrollToTop />
      </main>
      <Footer theme="bordered border-t-0" />
      <FooterBottom />
    </>
  );
};

export default HomePage;
