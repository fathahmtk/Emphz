
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function CEOMessagePage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">CEO's Message</h1>
                </ScrollReveal>
                <ScrollReveal delay={200} className="mt-8 space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        At EMPHZ, our mission is straightforward: deliver engineered GRP solutions that stand the test of time and elevate infrastructure reliability for the industries we serve.
                    </p>
                    <p>
                        We operate in markets where failure is not an option. Utilities, EPC contractors, and government stakeholders choose us because we bring more than products — we bring commitment, technical rigor, and a customer-centric approach built on trust.
                    </p>
                    <p>
                        Our teams are empowered to innovate, challenge limitations, and deliver consistent excellence. As infrastructure demands grow more complex, EMPHZ will continue investing in advanced manufacturing, material technology, and digital expansion to remain a strategic partner for our clients.
                    </p>
                    <p>
                        Our promise is simple: uncompromising quality, sustained performance, and solutions built for the long term.
                    </p>
                    <p className="font-semibold text-foreground">
                        — CEO, EMPHZ
                    </p>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
