"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import apiService from '@/services/api';
import { Slider as SliderType } from '@/services/api';

export interface SliderItem {
  id?: string | number;
  image: string;
  alt?: string;
}

interface SliderProps {
  slides?: SliderItem[];
  autoPlay?: boolean;
  intervalMs?: number;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  slides: propSlides,
  autoPlay = true,
  intervalMs = 5000,
  className,
}) => {
  const { language } = useLanguage();
  const [slides, setSlides] = useState<SliderItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchSliders = async () => {
      if (propSlides) {
        setSlides(propSlides);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await apiService.getSliders(language === 'en' ? 'en' : 'tr');
        if (response && response.results) {
          const formattedSlides: SliderItem[] = response.results.map((slider: SliderType) => ({
            id: slider.id,
            image: slider.image_url,
            alt: language === 'en' ? slider.title_en : slider.title_tr,
          }));
          setSlides(formattedSlides);
        }
      } catch (error) {
        console.error('Error fetching sliders:', error);
        setSlides([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSliders();
  }, [language, propSlides]);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, intervalMs, slides.length]);

  const goTo = (i: number) => setIndex(i);

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowLeft") {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
    if (e.key === "ArrowRight") {
      setIndex((prev) => (prev + 1) % slides.length);
    }
  };

  if (loading) {
    return (
      <div className={`slider ${className ?? ""} slider-loading`}>
        <div className="slider-loading-spinner">Loading...</div>
      </div>
    );
  }

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className={`slider ${className ?? ""}`} tabIndex={0} onKeyDown={onKeyDown}>
      {slides.map((slide, i) => (
        <div className={`slider-slide ${i === index ? "active" : ""}`} key={slide.id ?? i}>
          <div className="slider-content">
            <div className="slider-image">
              <img src={slide.image} alt={slide.alt ?? ""} />
            </div>
          </div>
        </div>
      ))}

      <div className="slider-dots" aria-label="Slider dots">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            className={`slider-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
