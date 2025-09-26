"use client";

import React, { useState } from "react";
import contactBg from "@/images/contact-bg.png";

const ContactForm: React.FC = () => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  return (
    <section className="contact-section" style={{
      backgroundImage: `url(${contactBg.src})`,
    }}>
      <div className="contact-container">
        <h2 className="contact-title">Kitti ile iletişime geçin:</h2>
        <p className="contact-description">
          Toptan satış, iş birliği toptan portalı ya da merak ettiğiniz her konu
          için bizimle kolayca bağlantı kurabilirsiniz.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Ad Soyad" className="contact-input" />
          <input type="email" placeholder="E-Mail" className="contact-input" />
          <input type="text" placeholder="Konu" className="contact-input" />
          <textarea placeholder="Mesaj" className="contact-textarea" />

          <label className="contact-checkbox">
            <input 
              type="checkbox" 
              checked={checkbox1}
              onChange={(e) => setCheckbox1(e.target.checked)}
            />
            <div className="custom-checkbox">
              {checkbox1 && <div className="checkmark">✓</div>}
            </div>
            <span>
              <b>Bilgilendirme ve Aydınlatma Metni</b>'ni okudum kabul ediyorum.
            </span>
          </label>

          <label className="contact-checkbox">
            <input 
              type="checkbox" 
              checked={checkbox2}
              onChange={(e) => setCheckbox2(e.target.checked)}
            />
            <div className="custom-checkbox">
              {checkbox2 && <div className="checkmark">✓</div>}
            </div>
            <span>
              Kampanyalardan haberdar olmak için <b>elektronik ileti</b> almak
              istiyorum.
            </span>
          </label>

          <button type="submit" className="contact-button">
            GÖNDER
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
