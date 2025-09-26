import subImage from "@/images/alk-group.png";
import bgImage from "@/images/atolyeden-dunyaya-bg.png";
import pageImage from "@/images/Akal-Tekstil-2.png";
import whatweproduceImage from "@/images/what-we-produce.png";
import CargoTruck from "@/images/kamyon-copy.png";
import qualityImage from "@/images/quality-image.png";
import contactBg from "@/images/contact-bg.png";
import blueBg from "@/images/blue-bg.png";
import sunlightImage from "@/images/gunes-isik.png";
import kartEtiket from "@/images/kart-etiket.png";
import babyImage from "@/images/baby-contour.png";
import turkeyMap from "@/images/turkey-map-2.gif";
import smileGirl from "@/images/smile-girl.png";
import wholesaleImage from "@/images/whole-sale.png";
import turkeyMapGif from "@/images/turkey-map.gif";
import whoWeAreBg from "@/images/who-we-are.png";
import heroBackground from "@/images/hero-first-bg.png";
import heroMobile from "@/images/hero-first-bg-mobile.png";
import heroSecondaryBackground from "@/images/hero-secondary-bg.png";
import heroSecondaryMobile from "@/images/hero-secondary-bg-mobile.png";
import imgWTextSecondaryImage from "@/images/img-w-text-secondary-image.png";

export const imageAssets = {
  babyContour: babyImage.src,
  
  turkeyMap: turkeyMap.src,
  
  backgrounds: {
    atolyedenDunyaya: bgImage.src,
    contact: contactBg.src,
    blue: blueBg.src,
  },
  
      content: {
        alkGroup: subImage.src,
        akalTekstil: pageImage.src,
        whatWeProduce: whatweproduceImage.src,
        cargoTruck: CargoTruck.src,
        quality: qualityImage.src,
        sunlight: sunlightImage.src,
        kartEtiket: kartEtiket.src,
        smileGirl: smileGirl.src,
        wholesale: wholesaleImage.src,
        turkeyMapGif: turkeyMapGif.src,
        whoWeAre: whoWeAreBg.src,
        heroBackground: heroBackground.src,
        heroMobile: heroMobile.src,
        heroSecondaryBackground: heroSecondaryBackground.src,
        heroSecondaryMobile: heroSecondaryMobile.src,
        imgWTextSecondary: imgWTextSecondaryImage.src,
      },
  
      altTexts: {
        babyContour: "Bebek Karakter",
        turkeyMap: "Türkiye Haritası",
        alkGroup: "ALK Group Logo",
        akalTekstil: "Akal Tekstil",
        whatWeProduce: "Kitti Ürünleri",
        cargoTruck: "Kitti Kargo Kamyonu",
        quality: "Kalite Kontrol",
        sunlight: "Güvenli Üretim Tesisi",
        kartEtiket: "Güvenli Etiketler",
        smileGirl: "Mutlu Çocuk",
        wholesale: "Toptan Satış Davet",
        turkeyMapGif: "Türkiye Haritası Animasyonu",
        whoWeAre: "Biz Kimiz Arka Plan",
        heroBackground: "Ana Sayfa Hero Arka Plan",
        heroMobile: "Ana Sayfa Hero Mobil Arka Plan",
        heroSecondaryBackground: "İkinci Hero Arka Plan",
        heroSecondaryMobile: "İkinci Hero Mobil Arka Plan",
        imgWTextSecondary: "Üretim Kapasitesi",
      }
};

export const IMAGE_PATHS = {
  BABY_CONTOUR: imageAssets.babyContour,
  TURKEY_MAP: imageAssets.turkeyMap,
  BG_ATOLYEDEN_DUNYAYA: imageAssets.backgrounds.atolyedenDunyaya,
  BG_CONTACT: imageAssets.backgrounds.contact,
  BG_BLUE: imageAssets.backgrounds.blue,
  CONTENT_ALK_GROUP: imageAssets.content.alkGroup,
  CONTENT_AKAL_TEKSTIL: imageAssets.content.akalTekstil,
  CONTENT_WHAT_WE_PRODUCE: imageAssets.content.whatWeProduce,
  CONTENT_CARGO_TRUCK: imageAssets.content.cargoTruck,
  CONTENT_QUALITY: imageAssets.content.quality,
  CONTENT_SUNLIGHT: imageAssets.content.sunlight,
  CONTENT_KART_ETIKET: imageAssets.content.kartEtiket,
  CONTENT_SMILE_GIRL: imageAssets.content.smileGirl,
  CONTENT_WHOLESALE: imageAssets.content.wholesale,
  CONTENT_TURKEY_MAP_GIF: imageAssets.content.turkeyMapGif,
  CONTENT_WHO_WE_ARE: imageAssets.content.whoWeAre,
  CONTENT_HERO_BACKGROUND: imageAssets.content.heroBackground,
  CONTENT_HERO_MOBILE: imageAssets.content.heroMobile,
  CONTENT_HERO_SECONDARY_BACKGROUND: imageAssets.content.heroSecondaryBackground,
  CONTENT_HERO_SECONDARY_MOBILE: imageAssets.content.heroSecondaryMobile,
  CONTENT_IMG_W_TEXT_SECONDARY: imageAssets.content.imgWTextSecondary,
} as const;
