"use client";

import React from "react";
import turkeyMap from "@/images/turkey-map-2.gif";

const TurkeyMap: React.FC = () => {
  return (
    <section className="turkey-map-section">
      <div className="turkey-map-container">
        <h2 className="turkey-map-title">
          <span className="turkey-map-small">TÜRKİYE'NİN</span>
          <span className="turkey-map-big">DÖRT BİR YANINDA</span>
        </h2>

        <div className="turkey-map-visual">
          <img
            src={turkeyMap.src}
            alt="Türkiye Haritası"
            className="turkey-map-image"
          />
        </div>

        <div className="map-text">
          <p>İstanbul'den Iğdır'a kadar,</p>
          <p>nerede bir çocuk gülüğü varsa oradayız.</p>
        </div>
      </div>
    </section>
  );
};

export default TurkeyMap;
