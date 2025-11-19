

import type { Product } from './types';

export const productsSeed: Omit<Product, 'id'>[] = [
  {
    name: 'GRP Electrical Enclosure',
    slug: 'grp-electrical-enclosure',
    category: 'Enclosures',
    overview:
      'High-durability GRP enclosures for electrical distribution and control systems. A rust-proof, non-conductive alternative to metal boxes, ideal for harsh outdoor and industrial environments.',
    imageUrls: [
      'https://images.unsplash.com/photo-1640526569383-24ac00e0eae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxHUlAlMjBlbmNsb3N1cmV8ZW58MHx8fHwxNzYzNDUzNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1646800570508-172052920324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxHUlAlMjBlbmNsb3N1cmVzfGVufDB8fHx8MTc2MzQ2Njk0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
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
    name: 'GRP/FRP Kiosk',
    slug: 'grp-frp-kiosk',
    category: 'Kiosks & Modular',
    overview:
      'Fully-moulded GRP kiosks for utilities, security, and field operations. Built for long-term outdoor durability, providing a lightweight yet robust solution for housing equipment and personnel.',
    imageUrls: [
        'https://images.unsplash.com/photo-1476036604315-fed0874dfd55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxHUlAlMjBraW9za3xlbnwwfHx8fDE3NjM0NTM2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1560681610-b97792bd7cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxraW9zayUyMGludGVyaW9yfGVufDB8fHx8MTc2MzQ2Njk0Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
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
    name: 'Fire & Safety Enclosure',
    slug: 'fire-safety-enclosure',
    category: 'Specialized',
    overview:
      'Fire-rated GRP enclosures for housing safety and emergency equipment. Engineered to remain operational in high-temperature and corrosive environments, ensuring critical systems are protected.',
    imageUrls: [
        'https://images.unsplash.com/photo-1629819125301-447961b16492?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://picsum.photos/seed/firesafe2/800/600'
    ],
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
    name: 'GRP Battery Enclosure',
    slug: 'grp-battery-enclosure',
    category: 'Specialized',
    overview:
      'GRP battery containers engineered for solar energy systems, telecom backup batteries, and industrial UPS units, featuring acid-resistant GRP and thermal management.',
    imageUrls: [
        'https://images.unsplash.com/photo-1632073248509-c3225a81a95a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://picsum.photos/seed/battery2/800/600'
    ],
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
  {
    name: 'E6 Modular Villa',
    slug: 'e6-modular-villa',
    category: 'Modular Villas',
    overview:
      'The E6 is a compact, expandable modular villa designed for modern living. Its efficient layout and robust GRP construction make it ideal for personal getaways, accessory dwelling units (ADUs), or boutique hospitality.',
    imageUrls: [
        'https://picsum.photos/seed/e6-villa-ext/800/600',
        'https://picsum.photos/seed/e6-villa-int/800/600'
    ],
    imageHint: 'modern villa',
    specifications: {
      Structure: 'Steel frame with GRP composite panels',
      'Insulation': 'High-density PUF insulation',
      'Area': '55 sq. m.',
      'Features': '1 Bedroom, 1 Bathroom, Kitchenette, Living Area, Outdoor Deck',
    },
    applications: [
      'Holiday Homes',
      'ADUs / Granny Flats',
      'Farmhouses',
      'Resort Pods',
    ],
    colors: ['Arctic White', 'Slate Gray', 'Desert Sand'],
    sizes: ['Standard E6 Model'],
    datasheetUrl: '#',
  },
  {
    name: 'E7 Modular Villa',
    slug: 'e7-modular-villa',
    category: 'Modular Villas',
    overview:
      'The E7 offers a spacious and luxurious modular living experience. With a larger footprint and premium finishes, it’s designed for families, high-end hospitality, or as a primary residence that blends comfort with cutting-edge design.',
    imageUrls: [
        'https://picsum.photos/seed/e7-villa-ext/800/600',
        'https://picsum.photos/seed/e7-villa-int/800/600'
    ],
    imageHint: 'luxury villa',
    specifications: {
      Structure: 'Heavy-duty steel frame with GRP composite panels',
      'Insulation': 'Enhanced thermal and acoustic insulation',
      'Area': '75 sq. m.',
      'Features': '2 Bedrooms, 2 Bathrooms, Full Kitchen, Expansive Living Room, Panoramic Windows',
    },
    applications: [
      'Primary Residences',
      'Luxury Retreats',
      'Guest Houses',
      'Exclusive Hospitality Suites',
    ],
    colors: ['Charcoal Black', 'Pearl White', 'Teak Wood Finish'],
    sizes: ['Standard E7 Model'],
    datasheetUrl: '#',
  },
];
