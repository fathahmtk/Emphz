import React from 'react';
import { useI18n } from '../hooks/useI18n';

export const SectionDivider: React.FC = () => {
    const { locale } = useI18n();
    return (
        <div className="container mx-auto px-6">
            <div className="relative my-12 md:my-16" role="separator">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-background-light px-3 text-accent" title={locale === 'ar' ? 'فاصل قسم' : 'Section Divider'}>
                         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="10" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};
