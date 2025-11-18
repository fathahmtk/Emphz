
export interface NavLink {
  title: string;
  href: string;
  description?: string;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

export interface NavCta {
    text: string;
    href: string;
}

export interface MegaMenu {
  title:string;
  href: string;
  columns: NavSection[];
  cta?: NavCta;
}

export const menuData: MegaMenu[] = [
  {
    title: "Products",
    href: "/products",
    columns: [
      {
        title: "Enclosures",
        links: [
          { title: "GRP Electrical Enclosures", href: "/products/enclosures", description: "Rust-proof, non-conductive boxes for any environment." },
          { title: "Utility-Approved Enclosures", href: "/products/utility-approved", description: "Certified for regional power & water authorities." },
          { title: "Fire & Safety Enclosures", href: "/products/fire-safety", description: "Fire-rated cabinets for emergency equipment." },
          { title: "Instrumentation Enclosures", href: "/products/instrumentation", description: "Protect sensitive instruments from harsh conditions." },
        ],
      },
      {
        title: "Kiosks & Modular",
        links: [
          { title: "GRP/FRP Kiosks", href: "/products/kiosks", description: "Durable, lightweight structures for various applications." },
          { title: "Customized Kiosk Solutions", href: "/products/custom", description: "Tailored designs for specific operational needs." },
        ],
      },
      {
        title: "Specialized & Systems",
        links: [
          { title: "Battery Enclosures", href: "/products/battery-enclosures", description: "Engineered for solar, telecom, and UPS systems." },
          { title: "Customized GRP Solutions", href: "/products/custom", description: "Bespoke engineering for unique project requirements." },
          { title: "GRP Roofing Systems", href: "/products/roofing", description: "Corrosion-proof roofing for industrial buildings." },
        ],
      },
       {
        title: "Quick Resources",
        links: [
          { title: "View All Products", href: "/products" },
          { title: "Datasheet Library", href: "/downloads" },
          { title: "Request Technical Drawing", href: "/contact" },
        ],
      },
    ],
     cta: { text: "Explore Full Product Ecosystem", href: "/products" },
  },
  {
    title: "Industries",
    href: "/industries/power-generation",
    columns: [
      {
        title: "Core Sectors",
        links: [
            { title: "Power & Utilities", href: "/industries/power-generation", description: "Solutions for generation, transmission & distribution." },
            { title: "Water & Wastewater", href: "/industries/water-treatment", description: "Corrosion-resistant systems for treatment plants." },
            { title: "Renewable Energy", href: "/industries/solar", description: "Infrastructure for solar and battery storage." },
            { title: "Oil & Gas", href: "/industries/oil-gas", description: "Enclosures for hazardous and corrosive zones." },
        ],
      },
      {
        title: "Industrial & Commercial",
        links: [
            { title: "Fire & Safety", href: "/industries/fire-safety", description: "Certified protection for safety equipment." },
            { title: "Construction", href: "/industries/construction", description: "Durable housings for temporary and permanent use." },
            { title: "Telecom", href: "/industries/telecom", description: "Secure, weatherproof cabinets for network gear." },
            { title: "Mining & Resources", href: "/industries/mining", description: "Heavy-duty protection for extreme environments." },
        ],
      },
    ],
    cta: { text: "Speak to an Industry Specialist", href: "/contact" },
  },
  {
    title: "About",
    href: "/#about",
    columns: [
        {
            title: "Our Company",
            links: [
                { title: "Mission & Values", href: "/#mission-vision", description: "The principles that guide our work." },
                { title: "GRP Advantage", href: "/grp-advantage", description: "Why our materials are superior." },
                { title: "Manufacturing", href: "/manufacturing", description: "Explore our state-of-the-art facilities." },
                { title: "Quality & Compliance", href: "/quality/certification", description: "Our commitment to the highest standards." },
            ]
        },
        {
            title: "Our Work",
            links: [
                { title: "Project Case Studies", href: "/projects", description: "See our solutions in action." },
            ]
        }
    ]
  },
   {
      title: "Contact",
      href: "/contact",
      columns: [
          {
              title: "Get in Touch",
              links: [
                  { title: "Contact Us", href: "/contact", description: "For sales and general inquiries." },
                  { title: "Our Locations", href: "/contact/locations", description: "Find our offices and facilities." },
                  { title: "Support Request", href: "/contact/support", description: "Get help with an existing product." },
                  { title: "Careers", href: "/contact/careers", description: "Join our team of experts." },
              ]
          }
      ]
  }
];
