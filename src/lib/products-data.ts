

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
    name: 'GRP Security Cabin',
    slug: 'grp-security-cabin',
    category: 'Kiosks & Modular',
    overview: 'Secure, durable, thermally insulated GRP security cabins designed for malls, companies, commercial buildings, and residential communities.',
    imageUrls: [
        'https://images.unsplash.com/photo-1626747086393-d19a14d99e10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzZWN1cml0eSUyMGNhYmlufGVufDB8fHx8MTc2MzUyNzc2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1678737921482-6d9719b7fea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxHUlAlMjBjYWJpbnxlbnwwfHx8fDE3NjM1Mjc3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    imageHint: 'security cabin',
    specifications: {
        'Material': 'Reinforced GRP composite',
        'Visibility': 'Clear vision windows for 360° view',
        'Ventilation': 'Integrated ventilation systems',
        'Customization': 'Optional AC cut-outs and electrical wiring',
    },
    applications: [
        'Residential apartment complexes',
        'Commercial buildings and office parks',
        'Industrial facilities and factories',
        'Event venues and public spaces',
    ],
    colors: ['Standard Gray', 'Custom RAL colors'],
    sizes: ['1.5x1.5m', '2x2m', 'Custom'],
    datasheetUrl: '#',
  },
    {
    name: 'GRP Portable Toilet',
    slug: 'grp-portable-toilet',
    category: 'Specialized',
    overview: 'Monsoon-proof, hygienic, high-strength GRP toilet cabins engineered for continuous public usage. Features leak-proof one-piece construction and easy-to-clean gelcoat surfaces.',
    imageUrls: [
        'https://images.unsplash.com/photo-1759597617486-10f3dab52ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwb3J0YWJsZSUyMHRvaWxldHxlbnwwfHx8fDE3NjM1Mjc3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1604364234787-e5b5d9188a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx0b2lsZXQlMjBibG9ja3xlbnwwfHx8fDE3NjM1Mjc3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    imageHint: 'portable toilet',
    specifications: {
        'Construction': 'Leak-proof one-piece molded GRP',
        'Surface': 'Smooth, anti-bacterial gelcoat',
        'Durability': 'UV and moisture resistant',
        'Base': 'Structurally robust to withstand heavy public use',
    },
    applications: [
        'Public events and exhibitions',
        'Construction and infrastructure sites',
        'Tourism spots and pilgrimage centers',
        'Public sanitation projects',
    ],
    colors: ['Blue', 'Green', 'Gray'],
    sizes: ['Standard Single', 'Multi-Unit Blocks'],
    datasheetUrl: '#',
  },
  {
    name: 'Fire & Safety Enclosure',
    slug: 'fire-safety-enclosure',
    category: 'Specialized',
    overview:
      'Fire-rated GRP enclosures for housing safety and emergency equipment. Engineered to remain operational in high-temperature and corrosive environments, ensuring critical systems are protected.',
    imageUrls: [
        'https://images.unsplash.com/photo-1629819125301-447961b16492?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://lh3.googleusercontent.com/pw/AP1GczNydAEeadD4afouzV-k8Srj8GPWnSoG4714kIJfeUgIYW5XLAAk26VhFc9zaGSAT226oPBh3LNYjgyFTmZhQa_KjCJmpqIYboJzoS6-BBM37-gdFFQa1reZb_7sTAyibwgIvqH23zZoRpBj5XOP6FD2gQ=w1546-h870-s-no-gm?authuser=0'
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
        'https://lh3.googleusercontent.com/pw/AP1GczP6gOeYUDOeHPQtV5a-KLIpWNxXJMXhl5TYk98Moh2zWuNygWfHQvdEpzt4Sqs1yZ94RfyVfMEukBtSZmquiiuHDaZ26w4A7pchcNNL7bhbkBlRiGEsYUOSDAEUXRavg-FR3CHDGqKnMJQn7oOSqnirAg=w1546-h870-s-no-gm?authuser=0'
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
        'https://images.unsplash.com/photo-1670589953903-b4e2f17a70a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB2aWxsYXxlbnwwfHx8fDE3NjM0Mzg4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx2aWxsYSUyMGludGVyaW9yfGVufDB8fHx8MTc2MzUyNzc2N3ww&ixlib=rb-4.1.0&q=80&w=1080'
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
        'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjB2aWxsYXxlbnwwfHx8fDE3NjM0Nzc2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1694967832949-09984640b143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjB2aWxsYXxlbnwwfHx8fDE3NjM1Mjc3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080'
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
   {
    name: 'Custom GRP Fabrication',
    slug: 'custom-grp-fabrication',
    category: 'Specialized',
    overview:
      'For projects with unique dimensional, operational, or environmental requirements, EMPHZ provides end-to-end custom engineering. We design, prototype, and manufacture GRP structures tailored to your exact specifications.',
    imageUrls: [
        'https://lh3.googleusercontent.com/pw/AP1GczNdSoy-ToED9S_slbJ41r8m40VRyBj75UX6HUzGLm1w3crS4nNA1sPbkauQ5SD_aUIIT_gq9YYXcXXzJpy5OR4wPhrmyW2wkrJHcZe9DnuCfUxSY9q2dltnhXi9XGc660pplN6HxjDBMPdZb0IFUKe4Dw=w1546-h870-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczP-TM_jYqr4e7i0O369qr7NGHID_xQWDAdk5Ric5Q8R52mle7gqZMj4E8ELUDtxqNGzRrI2Koc8te93X6m2vXchDzDMX96bq0B6IAF0-wf2mLhRfE46fyFARENXgQYuHd6SU79AK03EhO1YUh5GhSfU5A=w1546-h870-s-no-gm?authuser=0'
    ],
    imageHint: 'custom fabrication',
    specifications: {
        'Process': 'Consultation, Design, Moulding, Prototyping, Production',
        'Capabilities': 'Custom mould design, specific IP ratings, reinforced structures, specialized color matching',
        'Materials': 'High-performance GRP composites tailored to application needs',
        'Collaboration': 'Direct work with client engineering teams',
    },
    applications: [
        'Bespoke architectural elements',
        'OEM component manufacturing',
        'Specially-sized industrial enclosures',
        'Unique scientific or research apparatus',
    ],
    colors: ['Any RAL color'],
    sizes: ['As per client specification'],
    datasheetUrl: '#',
  },
];
