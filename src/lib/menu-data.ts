
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
  title: string;
  href: string;
  columns: NavSection[];
  cta?: NavCta;
}

export const menuData: MegaMenu[] = [
  {
    title: "Company",
    href: "/about",
    columns: [
      {
        title: "Brand & People",
        links: [
          { title: "About Us", href: "/about" },
          { title: "History", href: "/about/history" },
          { title: "CEO's Message", href: "/about/ceo-message" },
          { title: "Mission, Vision & Values", href: "/about/mission" },
          { title: "Our Team", href: "/about/team" },
        ],
      },
      {
        title: "Capability Highlights",
        links: [
          { title: "GRP Advantage", href: "/grp-advantage", description: "Why our materials are superior." },
          { title: "Manufacturing", href: "/manufacturing", description: "Facilities, capacity & virtual tour." },
          { title: "Careers", href: "/contact/careers", description: "View our current openings." },
        ],
      },
    ],
    cta: { text: "Download Corporate Brochure", href: "/downloads" },
  },
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
            ]
        }
    ]
  },
   {
    title: "Quality",
    href: "/quality/certification",
    columns: [
        {
            title: "Assurance Content",
            links: [
                 { title: "Product Certification", href: "/quality/certification" },
                { title: "Integrated Management System (IMS)", href: "/quality/ims" },
                { title: "Standard Operating Procedures", href: "/quality/sop" },
                { title: "QA/QC Framework", href: "/quality/qa-qc" },
            ]
        },
        {
            title: "Downloads & Trust",
            links: [
                { title: "Certifications & Test Reports", href: "/downloads" },
            ]
        }
    ],
    cta: { text: "Download Compliance Pack", href: "/downloads" },
  },
  {
      title: "Media",
      href: "/media/gallery",
      columns: [
          {
              title: "Content",
              links: [
                  { title: "News", href: "/media/news" },
                  { title: "Blog", href: "/media/blog" },
                  { title: "Video", href: "/media/video" },
              ]
          },
          {
              title: "Visuals",
              links: [
                  { title: "Photo Gallery", href: "/media/gallery" },
                  { title: "Events & Exhibitions", href: "/media/gallery" },
              ]
          }
      ],
      cta: { text: "Subscribe for Technical Updates", href: "#footer-subscribe" },
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
              ]
          }
      ]
  }
];
