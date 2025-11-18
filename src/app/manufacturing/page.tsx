
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Factory, Microscope, Package } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const manufacturingProcesses = [
    {
        icon: Factory,
        title: "Advanced GRP/FRP Moulding",
        description: "Utilizing high-precision moulds and automated resin injection systems to produce consistent, high-tolerance composite parts. Our process ensures material integrity and optimal structural performance.",
        image: PlaceHolderImages.find(p => p.id === 'hero-extra-2'),
    },
    {
        icon: Microscope,
        title: "Finishing & Assembly",
        description: "Post-moulding, each component undergoes a rigorous finishing process. Our assembly lines are equipped for hardware integration, sealing, and final compliance checks.",
        image: PlaceHolderImages.find(p => p.id === 'hero-extra-5'),
    },
    {
        icon: Package,
        title: "Integrated Quality Control",
        description: "QA/QC is embedded at every stage, from raw material verification to final dispatch inspection. We conduct mechanical, dimensional, and environmental tests to guarantee performance.",
        image: PlaceHolderImages.find(p => p.id === 'hero-extra-6'),
    }
];

export default function ManufacturingPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Advanced Manufacturing Ecosystem</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                            EMPHZ operates a vertically integrated manufacturing facility engineered for precision, scalability, and quality. Our ecosystem combines advanced composite technology with automated processes and a rigid quality framework.
                        </p>
                    </div>
                </ScrollReveal>
                
                <div className="space-y-12">
                    {manufacturingProcesses.map((process, index) => (
                        <ScrollReveal key={process.title} delay={index * 200}>
                            <Card className="overflow-hidden md:grid md:grid-cols-2 group">
                                {process.image && (
                                    <div className="relative aspect-video">
                                        <Image 
                                            src={process.image.imageUrl} 
                                            alt={process.description}
                                            data-ai-hint={process.image.imageHint}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                                <div className="flex flex-col justify-center">
                                    <CardHeader className="flex-row items-start gap-4">
                                        <process.icon className="w-10 h-10 mt-1 text-accent shrink-0" />
                                        <div>
                                            <CardTitle className="font-headline text-2xl">{process.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{process.description}</p>
                                    </CardContent>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={400} className="mt-16">
                     <div className="text-center">
                        <h2 className="text-3xl font-bold font-headline">Our Capabilities</h2>
                        <p className="mt-2 text-muted-foreground">Precision-engineered solutions, delivered at scale.</p>
                        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                            <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                                <CheckCircle className="w-5 h-5 mt-1 text-foreground/60 shrink-0"/>
                                <div>
                                    <h3 className="font-semibold">50,000+</h3>
                                    <p className="text-sm text-muted-foreground">Unit Annual Capacity</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                                <CheckCircle className="w-5 h-5 mt-1 text-foreground/60 shrink-0"/>
                                <div>
                                    <h3 className="font-semibold">ISO 9001</h3>
                                    <p className="text-sm text-muted-foreground">Certified Processes</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                                <CheckCircle className="w-5 h-5 mt-1 text-foreground/60 shrink-0"/>
                                <div>
                                    <h3 className="font-semibold">Custom Moulding</h3>
                                    <p className="text-sm text-muted-foreground">In-House Tooling</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                                <CheckCircle className="w-5 h-5 mt-1 text-foreground/60 shrink-0"/>
                                <div>
                                    <h3 className="font-semibold">Global Logistics</h3>
                                    <p className="text-sm text-muted-foreground">Worldwide Shipping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </main>
            <SiteFooter />
        </>
    );
}
