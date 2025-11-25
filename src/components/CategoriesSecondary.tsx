"use client";

import React, { useState } from "react";
import catIcon from "@/images/cat-icon.png";

export interface CategorySecondaryItem {
  id: string | number;
  title: string;
  description: string;
  images: string[];
  alt?: string;
}

interface CategoriesSecondaryProps {
  title?: string;
  description?: string;
  categories: CategorySecondaryItem[];
  className?: string;
}

const CategorySecondaryCard: React.FC<{ category: CategorySecondaryItem }> = ({ category }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="category-secondary-card">
      <div className="category-secondary-image">
        <div className="product-placeholder">
          {category.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={category.alt ?? category.title}
              data-index={index}
              className={activeIndex === index ? "active" : ""}
            />
          ))}
        </div>

        <div className="color-options">
          {category.images.map((_, index) => (
            <div
              key={index}
              className={`color-swatch ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="category-secondary-content">
        <h3 className="category-secondary-card-title">
          <span>{category.title}</span>
          <div className="ico">
            <img src={catIcon.src} alt={category.title} />
          </div>
        </h3>
        <p className="category-secondary-card-description">
          {category.description}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <button className="category-secondary-card-button">
            İletişime Geç
          </button>
        </div>
      </div>
    </div>
  );
};

const CategoriesSecondary: React.FC<CategoriesSecondaryProps> = ({
  title = "KATEGORİLER",
  description = "Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız.",
  categories,
  className,
}) => {
  return (
    <section className={`categories-secondary-section ${className ?? ""}`}>
      <div className="categories-secondary-container">
        <div className="categories-secondary-header">
          <h2 className="categories-secondary-title">{title}</h2>
          <p className="categories-secondary-description">{description}</p>
        </div>

        <div className="categories-secondary-list">
          {categories.map((category, index) => (
            <CategorySecondaryCard key={`${category.id}-${index}-${category.title}`} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSecondary;
