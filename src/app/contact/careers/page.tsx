
'use client';

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFormStatus, useFormState } from "react-dom";
import { useEffect } from "react";
import { submitJobApplication } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";


const jobListings = {
    "Engineering": ["Composite Engineer", "Mechanical Designer"],
    "Production": ["Factory Supervisor", "Moulding Technician"],
    "QA/QC": ["Quality Inspector"],
    "Sales & BD": ["Technical Sales Engineer"],
    "Operations": ["Logistics Coordinator"]
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Submit Application"}
    </Button>
  );
}

function JobApplicationForm() {
    const initialState = { status: "idle" as const, message: "" };
    const [state, formAction] = useFormState(submitJobApplication, initialState);
    const { toast } = useToast();

    useEffect(() => {
        if (state.status === "error") {
            toast({
                variant: "destructive",
                title: "Submission Failed",
                description: state.message,
            });
        }
    }, [state, toast]);

    if (state.status === "success") {
        return (
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Application Submitted!</AlertTitle>
                <AlertDescription>
                    <p>{state.message}</p>
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <Card id="application-form">
            <CardHeader>
                <CardTitle className="text-2xl font-headline">Submit Your Application</CardTitle>
                <CardDescription>Upload your CV and we'll contact you for relevant openings.</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={formAction} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+1-555-123-4567" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="position">Position of Interest (Optional)</Label>
                        <Input id="position" name="position" placeholder="e.g., Composite Engineer" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="cv">Upload CV/Resume</Label>
                        <Input id="cv" name="cv" type="file" required className="pt-2" />
                        <p className="text-xs text-muted-foreground">Max file size: 5MB. Allowed types: PDF, DOC, DOCX.</p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="cover-letter">Cover Letter (Optional)</Label>
                        <Textarea id="cover-letter" name="cover-letter" placeholder="Briefly tell us why you're a good fit..." />
                    </div>
                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
    )
}

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
                                                <Button variant="outline" asChild>
                                                    <Link href="#application-form">Apply</Link>
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </ScrollReveal>
                
                <ScrollReveal delay={300} className="mt-12">
                   <JobApplicationForm />
                </ScrollReveal>
            </main>
            <SiteFooter />
        </>
    );
}
