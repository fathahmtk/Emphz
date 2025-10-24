import { Product, CaseStudy, Enquiry, Solution, BlogPost, Download, Quotation, Customer, User, Role, Testimonial } from '../types';

let products: Product[] = [
  {
    id: 1, name: 'GRP Single-Door Enclosure', slug: 'single-door', categoryId: 1, categoryName: 'Enclosures',
    summary: 'Compact IP66 enclosure for control & instrumentation; non-conductive and UV-stable.',
    description: 'Our single-door GRP enclosures offer superior protection for sensitive equipment in harsh environments. Made from high-strength Sheet Molding Compound (SMC), they are ideal for industrial automation, utility metering, and telecommunications.',
    tags: ["IP66", "UL94 V-0", "RAL7035", "SS304"],
    specs: { Material: 'GRP (SMC)', Protection: 'IP66 (IEC 60529)', 'Fire Rating': 'UL 94 V-0', Colour: 'RAL7035', 'Temp Range': '–40°C to +120°C', 'Mounting': 'Wall/Pole/Floor' },
    imageUrls: [
        { view: 'front', url: 'https://dl.dropboxusercontent.com/scl/fi/qw4y5jznrfkjlvrrsu5z3/Emphz-GRP-Single-door-enclosure.png?rlkey=xiy2y9bmobq14losztoeipgcz&st=75a40qw3' },
        { view: 'internal', url: 'https://dl.dropboxusercontent.com/scl/fi/r42j664ik0qzwgk6b98zy/Emphz-GRP-Single-door-enclosure-Open.png?rlkey=4szqk2rqkbinm2wq4e9zr9288&dl=0' },
        { view: 'side', url: 'https://images.unsplash.com/photo-1616628188583-df2bf52c35a7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' }
    ],
    pdfUrls: [{ title: 'Technical Data Sheet', url: '#' }, { title: 'Installation Guide', url: '#' }],
    isFeatured: true, createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: 2, name: 'GRP Double-Door Enclosure', slug: 'double-door', categoryId: 1, categoryName: 'Enclosures',
    summary: 'Large MCC/distribution cabinet with reinforced doors & SS hardware.',
    description: 'Designed for motor control centers, power distribution units, and large-scale automation, these double-door cabinets provide ample space and robust protection. Reinforced structure and multi-point locking ensure security and durability.',
    tags: ["IP65", "UL94 V-0", "RAL7035"],
    specs: { Material: 'GRP (SMC)', Protection: 'IP65', 'Fire Rating': 'UL 94 V-0', Colour: 'RAL7035', 'Temp Range': '–40°C to +120°C', 'Hardware': 'SS316' },
    imageUrls: [
        { view: 'front', url: 'https://dl.dropboxusercontent.com/scl/fi/rdjc4ppeb575uu4jzp9sw/Emphz-GRP-Electrical-Enclosures.png?rlkey=qk70gdenb7dhcxyajkerv4q0o&st=65tg7laa' },
        { view: 'internal', url: 'https://images.unsplash.com/photo-1621905252507-b25492cc269a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' },
    ],
    pdfUrls: [{ title: 'Technical Data Sheet', url: '#' }],
    isFeatured: true, createdAt: new Date(), updatedAt: new Date(),
  },
   {
    id: 5, name: 'Junction & Instrument Boxes', slug: 'junction-instrument', categoryId: 1, categoryName: 'Enclosures',
    summary: 'Sealed terminal/instrument housings; hinged or screw-lid variants.',
    description: 'Protect critical wiring junctions and field instruments with our range of GRP boxes. Available in various sizes with hinged or screw-down lids, they provide IP67 protection against dust and water ingress.',
    tags: ["IP67", "UL94 V-0", "Corrosion-Proof"],
    specs: { Material: 'GRP (SMC/DMC)', Protection: 'IP67', 'Fire Rating': 'UL 94 V-0', 'Gasket': 'EPDM/Neoprene', 'Lid': 'Hinged or Screw-lid' },
    imageUrls: [
        { view: 'front', url: 'https://images.unsplash.com/photo-1621905252507-b25492cc269a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' },
    ],
    pdfUrls: [{ title: 'Technical Data Sheet', url: '#' }],
    isFeatured: false, createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: 3, name: 'Feeder Pillars / Distribution Boxes', slug: 'feeder-pillar', categoryId: 5, categoryName: 'Utilities',
    summary: 'Utility-spec, tamper-proof outdoor power pillars.',
    description: 'Our feeder pillars are engineered for public and private utility networks, offering a safe, secure, and weather-resistant housing for electrical distribution equipment. They are DISCOM-ready and feature tamper-resistant designs.',
    tags: ["IP55", "Utility Grade", "Anti-Corrosion"],
    specs: { Material: 'GRP (SMC)', Protection: 'IP55', 'Impact Resistance': 'IK10', Colour: 'RAL7035 / Green', 'Locking': 'Utility Triangle Lock' },
    imageUrls: [
        { view: 'front', url: 'https://images.unsplash.com/photo-1617044618715-3b76435c592a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' },
    ],
    pdfUrls: [{ title: 'Technical Data Sheet', url: '#' }],
    isFeatured: true, createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: 9, name: 'Solar Combiner Box', slug: 'solar-combiner', categoryId: 5, categoryName: 'Utilities',
    summary: 'IP67 rated enclosures for PV string protection and consolidation.',
    description: 'Essential for large-scale solar farms, our GRP solar combiner boxes protect fuses and monitoring equipment from harsh outdoor conditions, ensuring maximum solar plant efficiency and safety.',
    tags: ["IP67", "Solar", "UV-Resistant"],
    specs: { 'Material': 'GRP (SMC)', Protection: 'IP67', 'DC Voltage': 'Up to 1500V DC', 'Features': 'Fuse holders, DC disconnect, surge protection' },
    imageUrls: [
        { view: 'front', url: 'https://images.unsplash.com/photo-1545208942-731c6f13de18?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' },
    ],
    pdfUrls: [{ title: 'Technical Data Sheet', url: '#' }],
    isFeatured: false, createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: 10, name: 'GRP Battery Cabinet', slug: 'battery-cabinet', categoryId: 5, categoryName: 'Utilities',
    summary: 'Thermally managed enclosures for battery energy storage systems (BESS).',
    description: 'Protect your critical battery investments with our GRP battery cabinets. Featuring options for thermal management, ventilation, and fire suppression, these cabinets are designed to optimize battery life and ensure safe operation in utility-scale BESS applications.',
    tags: ["IP65", "BESS", "Thermal Management"],
    specs: { 'Material': 'GRP (SMC)', Protection: 'IP65', 'Insulation': 'PUF Core', 'Cooling': 'Optional AC/Fan', 'Fire Safety': 'Optional Suppression System' },
    imageUrls: [
        { view: 'front', url: 'https://images.unsplash.com/photo-1629102980834-8d4517b55f8d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' },
    ],
    pdfUrls: [{ title: 'Technical Data Sheet', url: '#' }],
    isFeatured: false, createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: 4, name: 'Security Guard Cabins', slug: 'guard-cabin', categoryId: 2, categoryName: 'Kiosks',
    summary: 'Insulated, relocatable; 1×1.2 m to 3×3 m.',
    description: 'Prefabricated GRP security cabins provide a comfortable and secure environment for personnel. Insulated panels offer thermal and acoustic comfort, and the lightweight design allows for easy relocation.',
    tags: ["Insulated", "Portable", "Weatherproof"],
    specs: { 'Panel': 'PUF Insulated GRP', 'Standard Sizes': '1.2x1.2m, 1.5x1.5m, 2x2m', 'Features': 'Integrated wiring, windows, desk', 'Base': 'MS/GRP Frame' },
    imageUrls: [
        { view: 'front', url: 'https://dl.dropboxusercontent.com/scl/fi/n8oehkcdl285y302ceg0s/Emphz-GRP-Security-Cabin.png?rlkey=bf6eiom7iyw8nrtivddb8jdz9&dl=0' },
        { view: 'side', url: 'https://images.unsplash.com/photo-1517495306984-f84210f9daa8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' },
    ],
    pdfUrls: [{ title: 'Technical Data Sheet', url: '#' }, { title: 'Brochure', url: '#' }],
    isFeatured: true, createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: 7, name: 'Toll Booth Kiosk', slug: 'toll-booth-kiosk', categoryId: 2, categoryName: 'Kiosks',
    summary: 'Ergonomic, weatherproof toll booths with integrated systems.',
    description: 'Designed for high-traffic environments, our GRP toll booths offer durability and operator comfort. They come pre-wired with provisions for toll collection systems, ventilation, and lighting.',
    tags: ["Weatherproof", "Ergonomic", "Integrated"],
    specs: { 'Material': 'GRP Composite', 'Window': 'Toughened Glass', 'Features': 'AC provision, counter, wiring', 'Base': 'MS Frame' },
    imageUrls: [
        { view: 'front', url: 'https://images.unsplash.com/photo-1569951428232-a4a34b3e813f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=800&fit=crop' },
    ],
    pdfUrls: [{ title: 'Technical Data Sheet', url: '#' }],
    isFeatured: false, createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: 11, name: 'GRP Food Kiosk', slug: 'food-kiosk', categoryId: 2, categoryName: 'Kiosks',
    summary: 'Customizable, hygienic, and durable food kiosks for indoor and outdoor use.',
    description: 'Our GRP food kiosks are the perfect solution for food vendors, offering a clean, weather-resistant, and low-maintenance setup. The modular design allows for rapid deployment and customization to fit specific branding and equipment needs.',
    tags: ["Hygienic", "Modular", "Customizable"],
    specs: { 'Material': 'GRP Composite', 'Countertop': 'Food-grade SS304', 'Features': 'Integrated plumbing & wiring, branding space', 'Base': 'MS Frame' },
    imageUrls: [
        { view: 'front', url: 'https://dl.dropboxusercontent.com/scl/fi/5wh2pvyqxhum4c9ox56vf/Emphz-GRP-Food-Kiosk.png?rlkey=cbj4j22gfwyww5uzjprm1zsm3&dl=0' },
    ],
    pdfUrls: [{ title: 'Brochure', url: '#' }],
    isFeatured: true, createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: 6, name: 'Prefab GRP Villas', slug: 'prefab-villa', categoryId: 4, categoryName: 'Housing',
    summary: 'Energy-efficient modular homes from studio to 3-BHK.',
    description: 'Revolutionizing housing with rapid-deployment GRP villas. These modular structures are energy-efficient, fire-retardant, and built to last, offering a sustainable and quick alternative to traditional construction.',
    tags: ["Modular", "Energy-Efficient", "Rapid Deployment"],
    specs: { 'Structure': 'GRP Composite Panels', 'Insulation': 'PUF/EPS Core', 'Configurations': 'Studio, 1-BHK, 2-BHK, 3-BHK', 'Lifespan': '50+ Years' },
    imageUrls: [
        { view: 'front', url: 'https://dl.dropboxusercontent.com/scl/fi/5lu0674nt2lsvtsc1nvda/Emphz-GRP-Modular-Villa.png?rlkey=7lt8i2dbzj6lyuer8fkm1wigm&st=irrjs3xf&dl=0' },
    ],
    pdfUrls: [{ title: 'Brochure', url: '#' }],
    isFeatured: true, createdAt: new Date(), updatedAt: new Date(),
  },
  {
    id: 8, name: 'Modular Toilet Block', slug: 'modular-toilet-block', categoryId: 4, categoryName: 'Housing',
    summary: 'Hygienic and durable public sanitation units.',
    description: 'Our prefabricated GRP toilet blocks are a quick and hygienic solution for public and industrial sanitation needs. They are easy to clean, resistant to vandalism, and can be deployed rapidly.',
    tags: ["Sanitation", "Modular", "Hygienic"],
    specs: { 'Structure': 'GRP Panels', 'Fittings': 'Standard sanitary ware', 'Plumbing': 'Pre-plumbed', 'Sizes': '2-seater, 4-seater, custom' },
    imageUrls: [
        { view: 'front', url: 'https://dl.dropboxusercontent.com/scl/fi/vlwpfxt3fm5c69716bala/Emphz-GRP-Portable-Toilet.png?rlkey=g1x6sp9m1j2tqufl2l4najz1j&dl=0' },
    ],
    pdfUrls: [{ title: 'Technical Data Sheet', url: '#' }],
    isFeatured: false, createdAt: new Date(), updatedAt: new Date(),
  },
];

