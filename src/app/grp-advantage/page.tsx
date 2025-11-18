
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Zap, ShieldCheck, Sun, Wind, Droplets } from "lucide-react";

export default function GrpAdvantagePage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-5xl py-12 md:py-20">
                 <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">The GRP Advantage</h1>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                        GRP (Glass-Reinforced Plastic) is a strategic material for modern infrastructure — engineered for environments where corrosion, heat, impact, and electrical safety are critical.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={300} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline">Why GRP Wins</h2>
                    <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                        <li className="flex items-start gap-4 p-4 rounded-lg bg-card/50">
                            <Droplets className="mt-1 h-6 w-6 shrink-0 text-accent" />
                            <div>
                                <h3 className="font-semibold text-foreground">Corrosion-Proof</h3>
                                <p className="text-muted-foreground text-base mt-1">Performs in coastal, industrial, and chemically aggressive zones where metal fails.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-lg bg-card/50">
                            <Wind className="mt-1 h-6 w-6 shrink-0 text-accent" />
                             <div>
                                <h3 className="font-semibold text-foreground">Lightweight, High Strength</h3>
                                <p className="text-muted-foreground text-base mt-1">Easy to handle, transport, and install without heavy equipment.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-lg bg-card/50">
                            <Sun className="mt-1 h-6 w-6 shrink-0 text-accent" />
                             <div>
                                <h3 className="font-semibold text-foreground">Fire & UV Resistant</h3>
                                <p className="text-muted-foreground text-base mt-1">Engineered to meet international safety and endurance standards.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 p-4 rounded-lg bg-card/50">
                            <Zap className="mt-1 h-6 w-6 shrink-0 text-accent" />
                             <div>
                                <h3 className="font-semibold text-foreground">Electrical Safety</h3>
                                <p className="text-muted-foreground text-base mt-1">Zero conductivity — ideal for power, utilities, and instrumentation applications.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-4 p-4 rounded-lg bg-card/50 md:col-span-2">
                            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-accent" />
                             <div>
                                <h3 className="font-semibold text-foreground">Long Lifecycle</h3>
                                <p className="text-muted-foreground text-base mt-1">Reduced maintenance, lower operational cost, and improved field reliability.</p>
                            </div>
                        </li>
                    </ul>
                </ScrollReveal>
                
                <ScrollReveal delay={400}>
                    <p className="mt-12 text-lg bg-primary/5 border-l-4 border-accent p-6 rounded-r-lg text-foreground">
                        At EMPHZ, GRP is not just a material — it’s a performance platform. Our formulations, moulds, and production methods are built to deliver consistent, authority-approved results project after project.
                    </p>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
