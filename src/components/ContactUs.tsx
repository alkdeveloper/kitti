"use client";

import React, { useState } from "react";
import { contentData } from "@/data/content";
import { IMAGE_PATHS } from "@/data/images";

const ContactForm: React.FC = () => {
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
        <h2 className="contact-title">{contentData.contactUs.title}</h2>
        <p className="contact-description">
          {contentData.contactUs.description}
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={contentData.contactUs.form.namePlaceholder}
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={contentData.contactUs.form.emailPlaceholder}
            className="contact-input"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={contentData.contactUs.form.subjectPlaceholder}
            className="contact-input"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={contentData.contactUs.form.messagePlaceholder}
            className="contact-textarea"
          />

          <label className="contact-checkbox">
            <input
              type="checkbox"
              checked={checkbox1}
              onChange={(e) => setCheckbox1(e.target.checked)}
            />
            <div className="custom-checkbox">
              {checkbox1 && <div className="checkmark">✓</div>}
            </div>
            <span
              dangerouslySetInnerHTML={{
                __html: contentData.contactUs.form.checkbox1Text.replace(
                  "Bilgilendirme ve Aydınlatma Metni",
                  "<b>Bilgilendirme ve Aydınlatma Metni</b>"
                ),
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
              {checkbox2 && <div className="checkmark">✓</div>}
            </div>
            <span
              dangerouslySetInnerHTML={{
                __html: contentData.contactUs.form.checkbox2Text.replace(
                  "elektronik ileti",
                  "<b>elektronik ileti</b>"
                ),
              }}
            />
          </label>

          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? "Gönderiliyor..." : contentData.contactUs.form.buttonText}
          </button>

          {error && <p className="error-message" style={{ color: "red", marginTop: "8px" }}>{error}</p>}

          {success && <p className="success-message" style={{ color: "green", marginTop: "8px" }}>Mesajınız başarıyla gönderildi!</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
