import { Product, CaseStudy, Enquiry, Solution, BlogPost } from '../types';

const products: Product[] = [
  {
    id: 1, name: 'GRP Single-Door Enclosure', slug: 'single-door', categoryId: 1, categoryName: 'Enclosures',
    summary: 'Compact IP66 enclosure for control & instrumentation; non-conductive and UV-stable.',
    description: 'Our single-door GRP enclosures offer superior protection for sensitive equipment in harsh environments. Made from high-strength Sheet Molding Compound (SMC), they are ideal for industrial automation, utility metering, and telecommunications.',
    tags: ["IP66", "UL94 V-0", "RAL7035", "SS304"],
    specs: { Material: 'GRP (SMC)', Protection: 'IP66 (IEC 60529)', 'Fire Rating': 'UL 94 V-0', Colour: 'RAL7035', 'Temp Range': '–40°C to +120°C', 'Mounting': 'Wall/Pole/Floor' },
    imageUrls: ['https://picsum.photos/seed/product1/800/600', 'https://picsum.photos/seed/product1_detail/800/600'],
    pdfUrls: [{ title: 'Datasheet', url: '#' }, { title: 'Installation Guide', url: '#' }],
    isFeatured: true, createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: 2, name: 'GRP Double-Door Enclosure', slug: 'double-door', categoryId: 1, categoryName: 'Enclosures',
    summary: 'Large MCC/distribution cabinet with reinforced doors & SS hardware.',
    description: 'Designed for motor control centers, power distribution units, and large-scale automation, these double-door cabinets provide ample space and robust protection. Reinforced structure and multi-point locking ensure security and durability.',
    tags: ["IP65", "UL94 V-0", "RAL7035"],
    specs: { Material: 'GRP (SMC)', Protection: 'IP65', 'Fire Rating': 'UL 94 V-0', Colour: 'RAL7035', 'Temp Range': '–40°C to +120°C', 'Hardware': 'SS316' },
    imageUrls: ['https://picsum.photos/seed/product2/800/600'],
    pdfUrls: [{ title: 'Datasheet', url: '#' }],
    isFeatured: true, createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: 3, name: 'Feeder Pillars / Distribution Boxes', slug: 'feeder-pillar', categoryId: 5, categoryName: 'Utilities',
    summary: 'Utility-spec, tamper-proof outdoor power pillars.',
    description: 'Our feeder pillars are engineered for public and private utility networks, offering a safe, secure, and weather-resistant housing for electrical distribution equipment. They are DISCOM-ready and feature tamper-resistant designs.',
    tags: ["IP55", "Utility Grade", "Anti-Corrosion"],
    specs: { Material: 'GRP (SMC)', Protection: 'IP55', 'Impact Resistance': 'IK10', Colour: 'RAL7035 / Green', 'Locking': 'Utility Triangle Lock' },
    imageUrls: ['https://picsum.photos/seed/product3/800/600'],
    pdfUrls: [{ title: 'Datasheet', url: '#' }],
    isFeatured: true, createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: 4, name: 'Security Guard Cabins', slug: 'guard-cabin', categoryId: 2, categoryName: 'Kiosks',
    summary: 'Insulated, relocatable; 1×1.2 m to 3×3 m.',
    description: 'Prefabricated GRP security cabins provide a comfortable and secure environment for personnel. Insulated panels offer thermal and acoustic comfort, and the lightweight design allows for easy relocation.',
    tags: ["Insulated", "Portable", "Weatherproof"],
    specs: { 'Panel': 'PUF Insulated GRP', 'Standard Sizes': '1.2x1.2m, 1.5x1.5m, 2x2m', 'Features': 'Integrated wiring, windows, desk', 'Base': 'MS/GRP Frame' },
    imageUrls: ['https://picsum.photos/seed/product4/800/600'],
    pdfUrls: [{ title: 'Brochure', url: '#' }],
    isFeatured: true, createdAt: new Date(), updatedAt: new Date(),
  },
    {
    id: 5, name: 'Junction & Instrument Boxes', slug: 'junction-instrument', categoryId: 1, categoryName: 'Enclosures',
    summary: 'Sealed terminal/instrument housings; hinged or screw-lid variants.',
    description: 'Protect critical wiring junctions and field instruments with our range of GRP boxes. Available in various sizes with hinged or screw-down lids, they provide IP67 protection against dust and water ingress.',
    tags: ["IP67", "UL94 V-0", "Corrosion-Proof"],
    specs: { Material: 'GRP (SMC/DMC)', Protection: 'IP67', 'Fire Rating': 'UL 94 V-0', 'Gasket': 'EPDM/Neoprene', 'Lid': 'Hinged or Screw-lid' },
    imageUrls: ['https://picsum.photos/seed/product5/800/600'],
    pdfUrls: [{ title: 'Datasheet', url: '#' }],
    isFeatured: true, createdAt: new Date(), updatedAt: new Date(),
  },
   {
    id: 6, name: 'Prefab GRP Villas', slug: 'prefab-villa', categoryId: 4, categoryName: 'Housing',
    summary: 'Energy-efficient modular homes from studio to 3-BHK.',
    description: 'Revolutionizing housing with rapid-deployment GRP villas. These modular structures are energy-efficient, fire-retardant, and built to last, offering a sustainable and quick alternative to traditional construction.',
    tags: ["Modular", "Energy-Efficient", "Rapid Deployment"],
    specs: { 'Structure': 'GRP Composite Panels', 'Insulation': 'PUF/EPS Core', 'Configurations': 'Studio, 1-BHK, 2-BHK, 3-BHK', 'Lifespan': '50+ Years' },
    imageUrls: ['https://picsum.photos/seed/product6/800/600'],
    pdfUrls: [{ title: 'Brochure', url: '#' }],
    isFeatured: true, createdAt: new Date(), updatedAt: new Date(),
  },
];

