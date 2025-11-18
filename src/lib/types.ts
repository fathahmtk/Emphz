
import { Timestamp } from 'firebase/firestore';

export type Product = {
  id: string;
  name: string;
  category: string;
  overview: string;
  specifications: Record<string, string>;
  imageUrl: string;
  imageHint: string;
  datasheetUrl?: string;
  applications: string[];
};

export type Project = {
  id:string;
  title: string;
  description: string;
  clientType: string;
  location: string;
  beforeImageUrl: string;
  beforeImageHint: string;
  afterImageUrl: string;
  afterImageHint: string;
};

export type TechnicalDownload = {
  id: string;
  title: string;
  description: string;
  fileUrl: string; 
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
