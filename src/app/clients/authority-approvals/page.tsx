
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const sectorsWithApprovals = [
    "Power & Water: Substations, feeder pillars, distribution boards",
    "Oil & Gas: Fire & safety systems, instrumentation housings",
    "Solar & Renewables: Battery banks, DC combiner cabinets",
    "Telecom: Outdoor battery and router cabinets",
    "Municipalities: Fire cabinets, safety kiosks, utility shelters",
];

const approvalBenefits = [
    "Shorter review cycles",
    "Faster project mobilization",
    "Pre-validated engineering specs",
    "Lower procurement risk",
];

export default function AuthorityApprovalsPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Authority Approvals</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        EMPHZ products are engineered to match the approval criteria of regional authorities. Our enclosures and kiosks have been selected for multiple large-scale government deployments due to their technical consistency and compliance transparency.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline">Sectors with Approvals</h2>
                    <ul className="mt-4 space-y-4 text-lg">
                        {sectorsWithApprovals.map(sector => (
                             <li key={sector} className="flex items-start gap-4">
                                <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-accent" />
                                <span className="text-muted-foreground">{sector}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>
                
                <ScrollReveal delay={300} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline">Approval Benefits for Clients</h2>
                    <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                        {approvalBenefits.map(benefit => (
                            <li key={benefit} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg">
                                <CheckCircle className="h-5 w-5 text-accent shrink-0" /> 
                                <span className="text-foreground font-medium">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                     <p className="mt-4 text-sm text-muted-foreground">(Add specific authority names once you provide them.)</p>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
