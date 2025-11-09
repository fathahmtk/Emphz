import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/componentsui/card";
import { Factory, LocateFixed, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Emphz team. Contact us for quotes, technical support, or partnership opportunities. Find our office and factory locations.",
};

const locations = [
  {
    icon: LocateFixed,
    title: "Head Office",
    address: "123 Innovation Drive, Metropolis, USA 12345",
    image: "https://picsum.photos/seed/office/600/400",
    imageHint: "office building"
  },
  {
    icon: Factory,
    title: "Manufacturing Plant",
    address: "456 Industrial Ave, Tecumseh, USA 67890",
    image: "https://picsum.photos/seed/bigfactory/600/400",
    imageHint: "factory exterior"
  },
];

export default function ContactPage() {
  return (
    <div className="bg-primary/5">
      <div className="container max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              We're here to help. Reach out with questions, quote requests, or to discuss your next project.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <ScrollReveal delay={200} className="lg:col-span-3">
            <ContactForm />
          </ScrollReveal>
          <ScrollReveal delay={400} className="lg:col-span-2 space-y-8">
            <Card className="bg-card/80">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>contact@emphz.com</span>
                </div>
              </CardContent>
            </Card>
            
            {locations.map((loc, i) => (
              <Card key={i} className="bg-card/80 overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={loc.image} alt={loc.title} data-ai-hint={loc.imageHint} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <loc.icon className="w-6 h-6 text-accent" />
                    {loc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{loc.address}</p>
                   <a href="#" className="text-sm text-accent font-semibold mt-2 inline-block">View on Google Maps</a>
                </CardContent>
              </Card>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
