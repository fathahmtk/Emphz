
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const jobListings = {
    "Engineering": ["Composite Engineer", "Mechanical Designer"],
    "Production": ["Factory Supervisor", "Moulding Technician"],
    "QA/QC": ["Quality Inspector"],
    "Sales & BD": ["Technical Sales Engineer"],
    "Operations": ["Logistics Coordinator"]
};

export default function CareersPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Build Your Career in Composite Engineering</h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Join a performance-driven culture in a safe, modern manufacturing environment with continuous training and technical development.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200} className="mt-12">
                    <h2 className="text-3xl font-bold font-headline">Open Positions</h2>
                    <div className="mt-6 space-y-8">
                        {Object.entries(jobListings).map(([department, jobs]) => (
                            <Card key={department}>
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl">{department}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {jobs.map(job => (
                                            <li key={job} className="flex items-center justify-between">
                                                <span className="text-muted-foreground">{job}</span>
                                                <Button variant="outline">Apply</Button>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </ScrollReveal>
                
                <ScrollReveal delay={300} className="mt-12 text-center">
                    <h2 className="text-2xl font-bold">Don't see a fit?</h2>
                    <p className="text-muted-foreground mt-2">Upload your CV and we'll contact you for future openings.</p>
                     <Button className="mt-4">Apply via Form</Button>
                     <p className="text-sm text-muted-foreground mt-4">Contact HR: <a href="mailto:hr@emphz.com" className="text-accent">hr@emphz.com</a></p>
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
