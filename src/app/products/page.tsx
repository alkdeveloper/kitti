"use client";
import React, { useEffect, useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import apiService from '@/services/api';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import ScrollToTop from "@/components/ScrollToTop";
import FooterBottom from "@/components/FooterBottom";
import Categories, { CategoryItem } from "@/components/Categories";
import CategoriesSecondary, { CategorySecondaryItem } from "@/components/CategoriesSecondary";
import CategoryThird, { CategoryThirdItem } from "@/components/CategoryThird";
import CategoriesFourth, { CategoryFourthItem } from "@/components/CategoriesFourth";
import ProductCardNew from "@/components/ProductCardNew";

interface CategoryWithProducts {
  id: number;
  title: string;
  title_tr: string;
  title_en: string;
  description: string;
  description_tr: string;
  description_en: string;
  category_type: string;
  products: Array<{
    id: number;
    title: string;
    title_tr: string;
    title_en: string;
    description?: string | null;
    description_tr?: string | null;
    description_en?: string | null;
    images: Array<{ id: number; image: string }> | string[];
  }>;
}

interface CategoriesWithProductsResponse {
  categories: CategoryWithProducts[];
}

interface Type1CategoryData {
  title: string;
  description: string;
  categories: CategoryItem[];
}

interface Type2CategoryData {
  title: string;
  description: string;
  categories: CategorySecondaryItem[];
}

interface Type4CategoryData {
  title: string;
  description: string;
  categories: CategoryThirdItem[];
}

interface Type5CategoryData {
  title: string;
  description: string;
  categories: CategoryFourthItem[];
}

interface ProductCardNewData {
  title: string;
  description: string;
  mainImage: string;
  colorImages: string[];
  backgroundColor: string;
}

interface Type3CategoryData {
  title: string;
  description: string;
  products: ProductCardNewData[];
}

export default function ProductsPage() {
  const { language, t } = useLanguage();
  const [type1CategoriesList, setType1CategoriesList] = useState<Type1CategoryData[]>([]);
  const [type2CategoryData, setType2CategoryData] = useState<Type2CategoryData | null>(null);
  const [type4CategoryData, setType4CategoryData] = useState<Type4CategoryData | null>(null);
  const [type5CategoryData, setType5CategoryData] = useState<Type5CategoryData | null>(null);
  const [type3CategoryData, setType3CategoryData] = useState<Type3CategoryData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Categories with products endpoint
        const response = await apiService.getCategoriesWithProducts(
          language === 'en' ? 'en' : 'tr'
        ) as CategoriesWithProductsResponse;
        
        console.log('Categories with products response:', response);

        // category_type: "type1" olan kategorileri filtrele ve sıralı tut
        const type1Cats = response?.categories?.filter(
          (cat) => cat.category_type === 'type1'
        ) || [];

        // Her type1 category'yi ayrı ayrı CategoryItem array'ine dönüştür
        const formattedCategoriesList: Type1CategoryData[] = [];
        
        type1Cats.forEach((category) => {
          const formattedCategories: CategoryItem[] = [];
          
          category.products.forEach((product) => {
            // Product images'ları string array'e dönüştür
            let productImages: string[] = [];
            if (product.images && product.images.length > 0) {
              // Eğer images array'i içinde obje varsa (API'den gelen format: {id, image})
              if (typeof product.images[0] === 'object' && product.images[0] !== null && 'image' in product.images[0]) {
                productImages = (product.images as Array<{ id: number; image: string }>)
                  .map((img) => img.image)
                  .filter((img) => img && img.trim() !== ''); // Boş string'leri filtrele
              } else if (typeof product.images[0] === 'string') {
                // Eğer direkt string array ise
                productImages = (product.images as string[]).filter((img) => img && img.trim() !== '');
              }
            }
            
            formattedCategories.push({
              id: product.id,
              category: language === 'en' ? product.title_en : product.title_tr,
              images: productImages, // Resim yoksa boş array olacak
            });
          });

          formattedCategoriesList.push({
            title: language === 'en' ? category.title_en : category.title_tr,
            description: language === 'en' ? category.description_en : category.description_tr,
            categories: formattedCategories,
          });
        });

        setType1CategoriesList(formattedCategoriesList);

        // category_type: "type2" olan kategorileri filtrele (ilk type2 category'yi al)
        const type2Cat = response?.categories?.find(
          (cat) => cat.category_type === 'type2'
        );

        if (type2Cat) {
          // Her type2 category'nin products'larını CategorySecondaryItem formatına dönüştür
          const formattedType2Categories: CategorySecondaryItem[] = [];
          
          type2Cat.products.forEach((product) => {
            // Product images'ları string array'e dönüştür
            let productImages: string[] = [];
            if (product.images && product.images.length > 0) {
              // Eğer images array'i içinde obje varsa (API'den gelen format: {id, image})
              if (typeof product.images[0] === 'object' && product.images[0] !== null && 'image' in product.images[0]) {
                productImages = (product.images as Array<{ id: number; image: string }>)
                  .map((img) => img.image)
                  .filter((img) => img && img.trim() !== '');
              } else if (typeof product.images[0] === 'string') {
                // Eğer direkt string array ise
                productImages = (product.images as string[]).filter((img) => img && img.trim() !== '');
              }
            }

            formattedType2Categories.push({
              id: product.id,
              title: language === 'en' ? product.title_en : product.title_tr,
              description: language === 'en' 
                ? (product.description_en || product.description_tr || '') 
                : (product.description_tr || product.description_en || ''),
              images: productImages,
              alt: language === 'en' ? product.title_en : product.title_tr,
            });
          });

          setType2CategoryData({
            title: language === 'en' ? type2Cat.title_en : type2Cat.title_tr,
            description: language === 'en' ? type2Cat.description_en : type2Cat.description_tr,
            categories: formattedType2Categories,
          });
        } else {
          setType2CategoryData(null);
        }

        // category_type: "type4" olan kategorileri filtrele (ilk type4 category'yi al)
        const type4Cat = response?.categories?.find(
          (cat) => cat.category_type === 'type4'
        );

        if (type4Cat) {
          // Her type4 category'nin products'larını CategoryThirdItem formatına dönüştür
          const formattedType4Categories: CategoryThirdItem[] = [];
          
          type4Cat.products.forEach((product, index) => {
            // Product images'ları string array'e dönüştür
            let productImages: string[] = [];
            if (product.images && product.images.length > 0) {
              // Eğer images array'i içinde obje varsa (API'den gelen format: {id, image})
              if (typeof product.images[0] === 'object' && product.images[0] !== null && 'image' in product.images[0]) {
                productImages = (product.images as Array<{ id: number; image: string }>)
                  .map((img) => img.image)
                  .filter((img) => img && img.trim() !== '');
              } else if (typeof product.images[0] === 'string') {
                // Eğer direkt string array ise
                productImages = (product.images as string[]).filter((img) => img && img.trim() !== '');
              }
            }

            // backgroundColor için sıraya göre renk belirle (alternatif renkler)
            const backgroundColor = index % 2 === 0 ? "#FFF" : "#FACBA2";

            formattedType4Categories.push({
              id: product.id,
              title: language === 'en' ? product.title_en : product.title_tr,
              description: language === 'en' 
                ? (product.description_en || product.description_tr || '') 
                : (product.description_tr || product.description_en || ''),
              images: productImages,
              alt: language === 'en' ? product.title_en : product.title_tr,
              backgroundColor: backgroundColor,
            });
          });

          setType4CategoryData({
            title: language === 'en' ? type4Cat.title_en : type4Cat.title_tr,
            description: language === 'en' ? type4Cat.description_en : type4Cat.description_tr,
            categories: formattedType4Categories,
          });
        } else {
          setType4CategoryData(null);
        }

        // category_type: "type5" olan kategorileri filtrele (ilk type5 category'yi al)
        const type5Cat = response?.categories?.find(
          (cat) => cat.category_type === 'type5'
        );

        if (type5Cat) {
          // Her type5 category'nin products'larını CategoryFourthItem formatına dönüştür
          const formattedType5Categories: CategoryFourthItem[] = [];
          
          type5Cat.products.forEach((product, index) => {
            // Product images'ları string array'e dönüştür
            let productImages: string[] = [];
            if (product.images && product.images.length > 0) {
              // Eğer images array'i içinde obje varsa (API'den gelen format: {id, image})
              if (typeof product.images[0] === 'object' && product.images[0] !== null && 'image' in product.images[0]) {
                productImages = (product.images as Array<{ id: number; image: string }>)
                  .map((img) => img.image)
                  .filter((img) => img && img.trim() !== '');
              } else if (typeof product.images[0] === 'string') {
                // Eğer direkt string array ise
                productImages = (product.images as string[]).filter((img) => img && img.trim() !== '');
              }
            }

            // backgroundColor için sıraya göre renk belirle (alternatif renkler)
            const backgroundColor = index % 2 === 0 ? "#FFF" : "#F5E6D3";

            formattedType5Categories.push({
              id: product.id,
              title: language === 'en' ? product.title_en : product.title_tr,
              description: language === 'en' 
                ? (product.description_en || product.description_tr || '') 
                : (product.description_tr || product.description_en || ''),
              images: productImages,
              alt: language === 'en' ? product.title_en : product.title_tr,
              backgroundColor: backgroundColor,
            });
          });

          setType5CategoryData({
            title: language === 'en' ? type5Cat.title_en : type5Cat.title_tr,
            description: language === 'en' ? type5Cat.description_en : type5Cat.description_tr,
            categories: formattedType5Categories,
          });
        } else {
          setType5CategoryData(null);
        }

        // category_type: "type3" olan kategorileri filtrele (ilk type3 category'yi al)
        const type3Cat = response?.categories?.find(
          (cat) => cat.category_type === 'type3'
        );

        if (type3Cat) {
          // Her type3 category'nin products'larını ProductCardNewData formatına dönüştür
          const formattedType3Products: ProductCardNewData[] = [];
          
          type3Cat.products.forEach((product) => {
            // Product images'ları string array'e dönüştür
            let productImages: string[] = [];
            if (product.images && product.images.length > 0) {
              // Eğer images array'i içinde obje varsa (API'den gelen format: {id, image})
              if (typeof product.images[0] === 'object' && product.images[0] !== null && 'image' in product.images[0]) {
                productImages = (product.images as Array<{ id: number; image: string }>)
                  .map((img) => img.image)
                  .filter((img) => img && img.trim() !== '');
              } else if (typeof product.images[0] === 'string') {
                // Eğer direkt string array ise
                productImages = (product.images as string[]).filter((img) => img && img.trim() !== '');
              }
            }

            // Eğer images yoksa atla
            if (productImages.length === 0) {
              return;
            }

            // mainImage ilk resim, colorImages tüm resimler (en fazla 4, kaç tane varsa o kadar)
            const mainImage = productImages[0];
            const colorImages = productImages.slice(0, 4); // Maksimum 4 resim

            formattedType3Products.push({
              title: language === 'en' ? product.title_en : product.title_tr,
              description: language === 'en' 
                ? (product.description_en || product.description_tr || '') 
                : (product.description_tr || product.description_en || ''),
              mainImage: mainImage,
              colorImages: colorImages,
      backgroundColor: "#FACBA2",
            });
          });

          setType3CategoryData({
            title: language === 'en' ? type3Cat.title_en : type3Cat.title_tr,
            description: language === 'en' ? type3Cat.description_en : type3Cat.description_tr,
            products: formattedType3Products,
          });
        } else {
          setType3CategoryData(null);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setType1CategoriesList([]);
        setType2CategoryData(null);
        setType4CategoryData(null);
        setType5CategoryData(null);
        setType3CategoryData(null);
      }
    };

    fetchData();
  }, [language]);

  return (
    <>
      <Header theme="white" />
      <Slider />
      {type1CategoriesList.length > 0 && type1CategoriesList.map((categoryData, index) => (
      <Categories
          key={index}
          title={categoryData.title}
          description={categoryData.description}
          categories={categoryData.categories || []}
        />
      ))}
      {type2CategoryData && type2CategoryData.categories.length > 0 && (
      <CategoriesSecondary
          title={type2CategoryData.title}
          description={type2CategoryData.description}
          categories={type2CategoryData.categories}
        />
      )}
      {type4CategoryData && type4CategoryData.categories.length > 0 && (
      <CategoryThird
          title={type4CategoryData.title}
          description={type4CategoryData.description}
          categories={type4CategoryData.categories}
        />
      )}
      {type5CategoryData && type5CategoryData.categories.length > 0 && (
      <CategoriesFourth
          title={type5CategoryData.title}
          description={type5CategoryData.description}
          categories={type5CategoryData.categories}
        />
      )}
      {/* <CategoriesFifth
        title={t.products.categories.title}
        description={t.products.categories.description}
        categories={categoriesFifth}
      /> */}

      {/* Product Card New Section */}
      {type3CategoryData && type3CategoryData.products.length > 0 && (
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
              {type3CategoryData.title}
          </h2>
          <p className="product-card-new-header-description">
              {type3CategoryData.description}
          </p>
        </div>
        
        <div className="product-card-new-grid">
            {type3CategoryData.products.map((product, index) => (
            <ProductCardNew
                key={`${product.title}-${index}`}
              title={product.title}
              description={product.description}
              mainImage={product.mainImage}
              colorImages={product.colorImages}
              backgroundColor={product.backgroundColor}
            />
          ))}
        </div>
      </section>
      )}

      <Footer theme="bordered" />
      <FooterBottom theme="white" />
      <ScrollToTop />
    </>
  );
}
