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

// Unified category data type that can hold any category type
type UnifiedCategoryData = 
  | { id: number; type: 'type1'; data: Type1CategoryData }
  | { id: number; type: 'type2'; data: Type2CategoryData }
  | { id: number; type: 'type3'; data: Type3CategoryData }
  | { id: number; type: 'type4'; data: Type4CategoryData }
  | { id: number; type: 'type5'; data: Type5CategoryData };

export default function ProductsPage() {
  const { language, t } = useLanguage();
  const [categoriesList, setCategoriesList] = useState<UnifiedCategoryData[]>([]);

  useEffect(() => {
    // Helper function to process product images
    const processProductImages = (images: Array<{ id: number; image: string }> | string[]): string[] => {
      if (!images || images.length === 0) return [];
      
      if (typeof images[0] === 'object' && images[0] !== null && 'image' in images[0]) {
        return (images as Array<{ id: number; image: string }>)
          .map((img) => img.image)
          .filter((img) => img && img.trim() !== '');
      } else if (typeof images[0] === 'string') {
        return (images as string[]).filter((img) => img && img.trim() !== '');
      }
      return [];
    };

    const fetchData = async () => {
      try {
        // Categories with products endpoint
        const response = await apiService.getCategoriesWithProducts(
          language === 'en' ? 'en' : 'tr'
        ) as CategoriesWithProductsResponse;
        
        console.log('Categories with products response:', response);
        console.log('Total categories received:', response?.categories?.length);

        // Tüm kategorileri API'den gelen sırayla işle
        const unifiedCategoriesList: UnifiedCategoryData[] = [];
        
        // API'den gelen tüm kategorileri sırayla işle (filtreleme yapmadan)
        response?.categories?.forEach((category) => {
          const categoryType = category.category_type;
          console.log(`Processing category ID: ${category.id}, Type: ${categoryType}, Title: ${category.title_tr || category.title_en}`);
          
          if (categoryType === 'type1') {
            const formattedCategories: CategoryItem[] = [];
            
            category.products.forEach((product) => {
              const productImages = processProductImages(product.images);
              
              formattedCategories.push({
                id: product.id,
                category: language === 'en' ? product.title_en : product.title_tr,
                images: productImages,
              });
            });

            unifiedCategoriesList.push({
              id: category.id,
              type: 'type1',
              data: {
                title: language === 'en' ? category.title_en : category.title_tr,
                description: language === 'en' ? category.description_en : category.description_tr,
                categories: formattedCategories,
              },
            });
          } else if (categoryType === 'type2') {
            const formattedType2Categories: CategorySecondaryItem[] = [];
            
            category.products.forEach((product) => {
              const productImages = processProductImages(product.images);

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

            unifiedCategoriesList.push({
              id: category.id,
              type: 'type2',
              data: {
                title: language === 'en' ? category.title_en : category.title_tr,
                description: language === 'en' ? category.description_en : category.description_tr,
                categories: formattedType2Categories,
              },
            });
          } else if (categoryType === 'type4') {
            const formattedType4Categories: CategoryThirdItem[] = [];
            
            category.products.forEach((product, index) => {
              const productImages = processProductImages(product.images);
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

            unifiedCategoriesList.push({
              id: category.id,
              type: 'type4',
              data: {
                title: language === 'en' ? category.title_en : category.title_tr,
                description: language === 'en' ? category.description_en : category.description_tr,
                categories: formattedType4Categories,
              },
            });
          } else if (categoryType === 'type5') {
            const formattedType5Categories: CategoryFourthItem[] = [];
            
            category.products.forEach((product, index) => {
              const productImages = processProductImages(product.images);
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

            unifiedCategoriesList.push({
              id: category.id,
              type: 'type5',
              data: {
                title: language === 'en' ? category.title_en : category.title_tr,
                description: language === 'en' ? category.description_en : category.description_tr,
                categories: formattedType5Categories,
              },
            });
          } else if (categoryType === 'type3') {
            const formattedType3Products: ProductCardNewData[] = [];
            
            category.products.forEach((product) => {
              const productImages = processProductImages(product.images);

              // Eğer images yoksa atla
              if (productImages.length === 0) {
                return;
              }

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

            unifiedCategoriesList.push({
              id: category.id,
              type: 'type3',
              data: {
                title: language === 'en' ? category.title_en : category.title_tr,
                description: language === 'en' ? category.description_en : category.description_tr,
                products: formattedType3Products,
              },
            });
          }
        });

        console.log('Total processed categories:', unifiedCategoriesList.length);
        console.log('Processed categories list:', unifiedCategoriesList.map(c => ({ id: c.id, type: c.type, title: c.data.title })));

        setCategoriesList(unifiedCategoriesList);
      } catch (error) {
        console.error('Error fetching data:', error);
        setCategoriesList([]);
      }
    };

    fetchData();
  }, [language]);

  return (
    <>
      <Header theme="white" />
      <Slider />
      {categoriesList.map((categoryItem) => {
        if (categoryItem.type === 'type1') {
          return (
            <Categories
              key={`type1-${categoryItem.id}`}
              title={categoryItem.data.title}
              description={categoryItem.data.description}
              categories={categoryItem.data.categories || []}
            />
          );
        } else if (categoryItem.type === 'type2') {
          return (
            <CategoriesSecondary
              key={`type2-${categoryItem.id}`}
              title={categoryItem.data.title}
              description={categoryItem.data.description}
              categories={categoryItem.data.categories}
            />
          );
        } else if (categoryItem.type === 'type4') {
          return (
            <CategoryThird
              key={`type4-${categoryItem.id}`}
              title={categoryItem.data.title}
              description={categoryItem.data.description}
              categories={categoryItem.data.categories}
            />
          );
        } else if (categoryItem.type === 'type5') {
          return (
            <CategoriesFourth
              key={`type5-${categoryItem.id}`}
              title={categoryItem.data.title}
              description={categoryItem.data.description}
              categories={categoryItem.data.categories}
            />
          );
        } else if (categoryItem.type === 'type3') {
          return categoryItem.data.products.length > 0 ? (
            <section key={`type3-${categoryItem.id}`} className="product-card-new-section" style={{ 
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
                  {categoryItem.data.title}
                </h2>
                <p className="product-card-new-header-description">
                  {categoryItem.data.description}
                </p>
              </div>
              
              <div className="product-card-new-grid">
                {categoryItem.data.products.map((product, productIndex) => (
                  <ProductCardNew
                    key={`${categoryItem.id}-product-${productIndex}`}
                    title={product.title}
                    description={product.description}
                    mainImage={product.mainImage}
                    colorImages={product.colorImages}
                    backgroundColor={product.backgroundColor}
                  />
                ))}
              </div>
            </section>
          ) : null;
        }
        return null;
      })}

      <Footer theme="bordered" />
      <FooterBottom theme="white" />
      <ScrollToTop />
    </>
  );
}
