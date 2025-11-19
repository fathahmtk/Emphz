
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle, Droplets, Sun, Wind } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ImageGallery } from "@/components/image-gallery";

const useCases = [
    { title: "Panchayat & Public Works", description: "Durable, low-maintenance toilet cabins, bus shelters, and utility kiosks for public infrastructure projects." },
    { title: "Tourism & Resorts", description: "High-end resort villas, beach cabins, and amenities that withstand coastal humidity and offer luxury aesthetics." },
    { title: "Solar & Electrical EPC", description: "IP-rated, weatherproof enclosures for solar inverters, batteries, and control panels, ensuring long-term protection." },
    { title: "Construction Sites", description: "Quick-deploy site offices, labor accommodation, and portable toilets for fast-moving construction projects." },
];

const climateAdvantages = [
    { icon: Droplets, title: "Monsoon-Proof", description: "Our one-piece moulded GRP structures are 100% leak-proof, preventing water damage and mold growth common in Kerala's heavy rainfall." },
    { icon: Sun, title: "UV Resistant", description: "A protective gelcoat finish prevents sun damage, discoloration, and structural degradation from intense tropical sunlight." },
    { icon: Wind, title: "Corrosion-Free", description: "GRP is inert to salt-laden coastal air and high humidity, eliminating the rust and corrosion that destroys metal alternatives." },
];

const galleryImages = PlaceHolderImages.filter(p => ['gallery-project-1', 'gallery-project-2', 'gallery-kiosk', 'villa-e7'].includes(p.id));

export default function KeralaPage() {
    return (
        <>
            <SiteHeader />
            <main className="py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12 container">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">GRP Cabin Supplier in Kerala</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           Fast supply and installation of high-quality GRP enclosures, toilet cabins, kiosks, and resort villas across all districts of Kerala.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="container space-y-16">
                    <ScrollReveal delay={100}>
                         <Card className="bg-secondary/30">
                            <CardHeader>
                                <CardTitle className="text-2xl font-headline">Local Presence, Faster Execution</CardTitle>
                            </CardHeader>
                            <CardContent>
                                 <p className="text-lg text-foreground/80">
                                    Our Kerala operations office manages everything from initial site visits and design approvals to delivery coordination and final installation. This local presence ensures your project moves faster, with a team that understands the specific requirements of the region.
                                </p>
                            </CardContent>
                         </Card>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={200}>
                        <h2 className="text-3xl font-bold font-headline text-center">Engineered for Kerala's Climate</h2>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {climateAdvantages.map(adv => (
                                <Card key={adv.title} className="text-center">
                                    <CardHeader className="items-center">
                                         <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                            <adv.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle>{adv.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{adv.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </ScrollReveal>

                     <ScrollReveal delay={300}>
                        <h2 className="text-3xl font-bold font-headline text-center">Key Use Cases in Kerala</h2>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {useCases.map(useCase => (
                                <Card key={useCase.title} className="bg-card/50">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary"/> {useCase.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{useCase.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </ScrollReveal>
                    
                     <ScrollReveal delay={400}>
                        <h2 className="text-3xl font-bold font-headline text-center">Project Gallery</h2>
                        <div className="mt-8">
                            <ImageGallery images={galleryImages} />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={500} className="mt-16 text-center">
                        <h2 className="text-2xl font-bold font-headline">Ready to start your project in Kerala?</h2>
                        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                            Our local team is ready to provide a quote and a site visit.
                        </p>
                        <Button asChild size="lg" className="mt-6 group">
                            <Link href="/contact">
                                Contact our Kerala Office
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </ScrollReveal>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
