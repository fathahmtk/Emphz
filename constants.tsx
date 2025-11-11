import React from 'react';

export const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Emphz Private Limited",
  url: "https://emphz.example",
  slogan: "Advanced GRP/FRP Infrastructure Solutions",
  foundingDate: "2023",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions.html" },
  { label: "Why GRP", href: "/why-grp.html" },
  { label: "Industries", href: "/industries.html" },
  { label: "Projects", href: "/projects.html" },
  { label: "Company", href: "/company.html" },
  { label: "Contact", href: "/contact.html" },
];

export const SEO_DATA = {
  home: {
    title: "Emphz | Advanced GRP/FRP Infrastructure Solutions",
    description: "Emphz engineers high‑durability GRP/FRP solutions for the utility, transport, telecom, and hospitality industries. Our portfolio includes enclosures, kiosks, security cabins, and custom OEM components.",
    ogTitle: "Emphz – GRP/FRP Solutions for Critical Industries",
    ogDescription: "One-stop solution for GRP infrastructure: serving utilities, transport, telecom, and OEM with corrosion-proof enclosures, cabins, and kiosks.",
    canonical: "https://emphz.example/",
  },
  solutions: {
    title: "Solutions | GRP Product Portfolio | Emphz Private Limited",
    description: "Explore our comprehensive portfolio of GRP/FRP solutions, including IP-rated electrical enclosures, modular public cabins, and a filterable product catalogue for B2B needs.",
    ogTitle: "GRP/FRP Solutions & Product Catalogue | Emphz",
    ogDescription: "Detailed specifications for GRP enclosures, bus-stop modules, kiosks, cabins, and custom fabrication for industrial and civic projects.",
    canonical: "https://emphz.example/solutions.html",
  },
  why_grp: {
    title: "Why GRP? | Technical Advantages vs. Steel & Aluminium | Emphz",
    description: "A technical deep-dive into the benefits of GRP, comparing its performance on corrosion resistance, weight, electrical insulation, and lifecycle cost against legacy materials.",
    ogTitle: "Why GRP is Superior to Traditional Materials | Emphz",
    ogDescription: "Learn why GRP's intrinsic properties make it the ideal choice for modern infrastructure projects.",
    canonical: "https://emphz.example/why-grp.html",
  },
  industries: {
    title: "Industries Served | Emphz Private Limited",
    description: "Emphz provides specialized GRP solutions for Utilities, Power, Transport, Public Realm, Telecom, ICT, Hospitality, and OEM sectors.",
    ogTitle: "GRP Solutions for Utilities, Transport, & Telecom | Emphz",
    ogDescription: "Discover how our GRP products are engineered for the specific demands of your industry.",
    canonical: "https://emphz.example/industries.html",
  },
  projects: {
    title: "Projects & Case Studies | Emphz Private Limited",
    description: "View recent deployments of our GRP infrastructure, including coastal bus-stop modules, security cabins, and food kiosks.",
    ogTitle: "GRP Project Deployments & Case Studies | Emphz",
    ogDescription: "See real-world examples of how Emphz GRP solutions deliver durability and performance.",
    canonical: "https://emphz.example/projects.html",
  },
  company: {
    title: "About Emphz | GRP Manufacturing & QA | Emphz Private Limited",
    description: "Learn about Emphz, our engineering-led approach, quality assurance, logistics, warranty, and partner programs for GRP/FRP infrastructure.",
    ogTitle: "Company Profile: Engineering-Led GRP Manufacturing | Emphz",
    ogDescription: "Discover our commitment to quality, compliance, and global logistics for all GRP projects.",
    canonical: "https://emphz.example/company.html",
  },
  contact: {
    title: "Contact Us | Request a Quote | Emphz Private Limited",
    description: "Get in touch with the Emphz engineering team to scope your GRP requirement or request a technical quote for your project.",
    ogTitle: "Contact Emphz for a GRP Project Quote",
    ogDescription: "Share your project specifications and get a detailed proposal from our engineering experts.",
    canonical: "https://emphz.example/contact.html",
  }
};


