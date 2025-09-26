"use client";
import React from "react";
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
import bgImage from "@/images/atolyeden-dunyaya-bg.png";
import pageImage from "@/images/atolyeden-dunyaya.gif";


const HomePage: React.FC = () => {
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
        <ImageWText
          subtitle="Atölyeden Dünyaya"
          title="GÜÇLÜ ÜRETİM KAPASİTESİ"
          text="Kitti, 2.000 adetten <b>milyonlarca adede ulaşan üretim kapasitesi</b>yle farklı pazarlara hizmet veriyor. <br /><br /> %50 çocuk, %30 erkek, %20 kadın aksesuarlarından oluşan koleksiyonlarımız; İngiltere, Sırbistan, Rusya ve daha bir çok ülkeye ihraç ediliyor."
          buttonText="Bizimle toptan çalışın"
          backgroundImage={bgImage.src}
          contentImage={pageImage.src}
          imageAlt="Production Capacity"
          showButton={true}
          reverse={false}
          backgroundColor="#F5F5F5"
          onButtonClick={() => console.log("Buton tıklandı!")}
        />
        <HeroSectionSecondary />
        <ImageWTextSecondary />
      </main>
      <Footer />
      <FooterBottom />
      <ScrollToTop />
    </>
  );
};

export default HomePage;
