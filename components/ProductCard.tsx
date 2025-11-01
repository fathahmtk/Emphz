import React, { memo, useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from "react-router-dom";
import { Product } from '../types';
import Button from './Button';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { FALLBACK_LOGO_URL } from '../constants';

interface ProductCardProps {
  product: Product;
  onQuickViewClick: (product: Product) => void;
  categoryName?: string;
}

const ImagePlaceholder: React.FC = () => (
    <div className="w-full h-full bg-gray-200 shimmer-bg"></div>
);

const ImageError: React.FC = () => (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center p-4 text-center">
        <img
            src={FALLBACK_LOGO_URL}
            alt="EMPHZ Logo"
            className="w-1/2 h-auto object-contain opacity-20 mb-2"
        />
        <p className="text-xs text-[var(--color-text-secondary)]">Image not available</p>
    </div>
);

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickViewClick, categoryName }) => {
  const descriptionText = product.description || product.useCase || product.innovation;
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef);
  
  const [imageStatus, setImageStatus] = useState<'pending' | 'loading' | 'loaded' | 'error'>('pending');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(() => (
      Array.isArray(product.image) ? product.image : (product.image ? [product.image] : [])
  ), [product.image]);

  const activeImageSrc = images[currentImageIndex];

  // Effect to reset image loading state when the product prop changes
  useEffect(() => {
    setImageStatus('pending');
    setCurrentImageIndex(0);
  }, [product.code]);

  // Effect to trigger image loading when the card becomes visible
  useEffect(() => {
    if (isVisible && imageStatus === 'pending') {
      if (images.length > 0 && images[0]) {
        setImageStatus('loading');
      } else {
        setImageStatus('error');
      }
    }
  }, [isVisible, imageStatus, images]);

  const handleImageLoad = useCallback(() => setImageStatus('loaded'), []);
  const handleImageError = useCallback(() => setImageStatus('error'), []);

  const handlePrev = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex); 
    setImageStatus('loading');
  }, [currentImageIndex, images.length]);

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex); 
    setImageStatus('loading');
  }, [currentImageIndex, images.length]);

  return (
    <div
      ref={cardRef}
      className={`h-full group opacity-0 ${isVisible ? 'animate-fadeInScaleUp' : ''}`}
    >
      <div className="bg-[var(--color-surface-primary)] backdrop-blur-lg rounded-[var(--radius)] shadow-[var(--shadow-md)] group-hover:shadow-[var(--shadow-lg)] transition-all duration-300 border border-[var(--color-border)] h-full flex flex-col hover:-translate-y-1 group-hover:border-[var(--color-border-hover)] overflow-hidden">
        {/* Image Section */}
        <Link to={`/products/${product.code}`} className="block aspect-[4/3] bg-gray-100/50 relative group/image overflow-hidden">
            <div className="absolute inset-0">
                {(imageStatus === 'pending' || imageStatus === 'loading') && <ImagePlaceholder />}
                {imageStatus === 'error' && <ImageError />}
            </div>
            
            {(imageStatus !== 'pending') && activeImageSrc && (
                <img 
                    src={activeImageSrc}
                    alt={product.name} 
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width="400"
                    height="300"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 ${imageStatus === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
                />
            )}
            
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" aria-hidden="true"></div>
            
            {images.length > 1 && (
                <>
                    <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white rounded-full p-1.5 opacity-0 group-hover/image:opacity-100 transition-all duration-300 hover:bg-black/60 focus:outline-none focus:ring-2 ring-offset-2 ring-white" aria-label={`Previous image for ${product.name}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white rounded-full p-1.5 opacity-0 group-hover/image:opacity-100 transition-all duration-300 hover:bg-black/60 focus:outline-none focus:ring-2 ring-offset-2 ring-white" aria-label={`Next image for ${product.name}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </>
            )}
        </Link>
        
        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          {categoryName && (
              <p className="text-xs font-bold text-[var(--color-brand)] uppercase tracking-wider mb-2">
                  {categoryName}
              </p>
          )}
          <Link to={`/products/${product.code}`} className="block">
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand)] transition-colors duration-300 mb-1">{product.name}</h4>
          </Link>
          <p className="text-sm text-gray-400 font-medium mb-3">Code: {product.code}</p>
          
          {descriptionText && <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2 flex-grow">{descriptionText}</p>}
          
          <div className="mt-auto pt-4 border-t border-black/10 flex items-center gap-3">
            <Button
                href={`/products/${product.code}`}
                variant="primary"
                className="px-4 py-2 text-sm flex-1"
            >
                View Details
            </Button>
            <Button
                onClick={() => onQuickViewClick(product)}
                variant="secondary"
                className="px-4 py-2 text-sm flex-1"
                aria-label={`Quick view of ${product.name}`}
            >
                Quick View
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);