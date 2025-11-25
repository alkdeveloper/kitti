"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import catIcon from "@/images/cat-icon.png";

import "swiper/css";
import "swiper/css/navigation";

export interface CategoryThirdItem {
  id: string | number;
  title: string;
  description: string;
  images: string[];
  alt?: string;
  backgroundColor?: string;
}

interface CategoryThirdProps {
  title?: string;
  description?: string;
  categories: CategoryThirdItem[];
  className?: string;
}

const CategoryThird: React.FC<CategoryThirdProps> = ({
  title = "KATEGORİLER",
  description = "Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız.",
  categories,
  className,
}) => {
  return (
    <section className={`category-third-section ${className ?? ""}`}>
      <div className="category-third-container">
        {/* <div className="category-third-header">
          <h2 className="category-third-title">{title}</h2>
          <p className="category-third-description">{description}</p>
        </div> */}

        <div className="category-third-grid">
          {categories.map((category, index) => (
            <div
              key={`${category.id}-${index}-${category.title}`}
              className="category-third-card"
              style={{ backgroundColor: category.backgroundColor || "#FFF" }}
            >
              <h3 className="category-third-card-title">
                <span>{category.title}</span>
              </h3>
              <div className="category-third-image">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={2}
                  navigation={false}
                  className="category-third-swiper"
                >
                  {category.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt={category.alt ?? category.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="category-third-content">
                {category.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryThird;
