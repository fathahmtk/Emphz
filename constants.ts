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
  instagram: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.338.935 2.126 1.233c.765.297 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.717 2.126-1.233s.935-1.338 1.233-2.126c.297-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.717-1.459-1.233-2.126S20.65.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.06-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.82-896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057.36 2.227-.413C8.415 2.18 8.797 2.16 12 2.16zm0 2.91c-2.711 0-4.921 2.21-4.921 4.921s2.21 4.921 4.921 4.921 4.921-2.21 4.921-4.921-2.21-4.921-4.921-4.921zm0 7.832c-1.601 0-2.91-1.31-2.91-2.911s1.31-2.911 2.91-2.911 2.91 1.31 2.91 2.911-1.309 2.911-2.91 2.911zm4.858-7.734c-.548 0-.991.443-.991.991s.443.991.991.991.991-.443.991-.991-.443-.991-.991-.991z',
  whatsapp: 'M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.206 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z',
  lightweight: 'M18.36,8.36C17.18,7.18,15.67,6,14,5.43V4c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v1.43C8.33,6,6.82,7.18,5.64,8.36C4.46,9.54,3.7,11.21,3.54,13H2c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h1.54c0.16,1.79,0.92,3.46,2.1,4.64c1.18,1.18,2.69,2.36,4.36,2.93V20c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-1.43c1.67-0.57,3.18-1.75,4.36-2.93c1.18-1.18,1.94-2.85,2.1-4.64H22c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h-1.54C20.3,11.21,19.54,9.54,18.36,8.36z M12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,16,12,16z',
  fuel: 'M16.9,8.58l-1.42-1.42l-2.04,2.05l-2.04-2.05l-1.42,1.42L12,10.61V14c0,1.1,0.9,2,2,2h2v2H8v-2h2v-3.39L12,8.61l1.9-1.91l1.42,1.42L13.41,10L12,11.41V16h4v-2c1.1,0,2-0.9,2-2v-2.42L16.9,8.58z M15,4h-1V3c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v1h-1c-1.1,0-2,0.9-2,2v2.17c0,0.53,0.21,1.04,0.59,1.41l2.41,2.41H11v1.41l-2.71,2.71C7.53,18.47,7,19.2,7,20v1c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1v-1c0-0.8-0.53-1.53-1.29-1.88L13,15.41V14h1.59l2.41-2.41c0.38-0.38,0.59-0.88,0.59-1.41V6C17,4.9,16.1,4,15,4z',
  aerodynamic: 'M21.9,12.5c-0.2-0.7-0.6-1.4-1.2-1.8L13.8,6c-0.4-0.4-1-0.4-1.4,0L7.6,10.8c-1,1-1.6,2.3-1.6,3.7c0,3,2.5,5.5,5.5,5.5c1.4,0,2.7-0.5,3.7-1.6L20,13.6c0.4-0.4,0.4-1,0-1.4l-1.4-1.4c-0.4-0.4-1-0.4-1.4,0L13,15.1c-0.8,0.8-2.1,0.8-2.8,0c-0.8-0.8-0.8-2.1,0-2.8l4.2-4.2l5.4,4.2c0.2,0.2,0.5,0.2,0.7,0s0.2-0.5,0-0.7l-5.8-4.5c-0.2-0.2-0.5-0.2-0.7,0l-5.8,4.5c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l5.4-4.2l-4.2,4.2c-0.8,0.8-0.8-2.1,0,2.8c0.8,0.8,2.1,0.8,2.8,0L17,10.9l2.1,2.1c0.2,0.2,0.5,0.2,0.7,0s0.2-0.5,0-0.7l-2.5-2.5c-0.2-0.2-0.5-0.2-0.7,0l-2.5,2.5c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l2.1-2.1l-2.1,2.1c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l2.1-2.1c-0.2-0.2-0.5-0.2-0.7,0l-2.1,2.1c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l2.1-2.1l-2.1,2.1c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l2.1-2.1',
  durability: 'M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M10,17l-4-4l1.41-1.41L10,14.17l6.59-6.59L18,9L10,17z',
  design: 'M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9c0.83,0,1.5-0.67,1.5-1.5c0-0.39-0.15-0.74-0.39-1.01c-0.23-0.26-0.38-0.61-0.38-0.99c0-0.83,0.67-1.5,1.5-1.5H16c2.76,0,5-2.24,5-5c0-4.42-4.03-8-9-8V3z M6.5,12C5.67,12,5,11.33,5,10.5S5.67,9,6.5,9S8,9.67,8,10.5S7.33,12,6.5,12z M9.5,8C8.67,8,8,7.33,8,6.5S8.67,5,9.5,5S11,5.67,11,6.5S10.33,8,9.5,8z M14.5,8C13.67,8,13,7.33,13,6.5S13.67,5,14.5,5S16,5.67,16,6.5S15.33,8,14.5,8z M17.5,12c-0.83,0-1.5-0.67-1.5-1.5S16.67,9,17.5,9S19,9.67,19,10.5S18.33,12,17.5,12z',
  safety: 'M13,14h-2v-2h2V14z M13,10h-2V4h2V10z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z',
  nvh: 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z',
  assembly: 'M11 17h2v-1.17l6.78-6.78-7.95-7.95L4.05 8.88 2.64 7.46 4.05 6.05l1.41 1.41L11 1.83l9.17 9.17-6.78 6.78V17zm-7-2h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2z',
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
        image: 'https://images.unsplash.com/photo-1621935541555-a0f8b8a4f8a0?q=80&w=1974&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1617789255069-eda08a55e4e8?q=80&w=2070&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1555465052-1b50d5c83f98?q=80&w=2070&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1596700661874-3292b3820252?q=80&w=1974&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1619451421623-93cb337d10d7?q=80&w=2070&auto=format&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1590664919145-98a8a4f4f34d?q=80&w=2070&auto=format&fit=crop',
      },
      {
        code: 'A-704',
        name: 'GRP Ambulance & Mobile Clinic Bodies',
        description: 'Hygienic, easy-to-clean, and customizable composite bodies for special-purpose medical vehicles, ensuring durability and insulation.',
        image: 'https://images.unsplash.com/photo-1601361917647-725351e4a6a1?q=80&w=1935&auto=format&fit=crop',
      },
    ],
    technicalSnapshot: [
      { parameter: "Flexural Strength", specification: "180-250 MPa", certification: "ASTM D790" },
      { parameter: "Impact Resistance", specification: "IK09", certification: "IEC 62262" },
      { parameter: "Fire Standard", specification: "FMVSS 302 Compliant", certification: "AIS 004" },
      { parameter: "UV Resistance", specification: "Automotive Grade Gelcoat", certification: "ISO 4892" },
      { parameter: "Weight Savings vs Steel", specification: "Up to 40%", certification: "" },
    ],
    materials: ["SMC/BMC Composites", "Automotive-Grade Resin", "UV-Resistant Gelcoat"],
    accessories: ["Integrated Mountings", "Structural Inserts", "Custom Paint Finish"],
  },
];

