




import {
  ProductCategory,
  KeyValueProposition,
  BrandPillar,
  Industry,
  QualityPoint,
  CostComparison,
  CorporateDetail,
  TechnicalStandard,
  FAQItem,
  AutomobilePageData,
  BlogArticle,
  WarrantyInfoCard,
  CertificateDownload,
  CorporatePageCard,
  GrpApplicationCategory,
  DigitalBusinessCardData
} from './types';

// --- Global Constants ---
export const FALLBACK_LOGO_URL = 'https://www.dropbox.com/scl/fi/bh1jo6bw2oh2xquo5f6p0/Emphz-Logo-Design.png?rlkey=y56kz2aobqiypxlgnyzzrmo9m&st=zyd83amo&raw=1';


// --- Homepage Content ---
export const HERO_SECTION = {
  headline: "Ready to Build with the Future of Materials?",
  subline: "Let's discuss how EMPHZ's GRP composite solutions can bring unparalleled durability, efficiency, and sustainability to your next project.",
  cta1: "Request Your Quote Today",
  cta2: "View Product Catalog",
  backgroundImages: [
    "https://images.unsplash.com/photo-1621935541555-a0f8b8a4f8a0?q=80&w=1974&auto=format&fit=crop", // Electrical & Utilities
    "https://images.unsplash.com/photo-1508235289567-f027f91a9e13?q=80&w=2070&auto=format&fit=crop", // Renewable Energy
    "https://images.unsplash.com/photo-1551645710-065d1d8892d1?q=80&w=2070&auto=format&fit=crop", // Automobile & Transport
    "https://images.unsplash.com/photo-1610410654519-27b4618e98f7?q=80&w=2070&auto=format&fit=crop", // Marine & Offshore
    "https://images.unsplash.com/photo-1599401713374-1d84b238f8a1?q=80&w=1974&auto=format&fit=crop", // Construction & Infrastructure
  ],
};

export const KEY_VALUE_PROPOSITIONS: KeyValueProposition[] = [
  {
    icon: "durability",
    coreValue: "Corrosion-Immune Materials",
    description: "Built for endurance — EMPHZ composites remain unaffected by salt, humidity, and chemicals even in coastal and industrial zones.",
  },
  {
    icon: "sustainability",
    coreValue: "50-Year Lifecycle Advantage",
    description: "Maintenance-free operation with zero repainting, no rust, and the lowest Total Cost of Ownership in the industry.",
  },
  {
    icon: "engineering",
    coreValue: "Engineered for Precision",
    description: "Every EMPHZ product meets or exceeds IEC, UL, and BIS standards — ensuring unmatched reliability and safety.",
  },
];

export const ICONS = {
  sustainability: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
  engineering: 'M12.5 8c-2.65 0-5.18.5-7.5 1.5v9c2.32-1 4.85-1.5 7.5-1.5s5.18.5 7.5 1.5v-9c-2.32-1-4.85-1.5-7.5-1.5zm-1 9.48c-1.25.29-2.5.67-3.75 1.13V10.2c1.23-.42 2.48-.78 3.75-1.05v9.33zm5.75.13c-1.25-.46-2.5-.84-3.75-1.13V9.15c1.27.27 2.52.63 3.75 1.05v9.41zM12.5 3L22 7v10.31c0 .3-.02.6-.05.89l-1.6-1.59C20.62 16.2 21 15.7 21 15V8.5l-8.5-4L4 8.5v6.5c0 .7.38 1.2 1.05 1.61l-1.6 1.6c-.03-.29-.05-.59-.05-.89V7l9.5-4z',
  strength: 'M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.48 10 10 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z',
  customization: 'M20.5 4c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 6c1.86.5 4.37.83 6.5 1v10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7c2.13-.17 4.64-.5 6.5-1l.5-2zM12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z',
  linkedin: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  twitter: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.119 0-5.515 2.57-5.515 5.734 0 .442.05.874.146 1.284-4.576-.229-8.632-2.424-11.353-5.762-.474.813-.746 1.748-.746 2.734 0 1.983 1.01 3.733 2.538 4.752-.947-.03-1.838-.289-2.618-.724v.072c0 2.774 1.973 5.086 4.591 5.612-.48.131-.986.202-1.503.202-.37 0-.728-.036-1.076-.104.729 2.27 2.844 3.933 5.353 3.979-1.959 1.527-4.425 2.437-7.11 2.437-.462 0-.919-.027-1.368-.08.572.368 1.246.583 1.964.583 2.35 0 4.538-.773 6.388-2.189 1.85-1.417 2.924-3.383 2.924-5.617v-.272c.99-.714 1.848-1.606 2.538-2.634z',
  google: 'M21.35,11.1H12.18V13.83H18.67C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12.5C5,8.75 8.36,5.73 12.19,5.73C15.22,5.73 17.45,7.92 17.45,7.92L19.07,6.31C19.07,6.31 16.59,4 12.19,4C7.03,4 3,7.55 3,12.5C3,17.45 7.03,21 12.19,21C17.83,21 21.64,17.25 21.64,11.39C21.64,11.19 21.35,11.1 21.35,11.1Z',
  facebook: 'M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82V14.706H9.692V11.084h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z',
  instagram: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.338.935 2.126 1.233c.765.297 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.717 2.126-1.233s.935-1.338 1.233-2.126c.297-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.717-1.459-1.233-2.126S20.65.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.06-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.82-896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057.36 2.227-.413C8.415 2.18 8.797 2.16 12 2.16zm0 2.91c-2.711 0-4.921 2.21-4.921 4.921s2.21 4.921 4.921 4.921 4.921-2.21 4.921-4.921-2.21-4.921-4.921-4.921zm0 7.832c-1.601 0-2.91-1.31-2.91-2.911s1.31-2.911 2.91-2.911 2.91 1.31 2.91 2.911-1.309 2.911-2.91 2.911zm4.858-7.734c-.548 0-.991.443-.991.991s.443.991.991.991.991-.443.991-.991-.443-.991-.991-.991z',
  whatsapp: 'M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.206 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z',
  lightweight: 'M18.36,8.36C17.18,7.18,15.67,6,14,5.43V4c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v1.43C8.33,6,6.82,7.18,5.64,8.36C4.46,9.54,3.7,11.21,3.54,13H2c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h1.54c0.16,1.79,0.92,3.46,2.1,4.64c1.18,1.18,2.69,2.36,4.36,2.93V20c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-1.43c1.67-0.57,3.18-1.75,4.36-2.93c1.18-1.18,1.94-2.85,2.1-4.64H22c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h-1.54C20.3,11.21,19.54,9.54,18.36,8.36z M12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,16,12,16z',
  fuel: 'M16.9,8.58l-1.42-1.42l-2.04,2.05l-2.04-2.05l-1.42,1.42L12,10.61V14c0,1.1,0.9,2,2,2h2v2H8v-2h2v-3.39L12,8.61l1.9-1.91l1.42,1.42L13.41,10L12,11.41V16h4v-2c1.1,0,2-0.9,2-2v-2.42L16.9,8.58z M15,4h-1V3c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v1h-1c-1.1,0-2,0.9-2,2v2.17c0,0.53,0.21,1.04,0.59,1.41l2.41,2.41H11v1.41l-2.71,2.71C7.53,18.47,7,19.2,7,20v1c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1v-1c0-0.8-0.53-1.53-1.29-1.88L13,15.41V14h1.59l2.41-2.41c0.38-0.38,0.59-0.88,0.59-1.41V6C17,4.9,16.1,4,15,4z',
  aerodynamic: 'M21.9,12.5c-0.2-0.7-0.6-1.4-1.2-1.8L13.8,6c-0.4-0.4-1-0.4-1.4,0L7.6,10.8c-1,1-1.6,2.3-1.6,3.7c0,3,2.5,5.5,5.5,5.5c1.4,0,2.7-0.5,3.7-1.6L20,13.6c0.4-0.4,0.4-1,0-1.4l-1.4-1.4c-0.4-0.4-1-0.4-1.4,0L13,15.1c-0.8,0.8-2.1,0.8-2.8,0c-0.8-0.8-0.8-2.1,0-2.8l4.2-4.2l5.4,4.2c0.2,0.2,0.5,0.2,0.7,0s0.2-0.5,0-0.7l-5.8-4.5c-0.2-0.2-0.5-0.2-0.7,0l-5.8,4.5c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l5.4-4.2l-4.2,4.2c-0.8,0.8-0.8-2.1,0,2.8c0.8,0.8,2.1,0.8,2.8,0L17,10.9l2.1,2.1c0.2,0.2,0.5,0.2,0.7,0s0.2-0.5,0-0.7l-2.5-2.5c-0.2-0.2-0.5-0.2-0.7,0l-2.5,2.5c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l2.1-2.1l-2.1,2.1c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l2.1-2.1c-0.2-0.2-0.5-0.2-0.7,0l-2.1,2.1c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l2.1-2.1l-2.1,2.1c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l2.1-2.1',
  durability: 'M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M10,17l-4-4l1.41-1.41L10,14.17l6.59-6.59L18,9L10,17z',
  design: 'M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9c0.83,0,1.5-0.67,1.5-1.5c0-0.39-0.15-0.74-0.39-1.01c-0.23-0.26-0.38-0.61-0.38-0.99c0-0.83,0.67-1.5,1.5-1.5H16c2.76,0,5-2.24,5-5c0-4.42-4.03-8-9-8V3z M6.5,12C5.67,12,5,11.33,5,10.5S5.67,9,6.5,9S8,9.67,8,10.5S7.33,12,6.5,12z M9.5,8C8.67,8,8,7.33,8,6.5S8.67,5,9.5,5S11,5.67,11,6.5S10.33,8,9.5,8z M14.5,8C13.67,8,13,7.33,13,6.5S13.67,5,14.5,5S16,5.67,16,6.5S15.33,8,14.5,8z M17.5,12c-0.83,0-1.5-0.67-1.5-1.5S16.67,9,17.5,9S19,9.67,19,10.5S18.33,12,17.5,12z',
  safety: 'M13,14h-2v-2h2V14z M13,10h-2V4h2V10z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z',
  nvh: 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z',
  assembly: 'M11 17h2v-1.17l6.78-6.78-7.95-7.95L4.05 8.88 2.64 7.46 4.05 6.05l1.41 1.41L11 1.83l9.17 9.17-6.78 6.78V17zm-7-2h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2z',
  download: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
};


