# 🎨 Kitti Frontend - Next.js

**Modern React/Next.js Frontend Application**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

Modern, responsive frontend application for Kitti children's accessories platform.

---

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Gereksinimler](#-gereksinimler)
- [Kurulum](#-kurulum)
- [Yapılandırma](#-yapılandırma)
- [Kullanım](#-kullanım)
- [Proje Yapısı](#-proje-yapısı)
- [Deployment](#-deployment)

---

## ✨ Özellikler

- ⚡ **Next.js 15** - App Router ile modern React framework
- 🎨 **SCSS/SASS** - Styling desteği
- 🌍 **Çok Dilli** - Türkçe & İngilizce dil desteği
- 📱 **Responsive** - Mobil uyumlu tasarım
- 🔄 **API Entegrasyonu** - RESTful API ile backend bağlantısı
- 🎯 **TypeScript** - Tip güvenliği
- 🎨 **Modern UI** - Swiper slider, animasyonlar

---

## 🔧 Gereksinimler

### Sistem Gereksinimleri

- **Node.js**: 18.x veya üzeri
- **npm**: 9.x veya üzeri
- **Backend API**: Çalışır durumda olmalı (varsayılan: http://127.0.0.1:8001)

---

## 🚀 Kurulum

### 1. Repository'yi Klonlayın

```bash
git clone <repository-url>
cd kitti-frontend
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Environment Dosyasını Oluşturun

Proje root dizininde `.env.local` dosyası oluşturun:

```bash
# .env.local
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8001/api
```

**Not:** Production ortamında backend URL'inizi buraya yazın.

### 4. Development Server'ı Başlatın

```bash
npm run dev
```

Uygulama http://localhost:3001 adresinde çalışacaktır.

---

## ⚙️ Yapılandırma

### Environment Variables

`.env.local` dosyasında aşağıdaki değişkenleri ayarlayabilirsiniz:

```bash
# Backend API Base URL
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8001/api
```

**Önemli:** `NEXT_PUBLIC_` prefix'i olan değişkenler client-side'da kullanılabilir.

### Port Yapılandırması

Varsayılan port `3001`'dir. Değiştirmek için `package.json` dosyasındaki script'leri düzenleyin:

```json
{
  "scripts": {
    "dev": "next dev --turbopack -p 3001",
    "start": "next start -p 3001"
  }
}
```

---

## 🎯 Kullanım

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## 📁 Proje Yapısı

```
kitti-frontend/
├── 📁 public/              # Static dosyalar
│   ├── *.svg              # Logo ve ikonlar
│   └── ...
│
├── 📁 src/
│   ├── 📁 app/            # Next.js App Router
│   │   ├── page.tsx        # Ana sayfa
│   │   ├── layout.tsx      # Root layout
│   │   ├── products/      # Ürünler sayfası
│   │   ├── contact/       # İletişim sayfası
│   │   ├── our-story/     # Hikayemiz sayfası
│   │   └── ...
│   │
│   ├── 📁 components/      # React bileşenleri
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   └── ...
│   │
│   ├── 📁 contexts/        # React Context'ler
│   │   ├── LanguageContext.tsx
│   │   └── SiteSettingsContext.tsx
│   │
│   ├── 📁 services/        # API servisleri
│   │   └── api.ts          # Backend API client
│   │
│   ├── 📁 utils/           # Yardımcı fonksiyonlar
│   │   └── metadata.ts
│   │
│   ├── 📁 images/          # Görseller
│   └── 📁 styles/          # Global stiller
│       └── globals.scss
│
├── 📄 package.json         # Bağımlılıklar
├── 📄 tsconfig.json        # TypeScript config
├── 📄 next.config.ts       # Next.js config
└── 📄 README.md            # Bu dosya
```

---

## 🔌 API Entegrasyonu

### API Service

Backend API ile iletişim `src/services/api.ts` dosyası üzerinden yapılır.

**Örnek Kullanım:**

```typescript
import apiService from '@/services/api';

// Kategorileri getir
const categories = await apiService.getCategories('tr');

// Ürünleri getir
const products = await apiService.getProducts('tr', { category: 1 });

// Site ayarlarını getir
const settings = await apiService.getSiteSettings();
```

### API Base URL

API base URL'i environment variable'dan alınır:

```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8001/api';
```

---

## 🚀 Deployment

### Vercel (Önerilen)

1. Vercel hesabınıza giriş yapın
2. Yeni proje oluşturun
3. Repository'yi bağlayın
4. Environment variables ekleyin:
   - `NEXT_PUBLIC_API_BASE_URL`: Production backend URL'iniz
5. Deploy edin

### Netlify

1. Netlify hesabınıza giriş yapın
2. "New site from Git" seçin
3. Repository'yi bağlayın
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Environment variables ekleyin
6. Deploy edin

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
```

---

## 🛠️ Geliştirme

### Yeni Sayfa Ekleme

1. `src/app/` dizininde yeni klasör oluşturun
2. `page.tsx` dosyası ekleyin
3. `layout.tsx` (opsiyonel) ekleyin

**Örnek:**

```typescript
// src/app/about/page.tsx
export default function AboutPage() {
  return <div>About Page</div>;
}
```

### Yeni Component Ekleme

1. `src/components/` dizinine yeni component ekleyin
2. TypeScript interface'leri tanımlayın
3. Component'i export edin

### Stil Ekleme

- Global stiller: `src/styles/globals.scss`
- Component stilleri: Component dosyasının yanında `.module.scss`

---

## 📦 Bağımlılıklar

### Ana Bağımlılıklar

- **next**: 15.5.4 - React framework
- **react**: 19.1.0 - UI library
- **react-dom**: 19.1.0 - React DOM
- **sass**: ^1.93.2 - SCSS compiler
- **swiper**: ^12.0.2 - Slider component

### Dev Bağımlılıklar

- **typescript**: ^5 - TypeScript compiler
- **eslint**: ^9 - Linting
- **tailwindcss**: ^4 - CSS framework

---

## 🆘 Sorun Giderme

### Port Zaten Kullanımda

**Sorun:** `Error: Port 3001 is already in use`

**Çözüm:**
```bash
# Farklı port kullan
npm run dev -- -p 3002

# veya kullanan process'i durdur
# macOS/Linux:
lsof -ti:3001 | xargs kill -9

# Windows:
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

### API Bağlantı Hatası

**Sorun:** `HTTP error! status: 404` veya API'ye bağlanamıyor

**Çözüm:**
1. Backend'in çalıştığından emin olun
2. `.env.local` dosyasındaki `NEXT_PUBLIC_API_BASE_URL` değerini kontrol edin
3. CORS ayarlarını kontrol edin (backend'de)

### Build Hataları

**Sorun:** `npm run build` hata veriyor

**Çözüm:**
```bash
# Cache'i temizle
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

---

## 📝 Notlar

- **Port**: Varsayılan port `3001`'dir (backend 8001 ile çakışmaması için)
- **API URL**: Development için `http://127.0.0.1:8001/api` kullanılır
- **Environment Variables**: `NEXT_PUBLIC_` prefix'i olan değişkenler client-side'da kullanılabilir

---

## 📌 Hızlı Başlangıç

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Environment dosyası oluştur
echo "NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8001/api" > .env.local

# 3. Development server'ı başlat
npm run dev

# 4. Tarayıcıda aç
# http://localhost:3001
```

---

**Son Güncelleme**: 2025
