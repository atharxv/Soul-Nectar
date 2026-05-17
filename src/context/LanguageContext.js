"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { de } from '../locales/de';
import { en } from '../locales/en';

const LanguageContext = createContext();

export const dictionaries = { de, en };

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('DE'); // Default to German
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only access localStorage on the client
    setIsClient(true);
    const storedLang = localStorage.getItem('soulnectar_lang');
    if (storedLang && (storedLang === 'DE' || storedLang === 'EN')) {
      setLangState(storedLang);
    }
  }, []);

  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem('soulnectar_lang', newLang);
  };

  // Helper to get nested translation strings
  // Example usage: t('hero.title')
  const t = (key) => {
    const keys = key.split('.');
    let value = dictionaries[lang.toLowerCase()];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Fallback to key if not found
      }
    }
    
    return value || key;
  };

  // For hydration safety, we might briefly render with default (DE) and then switch.
  // In a real production setup, we'd use next-intl on the server.
  // For this context approach, returning immediately is fine.

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isClient }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