// --- Industries We Empower ---
export const INDUSTRIES: Industry[] = [
  {
    name: "Electrical & Utilities",
    slug: "electrical-utilities",
    applicationExample: "GRP feeder pillars and transformer enclosures",
    image: 'https://images.unsplash.com/photo-1621935541555-a0f8b8a4f8a0?q=80&w=1974&auto=format&fit=crop',
    description: "EMPHZ provides mission-critical GRP enclosures and housings for the electrical power transmission and distribution sector. Our non-conductive, corrosion-proof solutions protect sensitive equipment like switchgear, transformers, and control panels from harsh environmental conditions, ensuring grid reliability and safety.",
    details: [
      "IP66/IK10 rated enclosures for superior protection against dust, water, and impact.",
      "UV-stabilized and fire-retardant materials for long-term outdoor performance.",
      "Customizable designs for feeder pillars, RMU housings, and transformer kiosks.",
      "Lightweight construction for easy transportation and installation in remote locations."
    ],
    relatedCategories: ['CAT1', 'CAT3', 'CAT4'],
    featuredProducts: ['E-103', 'E-106', 'U-307', 'U-308']
  },
  {
    name: "Renewable Energy",
    slug: "renewable-energy",
    applicationExample: "Solar inverter cabinets, wind farm junction boxes",
    image: 'https://images.unsplash.com/photo-1508235289567-f027f91a9e13?q=80&w=2070&auto=format&fit=crop',
    description: "In the renewable energy sector, our GRP solutions provide durable, maintenance-free protection for critical components in solar and wind farms. From inverter cabinets to nacelle covers, our composites withstand extreme weather, ensuring maximum uptime and a low total cost of ownership for green energy projects.",
    details: [
      "UV-stable GRP cabinets for solar inverters and battery storage systems.",
      "Lightweight, high-strength nacelle covers for wind turbines.",
      "Corrosion-proof junction boxes and control panels for coastal and offshore installations.",
      "Thermally insulated designs to protect sensitive electronics from temperature extremes."
    ],
    relatedCategories: ['CAT1', 'CAT4', 'CAT5', 'CAT6'],
    featuredProducts: ['E-108', 'C-406', 'C-409', 'O-504']
  },
  {
    name: "Telecom & IT",
    slug: "telecom-it",
    applicationExample: "Weatherproof kiosk housings for fiber and base stations",
    image: 'https://images.unsplash.com/photo-1611033149488-82736f1e8c74?q=80&w=1954&auto=format&fit=crop',
    description: "EMPHZ engineers robust GRP enclosures and shelters for the telecom and IT industries, safeguarding sensitive network equipment from environmental hazards. Our solutions offer excellent thermal management and RF transparency, making them ideal for 5G base stations, fiber optic junction boxes, and remote data-gathering nodes.",
    details: [
      "Weatherproof kiosks and cabinets with advanced thermal management options.",
      "Customizable enclosures with EMI/RFI shielding for sensitive electronics.",
      "RF-transparent materials ideal for antenna housings and communication equipment.",
      "Secure and durable shelters for remote base stations and network hubs."
    ],
    relatedCategories: ['CAT1', 'CAT2', 'CAT4', 'CAT6'],
    featuredProducts: ['E-105', 'M-206', 'C-401', 'S-605']
  },
  {
    name: "Construction & Infrastructure",
    slug: "construction-infrastructure",
    applicationExample: "Portable toilets, control cabins, and pump rooms",
    image: 'https://images.unsplash.com/photo-1599401713374-1d84b238f8a1?q=80&w=1974&auto=format&fit=crop',
    description: "For the construction and public infrastructure sectors, EMPHZ delivers rapid-deployment modular GRP structures and durable utility products. Our lightweight yet strong portable cabins, restrooms, and site offices offer a superior alternative to traditional materials, while our composite manhole covers and cable trenches ensure long-term, corrosion-free performance.",
    details: [
      "Rapid-deployment portable cabins, site offices, and security booths.",
      "Hygienic, easy-to-clean portable toilets and restroom units.",
      "High-strength, lightweight manhole covers and drainage gratings.",
      "Corrosion-immune water storage and septic tanks for reliable sanitation."
    ],
    relatedCategories: ['CAT2', 'CAT3'],
    featuredProducts: ['M-201', 'M-203', 'M-210', 'U-305']
  },
  {
    name: "Marine & Offshore",
    slug: "marine-offshore",
    applicationExample: "Anti-corrosive enclosures for coastal facilities",
    image: 'https://images.unsplash.com/photo-1610410654519-27b4618e98f7?q=80&w=2070&auto=format&fit=crop',
    description: "EMPHZ's specialized GRP composites are engineered to withstand the most corrosive marine and offshore environments. Our IP67-rated enclosures, cabinets, and custom-molded components provide unparalleled protection against saltwater, humidity, and UV radiation, making them the ideal choice for ports, desalination plants, and offshore platforms.",
    details: [
      "IP67-rated enclosures certified for over 1000 hours of salt spray testing.",
      "Corrosion-immune materials for junction boxes, control cabinets, and battery compartments.",
      "Lightweight structures that reduce structural load on offshore platforms and vessels.",
      "Fire-retardant and UV-stabilized formulations for enhanced safety and longevity."
    ],
    relatedCategories: ['CAT1', 'CAT5'],
    featuredProducts: ['E-104', 'O-501', 'O-503', 'O-505']
  },
  {
    name: "Automobile & Transport",
    slug: "automobile-transport",
    applicationExample: "GRP bus body panels and auto-rickshaw bodies",
    image: 'https://images.unsplash.com/photo-1551645710-065d1d8892d1?q=80&w=2070&auto=format&fit=crop',
    description: "EMPHZ delivers high-performance GRP composite solutions to the automotive and transport sectors, focusing on lightweight, durable, and aerodynamic components that improve fuel efficiency and reduce lifecycle costs.",
    details: [], // Details are on the dedicated page
    relatedCategories: ['CAT7'],
    featuredProducts: ['A-701', 'A-702', 'A-703']
  },
];

