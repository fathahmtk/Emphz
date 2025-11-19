
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Globe, MapPin } from "lucide-react";

const regionalCoverage = [
    "UAE",
    "GCC",
    "MENA",
    "Expansion territories",
];

export default function LocationsPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                 <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Our Locations</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           A detailed overview of manufacturing facilities, offices, and distribution coverage.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <ScrollReveal delay={200}>
                        <Card className="h-full">
                            <CardHeader className="flex-row items-center gap-4">
                                <MapPin className="h-8 w-8 text-accent" />
                                <CardTitle className="font-headline text-2xl">Corporate Office</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">01 10/1133, near Government Hospital Road, Nut Street, Vatakara, Kerala 673104, India</p>
                                <p className="text-sm text-muted-foreground mt-2">Visitor & Safety Guidelines Apply</p>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                     <ScrollReveal delay={300}>
                        <Card className="h-full">
                            <CardHeader className="flex-row items-center gap-4">
                                <Factory className="h-8 w-8 text-accent" />
                                <CardTitle className="font-headline text-2xl">Manufacturing Facility</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">260/A, Meenakunte, Hebbal Industrial Estate, Hebbal Industrial Area, Mysuru, Karnataka 570016, India</p>
                                <p className="text-sm text-muted-foreground mt-2">Capacity: 50,000 units/year</p>
                                <p className="text-sm text-muted-foreground">Warehouse & Dispatch: Sun-Thu, 7am-4pm</p>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                </div>
                 <ScrollReveal delay={400} className="mt-12">
                        <Card>
                            <CardHeader className="flex-row items-center gap-4">
                                <Globe className="h-8 w-8 text-accent" />
                                <CardTitle className="font-headline text-2xl">Regional Coverage</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-4">
                                {regionalCoverage.map(region => (
                                    <div key={region} className="p-3 bg-secondary rounded-md text-secondary-foreground font-medium">{region}</div>
                                ))}
                            </CardContent>
                        </Card>
                    </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
