
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const keyFeatures = [
    "Single & double-door options",
    "Integrated ventilation",
    "Insulated walls and roof",
    "Custom branding options",
    "Electrical-ready interior",
];

const applications = [
    "Utility field kiosks",
    "Payment kiosks",
    "Guard booths",
    "Ticketing counters",
    "Micro control rooms",
];

const customCapabilities = [
    "Custom dimensions",
    "Window/door configurations",
    "HVAC-ready interiors",
    "Equipment mounting provisions",
    "Internal partitioning",
]

export default function KiosksPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-5xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">GRP/FRP Kiosks</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Fully-moulded GRP kiosks for utilities, security, ticketing, temporary offices, and field operations. Built for long-term outdoor durability.
                    </p>
                </ScrollReveal>

                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold font-headline">Key Features</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {keyFeatures.map(feature => (
                                <li key={feature} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-accent" /> {feature}</li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <h2 className="text-2xl font-bold font-headline">Applications</h2>
                         <ul className="mt-4 space-y-3 text-muted-foreground">
                            {applications.map(app => (
                                <li key={app} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-accent" /> {app}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
                 <ScrollReveal delay={400} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline">Customized Kiosk Solutions</h2>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Engineered-to-order kiosks that meet architectural, operational, or technical specifications for government and industrial clients.
                    </p>
                    <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                        {customCapabilities.map(capability => (
                            <li key={capability} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg"><CheckCircle className="h-5 w-5 text-accent" /> {capability}</li>
                        ))}
                    </ul>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
