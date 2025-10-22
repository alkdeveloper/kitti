"use client";
import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import ScrollToTop from "@/components/ScrollToTop";
import FooterBottom from "@/components/FooterBottom";
import Categories from "@/components/Categories";
import CategoriesSecondary from "@/components/CategoriesSecondary";
import CategoryThird from "@/components/CategoryThird";
import CategoriesFourth from "@/components/CategoriesFourth";
import CategoriesFifth from "@/components/CategoriesFifth";
import ProductCardNew from "@/components/ProductCardNew";
import p1 from "@/images/slider.png";
import prodImage1 from "@/images/product-image-1.png";
import prodImage2 from "@/images/product-image-2.png";
import prodImage3 from "@/images/product-image-3.png";

export default function ProductsPage() {
  const { t } = useLanguage();
  
  const categories = [
    {
      id: 1,
      category: t.products.categories.items[0],
      images: [prodImage1.src, prodImage2.src, prodImage3.src],
    },
    {
      id: 2,
      category: t.products.categories.items[1],
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
    },
    {
      id: 3,
      category: t.products.categories.items[2],
      images: [prodImage3.src, prodImage1.src, prodImage2.src],
    },
    {
      id: 4,
      category: t.products.categories.items[3],
      images: [prodImage1.src, prodImage2.src, prodImage3.src],
    },
    {
      id: 5,
      category: t.products.categories.items[4],
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
    },
    {
      id: 6,
      category: t.products.categories.items[5],
      images: [prodImage3.src, prodImage1.src, prodImage2.src],
    },
  ];

  const categoriesSecondary = [
    {
      id: 1,
      title: t.products.productDetails.title,
      description: t.products.productDetails.description,
      images: [prodImage1.src, prodImage2.src, prodImage3.src],
      alt: t.products.productDetails.title,
    },
    {
      id: 2,
      title: t.products.productDetails.title,
      description: t.products.productDetails.description,
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
      alt: t.products.productDetails.title,
    },
    {
      id: 3,
      title: t.products.productDetails.title,
      description: t.products.productDetails.description,
      images: [prodImage3.src, prodImage1.src, prodImage2.src],
      alt: t.products.productDetails.title,
    },
  ];

  const categoriesThird = [
    {
      id: 1,
      title: t.products.productDetails.title,
      description: t.products.productDetails.details,
      images: [prodImage1.src, prodImage2.src, prodImage3.src],
      alt: t.products.productDetails.title,
      backgroundColor: "#FFF",
    },
    {
      id: 2,
      title: t.products.productDetails.title,
      description: t.products.productDetails.details,
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
      alt: t.products.productDetails.title,
      backgroundColor: "#FACBA2",
    },
  ];

  const categoriesFourth = [
    {
      id: 1,
      title: t.products.productDetails.title,
      description: t.products.productDetails.details,
      images: [prodImage1.src, prodImage2.src, prodImage3.src],
      alt: t.products.productDetails.title,
      backgroundColor: "#FFF",
    },
    {
      id: 2,
      title: t.products.productDetails.title,
      description: t.products.productDetails.details,
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
      alt: t.products.productDetails.title,
      backgroundColor: "#F5E6D3",
    },
  ];

  const categoriesFifth = [
    {
      id: 1,
      title: t.products.productDetails.title,
      description: t.products.productDetails.details,
      images: [prodImage1.src, prodImage2.src, prodImage3.src],
      alt: t.products.productDetails.title,
      backgroundColor: "#FFF",
    },
    {
      id: 2,
      title: t.products.productDetails.title,
      description: t.products.productDetails.details,
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
      alt: t.products.productDetails.title,
      backgroundColor: "#FFF",
    },
    {
      id: 3,
      title: t.products.productDetails.title,
      description: t.products.productDetails.details,
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
      alt: t.products.productDetails.title,
      backgroundColor: "#FFF",
    },
  ];

  const productCardNewData = [
    {
      title: "Tesettür Mayo",
      description: "Ürün detayları, pamuk, polyester, mekanizmalı, katlamalı ve daha bir çok vs 4-5 satırlık bilgi verilebilecek alan için ayrılmıştır.",
      mainImage: prodImage1.src,
      colorImages: [prodImage1.src, prodImage2.src, prodImage3.src, prodImage1.src],
      backgroundColor: "#FACBA2",
    },
    {
      title: "Tesettür Mayo",
      description: "Ürün detayları, pamuk, polyester, mekanizmalı, katlamalı ve daha bir çok vs 4-5 satırlık bilgi verilebilecek alan için ayrılmıştır.",
      mainImage: prodImage2.src,
      colorImages: [prodImage2.src, prodImage3.src, prodImage1.src, prodImage2.src],
      backgroundColor: "#FACBA2",
    },
    {
      title: "Tesettür Mayo",
      description: "Ürün detayları, pamuk, polyester, mekanizmalı, katlamalı ve daha bir çok vs 4-5 satırlık bilgi verilebilecek alan için ayrılmıştır.",
      mainImage: prodImage3.src,
      colorImages: [prodImage3.src, prodImage1.src, prodImage2.src, prodImage3.src],
      backgroundColor: "#FACBA2",
    },
  ];

  return (
    <>
      <Header theme="white" />
      <Slider
        slides={[
          { id: 1, image: p1.src, alt: t.products.slider.slides[0].alt },
          { id: 2, image: p1.src, alt: t.products.slider.slides[1].alt },
          { id: 3, image: p1.src, alt: t.products.slider.slides[2].alt },
        ]}
      />
      <Categories
        title={t.products.categories.title}
        description={t.products.categories.description}
        categories={categories}
      />
      <Categories
        title={t.products.categories.title}
        description={t.products.categories.description}
        categories={categories}
      />
      <CategoriesSecondary
        title={t.products.categories.title}
        description={t.products.categories.description}
        categories={categoriesSecondary}
      />
      <CategoryThird
        title={t.products.categories.title}
        description={t.products.categories.description}
        categories={categoriesThird}
      />
      <CategoriesFourth
        title={t.products.categories.title}
        description={t.products.categories.description}
        categories={categoriesFourth}
      />
      <CategoriesFifth
        title={t.products.categories.title}
        description={t.products.categories.description}
        categories={categoriesFifth}
      />

      {/* Product Card New Section */}
      <section className="product-card-new-section" style={{ 
        backgroundColor: "#F5F5F5", 
        padding: "100px 50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px"
      }}>
        <div className="product-card-new-header">
          <h2 className="product-card-new-header-title">
            Yeni Ürün Kartları
          </h2>
          <p className="product-card-new-header-description">
            Tasarımda gösterilen kart yapısı
          </p>
        </div>
        
        <div className="product-card-new-grid">
          {productCardNewData.map((product) => (
            <ProductCardNew
              key={product.title}
              title={product.title}
              description={product.description}
              mainImage={product.mainImage}
              colorImages={product.colorImages}
              backgroundColor={product.backgroundColor}
            />
          ))}
        </div>
      </section>

      <Footer theme="bordered" />
      <FooterBottom theme="white" />
      <ScrollToTop />
    </>
  );
}
