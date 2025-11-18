
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Microscope, PackageCheck, Truck } from "lucide-react";

const iqcItems = [
    "Verification of resin, glass fiber, catalysts",
    "Material batch certification check",
    "Visual and dimensional acceptance",
    "Moisture & contamination screening",
];

const ipqcItems = [
    "Resin mixing accuracy checks",
    "Layer-by-layer composite inspection",
    "Cure cycle monitoring",
    "Gelcoat integrity verification",
    "Hardware, locks & hinges alignment tests",
];

const fqcItems = [
    "Dimensional inspection",
    "IP rating verification (IP65/IP66)",
    "Mechanical testing",
    "Surface finish inspection",
    "Door alignment & closing force check",
    "Labeling, branding & compliance stamp",
];

const qualityDocs = [
    "Inspection reports",
    "Material traceability sheets",
    "Compliance certificates",
    "Test records",
    "Packing & dispatch verification",
];

export default function QaQcPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-6xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">QA/QC Framework</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-5xl">
                        EMPHZ runs a rigid, traceable quality control workflow from raw material to finished product.
                    </p>
                </ScrollReveal>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <ScrollReveal delay={200}>
                        <Card className="h-full bg-card/50">
                            <CardHeader className="flex-row items-center gap-4">
                                <Truck className="w-8 h-8 text-accent" />
                                <CardTitle className="font-headline text-xl">Incoming Quality Control (IQC)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-muted-foreground">
                                    {iqcItems.map(item => <li key={item} className="flex items-start gap-3"><Check className="w-4 h-4 mt-1 text-accent" /><span>{item}</span></li>)}
                                </ul>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                     <ScrollReveal delay={300}>
                        <Card className="h-full bg-card/50">
                            <CardHeader className="flex-row items-center gap-4">
                                <Microscope className="w-8 h-8 text-accent" />
                                <CardTitle className="font-headline text-xl">In-Process Quality Control (IPQC)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-muted-foreground">
                                    {ipqcItems.map(item => <li key={item} className="flex items-start gap-3"><Check className="w-4 h-4 mt-1 text-accent" /><span>{item}</span></li>)}
                                </ul>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                     <ScrollReveal delay={400}>
                        <Card className="h-full bg-card/50">
                            <CardHeader className="flex-row items-center gap-4">
                                <PackageCheck className="w-8 h-8 text-accent" />
                                <CardTitle className="font-headline text-xl">Final Quality Control (FQC)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-muted-foreground">
                                    {fqcItems.map(item => <li key={item} className="flex items-start gap-3"><Check className="w-4 h-4 mt-1 text-accent" /><span>{item}</span></li>)}
                                </ul>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                </div>
                
                <ScrollReveal delay={500} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline text-center">Quality Documentation</h2>
                    <p className="mt-4 text-lg text-muted-foreground text-center">Each batch is supported with:</p>
                     <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-muted-foreground">
                        {qualityDocs.map(item => (
                            <li key={item} className="text-center p-4 bg-card/50 rounded-lg font-medium text-foreground">{item}</li>
                        ))}
                    </ul>
                </ScrollReveal>
                
                <ScrollReveal delay={600} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline text-center">Quality Commitment</h2>
                    <p className="mt-4 text-xl bg-primary/5 border-l-4 border-accent p-6 rounded-r-lg text-foreground max-w-5xl mx-auto text-center font-semibold">
                       Every enclosure, kiosk, cabinet, and GRP component is manufactured with the same standard: Long-lasting, corrosion-proof, compliant, dependable.
                    </p>
                </ScrollReveal>

            </main>
            <SiteFooter />
        </>
    );
}