// --- Dedicated Page Data: Automobile ---
export const AUTOMOBILE_PAGE_DATA: AutomobilePageData = {
  hero: {
    videoUrl: "https://videos.pexels.com/video-files/8141341/8141341-hd_1920_1080_25fps.mp4",
    title: "Driving the Future with GRP Composites",
    subtitle: "Lightweight, aerodynamic, and durable solutions for the modern transport industry."
  },
  introduction: {
    title: "Innovating Mobility with Advanced Composites",
    content: "EMPHZ is at the forefront of revolutionizing the automobile and transport industry with our advanced GRP composite solutions. By replacing traditional heavy metals with our lightweight, high-strength materials, we help manufacturers build more fuel-efficient, durable, and aesthetically pleasing vehicles. From public transport to commercial logistics, our components are engineered to meet the rigorous demands of modern mobility."
  },
  solutions: [
    {
      title: "Buses & Coaches",
      description: "We provide complete GRP solutions including front and rear fascias, roof panels, and interior components. Our products reduce overall vehicle weight, leading to significant fuel savings and lower emissions, while offering superior durability against daily wear and tear.",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c186922?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Auto-Rickshaws & Three-Wheelers",
      description: "Our rust-proof, impact-resistant GRP bodies and canopies for auto-rickshaws enhance vehicle longevity and passenger safety. The lightweight nature also improves maneuverability and operational efficiency in urban environments.",
      image: "https://images.unsplash.com/photo-1611387723482-a3350a3c267b?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Commercial Trucks & Vans",
      description: "EMPHZ designs and manufactures aerodynamic kits, including fairings and side skirts, that reduce drag and substantially improve fuel economy for long-haul trucks and commercial vans. Our solutions are built to withstand harsh road conditions.",
      image: "https://images.unsplash.com/photo-1590664919145-98a8a4f4f34d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Specialized Vehicles",
      description: "We custom-fabricate GRP bodies for specialized vehicles like ambulances, mobile clinics, and refrigerated vans. The hygienic, easy-to-clean, and insulating properties of our composites make them the ideal material for these critical applications.",
      image: "https://images.unsplash.com/photo-1601361917647-725351e4a6a1?q=80&w=1935&auto=format&fit=crop"
    }
  ],
  advantages: [
    { icon: "lightweight", title: "Weight Reduction", description: "Up to 40% lighter than steel, directly improving fuel efficiency, handling, and payload capacity." },
    { icon: "durability", title: "Superior Durability", description: "High impact resistance and immunity to corrosion from road salt and environmental pollutants." },
    { icon: "design", title: "Design Flexibility", description: "GRP allows for creative, complex, and aerodynamic shapes, enabling modern and aesthetically superior vehicle bodies." },
    { icon: "nvh", title: "Noise & Vibration Damping", description: "Inherent material properties reduce NVH levels, leading to a quieter and more comfortable ride experience." },
    { icon: "safety", title: "Enhanced Safety", description: "High strength-to-weight ratio contributes to safer vehicle structures with excellent impact absorption properties." },
    { icon: "assembly", title: "Faster Production Cycles", description: "Consolidated parts and lightweight modules simplify the assembly process, reducing manufacturing time and costs." },
  ],
  galleryImages: [
    'https://images.unsplash.com/photo-1570125909232-eb263c186922?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1611387723482-a3350a3c267b?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1590664919145-98a8a4f4f34d?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1601361917647-725351e4a6a1?q=80&w=1935&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614208691353-8b4e7473a84c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617105151525-24e5488344e4?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1590299665511-80bb6b7e6b43?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1628117623912-8881475e110a?q=80&w=2070&auto=format&fit=crop'
  ],
  featuredProducts: ['A-701', 'A-702', 'A-703', 'A-704']
};

