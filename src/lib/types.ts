
import { Timestamp } from 'firebase/firestore';

export type Product = {
  id: string;
  name: string;
  category: string;
  overview: string;
  keyFeatures: string[];
  applications: string[];
  specifications: Record<string, string>;
  downloads?: Array<{ title: string; url: string; }>;
  imageUrl: string;
  imageHint: string;
  compliance?: string[];
  variants?: string[];
  cadUrl?: string;
  datasheetUrl?: string;
};

export type Project = {
  id:string;
  title: string;
  description: string;
  industry: string;
  location: string;
  imageUrl: string;
  imageHint: string;
  beforeImageUrl?: string;
  beforeImageHint?: string;
  afterImageUrl?: string;
  afterImageHint?: string;
};

export type DownloadLink = {
  id: string;
  title: string;
  description: string;
  fileUrl: string; // Will be a placeholder '#'
  category: 'Datasheet' | 'CAD' | 'Certificate' | 'Manual' | 'Case Study' | 'Other';
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
};
