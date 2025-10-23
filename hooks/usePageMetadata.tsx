import { useEffect } from 'react';

const setMetaTag = (name: string, content: string) => {
    // Ensure this runs only in the browser
    if (typeof document === 'undefined') return;

    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

export const usePageMetadata = (title?: string, description?: string, keywords?: string) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }
        if (description) {
            setMetaTag('description', description);
        }
        if (keywords) {
            setMetaTag('keywords', keywords);
        }
    }, [title, description, keywords]);
};