export const BRAND_PILLARS: BrandPillar[] = [
  {
    icon: "sustainability",
    title: "Sustainability by Design",
    description: "100% recyclable GRP composites",
  },
  {
    icon: "engineering",
    title: "Smart Engineering",
    description: "Designed and validated in-house with precision tooling",
  },
  {
    icon: "strength",
    title: "Lightweight Strength",
    description: "75% lighter than steel; stronger than aluminum",
  },
  {
    icon: "customization",
    title: "Customization",
    description: "From small enclosures to modular villas, tailored for every industry",
  },
];

// --- Product Catalog Data ---
export const PRODUCT_CATALOG: ProductCategory[] = [
  {
    code: 'CAT1',
    name: 'GRP ELECTRICAL & UTILITY ENCLOSURES',
    slug: 'grp-enclosures',
    tagline: 'Precision protection engineered for reliability and safety.',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360aa9a23?q=80&w=2070&auto=format&fit=crop',
    products: [
      {
        code: 'E-101',
        name: 'GRP Single-Door Enclosure',
        description: 'Compact IP66 cabinet for small control panels, CCTV power boxes, and sensors.',
        image: [
          'https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1617789255069-eda08a55e4e8?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1581093582415-998f8287894a?q=80&w=1974&auto=format&fit=crop'
        ],
      },
      {
        code: 'E-102',
        name: 'GRP Double-Door Enclosure',
        description: 'Medium-size cabinet for MCCs, switchgear assemblies, and distribution boards.',
        image: [
            'https://images.unsplash.com/photo-1621935541555-a0f8b8a4f8a0?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1581093450021-4a7360aa9a23?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop',
        ],
      },
      {
        code: 'E-103',
        name: 'GRP Feeder Pillar Cabinet',
        description: 'Multi-door outdoor cabinet for power distribution and street-lighting networks.',
        image: 'https://images.unsplash.com/photo-1581093582415-998f8287894a?q=80&w=1974&auto=format&fit=crop',
      },
      {
        code: 'E-104',
        name: 'GRP Weatherproof Panel Board',
        description: 'Heavy-duty enclosure for marine/coastal and desert environments.',
        image: 'https://images.unsplash.com/photo-1528153414234-098d3a789886?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'E-105',
        name: 'GRP Meter Box / Junction Box',
        description: 'Utility meter housings and telecom termination boxes.',
        image: [
          'https://images.unsplash.com/photo-1617789255069-eda08a55e4e8?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1631562725287-73a0a382e73a?q=80&w=1974&auto=format&fit=crop',
        ],
      },
      {
        code: 'E-106',
        name: 'GRP Transformer Kiosk / Ring Main Unit (RMU) Housing',
        description: 'Outdoor protection for RMU, isolator, and LV distribution gear.',
        image: 'https://images.unsplash.com/photo-1610410654519-27b4618e98f7?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'E-107',
        name: 'GRP Instrument / Control Enclosure',
        description: 'Custom panel housings for automation and PLC systems.',
        image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'E-108',
        name: 'GRP Battery / UPS Cabinet',
        description: 'Ventilated enclosures for energy storage and solar backup systems.',
        image: 'https://images.unsplash.com/photo-1593902381369-e79a831f31f9?q=80&w=1974&auto=format&fit=crop',
      },
      {
        code: 'E-109',
        name: 'GRP Cable Management Box',
        description: 'Insulated cabinet for junctions and feeder joints in industrial environments.',
        image: 'https://images.unsplash.com/photo-1631562725287-73a0a382e73a?q=80&w=1974&auto=format&fit=crop',
      },
      {
        code: 'E-110',
        name: 'GRP Street-Light Control Panel',
        description: 'Smart controller housing with timer and IoT integration options.',
        image: 'https://images.unsplash.com/photo-1599249336159-4a4a78a594041?q=80&w=1974&auto=format&fit=crop',
      },
    ],
    sharedHighlights: [
      'IP66 / IK10 rated',
      'Fire retardant UL 94 V-0',
      'SS 316 hardware, anti-condensation design',
      'Double insulation, UV-stabilized gel coat',
      'Options: transparent door, window kit, fan filters, mounting rails',
    ],
    technicalSnapshot: [
      { parameter: "Ingress Protection", specification: "IP66", certification: "IEC 60529" },
      { parameter: "Impact Resistance", specification: "IK10", certification: "IEC 62262" },
      { parameter: "Fire Retardancy", specification: "UL 94 V-0", certification: "UL / BS 476" },
      { parameter: "UV Resistance", specification: "> 10 Years", certification: "ISO 4892" },
      { parameter: "Mechanical Strength", specification: "150–230 MPa", certification: "ASTM D790" },
      { parameter: "Electrical Insulation", specification: "15 kV/mm", certification: "ASTM D149" },
      { parameter: "Material Density", specification: "1.8 g/cm³", certification: "ASTM D792" },
    ],
    materials: ["Sheet Molding Compound (SMC)", "Glass Reinforced Polyester (GRP)"],
    accessories: ["SS 316 Hardware", "Mounting Rails", "Ventilation Louvers", "Transparent Doors", "Gland Plates"],
  },
  {
    code: 'CAT2',
    name: 'GRP MODULAR & PORTABLE STRUCTURES',
    slug: 'grp-modular-structures',
    tagline: 'Rapid-deployment living, work, and service spaces.',
    image: 'https://images.unsplash.com/photo-1586221235732-475246751c14?q=80&w=1935&auto=format&fit=crop',
    products: [
      {
        code: 'M-201',
        name: 'GRP Security / Guard Cabin',
        useCase: 'Prefab sentry units for factories, offices, and gated communities.',
        description: 'Prefab sentry units for factories, offices, and gated communities.',
        image: [
          'https://images.unsplash.com/photo-1589112447279-3c35b89a8523?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1583593223533-0c4c4b92b0c3?q=80&w=1935&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1520092352425-9699925a2b33?q=80&w=2070&auto=format&fit=crop'
        ],
      },
      {
        code: 'M-202',
        name: 'GRP Information / Ticket Kiosk',
        useCase: 'Public information booths, toll and ticket counters.',
        description: 'Public information booths, toll and ticket counters.',
        image: [
          'https://images.unsplash.com/photo-1555465052-1b50d5c83f98?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1610464222044-2453f3e18055?q=80&w=1974&auto=format&fit=crop',
        ],
      },
      {
        code: 'M-203',
        name: 'GRP Portable Toilets & Restrooms',
        useCase: 'Hygienic sanitation cabins with plumbing and vent systems.',
        description: 'Hygienic sanitation cabins with plumbing and vent systems.',
        image: 'https://images.unsplash.com/photo-1560706243-5dadd168c485?q=80&w=1964&auto=format&fit=crop',
      },
      {
        code: 'M-204',
        name: 'GRP Executive Office Cabin',
        useCase: 'Prefab cabins with A/C, lighting, and internal partitions.',
        description: 'Prefab cabins with A/C, lighting, and internal partitions.',
        image: 'https://images.unsplash.com/photo-1583593223533-0c4c4b92b0c3?q=80&w=1935&auto=format&fit=crop',
      },
      {
        code: 'M-205',
        name: 'GRP Modular Villa / Worker Housing',
        useCase: 'Fast-install housing, insulated, termite-proof.',
        description: 'Fast-install housing, insulated, termite-proof.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'M-206',
        name: 'GRP ATM / Telecom Booth',
        useCase: 'Secure standalone kiosk for ATM or telecom nodes.',
        description: 'Secure standalone kiosk for ATM or telecom nodes.',
        image: 'https://images.unsplash.com/photo-1610464222044-2453f3e18055?q=80&w=1974&auto=format&fit=crop',
      },
      {
        code: 'M-207',
        name: 'GRP Portable Kitchen / Canteen Unit',
        useCase: 'Food-safe, washable interior cabins for remote camps.',
        description: 'Food-safe, washable interior cabins for remote camps.',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1935&auto=format&fit=crop',
      },
      {
        code: 'M-208',
        name: 'GRP Smart Charging Pod / EV Booth',
        useCase: 'Weatherproof composite charging station kiosks.',
        description: 'Weatherproof composite charging station kiosks.',
        image: 'https://images.unsplash.com/photo-1616358352033-5c8e4a1b0b55?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'M-209',
        name: 'GRP Toilet-Shower Combo Unit',
        useCase: 'For labour sites, events, and public areas.',
        description: 'For labour sites, events, and public areas.',
        image: 'https://images.unsplash.com/photo-1616047006789-b7af545e0735?q=80&w=1974&auto=format&fit=crop',
      },
      {
        code: 'M-210',
        name: 'GRP Site Office Cabin',
        useCase: 'Fully furnished project management cabin with flooring and electrical fit-out.',
        description: 'Fully furnished project management cabin with flooring and electrical fit-out.',
        image: 'https://images.unsplash.com/photo-1520092352425-9699925a2b33?q=80&w=2070&auto=format&fit=crop',
      },
    ],
    compliance: [
      'IS 875 (Loads)',
      'IS 1893 (Seismic)',
      'IS 14856 (Doors)',
      'Wind-resistant, earthquake-safe, thermally insulated panels',
    ],
    technicalSnapshot: [
      { parameter: "Structural Integrity", specification: "Wind/Seismic Proof", certification: "IS 875 / 1893" },
      { parameter: "Thermal Insulation", specification: "<0.5 W/m²K", certification: "ASTM C518" },
      { parameter: "Fire Safety", specification: "Self-Extinguishing", certification: "BS 476 Part 7" },
      { parameter: "Sound Insulation", specification: "25-30 dB", certification: "ISO 140" },
      { parameter: "Water Absorption", specification: "<0.1%", certification: "ASTM D570" },
      { parameter: "Termite Resistance", specification: "100% Proof", certification: "IS 4020" },
    ],
    materials: ["GRP Composite Panels", "PUF/EPS Insulation Core", "Steel Sub-Frame"],
    accessories: ["Insulated Doors/Windows", "Electrical Wiring", "Plumbing Fixtures", "Flooring", "A/C Units"],
  },
  {
    code: 'CAT3',
    name: 'GRP UTILITY & INFRASTRUCTURE PRODUCTS',
    slug: 'grp-utility-infrastructure',
    tagline: 'Composite solutions for water, waste, and urban systems.',
    image: 'https://images.unsplash.com/photo-1520092352425-9699925a2b33?q=80&w=2070&auto=format&fit=crop',
    products: [
      {
        code: 'U-301',
        name: 'GRP Water Storage Tanks',
        description: 'Cylindrical or rectangular, 500 L–50 000 L, UV-resistant.',
        image: [
          'https://images.unsplash.com/photo-1596700661874-3292b3820252?q=80&w=1974&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1597545415392-28c0361a5b88?q=80&w=2070&auto=format&fit=crop',
        ],
      },
      {
        code: 'U-302',
        name: 'GRP Chemical Storage Tanks',
        description: 'For acids, effluents, and industrial liquids; FR-grade resin.',
        image: 'https://images.unsplash.com/photo-1604008133345-84b39675278c?q=80&w=1964&auto=format&fit=crop',
      },
      {
        code: 'U-303',
        name: 'GRP Septic Tanks',
        description: 'One-piece molded, leak-proof, maintenance-free.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'U-304',
        name: 'GRP Grease Traps / Interceptors',
        description: 'For kitchens, restaurants, and processing plants.',
        image: 'https://images.unsplash.com/photo-1615966708347-8c3af8575791?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'U-305',
        name: 'GRP Manholes & Chambers',
        description: 'Load class A15–D400, slip-resistant, non-sparking.',
        image: [
          'https://images.unsplash.com/photo-1619451421623-93cb337d10d7?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1599401713374-1d84b238f8a1?q=80&w=1974&auto=format&fit=crop',
        ],
      },
      {
        code: 'U-306',
        name: 'GRP Drainage Covers & Gratings',
        description: 'Anti-corrosive gratings for municipal networks.',
        image: 'https://images.unsplash.com/photo-1599401713374-1d84b238f8a1?q=80&w=1974&auto=format&fit=crop',
      },
      {
        code: 'U-307',
        name: 'GRP Cable Trays & Trenches',
        description: 'Electrically insulating trays for power/data cabling.',
        image: 'https://images.unsplash.com/photo-1631562725287-73a0a382e73a?q=80&w=1974&auto=format&fit=crop',
      },
      {
        code: 'U-308',
        name: 'GRP Transformer Foundation Bases',
        description: 'Corrosion-proof base platforms for pad-mounted equipment.',
        image: 'https://images.unsplash.com/photo-1621935541555-a0f8b8a4f8a0?q=80&w=1974&auto=format&fit=crop',
      },
      {
        code: 'U-309',
        name: 'GRP Rainwater Harvest Modules',
        description: 'Modular underground tanks for eco-projects.',
        image: 'https://images.unsplash.com/photo-1597545415392-28c0361a5b88?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'U-310',
        name: 'GRP Chemical Dosing & Pump Cabinets',
        description: 'Compact housings for metering pumps and chemical handling.',
        image: 'https://images.unsplash.com/photo-1604008133345-84b39675278c?q=80&w=1964&auto=format&fit=crop',
      },
    ],
    technicalSnapshot: [
      { parameter: "Load Bearing", specification: "A15 to D400", certification: "BS EN 124" },
      { parameter: "Compressive Strength", specification: ">120 MPa", certification: "ASTM D695" },
      { parameter: "Water Absorption", specification: "<0.1%", certification: "ASTM D570" },
      { parameter: "Chemical Resistance", specification: "Acids/Alkalis", certification: "ASTM D543" },
      { parameter: "Fire Resistance", specification: "Self-Extinguishing", certification: "BS 476" },
    ],
    materials: ["Isophthalic/Vinylester Resins", "Woven Roving Glass Fiber"],
    accessories: ["Lifting Hooks", "SS Fasteners", "Sealing Gaskets", "Vents"],
  },
  {
    code: 'CAT4',
    name: 'GRP INDUSTRIAL COMPONENTS & CUSTOM FABRICATION',
    slug: 'grp-industrial-components',
    tagline: 'Tailor-made composites for specialized industries.',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop',
    products: [
      {
        code: 'C-401',
        name: 'GRP Custom Molded Parts',
        applications: ['Telecom', 'rail', 'defense', 'automotive'],
        description: 'Custom molded parts for applications in telecom, rail, defense, and automotive industries.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'C-402',
        name: 'GRP Control Panel Frames & Bases',
        description: 'Skid mounts and non-conductive frames.',
        image: 'https://images.unsplash.com/photo-1581093582415-998f8287894a?q=80&w=1974&auto=format&fit=crop',
      },
      {
        code: 'C-403',
        name: 'GRP Acoustic / Fire-Shield Panels',
        description: 'Sound-attenuating and FR enclosures.',
        image: 'https://images.unsplash.com/photo-1528994488344-b4a11019d187?q=80&w=1974&auto=format&fit=crop',
      },
      {
        code: 'C-404',
        name: 'GRP Battery Racks & Shelves',
        description: 'Lightweight, corrosion-free storage frames.',
        image: 'https://images.unsplash.com/photo-1593902381369-e79a831f31f9?q=80&w=1974&auto=format&fit=crop',
      },
      {
        code: 'C-405',
        name: 'GRP Instrument Housings',
        description: 'Weatherproof protection for sensors.',
        image: 'https://images.unsplash.com/photo-1580983215904-ba4d3d5a4972?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'C-406',
        name: 'GRP Wind Turbine Nacelle Covers',
        description: 'Renewable-energy composite shells.',
        image: 'https://images.unsplash.com/photo-1622379329707-372a8f3a3c2b?q=80&w=1932&auto=format&fit=crop',
      },
      {
        code: 'C-407',
        name: 'GRP HVAC Ducts & Covers',
        description: 'Non-metallic, corrosion-resistant ducts.',
        image: 'https://images.unsplash.com/photo-1617789255069-eda08a55e4e8?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'C-408',
        name: 'GRP Motor Canopies & Pump Housings',
        description: 'Mechanical protection with ventilation.',
        image: 'https://images.unsplash.com/photo-1563273936-39726b88f344?q=80&w=1974&auto=format&fit=crop',
      },
      {
        code: 'C-409',
        name: 'GRP Solar Equipment Cabinets',
        description: 'UV-stable composite enclosures for PV systems.',
        image: 'https://images.unsplash.com/photo-1508235289567-f027f91a9e13?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'C-410',
        name: 'GRP Busbar / Switchgear Barriers',
        description: 'Insulated dielectric partitions for LV panels.',
        image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop',
      },
    ],
    technicalSnapshot: [
      { parameter: "Tensile Strength", specification: "80-150 MPa", certification: "ASTM D638" },
      { parameter: "Flexural Strength", specification: "150-230 MPa", certification: "ASTM D790" },
      { parameter: "Dielectric Strength", specification: "15 kV/mm", certification: "ASTM D149" },
      { parameter: "Max Temperature", specification: "150-180 °C", certification: "ASTM D648" },
      { parameter: "Manufacturing Process", specification: "SMC/BMC, RTM, Hand Lay-up", certification: "" },
    ],
    materials: ["Polyester/Epoxy Resin", "E-Glass/Carbon Fiber", "Gelcoat Finish"],
    accessories: ["Metal Inserts", "Custom Mounts", "RF-Transparent Windows"],
  },
  {
    code: 'CAT5',
    name: 'GRP MARINE, OFFSHORE & ENERGY SOLUTIONS',
    slug: 'grp-marine-offshore',
    tagline: 'Resistant to salt, UV, and extreme climates.',
    image: 'https://images.unsplash.com/photo-1565538332159-07131a982998?q=80&w=2070&auto=format&fit=crop',
    products: [
      {
        code: 'O-501',
        name: 'GRP Offshore Electrical Enclosure',
        useCase: 'Marine platforms, desalination plants.',
        description: 'Electrical enclosures designed for marine platforms and desalination plants.',
        image: 'https://images.unsplash.com/photo-1610410654519-27b4618e98f7?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'O-502',
        name: 'GRP Navigation Light Housings',
        useCase: 'Saltwater-resistant protective boxes.',
        description: 'Saltwater-resistant protective housings for navigation lights.',
        image: 'https://images.unsplash.com/photo-1552534522-88b97f2230a4?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'O-503',
        name: 'GRP Battery Compartment for Vessels',
        useCase: 'Anti-corrosive, lightweight battery storage.',
        description: 'Anti-corrosive, lightweight battery storage compartments for vessels.',
        image: 'https://images.unsplash.com/photo-1528153414234-098d3a789886?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'O-504',
        name: 'GRP Solar Panel Mounting Structures',
        useCase: 'Composite frames for coastal solar arrays.',
        description: 'Composite mounting frames specifically for coastal solar arrays.',
        image: 'https://images.unsplash.com/photo-1625233966590-a71f0a256138?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'O-505',
        name: 'GRP Dock / Jetty Control Cabinets',
        useCase: 'Water-resistant junction cabinets.',
        description: 'Water-resistant junction cabinets for dock and jetty control systems.',
        image: 'https://images.unsplash.com/photo-1518083986314-b4a11019d1f7?q=80&w=2070&auto=format&fit=crop',
      },
    ],
    technicalSnapshot: [
      { parameter: "Ingress Protection", specification: "IP67", certification: "IEC 60529" },
      { parameter: "Salt Spray Test", specification: ">1000 Hours", certification: "ASTM B117" },
      { parameter: "UV Resistance", specification: "Conforms", certification: "ISO 4892" },
      { parameter: "Fire Rating", specification: "UL 94 V-0", certification: "" },
      { parameter: "Impact Strength", specification: "IK10", certification: "IEC 62262" },
    ],
    materials: ["Fire Retardant Resin", "UV-Stabilized Gelcoat", "SS 316 Hardware"],
    accessories: ["Marine-Grade Hinges", "Breather Drains", "EMI/RFI Shielding"],
  },
  {
    code: 'CAT6',
    name: 'GRP SUSTAINABLE & SMART SOLUTIONS',
    slug: 'grp-smart-solutions',
    tagline: 'Innovating toward circular and intelligent infrastructure.',
    image: 'https://images.unsplash.com/photo-1533423985336-23b0a2f489c8?q=80&w=2070&auto=format&fit=crop',
    products: [
      {
        code: 'S-601',
        name: 'GRP Smart IoT Kiosk',
        innovation: 'Built-in display, solar charging, and data sensors.',
        description: 'An innovative kiosk with built-in display, solar charging, and data sensors for smart applications.',
        image: 'https://images.unsplash.com/photo-1555465052-1b50d5c83f98?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'S-602',
        name: 'GRP Recycling Collection Booth',
        innovation: 'Modular waste segregation pods.',
        description: 'Modular pods designed for efficient waste segregation and collection.',
        image: 'https://images.unsplash.com/photo-1599879208340-0b4a159e4369?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'S-603',
        name: 'GRP EV Charging Station Shelter',
        innovation: 'Fire-safe composite structure for electric vehicle hubs.',
        description: 'A fire-safe composite shelter solution for electric vehicle charging stations.',
        image: 'https://images.unsplash.com/photo-1616358352033-5c8e4a1b0b55?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'S-604',
        name: 'GRP Solar Inverter Enclosure (Hybrid)',
        innovation: 'Passive-cooled cabinet with integrated monitoring.',
        description: 'A passive-cooled cabinet for hybrid solar inverters with integrated monitoring capabilities.',
        image: 'https://images.unsplash.com/photo-1625233966590-a71f0a256138?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'S-605',
        name: 'GRP Telecom Shelter Pod',
        innovation: 'Climate-controlled composite pods for 5G base stations.',
        description: 'Climate-controlled composite pods providing robust shelter for 5G base stations.',
        image: 'https://images.unsplash.com/photo-1611033149488-82736f1e8c74?q=80&w=1954&auto=format&fit=crop',
      },
    ],
    technicalSnapshot: [
      { parameter: "IoT Integration", specification: "Sensor/Display Mounts", certification: "" },
      { parameter: "Solar Compatibility", specification: "Integrated Solar Panel Frames", certification: "" },
      { parameter: "Recyclability", specification: "100%", certification: "" },
      { parameter: "Design Life", specification: "50+ Years", certification: "" },
      { parameter: "Thermal Management", specification: "Passive Cooling Vents", certification: "" },
    ],
    materials: ["Bio-Resins (on request)", "Recycled Fiber Core", "Low-VOC Gelcoat"],
    accessories: ["Solar Charge Controllers", "IoT Sensors", "Touchscreen Displays", "LED Lighting"],
  },
  {
    code: 'CAT7',
    name: 'GRP Transport & Automotive Components',
    slug: 'grp-transport-automotive',
    tagline: 'Lightweight, durable, and aerodynamic composite bodies for modern transport.',
    image: 'https://images.unsplash.com/photo-1625057124330-5d2b679a771b?q=80&w=2070&auto=format&fit=crop',
    products: [
      {
        code: 'A-701',
        name: 'GRP Bus Body Panels & Front Fascia',
        description: 'Complete GRP panel kits, roofs, and aerodynamic front fascias for city buses and coaches, offering significant weight reduction and fuel efficiency.',
        image: [
          'https://images.unsplash.com/photo-1570125909232-eb263c186922?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1559234994-0193b2a2a7f5?q=80&w=2070&auto=format&fit=crop'
        ],
      },
      {
        code: 'A-702',
        name: 'GRP Auto-Rickshaw Body & Canopy',
        description: 'Rust-proof, lightweight bodies and canopies for three-wheelers, enhancing durability, safety, and passenger comfort.',
        image: 'https://images.unsplash.com/photo-1611387723482-a3350a3c267b?q=80&w=1974&auto=format&fit=crop',
      },
      {
        code: 'A-703',
        name: 'GRP Truck & Van Aerodynamic Kits',
        description: 'Custom-molded fairings, spoilers, and side skirts to reduce drag and improve fuel economy for commercial vehicles.',
        image: 'https://images.unsplash.com/photo-1590664919149-a3b46377363c?q=80&w=1974&auto=format&fit=crop',
      },
    ],
  },
];


