
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CheckCircle } from "lucide-react";

const imsScope = [
    "Product design & engineering",
    "Composite moulding & fabrication",
    "Assembly & finishing",
    "Material traceability",
    "Health, safety, & environmental protocols",
    "Customer service & after-sales support",
];

const imsObjectives = [
    "Deliver defect-free products",
    "Reduce operational risks",
    "Ensure uniform compliance across processes",
    "Maintain environmental stewardship",
    "Strengthen continuous improvement culture",
];

export default function ImsPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Integrated Management System (IMS)</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        EMPHZ operates under a fully integrated management system combining quality, environment, and safety into a single operational framework.
                    </p>
                </ScrollReveal>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ScrollReveal delay={200}>
                        <h2 className="text-3xl font-bold font-headline">IMS Scope</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {imsScope.map(item => (
                                <li key={item} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 mt-1 text-accent" /> {item}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <h2 className="text-3xl font-bold font-headline">IMS Objectives</h2>
                        <ul className="mt-4 space-y-3 text-muted-foreground">
                            {imsObjectives.map(item => (
                                <li key={item} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 mt-1 text-accent" /> {item}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={400} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline">How IMS Drives Value</h2>
                    <div className="mt-4 space-y-2 text-muted-foreground">
                        <p>✓ Standardized processes across all departments</p>
                        <p>✓ Reduced variability and higher field reliability</p>
                        <p>✓ Faster audits and smoother approval with authorities</p>
                        <p>✓ Improved internal & external compliance confidence</p>
                    </div>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
