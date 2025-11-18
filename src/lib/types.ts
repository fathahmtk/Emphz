import { Timestamp } from 'firebase/firestore';

export type Product = {
  id: string;
  name: string;
  category: string;
  overview: string;
  specifications: {
    Material: string;
    "IP Rating": string;
    "Impact Resistance": string;
    "Operating Temperature": string;
  };
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

export type NavItem = {
  title: string;
  href: string;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  company?: string;
  inquiry: string;
  submittedAt: Timestamp | Date;
  phone?: string;
  industry?: string;
  product?: string;
  quantity?: number;
  location?: string;
};
