
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, HelpCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const supportServices = [
    "Installation guidance",
    "Warranty claims",
    "Product performance assistance",
    "Spare parts request",
    "Technical clarifications",
];

export default function SupportPage() {
    return (
        <>
            <SiteHeader />
            <main className="container max-w-4xl py-12 md:py-20">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">Support Request</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                           Operational support for existing clients and field users for faster issue resolution with trackable service workflows.
                        </p>
                    </div>
                </ScrollReveal>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ScrollReveal delay={200}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-3">
                                    <HelpCircle className="h-7 w-7 text-accent" />
                                    Submit a Support Ticket
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="product-id">Product ID / Model</Label>
                                    <Input id="product-id" placeholder="e.g., ENCL-1024" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="issue">Issue Description</Label>
                                    <Textarea id="issue" placeholder="Describe the issue in detail" />
                                </div>
                                 <div className="space-y-2">
                                    <Label htmlFor="files">Upload Photos/Files</Label>
                                    <Input id="files" type="file" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="site-location">Site Location</Label>
                                    <Input id="site-location" placeholder="City, Country" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="support-pref">Support Preference</Label>
                                    <Select>
                                        <SelectTrigger id="support-pref">
                                            <SelectValue placeholder="Select preference" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="call">Phone Call</SelectItem>
                                            <SelectItem value="email">Email</SelectItem>
                                            <SelectItem value="visit">Site Visit</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button className="w-full">Submit Request</Button>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={300}>
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Support Services</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {supportServices.map(service => (
                                        <li key={service} className="flex items-start gap-3 text-muted-foreground">
                                            <CheckCircle className="h-5 w-5 mt-1 text-accent" />
                                            <span>{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
