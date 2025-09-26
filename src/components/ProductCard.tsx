"use client";

import React, { useState } from "react";
import catIcon from "@/images/cat-icon.png";

export interface ProductCardProps {
  id?: string | number;
  category: string;
  images: string[];
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  category,
  images,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={`product-card ${className ?? ""}`}>
      <div className="product-image">
        <div className="product-placeholder">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              data-index={index}
              className={activeIndex === index ? "active" : ""}
            />
          ))}
        </div>

        <div className="color-options">
          {images.map((_, index) => (
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
      <div className="product-info">
        <div className="category-icon">
          <img src={catIcon.src} alt="" />
        </div>
        <span className="category-name">{category}</span>
      </div>
    </div>
  );
};

export default ProductCard;