// --- Innovation Page ---
export const FACTORY_IMAGES = [
  "https://images.unsplash.com/photo-1581092446347-7d133e6917a8?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581094371944-32da9d682944?q=80&w=2070&auto=format&fit=crop"
];
export const QUALITY_FRAMEWORK: QualityPoint[] = [
  { title: 'ISO 9001:2015 Certified:', description: ' Our QMS governs every stage from raw material inspection to final product dispatch.' },
  { title: 'In-House Validation:', description: ' We operate a state-of-the-art laboratory for mechanical, thermal, and environmental testing.' },
  { title: 'Traceability:', description: ' Every product is batch-coded for complete traceability of materials and processes.' },
];
export const PROCESS_PHILOSOPHY = "Our manufacturing process integrates smart engineering with precision automation. We utilize advanced SMC/BMC compression molding and RTM techniques to ensure consistent, high-quality output. Each step is monitored in real-time to maintain strict tolerances and material integrity, resulting in products that don’t just meet standards—they define them.";

// --- Corporate Page ---
export const CERTIFICATE_DOWNLOADS: CertificateDownload[] = [
  { name: "Download ISO 9001:2015 Certificate", link: "#" },
  { name: "Download Company Incorporation Certificate", link: "#" },
  { name: "Download MSME Certificate", link: "#" },
];
export const CORPORATE_PAGE_CARDS: CorporatePageCard[] = [
  {
    title: "Corporate Identity",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop",
    type: 'details',
    content: [
      { parameter: "Company Name", detail: "EMPHZ Private Limited" },
      { parameter: "Year of Establishment", detail: "2016" },
      { parameter: "Business Type", detail: "Manufacturer, Exporter, Technology Provider" },
      { parameter: "Legal Status", detail: "Private Limited Company" },
      { parameter: "Key Personnel", detail: "R. Murali (Director)" },
    ]
  },
  {
    title: "Compliance & Downloads",
    image: "https://images.unsplash.com/photo-1581093582415-998f8287894a?q=80&w=1974&auto=format&fit=crop",
    type: 'downloads',
    content: CERTIFICATE_DOWNLOADS
  }
];

