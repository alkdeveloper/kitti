"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteSettings } from "@/contexts/SiteSettingsContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FooterBottom from "@/components/FooterBottom";
import StoryHero from "@/components/StoryHero";
import TurkeyMap from "@/components/TurkeyMap";
import ImageWText from "@/components/ImageWText";
import WhatWeProduce from "@/components/WhatWeProduce";
import ChildSafety from "@/components/ChildSafety";
import WholesaleInvite from "@/components/WholesaleInvite";
import { imageAssets, IMAGE_PATHS } from "@/data/images";

export default function OurStory() {
  const { language } = useLanguage();
  const { settings } = useSiteSettings();

  // ALK Group section'ı bul
  const alkGroupSection = settings?.sections_our_story?.find(
    (section) =>
      section.type === "power_of_a_group" && section.name === "alk_group"
  );

  const alkGroupSubtitle = alkGroupSection
    ? language === "en"
      ? alkGroupSection.subtitle_en
      : alkGroupSection.subtitle_tr
    : "";

  const alkGroupTitle = alkGroupSection
    ? language === "en"
      ? alkGroupSection.title_en
      : alkGroupSection.title_tr
    : "";

  const alkGroupText = alkGroupSection
    ? language === "en"
      ? alkGroupSection.description_en
      : alkGroupSection.description_tr
    : "";

  const alkGroupButtonText = alkGroupSection
    ? language === "en"
      ? alkGroupSection.button_text_en
      : alkGroupSection.button_text_tr
    : "";

  const alkGroupButtonUrl = alkGroupSection?.button_url;
  const alkGroupImageUrl = alkGroupSection?.image_url;
  const alkGroupSubImageUrl = alkGroupSection?.subimage_url;

  // What We Produce section'ı bul
  const whatWeProduceSection = settings?.sections_our_story?.find(
    (section) =>
      section.type === "what_do_we_produce" &&
      section.name === "what_we_produce"
  );

  const whatWeProduceTitle = whatWeProduceSection
    ? language === "en"
      ? whatWeProduceSection.title_en
      : whatWeProduceSection.title_tr
    : "";

  const whatWeProduceDescription = whatWeProduceSection
    ? language === "en"
      ? whatWeProduceSection.description_en
      : whatWeProduceSection.description_tr
    : "";

  const whatWeProduceImageUrl = whatWeProduceSection?.image_url;
  const whatWeProduceMobileImageUrl = whatWeProduceSection?.mobile_image_url;

  // Best Selling section'ı bul
  const bestSellingSection = settings?.sections_our_story?.find(
    (section) =>
      section.type === "best_selling_accessories" &&
      section.name === "best_selling"
  );

  const bestSellingSubtitle = bestSellingSection
    ? language === "en"
      ? bestSellingSection.subtitle_en
      : bestSellingSection.subtitle_tr
    : "";

  const bestSellingTitle = bestSellingSection
    ? language === "en"
      ? bestSellingSection.title_en
      : bestSellingSection.title_tr
    : "";

  const bestSellingText = bestSellingSection
    ? language === "en"
      ? bestSellingSection.description_en
      : bestSellingSection.description_tr
    : "";

  const bestSellingButtonText = bestSellingSection
    ? language === "en"
      ? bestSellingSection.button_text_en
      : bestSellingSection.button_text_tr
    : "";

  const bestSellingButtonUrl = bestSellingSection?.button_url;
  const bestSellingImageUrl = bestSellingSection?.image_url;
  const bestSellingSubImageUrl = bestSellingSection?.subimage_url;

  // Health and Quality section'ı bul
  const healthQualitySection = settings?.sections_our_story?.find(
    (section) =>
      section.type === "health_and_quality" && section.name === "health_quality"
  );

  const healthQualitySubtitle = healthQualitySection
    ? language === "en"
      ? healthQualitySection.subtitle_en
      : healthQualitySection.subtitle_tr
    : "";

  const healthQualityTitle = healthQualitySection
    ? language === "en"
      ? healthQualitySection.title_en
      : healthQualitySection.title_tr
    : "";

  const healthQualityText = healthQualitySection
    ? language === "en"
      ? healthQualitySection.description_en
      : healthQualitySection.description_tr
    : "";

  const healthQualityButtonText = healthQualitySection
    ? language === "en"
      ? healthQualitySection.button_text_en
      : healthQualitySection.button_text_tr
    : "";

  const healthQualityButtonUrl = healthQualitySection?.button_url;
  const healthQualityImageUrl = healthQualitySection?.image_url;
  const healthQualitySubImageUrl = healthQualitySection?.subimage_url;

  // Safe Production section'ı bul
  const safeProductionSection = settings?.sections_our_story?.find(
    (section) =>
      section.type === "safe_facilities" && section.name === "safe_production"
  );

  const safeProductionSubtitle = safeProductionSection
    ? language === "en"
      ? safeProductionSection.subtitle_en
      : safeProductionSection.subtitle_tr
    : "";

  const safeProductionTitle = safeProductionSection
    ? language === "en"
      ? safeProductionSection.title_en
      : safeProductionSection.title_tr
    : "";

  const safeProductionText = safeProductionSection
    ? language === "en"
      ? safeProductionSection.description_en
      : safeProductionSection.description_tr
    : "";

  const safeProductionButtonText = safeProductionSection
    ? language === "en"
      ? safeProductionSection.button_text_en
      : safeProductionSection.button_text_tr
    : "";

  const safeProductionButtonUrl = safeProductionSection?.button_url;
  const safeProductionImageUrl = safeProductionSection?.image_url;
  const safeProductionSubImageUrl = safeProductionSection?.subimage_url;

  // Safe Materials section'ı bul
  const safeMaterialsSection = settings?.sections_our_story?.find(
    (section) =>
      section.type === "harmless_materials" && section.name === "safe_materials"
  );

  const safeMaterialsSubtitle = safeMaterialsSection
    ? language === "en"
      ? safeMaterialsSection.subtitle_en
      : safeMaterialsSection.subtitle_tr
    : "";

  const safeMaterialsTitle = safeMaterialsSection
    ? language === "en"
      ? safeMaterialsSection.title_en
      : safeMaterialsSection.title_tr
    : "";

  const safeMaterialsText = safeMaterialsSection
    ? language === "en"
      ? safeMaterialsSection.description_en
      : safeMaterialsSection.description_tr
    : "";

  const safeMaterialsButtonText = safeMaterialsSection
    ? language === "en"
      ? safeMaterialsSection.button_text_en
      : safeMaterialsSection.button_text_tr
    : "";

  const safeMaterialsButtonUrl = safeMaterialsSection?.button_url;
  const safeMaterialsImageUrl = safeMaterialsSection?.image_url;
  const safeMaterialsSubImageUrl = safeMaterialsSection?.subimage_url;

  return (
    <>
      <Header />
      <StoryHero />
      <TurkeyMap />
      <ImageWText
        subtitle={alkGroupSubtitle || ""}
        title={alkGroupTitle || ""}
        text={alkGroupText || ""}
        backgroundImage={IMAGE_PATHS.BG_ATOLYEDEN_DUNYAYA}
        contentImage={alkGroupImageUrl || IMAGE_PATHS.CONTENT_AKAL_TEKSTIL}
        imageAlt={alkGroupTitle || imageAssets.altTexts.akalTekstil}
        showButton={!!alkGroupButtonText && !!alkGroupButtonUrl}
        reverse={false}
        subImage={alkGroupSubImageUrl || IMAGE_PATHS.CONTENT_ALK_GROUP}
        subImageAlt={imageAssets.altTexts.alkGroup}
        backgroundColor="#F5F5F5"
        buttonText={alkGroupButtonText || undefined}
        buttonUrl={alkGroupButtonUrl || undefined}
      />
      <WhatWeProduce
        title={whatWeProduceTitle}
        description={whatWeProduceDescription}
        image={whatWeProduceImageUrl || IMAGE_PATHS.CONTENT_WHAT_WE_PRODUCE}
        mobileImage={whatWeProduceMobileImageUrl || undefined}
        imageAlt={whatWeProduceTitle || imageAssets.altTexts.whatWeProduce}
      />
      <ImageWText
        subtitle={bestSellingSubtitle || ""}
        title={bestSellingTitle || ""}
        text={bestSellingText || ""}
        buttonText={bestSellingButtonText || undefined}
        buttonUrl={bestSellingButtonUrl || undefined}
        backgroundImage={IMAGE_PATHS.BG_ATOLYEDEN_DUNYAYA}
        contentImage={bestSellingImageUrl || IMAGE_PATHS.CONTENT_CARGO_TRUCK}
        imageAlt={bestSellingTitle || imageAssets.altTexts.cargoTruck}
        showButton={!!bestSellingButtonText && !!bestSellingButtonUrl}
        reverse={false}
        subImage={bestSellingSubImageUrl || undefined}
        backgroundColor="#F5F5F5"
      />
      <ImageWText
        subtitle={healthQualitySubtitle || ""}
        title={healthQualityTitle || ""}
        text={healthQualityText || ""}
        buttonText={healthQualityButtonText || undefined}
        buttonUrl={healthQualityButtonUrl || undefined}
        backgroundImage={IMAGE_PATHS.BG_CONTACT}
        contentImage={healthQualityImageUrl || IMAGE_PATHS.CONTENT_QUALITY}
        imageAlt={healthQualityTitle || imageAssets.altTexts.quality}
        showButton={!!healthQualityButtonText && !!healthQualityButtonUrl}
        reverse={true}
        subImage={healthQualitySubImageUrl || undefined}
        backgroundColor="#C0D4FD"
      />
      <ImageWText
        subtitle={safeProductionSubtitle || ""}
        title={safeProductionTitle || ""}
        text={safeProductionText || ""}
        buttonText={safeProductionButtonText || undefined}
        buttonUrl={safeProductionButtonUrl || undefined}
        backgroundImage={IMAGE_PATHS.BG_BLUE}
        contentImage={safeProductionImageUrl || IMAGE_PATHS.CONTENT_SUNLIGHT}
        imageAlt={safeProductionTitle || imageAssets.altTexts.sunlight}
        showButton={!!safeProductionButtonText && !!safeProductionButtonUrl}
        reverse={false}
        subImage={safeProductionSubImageUrl || undefined}
        textColor="#2E6193"
        backgroundColor="#FACBA2"
      />
      <ImageWText
        subtitle={safeMaterialsSubtitle || ""}
        title={safeMaterialsTitle || ""}
        text={safeMaterialsText || ""}
        buttonText={safeMaterialsButtonText || undefined}
        buttonUrl={safeMaterialsButtonUrl || undefined}
        backgroundImage={IMAGE_PATHS.BG_ATOLYEDEN_DUNYAYA}
        contentImage={safeMaterialsImageUrl || IMAGE_PATHS.CONTENT_KART_ETIKET}
        imageAlt={safeMaterialsTitle || imageAssets.altTexts.kartEtiket}
        showButton={!!safeMaterialsButtonText && !!safeMaterialsButtonUrl}
        reverse={true}
        subImage={safeMaterialsSubImageUrl || undefined}
      />
      <ChildSafety />
      <WholesaleInvite />
      <Footer theme="bordered" />
      <FooterBottom />
      <ScrollToTop />
    </>
  );
}
