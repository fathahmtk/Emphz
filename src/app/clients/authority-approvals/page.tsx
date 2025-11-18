
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const approvals = [
    "Power & Water Authorities",
    "Municipality & Civil Defense Departments",
    "Oil & Gas Operators",
    "Solar & Renewable Energy Authorities",
    "Telecommunications Authorities",
    "Industrial Zones & Free Zones",
];

const benefits = [
    "Faster project acceptance",
    "Reduced engineering review cycles",
    "Risk-free compliance alignment",
    "Streamlined procurement clearance",
];

export default function AuthorityApprovalsPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Authority Approvals</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        EMPHZ products are engineered and validated to meet the technical specifications of regional and national authorities across utilities, infrastructure, and industrial sectors.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline">Approvals Include</h2>
                    <div className="flex flex-wrap gap-4 mt-4">
                        {approvals.map(approval => (
                            <Badge key={approval} variant="secondary" className="text-lg p-2">{approval}</Badge>
                        ))}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">(Actual authority list can be added once you provide your specific approvals.)</p>
                </ScrollReveal>
                
                <ScrollReveal delay={300} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline">Approval Benefits</h2>
                    <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                        {benefits.map(benefit => (
                            <li key={benefit} className="flex items-center gap-3 p-4 bg-card/50 rounded-lg text-muted-foreground">
                                <CheckCircle className="h-5 w-5 text-accent shrink-0" /> 
                                <span className="text-foreground">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
