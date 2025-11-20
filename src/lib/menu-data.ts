
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
    columns: [
      {
        title: "Homepage Sections",
        links: [
            { title: "About EMPHZ", href: "/#about", description: "Learn about our mission and values." },
            { title: "Core Product Lines", href: "/#products", description: "Explore our range of GRP solutions." },
            { title: "Why GRP?", href: "/#why-grp", description: "Discover the benefits of GRP." },
            { title: "Industries We Serve", href: "/#industries", description: "See the sectors that trust our products." },
        ]
      }
    ]
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
          { title: "GRP Electrical Enclosures", href: "/products/grp-electrical-enclosure", description: "IP-rated outdoor & industrial cabinets." },
          { title: "GRP Portable Toilets", href: "/products/grp-portable-toilet", description: "Hygienic, monsoon-proof toilet cabins." },
          { title: "GRP Modular Kiosks", href: "/products/grp-modular-kiosk", description: "For retail, security, and information." },
          { title: "GRP Security Cabins", href: "/products/grp-security-cabin", description: "Secure booths for personnel." },
          { title: "GRP Resort Villas & Pods", href: "/products/e7-modular-villa", description: "Luxury, climate-resistant modular housing." },
          { title: "Custom GRP Fabrication", href: "/products/custom-grp-fabrication", description: "Bespoke structures for any need." },
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
    columns: [
       {
        title: "Recent Case Studies",
        links: [
            { title: "Corrosion Control Upgrade", href: "/projects", description: "Replacing rusted metal with IP66 GRP." },
            { title: "Industrial Plant Modernization", href: "/projects", description: "Custom kiosks for an automated line." },
        ]
       }
    ],
    cta: {
        text: "View All Projects",
        href: "/projects"
    }
  },
  {
    title: "Blog",
    href: "/blog",
    columns: [
        {
            title: "Latest Articles",
            links: [
                { title: "Why GRP is Superior for Kerala's Climate", href: "/blog/why-grp-is-superior-for-kerala-climate" },
                { title: "Industrial Manufacturing vs. Local Fabrication", href: "/blog/industrial-manufacturing-vs-local-fabrication" },
            ]
        }
    ],
    cta: {
        text: "View All Posts",
        href: "/blog"
    }
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
