
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function LeadershipPage() {
    const ceoImage = PlaceHolderImages.find(p => p.id === 'ceo-portrait');

    return (
        <>
            <SiteHeader />
            <main className="container py-24 md:py-32">
                <div className="mx-auto max-w-4xl">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">A Message from Our CEO</h1>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <ScrollReveal delay={200} className="md:col-span-1 flex flex-col items-center">
                            {ceoImage && (
                                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg shadow-lg mb-4">
                                     <Image 
                                        src={ceoImage.imageUrl} 
                                        alt="Muhammed Rashik, CEO of EMPHZ" 
                                        data-ai-hint={ceoImage.imageHint}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                     />
                                </div>
                            )}
                            <div className="text-center mt-4">
                                <h2 className="text-2xl font-bold font-headline">Muhammed Rashik</h2>
                                <p className="text-muted-foreground">CEO, EMPHZ</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={300} className="md:col-span-2">
                            <div className="relative">
                                <Quote className="absolute -top-4 -left-6 h-12 w-12 text-primary/10" />
                                <blockquote className="prose prose-lg text-foreground/80 leading-relaxed italic border-l-4 border-primary pl-6">
                                    <p>
                                    At EMPHZ, we’re not here to play small. We’re here to build a manufacturing ecosystem that delivers consistent performance, long-term durability, and market-ready engineering solutions. The industry is shifting fast, and I’m not interested in following trends — I’m focused on setting the operational benchmark.
                                    </p>
                                </blockquote>
                            </div>
                             <div className="mt-8 space-y-6 text-foreground/90">
                                <p>Our mandate is simple: engineer products that outperform, standardize processes that scale, and execute with zero drag. We are building a portfolio that positions EMPHZ as a dependable partner for infrastructure, utilities, and industrial clients who demand reliability without compromise.</p>
                                <div>
                                    <h3 className="font-bold text-lg font-headline">I push the organization on three fronts:</h3>
                                    <ul className="mt-2 list-disc list-inside space-y-2 text-muted-foreground">
                                        <li><strong className="text-foreground/90">Operational discipline</strong> — no shortcuts, no excuses.</li>
                                        <li><strong className="text-foreground/90">Product integrity</strong> — every unit must justify our brand.</li>
                                        <li><strong className="text-foreground/90">Customer outcomes</strong> — delivery that meets timelines, specs, and expectations without friction.</li>
                                    </ul>
                                </div>
                                <p>This business is built on accountability and forward momentum. My commitment is to keep EMPHZ agile, engineering-driven, and future-aligned as we expand our footprint across new markets and verticals.</p>
                                <p className="font-bold">We’re just getting started — and we’re scaling with intent.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
