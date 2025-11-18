import type { Product } from './types';
import { productsSeed } from './products-data';

// Helper function to generate IDs from names
function generateId(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function getProductsWithIds(): Product[] {
    return productsSeed.map(p => ({
        ...p,
        id: generateId(p.name)
    }))
}
