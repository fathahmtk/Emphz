import React, { createContext, useState, useContext, useEffect, ReactNode, useCallback } from 'react';

type ConsentState = boolean | null;

interface CookieConsentContextType {
  consentGiven: ConsentState;
  acceptCookies: () => void;
  declineCookies: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [consentGiven, setConsentGiven] = useState<ConsentState>(null);

  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem('cookie_consent');
      if (storedConsent !== null) {
        setConsentGiven(storedConsent === 'true');
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
  }, []);

  const acceptCookies = useCallback(() => {
    try {
      localStorage.setItem('cookie_consent', 'true');
      setConsentGiven(true);
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
  }, []);
  
  const declineCookies = useCallback(() => {
    try {
      localStorage.setItem('cookie_consent', 'false');
      setConsentGiven(false);
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
  }, []);

  return (
    <CookieConsentContext.Provider value={{ consentGiven, acceptCookies, declineCookies }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};