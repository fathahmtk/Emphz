

import type { Product, ProjectCaseStudy, TechnicalDownload, Industry, BlogPost, BlogAuthor } from './types';
import { productsSeed } from './products-data';
import { projectsSeed } from './projects-data';
import { downloadsSeed } from './downloads-data';
import { industriesSeed } from './industries-data';
import { authorsSeed, postsSeed } from './blog-data';

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

export function getIndustriesWithIds(): Industry[] {
    return industriesSeed.map(i => ({
        ...i,
        id: generateId(i.name)
    }))
}

export function getAuthorsWithIds(): BlogAuthor[] {
    return authorsSeed.map(a => ({
        ...a,
        id: generateId(a.name)
    }))
}

export function getPostsWithIds(): Omit<BlogPost, 'id'>[] {
    return postsSeed;
}
