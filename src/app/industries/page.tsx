
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const industries = [
    { name: "Tourism & Resorts", description: "High-performance villas and cabins for resort destinations." },
    { name: "Construction", description: "Toilet cabins, office cabins, and site enclosures." },
    { name: "Government / Panchayat", description: "Sanitation cabins, kiosks, utility enclosures." },
    { name: "Solar EPC", description: "Battery/inverter enclosures built for environmental exposure." },
    { name: "Retail & Food Service", description: "Fast-deploy GRP kiosks and retail pods." },
    { name: "Security", description: "Guard cabins for residential, commercial, and industrial sites." },
];

export default function IndustriesPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Industries We Serve</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           From tourism to critical infrastructure, our GRP solutions are engineered to meet the specific demands of diverse sectors.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                         <ScrollReveal key={industry.name} delay={index * 100}>
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 font-headline text-xl">
                                        <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                                        {industry.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{industry.description}</p>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
