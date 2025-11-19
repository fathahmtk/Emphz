

import type { Product, ProjectCaseStudy, TechnicalDownload } from './types';
import { productsSeed } from './products-data';
import { projectsSeed } from './projects-data';
import { downloadsSeed } from './downloads-data';

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

export function getProjectsWithIds(): ProjectCaseStudy[] {
    return projectsSeed.map(p => ({
        ...p,
        id: generateId(p.title)
    }))
}

export function getDownloadsWithIds(): TechnicalDownload[] {
    return downloadsSeed.map(d => ({
        ...d,
        id: generateId(d.name)
    }))
}
