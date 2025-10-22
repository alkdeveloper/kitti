"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductCardNewProps {
  title: string;
  description: string;
  mainImage: string;
  colorImages: string[];
  backgroundColor?: string;
  className?: string;
}

const ProductCardNew: React.FC<ProductCardNewProps> = ({
  title,
  description,
  mainImage,
  colorImages,
  backgroundColor = "#FFF",
  className,
}) => {
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  
  // Ensure we have exactly 4 thumbnails
  const thumbnails = colorImages.slice(0, 4);
  
  // Get the current main image based on selected thumbnail
  const currentMainImage = thumbnails[selectedThumbnailIndex] || mainImage;

  return (
    <div className={`product-card-new ${className ?? ""}`}>
      <div className="product-card-new-container">
        {/* Ana Resim */}
        <div className="product-card-new-main-image">
          <Image
            src={currentMainImage}
            alt={title}
            width={214}
            height={214}
            className="main-product-image"
          />
        </div>

        {/* Alt Bölüm - Renk Seçenekleri ve Açıklama */}
        <div className="product-card-new-bottom" style={{ backgroundColor }}>
          {/* Renk Seçenekleri */}
          <div className="product-card-new-color-options">
            {/* Tüm Renk Seçenekleri - Yatay Frame */}
            <div className="product-card-new-color-main">
              <div className="product-card-new-color-frame">
                {thumbnails.map((image, index) => (
                  <div
                    key={index}
                    className={`product-card-new-color-option ${
                      selectedThumbnailIndex === index ? 'selected' : ''
                    }`}
                    onClick={() => setSelectedThumbnailIndex(index)}
                  >
                    <Image
                      src={image}
                      alt={`${title} - Renk ${index + 1}`}
                      width={53}
                      height={53}
                      className="color-option-image"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Açıklama */}
            <div className="product-card-new-description">
              {/* Başlık */}
              <h3 className="product-card-new-title">{title}</h3>
              <div className="product-card-new-title-line"></div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardNew;
