import React from "react";
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
  return (
    <>
      <Header />
      <StoryHero />
      <TurkeyMap />
      <ImageWText
        subtitle={contentData.imageWithText.alkGroup.subtitle}
        title={contentData.imageWithText.alkGroup.title}
        text={contentData.imageWithText.alkGroup.text}
        backgroundImage={IMAGE_PATHS.BG_ATOLYEDEN_DUNYAYA}
        contentImage={IMAGE_PATHS.CONTENT_AKAL_TEKSTIL}
        imageAlt={imageAssets.altTexts.akalTekstil}
        showButton={contentData.imageWithText.alkGroup.showButton}
        reverse={contentData.imageWithText.alkGroup.reverse}
        subImage={IMAGE_PATHS.CONTENT_ALK_GROUP}
        subImageAlt={imageAssets.altTexts.alkGroup}
        backgroundColor={contentData.imageWithText.alkGroup.backgroundColor}
      />
      <WhatWeProduce
        title={contentData.whatWeProduce.title}
        description={contentData.whatWeProduce.description}
        image={IMAGE_PATHS.CONTENT_WHAT_WE_PRODUCE}
        imageAlt={imageAssets.altTexts.whatWeProduce}
      />
      <ImageWText
        subtitle={contentData.imageWithText.bestSelling.subtitle}
        title={contentData.imageWithText.bestSelling.title}
        text={contentData.imageWithText.bestSelling.text}
        buttonText={contentData.imageWithText.bestSelling.buttonText}
        backgroundImage={IMAGE_PATHS.BG_ATOLYEDEN_DUNYAYA}
        contentImage={IMAGE_PATHS.CONTENT_CARGO_TRUCK}
        imageAlt={imageAssets.altTexts.cargoTruck}
        showButton={contentData.imageWithText.bestSelling.showButton}
        reverse={contentData.imageWithText.bestSelling.reverse}
        backgroundColor={contentData.imageWithText.bestSelling.backgroundColor}
      />
      <ImageWText
        subtitle={contentData.imageWithText.healthQuality.subtitle}
        title={contentData.imageWithText.healthQuality.title}
        text={contentData.imageWithText.healthQuality.text}
        buttonText={contentData.imageWithText.healthQuality.buttonText}
        backgroundImage={IMAGE_PATHS.BG_CONTACT}
        contentImage={IMAGE_PATHS.CONTENT_QUALITY}
        imageAlt={imageAssets.altTexts.quality}
        showButton={contentData.imageWithText.healthQuality.showButton}
        reverse={contentData.imageWithText.healthQuality.reverse}
        backgroundColor={contentData.imageWithText.healthQuality.backgroundColor}
      />
      <ImageWText
        subtitle={contentData.imageWithText.safeProduction.subtitle}
        title={contentData.imageWithText.safeProduction.title}
        text={contentData.imageWithText.safeProduction.text}
        buttonText={contentData.imageWithText.safeProduction.buttonText}
        backgroundImage={IMAGE_PATHS.BG_BLUE}
        contentImage={IMAGE_PATHS.CONTENT_SUNLIGHT}
        imageAlt={imageAssets.altTexts.sunlight}
        showButton={contentData.imageWithText.safeProduction.showButton}
        reverse={contentData.imageWithText.safeProduction.reverse}
        textColor={contentData.imageWithText.safeProduction.textColor}
        backgroundColor={contentData.imageWithText.safeProduction.backgroundColor}
      />
      <ImageWText
        subtitle={contentData.imageWithText.safeMaterials.subtitle}
        title={contentData.imageWithText.safeMaterials.title}
        text={contentData.imageWithText.safeMaterials.text}
        buttonText={contentData.imageWithText.safeMaterials.buttonText}
        backgroundImage={IMAGE_PATHS.BG_ATOLYEDEN_DUNYAYA}
        contentImage={IMAGE_PATHS.CONTENT_KART_ETIKET}
        imageAlt={imageAssets.altTexts.kartEtiket}
        showButton={contentData.imageWithText.safeMaterials.showButton}
        reverse={contentData.imageWithText.safeMaterials.reverse}
      />
       <ChildSafety />
       <WholesaleInvite />
       <Footer  theme="bordered"/>
      <FooterBottom />
      <ScrollToTop />
    </>
  );
}
