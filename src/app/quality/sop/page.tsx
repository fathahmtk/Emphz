
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Factory, Microscope, Truck } from "lucide-react";

const manufacturingSops = [
    "Raw material inspection & verification",
    "Resin mixing & reinforcement preparation",
    "Mould preparation & curing process",
    "Demoulding procedures",
    "Surface finishing & sanding",
    "Hardware installation & sealing",
    "Painting, gelcoating & labeling",
];

const qcSops = [
    "Incoming material QA",
    "In-process inspections",
    "Final product quality checks",
    "IP protection testing",
    "Locking system & hinge cycle tests",
    "Documentation & traceability",
];

const operationalSops = [
    "Handling & storage",
    "Safety procedures for chemical materials",
    "Preventive maintenance",
    "Non-conformance & corrective action handling",
    "Packaging & dispatch protocols",
];

export default function SopPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Standard Operating Procedures</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        EMPHZ maintains SOPs for every stage of production and operations to ensure repeatability, safety, and compliance.
                    </p>
                </ScrollReveal>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <ScrollReveal delay={200}>
                        <Card className="h-full bg-card/50">
                            <CardHeader className="flex-row items-center gap-4">
                                <Factory className="w-8 h-8 text-foreground/60" />
                                <CardTitle className="font-headline text-2xl">Manufacturing</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-muted-foreground">
                                    {manufacturingSops.map(item => <li key={item} className="flex items-start gap-3"><Check className="w-4 h-4 mt-1 text-foreground/60" /><span>{item}</span></li>)}
                                </ul>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                     <ScrollReveal delay={300}>
                        <Card className="h-full bg-card/50">
                            <CardHeader className="flex-row items-center gap-4">
                                <Microscope className="w-8 h-8 text-foreground/60" />
                                <CardTitle className="font-headline text-2xl">Quality Control</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-muted-foreground">
                                    {qcSops.map(item => <li key={item} className="flex items-start gap-3"><Check className="w-4 h-4 mt-1 text-foreground/60" /><span>{item}</span></li>)}
                                </ul>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                     <ScrollReveal delay={400}>
                        <Card className="h-full bg-card/50">
                            <CardHeader className="flex-row items-center gap-4">
                                <Truck className="w-8 h-8 text-foreground/60" />
                                <CardTitle className="font-headline text-2xl">Operational</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-muted-foreground">
                                    {operationalSops.map(item => <li key={item} className="flex items-start gap-3"><Check className="w-4 h-4 mt-1 text-foreground/60" /><span>{item}</span></li>)}
                                </ul>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                </div>
                
                <ScrollReveal delay={500} className="mt-12">
                     <h2 className="text-3xl font-bold font-headline text-center">Outcome</h2>
                    <p className="mt-4 text-lg bg-primary/5 border-l-4 border-foreground/60 p-6 rounded-r-lg text-foreground max-w-5xl mx-auto">
                       Every product that leaves the factory is consistent, compliant, and production-controlled.
                    </p>
                </ScrollReveal>

            </main>
            <SiteFooter />
        </>
    );
}