// --- Support Page ---
export const WARRANTY_INFO: WarrantyInfoCard[] = [
  {
    title: "Warranty Coverage",
    image: "https://images.unsplash.com/photo-1619451421623-93cb337d10d7?q=80&w=2070&auto=format&fit=crop",
    content: "EMPHZ warrants its GRP products to be free from defects in material and workmanship for a period of ten (10) years from the date of dispatch. This warranty covers structural integrity, color stability (within defined limits), and resistance to environmental degradation under normal use conditions.",
    note: "Our warranty reflects our commitment to product integrity and long-term performance."
  },
  {
    title: "Exclusions",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop",
    content: "This warranty does not cover damage resulting from improper installation, unauthorized modification, misuse, accidental damage, acts of God, or application outside the specified technical parameters. Hardware and third-party accessories are subject to their respective manufacturer's warranties.",
    note: "Please refer to our full warranty document for detailed terms and conditions."
  },
  {
    title: "Installation Requirements",
    image: "https://images.unsplash.com/photo-1599401713374-1d84b238f8a1?q=80&w=1974&auto=format&fit=crop",
    content: [
        "Installation must be performed by qualified personnel.",
        "Use of official EMPHZ mounting hardware is required.",
        "Ensure adequate ventilation for heat-generating equipment.",
        "Follow provided torque specifications for all fasteners.",
        "Foundation and mounting surfaces must be level and stable."
    ],
    note: "Proper installation ensures optimal performance and warranty validity."
  }
];

