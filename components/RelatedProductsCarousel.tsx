import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import ProductCard from './ProductCard';
import { useUIState } from '../UIStateContext';
import { useProductCatalog } from '../hooks/useProductCatalog';

interface RelatedProductsCarouselProps {
  currentProductCode: string;
  categoryCode: string;
}

const RelatedProductsCarousel: React.FC<RelatedProductsCarouselProps> = ({ currentProductCode, categoryCode }) => {
  const { openQuickView } = useUIState();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const productCatalog = useProductCatalog();

  const relatedProducts = useMemo(() => {
    return productCatalog
      .find(cat => cat.code === categoryCode)
      ?.products.filter(p => p.code !== currentProductCode)
      .slice(0, 4) || [];
  }, [productCatalog, categoryCode, currentProductCode]);

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const hasOverflow = el.scrollWidth > el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(hasOverflow && el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
        checkScrollability(); // Initial check
        el.addEventListener('scroll', checkScrollability);
        window.addEventListener('resize', checkScrollability);
        return () => {
            el.removeEventListener('scroll', checkScrollability);
            window.removeEventListener('resize', checkScrollability);
        };
    }
  }, [relatedProducts, checkScrollability]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.8;
      el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  if (relatedProducts.length === 0) {
    return null; // Don't render if there are no related products
  }

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-[var(--color-surface-primary)] backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-[var(--color-surface-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)]"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      <div
        ref={scrollContainerRef}
        className="flex space-x-8 overflow-x-auto snap-x snap-mandatory py-4 no-scrollbar"
      >
        {relatedProducts.map(product => (
          <div key={product.code} className="snap-center flex-shrink-0 w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/4">
            <ProductCard
              product={product}
              onQuickViewClick={openQuickView}
            />
          </div>
        ))}
      </div>
      {canScrollRight && (
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 bg-[var(--color-surface-primary)] backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-[var(--color-surface-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)]"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default RelatedProductsCarousel;
