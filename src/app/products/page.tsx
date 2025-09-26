import React from "react";
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
import p1 from "@/images/slider.png";
import prodImage1 from "@/images/product-image-1.png";
import prodImage2 from "@/images/product-image-2.png";
import prodImage3 from "@/images/product-image-3.png";

export default function ProductsPage() {
  const categories = [
    {
      id: 1,
      category: "Kışlık Bereler",
      images: [prodImage1.src, prodImage2.src, prodImage3.src],
    },
    {
      id: 2,
      category: "Renkli Eldivenler",
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
    },
    {
      id: 3,
      category: "Sevimli Atkılar",
      images: [prodImage3.src, prodImage1.src, prodImage2.src],
    },
    {
      id: 4,
      category: "Hayvan Şapkaları",
      images: [prodImage1.src, prodImage2.src, prodImage3.src],
    },
    {
      id: 5,
      category: "Balaklava Şapkalar",
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
    },
    {
      id: 6,
      category: "Pilot Bereler",
      images: [prodImage3.src, prodImage1.src, prodImage2.src],
    },
  ];

  const categoriesSecondary = [
    {
      id: 1,
      title: "Tesettür Mayo",
      description:
        "Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız.",
      images: [prodImage1.src, prodImage2.src, prodImage3.src],
      alt: "Tesettür Mayo",
    },
    {
      id: 2,
      title: "Tesettür Mayo",
      description:
        "Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız.",
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
      alt: "Tesettür Mayo",
    },
    {
      id: 3,
      title: "Tesettür Mayo",
      description:
        "Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız.",
      images: [prodImage3.src, prodImage1.src, prodImage2.src],
      alt: "Tesettür Mayo",
    },
  ];

  const categoriesThird = [
    {
      id: 1,
      title: "Tesettür Mayo",
      description:
        "Ürün detayları, pamuk, polyester, mekanizmalı, katlamalı ve daha bir çok vs 4-5 satırlık bilgi verilebilecek alan için ayrılmıştır.",
      images: [prodImage1.src, prodImage2.src, prodImage3.src],
      alt: "Tesettür Mayo",
      backgroundColor: "#FFF",
    },
    {
      id: 2,
      title: "Tesettür Mayo",
      description:
        "Ürün detayları, pamuk, polyester, mekanizmalı, katlamalı ve daha bir çok vs 4-5 satırlık bilgi verilebilecek alan için ayrılmıştır.",
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
      alt: "Tesettür Mayo",
      backgroundColor: "#FACBA2",
    },
  ];

  const categoriesFourth = [
    {
      id: 1,
      title: "Tesettür Mayo",
      description:
        "Ürün detayları, pamuk, polyester, mekanizmalı, katlamalı ve daha bir çok vs 4-5 satırlık bilgi verilebilecek alan için ayrılmıştır.",
      images: [prodImage1.src, prodImage2.src, prodImage3.src],
      alt: "Tesettür Mayo",
      backgroundColor: "#FFF",
    },
    {
      id: 2,
      title: "Tesettür Mayo",
      description:
        "Ürün detayları, pamuk, polyester, mekanizmalı, katlamalı ve daha bir çok vs 4-5 satırlık bilgi verilebilecek alan için ayrılmıştır.",
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
      alt: "Tesettür Mayo",
      backgroundColor: "#F5E6D3",
    },
  ];

  const categoriesFifth = [
    {
      id: 1,
      title: "Tesettür Mayo",
      description:
        "Ürün detayları, pamuk, polyester, mekanizmalı, katlamalı ve daha bir çok vs 4-5 satırlık bilgi verilebilecek alan için ayrılmıştır.",
      images: [prodImage1.src, prodImage2.src, prodImage3.src],
      alt: "Tesettür Mayo",
      backgroundColor: "#FFF",
    },
    {
      id: 2,
      title: "Tesettür Mayo",
      description:
        "Ürün detayları, pamuk, polyester, mekanizmalı, katlamalı ve daha bir çok vs 4-5 satırlık bilgi verilebilecek alan için ayrılmıştır.",
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
      alt: "Tesettür Mayo",
      backgroundColor: "#FFF",
    },
    {
      id: 3,
      title: "Tesettür Mayo",
      description:
        "Ürün detayları, pamuk, polyester, mekanizmalı, katlamalı ve daha bir çok vs 4-5 satırlık bilgi verilebilecek alan için ayrılmıştır.",
      images: [prodImage2.src, prodImage3.src, prodImage1.src],
      alt: "Tesettür Mayo",
      backgroundColor: "#FFF",
    },
  ];

  return (
    <>
      <Header theme="white" />
      <Slider
        slides={[
          { id: 1, image: p1.src, alt: "Şapka" },
          { id: 2, image: p1.src, alt: "Atkı" },
          { id: 3, image: p1.src, alt: "Eldiven" },
        ]}
      />
      <Categories
        title="KATEGORİLER"
        description="Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız."
        categories={categories}
      />
      <Categories
        title="KATEGORİLER"
        description="Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız."
        categories={categories}
      />
      <CategoriesSecondary
        title="KATEGORİLER"
        description="Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız."
        categories={categoriesSecondary}
      />
      <CategoryThird
        title="KATEGORİLER"
        description="Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız."
        categories={categoriesThird}
      />
      <CategoriesFourth
        title="KATEGORİLER"
        description="Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız."
        categories={categoriesFourth}
      />
      <CategoriesFifth
        title="KATEGORİLER"
        description="Sezonun en sevilen çocuk aksesuarlarını tasarlar, üretir ve Türkiye'nin dört bir yanına ulaştırırız."
        categories={categoriesFifth}
      />

      <Footer />
      <FooterBottom theme="white" />
      <ScrollToTop />
    </>
  );
}
