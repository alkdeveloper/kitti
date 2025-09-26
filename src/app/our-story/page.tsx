"use client";
import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
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
import { contentData } from "@/data/content";
import { imageAssets, IMAGE_PATHS } from "@/data/images";

export default function OurStory() {
  const { t } = useLanguage();
  
  return (
    <>
      <Header />
      <StoryHero />
      <TurkeyMap />
      <ImageWText
        subtitle={t.ourStory.imageWithText.alkGroup.subtitle}
        title={t.ourStory.imageWithText.alkGroup.title}
        text={t.ourStory.imageWithText.alkGroup.text}
        backgroundImage={IMAGE_PATHS.BG_ATOLYEDEN_DUNYAYA}
        contentImage={IMAGE_PATHS.CONTENT_AKAL_TEKSTIL}
        imageAlt={imageAssets.altTexts.akalTekstil}
        showButton={t.ourStory.imageWithText.alkGroup.showButton}
        reverse={t.ourStory.imageWithText.alkGroup.reverse}
        subImage={IMAGE_PATHS.CONTENT_ALK_GROUP}
        subImageAlt={imageAssets.altTexts.alkGroup}
        backgroundColor={t.ourStory.imageWithText.alkGroup.backgroundColor}
      />
      <WhatWeProduce
        title={t.ourStory.whatWeProduce.title}
        description={t.ourStory.whatWeProduce.description}
        image={IMAGE_PATHS.CONTENT_WHAT_WE_PRODUCE}
        imageAlt={imageAssets.altTexts.whatWeProduce}
      />
      <ImageWText
        subtitle={t.ourStory.imageWithText.bestSelling.subtitle}
        title={t.ourStory.imageWithText.bestSelling.title}
        text={t.ourStory.imageWithText.bestSelling.text}
        buttonText={t.ourStory.imageWithText.bestSelling.buttonText}
        backgroundImage={IMAGE_PATHS.BG_ATOLYEDEN_DUNYAYA}
        contentImage={IMAGE_PATHS.CONTENT_CARGO_TRUCK}
        imageAlt={imageAssets.altTexts.cargoTruck}
        showButton={t.ourStory.imageWithText.bestSelling.showButton}
        reverse={t.ourStory.imageWithText.bestSelling.reverse}
        backgroundColor={t.ourStory.imageWithText.bestSelling.backgroundColor}
      />
      <ImageWText
        subtitle={t.ourStory.imageWithText.healthQuality.subtitle}
        title={t.ourStory.imageWithText.healthQuality.title}
        text={t.ourStory.imageWithText.healthQuality.text}
        buttonText={t.ourStory.imageWithText.healthQuality.buttonText}
        backgroundImage={IMAGE_PATHS.BG_CONTACT}
        contentImage={IMAGE_PATHS.CONTENT_QUALITY}
        imageAlt={imageAssets.altTexts.quality}
        showButton={t.ourStory.imageWithText.healthQuality.showButton}
        reverse={t.ourStory.imageWithText.healthQuality.reverse}
        backgroundColor={t.ourStory.imageWithText.healthQuality.backgroundColor}
      />
      <ImageWText
        subtitle={t.ourStory.imageWithText.safeProduction.subtitle}
        title={t.ourStory.imageWithText.safeProduction.title}
        text={t.ourStory.imageWithText.safeProduction.text}
        buttonText={t.ourStory.imageWithText.safeProduction.buttonText}
        backgroundImage={IMAGE_PATHS.BG_BLUE}
        contentImage={IMAGE_PATHS.CONTENT_SUNLIGHT}
        imageAlt={imageAssets.altTexts.sunlight}
        showButton={t.ourStory.imageWithText.safeProduction.showButton}
        reverse={t.ourStory.imageWithText.safeProduction.reverse}
        textColor={t.ourStory.imageWithText.safeProduction.textColor}
        backgroundColor={t.ourStory.imageWithText.safeProduction.backgroundColor}
      />
      <ImageWText
        subtitle={t.ourStory.imageWithText.safeMaterials.subtitle}
        title={t.ourStory.imageWithText.safeMaterials.title}
        text={t.ourStory.imageWithText.safeMaterials.text}
        buttonText={t.ourStory.imageWithText.safeMaterials.buttonText}
        backgroundImage={IMAGE_PATHS.BG_ATOLYEDEN_DUNYAYA}
        contentImage={IMAGE_PATHS.CONTENT_KART_ETIKET}
        imageAlt={imageAssets.altTexts.kartEtiket}
        showButton={t.ourStory.imageWithText.safeMaterials.showButton}
        reverse={t.ourStory.imageWithText.safeMaterials.reverse}
      />
       <ChildSafety />
       <WholesaleInvite />
       <Footer  theme="bordered"/>
      <FooterBottom />
      <ScrollToTop />
    </>
  );
}