// --- START OF MOCKED/RECONSTRUCTED DATA ---
// FIX: Updated SOCIAL_LINKS to match the type required by DigitalBusinessCardData.socials.
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/example',
  twitter: 'https://twitter.com/example',
  facebook: 'https://www.facebook.com/example',
  instagram: 'https://www.instagram.com/example',
  google: 'https://g.page/example',
  whatsapp: `https://wa.me/918648881888`,
};

export const INDUSTRIES: Industry[] = [
  {
    name: 'Electrical & Utilities',
    slug: 'electrical-utilities',
    applicationExample: 'Weatherproof Enclosures, Transformer Kiosks',
    image: 'https://images.unsplash.com/photo-1621935541555-a0f8b8a4f8a0?q=80&w=1974&auto=format&fit=crop',
    description: 'Delivering robust, non-corrosive, and maintenance-free GRP enclosures for the power transmission and distribution sector.',
    details: [
      "IP66 rated enclosures ensure complete protection against dust and water ingress.",
      "High dielectric strength prevents electrical hazards, ensuring operator safety.",
      "UV-stabilized materials guarantee a 50-year service life even in harsh outdoor conditions.",
      "Lightweight construction reduces installation time and structural load requirements."
    ],
    relatedCategories: ['CAT1', 'CAT3', 'CAT5'],
    featuredProducts: ['E-101', 'E-103', 'E-106', 'U-307'],
  },
  {
    name: 'Automobile & Transport',
    slug: 'automobile-transport',
    applicationExample: 'Bus Body Panels, Aerodynamic Kits',
    image: 'https://images.unsplash.com/photo-1551645710-065d1d8892d1?q=80&w=2070&auto=format&fit=crop',
    description: 'Manufacturing lightweight, durable, and aerodynamic composite components that enhance fuel efficiency and vehicle longevity.',
    details: [
      "Significant weight reduction compared to steel, improving fuel economy.",
      "Superior design flexibility allows for complex, aerodynamic shapes.",
      "Excellent NVH properties for a quieter, more comfortable ride.",
      "Corrosion-proof bodies eliminate rust and reduce lifetime maintenance.",
    ],
    relatedCategories: ['CAT7', 'CAT4'],
    featuredProducts: ['A-701', 'A-702', 'A-703'],
  },
  {
    name: 'Renewable Energy',
    slug: 'renewable-energy',
    applicationExample: 'Solar Inverter Enclosures, Wind Turbine Nacelles',
    image: 'https://images.unsplash.com/photo-1508235289567-f027f91a9e13?q=80&w=2070&auto=format&fit=crop',
    description: 'Providing long-lasting, weather-resistant composite solutions for solar, wind, and energy storage projects.',
    details: [
        "UV and corrosion-resistant enclosures protect sensitive solar and wind components.",
        "Custom-molded nacelle covers for wind turbines.",
        "Lightweight structures for easy installation in remote locations.",
        "Thermally insulated cabinets for optimal battery performance in energy storage systems."
    ],
    relatedCategories: ['CAT1', 'CAT6', 'CAT4'],
    featuredProducts: ['C-406', 'S-604', 'E-108'],
  },
  {
    name: 'Marine & Offshore',
    slug: 'marine-offshore',
    applicationExample: 'Offshore Electrical Enclosures, Dock Cabinets',
    image: 'https://images.unsplash.com/photo-1610410654519-27b4618e98f7?q=80&w=2070&auto=format&fit=crop',
    description: 'Engineering IP67-rated GRP solutions that withstand the extreme corrosive effects of saltwater and marine environments.',
    details: [
        "Certified for over 1000 hours of salt spray tests (ASTM B117).",
        "Completely immune to rust and galvanic corrosion.",
        "Lightweight materials are ideal for vessel and platform installations.",
        "Fire-retardant resins for enhanced safety in critical applications."
    ],
    relatedCategories: ['CAT5', 'CAT1', 'CAT3'],
    featuredProducts: ['O-501', 'O-503', 'O-505'],
  },
  {
    name: 'Construction & Infrastructure',
    slug: 'construction-infrastructure',
    applicationExample: 'Modular Cabins, Manhole Covers, Water Tanks',
    image: 'https://images.unsplash.com/photo-1599401713374-1d84b238f8a1?q=80&w=1974&auto=format&fit=crop',
    description: 'Supplying rapid-deployment modular structures and durable utility products for modern construction and urban development.',
    details: [
        "Prefabricated cabins and toilets reduce on-site construction time by up to 80%.",
        "High-strength manhole covers offer a lightweight, theft-proof alternative to cast iron.",
        "Hygienic and leak-proof water and septic tanks with a 50-year design life.",
        "Termite-proof and maintenance-free building materials."
    ],
    relatedCategories: ['CAT2', 'CAT3'],
    featuredProducts: ['M-201', 'M-203', 'U-301', 'U-305'],
  },
  {
    name: 'Telecom & IoT',
    slug: 'telecom-iot',
    applicationExample: '5G Shelters, Smart City Kiosks, Antenna Radomes',
    image: 'https://images.unsplash.com/photo-1611033149488-82736f1e8c74?q=80&w=1954&auto=format&fit=crop',
    description: 'Developing RF-transparent and environmentally protected enclosures for the next generation of communication technology.',
    details: [
        "Materials offer excellent radio frequency transparency for optimal signal performance.",
        "Weatherproof enclosures protect sensitive electronics from heat, cold, and moisture.",
        "Modular smart kiosks for public information and IoT sensor deployment.",
        "Anti-static properties safeguard against electrostatic discharge."
    ],
    relatedCategories: ['CAT6', 'CAT1', 'CAT4'],
    featuredProducts: ['S-605', 'S-601', 'E-105'],
  },
];

