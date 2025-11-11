const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api';

export interface Category {
  id: number;
  title: string;
  title_en: string;
  description?: string;
  description_en?: string;
  icon?: string;
  category_type?: string;
  level: number;
  children?: Category[];
  products?: Product[];
}

export interface Product {
  id: number;
  title: string;
  title_en: string;
  description?: string;
  description_en?: string;
  icon?: string;
  images?: ProductImage[];
  level: number;
  parent?: number;
}

export interface ProductImage {
  id: number;
  image: string;
}

export interface Slider {
  id: number;
  title: string;
  title_tr: string;
  title_en: string;
  image_url: string;
  parent: number | null;
  level: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  accept_terms: boolean;
  subscribe_newsletter?: boolean;
}

export interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface ContactResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
}

export interface MenuItem {
  id: number;
  href: string;
  text: string;
  text_tr: string;
  text_en: string;
}

export interface FooterInfo {
  id: number;
  logo_url?: string | null;
  footer_text: string;
  footer_text_tr: string;
  footer_text_en: string;
  social_text: string;
  social_text_tr: string;
  social_text_en: string;
}

export interface FooterPolicy {
  id: number;
  title: string;
  title_tr: string;
  title_en: string;
  description: string;
  description_tr: string;
  description_en: string;
}

export interface SocialLink {
  id: number;
  icon: string;
  url: string;
}

export interface WholesaleSection {
  id: number;
  title: string;
  title_tr: string;
  title_en: string;
  description: string;
  description_tr: string;
  description_en: string;
  info_text: string;
  info_text_tr: string;
  info_text_en: string;
  image_url: string | null;
  button_top_title: string;
  button_top_title_tr: string;
  button_top_title_en: string;
  button_top_text: string;
  button_top_text_tr: string;
  button_top_text_en: string;
  button_top_url: string;
  button_bottom_title: string;
  button_bottom_title_tr: string;
  button_bottom_title_en: string;
  button_bottom_text: string;
  button_bottom_text_tr: string;
  button_bottom_text_en: string;
  button_bottom_url: string;
}

export interface ContactAddress {
  id: number;
  title: string;
  title_tr: string;
  title_en: string;
  description: string;
  description_tr: string;
  description_en: string;
  tel: string;
  tel_wp: string;
}

export interface ContactMail {
  id: number;
  mail: string;
}

export interface ContactSection {
  id: number;
  title: string;
  title_tr: string;
  title_en: string;
  description: string;
  description_tr: string;
  description_en: string;
  sections_address: ContactAddress[];
  sections_mails: ContactMail[];
}

export interface OurStorySection {
  id: number;
  type: string;
  name: string;
  name_tr: string;
  name_en: string;
  subtitle: string | null;
  subtitle_tr: string | null;
  subtitle_en: string | null;
  title: string;
  title_tr: string;
  title_en: string;
  description: string;
  description_tr: string;
  description_en: string;
  image_url: string | null;
  mobile_image_url: string | null;
  subimage_url?: string | null;
  button_text?: string | null;
  button_text_tr?: string | null;
  button_text_en?: string | null;
  button_url?: string | null;
  button_text_left?: string | null;
  button_text_left_tr?: string | null;
  button_text_left_en?: string | null;
  button_url_left?: string | null;
  button_text_right?: string | null;
  button_text_right_tr?: string | null;
  button_text_right_en?: string | null;
  button_url_right?: string | null;
  product_1?: number | null;
  product_2?: number | null;
  product_3?: number | null;
}

export interface FaqItem {
  id: number;
  question: string;
  question_tr: string;
  question_en: string;
  answer: string;
  answer_tr: string;
  answer_en: string;
  order: number;
}

export interface HomeSectionProduct {
  id: number;
  title: string;
  title_tr: string;
  title_en: string;
  description?: string | null;
  description_tr?: string | null;
  description_en?: string | null;
  images?: Array<{ id: number; image: string }> | string[];
  parent?: number;
  item_type?: string;
  level?: number;
  lft?: number;
  rght?: number;
}

