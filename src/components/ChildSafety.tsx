"use client";

import React from "react";
import smileGirl from "@/images/smile-girl.png";

const ChildSafety: React.FC = () => {
  return (
    <section 
      className="child-safety-section"
      style={{ backgroundImage: `url(${smileGirl.src})` }}
    >
      <div className="child-safety-container">
        <h2 className="child-safety-title">Çocuklardan ilham, güvenle büyüme</h2>
        <p className="child-safety-description">
          Yıllardır süren yolculuğumuzda işimizi güven, kalite ve yenilik 
          üzerine kurduk.
        </p>
      </div>
    </section>
  );
};

export default ChildSafety;
