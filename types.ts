
export interface Product {
  code: string;
  name: string;
  description: string;
  applications?: string[];
  useCase?: string;
  innovation?: string;
  image?: string | string[];
}

export interface ProductCategory {
  code:string;
  name: string;
  slug: string;
  tagline: string;
  image?: string;
  products: Product[];
  compliance?: string[];
  advantages?: string[];
  sharedHighlights?: string[];
  technicalSnapshot?: { parameter: string; specification: string; certification: string }[];
  materials?: string[];
  accessories?: string[];
}

export interface KeyValueProposition {
  icon: IconName;
  coreValue: string;
  description: string;
}

// FIX: Create a specific type for icon names to ensure type safety.
// This must be kept in sync with the keys of the ICONS object in constants.ts.
export type IconName = "sustainability" | "engineering" | "strength" | "customization" | "linkedin" | "twitter" | "google" | "facebook" | "instagram" | "whatsapp" | "lightweight" | "fuel" | "aerodynamic" | "durability" | "design" | "safety" | "nvh" | "assembly" | "download";

export interface BrandPillar {
  icon: IconName;
  title: string;
  description: string;
}

export interface Industry {
  name: string;
  slug: string;
  applicationExample: string;
  image: string;
  description: string;
  details: string[];
  relatedCategories: string[];
  featuredProducts: string[];
}

export interface QualityPoint {
  title: string;
  description?: string;
}

export interface CostComparison {
  factor: string;
  emphzAdvantage: string;
  competitor: string;
}

export interface CorporateDetail {
  parameter: string;
  detail: string;
}

export interface TechnicalStandard {
  property: string;
  emphzStandard: string;
  internationalCode: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogArticle {
  title: string;
  link: string;
  description: string;
  image: string;
}

export interface CertificateDownload {
  name: string;
  link: string;
}

export interface WarrantyInfoCard {
  title: string;
  content: string | string[];
  note: string;
  image: string;
}

export interface CorporatePageCard {
  title: string;
  image: string;
  content: CorporateDetail[] | CertificateDownload[];
  type: 'details' | 'downloads';
}

export interface GrpApplicationSubcategory {
  name: string;
  items: string[];
}

export interface GrpApplicationCategory {
  name: string;
  image: string;
  subcategories: GrpApplicationSubcategory[];
}

// --- Types for dedicated Automobile Page ---
export interface AutomobileSolution {
    title: string;
    description: string;
    image: string;
}

export interface AutomobileAdvantage {
    icon: IconName;
    title: string;
    description: string;
}

export interface AutomobilePageData {
    hero: {
        videoUrl: string;
        title: string;
        subtitle: string;
    };
    introduction: {
      title: string;
      content: string;
    };
    solutions: AutomobileSolution[];
    advantages: AutomobileAdvantage[];
    galleryImages: string[];
    featuredProducts: string[];
}

// --- Type for Digital Business Card Page ---
export interface DigitalBusinessCardData {
  companyName: string;
  name: string;
  title: string;
  logoUrl: string;
  websiteUrl: string;
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
  };
  socials: {
    linkedin: string;
    twitter: string;
    google: string;
    whatsapp: string;
    facebook: string;
    instagram: string;
  };
  downloads: {
    profile: string;
    catalog: string;
    brochure: string;
  };
  location: {
    address: string;
    googleMapsEmbedUrl: string;
  };
}