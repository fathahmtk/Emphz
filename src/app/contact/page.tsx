
'use client';

import { useState } from "react";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JobApplicationForm } from "@/components/job-application-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
    const bgImage = PlaceHolderImages.find(p => p.id === 'office-location');
    const [activeTab, setActiveTab] = useState("inquiry");

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="relative isolate min-h-screen">
            {bgImage && (
                <div className="absolute inset-0 -z-10 h-full w-full">
                    <Image
                        src={bgImage.imageUrl}
                        alt={bgImage.description}
                        data-ai-hint={bgImage.imageHint}
                        quality={100}
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
                </div>
            )}
          <div className="container px-4 md:px-6 py-24 md:py-32">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                    {activeTab === 'inquiry' ? 'Request Quotation or Schedule Site Visit' : 'Join Our Team'}
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-foreground/80 md:text-lg">
                  {activeTab === 'inquiry' 
                    ? 'Our teams in Mysore and Kerala are ready to assist with your project requirements.' 
                    : 'We are always looking for talented individuals to join our manufacturing and operations teams.'}
                </p>
              </div>
            </ScrollReveal>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 max-w-sm mx-auto mb-8 bg-card/80 backdrop-blur-sm">
                    <TabsTrigger value="inquiry">Submit Inquiry</TabsTrigger>
                    <TabsTrigger value="careers">Apply for a Job</TabsTrigger>
                </TabsList>
                <TabsContent value="inquiry">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        <ScrollReveal delay={200} className="lg:col-span-3">
                            <ContactForm />
                        </ScrollReveal>
                        <ScrollReveal delay={400} className="lg:col-span-2 space-y-8">
                           <Card className="bg-card/90 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Contact Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground">
                                <a href="tel:+91XXXXXXXX" className="flex items-center gap-4 hover:text-primary transition-colors">
                                <Phone className="w-5 h-5 text-primary" />
                                <span>+91 XXXXXXXX</span>
                                </a>
                                <a href="mailto:info@emphz.com" className="flex items-center gap-4 hover:text-primary transition-colors">
                                <Mail className="w-5 h-5 text-primary" />
                                <span>info@emphz.com</span>
                                </a>
                                <a href="https://wa.me/91XXXXXXXX" className="flex items-center gap-4 hover:text-primary transition-colors">
                                <MessageSquare className="w-5 h-5 text-primary" />
                                <span>WhatsApp: +91 XXXXXXXX</span>
                                </a>
                            </CardContent>
                            </Card>
                            <Card className="bg-card/90 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Locations</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">Factory (Manufacturing Unit)</h4>
                                        <p className="text-muted-foreground">Mysore, Karnataka</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-foreground">Kerala Operations Office</h4>
                                        <p className="text-muted-foreground">[Add Kerala office location]</p>
                                    </div>
                                </div>
                            </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </TabsContent>
                <TabsContent value="careers">
                     <ScrollReveal delay={200}>
                        <JobApplicationForm />
                    </ScrollReveal>
                </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
