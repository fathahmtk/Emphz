
import { useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { useToast } from '../ToastContext';
import { useProductCatalog } from './useProductCatalog';

export interface ProductWithCategoryContext {
  product: Product;
  category: ProductCategory;
}

/**
 * Custom hook to get a reactive list of all products from the central store.
 */
export const useAllProducts = () => {
  const catalog = useProductCatalog();

  const data = useMemo(() => {
    if (!catalog) return [];
    try {
      return catalog.flatMap(category =>
        category.products.map(product => ({ product, category }))
      );
    } catch (e) {
      console.error("Error processing product catalog:", e);
      return [];
    }
  }, [catalog]);

  // The hook now returns data synchronously. isLoading is always false.
  return { data, isLoading: false, error: null };
};
