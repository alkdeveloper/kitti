"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import apiService, { SiteSettings } from '@/services/api';

interface SiteSettingsContextType {
  settings: SiteSettings | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const SiteSettingsContext = createContext<SiteSettingsContextType | undefined>(undefined);

export const SiteSettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.getSiteSettings();
      // Eğer data null ise (results boş), boş obje set et
      setSettings(data || {});
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Site ayarları yüklenemedi';
      setError(errorMessage);
      console.error('Site settings error:', err);
      // Hata durumunda bile uygulama çalışmaya devam etsin
      setSettings({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <SiteSettingsContext.Provider value={{ settings, loading, error, refetch: fetchSettings }}>
      {children}
    </SiteSettingsContext.Provider>
  );
};

export const useSiteSettings = () => {
  const context = useContext(SiteSettingsContext);
  if (context === undefined) {
    throw new Error('useSiteSettings must be used within a SiteSettingsProvider');
  }
  return context;
};