export const QUALITY_FRAMEWORK: QualityPoint[] = [
  { title: 'ISO 9001:2015 Certified', description: ': Rigorous quality management for consistent product excellence.' },
  { title: 'In-House Material Testing', description: ': Tensile, flexural, and impact strength validation for every batch.' },
  { title: 'Automated SMC Production', description: ': Precision-controlled processes for uniform material quality.' },
  { title: 'Digital Prototyping & FEA', description: ': Simulating real-world stress to optimize design before manufacturing.' },
];

export const PROCESS_PHILOSOPHY: string = 'Our process integrates smart engineering with precision manufacturing. From digital design and finite element analysis (FEA) to automated SMC production and rigorous in-house testing, we control every variable to ensure our GRP composites deliver on their promise of a 50-year lifecycle advantage.';

export const FACTORY_IMAGES: string[] = [
  'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581092921443-c0d13c1265b3?q=80&w=2070&auto=format&fit=crop',
];

export const CORPORATE_PAGE_CARDS: CorporatePageCard[] = [
  {
    title: "Corporate Information",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop",
    type: 'details',
    content: [
      { parameter: "Legal Name", detail: "EMPHZ Private Limited" },
      { parameter: "Year of Incorporation", detail: "2010" },
      { parameter: "Primary Business", detail: "Manufacturing of Advanced GRP Composite Products" },
      { parameter: "Global Reach", detail: "Serving clients in over 15 countries across Asia, Africa, and the Middle East" },
    ]
  },
  {
    title: "Certifications & Compliance",
    image: "https://images.unsplash.com/photo-1581092921443-c0d13c1265b3?q=80&w=2070&auto=format&fit=crop",
    type: 'downloads',
    content: [
      { name: "Download ISO 9001:2015 Certificate", link: "#" },
      { name: "Download UL Certification Summary", link: "#" },
      { name: "Download Corporate Social Responsibility Policy", link: "#" },
    ]
  }
];

