import React, { createContext, useState, useContext, ReactNode, useEffect, useMemo } from 'react';
import en from '../locales/en';
import ar from '../locales/ar';

type Locale = 'en' | 'ar';

const translations = { en, ar };

// Helper to access nested keys like 'nav.home'
const getNestedTranslation = (obj: any, key: string): string => {
    return key.split('.').reduce((o, i) => (o ? o[i] : undefined), obj);
};


interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en');
  
  const messages = useMemo(() => translations[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  const t = (key: string): string => {
    const translation = getNestedTranslation(messages, key);
    return translation || key; // Return key if translation not found
  };
  
  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
