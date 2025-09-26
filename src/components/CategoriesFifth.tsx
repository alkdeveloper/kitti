"use client";

import React, { useState } from "react";

export interface CategoryFifthItem {
  id: string | number;
  title: string;
  description: string;
  images: string[];
  alt?: string;
  backgroundColor?: string;
}

interface CategoriesFifthProps {
  title?: string;
  description?: string;
  categories: CategoryFifthItem[];
  className?: string;
}

const CategoryFifthCard: React.FC<{ category: CategoryFifthItem }> = ({ category }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div 
      className="categories-fifth-card"
      style={{ backgroundColor: category.backgroundColor || "#FFF" }}
    >
      <div className="categories-fifth-image">
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
      <div className="categories-fifth-content">
        <h3 className="categories-fifth-card-title">{category.title}</h3>
        <p className="categories-fifth-card-description">{category.description}</p>
      </div>
    </div>
  );
};

const CategoriesFifth: React.FC<CategoriesFifthProps> = ({
  categories,
  className,
}) => {
  return (
    <section className={`categories-fifth-section ${className ?? ""}`}>
      <div className="categories-fifth-container">
        <div className="categories-fifth-grid">
          {categories.map((category) => (
            <CategoryFifthCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesFifth;
