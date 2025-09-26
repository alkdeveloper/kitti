"use client";

import React from "react";
import kittiComputer from "@/images/img-w-text-secondary-image.png";

const RegisterComponent: React.FC = () => {
  return (
    <section className="register-section">
      <div className="register-inner">
        <div className="register-left">
          <div className="register-block">
            <h3>Üye değil misiniz?</h3>
            <button className="register-btn">Başvur</button>
          </div>
          <div className="register-block">
            <h3>Üyeyseniz:</h3>
            <button className="register-btn">Giriş Yap</button>
          </div>
        </div>
        <div className="register-right">
          <img src={kittiComputer.src} alt="kitti portal bilgisayar" />
        </div>
      </div>
    </section>
  );
};

export default RegisterComponent;