export const HERO_DATA = {
  title: "Advanced GRP Infrastructure —",
  subtitle: "enclosures, kiosks & modular cabins",
  description: "Emphz Private Limited engineers and ships high‑durability GRP/FRP solutions: electrical enclosures, portable kiosks, security and food cabins, villa toilet pods, and rural bus‑stop modules. Lighter than steel, corrosion‑proof, and maintenance‑lean — built for rapid deployment at scale.",
  ctaPrimary: "Explore Solutions",
  ctaSecondary: "View Projects",
  stats: [
    { value: ">15 yrs", label: "Team composite expertise" },
    { value: "IP65/66", label: "Ingress protection options" },
    { value: ">60%", label: "Lower lifecycle maintenance*" },
  ],
  statsNote: "*vs. painted mild‑steel in coastal climates. Indicative.",
  image: "https://images.unsplash.com/photo-1581092580497-c9a421b4a919?q=80&w=2070&auto=format&fit=crop",
};

export const SOLUTIONS_DATA = {
  title: "Solutions Portfolio",
  description: "Modular GRP systems optimised for harsh weather, coastal air, and high‑traffic public spaces. Container‑friendly. Plug‑and‑play. Customisable.",
  pills: ["Custom sizes", "OEM branding", "Export ready"],
  cards: [
    {
      title: "Rural Bus‑Stop Modules",
      copy: "Low‑maintenance GRP bus shelters for rural networks: integrated seating, shade canopies, signage, solar lighting and ad panels. Designed for fast civic roll‑outs.",
      bullets: ["UV‑stable shells", "Non‑corrosive hardware", "1‑day install"],
    },
    {
      title: "GRP Electrical Enclosures",
      copy: "Ingress‑protected cabinets for utilities, telecom, ITS and renewables. Corrosion‑proof, UV‑stable, electrically insulated, fire‑retardant options.",
      bullets: ["IP65/66 sealing", "Accessories & back‑plates", "Pole/ground mount"],
    },
    {
      title: "Portable Kiosks (Food / Ticket / Retail)",
      copy: "Pre‑wired kiosks with insulated GRP panels, service counters, hygiene‑friendly finishes and branding‑ready exteriors.",
      bullets: ["Plug‑and‑serve fit‑outs", "Washable interiors", "Logistics‑optimised"],
    },
    {
      title: "Security Cabins / Site Offices",
      copy: "Surveillance‑ready cabins with glazing, cable routing, HVAC provisions and vandal‑resistant shells for 24/7 operation.",
      bullets: ["Acoustic options", "Ergonomic layouts", "Anti‑corrosive hardware"],
    },
    {
      title: "Villa Toilet Pods",
      copy: "Premium bathroom pods for resorts and residences. Waterproof, easy‑clean surfaces, rapid onsite hookup.",
      bullets: ["Plumbing pre‑fit", "Slip‑resistant floors", "Custom fixtures"],
    },
    {
      title: "Drainage & Utility Boxes",
      copy: "Load‑rated GRP chambers and covers for public‑realm durability with non‑conductive, non‑corrosive performance.",
      bullets: ["Anti‑textures", "Non‑conductive", "Colour‑through body"],
    },
  ],
};

export const WHY_GRP_DATA = {
  title: "Why GRP Outperforms Legacy Materials",
  features: [
    { h: "Corrosion‑proof", p: "Zero rust in coastal/industrial atmospheres; ideal for public infrastructure." },
    { h: "Lightweight, High Strength", p: "Lower transport & install costs with long‑term structural integrity." },
    { h: "Electrically Insulated", p: "Intrinsic dielectric properties reduce shock risk around live gear." },
    { h: "UV & Weather Stable", p: "Colour‑fast gelcoats and additives resist fading and micro‑cracking." },
    { h: "Low Lifecycle Cost", p: "Minimal repainting or touch‑ups; easy wash‑down maintenance." },
    { h: "Design Freedom", p: "Complex curves and integrated features via composite tooling." },
  ],
  table: {
    headers: ["Property", "GRP", "Mild Steel", "Aluminium"],
    rows: [
      ["Corrosion resistance", "Excellent", "Needs paint / rusts", "Good"],
      ["Electrical insulation", "Intrinsic", "Conductive", "Conductive"],
      ["Weight (for same volume)", "Low", "High", "Medium"],
      ["Field maintenance", "Wash‑down", "Repaint / anti‑rust", "Periodic"],
      ["Coastal suitability", "High", "Medium (with coatings)", "High"],
    ],
  },
};

export const INDUSTRIES_DATA = {
    title: "Industry Focus",
    items: [
      { h: "Utilities & Power", p: "Switchgear enclosures, feeder pillars, metering cabinets." },
      { h: "Transport & Public Realm", p: "Bus-stop modules, wayfinding kiosks, service points." },
      { h: "Telecom & ICT", p: "Outdoor cabinets, FTTX distribution, battery enclosures." },
      { h: "Hospitality & Residential", p: "Villa toilets, resort pods, service kiosks." },
      { h: "Automotive & OEM", p: "Specialty vehicle body panels, custom machinery covers." }
    ]
};

