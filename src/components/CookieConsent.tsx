"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

const CookieConsent: React.FC = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`cookie-consent ${isAnimating ? 'animate-in' : 'animate-out'}`}>
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>🍪 {language === 'tr' ? 'Çerezleri Kabul Ediyor musunuz?' : 'Do you accept cookies?'}</h3>
          <p>
            {language === 'tr' ? (
              <>
                Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz. 
                Detaylı bilgi için{' '}
                <a href="/cerez-politikasi" target="_blank" rel="noopener noreferrer">
                  Çerez Politikası
                </a>
                'nı inceleyebilirsiniz.
              </>
            ) : (
              <>
                We use cookies to improve your experience on our website. 
                For detailed information, you can review our{' '}
                <a href="/cerez-politikasi" target="_blank" rel="noopener noreferrer">
                  Cookie Policy
                </a>
                .
              </>
            )}
          </p>
        </div>
        
        <div className="cookie-buttons">
          <button 
            onClick={handleReject}
            className="cookie-btn cookie-btn-reject"
          >
            {language === 'tr' ? 'Reddet' : 'Reject'}
          </button>
          <button 
            onClick={handleAccept}
            className="cookie-btn cookie-btn-accept"
          >
            {language === 'tr' ? 'Kabul Et' : 'Accept'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
