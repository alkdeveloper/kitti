"use client";

import { useEffect } from 'react';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';
import { normalizeUrl } from '@/utils/url';

export default function Favicon() {
  const { settings } = useSiteSettings();

  useEffect(() => {
    if (settings?.favicon && typeof document !== 'undefined') {
      try {
        // Remove existing favicon links safely
        const existingLinks = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
        existingLinks.forEach(link => {
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
        });

        // Normalize URL: Convert HTTP to HTTPS to avoid Mixed Content errors
        const faviconUrl = normalizeUrl(settings.favicon);

        // Create new favicon link
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/x-icon';
        link.href = faviconUrl;
        document.head.appendChild(link);
      } catch (error) {
        console.error('Error setting favicon:', error);
      }
    }
  }, [settings?.favicon]);

  return null;
}

