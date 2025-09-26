"use client";

import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import kittiComputer from "@/images/img-w-text-secondary-image.png";

const RegisterComponent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="register-section">
      <div className="register-inner">
        <div className="register-left">
          <div className="register-block">
            <h3>{t.register.notMember}</h3>
            <button className="register-btn">{t.register.apply}</button>
          </div>
          <div className="register-block">
            <h3>{t.register.member}</h3>
            <button className="register-btn">{t.register.login}</button>
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
