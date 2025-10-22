"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t } = useLanguage();

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
          subtitle={t.homePage.imageWText.subtitle}
          title={t.homePage.imageWText.title}
          text={t.homePage.imageWText.text}
          buttonText={t.homePage.imageWText.buttonText}
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
        <WholeSaleCategories
          tabs={[
            {
              key: "winter-beanies",
              label: "Kışlık Bere",
              title: "Kışlık Bere Koleksiyonu",
              paragraphs:
                "Soğuk kış günlerinde sizi sıcacık tutacak, pamuk ve yün karışımlı modern tasarımlar. Hem şıklığı hem de rahatlığı bir arada sunuyoruz.",
            },
            {
              key: "winter-gloves",
              label: "Kışlık Eldiven",
              title: "Kışlık Eldiven Koleksiyonu",
              paragraphs:
                "Polar, deri ve örgü seçenekleriyle eldiven çeşitlerimiz hem günlük kullanım hem de outdoor aktiviteler için uygundur.",
            },
            {
              key: "winter-hats",
              label: "Kışlık Şapka",
              title: "Kışlık Şapka Koleksiyonu",
              paragraphs:
                "Rüzgarı kesen, su geçirmez ve modaya uygun kışlık şapkalarla soğuktan korunurken tarzınızı da koruyun.",
            },
            {
              key: "wholesale-beanies",
              label: "Toptan Bere",
              title: "Toptan Bere Çözümleri",
              paragraphs:
                "Perakende satışlarınız için uygun fiyatlı, çok çeşitli renk ve model seçenekleriyle toptan bere siparişleri.",
            },
            {
              key: "wholesale-gloves",
              label: "Toptan Eldiven",
              title: "Toptan Eldiven Çözümleri",
              paragraphs:
                "Farklı malzeme ve kalınlıklarda üretilmiş eldiven modellerimizi işletmenize özel toptan sipariş verebilirsiniz.",
            },
            {
              key: "winter-earmuffs",
              label: "Kışlık Kulaklık",
              title: "Kışlık Kulaklık Koleksiyonu",
              paragraphs:
                "Yumuşak kürklü ve ayarlanabilir kulaklıklarla kulaklarınızı koruyun. Spor yaparken ya da günlük kullanımda idealdir.",
            },
            {
              key: "wholesale-earmuffs",
              label: "Toptan Kulaklık",
              title: "Toptan Kışlık Kulaklık",
              paragraphs:
                "Mağazalar ve işletmeler için çeşitli renklerde kulaklıkları avantajlı fiyatlarla toptan sunuyoruz.",
            },
            {
              key: "winter-scarves",
              label: "Kışlık Atkı",
              title: "Kışlık Atkı Koleksiyonu",
              paragraphs:
                "Örgü, kaşmir ve pamuklu atkılarla hem sıcak kalın hem de tarzınızı tamamlayın. Farklı desen ve renk seçenekleri mevcut.",
            },
            {
              key: "wholesale-scarves",
              label: "Toptan Atkı",
              title: "Toptan Atkı Çözümleri",
              paragraphs:
                "İşletmeler için toplu alımlarda cazip fiyatlarla kaliteli atkı seçenekleri sunuyoruz.",
            },
            {
              key: "winter-socks",
              label: "Kışlık Çorap",
              title: "Kışlık Çorap Koleksiyonu",
              paragraphs:
                "Yünlü, pamuklu ve termal çoraplarla ayaklarınızı sıcacık tutun. Günlük kullanımdan outdoor aktivitelerine kadar her ihtiyaca uygun.",
            },
            {
              key: "wholesale-socks",
              label: "Toptan Çorap",
              title: "Toptan Çorap Çözümleri",
              paragraphs:
                "Her yaş grubuna hitap eden çorap modellerini perakende satışlarınıza özel toptan avantajlarla sunuyoruz.",
            },
          ]}
          defaultActive="winter-gloves"
        />
      <ScrollToTop />
      </main>
      <Footer theme="bordered border-t-0" />
      <FooterBottom />
    </>
  );
};

export default HomePage;