export const WARRANTY_INFO: WarrantyInfoCard[] = [
  {
    title: "Standard Product Warranty",
    content: [
      "2-year comprehensive warranty on all standard catalog products.",
      "Covers manufacturing defects and material integrity.",
      "Ensures performance under specified operating conditions."
    ],
    note: "Standard warranty applies to products installed and used as per EMPHZ guidelines. See full terms for details.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c28e7485?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Extended Project Warranty",
    content: "For large-scale infrastructure and B2B projects, we offer tailored extended warranties up to 10 years, providing long-term assurance and partnership.",
    note: "Extended warranties are project-specific and subject to a separate service level agreement (SLA).",
    image: "https://images.unsplash.com/photo-1556761175-b413da4b2566?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Service & Support",
    content: "Our dedicated support team is available for technical consultations, installation guidance, and warranty claims, ensuring a seamless experience.",
    note: "Contact our support channels for immediate assistance with any product-related queries.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    title: "The TCO Advantage: Why GRP Beats Steel in the Long Run",
    link: "#",
    description: "An in-depth analysis of the total cost of ownership, comparing GRP's zero-maintenance lifecycle with the hidden costs of traditional materials.",
    image: "https://images.unsplash.com/photo-1664574653716-157d333a8869?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "GRP Composites: The Unsung Hero of EV Charging Infrastructure",
    link: "#",
    description: "Discover why GRP is the ideal material for EV charging stations, offering safety, durability, and smart design possibilities.",
    image: "https://images.unsplash.com/photo-1616358352033-5c8e4a1b0b55?q=80&w=2070&auto=format&fit=crop"
  },
];

