
import type { Product, Project } from './types';

export const productsSeed: Product[] = [
  {
    id: 'grp-electrical-enclosure',
    name: 'GRP Electrical Enclosure',
    category: 'Enclosures',
    overview:
      'High-durability GRP enclosures for electrical distribution and control systems. A rust-proof, non-conductive alternative to metal boxes, ideal for harsh outdoor and industrial environments.',
    imageUrls: [
      'https://storage.googleapis.com/stabl-media/6f183983-de3c-4740-8a1a-464a75399587.png',
      'https://picsum.photos/seed/enclosure2/800/600',
    ],
    imageHint: 'GRP enclosure',
    specifications: {
      Material: 'Glass-Reinforced Polyester (GRP)',
      'IP Rating': 'IP65 / IP66',
      'Impact Resistance': 'IK10',
      'Operating Temperature': '-40°C to +80°C',
    },
    applications: [
      'LV/HV Distribution',
      'Control Panels',
      'Metering Systems',
      'Outdoor Switchgear Protection',
    ],
    colors: ['RAL 7035 (Light Gray)', 'Custom Colors'],
    sizes: ['Small (300x200x150mm)', 'Medium (600x400x200mm)', 'Large (1000x800x300mm)'],
    datasheetUrl: '/downloads/EMPHZ-Datasheet-GRP-Enclosures.pdf',
    model3dUrl: '#',
  },
  {
    id: 'grp-kiosk',
    name: 'GRP/FRP Kiosk',
    category: 'Kiosks & Modular',
    overview:
      'Fully-moulded GRP kiosks for utilities, security, and field operations. Built for long-term outdoor durability, providing a lightweight yet robust solution for housing equipment and personnel.',
    imageUrls: ['https://storage.googleapis.com/stabl-media/6f183983-de3c-4740-8a1a-464a75399587.png'],
    imageHint: 'GRP kiosk',
    specifications: {
      Material: 'GRP with insulated core',
      'IP Rating': 'IP55',
      'Impact Resistance': 'IK09',
      'Operating Temperature': '-30°C to +70°C',
    },
    applications: [
      'Utility Field Kiosks',
      'Payment Kiosks',
      'Guard Booths',
      'Micro Control Rooms',
    ],
    colors: ['RAL 9002 (Grey White)', 'RAL 1015 (Light Ivory)'],
    sizes: ['2x2m', '3x2m', 'Custom Dimensions'],
    datasheetUrl: '/downloads/EMPHZ-Datasheet-GRP-Kiosks.pdf',
  },
  {
    id: 'fire-safety-enclosure',
    name: 'Fire & Safety Enclosure',
    category: 'Specialized',
    overview:
      'Fire-rated GRP enclosures for housing safety and emergency equipment. Engineered to remain operational in high-temperature and corrosive environments, ensuring critical systems are protected.',
    imageUrls: ['https://images.unsplash.com/photo-1629819125301-447961b16492?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    imageHint: 'fire safety',
    specifications: {
      Material: 'Fire-Retardant GRP',
      'IP Rating': 'IP65',
      'Impact Resistance': 'IK10',
      'Operating Temperature': '-20°C to +120°C',
    },
    applications: [
      'Fire Extinguisher Cabinets',
      'SCBA Storage',
      'Hose Reel Protections',
      'Emergency Response Systems',
    ],
    colors: ['RAL 3000 (Flame Red)'],
    sizes: ['Standard sizes available'],
    datasheetUrl: '#',
  },
   {
    id: 'battery-enclosure',
    name: 'GRP Battery Enclosure',
    category: 'Specialized',
    overview:
      'GRP battery containers engineered for solar energy systems, telecom backup batteries, and industrial UPS units, featuring acid-resistant GRP and thermal management.',
    imageUrls: ['https://images.unsplash.com/photo-1632073248509-c3225a81a95a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    imageHint: 'battery enclosure',
    specifications: {
      Material: 'Acid-Resistant GRP',
      'IP Rating': 'IP54',
      'Impact Resistance': 'IK08',
      'Operating Temperature': '-20°C to +60°C',
    },
    applications: [
      'Solar Battery Banks',
      'Telecom Towers',
      'UPS Housing',
      'Industrial Backup Systems',
    ],
    colors: ['RAL 7035 (Light Gray)'],
    sizes: ['Custom sizes for battery arrays'],
    datasheetUrl: '#',
  },
];

export const projectsSeed: Project[] = [
    {
        id: 'masdar-city-solar-farm',
        title: "Masdar City Solar Farm Enclosures",
        details: "Supplied and installed 200+ IP65 GRP enclosures for combiner boxes and monitoring equipment at the Masdar City solar park. The solution provided superior UV resistance and thermal management in a harsh desert environment, replacing corroded metal predecessors.",
        clientType: "Renewable Energy",
        location: "Abu Dhabi, UAE",
        beforeImageUrl: "https://picsum.photos/seed/old-solar/800/600",
        afterImageUrl: "https://images.unsplash.com/photo-1509389928833-fe62aef36deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzb2xhciUyMGZhcm18ZW58MHx8fHwxNzYzNDUzNjMxfDA&ixlib-rb-4.1.0&q=80&w=1080",
    },
    {
        id: 'dubai-metro-kiosks',
        title: "Dubai Metro Information Kiosks",
        details: "Designed and delivered 50 custom GRP information kiosks for the Dubai Metro expansion project. The kiosks featured integrated touch screens and cooling systems, meeting stringent public transport authority requirements for durability and aesthetics.",
        clientType: "Public Infrastructure",
        location: "Dubai, UAE",
        beforeImageUrl: "https://picsum.photos/seed/old-kiosk/800/600",
        afterImageUrl: "https://images.unsplash.com/photo-1476036604315-fed0874dfd55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxHUlAlMjBraW9za3xlbnwwfHx8fDE3NjM0NTM2MzF8MA&ixlib-rb-4.1.0&q=80&w=1080",
    },
    {
        id: 'adnoc-refinery-upgrade',
        title: "ADNOC Refinery Instrumentation Upgrade",
        details: "Provided corrosion-proof GRP instrumentation cabinets for the Ruwais refinery upgrade. The non-conductive and chemically-resistant enclosures protect critical sensors and control units in a highly corrosive and hazardous Zone 2 environment.",
        clientType: "Oil & Gas",
        location: "Ruwais, UAE",
        beforeImageUrl: "https://picsum.photos/seed/old-refinery/800/600",
        afterImageUrl: "https://images.unsplash.com/photo-1616785324021-c34336c53573?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];
