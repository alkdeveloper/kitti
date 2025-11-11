import { Metadata } from 'next';
import { cookies } from 'next/headers';
import apiService from '@/services/api';
import { PageMeta } from '@/services/api';

/**
 * Get page meta information from site settings
 */
export async function getPageMeta(pagePath: string): Promise<PageMeta | null> {
  try {
    const settings = await apiService.getSiteSettings();
    if (!settings?.page_metas) {
      return null;
    }
    
    return settings.page_metas.find(meta => meta.page === pagePath) || null;
  } catch (error) {
    console.error('Error fetching page meta:', error);
    return null;
  }
}

/**
 * Get current language from cookies
 */
async function getLanguage(): Promise<'tr' | 'en'> {
  try {
    const cookieStore = await cookies();
    const lang = cookieStore.get('language')?.value;
    return (lang === 'en' ? 'en' : 'tr');
  } catch {
    return 'tr';
  }
}

/**
 * Generate metadata for a page based on page path and language
 */
export async function generatePageMetadata(
  pagePath: string,
  lang?: 'tr' | 'en'
): Promise<Metadata> {
  // If lang is not provided, get it from cookies
  const currentLang = lang || await getLanguage();
  
  const pageMeta = await getPageMeta(pagePath);
  
  if (!pageMeta) {
    // Fallback metadata
    return {
      title: 'Kitti - Çocuk Aksesuarları',
      description: 'Kitti çocuk aksesuarları',
    };
  }

  const title = currentLang === 'en' 
    ? (pageMeta.meta_title_en || pageMeta.meta_title)
    : (pageMeta.meta_title_tr || pageMeta.meta_title);
  
  const description = currentLang === 'en'
    ? (pageMeta.meta_description_en || pageMeta.meta_description)
    : (pageMeta.meta_description_tr || pageMeta.meta_description);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