const productCategories = [
    { id: 1, name: 'Enclosures' },
    { id: 2, name: 'Kiosks' },
    { id: 3, name: 'Structural' },
    { id: 4, name: 'Housing' },
    { id: 5, name: 'Utilities' },
];

let caseStudies: CaseStudy[] = [
  {
    id: 1, client: 'Qatar Electricity & Water', title: 'Reducing Downtime by 30% with EMPHZ GRP Feeder Pillars', industry: 'Utilities',
    challenge: 'Extreme temperatures, dust, and UV exposure were causing frequent failures in existing metallic enclosures, leading to significant grid downtime.',
    solution: 'EMPHZ designed and supplied custom-sized GRP enclosures with IP66 rating, UV-resistant coating, and a thermal management system.',
    result: '30% reduction in equipment failure and associated downtime.',
    imageUrl: 'https://images.unsplash.com/photo-1506729623306-b47218a29a3a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop', createdAt: new Date(),
  },
  {
    id: 2, client: 'Kochi Metro Rail', title: 'Weatherproof GRP Kiosks Engineered for Kochi Metro', industry: 'Infrastructure',
    challenge: 'Required durable, low-maintenance kiosks for outdoor ticketing and communication systems, resistant to high humidity and public vandalism.',
    solution: 'Developed all-in-one GRP kiosks with integrated AC, electrical wiring, and reinforced structures. The non-corrosive material was ideal for the coastal climate.',
    result: 'Zero maintenance reported in the first 3 years of operation.',
    imageUrl: 'https://images.unsplash.com/photo-1616423642340-2735d4528135?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop', createdAt: new Date(),
  },
  {
    id: 3, client: 'Tata Power Solar', title: 'EMPHZ GRP Cabinets Extending Solar Equipment Lifespan', industry: 'Renewable Energy',
    challenge: 'Standard enclosures were degrading under constant, intense solar radiation in large-scale solar farms, compromising inverter lifespan.',
    solution: 'EMPHZ provided GRP enclosures manufactured with a specialized UV-stabilized resin and a protective gel-coat finish.',
    result: 'Projected 25% increase in the operational lifespan of inverter systems.',
    imageUrl: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop', createdAt: new Date(),
  },
];