export const KNOWLEDGE_RESOURCES: CertificateDownload[] = [
    { name: 'Comprehensive Guide to GRP Applications', link: '/knowledge/grp-applications' },
    { name: 'Technical Deep-Dive: GRP Enclosures', link: '/knowledge/grp-single-door-enclosure-technical-data' },
    { name: 'Whitepaper: TCO of GRP vs. Steel', link: '#' },
    { name: 'Installation Guide for Modular Cabins', link: '#' },
];

export const CONTACT_OPTIONS = {
  generalEnquiry: 'info@emphz.com',
  technicalSupport: 'support@emphz.com',
  whatsApp: `https://wa.me/918648881888`,
};

export const OFFICE_LOCATIONS: string[] = [
  'Global HQ: Dubai, UAE',
  'R&D Center: Bengaluru, India',
  'Manufacturing Unit: Chennai, India',
];

export const GENERAL_DOWNLOADS: CertificateDownload[] = [
  { name: 'Download Company Profile', link: '#' },
  { name: 'Download Full Product Catalog', link: '#' },
  { name: 'GRP Technical Datasheet', link: '#' },
];

export const PRODUCT_FAQS: FAQItem[] = [
    { question: "What is GRP and why is it superior to metal?", answer: "GRP (Glass Reinforced Plastic) is a composite material that is lightweight, incredibly strong, and completely immune to rust and corrosion. Unlike metal, it doesn't require painting or maintenance, offering a significantly lower total cost of ownership over its 50-year lifecycle." },
    { question: "Are EMPHZ enclosures certified for outdoor use?", answer: "Yes, our standard enclosures are rated IP66, meaning they are completely dust-tight and protected against powerful water jets. They are also UV-stabilized to withstand direct sunlight without degrading." },
    { question: "Can I customize an enclosure for my specific needs?", answer: "Absolutely. We offer extensive customization options, including custom sizes, colors, cutouts for glands and meters, ventilation systems, mounting accessories, and transparent windows." },
    { question: "What is the fire-retardancy rating of your products?", answer: "Our standard products meet the UL 94 V-0 classification, meaning they are self-extinguishing. We also offer higher fire-rated materials compliant with BS 476 for more critical applications." },
];

