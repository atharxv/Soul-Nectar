"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const CookieConsentContext = createContext();

export function CookieConsentProvider({ children }) {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    marketing: false,
    performance: false
  });
  
  const [consentGiven, setConsentGiven] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const stored = localStorage.getItem('soulnectar_cookie_consent');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPreferences({
          ...parsed,
          necessary: true // Always true
        });
        setConsentGiven(true);
      } catch (e) {
        console.error("Failed to parse cookie preferences");
      }
    }
  }, []);

  const saveToLocalStorage = (newPrefs) => {
    localStorage.setItem('soulnectar_cookie_consent', JSON.stringify(newPrefs));
    setConsentGiven(true);
  };

  const acceptAll = () => {
    const newPrefs = {
      necessary: true,
      functional: true,
      marketing: true,
      performance: true
    };
    setPreferences(newPrefs);
    saveToLocalStorage(newPrefs);
  };

  const rejectAll = () => {
    const newPrefs = {
      necessary: true,
      functional: false,
      marketing: false,
      performance: false
    };
    setPreferences(newPrefs);
    saveToLocalStorage(newPrefs);
  };

  const savePreferences = (customPrefs) => {
    const newPrefs = {
      ...customPrefs,
      necessary: true // Always force true
    };
    setPreferences(newPrefs);
    saveToLocalStorage(newPrefs);
  };

  // Provide hasConsented and isClient state to correctly render components after mount
  return (
    <CookieConsentContext.Provider value={{
      preferences,
      consentGiven,
      hasConsented: consentGiven,
      isClient,
      acceptAll,
      rejectAll,
      savePreferences
    }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}
