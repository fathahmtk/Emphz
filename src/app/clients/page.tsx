
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const clientSegments = [
    "Power & Water Authorities",
    "Oil & Gas Operators",
    "Municipalities & Civil Defense",
    "Telecom Operators",
    "Construction & EPC Contractors",
    "Solar & Renewable Energy Developers",
    "Industrial Facilities & Manufacturing Plants",
    "Smart City & Infrastructure Projects",
];

const expectationAlignment = [
    "Compliance with technical specifications",
    "Fast engineering turnaround",
    "Deployment-ready quality",
    "Documented test reports and certifications",
    "Zero-defect delivery culture",
];

const whyChooseEmphz = [
    "Approved in high-compliance sectors",
    "Proven field performance across the region",
    "Reliable lead times and predictable quality",
    "Ability to customize at scale",
]

export default function ClientsPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Our Clients</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        EMPHZ works with a diversified portfolio of government authorities, utilities, EPC contractors, industrial plants, and infrastructure developers. Our GRP solutions are deployed in mission-critical environments where performance, safety, and compliance cannot fail.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline">Client Segments</h2>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {clientSegments.map((segment) => (
                            <Badge key={segment} variant="secondary" className="text-base py-1 px-3">{segment}</Badge>
                        ))}
                    </div>
                </ScrollReveal>
                
                <ScrollReveal delay={300} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline text-center">Why Leading Organizations Choose EMPHZ</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-xl">Client Expectation Alignment</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {expectationAlignment.map(item => (
                                         <li key={item} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 mt-1 text-foreground/60" /> <span className="text-muted-foreground">{item}</span></li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                         <Card className="lg:col-span-2">
                            <CardHeader>
                                <CardTitle className="font-headline text-xl">Key Advantages</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <ul className="space-y-3">
                                    {whyChooseEmphz.map(item => (
                                         <li key={item} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 mt-1 text-foreground/60" /> <span className="text-muted-foreground">{item}</span></li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </ScrollReveal>

            </main>
            <SiteFooter />
        </>
    );
}