let solutions: Solution[] = [
    {
        slug: 'electrical-utilities',
        name: 'Electrical & Utilities',
        problem: 'Public and industrial electrical infrastructure faces constant threats from corrosion, water ingress, and safety hazards, leading to costly downtime and maintenance.',
        approach: 'Our approach is to replace vulnerable traditional materials with high-performance GRP composites that provide superior insulation, environmental sealing (IP-rated), and corrosion resistance, ensuring long-term operational reliability.',
        outcomes: ['Enhanced safety due to non-conductive properties', 'Reduced maintenance costs from corrosion resistance', 'Improved equipment lifespan with IP66 weatherproofing'],
        products: ['double-door', 'feeder-pillar', 'junction-instrument'],
        caseStudies: ['Reducing Downtime by 30% with EMPHZ GRP Feeder Pillars']
    },
    {
        slug: 'renewable-energy',
        name: 'Renewable Energy',
        problem: 'Solar and wind energy assets are exposed to extreme environmental conditions, particularly UV radiation and wide temperature fluctuations, which can degrade enclosures and affect performance.',
        approach: 'We engineer GRP solutions with enhanced UV and thermal stability, such as solar combiner boxes and battery cabinets, designed to protect sensitive components and maximize the longevity of renewable energy investments.',
        outcomes: ['Increased asset lifespan with UV-stabilized materials', 'Improved thermal management for batteries and inverters', 'Arc-safe designs for enhanced PV system safety'],
        products: ['solar-combiner', 'battery-cabinet'],
        caseStudies: ['EMPHZ GRP Cabinets Extending Solar Equipment Lifespan']
    },
    {
        slug: 'infrastructure-transit',
        name: 'Infrastructure & Transit',
        problem: 'Public infrastructure like highways and metro systems requires durable, low-maintenance, and vandal-resistant structures for operations and security.',
        approach: 'We provide prefabricated GRP kiosks and cabins that are weatherproof, insulated, and can be rapidly deployed. Their non-corrosive nature ensures a long service life in high-traffic urban environments.',
        outcomes: ['Rapid deployment for faster project completion', 'Reduced lifetime maintenance costs', 'Enhanced comfort and safety for personnel'],
        products: ['toll-booth-kiosk', 'guard-cabin', 'modular-toilet-block'],
        caseStudies: ['Weatherproof GRP Kiosks Engineered for Kochi Metro']
    },
    {
        slug: 'telecommunications',
        name: 'Telecommunications',
        problem: 'Sensitive telecom equipment, especially for 5G networks, needs optimal protection from weather and unauthorized access in remote or exposed locations.',
        approach: 'Our IP66 and IP67 rated GRP enclosures and junction boxes offer superior protection against dust and water ingress. Their non-conductive properties also prevent signal interference, ensuring network reliability.',
        outcomes: ['Maximized network uptime with reliable equipment protection', 'Prevention of signal interference', 'Secure housing for remote 4G/5G hardware'],
        products: ['single-door', 'junction-instrument'],
        caseStudies: []
    }
];

let blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Science Behind EMPHZ GRP: Built to Last a Lifetime',
    slug: 'science-behind-emphz-grp',
    excerpt: 'Exploring how GRP and other composites are set to revolutionize construction, energy, and public works with their superior strength-to-weight ratio and longevity.',
    content: "The 21st century demands infrastructure that is not only robust but also sustainable and quick to deploy. Traditional materials like steel and concrete, while reliable, come with significant drawbacks in terms of weight, corrosion, and carbon footprint. This is where Glass Reinforced Plastic (GRP) and other advanced composites are stepping in to fill the gap. From rebar to entire bridge decks, composites offer a compelling alternative that promises a longer service life with minimal maintenance. At EMPHZ, we are at the forefront of this revolution, engineering composite solutions that are lighter, stronger, and more environmentally friendly. Our research indicates that the lifecycle cost of GRP infrastructure can be up to 40% lower than its steel counterpart, primarily due to the elimination of corrosion-related maintenance. The future is not just built; it's molded.",
    author: 'Muhammed Muneer A H',
    coverUrl: 'https://images.unsplash.com/photo-1519757043432-3a3fad7f5a04?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop',
    published: true,
    publishedAt: new Date('2023-10-26'),
    createdAt: new Date('2023-10-26'),
  },
  {
    id: 2,
    title: 'Why EMPHZ GRP Outperforms Metal in Every Way',
    slug: 'steel-vs-grp-lifecycle-cost',
    excerpt: 'A deep dive into the total cost of ownership for GRP versus traditional steel in industrial applications, considering installation, maintenance, and lifespan.',
    content: "When selecting materials for industrial enclosures or structural components, the initial purchase price is often the primary focus. However, this overlooks the total cost of ownership (TCO), which includes installation, maintenance, and replacement costs over the asset's lifespan. Steel, while initially cheaper, requires regular painting and treatment to prevent rust, especially in corrosive environments. It is also heavy, leading to higher transportation and installation costs. GRP, on the other hand, is inherently corrosion-resistant, lightweight, and requires virtually no maintenance. Our analysis, based on a 20-year TCO model for a typical coastal chemical plant, shows that GRP enclosures become more cost-effective than stainless steel enclosures after just 7 years. The initial investment pays dividends through decades of worry-free operation.",
    author: 'Assainar Thevaroth',
    coverUrl: 'https://images.unsplash.com/photo-1567942714540-91a110dba41e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop',
    published: true,
    publishedAt: new Date('2023-11-15'),
    createdAt: new Date('2023-11-15'),
  },
  {
    id: 3,
    title: 'How EMPHZ GRP Helps Build a Carbon-Neutral Future',
    slug: 'sustainability-in-manufacturing',
    excerpt: 'Learn how EMPHZ is integrating sustainable practices, from using recyclable cores to optimizing our automated SMC molding process for minimal waste.',
    content: "Sustainability is no longer a buzzword; it's a core business imperative. At EMPHZ, we are committed to minimizing our environmental impact throughout our manufacturing lifecycle. Our GRP products have a lower embodied carbon footprint compared to steel and aluminum. We are continuously innovating, incorporating recyclable core materials and optimizing our closed-molding processes to drastically reduce VOC emissions and material waste. Our Mysore factory is partially powered by solar energy, and we have implemented a comprehensive water recycling program. Our goal is to achieve carbon-neutral operations by 2030, proving that high-performance engineering and environmental stewardship can, and must, go hand in hand.",
    author: 'Muhammed Rashik P',
    coverUrl: 'https://images.unsplash.com/photo-1592398231248-9366113b2fab?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop',
    published: true,
    publishedAt: new Date('2023-12-01'),
    createdAt: new Date('2023-12-01'),
  },
  {
    id: 4,
    title: 'EMPHZ GRP Enclosures Powering India’s Smart Infrastructure',
    slug: 'grp-enclosures-smart-infrastructure',
    excerpt: 'A look into how EMPHZ GRP enclosures are becoming the backbone of smart city projects, protecting critical electronics for traffic management, public Wi-Fi, and surveillance systems.',
    content: "India's push towards smart cities requires a robust and reliable infrastructure. At the heart of these systems are sensitive electronic components that need maximum protection. EMPHZ GRP enclosures provide the ideal solution, offering IP66-rated protection against dust and water, superior thermal insulation, and resistance to vandalism. Unlike metal boxes, our GRP enclosures do not interfere with RF signals, making them perfect for housing communication equipment for public Wi-Fi and 5G networks. From Jaipur to Bangalore, EMPHZ is providing the unseen, yet critical, foundation for a smarter, more connected India.",
    author: 'Jithin',
    coverUrl: 'https://images.unsplash.com/photo-1599375839933-c40c8f5215f9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop',
    published: true,
    publishedAt: new Date('2024-01-10'),
    createdAt: new Date('2024-01-10'),
  },
   {
    id: 5,
    title: 'From Kerala to the World — EMPHZ Global GRP Solutions',
    slug: 'kerala-to-the-world-export',
    excerpt: 'Discover the journey of EMPHZ from its roots in Vadakara, Kerala, to becoming a trusted exporter of high-quality GRP solutions to the GCC and African markets.',
    content: "EMPHZ Global began with a simple vision in Kerala: to create world-class composite products. Today, that vision has crossed borders. Our commitment to international standards like IEC and UL, combined with our ability to engineer solutions for diverse climates, has made us a preferred partner for projects in the GCC, Africa, and parts of Europe. This post explores our export journey, the logistical challenges we've overcome, and how our 'Made in India' GRP products are competing and winning on a global stage. It's a story of quality, innovation, and the relentless pursuit of engineering excellence.",
    author: 'Muhammed Rafeeque',
    coverUrl: 'https://images.unsplash.com/photo-1588195538326-c5e1e9f80a1b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop',
    published: true,
    publishedAt: new Date('2024-02-22'),
    createdAt: new Date('2024-02-22'),
  },
];