const caseStudies: CaseStudy[] = [
  {
    id: 1, client: 'Qatar Electricity & Water', title: 'Custom IP66 Enclosures for Harsh Desert Climate', industry: 'Utilities',
    challenge: 'Extreme temperatures, dust, and UV exposure were causing frequent failures in existing metallic enclosures, leading to significant grid downtime.',
    solution: 'EMPHZ designed and supplied custom-sized GRP enclosures with IP66 rating, UV-resistant coating, and a thermal management system.',
    result: '30% reduction in equipment failure and associated downtime.',
    imageUrl: 'https://picsum.photos/seed/case1/800/600', createdAt: new Date(),
  },
  {
    id: 2, client: 'Kochi Metro Rail', title: 'Integrated GRP Kiosks for Ticketing & Comms', industry: 'Infrastructure',
    challenge: 'Required durable, low-maintenance kiosks for outdoor ticketing and communication systems, resistant to high humidity and public vandalism.',
    solution: 'Developed all-in-one GRP kiosks with integrated AC, electrical wiring, and reinforced structures. The non-corrosive material was ideal for the coastal climate.',
    result: 'Zero maintenance reported in the first 3 years of operation.',
    imageUrl: 'https://picsum.photos/seed/case2/800/600', createdAt: new Date(),
  },
  {
    id: 3, client: 'Tata Power Solar', title: 'UV-Stabilized Enclosures for Solar Inverters', industry: 'Renewable Energy',
    challenge: 'Standard enclosures were degrading under constant, intense solar radiation in large-scale solar farms, compromising inverter lifespan.',
    solution: 'EMPHZ provided GRP enclosures manufactured with a specialized UV-stabilized resin and a protective gel-coat finish.',
    result: 'Projected 25% increase in the operational lifespan of inverter systems.',
    imageUrl: 'https://picsum.photos/seed/case3/800/600', createdAt: new Date(),
  },
];

