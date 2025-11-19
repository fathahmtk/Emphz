
import { Timestamp } from 'firebase/firestore';

export type Product = {
  id: string;
  name: string;
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