// --- Knowledge Hub Page ---
export const BLOG_ARTICLES: BlogArticle[] = [
  {
    title: 'Why GRP is the Superior Choice Over Traditional Materials',
    link: '#',
    description: 'An in-depth comparison of GRP composites against steel, aluminum, and concrete in harsh environments.',
    image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'The Role of GRP in the Renewable Energy Revolution',
    link: '#',
    description: 'Exploring how lightweight and durable GRP components are accelerating the deployment of solar and wind energy projects worldwide.',
    image: 'https://images.unsplash.com/photo-1621935541555-a0f8b8a4f8a0?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'Understanding IP and IK Ratings for Electrical Enclosures',
    link: '#',
    description: 'A technical guide to interpreting Ingress Protection and Impact Resistance ratings to select the right enclosure for your application.',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360aa9a23?q=80&w=2070&auto=format&fit=crop'
  },
];
export const KNOWLEDGE_RESOURCES = [
  { name: "GRP Material Properties Whitepaper", link: "#" },
  { name: "Chemical Resistance Chart", link: "#" },
  { name: "Standard Product CAD Drawings (ZIP)", link: "#" },
];

// --- GRP Applications Page Content ---
export const GRP_APPLICATIONS_CONTENT: GrpApplicationCategory[] = [
    {
        name: "1. Construction & Infrastructure",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        subcategories: [
            { name: "Structural Elements", items: ["Beams, channels, angles, rods, and other structural profiles", "GRP rebar for concrete reinforcement (non-corrosive alternative to steel)", "Bridge decks and bridge rehabilitation components", "Modular bridge sections", "Walkways, platforms, and staircases (especially in corrosive environments)"] },
            { name: "Building Envelopes & Cladding", items: ["Roofing sheets (corrugated, flat, opaque, translucent)", "Wall cladding panels and facades", "Decorative panels for interiors and exteriors", "Skylights and translucent roofing"] },
            { name: "Water Management & Utilities", items: ["Water storage tanks (sectional, cylindrical, underground)", "Effluent treatment plant components (tanks, covers, pipes)", "Sewerage pipes and linings", "Gully pots and drainage channels", "Reservoir covers", "Manhole covers and frames (lightweight, non-corrosive, theft-resistant)", "Pump houses and kiosks"] },
            { name: "Modular & Prefabricated Structures", items: ["Modular public toilets and shower units", "Bus shelters and tram stops", "Security guard rooms and check-posts", "Site offices and temporary accommodation units", "Cold storage panels"] },
            { name: "Other Infrastructure", items: ["Sound barriers and acoustic panels", "Cable ducts and trenches", "Street light poles and utility poles (lighter, non-conductive)", "Signage boards and advertising hoardings", "Fencing and gates", "Road furniture (median barriers, crash barriers)"] },
        ]
    },
    {
        name: "2. Automotive & Transportation",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c186922?q=80&w=2070&auto=format&fit=crop",
        subcategories: [
            { name: "Vehicle Body Components", items: ["Lightweight body panels for buses, trucks, and commercial vehicles", "Auto-rickshaw and tractor components (e.g., cabins, hoods, fenders)", "Caravan and RV body parts", "Specialty vehicle enclosures (ambulances, fire tenders)", "Interior panels and seating for trains and buses"] },
            { name: "Custom Enclosures", items: ["Genset (generator set) canopies and enclosures", "Battery boxes and covers"] },
            { name: "Marine Transportation", items: ["Hulls and decks for boats, yachts, and fishing vessels", "Marine components (fenders, navigation aids)", "Lifeboats and rescue craft"] },
        ]
    },
    {
        name: "3. Water, Agriculture & Chemical Industries",
        image: "https://images.unsplash.com/photo-1596700661874-3292b3820252?q=80&w=1974&auto=format&fit=crop",
        subcategories: [
            { name: "Water & Irrigation", items: ["Agricultural water channels and linings (prevents seepage)", "Irrigation pipes and fittings", "Silos and storage tanks for grains, feeds, and fertilizers", "Aquaculture tanks and fish farming equipment"] },
            { name: "Chemical Storage & Processing", items: ["Tanks for agri-chemicals, fertilizers, and corrosive liquids", "Chemical processing equipment (vessels, scrubbers, ducting)", "Industrial pipes and fittings for chemical transfer", "Secondary containment systems"] },
        ]
    },
    {
        name: "4. Renewable Energy & Electrical",
        image: "https://images.unsplash.com/photo-1622379329707-372a8f3a3c2b?q=80&w=1932&auto=format&fit=crop",
        subcategories: [
            { name: "Renewable Energy", items: ["Solar panel mounting structures (especially in corrosive environments)", "Wind turbine blades and nacelle covers", "Biogas plant components (digester covers, gas holders)"] },
            { name: "Electrical & Electronics", items: ["Electrical enclosures, junction boxes, and cabinets (IP rated)", "Cable trays and ladders", "Electrical insulators and busbar supports", "Meter boxes and consumer units", "Distribution boards and feeder pillars", "Control panel housings", "Telecommunication cabinets and shelters", "Battery enclosures"] },
        ]
    },
    {
        name: "5. Marine, Offshore & Oil & Gas",
        image: "https://images.unsplash.com/photo-1565538332159-07131a982998?q=80&w=2070&auto=format&fit=crop",
        subcategories: [
            { name: "Marine Structures", items: ["Boat and ship hulls, decks, superstructures", "Gangways and access platforms for marine environments", "Buoys, pontoons, and floating structures"] },
            { name: "Offshore & Industrial", items: ["Offshore platform components (walkways, handrails, stair treads)", "Blast-resistant modules and buildings", "Piping systems for oil & gas (reduced weight, corrosion resistance)", "Cooling tower components", "Ventilation systems (hoods, ducts)"] },
        ]
    },
    {
        name: "6. Consumer & Specialty Goods",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1935&auto=format&fit=crop",
        subcategories: [
            { name: "Outdoor & Urban Furniture", items: ["Street furniture (benches, litter bins, planters)", "Outdoor and garden furniture", "Playground equipment", "Decorative elements and sculptures"] },
            { name: "Home & Lifestyle", items: ["Bathroom fixtures (bathtubs, shower trays, washbasins)", "Septic tanks and water filters", "Decorative planters and garden features"] },
            { name: "Sports & Recreation", items: ["Kayaks, canoes, surfboards, paddleboards", "Swimming pool slides and structures", "Sports equipment components (e.g., helmets, fairings)"] },
            { name: "Miscellaneous", items: ["DIY kits and scale models", "Custom housings for machinery and equipment", "Theme park props and architectural features"] },
        ]
    }
];


