"use client";

import React from "react";
import turkeyMap from "@/images/turkey-map.gif";
import whoWeAreBg from "@/images/who-we-are.png";

const AboutUs: React.FC = () => {
  return (
    <section
      className="about-us-section"
      style={{
        backgroundImage: `url(${whoWeAreBg.src})`,
      }}
    >
      <h4 className="about-us-subtitle">Atölyeden Dünyaya</h4>
      <h2 className="about-us-title">TÜRKİYE’NİN DÖRT BİR YANINDA</h2>

      <div className="about-us-map">
        <img src={turkeyMap.src} alt="Turkey Map" />
      </div>

      <p className="about-us-text">
        For years, Kitti products have been available at thousands of sales
        points all across Turkey.
      </p>
      <p className="about-us-text">
        With our export strength, our colorful accessories also meet children in
        different markets around the world.
      </p>
    </section>
  );
};

export default AboutUs;