export const PRODUCTS_DATA = {
    title: "Products",
    description: "Browse the range. Use filters to shortlist and add items to your RFQ.",
    items: [
        { sku: "EN-100", name: "GRP Enclosure 600x400", cat: "Enclosures" },
        { sku: "EN-200", name: "GRP Enclosure 800x600", cat: "Enclosures" },
        { sku: "KS-300", name: "Food Kiosk 3m", cat: "Kiosks" },
        { sku: "CB-400", name: "Security Cabin 2.4x2.4", cat: "Cabins" },
        { sku: "TP-500", name: "Villa Toilet Pod A", cat: "Toilet Pods" },
        { sku: "BS-600", name: "Rural Bus‑Stop Shelter", cat: "Bus‑Stop Modules" },
    ]
};

export const QA_DATA = {
    title: "Quality Assurance & Compliance",
    cards: [
        { title: "Material Traceability", description: "Batch‑level resin & fiber logs; QC checkpoints at lay‑up, cure, and machining." },
        { title: "Testing Protocols", description: "Ingress, dielectric, UV/aging, impact & load tests with records on request." },
        { title: "Standards", description: "IP65/66 options, FR grades; RoHS‑aligned components; region‑specific compliance supported." },
    ]
};

export const LOGISTICS_DATA = {
    title: "Logistics & Export",
    description: "Container‑friendly modules with global shipping support. Documentation, packing lists, and installation guides provided.",
    points: [
        "Container & flat‑rack packing plans",
        "On‑site assembly playbooks",
        "After‑sales support & spares",
    ]
};

export const WARRANTY_DATA = {
    title: "Warranty & Service",
    description: "Standard 12‑month manufacturing warranty (extendable). Service level agreements available for enterprise roll‑outs."
};

export const DOWNLOADS_DATA = {
    title: "Downloads",
    links: [
        { text: "GRP Bus-Stop Datasheet (PDF)", href: "#" },
        { text: "GRP Electrical Enclosure Catalogue (PDF)", href: "#" },
        { text: "Portable Kiosk Fit-Out Options (PDF)", href: "#" },
    ]
};

export const PARTNERS_DATA = {
    title: "Partner & Distributor Program",
    description: "We collaborate with integrators, EPCs, and distributors for large-scale deployments and regional coverage.",
    points: [
        "• Territory exclusivity options",
        "• OEM/private label support",
        "• Project assistance & joint specification proposals",
    ]
};

export const PROJECTS_DATA = {
    title: "Recent Deployments",
    tag: "Case studies",
    items: [
      { src: "https://images.unsplash.com/photo-1570125909239-74182456459e?q=80&w=800&auto=format&fit=crop", cap: "GRP bus‑stop module – coastal district installation" },
      { src: "https://images.unsplash.com/photo-1599691880348-88b14a275493?q=80&w=800&auto=format&fit=crop", cap: "Security cabin with insulated panels and HVAC provision" },
      { src: "https://images.unsplash.com/photo-1579435349453-35fb5c88344e?q=80&w=800&auto=format&fit=crop", cap: "Food kiosk – hygiene‑friendly interior fit‑out" },
    ]
};

export const COMPANY_DATA = {
    title: "About Emphz Private Limited",
    description: "Incorporated in 2023, Emphz is an engineering‑led manufacturer of GRP/FRP infrastructure systems. We design for international standards, prioritise safety and durability, and operate with an export‑ready supply chain.",
    strengths: [
        "• Composite manufacturing with strict QA and material traceability",
        "• Tooling for repeatable quality and scalable volumes",
        "• OEM/private‑label programmes and distributor partnerships",
    ],
    standards: {
        title: "Certifications & Standards",
        description: "IP65/66 options, fire‑retardant grades (UL‑equivalent resins), UV‑stabilised gelcoats, RoHS‑aligned components. Region‑specific compliance on request.",
        tests: [
            "Ingress sealing tests",
            "Dielectric strength checks",
            "UV/aging simulations",
            "Load & impact validation",
        ]
    }
};

export const CONTACT_DATA = {
    title: "Let’s scope your GRP requirement",
    description: "Share basic specs and we’ll revert with an engineering‑ready quote: dimensions, fit‑out, accessories, compliance, logistics.",
    note: "By submitting, you consent to be contacted about your enquiry.",
    whatsappLink: "https://wa.me/00000000000",
};