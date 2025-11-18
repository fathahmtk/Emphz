
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";

const complianceList = [
    "ISO 9001 – Quality Management Systems",
    "ISO 14001 – Environmental Management",
    "ISO 45001 – Occupational Health & Safety",
    "IP65 / IP66 Protection Ratings",
    "ASTM D256, D638, D790 – Composite Material Standards",
    "Fire-Rated GRP Formulations (on request)",
    "UV, Thermal & Impact Testing",
    "Chemical Resistance Compliance (Industry grade)",
];

const testingList = [
    "Mechanical strength tests",
    "Flammability & heat distortion tests",
    "UV aging resistance",
    "Water tightness & pressure tests",
    "Dimensional verification",
    "Load & hinge endurance cycles",
];


export default function CertificationPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-5xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Quality Product Certification</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        EMPHZ operates under a zero-compromise quality philosophy. Every product is engineered, moulded, and tested to meet international performance standards and regional utility requirements.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline">Certification Framework</h2>
                    <p className="mt-2 text-muted-foreground">Our GRP/FRP products comply with:</p>
                    <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                        {complianceList.map(item => (
                            <li key={item} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg"><CheckCircle className="h-5 w-5 text-accent" /> {item}</li>
                        ))}
                    </ul>
                </ScrollReveal>

                <ScrollReveal delay={300} className="mt-10">
                    <h2 className="text-3xl font-bold font-headline">Testing & Inspection</h2>
                    <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                         {testingList.map(item => (
                            <li key={item} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg"><CheckCircle className="h-5 w-5 text-accent" /> {item}</li>
                        ))}
                    </ul>
                </ScrollReveal>
                
                <ScrollReveal delay={400} className="mt-12">
                     <h2 className="text-3xl font-bold font-headline">Outcome</h2>
                    <p className="mt-4 text-lg bg-primary/5 border-l-4 border-accent p-6 rounded-r-lg text-foreground">
                       A certified product lineage trusted by utilities, EPC contractors, and industrial clients across high-risk and high-performance environments.
                    </p>
                </ScrollReveal>

            </main>
            <SiteFooter />
        </>
    );
}
