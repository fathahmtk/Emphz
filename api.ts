
import { PRODUCT_CATALOG } from './constants';
import { Product, ProductCategory } from './types';

// Simulate network delay
const API_DELAY = 300;

// --- In-memory Store ---
let catalog: ProductCategory[] = JSON.parse(JSON.stringify(PRODUCT_CATALOG)); // Deep copy to make it mutable
let listeners: (() => void)[] = [];

const emitChange = () => {
  for (let listener of listeners) {
    listener();
  }
}

// These are the functions for React's useSyncExternalStore hook
export const subscribe = (listener: () => void): () => void => {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter(l => l !== listener);
  };
};

export const getSnapshot = (): ProductCategory[] => {
  return catalog;
}

// --- API Functions ---

/**
 * Adds a new product to the catalog in memory.
 * @param product The new product data.
 * @param categoryCode The code of the category to add the product to.
 * @returns A promise that resolves when the product is added.
 */
export const addProduct = (product: Product, categoryCode: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const categoryIndex = catalog.findIndex(c => c.code === categoryCode);
            if (categoryIndex > -1) {
                // Ensure product code is unique within the category
                if (catalog[categoryIndex].products.some(p => p.code === product.code)) {
                    reject(new Error(`Product with code ${product.code} already exists in this category.`));
                    return;
                }

                const newCatalog = [...catalog];
                const newCategory = { ...newCatalog[categoryIndex] };
                newCategory.products = [...newCategory.products, product];
                newCatalog[categoryIndex] = newCategory;
                
                catalog = newCatalog; // Update the store
                emitChange(); // Notify subscribers
                resolve();
            } else {
                reject(new Error(`Category with code ${categoryCode} not found.`));
            }
        }, API_DELAY);
    });
};


/**
 * Fetches a flattened list of all products, each with its parent category.
 * @returns A promise that resolves to an array of products with their categories.
 */
export const fetchAllProducts = (): Promise<{ product: Product; category: ProductCategory }[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const allProducts = catalog.flatMap(category =>
        category.products.map(product => ({ product, category }))
      );
      resolve(allProducts);
    }, API_DELAY);
  });
};

/**
 * Fetches a single product and its parent category by the product code.
 * @param code The product code to search for.
 * @returns A promise that resolves to the product and category, or null if not found.
 */
export const fetchProductByCode = (code: string): Promise<{ product: Product; category: ProductCategory } | null> => {
  return new Promise(resolve => {
    setTimeout(() => {
      for (const category of catalog) {
        const product = category.products.find(p => p.code === code);
        if (product) {
          resolve({ product, category });
          return;
        }
      }
      resolve(null);
    }, API_DELAY);
  });
};

/**
 * Fetches a single product category by its slug.
 * @param slug The category slug.
 * @returns A promise that resolves to the category, or null if not found.
 */
export const fetchCategoryBySlug = (slug: string): Promise<ProductCategory | null> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const category = catalog.find(c => c.slug === slug);
      resolve(category || null);
    }, API_DELAY);
  });
};