export const AUTOMOBILE_PAGE_DATA: AutomobilePageData = {
    hero: {
        videoUrl: "https://www.dropbox.com/scl/fi/7wih5l356ws3vpl85n5p2/bus-manufacturing-video.mp4?rlkey=vab85z11j4p4a8b71d9f0f35a&st=zryf25a9&raw=1",
        title: "Driving the Future of Automotive Composites",
        subtitle: "Lightweight, aerodynamic, and durable GRP solutions for buses, trucks, and electric vehicles.",
    },
    introduction: {
        title: "Revolutionizing Vehicle Manufacturing with GRP",
        content: "EMPHZ is at the forefront of the automotive industry's shift towards lighter, more efficient, and longer-lasting materials. Our GRP composite solutions replace heavy, corrosion-prone metal parts with high-strength, custom-molded components that improve performance, reduce fuel consumption, and unlock new possibilities in vehicle design.",
    },
    solutions: [
        { title: "Bus & Coach Bodies", description: "Complete, single-piece front and rear fascia, roof panels, and side panels that reduce overall vehicle weight and improve aerodynamics.", image: "https://images.unsplash.com/photo-1570125909232-eb263c186922?q=80&w=2070&auto=format&fit=crop" },
        { title: "Truck Aerodynamics", description: "Custom-designed spoilers, side skirts, and fairings that minimize drag, leading to significant fuel savings for commercial fleets.", image: "https://images.unsplash.com/photo-1590664919149-a3b46377363c?q=80&w=1974&auto=format&fit=crop" },
        { title: "EV Battery Casings", description: "Lightweight, fire-retardant, and impact-resistant enclosures that protect electric vehicle battery packs while reducing vehicle weight.", image: "https://images.unsplash.com/photo-1622379329707-372a8f3a3c2b?q=80&w=1932&auto=format&fit=crop" },
        { title: "Three-Wheeler Bodies", description: "Durable, rust-proof canopies and bodies for auto-rickshaws that enhance safety, longevity, and passenger comfort.", image: "https://images.unsplash.com/photo-1611387723482-a3350a3c267b?q=80&w=1974&auto=format&fit=crop" },
    ],
    advantages: [
        { icon: "fuel", title: "Improved Fuel Efficiency", description: "Drastic weight reduction directly translates to lower fuel or energy consumption." },
        { icon: "aerodynamic", title: "Enhanced Aerodynamics", description: "Complex, smooth-molded shapes reduce drag for better performance." },
        { icon: "assembly", title: "Faster Assembly", description: "Part consolidation and lighter components speed up the vehicle production line." },
    ],
    galleryImages: [
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1570125909232-eb263c186922?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1559234994-0193b2a2a7f5?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1611387723482-a3350a3c267b?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1590664919149-a3b46377363c?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1625057124330-5d2b679a771b?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517524206127-48bbd363f584?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1520288383303-33431a44f2e9?q=80&w=800&auto=format&fit=crop',
    ],
    featuredProducts: ['A-701', 'A-702', 'A-703'],
};

