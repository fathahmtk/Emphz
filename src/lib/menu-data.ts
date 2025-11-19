
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
    title: "About",
    href: "/about",
    columns: []
  },
  {
    title: "Products",
    href: "/products",
    columns: [
      {
        title: "Products",
        links: [
          { title: "GRP Electrical Enclosures", href: "/products/enclosures", description: "Industrial-grade enclosures for harsh environments." },
          { title: "GRP Portable Toilets", href: "/products/toilets", description: "Hygienic and durable cabins for public use." },
          { title: "GRP Modular Kiosks", href: "/products/kiosks", description: "Customizable kiosks for retail and services." },
          { title: "GRP Security Cabins", href: "/products/cabins", description: "Secure and insulated cabins for security operations." },
          { title: "GRP Resort Villas & Pods", href: "/products/villas", description: "Luxury cabins for the tourism industry." },
          { title: "Custom GRP Fabrication", href: "/products/custom", description: "Bespoke solutions for unique requirements." },
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
      title: "Contact",
      href: "/contact",
      columns: []
  }
];
