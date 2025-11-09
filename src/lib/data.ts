import { type Product, type Project, type DownloadLink, type Lead } from '@/lib/types';

export const products: Product[] = [
  {
    id: 'grp-pipes',
    name: 'GRP Pipes',
    description: 'High-strength, corrosion-resistant GRP pipes for various industrial applications. Lightweight and durable, offering a long service life with minimal maintenance.',
    specifications: {
      'Diameter Range': 'DN 25 - DN 4000',
      'Pressure Class': 'Up to 32 bar',
      'Material': 'Glass-Reinforced Plastic (GRP)',
      'Standard': 'AWWA, ASTM, ISO'
    },
    imageUrl: 'https://picsum.photos/seed/pipes/800/600',
    imageHint: 'GRP pipes',
    category: 'Piping Solutions'
  },
  {
    id: 'grp-tanks',
    name: 'GRP Storage Tanks',
    description: 'Custom-fabricated GRP tanks for chemical storage, water treatment, and food processing. Designed for superior chemical resistance and structural integrity.',
    specifications: {
      'Capacity': 'Up to 200,000 Liters',
      'Configuration': 'Vertical, Horizontal, Underground',
      'Resin System': 'Isophthalic, Vinylester, Epoxy',
      'Temperature': 'Up to 120°C'
    },
    imageUrl: 'https://picsum.photos/seed/tank/800/600',
    imageHint: 'GRP tank',
    category: 'Storage Solutions'
  },
  {
    id: 'grp-fittings',
    name: 'GRP Fittings & Flanges',
    description: 'A complete range of GRP fittings, including elbows, tees, reducers, and flanges. Engineered for seamless integration with our GRP piping systems.',
    specifications: {
      'Type': 'Elbows, Tees, Reducers, Flanges',
      'Jointing Method': 'Butt & Wrap, Flanged, Adhesive',
      'Pressure Rating': 'Matched to pipe system',
      'Angle': '22.5°, 45°, 90°, Custom'
    },
    imageUrl: 'https://picsum.photos/seed/fittings/800/600',
    imageHint: 'GRP fittings',
    category: 'Piping Solutions'
  },
  {
    id: 'custom-molding',
    name: 'Custom GRP Molding',
    description: 'Bespoke GRP molded products designed to your exact specifications. Ideal for complex shapes, equipment covers, and architectural components.',
    specifications: {
      'Process': 'Hand Lay-up, RTM, Pultrusion',
      'Surface Finish': 'Gelcoat, Painted, Textured',
      'Fire Retardancy': 'Available upon request',
      'Application': 'Architectural, Industrial, Marine'
    },
imageUrl: 'https://picsum.photos/seed/molding/800/600',
    imageHint: 'custom molding',
    category: 'Specialty Products'
  }
];

export const projects: Project[] = [
  {
    id: 'proj-001',
    title: 'Wastewater Plant Upgrade',
    description: 'Replaced aging and corroded metal piping with a full GRP system, including tanks and pipes, to improve longevity and reduce maintenance costs for a municipal wastewater treatment facility.',
    clientType: 'Municipal Government',
    location: 'Springfield, USA',
    beforeImageUrl: 'https://picsum.photos/seed/factorybefore/800/600',
    beforeImageHint: 'old factory',
    afterImageUrl: 'https://picsum.photos/seed/factoryafter/800/600',
    afterImageHint: 'new factory'
  },
  {
    id: 'proj-002',
    title: 'Chemical Plant Expansion',
    description: 'Designed and installed custom-fabricated Vinylester GRP tanks and dual-laminate piping for a new aggressive chemical processing line. The solution ensures safety and long-term performance.',
    clientType: 'Chemical Industry',
    location: 'Port City, USA',
    beforeImageUrl: 'https://picsum.photos/seed/waterplantbefore/800/600',
    beforeImageHint: 'water plant',
    afterImageUrl: 'https://picsum.photos/seed/waterplantafter/800/600',
    afterImageHint: 'modern plant'
  }
];

export const downloads: DownloadLink[] = [
  {
    id: 'dl-01',
    title: 'Emphz Corporate Brochure',
    description: 'An overview of our company, solutions, and commitment to quality.',
    fileUrl: '#'
  },
  {
    id: 'dl-02',
    title: 'GRP Pipe Systems Data Sheet',
    description: 'Technical specifications, pressure ratings, and installation guidelines for our GRP pipes.',
    fileUrl: '#'
  },
  {
    id: 'dl-03',
title: 'GRP Tank Solutions Data Sheet',
    description: 'Details on our storage tank capabilities, resin systems, and available configurations.',
    fileUrl: '#'
  },
  {
    id: 'dl-04',
    title: 'Chemical Resistance Guide',
    description: 'A comprehensive guide to the performance of our GRP products with various chemicals.',
    fileUrl: '#'
  }
];

export const leads: Lead[] = [
  {
    id: 'lead-001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'ACME Inc.',
    inquiry: 'We are looking for a quote on 500m of DN 300 GRP pipe for a water project.',
    submittedAt: new Date('2023-10-26T10:00:00Z'),
    category: 'New Product Interest',
    priority: 'high',
    notes: 'Potential large order. Follow up immediately.'
  },
  {
    id: 'lead-002',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    company: 'Tech Solutions',
    inquiry: 'We have an existing GRP tank that needs repair. Do you offer maintenance services?',
    submittedAt: new Date('2023-10-25T14:30:00Z'),
    category: 'Technical Support',
    priority: 'medium',
    notes: 'Existing GRP user. Opportunity to build relationship and offer other services.'
  },
];