let downloads: Download[] = [
    { id: 1, title: 'EMPHZ GRP Enclosures – The Benchmark in Electrical Safety', category: 'Datasheet', fileUrl: '#', views: 150, createdAt: new Date() },
    { id: 2, title: 'EMPHZ Composite Kiosks – Durable, Customizable, Smart', category: 'Datasheet', fileUrl: '#', views: 95, createdAt: new Date() },
    { id: 3, title: 'ISO 9001:2015 Certificate', category: 'Certificate', fileUrl: '#', views: 210, createdAt: new Date() },
    { id: 4, title: 'IEC 61439 Certificate', category: 'Certificate', fileUrl: '#', views: 180, createdAt: new Date() },
    { id: 5, title: 'EMPHZ Modular Villas – Sustainable Prefab Living', category: 'Guide', fileUrl: '#', views: 120, createdAt: new Date() },
    { id: 6, title: 'Single-Door Enclosure (STP/3D)', category: 'CAD', fileUrl: '#', views: 75, createdAt: new Date() },
    { id: 7, title: 'EMPHZ Global: The GRP Company - Profile 2024', category: 'Company Profile', fileUrl: '#', views: 300, createdAt: new Date() },
];

let enquiries: Enquiry[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', company: 'Example Corp', message: 'Need a quote for 10 single-door enclosures.', status: 'New', createdAt: new Date() },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', company: 'Test Inc.', message: 'Information about security cabins.', status: 'In Progress', createdAt: new Date() },
];

let quotations: Quotation[] = [
    {
        id: 1,
        enquiryId: 1,
        customer: 'John Doe',
        email: 'john.doe@example.com',
        status: 'Approved',
        subtotal: 15000,
        tax: 2700,
        total: 17700,
        currency: 'INR',
        items: [{ name: 'GRP Single-Door Enclosure', qty: 10, unit: 'pcs', price: 1500 }],
        createdAt: new Date(),
        validUntil: new Date(new Date().setDate(new Date().getDate() + 30)),
    },
    {
        id: 2,
        customer: 'New Client',
        email: 'client@newcorp.com',
        status: 'Draft',
        subtotal: 85000,
        tax: 15300,
        total: 100300,
        currency: 'INR',
        items: [{ name: 'Security Guard Cabins', qty: 1, unit: 'pcs', price: 85000 }],
        createdAt: new Date(),
    }
];

let users: User[] = [
    { id: 1, name: 'Admin User', email: 'admin@emphz.com', role: Role.ADMIN, createdAt: new Date(), updatedAt: new Date() },
    { id: 2, name: 'Editor User', email: 'editor@emphz.com', role: Role.EDITOR, createdAt: new Date(), updatedAt: new Date() },
    { id: 3, name: 'Sales User', email: 'sales@emphz.com', role: Role.SALES, createdAt: new Date(), updatedAt: new Date() },
];

let testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmed Al-Kuwari',
    company: 'Lead Engineer, Qatar Electricity & Water',
    quote: 'The custom GRP enclosures from EMPHZ have been a game-changer for our grid stability. Their performance in our harsh desert climate is unmatched, significantly reducing maintenance cycles.',
    avatarUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'Project Manager, Kochi Metro Rail',
    quote: 'EMPHZ delivered highly durable and aesthetically pleasing GRP kiosks for our metro stations. The zero-maintenance aspect is a huge operational advantage for us in a public transit environment.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Arjun Singh',
    company: 'Solar Farm Operations, Tata Power Solar',
    quote: "We rely on EMPHZ's solar combiner boxes to protect our most critical assets. Their UV and thermal stability have extended the life of our inverters, directly impacting our ROI.",
    avatarUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=tinysrgb&w=100&h=100&fit=crop',
  },
];

export const getProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => setTimeout(() => resolve(products), 500));
};

export const getProductsBySlugs = async (slugs: string[]): Promise<Product[]> => {
    return new Promise(resolve => setTimeout(() => {
        const foundProducts = products.filter(p => slugs.includes(p.slug));
        resolve(foundProducts);
    }, 300));
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => setTimeout(() => resolve(products.filter(p => p.isFeatured)), 500));
};

export const getProductBySlug = async (slug: string): Promise<Product | undefined> => {
  return new Promise(resolve => setTimeout(() => resolve(products.find(p => p.slug === slug)), 500));
};

export const addProduct = async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'categoryName'>): Promise<Product> => {
    return new Promise(resolve => setTimeout(() => {
        const category = productCategories.find(c => c.id === productData.categoryId);
        const newProduct: Product = {
            ...productData,
            // Safely generate ID, starting from 1 if no products exist
            id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
            categoryName: category ? category.name : 'Unknown',
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        products.unshift(newProduct);
        resolve(newProduct);
    }, 500));
};

export const updateProduct = async (updatedProductData: Product): Promise<Product> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const index = products.findIndex(p => p.id === updatedProductData.id);
        if (index !== -1) {
            const category = productCategories.find(c => c.id === updatedProductData.categoryId);
            const productToSave: Product = { 
                ...products[index],
                ...updatedProductData,
                categoryName: category ? category.name : products[index].categoryName,
                updatedAt: new Date() 
            };
            products[index] = productToSave;
            resolve(productToSave);
        } else {
            reject(new Error('Product not found'));
        }
    }, 500));
};

export const deleteProduct = async (productId: number): Promise<{ success: boolean }> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const initialLength = products.length;
        products = products.filter(p => p.id !== productId);
        if (products.length < initialLength) {
            resolve({ success: true });
        } else {
            reject(new Error('Product not found'));
        }
    }, 500));
};

export const getCaseStudies = async (): Promise<CaseStudy[]> => {
  return new Promise(resolve => setTimeout(() => resolve(caseStudies), 500));
};

export const addCaseStudy = async (studyData: Omit<CaseStudy, 'id' | 'createdAt'>): Promise<CaseStudy> => {
    return new Promise(resolve => setTimeout(() => {
        const newStudy: CaseStudy = {
            ...studyData,
            // Safely generate ID, starting from 1 if no case studies exist
            id: caseStudies.length > 0 ? Math.max(...caseStudies.map(s => s.id)) + 1 : 1,
            createdAt: new Date(),
        };
        caseStudies.unshift(newStudy);
        resolve(newStudy);
    }, 500));
};

export const updateCaseStudy = async (updatedStudyData: CaseStudy): Promise<CaseStudy> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const index = caseStudies.findIndex(s => s.id === updatedStudyData.id);
        if (index !== -1) {
            caseStudies[index] = { ...caseStudies[index], ...updatedStudyData };
            resolve(caseStudies[index]);
        } else {
            reject(new Error('Case study not found'));
        }
    }, 500));
};

export const deleteCaseStudy = async (studyId: number): Promise<{ success: boolean }> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const initialLength = caseStudies.length;
        caseStudies = caseStudies.filter(s => s.id !== studyId);
        if (caseStudies.length < initialLength) {
            resolve({ success: true });
        } else {
            reject(new Error('Case study not found'));
        }
    }, 500));
};

export const getSolutions = async (): Promise<Solution[]> => {
  return new Promise(resolve => setTimeout(() => resolve(solutions), 500));
};

export const addSolution = async (solutionData: Solution): Promise<Solution> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        if (solutions.some(s => s.slug === solutionData.slug)) {
            reject(new Error('Solution with this slug already exists'));
            return;
        }
        solutions.unshift(solutionData);
        resolve(solutionData);
    }, 500));
};

export const updateSolution = async (slug: string, updatedSolutionData: Solution): Promise<Solution> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const index = solutions.findIndex(s => s.slug === slug);
        if (index !== -1) {
            if (slug !== updatedSolutionData.slug && solutions.some(s => s.slug === updatedSolutionData.slug)) {
                 reject(new Error('Solution with this new slug already exists'));
                 return;
            }
            solutions[index] = updatedSolutionData;
            resolve(solutions[index]);
        } else {
            reject(new Error('Solution not found'));
        }
    }, 500));
};

export const deleteSolution = async (slug: string): Promise<{ success: boolean }> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const initialLength = solutions.length;
        solutions = solutions.filter(s => s.slug !== slug);
        if (solutions.length < initialLength) {
            resolve({ success: true });
        } else {
            reject(new Error('Solution not found'));
        }
    }, 500));
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
    return new Promise(resolve => setTimeout(() => resolve(blogPosts), 500));
};

