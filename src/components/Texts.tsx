"use client";

import React from "react";
import bgImage from "@/images/toptan-portal.png";
const Texts: React.FC = () => {
  return (
    <section className="texts-section" style={{
      backgroundImage: `url(${bgImage.src})`,
    }}>
      <div className="texts-container">
        <h2 className="texts-title">Kobiler için Toptan Portal</h2>
        <p className="texts-description">
          B2B toptan portal ile adeti düşük olan siparişlerinizi toptan portaldan
          verebilir, iş yerinize kargolatabilirsiniz.
        </p>
        <p className="texts-note">
          *Portal, sadece kayıtlı iş ortaklarımızın kullanımına açıktır.
        </p>
      </div>
    </section>
  );
};

export default Texts;
