
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "EMPHZ delivered enclosure systems that exceeded our field-performance expectations. Their GRP quality, material consistency, and approval-driven engineering made commissioning seamless.",
        author: "Senior Engineer",
        company: "National Power & Water Authority",
        sector: "Utility Sector"
    },
    {
        quote: "Corrosion was destroying our previous metal cabinets. EMPHZ provided a long-term GRP solution that eliminated failures and cut downtime significantly.",
        author: "Maintenance Superintendent",
        company: "Oil & Gas Operations",
        sector: "Oil & Gas"
    },
    {
        quote: "The custom battery enclosures were engineered exactly to our project specifications. EMPHZ’s lead time, documentation, and quality control were flawless.",
        author: "Project Director",
        company: "Solar EPC Contractor",
        sector: "Solar EPC"
    },
    {
        quote: "Their GRP cabinets brought real durability to our outdoor nodes. Zero corrosion, stable performance, and easy installation.",
        author: "Infrastructure Manager",
        company: "Telecom Operator",
        sector: "Telecom"
    }
];

export default function TestimonialsPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                 <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Client Testimonials</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           Hear from industry leaders who trust EMPHZ for their mission-critical infrastructure needs.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <ScrollReveal key={i} delay={i * 150}>
                            <Card className="h-full flex flex-col">
                                <CardContent className="p-6 flex-grow flex flex-col">
                                    <Quote className="w-8 h-8 text-accent mb-4" />
                                    <p className="text-muted-foreground italic flex-grow">"{testimonial.quote}"</p>
                                    <div className="mt-6 text-right">
                                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>

            </main>
            <SiteFooter />
        </>
    );
}
