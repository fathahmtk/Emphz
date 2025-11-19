
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
    title: "Home",
    href: "/",
    columns: []
  },
  {
    title: "About",
    href: "/about",
    columns: []
  },
  {
    title: "Products",
    href: "/products",
    columns: [
      {
        title: "GRP Electrical Enclosures",
        links: [
          { title: "Single Door", href: "/products/enclosures", description: "Standard single door enclosures." },
          { title: "Double Door", href: "/products/enclosures", description: "Spacious double door cabinets." },
          { title: "Multi-Door / MCC", href: "/products/enclosures", description: "Large multi-door panel boards." },
          { title: "Battery/Solar Cabinet", href: "/products/enclosures", description: "Enclosures for energy storage." },
          { title: "Custom Electrical Enclosures", href: "/products/custom", description: "Tailor-made for specific needs." },
        ],
      },
      {
        title: "GRP Portable Toilets",
        links: [
          { title: "Standard Model", href: "/products/toilets", description: "Durable and hygienic single units." },
          { title: "Western Model", href: "/products/toilets", description: "Featuring western-style commodes." },
          { title: "Indian Model", href: "/products/toilets", description: "Traditional Indian-style units." },
          { title: "Multi-unit Block", href: "/products/toilets", description: "For large sites and events." },
        ],
      },
       {
        title: "GRP Modular Kiosks",
        links: [
          { title: "Food Kiosk", href: "/products/kiosks", description: "For food and beverage businesses." },
          { title: "Ticket Kiosk", href: "/products/kiosks", description: "For events and transport hubs." },
          { title: "Security Cabin", href: "/products/cabins", description: "Secure booths for personnel." },
          { title: "Retail Pod", href: "/products/kiosks", description: "Compact shops for any location." },
        ],
      },
      {
        title: "GRP Resort Villas",
        links: [
          { title: "Luxury Villa", href: "/products/villas", description: "High-end, customizable resort housing." },
          { title: "Beach Cabin", href: "/products/villas", description: "Coastal-proof holiday cabins." },
          { title: "Mountain Pod", href: "/products/villas", description: "Cozy retreats for hilly areas." },
          { title: "Designer GRP Rooms", href: "/products/villas", description: "Architecturally unique modular rooms." },
        ],
      },
      {
        title: "Custom GRP Fabrication",
        links: [
          { title: "Site Office Cabins", href: "/products/custom", description: "Portable offices for construction sites." },
          { title: "Shelters", href: "/products/custom", description: "Durable shelters for various uses." },
          { title: "Reception Pods", href: "/products/custom", description: "Stylish, modern reception areas." },
          { title: "Custom Models", href: "/products/custom", description: "Bring your unique design to life." },
        ],
      },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
    columns: []
  },
  {
    title: "Gallery",
    href: "/gallery",
    columns: []
  },
  {
    title: "Downloads",
    href: "/downloads",
    columns: []
  },
   {
      title: "Contact",
      href: "/contact",
      columns: []
  }
];
