"use client";

import React from "react";
import ProductCard from "./ProductCard";

export interface CategoryItem {
  id: string | number;
  category: string;
  images: string[];
}

interface CategoriesProps {
  title?: string;
  description?: string;
  categories: CategoryItem[];
  className?: string;
}

const Categories: React.FC<CategoriesProps> = ({
  title = "KATEGORİLER",
  description = "Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız.",
  categories,
  className,
}) => {
  return (
    <section className={`categories-section ${className ?? ""}`}>
      <div className="categories-container">
        <div className="categories-header">
          <h2 className="categories-title">{title}</h2>
          <p className="categories-description">{description}</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <ProductCard
              key={category.id}
              category={category.category}
              images={category.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
