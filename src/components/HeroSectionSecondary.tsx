import React from "react";
import heroSecondaryBackground from "@/images/hero-secondary-bg.png";
import heroSecondaryMobile from "@/images/hero-secondary-bg-mobile.png";

const HeroSectionSecondary: React.FC = () => {
  return (
    <section className="hero-section-secondary">
      <div className="hero-container">
        <img
          src={heroSecondaryBackground.src}
          alt="Hero Background"
          className="hero-bg-normal"
        />

        <img
          src={heroSecondaryMobile.src}
          alt="Hero Background"
          className="hero-bg-mobile"
        />
        <div className="hero-content">
          <div className="hero-logo">
            <h2 className="hero-subtitle">1978’den bu güne</h2>
            <h1 className="hero-title">47+ Yıllık Deneyim</h1>
          </div>

          <div className="hero-text">
            <p>
              Kitti, yalnızca çocuk aksesuarlarında değil; erkek ve kadın
              koleksiyonlarıyla da dünyanın birçok pazarında tercih ediliyor.
            </p>
            <p>
              Bir çok ülkeye kadar genişleyen ihracat gücü, Kitti’yi global
              sahnede de güvenilir bir oyuncu haline getiriyor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSecondary;