// --- Contact Page ---
export const CONTACT_OPTIONS = {
  generalEnquiry: 'sales@emphz.com',
  technicalSupport: 'support@emphz.com',
  whatsApp: '#',
};
export const OFFICE_LOCATIONS = [
  'Coimbatore, Tamil Nadu, India',
  'Bengaluru, Karnataka, India',
  'Sharjah, UAE',
];
export const SOCIAL_LINKS = {
  linkedIn: "https://www.linkedin.com/company/emphz/",
  twitter: "https://twitter.com/emphz", // For X
  googleBusiness: "https://g.page/EMPHZ",
  facebook: "https://www.facebook.com/emphz", // Placeholder
  instagram: "https://www.instagram.com/emphz", // Placeholder
};
export const GENERAL_DOWNLOADS = [
  { name: 'Download Product Catalog', link: '#' },
  { name: 'Download Company Profile', link: '#' },
  { name: 'Download Technical Manual', link: '#' },
];

// --- Product Detail Page ---
export const PRODUCT_FAQS: FAQItem[] = [
    { question: 'What is the standard lead time for GRP enclosures?', answer: 'Standard models are typically dispatched within 7-10 working days. Custom orders may take 3-4 weeks depending on complexity.' },
    { question: 'Can you provide custom colors and branding?', answer: 'Yes, we offer custom RAL colors and can mold company logos directly into the enclosure for a durable, professional finish. Minimum order quantities may apply.' },
    { question: 'What is the maximum operating temperature for these enclosures?', answer: 'Our standard GRP enclosures are rated for continuous operation from -40°C to 80°C. High-temperature resin options are available for applications up to 150°C.' },
    { question: 'Are these enclosures suitable for hazardous or explosive environments?', answer: 'Yes, we offer ATEX-certified versions of our enclosures with anti-static properties for use in Zone 1, 2, 21, and 22 hazardous areas.' },
    { question: 'How do I specify accessories like mounting plates or vents?', answer: 'All accessories can be specified at the time of order. Our sales team can assist you in selecting the appropriate options, including back plates, ventilation louvers, window kits, and gland plates, to meet your project needs.' },
];

