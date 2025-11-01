import React, { useEffect, useCallback } from 'react';
import { Product } from '../types';
import Button from './Button';
import { FALLBACK_LOGO_URL } from '../constants';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, handleKeyDown]);

  if (!product) {
    return null;
  }

  const descriptionText = product.description || product.useCase || product.innovation;
  const rawImage = Array.isArray(product.image) ? product.image[0] : product.image;
  const imageUrl = rawImage || FALLBACK_LOGO_URL;
  const hasRealImage = !!rawImage;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      style={{ animationDuration: '0.3s' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      <div
        className="relative bg-[var(--color-surface-primary)] backdrop-blur-xl saturate-150 w-full max-w-4xl rounded-[var(--radius)] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[var(--color-border)]"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors z-10 p-2 rounded-full hover:bg-black/10"
          aria-label="Close quick view"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={`w-full md:w-1/2 ${!hasRealImage ? 'bg-gray-100/50 p-8' : ''}`}>
          <img
            src={imageUrl}
            alt={product.name}
            loading="lazy"
            className={`w-full h-64 md:h-full ${hasRealImage ? 'object-cover' : 'object-contain opacity-40'}`}
          />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <h2 id="quick-view-title" className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-2">{product.name}</h2>
          <p className="text-sm text-gray-400 font-medium mb-4">Code: {product.code}</p>
          
          <div className="flex-grow overflow-y-auto pr-2" style={{ maxHeight: 'calc(80vh - 200px)' }}>
            {descriptionText && (
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{descriptionText}</p>
            )}
          </div>
          
          <div className="mt-6 pt-6 border-t border-black/10">
            <Button href={`/products/${product.code}`} onClick={onClose} variant="primary" className="w-full">
              View Full Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;