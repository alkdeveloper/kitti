"use client";

import React, { useState } from "react";
    import { useLanguage } from '@/contexts/LanguageContext';
import { IMAGE_PATHS } from "@/data/images";

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); 

    if (!checkbox1) {
      setError("Lütfen bilgilendirme metnini kabul edin.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          izin: checkbox2,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setCheckbox1(false);
        setCheckbox2(false);
      } else {
        setError("Mesaj gönderilirken hata oluştu!");
      }
    } catch (error) {
      console.error(error);
      setError("Bağlantı hatası! Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="contact-section"
      style={{
        backgroundImage: `url(${IMAGE_PATHS.BG_CONTACT})`,
      }}
    >
      <div className="contact-container">
        <h2 className="contact-title">{t.contactUs.title}</h2>
        <div className="contact-description">
          {t.contactUs.description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.contactUs.form.name}
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.contactUs.form.email}
            className="contact-input"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t.contactUs.form.phone}
            className="contact-input"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.contactUs.form.message}
            className="contact-textarea"
          />

          <label className="contact-checkbox">
            <input
              type="checkbox"
              checked={checkbox1}
              onChange={(e) => setCheckbox1(e.target.checked)}
            />
            <div className="custom-checkbox">
              {checkbox1 && <div className="checkmark">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093l3.473-4.425z"/></svg>
                </div>}
            </div>
            <span
              dangerouslySetInnerHTML={{
                __html: t.contactUs.form.checkbox1
              }}
            />
          </label>

          <label className="contact-checkbox">
            <input
              type="checkbox"
              checked={checkbox2}
              onChange={(e) => setCheckbox2(e.target.checked)}
            />
            <div className="custom-checkbox">
              {checkbox2 && <div className="checkmark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093l3.473-4.425z"/></svg></div>}
            </div>
            <span
              dangerouslySetInnerHTML={{
                __html: t.contactUs.form.checkbox2
              }}
            />
          </label>

          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? "Gönderiliyor..." : t.contactUs.form.button}
          </button>

          {error && <p className="error-message" style={{ color: "red", marginTop: "8px" }}>{error}</p>}

          {success && <p className="success-message" style={{ color: "green", marginTop: "8px" }}>Mesajınız başarıyla gönderildi!</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