// --- Digital Business Card Page ---
export const DIGITAL_BUSINESS_CARD_DATA: DigitalBusinessCardData = {
  companyName: "EMPHZ Private Limited",
  name: "R. Murali",
  title: "Director",
  logoUrl: FALLBACK_LOGO_URL,
  websiteUrl: "https://xpod.co.in/", // Placeholder for the main website URL
  contact: {
    phone: "+91 86488 81888",
    email: "sales@emphz.com",
    whatsapp: "https://wa.me/918648881888", // Assuming the same number for WhatsApp
  },
  socials: {
    linkedin: SOCIAL_LINKS.linkedIn,
    twitter: SOCIAL_LINKS.twitter,
    google: SOCIAL_LINKS.googleBusiness,
    whatsapp: "https://wa.me/918648881888",
    facebook: SOCIAL_LINKS.facebook,
    instagram: SOCIAL_LINKS.instagram,
  },
  downloads: {
    profile: "#", // Placeholder
    catalog: "#", // Placeholder
    brochure: "#", // Placeholder
  },
  location: {
    address: "Coimbatore, Tamil Nadu, India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.79375794276!2d76.9922223147596!3d11.020165992178088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a4f91b7e4b%3A0x33b43501a97e64b8!2sEMPHZ%20Private%20Limited!5e0!3m2!1sen!2sin!4v1628782875323!5m2!1sen!2sin",
  },
};


// --- SEO Data ---
export const SEO_DATA = {
    home: {
        title: "EMPHZ | Engineering Tomorrow in Advanced Composites",
        description: "EMPHZ is a global engineering manufacturer specializing in GRP composite enclosures, modular structures, and engineered infrastructure solutions for B2B clients worldwide.",
    },
    products: {
        title: "GRP Product Catalog | EMPHZ",
        description: "Explore our comprehensive range of GRP electrical enclosures, modular structures, and custom-molded composite solutions.",
    },
    productCategory: {
        title: (categoryName: string) => `${categoryName} | EMPHZ Products`,
        description: (categoryTagline: string) => `Discover our ${categoryTagline} View technical specifications and product details.`,
    },
    industries: {
        title: "Industries We Serve | EMPHZ",
        description: "EMPHZ provides specialized GRP solutions for Electrical, Renewable Energy, Telecom, Infrastructure, and Marine sectors.",
    },
    industryDetail: {
        title: (industryName: string) => `GRP Solutions for the ${industryName} Industry | EMPHZ`,
        description: (industryName: string, industryDescription: string) => `Learn how EMPHZ's advanced GRP composites solve key challenges in the ${industryName} sector. ${industryDescription}`,
    },
    innovation: {
        title: "Innovation & Quality | EMPHZ",
        description: "Our commitment to quality is backed by ISO 9001:2015 certification and a state-of-the-art in-house testing laboratory.",
    },
    sustainability: {
        title: "Sustainability | EMPHZ",
        description: "Discover how EMPHZ's GRP composites offer a 50-year lifecycle advantage and a lower total cost of ownership.",
    },
    corporate: {
        title: "Corporate Governance | EMPHZ",
        description: "EMPHZ is a trusted, compliant private limited company. Access our corporate details and certifications.",
    },
    support: {
        title: "Support & Warranty | EMPHZ",
        description: "Learn about our comprehensive 10-year product warranty and how to contact our technical support team.",
    },
    knowledge: {
        title: "Knowledge Hub | EMPHZ",
        description: "Access technical articles, whitepapers, and downloadable resources on GRP composite technology.",
    },
    contact: {
        title: "Contact Us | EMPHZ",
        description: "Request a quote or get in touch with our engineering team to discuss your project requirements.",
    },
    admin: {
        title: "Admin Portal | EMPHZ",
        description: "Manage EMPHZ product catalog and digital assets.",
    },
    grpApplications: {
        title: "Comprehensive Guide to GRP Applications | EMPHZ",
        description: "Explore an extensive list of products and applications made possible by the versatility of GRP composites, from construction to consumer goods."
    },
    grpTechnicalData: {
        title: "Technical Data: GRP Single Door Enclosures | EMPHZ",
        description: "A deep-dive into the material properties, certifications, and technical specifications of our GRP single door electrical enclosures."
    }
};