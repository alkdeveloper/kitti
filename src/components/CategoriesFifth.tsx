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

const CategoriesFifth: React.FC<CategoriesFifthProps> = ({
  title = "KATEGORİLER",
  description = "Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız.",
  categories,
  className,
}) => {
  return (
    <section className={`categories-fifth-section ${className ?? ""}`}>
      <div className="categories-fifth-container">
       {/*  <div className="categories-fifth-header">
          <h2 className="categories-fifth-title">{title}</h2>
          <p className="categories-fifth-description">{description}</p>
        </div> */}

        <div className="categories-fifth-grid">
          {categories.map((category) => {
            const [activeIndex, setActiveIndex] = useState<number>(0);

            return (
              <div 
                key={category.id} 
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
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesFifth;
