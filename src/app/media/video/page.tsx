
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Video } from "lucide-react";

const videoItems = [
    {
        title: "Virtual Factory Tour: See Our GRP Process in Action",
        description: "A behind-the-scenes look at our advanced manufacturing facility, showcasing the precision and quality that goes into every EMPHZ product.",
        videoId: "dQw4w9WgXcQ" // Placeholder YouTube video ID
    },
    {
        title: "The GRP Advantage: Why Composites Outperform Metal",
        description: "Our lead engineer explains the material science behind GRP and why it's the superior choice for modern industrial applications.",
        videoId: "dQw4w9WgXcQ"
    },
];

export default function VideoPage() {
    return (
        <>
            <SiteHeader />
            <main className="container py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Video Library</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           Watch our videos to learn more about our manufacturing process, product features, and the GRP advantage.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {videoItems.map((item, index) => (
                        <ScrollReveal key={item.title} delay={index * 150}>
                            <Card>
                                <CardContent className="p-0">
                                     <div className="aspect-video overflow-hidden rounded-t-lg">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${item.videoId}`}
                                            title={item.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </CardContent>
                                <CardHeader>
                                    <div className="flex items-start gap-4">
                                        <Video className="h-6 w-6 mt-1 text-primary"/>
                                        <div>
                                            <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                                            <CardDescription>{item.description}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
