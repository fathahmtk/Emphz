
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

const newsItems = [
    {
        title: "EMPHZ Launches New Fire-Retardant Enclosure Line",
        date: "October 15, 2023",
        summary: "EMPHZ today announced a new line of advanced fire-retardant GRP enclosures, designed to meet the most stringent safety standards for industrial and hazardous environments. The new products offer superior protection for critical electrical and instrumentation systems.",
    },
    {
        title: "Strategic Partnership with Major Utility Provider",
        date: "September 5, 2023",
        summary: "EMPHZ has entered into a strategic partnership to supply a regional utility provider with custom-engineered GRP enclosures for their grid modernization project. This collaboration underscores our commitment to supporting critical infrastructure.",
    },
    {
        title: "EMPHZ Expands Manufacturing Capacity",
        date: "July 20, 2023",
        summary: "To meet growing demand, EMPHZ has completed a major expansion of its manufacturing facility. The new line will increase production capacity by 40% and features state-of-the-art automation for enhanced quality and efficiency.",
    }
];

export default function NewsPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">News & Announcements</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           Stay informed on our latest product innovations, project milestones, and company news.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {newsItems.map((item, index) => (
                        <ScrollReveal key={item.title} delay={index * 150}>
                            <Card className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="flex items-start gap-4">
                                        <Newspaper className="h-6 w-6 mt-1 text-primary"/>
                                        <div>
                                            <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                                            <CardDescription>{item.date}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.summary}</p>
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
