"use client";

import React from "react";
import bgImage from "@/images/atolyeden-dunyaya-bg.png";
import pageImage from "@/images/img-w-text-secondary-image.png";

const ImageWTextSecondary: React.FC = () => {
  return (
    <section
      className="image-w-text-section-secondary"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="image-w-text-content">
        <h4 className="image-w-text-subtitle">
          Sipariş sürecini kolaylaştırıyoruz
        </h4>
        <h2 className="image-w-text-title">İş ortaklarımız için iki yol</h2>

        <div className="image-w-text-text">
          Kitti, hem küçük işletmeler hem de büyük markalar için uygun sipariş
          modeli sunar.
          <br />
          <br />
          Küçük ve orta ölçekli işletmeler, B2B portalımıza giriş yaparak
          ürünleri inceleyebilir, güncel koleksiyonlarımızı görebilir ve küçük
          adetli siparişlerini kolayca verebilir.
          <br />
          <br />
          <b>
            Büyük ölçekli iş birlikleri için ise özel çözümler, esnek üretim
            planlaması ve güçlü lojistik ağımızla yanınızdayız.
          </b>
        </div>

        <div className="image-w-text-buttons-ctr">
          <button className="image-w-text-button">Toptan Portal</button>
          <button className="image-w-text-button">
            İş Birliği için İletişim
          </button>
        </div>
      </div>

      <div className="image-w-text-visual">
        <img src={pageImage.src} alt="Production Capacity" />
      </div>
      <div className="image-w-text-text-mobile">
        Küçük ve orta ölçekli işletmeler, B2B portalımıza giriş yaparak ürünleri
        inceleyebilir, güncel koleksiyonlarımızı görebilir ve küçük adetli
        siparişlerini kolayca verebilir.
        <button className="image-w-text-button mobile-show">
          İş Birliği için İletişim
        </button>
        <br />
        <br />
        <b>
          Büyük ölçekli iş birlikleri için ise özel çözümler, esnek üretim
          planlaması ve güçlü lojistik ağımızla yanınızdayız.
        </b>
        <button className="image-w-text-button mobile-show">
          Toptan Portal
        </button>
      </div>
    </section>
  );
};

export default ImageWTextSecondary;
