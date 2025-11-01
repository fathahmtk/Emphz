import { useMemo } from 'react';
import { ProductCategory } from '../types';
import { useProductCatalog } from './useProductCatalog';

export const useCategoryBySlug = (slug: string | undefined) => {
  const catalog = useProductCatalog();

  const category = useMemo(() => {
    if (!slug || !catalog) return null;
    return catalog.find(c => c.slug === slug) || null;
  }, [catalog, slug]);

  // No loading/error states needed
  return { category, isLoading: false, error: null };
};
