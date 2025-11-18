
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const capabilities = [
    "Custom mould design & fabrication",
    "Multi-compartment & partitioned layouts",
    "Integrated ventilation, HVAC, or cooling systems",
    "Specific IP rating requirements (IP66, IP67)",
    "Custom cutouts for cable glands, HMIs, or controls",
    "Reinforced load-bearing structures",
    "Specialized color matching (RAL)",
    "Integration with electrical hardware & busbars",
];

const processSteps = [
    { title: "Consultation", description: "Define project scope, technical specs, and environmental conditions." },
    { title: "Design & Engineering", description: "Our team creates detailed 3D models and CAD drawings for review." },
    { title: "Mould Development", description: "A custom mould is fabricated based on the approved design." },
    { title: "Prototyping & Testing", description: "A prototype is manufactured and rigorously tested for compliance." },
    { title: "Full-Scale Production", description: "Once approved, we proceed with full-scale manufacturing." },
    { title: "Delivery", description: "Final products are delivered with complete quality documentation." },
];

export default function CustomPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Customized GRP Enclosures</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        For projects with unique dimensional, operational, or environmental requirements, EMPHZ provides end-to-end custom engineering. Our teams work with you to design, prototype, and manufacture GRP enclosures tailored to your exact specifications.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline">Common Customizations</h2>
                    <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-muted-foreground">
                        {capabilities.map(capability => (
                            <li key={capability} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg"><CheckCircle className="h-5 w-5 text-foreground/60 shrink-0" /> {capability}</li>
                        ))}
                    </ul>
                </ScrollReveal>
                
                <ScrollReveal delay={300} className="mt-12">
                     <h2 className="text-3xl font-bold font-headline text-center">Our Customization Process</h2>
                     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <Card key={step.title} className="bg-card/50">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-4 font-headline">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">{index + 1}</span>
                                        {step.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                     </div>
                </ScrollReveal>

                <ScrollReveal delay={400} className="mt-16 text-center">
                    <h2 className="text-2xl font-bold font-headline">Have a unique requirement?</h2>
                    <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                        Our engineering team is ready to translate your concept into a production-ready GRP solution.
                    </p>
                    <Button asChild size="lg" className="mt-6 group">
                        <Link href="/contact">
                            Discuss Your Project
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