export interface HomeSection {
  id: number;
  type: string;
  name: string;
  name_tr: string;
  name_en: string;
  subtitle: string | null;
  subtitle_tr: string | null;
  subtitle_en: string | null;
  title: string;
  title_tr: string;
  title_en: string;
  description: string;
  description_tr: string;
  description_en: string;
  image_url: string | null;
  mobile_image_url: string | null;
  button_text_left: string | null;
  button_text_left_tr: string | null;
  button_text_left_en: string | null;
  button_url_left: string | null;
  button_text_right: string | null;
  button_text_right_tr: string | null;
  button_text_right_en: string | null;
  button_url_right: string | null;
  product_1?: HomeSectionProduct | null;
  product_2?: HomeSectionProduct | null;
  product_3?: HomeSectionProduct | null;
}

export interface PageMeta {
  id: number;
  page: string;
  meta_title: string;
  meta_title_tr: string;
  meta_title_en: string;
  meta_description: string;
  meta_description_tr: string;
  meta_description_en: string;
}

export interface SiteSettings {
  id?: number;
  logo?: string;
  favicon?: string;
  site_title?: string;
  site_title_tr?: string;
  site_title_en?: string;
  site_description?: string;
  site_description_tr?: string;
  site_description_en?: string;
  menu_items?: MenuItem[];
  headers?: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
  }>;
  footer_info?: FooterInfo;
  footer_policies?: FooterPolicy[];
  social_links?: SocialLink[];
  sections_wholasale?: WholesaleSection[];
  sections_contact?: ContactSection[];
  sections_our_story?: OurStorySection[];
  sections?: HomeSection[];
  faq_items?: FaqItem[];
  page_metas?: PageMeta[];
  [key: string]: unknown; // Diğer dinamik alanlar için
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          detail: `HTTP error! status: ${response.status}`,
        }));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Network error occurred');
    }
  }

  async getCategories(
    lang: string = 'tr',
    params: {
      category_type?: string;
      level?: number;
      search?: string;
      ordering?: string;
      page?: number;
    } = {}
  ): Promise<ApiResponse<Category>> {
    const queryParams = new URLSearchParams({ lang });
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, String(value));
      }
    });
    return this.request<ApiResponse<Category>>(`/categories/?${queryParams}`);
  }

  async getProducts(
    lang: string = 'tr',
    params: {
      category?: number;
      search?: string;
      ordering?: string;
      page?: number;
    } = {}
  ): Promise<ApiResponse<Product>> {
    const queryParams = new URLSearchParams({ lang });
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, String(value));
      }
    });
    return this.request<ApiResponse<Product>>(`/products/?${queryParams}`);
  }

  async getSliders(lang: string = 'tr'): Promise<ApiResponse<Slider>> {
    return this.request<ApiResponse<Slider>>(`/sliders/?lang=${lang}`);
  }

  async getCategoriesWithProducts(lang: string = 'tr'): Promise<unknown> {
    return this.request<unknown>(`/categories-with-products/?lang=${lang}`);
  }

  async submitContactForm(formData: ContactFormData): Promise<ContactResponse> {
    return this.request<ContactResponse>('/contact/submit/', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  async getSiteSettings(): Promise<SiteSettings | null> {
    const response = await this.request<ApiResponse<SiteSettings>>('/site-settings/');
    // Paginated response'dan ilk site settings'i al
    // Eğer results boşsa null döndür
    console.log('Site settings response:', response);
    return response.results && response.results.length > 0 ? response.results[0] : null;
  }

  async updateSiteSettings(id: number, data: Partial<SiteSettings>): Promise<SiteSettings> {
    return this.request<SiteSettings>(`/site-settings/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }
}

const apiService = new ApiService();
export default apiService;

