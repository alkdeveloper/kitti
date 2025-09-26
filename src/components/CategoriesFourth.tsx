"use client";

import React, { useState } from "react";

export interface CategoryFourthItem {
  id: string | number;
  title: string;
  description: string;
  images: string[];
  alt?: string;
  backgroundColor?: string;
}

interface CategoriesFourthProps {
  title?: string;
  description?: string;
  categories: CategoryFourthItem[];
  className?: string;
}

const CategoryFourthCard: React.FC<{ category: CategoryFourthItem }> = ({ category }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div 
      className="categories-fourth-card"
      style={{ backgroundColor: category.backgroundColor || "#FFF" }}
    >
      <div className="categories-fourth-image">
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
      <div className="categories-fourth-content">
        <h3 className="categories-fourth-card-title">{category.title}</h3>
        <p className="categories-fourth-card-description">{category.description}</p>
        <button className="categories-fourth-card-button">
          İletişime Geç
        </button>
      </div>
    </div>
  );
};

const CategoriesFourth: React.FC<CategoriesFourthProps> = ({
  title = "KATEGORİLER",
  description = "Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız.",
  categories,
  className,
}) => {
  return (
    <section className={`categories-fourth-section ${className ?? ""}`}>
      <div className="categories-fourth-container">
       {/*  <div className="categories-fourth-header">
          <h2 className="categories-fourth-title">{title}</h2>
          <p className="categories-fourth-description">{description}</p>
        </div> */}

        <div className="categories-fourth-grid">
          {categories.map((category) => (
            <CategoryFourthCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesFourth;
