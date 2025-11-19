
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { GlassCard } from "./glass-card";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Submit Inquiry"}
    </Button>
  );
}

const productCategories = [
    "GRP Electrical Enclosures",
    "GRP Portable Toilets",
    "GRP Modular Kiosks",
    "GRP Security Cabins",
    "GRP Resort Villas & Pods",
    "Custom GRP Fabrication",
    "Other"
];

export function ContactForm() {
  const initialState = { status: "idle" as const, message: "" };
  const [state, formAction] = useFormState(submitContactForm, initialState);
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
        <AlertTitle>Submission Successful!</AlertTitle>
        <AlertDescription>
          <p>{state.message}</p>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Submit Inquiry</CardTitle>
        <CardDescription>Our technical engineering team will review your requirements and respond promptly.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" name="company" placeholder="ACME Inc." required/>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXXXXX" required />
            </div>
          </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input id="industry" name="industry" placeholder="e.g., Power Generation" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="product">Product of Interest</Label>
              <Select name="product">
                <SelectTrigger id="product">
                    <SelectValue placeholder="Select a product category" />
                </SelectTrigger>
                <SelectContent>
                    {productCategories.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" name="quantity" type="number" placeholder="e.g., 100" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="location">Project Location</Label>
                <Input id="location" name="location" placeholder="City, State" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiry">Description / Requirements</Label>
            <Textarea id="inquiry" name="inquiry" placeholder="Please describe your requirements in detail..." required minLength={10} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="file-upload">Upload RFQ / CAD / BOQ</Label>
            <Input id="file-upload" name="file-upload" type="file" className="pt-2"/>
            <p className="text-xs text-muted-foreground">Max file size: 5MB. Allowed types: PDF, DWG, DOCX, XLSX.</p>
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