export const getLatestBlogPosts = async (limit: number): Promise<BlogPost[]> => {
    return new Promise(resolve => setTimeout(() => {
        const published = blogPosts
            .filter(post => post.published && post.publishedAt)
            .sort((a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime());
        resolve(published.slice(0, limit));
    }, 500));
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
    return new Promise(resolve => setTimeout(() => resolve(blogPosts.find(p => p.slug === slug)), 500));
};

export const addBlogPost = async (postData: Omit<BlogPost, 'id' | 'createdAt'>): Promise<BlogPost> => {
    return new Promise(resolve => setTimeout(() => {
        const newPost: BlogPost = {
            ...postData,
            // Safely generate ID, starting from 1 if no blog posts exist
            id: blogPosts.length > 0 ? Math.max(...blogPosts.map(p => p.id)) + 1 : 1,
            createdAt: new Date(),
        };
        blogPosts.unshift(newPost);
        resolve(newPost);
    }, 500));
};

export const updateBlogPost = async (updatedPostData: BlogPost): Promise<BlogPost> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const index = blogPosts.findIndex(p => p.id === updatedPostData.id);
        if (index !== -1) {
            blogPosts[index] = { ...blogPosts[index], ...updatedPostData };
            resolve(blogPosts[index]);
        } else {
            reject(new Error('Blog post not found'));
        }
    }, 500));
};

export const deleteBlogPost = async (postId: number): Promise<{ success: boolean }> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const initialLength = blogPosts.length;
        blogPosts = blogPosts.filter(p => p.id !== postId);
        if (blogPosts.length < initialLength) {
            resolve({ success: true });
        } else {
            reject(new Error('Blog post not found'));
        }
    }, 500));
};

export const getDownloads = async (): Promise<Download[]> => {
    return new Promise(resolve => setTimeout(() => resolve(downloads), 500));
};

export const addDownload = async (downloadData: Omit<Download, 'id' | 'createdAt' | 'views'>): Promise<Download> => {
    return new Promise(resolve => setTimeout(() => {
        const newDownload: Download = {
            ...downloadData,
            // Safely generate ID, starting from 1 if no downloads exist
            id: downloads.length > 0 ? Math.max(...downloads.map(d => d.id)) + 1 : 1,
            views: 0,
            createdAt: new Date(),
        };
        downloads.unshift(newDownload);
        resolve(newDownload);
    }, 500));
};

export const updateDownload = async (updatedDownloadData: Download): Promise<Download> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const index = downloads.findIndex(d => d.id === updatedDownloadData.id);
        if (index !== -1) {
            downloads[index] = { ...downloads[index], ...updatedDownloadData };
            resolve(downloads[index]);
        } else {
            reject(new Error('Download not found'));
        }
    }, 500));
};

export const deleteDownload = async (downloadId: number): Promise<{ success: boolean }> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const initialLength = downloads.length;
        downloads = downloads.filter(d => d.id !== downloadId);
        if (downloads.length < initialLength) {
            resolve({ success: true });
        } else {
            reject(new Error('Download not found'));
        }
    }, 500));
};


export const getEnquiries = async (): Promise<Enquiry[]> => {
    return new Promise(resolve => setTimeout(() => resolve(enquiries), 500));
};

export const getEnquiryById = async (id: number): Promise<Enquiry | undefined> => {
    return new Promise(resolve => setTimeout(() => resolve(enquiries.find(e => e.id === id)), 300));
};

export const addEnquiry = async (enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>): Promise<Enquiry> => {
    const newEnquiry: Enquiry = {
        ...enquiry,
        // Safely generate ID, starting from 1 if no enquiries exist
        id: enquiries.length > 0 ? Math.max(...enquiries.map(e => e.id)) + 1 : 1,
        createdAt: new Date(),
        status: 'New',
    };
    enquiries.unshift(newEnquiry);
    // In a real app, this would also trigger sending emails.
    console.log("Simulating email to admin and user for new enquiry:", newEnquiry);
    return new Promise(resolve => setTimeout(() => resolve(newEnquiry), 500));
};

export const updateEnquiryStatus = async (enquiryId: number, status: Enquiry['status']): Promise<Enquiry> => {
     return new Promise((resolve, reject) => setTimeout(() => {
        const index = enquiries.findIndex(e => e.id === enquiryId);
        if (index !== -1) {
            enquiries[index].status = status;
            resolve(enquiries[index]);
        } else {
            reject(new Error('Enquiry not found'));
        }
    }, 300));
};


export const getQuotations = async (): Promise<Quotation[]> => {
    return new Promise(resolve => setTimeout(() => resolve(quotations), 500));
};

export const getQuotationById = async (id: number): Promise<Quotation | undefined> => {
    return new Promise(resolve => setTimeout(() => resolve(quotations.find(q => q.id === id)), 300));
};

export const addQuotation = async (quoteData: Omit<Quotation, 'id' | 'createdAt'>): Promise<Quotation> => {
    return new Promise(resolve => setTimeout(() => {
        const newQuote: Quotation = {
            ...quoteData,
            // Safely generate ID, starting from 1 if no quotations exist
            id: quotations.length > 0 ? Math.max(...quotations.map(q => q.id)) + 1 : 1,
            createdAt: new Date(),
        };
        quotations.unshift(newQuote);
        resolve(newQuote);
    }, 500));
};

export const updateQuotation = async (updatedQuoteData: Quotation): Promise<Quotation> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const index = quotations.findIndex(q => q.id === updatedQuoteData.id);
        if (index !== -1) {
            quotations[index] = { ...quotations[index], ...updatedQuoteData };
            resolve(quotations[index]);
        } else {
            reject(new Error('Quotation not found'));
        }
    }, 500));
};

