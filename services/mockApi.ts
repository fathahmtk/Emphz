import { Product, CaseStudy, Enquiry, Solution, BlogPost, Download, Quotation, Customer } from '../types';

let products: Product[] = [
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

const productCategories = [
    { id: 1, name: 'Enclosures' },
    { id: 2, name: 'Kiosks' },
    { id: 3, name: 'Structural' },
    { id: 4, name: 'Housing' },
    { id: 5, name: 'Utilities' },
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

let blogPosts: BlogPost[] = [
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

let downloads: Download[] = [
    { id: 1, title: 'Single-Door Enclosure Datasheet', category: 'Datasheet', fileUrl: '#', views: 150, createdAt: new Date() },
    { id: 2, title: 'Double-Door Enclosure Datasheet', category: 'Datasheet', fileUrl: '#', views: 95, createdAt: new Date() },
    { id: 3, title: 'ISO 9001:2015 Certificate', category: 'Certificate', fileUrl: '#', views: 210, createdAt: new Date() },
    { id: 4, title: 'IEC 61439 Certificate', category: 'Certificate', fileUrl: '#', views: 180, createdAt: new Date() },
    { id: 5, title: 'Enclosure Installation Guide', category: 'Guide', fileUrl: '#', views: 120, createdAt: new Date() },
    { id: 6, title: 'Single-Door Enclosure (STP/3D)', category: 'CAD', fileUrl: '#', views: 75, createdAt: new Date() },
    { id: 7, title: 'EMPHZ Company Profile 2024', category: 'Company Profile', fileUrl: '#', views: 300, createdAt: new Date() },
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
        status: 'Sent',
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

export const getProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => setTimeout(() => resolve(products), 500));
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

export const getSolutions = async (): Promise<Solution[]> => {
  return new Promise(resolve => setTimeout(() => resolve(solutions), 500));
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