export const GRP_APPLICATIONS_CONTENT: GrpApplicationCategory[] = [
    {
        name: "Construction & Infrastructure",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        subcategories: [
            { name: "Modular Buildings", items: ["Security Cabins", "Portable Toilets & Showers", "Site Offices", "Worker Housing", "Information Kiosks", "ATM Booths"] },
            { name: "Water & Waste Management", items: ["Potable Water Storage Tanks", "Septic Tanks", "Chemical Storage Tanks", "Grease Traps & Interceptors", "Manhole Covers & Frames", "Drainage Channels & Gratings"] },
            { name: "Urban & Civil", items: ["Cable Trays & Trenches", "Street Light Poles", "Public Seating & Benches", "Decorative Cladding Panels", "Planter Boxes"] },
        ]
    },
    {
        name: "Automotive & Transportation",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop",
        subcategories: [
            { name: "Vehicle Bodies", items: ["Bus Body Panels (Front/Rear Fascia)", "Auto-Rickshaw Canopies", "Truck Aerodynamic Fairings", "EV Body Shells & Panels", "Train Interior Panels"] },
            { name: "Components", items: ["Interior Dashboards", "Seat Structures", "Battery Enclosures", "Engine Covers", "Lightweight Floor Panels", "Spare Wheel Covers"] },
        ]
    },
    {
        name: "Electrical & Utilities",
        image: "https://images.unsplash.com/photo-1621935541555-a0f8b8a4f8a0?q=80&w=1974&auto=format&fit=crop",
        subcategories: [
            { name: "Enclosures & Housings", items: ["Feeder Pillars", "Single/Double Door Enclosures", "Meter Boxes", "Junction Boxes", "Transformer Kiosks", "RMU Housings"] },
            { name: "Insulation & Safety", items: ["Busbar Supports & Barriers", "Switchgear Components", "Insulating Ladders", "Cable Trays"] },
        ]
    },
    {
        name: "Renewable Energy",
        image: "https://images.unsplash.com/photo-1508235289567-f027f91a9e13?q=80&w=2070&auto=format&fit=crop",
        subcategories: [
            { name: "Wind Energy", items: ["Wind Turbine Nacelle Covers", "Spinner Hubs", "Blade Components"] },
            { name: "Solar Energy", items: ["Solar Panel Mounting Structures", "Inverter & Battery Enclosures", "Floating Solar Farm Pontoons"] },
        ]
    },
    {
        name: "Marine & Offshore",
        image: "https://images.unsplash.com/photo-1565538332159-07131a982998?q=80&w=2070&auto=format&fit=crop",
        subcategories: [
            { name: "Vessel Components", items: ["Boat Hulls & Superstructures", "Battery Compartments", "Interior Panels", "Storage Lockers"] },
            { name: "Platform & Dock Equipment", items: ["IP67 Offshore Enclosures", "Walkway Gratings", "Handrails", "Cable Ladders", "Navigation Light Housings"] },
        ]
    },
    {
        name: "Chemical & Industrial",
        image: "https://images.unsplash.com/photo-1604008133345-84b39675278c?q=80&w=1964&auto=format&fit=crop",
        subcategories: [
            { name: "Storage & Processing", items: ["Corrosion-Resistant Chemical Tanks", "Industrial Scrubbers & Ducts", "Pump Housings", "Motor Canopies"] },
            { name: "Custom Fabrication", items: ["Machine Guards & Covers", "Acoustic Enclosures", "Fire-Resistant Panels", "Instrument Housings"] },
        ]
    }
];

export const DIGITAL_BUSINESS_CARD_DATA: DigitalBusinessCardData = {
    companyName: "EMPHZ Private Limited",
    name: "John Doe",
    title: "Chief Executive Officer",
    logoUrl: "https://i.ibb.co/M7cR4Zg/emphz-icon.png",
    websiteUrl: "https://example.com",
    contact: {
        phone: "+918648881888",
        email: "john.doe@emphz.com",
        whatsapp: "https://wa.me/918648881888",
    },
    socials: SOCIAL_LINKS,
    downloads: {
        profile: "#",
        catalog: "#",
        brochure: "#",
    },
    location: {
        address: "Bengaluru, India",
        googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001691889816!2d77.59239871482201!3d12.971822990855793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c91444e5%3A0x4cb834346571597d!2sUB%20City!5e0!3m2!1sen!2sin!4v1633512836553!5m2!1sen!2sin"
    }
};

export const SEO_DATA = {
  home: { title: 'EMPHZ | Engineering Tomorrow in Advanced Composites', description: 'EMPHZ is a global engineering manufacturer specializing in GRP composite enclosures, modular structures, and engineered infrastructure solutions.' },
  products: { title: 'GRP Composite Products | EMPHZ', description: 'Explore our comprehensive catalog of GRP composite products, including electrical enclosures, modular structures, and infrastructure solutions.' },
  productCategory: { title: (name: string) => `${name} | EMPHZ Products`, description: (desc: string) => `Explore EMPHZ's range of ${desc}` },
  productDetail: { title: (name: string) => `${name} | EMPHZ`, description: (name: string, desc: string) => `Technical specifications and details for ${name}: ${desc}` },
  industries: { title: 'Industries Served | EMPHZ Solutions', description: 'Discover how EMPHZ provides tailored GRP composite solutions for industries like electrical, automotive, renewable energy, and more.' },
  industryDetail: { title: (name: string) => `Solutions for ${name} | EMPHZ`, description: (name: string, desc: string) => `Learn about our specialized GRP applications for the ${name} industry. ${desc}` },
  innovation: { title: 'Innovation & Quality | EMPHZ', description: 'Our commitment to smart engineering, precision manufacturing, and rigorous quality control sets the standard for the composites industry.' },
  sustainability: { title: 'Sustainability | EMPHZ', description: 'EMPHZ GRP composites offer a 50-year lifecycle advantage with minimal maintenance and a lower carbon footprint compared to traditional materials.' },
  corporate: { title: 'Corporate Governance | EMPHZ', description: 'Learn about EMPHZ\'s corporate structure, compliance standards, and our commitment to transparency and trust.' },
  support: { title: 'Support & Warranty | EMPHZ', description: 'Find information on our product warranties, technical support channels, and after-sales service for all EMPHZ composite solutions.' },
  knowledge: { title: 'Knowledge Hub | EMPHZ', description: 'Access technical articles, whitepapers, and downloadable resources about GRP composite technology and applications.' },
  grpApplications: { title: 'Comprehensive Guide to GRP Applications | EMPHZ', description: 'Explore an extensive list of products and solutions made possible by the versatility and durability of GRP composites across all industries.' },
  grpTechnicalData: { title: 'Technical Data: GRP Enclosures | EMPHZ', description: 'A deep-dive into the material specifications, certifications, and technical advantages of EMPHZ GRP Single-Door Electrical Enclosures.' },
  contact: { title: 'Contact Us | EMPHZ', description: 'Get in touch with our engineering team to request a quote or discuss your project requirements for GRP composite solutions.' },
  admin: { title: 'Admin Portal | EMPHZ', description: 'Manage the EMPHZ product catalog and digital assets.' },
};