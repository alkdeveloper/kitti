"use client";

import React from "react";
import bgImage from "@/images/atolyeden-dunyaya-bg.png";
import pageImage from "@/images/atolyeden-dunyaya.gif";

const ImageWText: React.FC = () => {
  return (
    <section
      className="image-w-text-section"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="image-w-text-content">
        <h4 className="image-w-text-subtitle">
        Atölyeden Dünyaya
        </h4>
        <h2 className="image-w-text-title">GÜÇLÜ ÜRETİM KAPASİTESİ</h2>

        <div className="image-w-text-text">
          Kitti, 2.000 adetten <b>milyonlarca adede ulaşan üretim kapasitesi</b>yle
          farklı pazarlara hizmet veriyor. <br /><br /> %50 çocuk, %30 erkek, %20 kadın
          aksesuarlarından oluşan koleksiyonlarımız; İngiltere, Sırbistan, Rusya
          ve daha bir çok ülkeye ihraç ediliyor.
        </div>

        <button className="image-w-text-button">Bizimle toptan çalışın</button>
      </div>

      <div className="image-w-text-visual">
        <img src={pageImage.src} alt="Production Capacity" />
      </div>
      <div className="image-w-text-text-mobile">
          Kitti, 2.000 adetten <b>milyonlarca adede ulaşan üretim kapasitesi</b>yle
          farklı pazarlara hizmet veriyor. <br /><br /> %50 çocuk, %30 erkek, %20 kadın
          aksesuarlarından oluşan koleksiyonlarımız; İngiltere, Sırbistan, Rusya
          ve daha bir çok ülkeye ihraç ediliyor.
        </div>
    </section>
  );
};

export default ImageWText;
