import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Phone, Mail, MessageSquare, Menu, X, Linkedin, Twitter, Facebook, Search, Globe } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import { ToastContainer } from './Toast';
import ChatWidget from './ChatWidget';
import CookieConsentBanner from './CookieConsentBanner';


const LanguageSwitcher: React.FC = () => {
    const { locale, setLocale } = useI18n();
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = (lang: 'en' | 'ar') => {
        setLocale(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-secondary hover:text-teal transition-colors p-2 flex items-center">
                <Globe size={22} />
            </button>
            {isOpen && (
                <div className="absolute end-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50 border border-border">
                    <button onClick={() => toggleLanguage('en')} className={`block w-full text-start px-4 py-2 text-sm ${locale === 'en' ? 'font-bold text-teal' : 'text-text-secondary'} hover:bg-background-light`}>English</button>
                    <button onClick={() => toggleLanguage('ar')} className={`block w-full text-start px-4 py-2 text-sm ${locale === 'ar' ? 'font-bold text-teal' : 'text-text-secondary'} hover:bg-background-light`}>العربية</button>
                </div>
            )}
        </div>
    );
};

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useI18n();
    
    const publicNavLinks = [
      { name: t('nav.home'), path: '/' },
      { name: t('nav.products'), path: '/products' },
      { name: t('nav.solutions'), path: '/solutions' },
      { name: t('nav.caseStudies'), path: '/case-studies' },
      { name: t('nav.resources'), path: '/resources' },
      { name: t('nav.insights'), path: '/insights' },
      { name: t('nav.company'), path: '/company' },
      { name: t('nav.contact'), path: '/contact' },
    ];

    const logoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM0IiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMzM0IDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTI1LjMzMjEgMEw1MC42NjQyIDE0LjYyODlWNDMuODg2N0wyNS4zMzIxIDU4LjUxNTZMMC4wMDAwMyA0My44ODY3VjE0LjYyODlaIiBmaWxsPSIjMUExQzFGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMTUuODgyMyA1LjQ0MDM3VjUyLjA3NTJMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMzQuNzgxOSA1LjQ0MDM3VjUyLjA3NTJMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMjAuNTU3MiAzLjI3MzA5VjU1LjI0MjVMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMjUuMzMyMSAwTDUwLjY2NDIgMTQuNjI4OVY0My44ODY3TDI1LjMzMjEgNTguNTE1NkwyNS4zMzIxIDU4LjUxNTYiIGZpbGw9IiMwMDk3OUYiLz4KPHBhdGggZD0iTTMwLjExMDcgMjEuOTA1MUwyNS4zMzU4IDI0Ljc4MDFMMjAuNTYwOCAyMS45MDUxVjE2LjEyNTFMMjUuMzM1OCAxMy4yNDUxTDMwLjExMDcgMTYuMTI1MVYyMS45MDUxWiIgZmlsbD0iI0JDRTVCMiIvPgo8cGF0aCBkPSJNMjUuMzM1OCAyNC43ODAxTDIwLjU2MDggMjEuOTA1MVYxNi4xMjUxTDI1LjMzNTggMTMuMjQ1MUwyNS4zMzU4IDI0Ljc4MDFaIiBmaWxsPSIjNDg2QTY5Ii8+CjxwYXRoIGQ9Ik0zMC4xMTA3IDM2LjYxMDFMMjUuMzM1OCAzOS40OTAxTDIwLjU2MDggMzYuNjEwMVYzMC44MzAxbDIuMzg3NSAxLjM4VjM1LjIzMDFsMi4zODc1IDEuMzhsMi4zODc1LTEuMzhWMzIuMjEwMWwyLjM4NzUtMS4zOFYzNi42MTAxWiIgZmlsbD0iI0JDRTVCMiIvPgo8cGF0aCBkPSJNMjUuMzM1OCAzOS40OTAxTDIwLjU2MDggMzYuNjEwMVYzMC44MzAxTDIyLjk0ODMgMzIuMjEwMVYzNS4yMzAxTDI1LjMzNTggMzYuNjEwMUwyNS4zMzU4IDM5LjQ5MDFaIiBmaWxsPSIjNDg2QTY5Ii8+CjwvZz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxKSI+CjxwYXRoIGQ9Ik03MC4yNjU2IDM0LjQzNzVINDguODI4MVYyMy4wNjI1SDcwLjI2NTZWNTEuNDM3NUg4MC4xNDA2VjIzLjA2MjVIOTMuMTU2MlYxMy41OTM4SDgwLjE0MDZWMGg2My43MDNWMTMuNTkzOEg5Ni41OTM4VjIzLjA2MjVIMTEyLjcxOVY1My41OTM4SDk2LjU5MzhWNDEuOTM3NUg4MC4xNDA2VjYzLjQ2ODhIMTIxLjc2NlY1MS40Mzc1SDEyNy4xNDFWMTMuNTkzOEgxMzUuMjY2VjBINzAuMjY1NlYzNC40Mzc1Wk0xMjEuNzY2IDIuODI4MTJWMTAuNzY1Nkg4My4wNTA4VjIuODI4MTJIMTIxLjc2NlpNOTMuNjQwNiA0MS45Mzc1SDkzLjE1NjJWMzIuNTYyNUg4MC4xNDA2VjM0LjQzNzVIMTEyLjcxOVYyMy4wNjI1SDEyNy4xNDFWNDEuOTM3NUg5My42NDA2WiIgZmlsbD0iIzFBMUMxRiIvPgo8cGF0aCBkPSJNMTQyLjI2NiAyMy4wNjI1SDIxNC4zVjEzLjU5MzhIMTMyLjI5N1Y2My40Njg4SDI0My4xMjVWNTMuOTA2MkgxNDIuMjY2VjQ0LjQzNzVIMjA1LjMyOFYzNC45MDYySDE0Mi4yNjZWMjMuMDYyNVoiIGZpbGw9IiMxQTFDMUYiLz4KPHBhdGggZD0iTTI3NC43MDMgNTMuOTA2MkgzMTIuNDIyVjQ0LjQzNzVIMjg0LjQ4NFYwSDI3NC43MDNWNTMuOTA2MloiIGZpbGw9IiMxQTFDMUYiLz4KPHBhdGggZD0iTTIyMy40MjIgNjMuNDY4OEgyMzUuMTg4VjBINDIuOTM3NVYxMy41OTM4SDIzOC4wMTZWMzQuOTA2MkgzMjUuMjAzVjQ0LjQzNzVIMjM4LjAxNlY2My40Njg4SDIyMy40MjJaIiBmaWxsPSIjMUExQzFGIi8+CjxwYXRoIGQ9Ik0yNDkuNTE2IDIuODI4MTJDMjQ4LjQxMyAyLjgyODEyIDI0Ny40NDYgMy4xNTI4OCAyNDYuNjE1IDMuODAyNDdDMjQ1Ljc4NCA0LjQ1MjA1IDI0NS4wNTggNS4yOTYyNiAyNDQuNDM4IDYuMzM1MTlDMjQzLjgxNyA3LjM3NDA2IDI0My4zNTIgOC41NzQ3NCAyNDMuMDQyIDkuOTM3MjRDMTY4LjQzOCAxMi40Mzc1IDEzMy4yMDMgMTMuNTkzOCAxMzIuMjk3IDEzLjU5MzhWMjMuMDYyNUgxNDIuMjY2VjM0LjkwNjJIMjA1LjMyOFY0NC40Mzc1SDE0Mi4yNjZWMzQuOTA2MkgxMzIuMjk3VjQ0LjQzNzVIMTQyLjI2NlY1M04OTA2MkgxMzIuMjk3VjYzLjQ2ODhIMjQzLjEyNVY1My45MDYySDI3NC43MDNWNDQuNDM3NUgyODQuNDg0VjM0LjkwNjJIMjc0LjcwM1YyMy4wNjI1SDI4NC40ODRWMTMuNTkzOEgyNzQuNzAzVjBIMjg0LjQ4NFYzNC45MDYySDMyNS4yMDNWMjMuMDYyNUgzMTIuNDIyVjEzLjU5MzhIMzEyLjYwOVYzNC45MDYySDMzMy41VjBINDAuNDUzMVYxMy41OTM4SDM3LjAyMzRWMEgyMjMuNDIyVjEzLjU5MzhIMjM1LjE4OFYwSDIzOC4wMTZWMTMuNTkzOEgyMjMuNDIyVjIzLjA2MjVIMjE0LjNWMTMuNTkzOEgyMTMuOTg0VjIzLjA2MjVIMjE0LjNDMTk5LjQ2OSAyMy4wNjI1IDE3OS45MjIgMjEuNTE1NiAxNjMuOTA2IDE4LjYyNUgxNjUuOTY5QzE2NC43NDQgMTguNTQxNSAxNjMuNjI2IDE4LjQ4OTUgMTYyLjYxNSAxOC40Njg4QzE2MS42MDQgMTguNDQ4IDE2MC42MzYgMTguNDM3NSAxNTkuNzAzIDE4LjQzNzVDMTQ0LjEzMSAxOC40Mzc1IDEyOS45MTMgMTkuMDQxMSAxMTcuMDQ3IDIwLjI1QzE2Ni43MDMgMjIuMDYyNSAyMDYuMTQxIDI0LjA2MjUgMjE3LjQzOCAyNC45Mzc1SDIyMi4zNzVWMTYuMjgxMkgxMzUuMjY2VjBINzAuMjY1NlYzNC40Mzc1SDQ4LjgyODFWMjMuMDYyNUg3MC4yNjU2VjUxLjQzNzVINDguODI4MVY2My40Njg4SDcwLjI2NTZWNTEuNDM3NUg4MC4xNDA2VjIzLjA2MjVIOTMuMTU2MlYxMy41OTM4SDgwLjE0MDZWMEg4My4wNTA4VjEzLjU5MzhIODAuMTQwNlYyMy4wNjI1SDk2LjU5MzhWMzIuNTYyNUg5My4xNTYyVjQxLjkzNzVIMTI3LjE0MVYyMy4wNjI1SDEzNS4yNjZWMTMuNTkzOEgxMjcuMTQxVjUxLjQzNzVIMTIxLjc2NlY2My40Njg4SDgwLjE0MDZWNDEuOTM3NUg5Ni41OTM4VjUzLjU5MzhIMTEyLjcxOVYyMy4wNjI1SDEwMC4wNDdWMzIuNTYyNUg5Ni41OTM4VjQxLjkzNzVIOzMuNTE1NlYyMy4wNjI1SDk2LjU5MzhWMTMuNTkzOEg5My4xNTYyVjIzLjA2MjVIODAuMTQwNlYzNC40Mzc1SDkzLjE1NjJWMzIuNTYyNUgxMDIuNTYyVjQxLjkzNzVIMTIxLjc2NlY1MS40Mzc1SDExMi43MTlWMzQuNDM3NUg5My42NDA2VjQxLjkzNzVIMTIxLjc2NlYxMy41OTM4SDEyNS44MjdWMEgxMzUuMjY2VjEzLjU5MzhIMTI3LjE0MVYyMy4wNjI1SDExMi43MTlWMTEuODc1SDEyMS43NjZWMEgxMjUuODI3QzEyOC4xODEgMi4zNTg4NiAxMjkuNjg4IDQuNTkzNzUgMTMwLjQ1MyA2LjY4NzVDMTMxLjIxOSA4Ljc4MTI1IDEzMS41OTQgMTAuODU5NCAxMzEuNTk0IDEyLjkyMThWMjAuODQzOEgxMzAuMDQ3VjE4Ljg3NUgxMjguNVYxNi45MDYySDEyNi45NTNWMTQuOTM3NUgxMjUuNDIyVjEyLjk2ODhIMTIzLjg5MVYxMS4wNjI1SDEyMi4zNDRWOS4xNTYyNUgxMjAuNzk3VjcuMjVIMTE5LjI1VjUuMzQzNzVIMTE3LjcwM1YzLjQzNzVIMTE2LjE1NlYxLjUyMDgzQzEwNy40MDMgMS4zMTI1IDk4LjEzOTIgMS4yNSA4OC41NDY5IDEuMjVWMEg0Mi45Mzc1VjEzLjU5MzhINDIuOTM3NVYwSDI0OS41MTZaIiBmaWxsPSIjMUExQzFGIi8+CjwvZz4KPC9zdmc+Cg==`;
    const reversedLogoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM0IiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMzM0IDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTI1LjMzMjEgMEw1MC42NjQyIDE0LjYyODlWNDMuODg2N0wyNS4zMzIxIDU4LjUxNTZMMC4wMDAwMyA0My44ODY3VjE0LjYyODlaIiBmaWxsPSIjMUExQzFGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMTUuODgyMyA1LjQ0MDM3VjUyLjA3NTJMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMzQuNzgxOSA1LjQ0MDM3VjUyLjA3NTJMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMjAuNTU3MiAzLjI3MzA5VjU1LjI0MjVMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMjUuMzMyMSAwTDUwLjY2NDIgMTQuNjI4OVY0My44ODY3TDI1LjMzMjEgNTguNTE1NkwyNS4zMzIxIDU4LjUxNTYiIGZpbGw9IiMwMDk3OUYiLz4KPHBhdGggZD0iTTMwLjExMDcgMjEuOTA1MUwyNS4zMzU4IDI0Ljc4MDFMMjAuNTYwOCAyMS45MDUxVjE2LjEyNTFMMjUuMzM1OCAxMy4yNDUxTDMwLjExMDcgMTYuMTI1MVYyMS45MDUxWiIgZmlsbD0iI0JDRTVCMiIvPgo8cGF0aCBkPSJNMjUuMzM1OCAyNC43ODAxTDIwLjU2MDggMjEuOTA1MVYxNi4xMjUxTDI1LjMzNTggMTMuMjQ1MUwyNS4zMzU4IDI0Ljc4MDFaIiBmaWxsPSIjNDg2QTY5Ii8+CjxwYXRoIGQ9Ik0zMC4xMTA3IDM2LjYxMDFMMjUuMzM1OCAzOS40OTAxTDIwLjU2MDggMzYuNjEwMVYzMC44MzAxbDIuMzg3NSAxLjM4VjM1LjIzMDFsMi4zODc1IDEuMzhsMi4zODc1LTEuMzhWMzIuMjEwMWwyLjM4NzUtMS4zOFYzNi42MTAxWiIgZmlsbD0iI0JDRTVCMiIvPgo8cGF0aCBkPSJNMjUuMzM1OCAzOS40OTAxTDIwLjU2MDggMzYuNjEwMVYzMC44MzAxTDIyLjk0ODMgMzIuMjEwMVYzNS4yMzAxTDI1LjMzNTggMzYuNjEwMUwyNS4zMzU4IDM5LjQ5MDFaIiBmaWxsPSIjNDg2QTY5Ii8+CjwvZz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxKSI+CjxwYXRoIGQ9Ik03MC4yNjU2IDM0LjQzNzVINDguODI4MVYyMy4wNjI1SDcwLjI2NTZWNTEuNDM3NUg4MC4xNDA2VjIzLjA2MjVIOTMuMTU2MlYxMy41OTM4SDgwLjE0MDZWMGg2My43MDNWMTMuNTkzOEg5Ni41OTM4VjIzLjA2MjVIMTEyLjcxOVY1My41OTM4SDk2LjU5MzhWNDEuOTM3NUg4MC4xNDA2VjYzLjQ2ODhIMTIxLjc2NlY1MS40Mzc1SDEyNy4xNDFWMTMuNTkzOEgxMzUuMjY2VjBINzAuMjY1NlYzNC40Mzc1Wk0xMjEuNzY2IDIuODI4MTJWMTAuNzY1Nkg4My4wNTA4VjIuODI4MTJIMTIxLjc2NlpNOTMuNjQwNiA0MS45Mzc1SDkzLjE1NjJWMzIuNTYyNUg4MC4xNDA2VjM0LjQzNzVIMTEyLjcxOVYyMy4wNjI1SDEyNy4xNDFWNDEuOTM3NUg5My42NDA2WiIgZmlsbD0iI0JBQzVCMyIvPgo8cGF0aCBkPSJNMTQyLjI2NiAyMy4wNjI1SDIxNC4zVjEzLjU5MzhIMTMyLjI5N1Y2My40Njg4SDI0My4xMjVWNTMuOTA2MkgxNDIuMjY2VjQ0LjQzNzVIMjA1LjMyOFYzNC45MDYySDE0Mi4yNjZWMjMuMDYyNVoiIGZpbGw9IiNCQUM1QjMiLz4KPHBhdGggZD0iTTI3NC43MDMgNTMuOTA2MkgzMTIuNDIyVjQ0LjQzNzVIMjg0LjQ4NFYwSDI3NC43MDNWNTMuOTA2MloiIGZpbGw9IiNCQUM1QjMiLz4KPHBhdGggZD0iTTIyMy40MjIgNjMuNDY4OEgyMzUuMTg4VjBINDIuOTM3NVYxMy41OTM4SDIzOC4wMTZWMzQuOTA2MkgzMjUuMjAzVjQ0LjQzNzVIMjM4LjAxNlY2My40Njg4SDIyMy40MjJaIiBmaWxsPSIjQkFDNUIzIi8+CjxwYXRoIGQ9Ik0yNDkuNTE2IDIuODI4MTJDMjQ4LjQxMyAyLjgyODEyIDI0Ny40NDYgMy4xNTI4OCAyNDYuNjE1IDMuODAyNDdDMjQ1Ljc4NCA0LjQ1MjA1IDI0NS4wNTggNS4yOTYyNiAyNDQuNDM4IDYuMzM1MTlDMjQzLjgxNyA3LjM3NDA2IDI0My4zNTIgOC41NzQ3NCAyNDMuMDQyIDkuOTM3MjRDMTY4LjQzOCAxMi40Mzc1IDEzMy4yMDMgMTMuNTkzOCAxMzIuMjk3IDEzLjU5MzhWMjMuMDYyNUgxNDIuMjY2VjM0LjkwNjJIMjA1LjMyOFY0NC40Mzc1SDE0Mi4yNjZWMzQuOTA2MkgxMzIuMjk3VjQ0LjQzNzVIMTQyLjI2NlY1M04OTA2MkgxMzIuMjk3VjYzLjQ2ODhIMjQzLjEyNVY1My45MDYySDI3NC43MDNWNDQuNDM3NUgyODQuNDg0VjM0LjkwNjJIMjc0LjcwM1YyMy4wNjI1SDI4NC40ODRWMTMuNTkzOEgyNzQuNzAzVjBIMjg0LjQ4NFYzNC45MDYySDMyNS4yMDNWMjMuMDYyNUgzMTIuNDIyVjEzLjU5MzhIMzEyLjYwOVYzNC45MDYySDMzMy41VjBINDAuNDUzMVYxMy41OTM4SDM3LjAyMzRWMEgyMjMuNDIyVjEzLjU5MzhIMjM1LjE4OFYwSDIzOC4wMTZWMTMuNTkzOEgyMjMuNDIyVjIzLjA2MjVIMjE0LjNWMTMuNTkzOEgyMTMuOTg0VjIzLjA2MjVIMjE0LjNDMTk5LjQ2OSAyMy4wNjI1IDE3OS45MjIgMjEuNTE1NiAxNjMuOTA2IDE4LjYyNUgxNjUuOTY5QzE2NC43NDQgMTguNTQxNSAxNjMuNjI2IDE4LjQ4OTUgMTYyLjYxNSAxOC40Njg4QzE2MS42MDQgMTguNDQ4IDE2MC42MzYgMTguNDM3NSAxNTkuNzAzIDE4LjQzNzVDMTQ0LjEzMSAxOC40Mzc1IDEyOS45MTMgMTkuMDQxMSAxMTcuMDQ3IDIwLjI1QzE2Ni43MDMgMjIuMDYyNSAyMDYuMTQxIDI0LjA2MjUgMjE3LjQzOCAyNC45Mzc1SDIyMi4zNzVWMTYuMjgxMkgxMzUuMjY2VjBINzAuMjY1NlYzNC40Mzc1SDQ4LjgyODFWMjMuMDYyNUg3MC4yNjU2VjUxLjQzNzVINDguODI4MVY2My40Njg4SDcwLjI2NTZWNTEuNDM3NUg4MC4xNDA2VjIzLjA2MjVIOTMuMTU2MlYxMy41OTM4SDgwLjE0MDZWMEg4My4wNTA4VjEzLjU5MzhIODAuMTQwNlYyMy4wNjI1SDk2LjU5MzhWMzIuNTYyNUg5My4xNTYyVjQxLjkzNzVIMTI3LjE0MVYyMy4wNjI1SDEzNS4yNjZWMTMuNTkzOEgxMjcuMTQxVjUxLjQzNzVIMTIxLjc2NlY2My40Njg4SDgwLjE0MDZWNDEuOTM3NUg5Ni41OTM4VjUzLjU5MzhIMTEyLjcxOVYyMy4wNjI1SDEwMC4wNDdWMzIuNTYyNUg5Ni41OTM4VjQxLjkzNzVIOzMuNTE1NlYyMy4wNjI1SDk2LjU5MzhWMTMuNTkzOEg5My4xNTYyVjIzLjA2MjVIODAuMTQwNlYzNC40Mzc1SDkzLjE1NjJWMzIuNTYyNUgxMDIuNTYyVjQxLjkzNzVIMTIxLjc2NlY1MS40Mzc1SDExMi43MTlWMzQuNDM3NUg5My42NDA2VjQxLjkzNzVIMTIxLjc2NlYxMy41OTM4SDEyNS44MjdWMEgxMzUuMjY2VjEzLjU5MzhIMTI3LjE0MVYyMy4wNjI1SDExMi43MTlWMTEuODc1SDEyMS43NjZWMEgxMjUuODI3QzEyOC4xODEgMi4zNTg4NiAxMjkuNjg4IDQuNTkzNzUgMTMwLjQ1MyA2LjY4NzVDMTMxLjIxOSA4Ljc4MTI1IDEzMS41OTQgMTAuODU5NCAxMzEuNTk0IDEyLjkyMThWMjAuODQzOEgxMzAuMDQ3VjE4Ljg3NUgxMjguNVYxNi45MDYySDEyNi45NTNWMTQuOTM3NUgxMjUuNDIyVjEyLjk2ODhIMTIzLjg5MVYxMS4wNjI1SDEyMi4zNDRWOS4xNTYyNUgxMjAuNzk3VjcuMjVIMTE5LjI1VjUuMzQzNzVIMTE3LjcwM1YzLjQzNzVIMTE2LjE1NlYxLjUyMDgzQzEwNy40MDMgMS4zMTI1IDk4LjEzOTIgMS4yNSA4OC41NDY5IDEuMjVWMEg0Mi45Mzc1VjEzLjU5MzhINDIuOTM3NVYwSDI0OS41MTZaIiBmaWxsPSIjQkFDNUIzIi8+CjwvZz4KPC9zdmc+Cg==`;


    const activeLinkClass = "text-teal after:w-full";
    const inactiveLinkClass = "text-text-secondary hover:text-teal transition-colors duration-300 after:w-0";

    const linkBaseClass = "relative after:absolute after:bottom-[-4px] after:start-0 after:h-0.5 after:bg-teal after:transition-all after:duration-300";

    return (
        <header className="bg-white/80 backdrop-blur-lg border-b border-border sticky top-0 z-40">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center py-6">
                    <NavLink to="/" className="flex items-center">
                        <img src={logoSvg} alt="EMPHZ Global Logo" className="h-12" />
                    </NavLink>
                    <nav className="hidden lg:flex items-center space-x-8">
                        {publicNavLinks.map(link => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) => `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass} font-semibold`}
                                end={link.path === '/'}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-2">
                        <NavLink to="/search" className={`${inactiveLinkClass.split(' ')[0]} p-2`}><Search size={22} /></NavLink>
                        <LanguageSwitcher />
                        <div className="hidden lg:block border-s border-border h-6 mx-3"></div>
                        <NavLink to="/contact" className="hidden lg:block bg-teal text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm">
                           {t('nav.requestQuote')}
                        </NavLink>
                        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-text-secondary">
                            <Menu size={26} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="absolute top-0 end-0 h-full w-full max-w-sm bg-white p-6" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-8">
                            <img src={logoSvg} alt="EMPHZ Global Logo" className="h-12" />
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-text-secondary">
                                <X size={26} />
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-5">
                            {publicNavLinks.map(link => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) => `${isActive ? 'text-teal' : 'text-text-secondary'} text-lg font-semibold`}
                                    end={link.path === '/'}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                         <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 block w-full text-center bg-teal text-white px-5 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                           {t('nav.requestQuote')}
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

const Footer: React.FC = () => {
    const { t } = useI18n();

    const socialLinks = [
        { name: 'LinkedIn', icon: <Linkedin size={20}/>, path: 'https://linkedin.com' },
        { name: 'Twitter', icon: <Twitter size={20}/>, path: 'https://twitter.com' },
        { name: 'Facebook', icon: <Facebook size={20}/>, path: 'https://facebook.com' },
    ];

    const reversedLogoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM0IiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMzM0IDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTI1LjMzMjEgMEw1MC42NjQyIDE0LjYyODlWNDMuODg2N0wyNS4zMzIxIDU4LjUxNTZMMC4wMDAwMyA0My44ODY3VjE0LjYyODlaIiBmaWxsPSIjMUExQzFGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMTUuODgyMyA1LjQ0MDM3VjUyLjA3NTJMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMzQuNzgxOSA1LjQ0MDM3VjUyLjA3NTJMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMjAuNTU3MiAzLjI3MzA5VjU1LjI0MjVMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMjUuMzMyMSAwTDUwLjY2NDIgMTQuNjI4OVY0My44ODY3TDI1LjMzMjEgNTguNTE1NkwyNS4zMzIxIDU4LjUxNTYiIGZpbGw9IiMwMDk3OUYiLz4KPHBhdGggZD0iTTMwLjExMDcgMjEuOTA1MUwyNS4zMzU4IDI0Ljc4MDFMMjAuNTYwOCAyMS45MDUxVjE2LjEyNTFMMjUuMzM1OCAxMy4yNDUxTDMwLjExMDcgMTYuMTI1MVYyMS45MDUxWiIgZmlsbD0iI0JDRTVCMiIvPgo8cGF0aCBkPSJNMjUuMzM1OCAyNC43ODAxTDIwLjU2MDggMjEuOTA1MVYxNi4xMjUxTDI1LjMzNTggMTMuMjQ1MUwyNS4zMzU4IDI0Ljc4MDFaIiBmaWxsPSIjNDg2QTY5Ii8+CjxwYXRoIGQ9Ik0zMC4xMTA3IDM2LjYxMDFMMjUuMzM1OCAzOS40OTAxTDIwLjU2MDggMzYuNjEwMVYzMC44MzAxbDIuMzg3NSAxLjM4VjM1LjIzMDFsMi4zODc1IDEuMzhsMi4zODc1LTEuMzhWMzIuMjEwMWwyLjM4NzUtMS4zOFYzNi42MTAxWiIgZmlsbD0iI0JDRTVCMiIvPgo8cGF0aCBkPSJNMjUuMzM1OCAzOS40OTAxTDIwLjU2MDggMzYuNjEwMVYzMC44MzAxTDIyLjk0ODMgMzIuMjEwMVYzNS4yMzAxTDI1LjMzNTggMzYuNjEwMUwyNS4zMzU4IDM5LjQ5MDFaIiBmaWxsPSIjNDg2QTY5Ii8+CjwvZz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxKSI+CjxwYXRoIGQ9Ik03MC4yNjU2IDM0LjQzNzVINDguODI4MVYyMy4wNjI1SDcwLjI2NTZWNTEuNDM3NUg4MC4xNDA2VjIzLjA2MjVIOTMuMTU2MlYxMy41OTM4SDgwLjE0MDZWMGg2My43MDNWMTMuNTkzOEg5Ni41OTM4VjIzLjA2MjVIMTEyLjcxOVY1My41OTM4SDk2LjU5MzhWNDEuOTM3NUg4MC4xNDA2VjYzLjQ2ODhIMTIxLjc2NlY1MS40Mzc1SDEyNy4xNDFWMTMuNTkzOEgxMzUuMjY2VjBINzAuMjY1NlYzNC40Mzc1Wk0xMjEuNzY2IDIuODI4MTJWMTAuNzY1Nkg4My4wNTA4VjIuODI4MTJIMTIxLjc2NlpNOTMuNjQwNiA0MS45Mzc1SDkzLjE1NjJWMzIuNTYyNUg4MC4xNDA2VjM0LjQzNzVIMTEyLjcxOVYyMy4wNjI1SDEyNy4xNDFWNDEuOTM3NUg5My42NDA2WiIgZmlsbD0iI0JBQzVCMyIvPgo8cGF0aCBkPSJNMTQyLjI2NiAyMy4wNjI1SDIxNC4zVjEzLjU5MzhIMTMyLjI5N1Y2My40Njg4SDI0My4xMjVWNTMuOTA2MkgxNDIuMjY2VjQ0LjQzNzVIMjA1LjMyOFYzNC45MDYySDE0Mi4yNjZWMjMuMDYyNVoiIGZpbGw9IiNCQUM1QjMiLz4KPHBhdGggZD0iTTI3NC43MDMgNTMuOTA2MkgzMTIuNDIyVjQ0LjQzNzVIMjg0LjQ4NFYwSDI3NC43MDNWNTMuOTA2MloiIGZpbGw9IiNCQUM1QjMiLz4KPHBhdGggZD0iTTIyMy40MjIgNjMuNDY4OEgyMzUuMTg4VjBINDIuOTM3NVYxMy41OTM4SDIzOC4wMTZWMzQuOTA2MkgzMjUuMjAzVjQ0LjQzNzVIMjM4LjAxNlY2My40Njg4SDIyMy40MjJaIiBmaWxsPSIjQkFDNUIzIi8+CjxwYXRoIGQ9Ik0yNDkuNTE2IDIuODI4MTJDMjQ4LjQxMyAyLjgyODEyIDI0Ny40NDYgMy4xNTI4OCAyNDYuNjE1IDMuODAyNDdDMjQ1Ljc4NCA0LjQ1MjA1IDI0NS4wNTggNS4yOTYyNiAyNDQuNDM4IDYuMzM1MTlDMjQzLjgxNyA3LjM3NDA2IDI0My4zNTIgOC41NzQ3NCAyNDMuMDQyIDkuOTM3MjRDMTY4LjQzOCAxMi40Mzc1IDEzMy4yMDMgMTMuNTkzOCAxMzIuMjk3IDEzLjU5MzhWMjMuMDYyNUgxNDIuMjY2VjM0LjkwNjJIMjA1LjMyOFY0NC40Mzc1SDE0Mi4yNjZWMzQuOTA2MkgxMzIuMjk3VjQ0LjQzNzVIMTQyLjI2NlY1M04OTA2MkgxMzIuMjk3VjYzLjQ2ODhIMjQzLjEyNVY1My45MDYySDI3NC43MDNWNDQuNDM3NUgyODQuNDg0VjM0LjkwNjJIMjc0LjcwM1YyMy4wNjI1SDI4NC40ODRWMTMuNTkzOEgyNzQuNzAzVjBIMjg0LjQ4NFYzNC45MDYySDMyNS4yMDNWMjMuMDYyNUgzMTIuNDIyVjEzLjU5MzhIMzEyLjYwOVYzNC45MDYySDMzMy41VjBINDAuNDUzMVYxMy41OTM4SDM3LjAyMzRWMEgyMjMuNDIyVjEzLjU5MzhIMjM1LjE4OFYwSDIzOC4wMTZWMTMuNTkzOEgyMjMuNDIyVjIzLjA2MjVIMjE0LjNWMTMuNTkzOEgyMTMuOTg0VjIzLjA2MjVIMjE0LjNDMTk5LjQ2OSAyMy4wNjI1IDE3OS45MjIgMjEuNTE1NiAxNjMuOTA2IDE4LjYyNUgxNjUuOTY5QzE2NC43NDQgMTguNTQxNSAxNjMuNjI2IDE4LjQ4OTUgMTYyLjYxNSAxOC40Njg4QzE2MS42MDQgMTguNDQ4IDE2MC42MzYgMTguNDM3NSAxNTkuNzAzIDE4LjQzNzVDMTQ0LjEzMSAxOC40Mzc1IDEyOS45MTMgMTkuMDQxMSAxMTcuMDQ3IDIwLjI1QzE2Ni43MDMgMjIuMDYyNSAyMDYuMTQxIDI0LjA2MjUgMjE3LjQzOCAyNC45Mzc1SDIyMi4zNzVWMTYuMjgxMkgxMzUuMjY2VjBINzAuMjY1NlYzNC40Mzc1SDQ4LjgyODFWMjMuMDYyNUg3MC4yNjU2VjUxLjQzNzVINDguODI4MVY2My40Njg4SDcwLjI2NTZWNTEuNDM3NUg4MC4xNDA2VjIzLjA2MjVIOTMuMTU2MlYxMy41OTM4SDgwLjE0MDZWMEg4My4wNTA4VjEzLjU5MzhIODAuMTQwNlYyMy4wNjI1SDk2LjU5MzhWMzIuNTYyNUg5My4xNTYyVjQxLjkzNzVIMTI3LjE0MVYyMy4wNjI1SDEzNS4yNjZWMTMuNTkzOEgxMjcuMTQxVjUxLjQzNzVIMTIxLjc2NlY2My40Njg4SDgwLjE0MDZWNDEuOTM3NUg5Ni41OTM4VjUzLjU5MzhIMTEyLjcxOVYyMy4wNjI1SDEwMC4wNDdWMzIuNTYyNUg5Ni41OTM4VjQxLjkzNzVIOzMuNTE1NlYyMy4wNjI1SDk2LjU5MzhWMTMuNTkzOEg5My4xNTYyVjIzLjA2MjVIODAuMTQwNlYzNC40Mzc1SDkzLjE1NjJWMzIuNTYyNUgxMDIuNTYyVjQxLjkzNzVIMTIxLjc2NlY1MS40Mzc1SDExMi43MTlWMzQuNDM3NUg5My42NDA2VjQxLjkzNzVIMTIxLjc2NlYxMy41OTM4SDEyNS44MjdWMEgxMzUuMjY2VjEzLjU5MzhIMTI3LjE0MVYyMy4wNjI1SDExMi43MTlWMTEuODc1SDEyMS43NjZWMEgxMjUuODI3QzEyOC4xODEgMi4zNTg4NiAxMjkuNjg4IDQuNTkzNzUgMTMwLjQ1MyA2LjY4NzVDMTMxLjIxOSA4Ljc4MTI1IDEzMS41OTQgMTAuODU5NCAxMzEuNTk0IDEyLjkyMThWMjAuODQzOEgxMzAuMDQ3VjE4Ljg3NUgxMjguNVYxNi45MDYySDEyNi45NTNWMTQuOTM3NUgxMjUuNDIyVjEyLjk2ODhIMTIzLjg5MVYxMS4wNjI1SDEyMi4zNDRWOS4xNTYyNUgxMjAuNzk3VjcuMjVIMTE5LjI1VjUuMzQzNzVIMTE3LjcwM1YzLjQzNzVIMTE2LjE1NlYxLjUyMDgzQzEwNy40MDMgMS4zMTI1IDk4LjEzOTIgMS4yNSA4OC41NDY5IDEuMjVWMEg0Mi45Mzc1VjEzLjU5MzhINDIuOTM3NVYwSDI0OS41MTZaIiBmaWxsPSIjQkFDNUIzIi8+CjwvZz4KPC9zdmc+Cg==`;

    return (
        <footer className="bg-graphite text-gray-300 pattern-bg">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <img src={reversedLogoSvg} alt="EMPHZ Global Logo" className="h-12 mb-4" />
                        <p className="text-sm text-silver max-w-xs">{t('footer.tagline')}</p>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map(link => (
                                <a key={link.name} href={link.path} className="text-silver hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">{t('footer.quickLinks')}</h3>
                        <ul className="space-y-2 text-sm text-silver">
                            <li><NavLink to="/products" className="hover:text-white transition-colors">Products</NavLink></li>
                            <li><NavLink to="/solutions" className="hover:text-white transition-colors">Solutions</NavLink></li>
                            <li><NavLink to="/company" className="hover:text-white transition-colors">Company</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">{t('footer.contactUs')}</h3>
                        <ul className="space-y-2 text-sm text-silver">
                            <li className="flex items-start"><Mail size={16} className="mt-1 me-2 flex-shrink-0"/><a href="mailto:info@emphz.com" className="hover:text-white">info@emphz.com</a></li>
                            <li className="flex items-start"><Phone size={16} className="mt-1 me-2 flex-shrink-0"/><a href="tel:+918648881888" className="hover:text-white">+91 86488 81888</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">{t('footer.office')}</h3>
                        <p className="text-sm text-silver">Vadakara – 673104, India</p>
                    </div>
                </div>
            </div>
            <div className="bg-black/30">
                <div className="container mx-auto px-6 py-4 text-center text-sm text-silver">
                    {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
                </div>
            </div>
        </footer>
    );
};

const PublicLayout: React.FC = () => {
    const location = useLocation();
    const { t } = useI18n();

    return (
        <div key={location.pathname} className="flex flex-col min-h-screen page-transition">
            <Header />
            <main className="flex-grow">
                <ToastContainer />
                <Outlet />
            </main>
            
            {/* Floating Action Buttons */}
            <div className="fixed bottom-24 end-6 z-40">
                <NavLink to="/contact" className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-transform transform hover:scale-110">
                    <MessageSquare size={30} />
                    <span className="sr-only">{t('nav.requestQuote')}</span>
                </NavLink>
            </div>
            <ChatWidget />
            <CookieConsentBanner />

            <Footer />
        </div>
    );
};

export default PublicLayout;