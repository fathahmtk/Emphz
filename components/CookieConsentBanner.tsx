import React, { useState, useEffect } from 'react';
import { useCookieConsent } from '../hooks/useCookieConsent';
import { useI18n } from '../hooks/useI18n';
import { Cookie } from 'lucide-react';

const CookieConsentBanner: React.FC = () => {
    const { consentGiven, acceptCookies, declineCookies } = useCookieConsent();
    const { t } = useI18n();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show the banner if consent has not been given yet.
        // Add a small delay to avoid layout shifts on load.
        if (consentGiven === null) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [consentGiven]);

    const handleAccept = () => {
        acceptCookies();
        setIsVisible(false);
    };

    const handleDecline = () => {
        declineCookies();
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div 
            className="fixed bottom-0 start-0 end-0 z-50 bg-graphite/95 backdrop-blur-sm text-white p-5 shadow-2xl transition-transform duration-500 ease-out"
            style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)' }}
            role="dialog"
            aria-labelledby="cookie-consent-title"
        >
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                    <Cookie size={32} className="text-teal flex-shrink-0 mt-1"/>
                    <div>
                        <h2 id="cookie-consent-title" className="font-bold font-heading text-lg">{t('cookies.title')}</h2>
                        <p className="text-sm text-silver max-w-2xl">{t('cookies.bannerText')}</p>
                    </div>
                </div>
                <div className="flex-shrink-0 flex gap-3 w-full sm:w-auto">
                    <button onClick={handleDecline} className="w-1/2 sm:w-auto px-6 py-2 rounded-lg font-semibold bg-gray-700 hover:bg-gray-600 transition-colors text-sm">
                        {t('cookies.decline')}
                    </button>
                    <button onClick={handleAccept} className="w-1/2 sm:w-auto px-6 py-2 rounded-lg font-semibold bg-teal hover:opacity-90 transition-colors text-sm">
                        {t('cookies.accept')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsentBanner;