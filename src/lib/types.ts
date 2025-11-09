
import { Timestamp } from 'firebase/firestore';

export type Product = {
  id: string;
  name: string;
  description: string;
  specifications: Record<string, string>;
  imageUrl: string;
  imageHint: string;
  category: string;
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

export type DownloadLink = {
  id: string;
  title: string;
  description: string;
  fileUrl: string; // Will be a placeholder '#'
};

export type NavItem = {
  title: string;
  href: string;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  inquiry: string;
  submittedAt: Timestamp | Date;
  category?: string;
  priority?: 'high' | 'medium' | 'low';
  notes?: string;
};
