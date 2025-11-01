
import { useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { useProductCatalog } from './useProductCatalog';

export interface ProductDataContext {
  product: Product;
  category: ProductCategory;
}

/**
 * Custom hook to get a single product by its code from the reactive store.
 * @param productCode The code of the product to fetch.
 */
export const useProduct = (productCode: string | undefined) => {
  const catalog = useProductCatalog();

  const data = useMemo(() => {
    if (!productCode || !catalog) return null;

    for (const category of catalog) {
      const product = category.products.find(p => p.code === productCode);
      if (product) {
        return { product, category };
      }
    }
    return null;
  }, [catalog, productCode]);
  
  // No loading state, as data is derived synchronously from the store
  return { data, isLoading: false, error: null };
};