const solutions: Solution[] = [
    {
        slug: 'electrical-utilities',
        name: 'Electrical & Utilities',
        problem: 'Public and industrial electrical infrastructure faces constant threats from corrosion, water ingress, and safety hazards, leading to costly downtime and maintenance.',
        approach: 'Our approach is to replace vulnerable traditional materials with high-performance GRP composites that provide superior insulation, environmental sealing (IP-rated), and corrosion resistance, ensuring long-term operational reliability.',
        outcomes: ['Enhanced safety due to non-conductive properties', 'Reduced maintenance costs from corrosion resistance', 'Improved equipment lifespan with IP66 weatherproofing'],
        products: ['double-door', 'feeder-pillar', 'junction-instrument'],
        caseStudies: ['Qatar Electricity & Water']
    },
    {
        slug: 'renewable-energy',
        name: 'Renewable Energy',
        problem: 'Solar and wind energy assets are exposed to extreme environmental conditions, particularly UV radiation and wide temperature fluctuations, which can degrade enclosures and affect performance.',
        approach: 'We engineer GRP solutions with enhanced UV and thermal stability, such as solar combiner boxes and battery cabinets, designed to protect sensitive components and maximize the longevity of renewable energy investments.',
        outcomes: ['Increased asset lifespan with UV-stabilized materials', 'Improved thermal management for batteries and inverters', 'Arc-safe designs for enhanced PV system safety'],
        products: ['solar-combiner', 'battery-cabinet'],
        caseStudies: ['Tata Power Solar']
    }
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Composite Infrastructure',
    slug: 'future-of-composite-infrastructure',
    excerpt: 'Exploring how GRP and other composites are set to revolutionize construction, energy, and public works with their superior strength-to-weight ratio and longevity.',
    content: "The 21st century demands infrastructure that is not only robust but also sustainable and quick to deploy. Traditional materials like steel and concrete, while reliable, come with significant drawbacks in terms of weight, corrosion, and carbon footprint. This is where Glass Reinforced Plastic (GRP) and other advanced composites are stepping in to fill the gap. From rebar to entire bridge decks, composites offer a compelling alternative that promises a longer service life with minimal maintenance. At EMPHZ, we are at the forefront of this revolution, engineering composite solutions that are lighter, stronger, and more environmentally friendly. Our research indicates that the lifecycle cost of GRP infrastructure can be up to 40% lower than its steel counterpart, primarily due to the elimination of corrosion-related maintenance. The future is not just built; it's molded.",
    author: 'Muhammed Muneer A H',
    coverUrl: 'https://picsum.photos/seed/blog1/800/600',
    published: true,
    publishedAt: new Date('2023-10-26'),
    createdAt: new Date('2023-10-26'),
  },
  {
    id: 2,
    title: 'Steel vs GRP — Lifecycle Cost Comparison',
    slug: 'steel-vs-grp-lifecycle-cost',
    excerpt: 'A deep dive into the total cost of ownership for GRP versus traditional steel in industrial applications, considering installation, maintenance, and lifespan.',
    content: "When selecting materials for industrial enclosures or structural components, the initial purchase price is often the primary focus. However, this overlooks the total cost of ownership (TCO), which includes installation, maintenance, and replacement costs over the asset's lifespan. Steel, while initially cheaper, requires regular painting and treatment to prevent rust, especially in corrosive environments. It is also heavy, leading to higher transportation and installation costs. GRP, on the other hand, is inherently corrosion-resistant, lightweight, and requires virtually no maintenance. Our analysis, based on a 20-year TCO model for a typical coastal chemical plant, shows that GRP enclosures become more cost-effective than stainless steel enclosures after just 7 years. The initial investment pays dividends through decades of worry-free operation.",
    author: 'Assainar Thevaroth',
    coverUrl: 'https://picsum.photos/seed/blog2/800/600',
    published: true,
    publishedAt: new Date('2023-11-15'),
    createdAt: new Date('2023-11-15'),
  },
  {
    id: 3,
    title: 'Sustainability in Manufacturing — EMPHZ’s Carbon-Neutral Approach',
    slug: 'sustainability-in-manufacturing',
    excerpt: 'Learn how EMPHZ is integrating sustainable practices, from using recyclable cores to optimizing our automated SMC molding process for minimal waste.',
    content: "Sustainability is no longer a buzzword; it's a core business imperative. At EMPHZ, we are committed to minimizing our environmental impact throughout our manufacturing lifecycle. Our GRP products have a lower embodied carbon footprint compared to steel and aluminum. We are continuously innovating, incorporating recyclable core materials and optimizing our closed-molding processes to drastically reduce VOC emissions and material waste. Our Mysore factory is partially powered by solar energy, and we have implemented a comprehensive water recycling program. Our goal is to achieve carbon-neutral operations by 2030, proving that high-performance engineering and environmental stewardship can, and must, go hand in hand.",
    author: 'Muhammed Rashik P',
    coverUrl: 'https://picsum.photos/seed/blog3/800/600',
    published: false,
    createdAt: new Date('2023-12-01'),
  },
];

let enquiries: Enquiry[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', company: 'Example Corp', message: 'Need a quote for 10 single-door enclosures.', status: 'New', createdAt: new Date() },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', company: 'Test Inc.', message: 'Information about security cabins.', status: 'In Progress', createdAt: new Date() },
];

export const getProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => setTimeout(() => resolve(products), 500));
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => setTimeout(() => resolve(products.filter(p => p.isFeatured)), 500));
};

export const getProductBySlug = async (slug: string): Promise<Product | undefined> => {
  return new Promise(resolve => setTimeout(() => resolve(products.find(p => p.slug === slug)), 500));
};

export const getCaseStudies = async (): Promise<CaseStudy[]> => {
  return new Promise(resolve => setTimeout(() => resolve(caseStudies), 500));
};

export const getSolutions = async (): Promise<Solution[]> => {
  return new Promise(resolve => setTimeout(() => resolve(solutions), 500));
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
    return new Promise(resolve => setTimeout(() => resolve(blogPosts), 500));
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
    return new Promise(resolve => setTimeout(() => resolve(blogPosts.find(p => p.slug === slug)), 500));
};

export const getEnquiries = async (): Promise<Enquiry[]> => {
    return new Promise(resolve => setTimeout(() => resolve(enquiries), 500));
};

export const addEnquiry = async (enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>): Promise<Enquiry> => {
    const newEnquiry: Enquiry = {
        ...enquiry,
        id: enquiries.length + 1,
        createdAt: new Date(),
        status: 'New',
    };
    enquiries.push(newEnquiry);
    // In a real app, this would also trigger sending emails.
    console.log("Simulating email to admin and user for new enquiry:", newEnquiry);
    return new Promise(resolve => setTimeout(() => resolve(newEnquiry), 500));
};