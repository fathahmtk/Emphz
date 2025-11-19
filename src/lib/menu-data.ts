
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
        title: "By Type",
        links: [
          { title: "GRP Electrical Enclosures", href: "/products/enclosures", description: "IP-rated outdoor & industrial cabinets." },
          { title: "GRP Portable Toilets", href: "/products/toilets", description: "Hygienic, monsoon-proof toilet cabins." },
          { title: "GRP Modular Kiosks", href: "/products/kiosks", description: "For retail, security, and information." },
          { title: "GRP Security Cabins", href: "/products/cabins", description: "Secure booths for personnel." },
          { title: "GRP Resort Villas & Pods", href: "/products/villas", description: "Luxury, climate-resistant modular housing." },
          { title: "Custom GRP Fabrication", href: "/products/custom", description: "Bespoke structures for any need." },
        ],
      },
    ],
  },
   {
    title: "Solutions",
    href: "/#",
     columns: [
      {
        title: "By Industry",
        links: [
          { title: "Tourism & Resorts", href: "/industries", description: "High-performance villas and cabins." },
          { title: "Construction", href: "/industries", description: "Durable site offices and toilet cabins." },
          { title: "Government / Panchayat", href: "/industries", description: "Public sanitation and utility kiosks." },
          { title: "Solar EPC", href: "/industries", description: "Weatherproof battery/inverter enclosures." },
        ],
      },
      {
        title: "By Location",
        links: [
            { title: "Kerala Operations", href: "/kerala", description: "Fast supply and installation across Kerala." },
            { title: "Mysore Factory", href: "/mysore", description: "Advanced GRP manufacturing hub." },
        ]
      }
    ],
  },
  {
    title: "Projects",
    href: "/projects",
    columns: [],
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
