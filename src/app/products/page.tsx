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
  const [type2CategoriesList, setType2CategoriesList] = useState<Type2CategoryData[]>([]);
  const [type4CategoriesList, setType4CategoriesList] = useState<Type4CategoryData[]>([]);
  const [type5CategoriesList, setType5CategoriesList] = useState<Type5CategoryData[]>([]);
  const [type3CategoriesList, setType3CategoriesList] = useState<Type3CategoryData[]>([]);

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

        // category_type: "type2" olan kategorileri filtrele ve sıralı tut
        const type2Cats = response?.categories?.filter(
          (cat) => cat.category_type === 'type2'
        ) || [];

        // Her type2 category'yi ayrı ayrı Type2CategoryData array'ine dönüştür
        const formattedType2CategoriesList: Type2CategoryData[] = [];
        
        type2Cats.forEach((category) => {
          const formattedType2Categories: CategorySecondaryItem[] = [];
          
          category.products.forEach((product) => {
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

          formattedType2CategoriesList.push({
            title: language === 'en' ? category.title_en : category.title_tr,
            description: language === 'en' ? category.description_en : category.description_tr,
            categories: formattedType2Categories,
          });
        });

        setType2CategoriesList(formattedType2CategoriesList);

        // category_type: "type4" olan kategorileri filtrele ve sıralı tut
        const type4Cats = response?.categories?.filter(
          (cat) => cat.category_type === 'type4'
        ) || [];

        // Her type4 category'yi ayrı ayrı Type4CategoryData array'ine dönüştür
        const formattedType4CategoriesList: Type4CategoryData[] = [];
        
        type4Cats.forEach((category) => {
          const formattedType4Categories: CategoryThirdItem[] = [];
          
          category.products.forEach((product, index) => {
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

          formattedType4CategoriesList.push({
            title: language === 'en' ? category.title_en : category.title_tr,
            description: language === 'en' ? category.description_en : category.description_tr,
            categories: formattedType4Categories,
          });
        });

        setType4CategoriesList(formattedType4CategoriesList);

        // category_type: "type5" olan kategorileri filtrele ve sıralı tut
        const type5Cats = response?.categories?.filter(
          (cat) => cat.category_type === 'type5'
        ) || [];

        // Her type5 category'yi ayrı ayrı Type5CategoryData array'ine dönüştür
        const formattedType5CategoriesList: Type5CategoryData[] = [];
        
        type5Cats.forEach((category) => {
          const formattedType5Categories: CategoryFourthItem[] = [];
          
          category.products.forEach((product, index) => {
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

          formattedType5CategoriesList.push({
            title: language === 'en' ? category.title_en : category.title_tr,
            description: language === 'en' ? category.description_en : category.description_tr,
            categories: formattedType5Categories,
          });
        });

        setType5CategoriesList(formattedType5CategoriesList);

        // category_type: "type3" olan kategorileri filtrele ve sıralı tut
        const type3Cats = response?.categories?.filter(
          (cat) => cat.category_type === 'type3'
        ) || [];

        // Her type3 category'yi ayrı ayrı Type3CategoryData array'ine dönüştür
        const formattedType3CategoriesList: Type3CategoryData[] = [];
        
        type3Cats.forEach((category) => {
          // Her type3 category'nin products'larını ProductCardNewData formatına dönüştür
          const formattedType3Products: ProductCardNewData[] = [];
          
          category.products.forEach((product) => {
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

          formattedType3CategoriesList.push({
            title: language === 'en' ? category.title_en : category.title_tr,
            description: language === 'en' ? category.description_en : category.description_tr,
            products: formattedType3Products,
          });
        });

        setType3CategoriesList(formattedType3CategoriesList);
      } catch (error) {
        console.error('Error fetching data:', error);
        setType1CategoriesList([]);
        setType2CategoriesList([]);
        setType4CategoriesList([]);
        setType5CategoriesList([]);
        setType3CategoriesList([]);
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
          key={`type1-${index}`}
          title={categoryData.title}
          description={categoryData.description}
          categories={categoryData.categories || []}
        />
      ))}
      {type2CategoriesList.length > 0 && type2CategoriesList.map((categoryData, index) => (
      <CategoriesSecondary
          key={`type2-${index}`}
          title={categoryData.title}
          description={categoryData.description}
          categories={categoryData.categories}
        />
      ))}
      {type4CategoriesList.length > 0 && type4CategoriesList.map((categoryData, index) => (
      <CategoryThird
          key={`type4-${index}`}
          title={categoryData.title}
          description={categoryData.description}
          categories={categoryData.categories}
        />
      ))}
      {type5CategoriesList.length > 0 && type5CategoriesList.map((categoryData, index) => (
      <CategoriesFourth
          key={`type5-${index}`}
          title={categoryData.title}
          description={categoryData.description}
          categories={categoryData.categories}
        />
      ))}
      {/* <CategoriesFifth
        title={t.products.categories.title}
        description={t.products.categories.description}
        categories={categoriesFifth}
      /> */}

      {/* Product Card New Section */}
      {type3CategoriesList.length > 0 && type3CategoriesList.map((categoryData, categoryIndex) => (
      categoryData.products.length > 0 && (
      <section key={`type3-${categoryIndex}`} className="product-card-new-section" style={{ 
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
              {categoryData.title}
          </h2>
          <p className="product-card-new-header-description">
              {categoryData.description}
          </p>
        </div>
        
        <div className="product-card-new-grid">
            {categoryData.products.map((product, index) => (
            <ProductCardNew
                key={`${product.title}-${categoryIndex}-${index}`}
              title={product.title}
              description={product.description}
              mainImage={product.mainImage}
              colorImages={product.colorImages}
              backgroundColor={product.backgroundColor}
            />
          ))}
        </div>
      </section>
      )
      ))}

      <Footer theme="bordered" />
      <FooterBottom theme="white" />
      <ScrollToTop />
    </>
  );
}
