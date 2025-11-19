
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const manufacturingStrengths = [
    "Proprietary GRP lay-up and resin standards",
    "CNC-assisted mold accuracy",
    "Controlled curing processes",
    "Industrial painting and finishing systems",
    "Standardization for repeat orders",
    "Scalable production capacity",
    "End-to-end QC"
];

const keralaOperations = [
    "Client meetings",
    "Design approvals",
    "Site measurements",
    "Delivery coordination",
    "Installation & commissioning",
    "After-sales support"
];


export default function AboutPage() {
    const ceoImage = PlaceHolderImages.find(p => p.id === 'ceo-portrait');

    return (
        <>
            <SiteHeader />
            <main className="container py-24 md:py-32">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Who We Are</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
                            EMPHZ is a dedicated GRP engineering company that brings industrial manufacturing standards to the composite cabin and enclosure sector. Our production facility in Mysore operates with streamlined processes, standardized molds, consistency-driven finishing, and strict QC cycles. Our Kerala operations team manages sales, site evaluations, installations, and after-sales support across the state.
                        </p>
                         <p className="mt-2 max-w-3xl mx-auto text-muted-foreground md:text-lg font-semibold">
                            We exist to eliminate low-quality fabrication and bring high-performance GRP engineering to South India.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={200} className="mt-12">
                     <Card className="bg-primary/5">
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <p className="text-lg text-foreground/80">
                                Deliver durable, scalable, and design-forward GRP structures that outperform traditional materials and enable rapid deployment across industries.
                            </p>
                        </CardContent>
                     </Card>
                </ScrollReveal>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ScrollReveal delay={300}>
                        <h2 className="text-3xl font-bold font-headline mb-6">Our Manufacturing Strength</h2>
                         <ul className="space-y-3">
                            {manufacturingStrengths.map(item => (
                                <li key={item} className="flex items-center gap-3 text-muted-foreground"><CheckCircle className="w-5 h-5 text-primary"/> {item}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                     <ScrollReveal delay={400}>
                        <h2 className="text-3xl font-bold font-headline mb-6">Kerala Operations Office</h2>
                        <p className="text-muted-foreground mb-4">Our Kerala team manages:</p>
                         <ul className="space-y-3">
                            {keralaOperations.map(item => (
                                <li key={item} className="flex items-center gap-3 text-muted-foreground"><CheckCircle className="w-5 h-5 text-primary"/> {item}</li>
                            ))}
                        </ul>
                        <p className="mt-4 text-foreground/90 font-semibold italic">Kerala expects speed — we deliver it.</p>
                    </ScrollReveal>
                </div>


                <div className="mt-20 max-w-4xl mx-auto">
                    <ScrollReveal delay={500}>
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold font-headline">Leadership Approach</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
                             <div className="md:col-span-1">
                                {ceoImage && (
                                     <div className="relative aspect-square w-full max-w-[250px] mx-auto rounded-lg overflow-hidden shadow-lg">
                                        <Image
                                            src={ceoImage.imageUrl}
                                            alt={ceoImage.description}
                                            data-ai-hint={ceoImage.imageHint}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                )}
                             </div>
                             <div className="md:col-span-2 relative">
                                <Quote className="absolute -top-6 -left-6 h-16 w-16 text-primary/10" />
                                <blockquote className="text-2xl font-semibold text-foreground/90 italic text-center md:text-left">
                                    We operate with clarity, speed, and outcome-focused execution. No delays. No excuses. Only performance.
                                </blockquote>
                             </div>
                        </div>
                    </ScrollReveal>
                </div>

            </main>
            <SiteFooter />
        </>
    );
}
