
export enum Role {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  SALES = 'SALES',
  VIEWER = 'VIEWER',
}

export interface User {
  id: number;
  name?: string;
  email: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  order: number;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  categoryId: number;
  summary: string;
  description: string;
  tags: string[];
  specs: Record<string, string>;
  imageUrls: string[];
  pdfUrls: { title: string; url: string }[];
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
  categoryName: string;
}

export interface CaseStudy {
  id: number;
  client: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  logoUrl?: string;
  imageUrl?: string;
  createdAt: Date;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  coverUrl?: string;
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
}

export interface Enquiry {
  id: number;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
  productId?: number;
  productName?: string;
  status: 'New' | 'In Progress' | 'Closed';
  createdAt: Date;
}

export interface Quotation {
  id: number;
  enquiryId?: number;
  customer: string;
  email: string;
  validUntil?: Date;
  subtotal: number;
  tax: number;
  total: number;
  currency: string;
  status: 'Draft' | 'Sent' | 'Approved' | 'Rejected';
  items: { name: string; qty: number; unit: string; price: number }[];
  notes?: string;
  pdfUrl?: string;
  createdAt: Date;
}

export interface Download {
  id: number;
  title: string;
  category: 'Datasheet' | 'Certificate' | 'CAD' | 'Guide';
  fileUrl: string;
  views: number;
  createdAt: Date;
}

export interface Solution {
    slug: string;
    name: string;
    problem: string;
    approach: string;
    outcomes: string[];
    products: string[];
    caseStudies: string[];
}
