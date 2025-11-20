

import { Timestamp } from 'firebase/firestore';

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  overview: string;
  specifications: Record<string, string>;
  imageUrls: string[];
  imageHint?: string;
  datasheetUrl?: string;
  model3dUrl?: string;
  applications: string[];
  colors?: string[];
  sizes?: string[];
};

export type ProjectCaseStudy = {
  id:string;
  title: string;
  details: string;
  clientType: string;
  location: string;
  beforeImageUrl: string;
  afterImageUrl: string;
};

export type TechnicalDownload = {
    id: string;
    name: string;
    description: string;
    fileUrl: string;
};


export type NavItem = {
  title: string;
  href: string;
};

export type Industry = {
    id: string;
    name: string;
    description: string;
};

export type BlogAuthor = {
    id: string;
    name: string;
    avatarUrl: string;
    title: string;
}

export type BlogPost = {
    id: string;
    title: string;
    slug: string;
    authorId: string;
    author?: BlogAuthor;
    publishedAt: Timestamp;
    category: string;
    heroImageUrl: string;
    summary: string;
    content: string; // Markdown content
}

export type Inquiry = {
    inquiry: string;
    product?: string;
    quantity?: string;
    industry?: string;
    location?: string;
    [key: string]: any;
}
