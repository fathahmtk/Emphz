
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle, Factory, Truck, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const productLines = [
    { title: "GRP Electrical Enclosures", href: "/products/grp-electrical-enclosure" },
    { title: "GRP Portable Toilets", href: "/products/grp-portable-toilet" },
    { title: "GRP Modular Kiosks", href: "/products/grp-modular-kiosk" },
    { title: "GRP Resort Villas", href: "/products/e7-modular-villa" },
    { title: "Custom GRP Fabrication", href: "/products/custom-grp-fabrication" },
];

const manufacturingProcess = [
    "CNC-assisted mold making for precision.",
    "Proprietary GRP lay-up techniques for strength.",
    "Controlled curing environments for consistency.",
    "Industrial-grade painting and finishing.",
    "Rigorous end-to-end quality control cycles."
];

const supplyChain = [
    "Direct factory dispatch from Mysore.",
    "Logistical support across Karnataka, Kerala, and Tamil Nadu.",
    "Coordination with local installation teams.",
    "Scalable capacity for large volume orders."
];


export default function MysorePage() {
    const factoryImage = PlaceHolderImages.find(p => p.id === 'gallery-factory-3');

    return (
        <>
            <SiteHeader />
            <main className="py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12 container">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">GRP Manufacturer in Mysore</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           High-capability GRP manufacturing facility in Mysore, supplying South India with premium enclosures, cabins, and kiosks.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="container space-y-16">
                     <ScrollReveal delay={100}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold font-headline mb-4">Advanced Manufacturing Capability</h2>
                                <p className="text-muted-foreground mb-6">
                                    Our Mysore factory is the heart of our operation. It's equipped with modern machinery and standardized processes to produce GRP products that meet stringent quality and performance benchmarks. We don't just fabricate; we engineer for durability.
                                </p>
                                <Button asChild>
                                    <Link href="/about">Learn More About Us</Link>
                                </Button>
                            </div>
                            {factoryImage && (
                                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                                     <Image
                                        src={factoryImage.imageUrl}
                                        alt={factoryImage.description}
                                        data-ai-hint={factoryImage.imageHint}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            )}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <h2 className="text-3xl font-bold font-headline text-center">Our Manufacturing Process</h2>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                             <Card className="col-span-1 md:col-span-2 lg:col-span-3">
                                <CardHeader>
                                     <CardTitle className="flex items-center gap-3"><Workflow className="w-6 h-6 text-primary"/> Process Excellence</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-muted-foreground">
                                        {manufacturingProcess.map(item => (
                                            <li key={item} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary"/> {item}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                             </Card>
                        </div>
                    </ScrollReveal>
                    
                     <ScrollReveal delay={300}>
                        <h2 className="text-3xl font-bold font-headline text-center">Our Core Product Lines</h2>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {productLines.map(product => (
                                <Link href={product.href} key={product.href}>
                                    <Card className="h-full hover:bg-accent/50 hover:border-primary/30 transition-all">
                                        <CardHeader>
                                            <CardTitle className="text-xl font-headline flex items-center gap-3">
                                                <Factory className="w-5 h-5 text-primary"/>
                                                {product.title}
                                            </CardTitle>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </ScrollReveal>

                     <ScrollReveal delay={400}>
                        <h2 className="text-3xl font-bold font-headline text-center">South India Supply Chain</h2>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                             <Card>
                                <CardHeader>
                                     <CardTitle className="flex items-center gap-3"><Truck className="w-6 h-6 text-primary"/> Logistics & Delivery</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-muted-foreground">
                                        {supplyChain.map(item => (
                                            <li key={item} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary"/> {item}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                             </Card>
                             <div className="flex items-center justify-center p-8 bg-card rounded-lg">
                                <p className="text-lg text-center text-muted-foreground">From our Mysore hub, we ensure timely and reliable delivery of products across the entire South Indian region.</p>
                             </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={500} className="mt-16 text-center">
                        <h2 className="text-2xl font-bold font-headline">Discuss Your Manufacturing Needs</h2>
                        <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                            Learn more about our production capabilities and how we can support your project.
                        </p>
                        <Button asChild size="lg" className="mt-6 group">
                            <Link href="/contact">
                                Request a Factory Tour or Spec Pack
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
