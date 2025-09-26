"use client";

import React, { useEffect, useRef, useState } from "react";

export interface SliderItem {
  id?: string | number;
  image: string;
  alt?: string;
}

interface SliderProps {
  slides: SliderItem[];
  autoPlay?: boolean;
  intervalMs?: number;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  slides,
  autoPlay = true,
  intervalMs = 5000,
  className,
}) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
