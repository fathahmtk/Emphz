
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const capabilities = [
    "Custom mould design",
    "Multi-compartment configurations",
    "Anti-condensation design",
    "Integration with electrical hardware",
];

export default function CustomPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Customized GRP Enclosures</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Tailor-made GRP enclosures engineered to meet unique dimensional, operational, or environmental requirements.
                    </p>
                </ScrollReveal>

                <div className="mt-12">
                    <ScrollReveal delay={200}>
                        <h2 className="text-2xl font-bold font-headline">Capabilities</h2>
                        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                            {capabilities.map(capability => (
                                <li key={capability} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg"><CheckCircle className="h-5 w-5 text-accent" /> {capability}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
