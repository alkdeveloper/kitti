"use client";

import { useEffect } from 'react';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';

export default function Favicon() {
  const { settings } = useSiteSettings();

  useEffect(() => {
    if (settings?.favicon) {
      // Remove existing favicon links
      const existingLinks = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
      existingLinks.forEach(link => link.remove());

      // Create new favicon link
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/x-icon';
      link.href = settings.favicon;
      document.head.appendChild(link);
    }
  }, [settings?.favicon]);

  return null;
}

