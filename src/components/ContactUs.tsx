"use client";

import React, { useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';
import { IMAGE_PATHS } from "@/data/images";
import apiService from '@/services/api';

const ContactForm: React.FC = () => {
  const { language, t } = useLanguage();
  const { settings } = useSiteSettings();
  
  const contactSection = settings?.sections_contact?.[0];

  const title = contactSection
    ? language === "en"
      ? contactSection.title_en
      : contactSection.title_tr
    : "";

  const description = contactSection
    ? language === "en"
      ? contactSection.description_en
      : contactSection.description_tr
    : "";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
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
    setSuccess(false);

    // Validasyon
    if (!formData.name.trim()) {
      setError(language === "en" ? "Please enter your name." : "Lütfen adınızı girin.");
      return;
    }

    if (!formData.email.trim()) {
      setError(language === "en" ? "Please enter your email." : "Lütfen e-posta adresinizi girin.");
      return;
    }

    if (!formData.message.trim()) {
      setError(language === "en" ? "Please enter your message." : "Lütfen mesajınızı girin.");
      return;
    }

    if (!acceptTerms) {
      setError(language === "en" ? "Please accept the terms and conditions." : "Lütfen bilgilendirme metnini kabul edin.");
      return;
    }

    setLoading(true);

    try {
      await apiService.submitContactForm({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        message: formData.message.trim(),
        accept_terms: true,
        subscribe_newsletter: subscribeNewsletter,
      });

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setAcceptTerms(false);
      setSubscribeNewsletter(false);
      setError("");
    } catch (error) {
      console.error("Contact form error:", error);
      setError(
        language === "en"
          ? "An error occurred while sending your message. Please try again."
          : "Mesaj gönderilirken hata oluştu! Lütfen tekrar deneyin."
      );
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
        {title && (
          <h2 className="contact-title">{title}</h2>
        )}
        {description && (
          <div 
            className="contact-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

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
            type="tel"
            name="phone"
            value={formData.phone}
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
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              required
            />
            <div className="custom-checkbox">
              {acceptTerms && <div className="checkmark">
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
              checked={subscribeNewsletter}
              onChange={(e) => setSubscribeNewsletter(e.target.checked)}
            />
            <div className="custom-checkbox">
              {subscribeNewsletter && <div className="checkmark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093l3.473-4.425z"/></svg></div>}
            </div>
            <span
              dangerouslySetInnerHTML={{
                __html: t.contactUs.form.checkbox2
              }}
            />
          </label>

          <button type="submit" className="contact-button" disabled={loading}>
            {loading 
              ? (language === "en" ? "Sending..." : "Gönderiliyor...") 
              : t.contactUs.form.button}
          </button>

          {error && <p className="error-message" style={{ color: "red", marginTop: "8px" }}>{error}</p>}

          {success && (
            <p className="success-message" style={{ color: "green", marginTop: "8px" }}>
              {language === "en" 
                ? "Your message has been sent successfully!" 
                : "Mesajınız başarıyla gönderildi!"}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
