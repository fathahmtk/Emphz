
import Image from 'next/image';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, MapPin } from 'lucide-react';

const projects = [
  {
    id: "proj-1",
    title: "Utility Distribution Upgrade – Power Authority",
    client: "National Power & Water Authority",
    location: "UAE",
    scope: "Deployment of GRP electrical enclosures across 120+ distribution nodes.",
    solution: "EMPHZ engineered and delivered IP66-rated GRP enclosures with tamper-proof locking, UV-resistant gelcoat, and authority-compliant specifications.",
    outcomes: [
      "35% reduction in field maintenance calls",
      "Zero corrosion incidents across the first cycle",
      "Faster installation due to lightweight composite structure"
    ],
    imageUrl: "https://images.unsplash.com/photo-1559163499-413811444163?q=80&w=2070&auto=format&fit=crop",
    imageHint: "electrical substation"
  },
  {
    id: "proj-2",
    title: "Solar Battery Bank Housing – Renewable Energy Developer",
    client: "Renewable EPC Contractor",
    location: "GCC Region",
    scope: "GRP battery enclosures for 48 MW solar farm.",
    solution: "Custom battery cabinets with thermal ventilation, fire-retardant interior, and knockouts for DC routing.",
    outcomes: [
      "Improved thermal management",
      "Zero degradation despite high desert UV exposure",
      "Reduced O&M workload by 28%"
    ],
    imageUrl: "https://images.unsplash.com/photo-1558495034-7389146f3d1b?q=80&w=2070&auto=format&fit=crop",
    imageHint: "solar farm"
  },
  {
    id: "proj-3",
    title: "Oil & Gas Instrumentation Protection",
    client: "Oil & Gas Operator",
    location: "Middle East",
    scope: "GRP housings for pressure, flow, and monitoring instruments in high-corrosion environments.",
    solution: "Chemical-resistant GRP enclosures with reinforced doors and stainless hardware.",
    outcomes: [
      "Extended equipment lifecycle",
      "Eliminated metal corrosion failures",
      "Compliance with hazardous-zone material requirements"
    ],
    imageUrl: "https://images.unsplash.com/photo-1572095113977-2d41a794e037?q=80&w=1974&auto=format&fit=crop",
    imageHint: "oil rig"
  },
   {
    id: "proj-4",
    title: "Smart City Field Kiosks",
    client: "Smart City Development Department",
    location: "GCC Municipality",
    scope: "GRP kiosks for payment, ticketing, and service terminals under municipal infrastructure.",
    solution: "Fully-moulded kiosks with insulated walls, ventilation grills, and branded finishes.",
    outcomes: [
      "Faster deployment cycles",
      "Reduced vandalism and weather-induced downtime",
      "Standardized kiosk architecture across multiple districts"
    ],
    imageUrl: "https://images.unsplash.com/photo-1599838988636-e070dba7f7f2?q=80&w=1964&auto=format&fit=crop",
    imageHint: "city kiosk"
  },
  {
    id: "proj-5",
    title: "Telecom Network Expansion",
    client: "National Telecom Operator",
    location: "UAE",
    scope: "Outdoor GRP cabinets for remote telecom equipment.",
    solution: "Non-conductive GRP enclosures with IP-rated sealing and battery-integration compartments.",
    outcomes: [
      "Improved uptime in desert and coastal sites",
      "Eliminated rust-related cabinet failures",
      "Reduced operational replacement cost"
    ],
    imageUrl: "https://images.unsplash.com/photo-1623091953580-24aaa96cb349?q=80&w=1974&auto=format&fit=crop",
    imageHint: "telecom tower"
  },
]

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container max-w-7xl px-4 py-12 md:px-6 md:py-20">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
                Project Portfolio
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
                Showcasing our capabilities in government projects, utility installations, smart city deployments, and custom corporate builds.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {projects?.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 150}>
                <Card className="overflow-hidden">
                   <div className="grid grid-cols-1 lg:grid-cols-2">
                     <div className="relative min-h-[300px] lg:min-h-0">
                       <Image
                          src={project.imageUrl}
                          alt={project.title}
                          data-ai-hint={project.imageHint}
                          fill
                          className="object-cover"
                        />
                     </div>
                     <div className="p-6 md:p-8">
                       <Badge variant="secondary" className="mb-2">{project.client}</Badge>
                       <h2 className="text-2xl font-bold font-headline">{project.title}</h2>
                       <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                       </div>
                       <div className="mt-6">
                         <h3 className="font-semibold text-lg">Scope</h3>
                         <p className="text-muted-foreground mt-1">{project.scope}</p>
                       </div>
                        <div className="mt-4">
                         <h3 className="font-semibold text-lg">Solution</h3>
                         <p className="text-muted-foreground mt-1">{project.solution}</p>
                       </div>
                       <div className="mt-4">
                         <h3 className="font-semibold text-lg">Outcome</h3>
                         <ul className="mt-2 space-y-2">
                           {project.outcomes.map(outcome => (
                              <li key={outcome} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 mt-1 text-accent" /> <span className="text-muted-foreground">{outcome}</span></li>
                           ))}
                         </ul>
                       </div>
                     </div>
                   </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
