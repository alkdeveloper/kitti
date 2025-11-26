"use client";

import { useEffect, useRef } from "react";
import { useSiteSettings } from "@/contexts/SiteSettingsContext";

/**
 * Panelden girilen global takip kodlarını (Google Tag, Meta Pixel vb.)
 * sayfanın <head> ve <body> bölümlerine enjekte eder.
 */
export default function TrackingScripts() {
  const { settings } = useSiteSettings();
  const headNodeRef = useRef<HTMLDivElement | null>(null);
  const bodyNodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;

    // Eski node'ları temizle
    if (headNodeRef.current?.parentNode) {
      headNodeRef.current.parentNode.removeChild(headNodeRef.current);
      headNodeRef.current = null;
    }
    if (bodyNodeRef.current?.parentNode) {
      bodyNodeRef.current.parentNode.removeChild(bodyNodeRef.current);
      bodyNodeRef.current = null;
    }

    // Head tracking code
    if (settings?.head_tracking_code) {
      const container = document.createElement("div");
      container.setAttribute("data-tracking", "head-tracking-code");
      container.innerHTML = settings.head_tracking_code;
      document.head.appendChild(container);
      headNodeRef.current = container;
    }

    // Body tracking code
    if (settings?.body_tracking_code) {
      const container = document.createElement("div");
      container.setAttribute("data-tracking", "body-tracking-code");
      container.innerHTML = settings.body_tracking_code;
      document.body.appendChild(container);
      bodyNodeRef.current = container;
    }

    return () => {
      if (headNodeRef.current?.parentNode) {
        headNodeRef.current.parentNode.removeChild(headNodeRef.current);
      }
      if (bodyNodeRef.current?.parentNode) {
        bodyNodeRef.current.parentNode.removeChild(bodyNodeRef.current);
      }
    };
  }, [settings?.head_tracking_code, settings?.body_tracking_code]);

  return null;
}