export const deleteQuotation = async (quoteId: number): Promise<{ success: boolean }> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const initialLength = quotations.length;
        quotations = quotations.filter(q => q.id !== quoteId);
        if (quotations.length < initialLength) {
            resolve({ success: true });
        } else {
            reject(new Error('Quotation not found'));
        }
    }, 500));
};

export const getCustomers = async (): Promise<Customer[]> => {
    const customerMap = new Map<string, Customer>();

    // Process enquiries
    enquiries.forEach(enquiry => {
      if (!customerMap.has(enquiry.email)) {
        customerMap.set(enquiry.email, {
          id: enquiry.email,
          name: enquiry.name,
          company: enquiry.company,
          email: enquiry.email,
          phone: enquiry.phone,
          enquiryCount: 0,
          quotationCount: 0,
          firstSeen: enquiry.createdAt,
        });
      }
      const customer = customerMap.get(enquiry.email)!;
      customer.enquiryCount++;
      if (enquiry.createdAt < customer.firstSeen) {
          customer.firstSeen = enquiry.createdAt;
      }
    });

    // Process quotations
    quotations.forEach(quote => {
       if (!customerMap.has(quote.email)) {
        customerMap.set(quote.email, {
          id: quote.email,
          name: quote.customer,
          company: undefined, 
          email: quote.email,
          phone: undefined,
          enquiryCount: 0,
          quotationCount: 0,
          firstSeen: quote.createdAt,
        });
      }
      const customer = customerMap.get(quote.email)!;
      customer.quotationCount++;
       if (quote.createdAt < customer.firstSeen) {
          customer.firstSeen = quote.createdAt;
      }
    });

    const customers = Array.from(customerMap.values());
    return new Promise(resolve => setTimeout(() => resolve(customers), 500));
};

export const getDashboardStats = async (): Promise<{
  totalProducts: number;
  newEnquiries: number;
  totalCustomers: number;
  monthlySales: number;
}> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const totalProducts = products.length;
      
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      
      const newEnquiries = enquiries.filter(e => e.status === 'New').length;

      const customerMap = new Map<string, any>();
      enquiries.forEach(enquiry => { if (!customerMap.has(enquiry.email)) customerMap.set(enquiry.email, {}); });
      quotations.forEach(quote => { if (!customerMap.has(quote.email)) customerMap.set(quote.email, {}); });
      const totalCustomers = customerMap.size;

      const monthlySales = quotations
        .filter(q => q.status === 'Approved' && q.createdAt > oneMonthAgo)
        .reduce((sum, q) => sum + q.total, 0);

      resolve({
        totalProducts,
        newEnquiries,
        totalCustomers,
        monthlySales,
      });
    }, 300);
  });
};

export const getUsers = async (): Promise<User[]> => {
    return new Promise(resolve => setTimeout(() => resolve(users), 300));
};

export const addUser = async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> => {
    return new Promise(resolve => setTimeout(() => {
        const newUser: User = {
            ...userData,
            // Safely generate ID, starting from 1 if no users exist
            id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        users.unshift(newUser);
        resolve(newUser);
    }, 500));
};

export const updateUser = async (updatedUserData: User): Promise<User> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const index = users.findIndex(u => u.id === updatedUserData.id);
        if (index !== -1) {
            users[index] = { ...users[index], ...updatedUserData, updatedAt: new Date() };
            resolve(users[index]);
        } else {
            reject(new Error('User not found'));
        }
    }, 500));
};

export const deleteUser = async (userId: number): Promise<{ success: boolean }> => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const initialLength = users.length;
        users = users.filter(u => u.id !== userId);
        if (users.length < initialLength) {
            resolve({ success: true });
        } else {
            reject(new Error('User not found'));
        }
    }, 500));
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
    return new Promise(resolve => setTimeout(() => resolve(testimonials), 500));
};

export const searchAll = async (query: string): Promise<{ products: Product[], blogPosts: BlogPost[], caseStudies: CaseStudy[] }> => {
    return new Promise(resolve => setTimeout(() => {
        const lowerQuery = query.toLowerCase();
        
        if (!lowerQuery) {
            resolve({ products: [], blogPosts: [], caseStudies: [] });
            return;
        }

        const foundProducts = products.filter(p => 
            p.name.toLowerCase().includes(lowerQuery) ||
            p.summary.toLowerCase().includes(lowerQuery) ||
            p.description.toLowerCase().includes(lowerQuery) ||
            p.tags.some(t => t.toLowerCase().includes(lowerQuery))
        );

        const foundPosts = blogPosts.filter(p =>
            p.title.toLowerCase().includes(lowerQuery) ||
            p.excerpt.toLowerCase().includes(lowerQuery) ||
            p.content.toLowerCase().includes(lowerQuery)
        );

        const foundCaseStudies = caseStudies.filter(c =>
            c.title.toLowerCase().includes(lowerQuery) ||
            c.client.toLowerCase().includes(lowerQuery) ||
            c.challenge.toLowerCase().includes(lowerQuery) ||
            c.solution.toLowerCase().includes(lowerQuery)
        );

        resolve({
            products: foundProducts,
            blogPosts: foundPosts,
            caseStudies: foundCaseStudies
        });
    }, 600));
};