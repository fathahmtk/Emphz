
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
          { title: "GRP Electrical Enclosures", href: "/products/enclosures" },
          { title: "Utility-Approved Enclosures", href: "/products/utility-approved" },
          { title: "Fire & Safety Enclosures", href: "/products/fire-safety" },
          { title: "Instrumentation Enclosures", href: "/products/instrumentation" },
        ],
      },
      {
        title: "Kiosks & Modular",
        links: [
          { title: "GRP/FRP Kiosks", href: "/products/kiosks" },
          { title: "Customized Kiosk Solutions", href: "/products/custom" },
        ],
      },
      {
        title: "Specialized & Systems",
        links: [
          { title: "Battery Enclosures", href: "/products/battery-enclosures" },
          { title: "Customized GRP Enclosures", href: "/products/custom" },
          { title: "GRP Roofing Systems", href: "/products/roofing" },
        ],
      },
       {
        title: "Quick Resources",
        links: [
          { title: "View All Products", href: "/products" },
          { title: "Datasheet Library", href: "/downloads" },
          { title: "CAD & DWG Downloads", href: "/downloads" },
        ],
      },
    ],
     cta: { text: "Request Technical Drawing", href: "/contact" },
  },
  {
    title: "Industries",
    href: "/industries/power-generation",
    columns: [
      {
        title: "Primary Sectors",
        links: [
            { title: "Power Generation", href: "/industries/power-generation" },
            { title: "Water Treatment", href: "/industries/water-treatment" },
            { title: "Solar", href: "/industries/solar" },
            { title: "Oil & Gas", href: "/industries/oil-gas" },
        ],
      },
      {
        title: "Secondary Sectors",
        links: [
            { title: "Fire & Safety", href: "/industries/fire-safety" },
            { title: "Construction", href: "/industries/construction" },
            { title: "Telecom", href: "/industries/telecom" },
            { title: "Mining", href: "/industries/mining" },
        ],
      },
    ],
    cta: { text: "Speak to Industry Specialist", href: "/contact" },
  },
  {
    title: "Projects",
    href: "/projects",
    columns: [
        {
            title: "Our Work",
            links: [
                { title: "Project Case Studies", href: "/projects" },
                 { title: "GRP Advantage", href: "/grp-advantage", description: "Why our materials are superior." },
                { title: "Manufacturing", href: "/manufacturing", description: "Facilities, capacity & virtual tour." },
            ]
        }
    ]
  },
   {
      title: "Contact",
      href: "/contact",
      columns: [
          {
              title: "Get in touch",
              links: [
                  { title: "Contact Us", href: "/contact" },
                  { title: "Our Locations", href: "/contact/locations" },
                  { title: "Submit Inquiry", href: "/contact" },
                  { title: "Support Request", href: "/contact/support" },
                  { title: "Careers", href: "/contact/careers" },
              ]
          }
      ]
  }
];
